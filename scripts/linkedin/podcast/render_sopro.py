#!/usr/bin/env python3
"""Render playbook podcast episodes with CIPLE Sopro worker (:8766)."""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SCRIPTS = ROOT / "scripts"
AUDIO = ROOT / "audio"
PUBLIC_AUDIO = ROOT.parents[2] / "public" / "podcast" / "audio"
VOICES = ROOT / "voices"
SOPRO_URL = "http://127.0.0.1:8766"
REF = "en-man.wav"
LANG = "en"
MAX_CHARS = 420

EPISODES = [
    (1, "ep01-youre-the-one-they-asked.md", "ep01-youre-the-one-they-asked"),
    (2, "ep02-look-before-you-buy.md", "ep02-look-before-you-buy"),
    (3, "ep03-pick-a-few-fights.md", "ep03-pick-a-few-fights"),
    (4, "ep04-change-the-work-not-the-slide.md", "ep04-change-the-work-not-the-slide"),
    (5, "ep05-treat-agents-like-people-you-hired.md", "ep05-treat-agents-like-people-you-hired"),
    (6, "ep06-talk-to-finance-in-their-language.md", "ep06-talk-to-finance-in-their-language"),
    (7, "ep07-scale-only-what-survives.md", "ep07-scale-only-what-survives"),
    (8, "ep08-when-the-experts-disagree.md", "ep08-when-the-experts-disagree"),
    (9, "ep09-your-first-ninety-days.md", "ep09-your-first-ninety-days"),
    (10, "ep10-one-company-start-to-finish.md", "ep10-one-company-start-to-finish"),
]


def spoken_text(md: Path) -> str:
    raw = md.read_text(encoding="utf-8")
    m = re.search(r"## Spoken\s*\n(.*)", raw, re.S)
    if not m:
        raise SystemExit(f"No ## Spoken in {md}")
    body = m.group(1).strip()
    body = re.sub(r"\n{3,}", "\n\n", body)
    return body


def chunks(text: str) -> list[str]:
    paras = [p.strip().replace("\n", " ") for p in re.split(r"\n\s*\n", text) if p.strip()]
    out: list[str] = []
    for p in paras:
        if len(p) <= MAX_CHARS:
            out.append(p)
            continue
        buf = ""
        for sent in re.split(r"(?<=[.!?])\s+", p):
            if not sent:
                continue
            if buf and len(buf) + 1 + len(sent) > MAX_CHARS:
                out.append(buf)
                buf = sent
            else:
                buf = f"{buf} {sent}".strip() if buf else sent
        if buf:
            out.append(buf)
    return out


def health() -> bool:
    try:
        with urllib.request.urlopen(f"{SOPRO_URL}/health", timeout=2) as r:
            return r.status == 200
    except Exception:
        return False


def synth(text: str, out_wav: Path) -> None:
    payload = json.dumps({"text": text, "ref": REF, "lang": LANG, "out": str(out_wav)}).encode()
    req = urllib.request.Request(
        f"{SOPRO_URL}/synth",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=600) as r:
        body = json.loads(r.read().decode())
    if not body.get("ok"):
        raise RuntimeError(body)


def render_one(num: int, md_name: str, stem: str, force: bool) -> Path:
    md = SCRIPTS / md_name
    out_mp3 = AUDIO / f"{stem}.mp3"
    pub_mp3 = PUBLIC_AUDIO / f"{stem}.mp3"
    if out_mp3.exists() and pub_mp3.exists() and not force:
        print(f"[ep{num:02d}] skip (exists)")
        return pub_mp3

    text = spoken_text(md)
    parts = chunks(text)
    work = AUDIO / f"_work_{stem}"
    work.mkdir(parents=True, exist_ok=True)
    AUDIO.mkdir(parents=True, exist_ok=True)
    PUBLIC_AUDIO.mkdir(parents=True, exist_ok=True)

    print(f"[ep{num:02d}] {len(parts)} chunks, {len(text.split())} words")
    wavs: list[Path] = []
    for i, ch in enumerate(parts, 1):
        wav = work / f"{i:03d}.wav"
        if wav.exists() and not force:
            print(f"  chunk {i}/{len(parts)} cached")
        else:
            print(f"  chunk {i}/{len(parts)} synth…")
            synth(ch, wav)
        wavs.append(wav)

    list_file = work / "concat.txt"
    list_file.write_text("".join(f"file '{w.resolve()}'\n" for w in wavs), encoding="utf-8")
    wav_all = work / "all.wav"
    subprocess.run(
        ["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(list_file), "-c", "copy", str(wav_all)],
        check=True,
        capture_output=True,
    )
    subprocess.run(
        ["ffmpeg", "-y", "-i", str(wav_all), "-codec:a", "libmp3lame", "-qscale:a", "5", str(out_mp3)],
        check=True,
        capture_output=True,
    )
    pub_mp3.write_bytes(out_mp3.read_bytes())
    print(f"[ep{num:02d}] → {pub_mp3} ({pub_mp3.stat().st_size // 1024} KB)")
    return pub_mp3


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--ep", type=int, help="Episode number 1-10")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--force", action="store_true")
    args = ap.parse_args()

    if not (VOICES / REF).exists():
        raise SystemExit(f"Missing voice ref {VOICES / REF}")
    if not health():
        raise SystemExit("Sopro worker not up on :8766 — start CIPLE sopro_worker.py first")

    # Worker loads refs from its own voices dir; ensure en-man.wav name matches.
    selected = EPISODES if args.all else [e for e in EPISODES if e[0] == args.ep]
    if not selected:
        raise SystemExit("Pass --ep N or --all")

    for num, md_name, stem in selected:
        t0 = time.time()
        render_one(num, md_name, stem, args.force)
        print(f"[ep{num:02d}] done in {time.time() - t0:.0f}s")


if __name__ == "__main__":
    main()
