# Voice for the playbook podcast

We do **not** clone living hosts. We copy the *job* their voice does for a CIO listener, then pick an open Sopro reference that sits in that lane.

## Who sets the bar in this niche

| Host | Show | Why it works for IT directors |
|------|------|-------------------------------|
| **Sam Ransbotham** | MIT SMR — *Me, Myself, and AI* | Separates hype from value; warm academic-peer; curious, never salesy. Closest to our playbook tone. |
| **Tim Crawford** | *CIO In The Know* | Sounds like a peer advisor in the room with other CIOs; practical, calm, no theatre. |
| **Peter High** | *Technovation* (Metis) | Polished executive pace; clear; board-safe. Slightly more formal — use as ceiling, not default. |
| **Cindi Howson** | ThoughtSpot data/AI leadership | Warm, expert, inviting — the best female lane if we ever run a co-host or RU alternate. |

Also heard, not the target: Hard Fork energy (too media), Lex-length monologues (too long), vendor keynote boom (too cold).

## Target vocal profile (blend)

Primary blend: **Ransbotham warmth + Crawford peer calm**.

- Mid male register (or Cindi-lane female if we split a second track later)
- Pace ~145–155 words/min — unhurried guide, not newsreader
- Clear consonants; soft smile in the voice; short pauses after “this week, do this”
- Authority without swagger; never shout, never whisper-ASMR
- International-friendly English (Pavel’s world: Dubai / Europe listeners)

Script writing follows the same hosts: one concrete scene, then the how-to, then a small next step — not a PDF with a microphone.

## Sopro reference (what we use)

| Role | File | Why |
|------|------|-----|
| **Default host** | `voices/en-man.wav` → CIPLE `en-man.wav` | Closest open ref we have to the Ransbotham/Crawford lane: steady male, intelligible, not theatrical. |
| Alt / RU later | `voices/en-woman.wav` | Cindi Howson lane if we want a second host colour. |

Render flag: `--voice en-man` (default).

## Upgrade path (if en-man feels too “audiobook”)

1. Record **30–45 s** of clean speech yourself in the target tone (warm peer, not broadcast), or
2. Pick a **LibriVox / CC** clip with the same profile (mid, warm, clear) and drop it in as `voices/host-cio.wav`,
3. Point `render_sopro.py` at that ref.

Still never: downloading a Sam Ransbotham or Tim Crawford episode as the clone reference.
