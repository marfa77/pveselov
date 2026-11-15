# Building AI in the Enterprise — Podcast Series

Source: https://pveselov.space/ai  
Audience: CIOs / IT directors / heads of IT who have been told to “do something with AI”.  
Form: a warm, practical guide — a senior peer walking you through how to actually run this, not a whitepaper read aloud and not a hype show.  
Detail: enough that after ten episodes you can run the work without guessing. Checklists appear as natural “this week, do this” moments inside the story, not as a cold inventory.  
TTS: Sopro, default `en-man` — see `VOICE.md` (Ransbotham + Crawford lane, not a celebrity clone). English first. Russian later (YouTube / Telegram only).

## Voice

- Warm, direct, peer-to-peer. Like a coffee with another Head of IT who has already burned a few pilots.
- Useful: every episode leaves you able to act the same week.
- Interesting: one concrete scene or tension per episode (the board ask, the shadow ChatGPT, the invoice nobody owns).
- Honest gaps and source attribution when a number appears.
- No guru tone, no “unlock”, no triad poetry.

## Arc (general → specific)

| # | Title | You leave able to… |
|---|--------|--------------------|
| 01 | You’re the one they asked | See the whole job and why the old approach fails |
| 02 | Look before you buy | Find real spend, shadow AI, dead licenses, weak pilots |
| 03 | Pick a few fights | Choose 3–5 domains that can win |
| 04 | Change the work, not the slide | Rebuild a workflow with the people who do it |
| 05 | Treat agents like people you hired | Put ownership and controls before autonomy |
| 06 | Talk to finance in their language | Measure outcomes, cost, retention, tokens |
| 07 | Scale only what survives | Run one program and a real scale gate |
| 08 | When the experts disagree | Hold a clear CIO position on the messy debates |
| 09 | Your first ninety days | Walk a calendar from week 1 to month 3 |
| 10 | One company, start to finish | Apply the whole guide on a single made-up but realistic firm |

## Render

```bash
# CIPLE Sopro worker on :8766, then:
python3 render_sopro.py --ep 1
python3 render_sopro.py --all
```
