#!/usr/bin/env python3
"""Render episodes using CIPLE Sopro venv inline (no HTTP worker)."""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SCRIPTS = ROOT / "scripts"
AUDIO = ROOT / "audio"
PUBLIC_AUDIO = ROOT.parents[2] / "public" / "podcast" / "audio"
CIPLE = Path("/Users/pavelveselov/Projects/CIPLE A2/ciple-master")
VENV_PY = CIPLE / "scripts/podcast/.venv-sopro/bin/python"
REF_WAV = CIPLE / "scripts/podcast/voices/sopro/en-man.wav"
MAX_CHARS = 420

AI_EPISODES = [
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

SEC_EPISODES = [
    (1, "sec01-you-own-security-now.md", "sec01-you-own-security-now"),
    (2, "sec02-know-what-you-own.md", "sec02-know-what-you-own"),
    (3, "sec03-identity-is-the-perimeter.md", "sec03-identity-is-the-perimeter"),
    (4, "sec04-harden-what-users-touch.md", "sec04-harden-what-users-touch"),
    (5, "sec05-harden-what-attackers-love.md", "sec05-harden-what-attackers-love"),
    (6, "sec06-cloud-saas-supply-chain.md", "sec06-cloud-saas-supply-chain"),
    (7, "sec07-detect-without-theatre.md", "sec07-detect-without-theatre"),
    (8, "sec08-respond-and-recover.md", "sec08-respond-and-recover"),
    (9, "sec09-prove-it-ninety-days.md", "sec09-prove-it-ninety-days"),
    (10, "sec10-one-company-under-fire.md", "sec10-one-company-under-fire"),
]


def spoken_text(md: Path) -> str:
    raw = md.read_text(encoding="utf-8")
    m = re.search(r"## Spoken\s*\n(.*)", raw, re.S)
    if not m:
        raise SystemExit(f"No ## Spoken in {md}")
    return re.sub(r"\n{3,}", "\n\n", m.group(1).strip())


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


DRIVER = r'''
import json, sys
from pathlib import Path
from sopro import SoproTTS

ref = sys.argv[1]
jobs = json.loads(sys.stdin.read())
print("loading sopro…", flush=True)
tts = SoproTTS.from_pretrained("samuel-vitorino/sopro-v2-turbo", device="cpu")
if hasattr(tts, "prepare_reference"):
    ref_obj = tts.prepare_reference(ref, stream=False)
else:
    ref_obj = ref
print("ready", flush=True)
for i, job in enumerate(jobs, 1):
    text, out = job["text"], job["out"]
    print(f"synth {i}/{len(jobs)}", flush=True)
    kwargs = {"lang": "en"}
    if isinstance(ref_obj, str):
        kwargs["ref_audio_path"] = ref_obj
    else:
        kwargs["ref"] = ref_obj
    wav = tts.synthesize(text, **kwargs)
    Path(out).parent.mkdir(parents=True, exist_ok=True)
    tts.save_wav(out, wav)
print("done", flush=True)
'''


def render_one(num: int, md_name: str, stem: str, force: bool) -> None:
    md = SCRIPTS / md_name
    out_mp3 = AUDIO / f"{stem}.mp3"
    pub_mp3 = PUBLIC_AUDIO / f"{stem}.mp3"
    if out_mp3.exists() and pub_mp3.exists() and not force:
        print(f"[ep{num:02d}] skip")
        return

    text = spoken_text(md)
    parts = chunks(text)
    work = AUDIO / f"_work_{stem}"
    work.mkdir(parents=True, exist_ok=True)
    AUDIO.mkdir(parents=True, exist_ok=True)
    PUBLIC_AUDIO.mkdir(parents=True, exist_ok=True)

    jobs = []
    for i, ch in enumerate(parts, 1):
        wav = work / f"{i:03d}.wav"
        if wav.exists() and not force:
            continue
        jobs.append({"text": ch, "out": str(wav)})

    print(f"[ep{num:02d}] {len(parts)} chunks, {len(jobs)} to synth, {len(text.split())} words")
    if jobs:
        import json

        proc = subprocess.run(
            [str(VENV_PY), "-c", DRIVER, str(REF_WAV)],
            input=json.dumps(jobs).encode(),
            capture_output=True,
        )
        sys.stdout.write(proc.stdout.decode())
        if proc.returncode != 0:
            sys.stderr.write(proc.stderr.decode())
            raise SystemExit(f"sopro failed for ep{num}")

    wavs = [work / f"{i:03d}.wav" for i in range(1, len(parts) + 1)]
    for w in wavs:
        if not w.exists():
            raise SystemExit(f"missing {w}")

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


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--ep", type=int)
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--season", choices=["ai", "security", "all"], default="all")
    ap.add_argument("--force", action="store_true")
    args = ap.parse_args()
    if not VENV_PY.exists():
        raise SystemExit(f"missing {VENV_PY}")
    pool = []
    if args.season in ("ai", "all"):
        pool.extend(("ai", e) for e in AI_EPISODES)
    if args.season in ("security", "all"):
        pool.extend(("sec", e) for e in SEC_EPISODES)
    if args.all:
        selected = pool
    elif args.ep:
        selected = [p for p in pool if p[1][0] == args.ep]
        if args.season == "all" and len(selected) > 1:
            raise SystemExit("Pass --season ai|security with --ep")
    else:
        raise SystemExit("Pass --ep N or --all")
    if not selected:
        raise SystemExit("No episodes matched")
    for label, (num, md_name, stem) in selected:
        t0 = time.time()
        render_one(num, md_name, stem, args.force)
        print(f"[{label}{num:02d}] wall {time.time() - t0:.0f}s")


if __name__ == "__main__":
    main()
