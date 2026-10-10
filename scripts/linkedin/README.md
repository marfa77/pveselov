# LinkedIn post images

1080×1350 (4:5). Every number and its source is typeset in HTML, never drawn by an image model.

- `b-light-diagram.html` — default: light, takeaway readable in the feed (chart, steps, questions).
- `a-number-card.html` — dark card for a post built on one number.
- `d-hybrid.html` — occasional: model illustration (`illustration.jpg`, empty top third, no text) + typeset headline and source.

Illustrations: Nano Banana Pro (`google/gemini-3-pro-image`) via OpenRouter, with a previous illustration as style reference. Flat editorial, navy `#0f172a`, slate, one amber `#f59e0b` accent. No photoreal people, robots or glowing brains.

Render:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars \
  --allow-file-access-from-files --window-size=1080,1350 --screenshot=out.png file://$PWD/b-light-diagram.html
```
