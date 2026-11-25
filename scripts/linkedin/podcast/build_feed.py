#!/usr/bin/env python3
"""Write public/podcast/feed.xml from AI + Security episode audio."""

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
HUB = f"{SITE}/podcast"
FEED_URL = f"{SITE}/podcast/feed.xml"

# (feed_episode_num, season, season_ep, title, stem, pub_iso, summary, playbook_url)
EPISODES = [
    # Season 1 — AI
    (1, 1, 1, "You're the one they asked", "ep01-youre-the-one-they-asked", "2026-11-15T10:00:00Z",
     "Someone asked you to do something with AI. Here is the real job for an IT director.", f"{SITE}/ai"),
    (2, 1, 2, "Look before you buy", "ep02-look-before-you-buy", "2026-11-17T10:00:00Z",
     "Find spend, shadow AI, dead licences, and pilots that should stop.", f"{SITE}/ai"),
    (3, 1, 3, "Pick a few fights", "ep03-pick-a-few-fights", "2026-11-19T10:00:00Z",
     "Choose three to five domains where AI can be checked and absorbed.", f"{SITE}/ai"),
    (4, 1, 4, "Change the work, not the slide", "ep04-change-the-work-not-the-slide", "2026-11-21T10:00:00Z",
     "Rebuild workflows with the people who do them.", f"{SITE}/ai"),
    (5, 1, 5, "Treat agents like people you hired", "ep05-treat-agents-like-people-you-hired", "2026-11-24T10:00:00Z",
     "Six controls and a human owner before autonomy.", f"{SITE}/ai"),
    (6, 1, 6, "Talk to finance in their language", "ep06-talk-to-finance-in-their-language", "2026-11-26T10:00:00Z",
     "Outcomes, cost per transaction, retention, tokens.", f"{SITE}/ai"),
    (7, 1, 7, "Scale only what survives", "ep07-scale-only-what-survives", "2026-11-28T10:00:00Z",
     "One program and a hard scale gate.", f"{SITE}/ai"),
    (8, 1, 8, "When the experts disagree", "ep08-when-the-experts-disagree", "2026-12-01T10:00:00Z",
     "Clear CIO positions when good research pulls both ways.", f"{SITE}/ai"),
    (9, 1, 9, "Your first ninety days", "ep09-your-first-ninety-days", "2026-12-03T10:00:00Z",
     "A calendar from week one to month three.", f"{SITE}/ai"),
    (10, 1, 10, "One company, start to finish", "ep10-one-company-start-to-finish", "2026-12-05T10:00:00Z",
     "Walk one realistic firm through the AI guide.", f"{SITE}/ai"),
    # Season 2 — Security
    (11, 2, 1, "You own security now", "sec01-you-own-security-now", "2026-11-15T12:00:00Z",
     "No separate CISO — here is the real security job for a Head of IT.", f"{SITE}/security"),
    (12, 2, 2, "Know what you own", "sec02-know-what-you-own", "2026-11-16T12:00:00Z",
     "Inventory, crown jewels, shadow IT, and a baseline you can show upstairs.", f"{SITE}/security"),
    (13, 2, 3, "Identity is the perimeter", "sec03-identity-is-the-perimeter", "2026-11-17T12:00:00Z",
     "MFA, privilege, joiners and leavers, and keys that are not people.", f"{SITE}/security"),
    (14, 2, 4, "Harden what users touch", "sec04-harden-what-users-touch", "2026-11-18T12:00:00Z",
     "Endpoints, DMARC, phishing paths, and BEC with finance.", f"{SITE}/security"),
    (15, 2, 5, "Harden what attackers love", "sec05-harden-what-attackers-love", "2026-11-19T12:00:00Z",
     "Patch SLAs, ransomware-ready backups, segmentation, remote access.", f"{SITE}/security"),
    (16, 2, 6, "Cloud, SaaS, and the supply chain", "sec06-cloud-saas-supply-chain", "2026-11-20T12:00:00Z",
     "Misconfigs, OAuth, vendors, and domains as attack surface.", f"{SITE}/security"),
    (17, 2, 7, "Detect without theatre", "sec07-detect-without-theatre", "2026-11-21T12:00:00Z",
     "Logs, alerts someone sees, ATT&CK on purpose, light hunting.", f"{SITE}/security"),
    (18, 2, 8, "Respond and recover", "sec08-respond-and-recover", "2026-11-22T12:00:00Z",
     "IR plan, ransomware runbook, tabletop, restore with a stopwatch.", f"{SITE}/security"),
    (19, 2, 9, "Prove it — and your first ninety days", "sec09-prove-it-ninety-days", "2026-11-23T12:00:00Z",
     "Board metrics, control tests, and a ninety-day rhythm.", f"{SITE}/security"),
    (20, 2, 10, "One company under fire", "sec10-one-company-under-fire", "2026-11-24T12:00:00Z",
     "Walk one realistic firm through the whole security guide.", f"{SITE}/security"),
]


def rfc2822(iso: str) -> str:
    dt = datetime.fromisoformat(iso.replace("Z", "+00:00"))
    return email.utils.format_datetime(dt.astimezone(timezone.utc))


def duration_sec(mp3: Path) -> int:
    try:
        import subprocess

        out = subprocess.check_output(
            [
                "ffprobe",
                "-v",
                "error",
                "-show_entries",
                "format=duration",
                "-of",
                "default=noprint_wrappers=1:nokey=1",
                str(mp3),
            ],
            text=True,
        ).strip()
        return int(float(out))
    except Exception:
        return 0


def main() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)
    items = []
    for feed_n, season, season_ep, title, stem, pub, summary, playbook in EPISODES:
        mp3 = AUDIO / f"{stem}.mp3"
        if not mp3.exists():
            print(f"skip {stem} (no audio)")
            continue
        length = mp3.stat().st_size
        dur = duration_sec(mp3)
        audio_url = f"{SITE}/podcast/audio/{stem}.mp3"
        if stem == "ep01-youre-the-one-they-asked":
            audio_url += "?v=2026-11-25"
        ep_url = f"{HUB}#{stem}"
        season_label = "AI" if season == 1 else "Security"
        desc = (
            f"{summary} Season {season} ({season_label}). "
            f"Full written checklist: {playbook}. "
            f"Show hub: {HUB}. "
            f"Come build with the playbooks at {SITE}/ai and {SITE}/security."
        )
        display_title = f"S{season}E{season_ep:02d}. {title}"
        items.append(
            f"""    <item>
      <title>{escape(display_title)}</title>
      <link>{escape(ep_url)}</link>
      <guid isPermaLink="false">urn:pveselov:playbooks:ep:{feed_n}</guid>
      <pubDate>{rfc2822(pub)}</pubDate>
      <description>{escape(desc)}</description>
      <enclosure url="{escape(audio_url)}" length="{length}" type="audio/mpeg"/>
      <itunes:title>{escape(title)}</itunes:title>
      <itunes:summary>{escape(desc)}</itunes:summary>
      <itunes:author>Pavel Veselov</itunes:author>
      <itunes:duration>{dur}</itunes:duration>
      <itunes:season>{season}</itunes:season>
      <itunes:episode>{season_ep}</itunes:episode>
      <itunes:explicit>false</itunes:explicit>
    </item>"""
        )

    channel_desc = (
        "Warm, practical guides for CIOs and Heads of IT. "
        f"Season 1: Building AI in the Enterprise — checklist at {SITE}/ai. "
        f"Season 2: Securing the Enterprise — checklist at {SITE}/security. "
        f"Show hub: {HUB}."
    )
    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Enterprise IT Playbooks with Pavel Veselov</title>
    <link>{HUB}</link>
    <atom:link href="{FEED_URL}" rel="self" type="application/rss+xml"/>
    <description>{escape(channel_desc)}</description>
    <language>en</language>
    <copyright>Pavel Veselov</copyright>
    <managingEditor>pveselov@me.com (Pavel Veselov)</managingEditor>
    <itunes:author>Pavel Veselov</itunes:author>
    <itunes:summary>{escape(channel_desc)}</itunes:summary>
    <itunes:owner>
      <itunes:name>Pavel Veselov</itunes:name>
      <itunes:email>pveselov@me.com</itunes:email>
    </itunes:owner>
    <itunes:category text="Technology"/>
    <itunes:category text="Business"/>
    <itunes:explicit>false</itunes:explicit>
    <itunes:type>serial</itunes:type>
    <image>
      <url>{SITE}/og-image.png</url>
      <title>Enterprise IT Playbooks with Pavel Veselov</title>
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
