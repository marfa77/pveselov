#!/usr/bin/env python3
"""Typeset the AI Explained series cards. Numbers stay in HTML, never drawn by a model."""
from pathlib import Path

OUT = Path(__file__).resolve().parent / "visuals"
OUT.mkdir(exist_ok=True)

CSS = """
*{box-sizing:border-box;margin:0;padding:0}
body{width:1080px;height:__H__px;background:#fff;color:#111827;
 font-family:-apple-system,"SF Pro Display","Inter","Helvetica Neue",Arial,sans-serif;
 padding:36px 48px 24px;display:flex;flex-direction:column}
.kicker{font-size:15px;letter-spacing:.14em;text-transform:uppercase;color:#6b7280;font-weight:650}
h1{font-size:36px;line-height:1.08;font-weight:700;letter-spacing:-.025em;margin-top:8px}
.sub{font-size:20px;line-height:1.35;color:#4b5563;margin-top:10px}
.stage{flex:1;display:flex;flex-direction:column;justify-content:flex-start;gap:14px;margin-top:16px;min-height:0}
.stage > .split,.stage > .three,.stage > .meters,.stage > .cal,.stage > .chain,.stage > .weeks,.stage > .gate,.stage > .lock{flex:1;min-height:0}
.stage > .note,.stage > .legend,.stage > .sub{flex:none}
.foot{display:flex;justify-content:space-between;gap:16px;font-size:15px;color:#9ca3af;margin-top:12px}
.row{display:flex;align-items:center;gap:12px;flex:1}
.n{flex:none;width:36px;height:36px;border-radius:50%;border:2px solid #f59e0b;color:#b45309;
 font-weight:700;font-size:16px;display:flex;align-items:center;justify-content:center;background:#fff}
.card{border:2px solid #e5e7eb;background:#f8fafc;border-radius:12px;padding:8px 14px;flex:1}
.card b{display:block;font-size:18px}
.card span{display:block;font-size:15px;color:#6b7280;margin-top:1px}
.chain{display:flex;flex-direction:column;gap:8px;justify-content:stretch;height:100%}
.lbl{font-size:18px;color:#374151;margin-bottom:6px;display:flex;justify-content:space-between}
.lbl b{font-size:22px;color:#111827}
.barwrap{display:flex;flex-direction:column;gap:16px}
.barwrap > .track{flex:none;height:84px;display:flex;align-items:stretch;background:#f3f4f6;border-radius:12px;overflow:hidden}
.barwrap > div:not(.lbl):not(.track){display:flex;flex-direction:column;gap:8px}
.seg{height:auto;align-self:stretch;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px}
.it{width:20%;background:#e5e7eb;color:#111827}
.out{width:80%;background:#f59e0b;color:#111827}
.bar{height:32px;border-radius:8px;background:#f59e0b}
.bar.g{background:#d1d5db}
.note{font-size:17px;color:#4b5563;margin-top:0;line-height:1.35}
.split{display:flex;gap:16px;align-items:stretch;height:100%}
.box{flex:1;border-radius:16px;padding:20px 22px;min-height:0;display:flex;flex-direction:column;justify-content:center}
.box .big{font-size:56px;font-weight:750;letter-spacing:-.04em;line-height:1}
.box .cap{font-size:20px;margin-top:8px;line-height:1.25;font-weight:650}
.box .small{font-size:16px;margin-top:6px;line-height:1.3}
.dead{background:#f3f4f6;color:#6b7280}
.live{background:#fffbeb;border:3px solid #f59e0b;color:#111827}
.q{font-size:22px;line-height:1.3;display:flex;gap:12px;margin-top:0}
.q i{flex:none;color:#d97706;font-style:normal;font-weight:750;font-size:22px}
.gate{border:3px solid #111827;border-radius:16px;padding:22px 28px;display:flex;flex-direction:column;justify-content:space-between;height:100%}
.weeks{display:flex;gap:12px;align-items:stretch;height:100%}
.wk{flex:1;border-radius:14px;padding:16px 12px;text-align:center;background:#f8fafc;border:2px solid #e5e7eb;display:flex;flex-direction:column;justify-content:center}
.wk b{display:block;font-size:22px}
.wk span{display:block;font-size:15px;color:#6b7280;margin-top:6px}
.wk.on{background:#fffbeb;border-color:#f59e0b}
.stack{display:flex;height:120px;border-radius:12px;overflow:hidden}
.stack div{display:flex;align-items:center;justify-content:center;font-weight:750;font-size:22px;color:#111827}
.s10{width:10%;background:#e5e7eb}
.s20{width:20%;background:#fcd34d}
.s70{width:70%;background:#f59e0b}
.legend{display:flex;justify-content:space-between;font-size:16px;color:#4b5563;margin-top:8px}
.lock{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr 1fr;gap:10px;height:100%}
.lock div{border:2px solid #e5e7eb;border-radius:12px;padding:10px 14px;font-size:18px;background:#f8fafc;line-height:1.25;display:flex;align-items:center}
.lock b{color:#b45309;margin-right:8px}
.meters{display:flex;flex-direction:column;gap:10px;height:100%}
.m{flex:1;border:2px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#f8fafc;display:flex;flex-direction:column;justify-content:center}
.m b{font-size:22px;display:block}
.m span{font-size:16px;color:#6b7280}
.cal{display:flex;flex-direction:column;gap:8px;height:100%}
.cal .r{flex:1;display:flex;gap:14px;align-items:center;background:#f8fafc;border:2px solid #e5e7eb;border-radius:12px;padding:0 16px}
.tag{flex:none;width:120px;font-weight:750;font-size:18px;color:#b45309}
.cal p{font-size:18px;line-height:1.3}
"""

def page(kicker, title, body, source, height=700):
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CSS.replace("__H__", str(height))}</style></head>
<body>
<div class="kicker">{kicker}</div>
<h1>{title}</h1>
<div class="stage">{body}</div>
<div class="foot"><span>{source}</span><span>Pavel Veselov</span></div>
</body></html>"""

cards = []

cards.append(("01-map", page(
    "AI explained · part 1",
    "Six moves. In this order.",
    """<div class="chain">
      <div class="row"><div class="n">1</div><div class="card"><b>Diagnose</b><span>What you already pay for, use, and drop</span></div></div>
      <div class="row"><div class="n">2</div><div class="card"><b>Choose</b><span>3 to 5 places where a wrong answer is cheap to catch</span></div></div>
      <div class="row"><div class="n">3</div><div class="card"><b>Redesign</b><span>The whole job, with the people who do it</span></div></div>
      <div class="row"><div class="n">4</div><div class="card"><b>Govern</b><span>An owner and controls before any agent acts alone</span></div></div>
      <div class="row"><div class="n">5</div><div class="card"><b>Measure</b><span>A business number, a cost, a retention curve</span></div></div>
      <div class="row"><div class="n">6</div><div class="card"><b>Scale</b><span>One program. A gate finance signs</span></div></div>
    </div>""",
    "Full checklist: pveselov.space/ai",
)))

cards.append(("02-spend", page(
    "AI explained · part 2",
    "The IT budget is one fifth of the picture.",
    """<div class="barwrap">
      <div class="track"><div class="seg it">IT 20%</div><div class="seg out">Outside IT 80%</div></div>
      <p class="note">About 3.3% of revenue goes to AI. Most of it never hits the CIO ledger: business-unit tools, SaaS add-ons, model bills.</p>
      <p class="sub">If a line has no owner, that is already a finding.</p>
    </div>""",
    "BCG Applied AI Index 2026",
    400,
)))

cards.append(("02-shadow", page(
    "AI explained · part 2",
    "People already have an AI tool. You may not.",
    """<div class="split">
      <div class="box live"><div class="big">90%+</div><div class="cap">Personal AI at work</div><div class="small">Employees already use their own tools.</div></div>
      <div class="box dead"><div class="big">40%</div><div class="cap">Official subscription</div><div class="small">Companies that bought one.</div></div>
    </div>
    <p class="note">Ask five people outside IT which tool they use, and for which task. Do not punish the answer.</p>""",
    "MIT GenAI Divide report",
)))

cards.append(("02-retention", page(
    "AI explained · part 2",
    "Adoption is a feeling. Retention is a number.",
    """<div class="weeks">
      <div class="wk on"><b>Week 1</b><span>Did they come back?</span></div>
      <div class="wk on"><b>Week 4</b><span>Did it fit the job?</span></div>
      <div class="wk on"><b>Week 12</b><span>Keep, fix, or cut</span></div>
    </div>
    <p class="note" style="margin-top:36px">Run this on your three biggest AI contracts. Define “active user” yourself. If the vendor cannot export it, write that down.</p>""",
    "Before the renewal date",
)))

cards.append(("03-choose", page(
    "AI explained · part 3",
    "200 use cases is a reason to leave the room.",
    """<div class="split">
      <div class="box dead"><div class="big">200</div><div class="cap">Use cases on a roadmap</div><div class="small">A list. No owner. No money line.</div></div>
      <div class="box live"><div class="big">3–5</div><div class="cap">Domains with a P&amp;L line</div><div class="small">A wrong answer is cheap to catch.</div></div>
    </div>
    <p class="note">In one manufacturer story, 14 workshop ideas became 2 rebuilt workflows. Most of the value was the 12 that were dropped.</p>""",
    "BCG · HBR manufacturer case",
)))

cards.append(("04-people", page(
    "AI explained · part 4",
    "The model is the small slice.",
    """<div class="stack"><div class="s10">10%</div><div class="s20">20%</div><div class="s70">70%</div></div>
    <div class="legend"><span>Algorithms</span><span>Tech and data</span><span>People and the work</span></div>
    <p class="note">Speeding up the old steps keeps the old hand-offs. Rebuild the workflow with the people who do the work. Remove steps.</p>""",
    "BCG 10-20-70",
    400,
)))

cards.append(("05-controls", page(
    "AI explained · part 5",
    "Six controls. Then the agent may act.",
    """<div class="lock">
      <div><b>1</b>Data and memory it is allowed to see</div>
      <div><b>2</b>A human on high-risk decisions</div>
      <div><b>3</b>A test, a shut-off, a rollback</div>
      <div><b>4</b>A clear hand-off to a person</div>
      <div><b>5</b>One named owner</div>
      <div><b>6</b>Security that stays on</div>
    </div>
    <p class="note">Companies with all six report about 3× the value from agents versus companies with one. A title without a stop-button is a badge.</p>""",
    "BCG Applied AI Index 2026",
)))

cards.append(("06-cost", page(
    "AI explained · part 6",
    "Faster. And much more expensive.",
    """<div class="barwrap">
      <div><div class="lbl"><span>By hand, one document</span><b>$0.80</b></div><div class="bar g" style="width:8%"></div></div>
      <div><div class="lbl"><span>Award-winning AI workflow</span><b>$12–14</b></div><div class="bar" style="width:100%"></div></div>
    </div>
    <p class="note">About 90% faster. 40% of files still needed a person, who then took longer. Speed and cost sit on the same page.</p>""",
    "Richard Ewing, CIO.com, Oct 2026",
    400,
)))

cards.append(("07-gate", page(
    "AI explained · part 7",
    "The pilot worked. That is not scale.",
    """<div class="gate">
      <div class="q"><i>1</i>What does one finished job cost against the manual way?</div>
      <div class="q"><i>2</i>How often does a human step in, and what does that cost?</div>
      <div class="q"><i>3</i>Do those numbers still hold at full volume?</div>
    </div>
    <p class="note">No written answers, signed by finance, means the pilot stays a pilot. One program. One owner.</p>""",
    "Scale gate · pveselov.space/ai",
)))

cards.append(("08-studies", page(
    "AI explained · part 8",
    "The studies are not fighting. They count different things.",
    """<div class="meters">
      <div class="m"><b>About 5%</b><span>Clear P&amp;L value from task-specific generative AI. MIT.</span></div>
      <div class="m"><b>29%</b><span>Fortune 500 firms that are paying customers of one leading AI startup. a16z.</span></div>
      <div class="m"><b>37%</b><span>Respondents who attribute any EBIT impact to AI. McKinsey.</span></div>
    </div>
    <p class="note">Your question is smaller. Does this workflow beat its own baseline?</p>""",
    "MIT · a16z · McKinsey State of AI 2026",
)))

cards.append(("09-ninety", page(
    "AI explained · part 9",
    "Monday has a job. So does day 90.",
    """<div class="cal">
      <div class="r"><div class="tag">Week 1</div><p>One sheet of AI spend. Five people on shadow tools.</p></div>
      <div class="r"><div class="tag">Day 30</div><p>Three big contracts tagged keep, fix, or cut. Dead pilots stopped.</p></div>
      <div class="r"><div class="tag">Day 60</div><p>One domain chosen. The workflow redrawn with the people who do it.</p></div>
      <div class="r"><div class="tag">Day 90</div><p>A baseline, a cost per job, and an owner. Scale only if the gate passes.</p></div>
    </div>""",
    "First ninety days",
)))

cards.append(("10-one-company", page(
    "AI explained · part 10",
    "One firm. The whole path.",
    """<div class="chain">
      <div class="row"><div class="n">1</div><div class="card"><b>Find the money</b><span>Invoices outside IT. Chat tools with no owner.</span></div></div>
      <div class="row"><div class="n">2</div><div class="card"><b>Pick one desk</b><span>Quotes. A wrong price is caught by a human the same day.</span></div></div>
      <div class="row"><div class="n">3</div><div class="card"><b>Cut the hand-offs</b><span>Estimators redraw the path. Fewer steps, not a faster old path.</span></div></div>
      <div class="row"><div class="n">4</div><div class="card"><b>Name the owner</b><span>The model drafts. A person sends.</span></div></div>
      <div class="row"><div class="n">5</div><div class="card"><b>Count the job</b><span>Win rate and cost per quote, next to the old way.</span></div></div>
      <div class="row"><div class="n">6</div><div class="card"><b>Then the next desk</b><span>Only after finance signs the gate.</span></div></div>
    </div>""",
    "A worked example, not a client",
)))

for name, html in cards:
    (OUT / f"{name}.html").write_text(html)
    print(name)

print(f"{len(cards)} cards")
