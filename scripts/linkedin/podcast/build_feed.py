#!/usr/bin/env python3
"""Write public/podcast/feed.xml from episode audio on disk."""

from __future__ import annotations

import email.utils
from datetime import datetime, timezone
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parent
PUBLIC = ROOT.parents[2] / "public" / "podcast"
AUDIO = PUBLIC / "audio"
FEED = PUBLIC / "feed.xml"
SITE = "https://pveselov.space"
HUB = f"{SITE}/ai/podcast"
PLAYBOOK = f"{SITE}/ai"
FEED_URL = f"{SITE}/podcast/feed.xml"

EPISODES = [
    (1, "You're the one they asked", "ep01-youre-the-one-they-asked", "2026-11-15T10:00:00Z",
     "Someone asked you to do something with AI. Here is the real job for an IT director."),
    (2, "Look before you buy", "ep02-look-before-you-buy", "2026-11-17T10:00:00Z",
     "Find spend, shadow AI, dead licences, and pilots that should stop."),
    (3, "Pick a few fights", "ep03-pick-a-few-fights", "2026-11-19T10:00:00Z",
     "Choose three to five domains where AI can be checked and absorbed."),
    (4, "Change the work, not the slide", "ep04-change-the-work-not-the-slide", "2026-11-21T10:00:00Z",
     "Rebuild workflows with the people who do them."),
    (5, "Treat agents like people you hired", "ep05-treat-agents-like-people-you-hired", "2026-11-24T10:00:00Z",
     "Six controls and a human owner before autonomy."),
    (6, "Talk to finance in their language", "ep06-talk-to-finance-in-their-language", "2026-11-26T10:00:00Z",
     "Outcomes, cost per transaction, retention, tokens."),
    (7, "Scale only what survives", "ep07-scale-only-what-survives", "2026-11-28T10:00:00Z",
     "One program and a hard scale gate."),
    (8, "When the experts disagree", "ep08-when-the-experts-disagree", "2026-12-01T10:00:00Z",
     "Clear CIO positions when good research pulls both ways."),
    (9, "Your first ninety days", "ep09-your-first-ninety-days", "2026-12-03T10:00:00Z",
     "A calendar from week one to month three."),
    (10, "One company, start to finish", "ep10-one-company-start-to-finish", "2026-12-05T10:00:00Z",
     "Walk one realistic firm through the whole guide."),
]


def rfc2822(iso: str) -> str:
    dt = datetime.fromisoformat(iso.replace("Z", "+00:00"))
    return email.utils.format_datetime(dt.astimezone(timezone.utc))


def duration_sec(mp3: Path) -> int:
    try:
        import subprocess

        out = subprocess.check_output(
            ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", str(mp3)],
            text=True,
        ).strip()
        return int(float(out))
    except Exception:
        return 0


def main() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)
    items = []
    for num, title, stem, pub, summary in EPISODES:
        mp3 = AUDIO / f"{stem}.mp3"
        if not mp3.exists():
            print(f"skip ep{num:02d} (no audio)")
            continue
        length = mp3.stat().st_size
        dur = duration_sec(mp3)
        audio_url = f"{SITE}/podcast/audio/{stem}.mp3"
        ep_url = f"{HUB}#{stem}"
        desc = (
            f"{summary} Full written checklist: {PLAYBOOK}. "
            f"Episode page: {HUB}. "
            f"Subscribe and share — then come build with the playbook at {PLAYBOOK}."
        )
        items.append(
            f"""    <item>
      <title>{escape(f'{num:02d}. {title}')}</title>
      <link>{escape(ep_url)}</link>
      <guid isPermaLink="false">urn:pveselov:ai-podcast:ep:{num}</guid>
      <pubDate>{rfc2822(pub)}</pubDate>
      <description>{escape(desc)}</description>
      <enclosure url="{escape(audio_url)}" length="{length}" type="audio/mpeg"/>
      <itunes:title>{escape(title)}</itunes:title>
      <itunes:summary>{escape(desc)}</itunes:summary>
      <itunes:author>Pavel Veselov</itunes:author>
      <itunes:duration>{dur}</itunes:duration>
      <itunes:episode>{num}</itunes:episode>
      <itunes:explicit>false</itunes:explicit>
    </item>"""
        )

    channel_desc = (
        "A warm, practical guide for CIOs and IT directors on how to build AI in organisations. "
        f"Ten episodes from diagnose to scale. Free checklist and sources: {PLAYBOOK}. "
        f"Show hub: {HUB}."
    )
    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Building AI in the Enterprise</title>
    <link>{HUB}</link>
    <atom:link href="{FEED_URL}" rel="self" type="application/rss+xml"/>
    <description>{escape(channel_desc)}</description>
    <language>en</language>
    <copyright>Pavel Veselov</copyright>
    <managingEditor>pv.inform@gmail.com (Pavel Veselov)</managingEditor>
    <itunes:author>Pavel Veselov</itunes:author>
    <itunes:summary>{escape(channel_desc)}</itunes:summary>
    <itunes:owner>
      <itunes:name>Pavel Veselov</itunes:name>
      <itunes:email>pv.inform@gmail.com</itunes:email>
    </itunes:owner>
    <itunes:category text="Technology"/>
    <itunes:category text="Business"/>
    <itunes:explicit>false</itunes:explicit>
    <itunes:type>serial</itunes:type>
    <image>
      <url>{SITE}/og-image.png</url>
      <title>Building AI in the Enterprise</title>
      <link>{HUB}</link>
    </image>
    <itunes:image href="{SITE}/og-image.png"/>
{chr(10).join(items)}
  </channel>
</rss>
"""
    FEED.write_text(xml, encoding="utf-8")
    print(f"wrote {FEED} ({len(items)} episodes)")


if __name__ == "__main__":
    main()
