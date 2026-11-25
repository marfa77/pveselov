#!/usr/bin/env python3
"""Typeset the commodity-trading guide cards. Numbers stay in HTML."""
from pathlib import Path

OUT = Path(__file__).resolve().parent / "visuals"
OUT.mkdir(exist_ok=True)

CSS = """
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1080px;height:auto;background:#fff;color:#111827;
 font-family:-apple-system,"SF Pro Display","Inter","Helvetica Neue",Arial,sans-serif}
body{padding:36px 48px 28px;display:flex;flex-direction:column}
.kicker{font-size:15px;letter-spacing:.14em;text-transform:uppercase;color:#6b7280;font-weight:650}
h1{font-size:36px;line-height:1.08;font-weight:700;letter-spacing:-.025em;margin-top:8px}
.sub{font-size:20px;line-height:1.35;color:#4b5563;margin-top:10px}
.stage{display:flex;flex-direction:column;gap:14px;margin-top:16px}
.foot{display:flex;justify-content:space-between;gap:16px;font-size:15px;color:#9ca3af;margin-top:16px}
.row{display:flex;align-items:center;gap:12px}
.n{flex:none;width:36px;height:36px;border-radius:50%;border:2px solid #f59e0b;color:#b45309;
 font-weight:700;font-size:16px;display:flex;align-items:center;justify-content:center;background:#fff}
.card{border:2px solid #e5e7eb;background:#f8fafc;border-radius:12px;padding:8px 14px;flex:1}
.card b{display:block;font-size:18px}
.card span{display:block;font-size:15px;color:#6b7280;margin-top:1px}
.chain{display:flex;flex-direction:column;gap:8px}
.note{font-size:17px;color:#4b5563;margin-top:0;line-height:1.35}
.split{display:flex;gap:16px;align-items:stretch}
.box{flex:1;border-radius:16px;padding:18px 20px;display:flex;flex-direction:column;justify-content:flex-start}
.box .big{font-size:40px;font-weight:750;letter-spacing:-.03em;line-height:1}
.box .cap{font-size:22px;line-height:1.2;font-weight:700}
.box .small{font-size:16px;margin-top:8px;line-height:1.35}
.dead{background:#f3f4f6;color:#6b7280}
.live{background:#fffbeb;border:3px solid #f59e0b;color:#111827}
.plain{background:#f8fafc;border:2px solid #e5e7eb;color:#111827}
.meters{display:flex;flex-direction:column;gap:10px}
.m{border:2px solid #e5e7eb;border-radius:12px;padding:14px 16px;background:#f8fafc}
.m b{font-size:22px;display:block}
.m span{font-size:16px;color:#6b7280;line-height:1.35}
"""


def page(kicker, title, body, source):
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style></head>
<body>
<div class="kicker">{kicker}</div>
<h1>{title}</h1>
<div class="stage">{body}</div>
<div class="foot"><span>{source}</span><span>Pavel Veselov</span></div>
</body></html>"""


cards = []

cards.append(("pipes", page(
    "Trading · integration",
    "Three jobs. Three pipes.",
    """<div class="split">
      <div class="box live"><div class="cap">Live</div><div class="small">The next action. Seconds to minutes. Title, payment, stock, a final price.</div></div>
      <div class="box plain"><div class="cap">Clock</div><div class="small">The cut finance signs. Tonight, or month-end. Totals, then the journal.</div></div>
      <div class="box plain"><div class="cap">Warehouse</div><div class="small">The question, the filing, the chart. As of the load. A read.</div></div>
    </div>
    <p class="note">Use all three. Give each field one owner.</p>""",
    "pveselov.space/trading/integration",
)))

cards.append(("owners", page(
    "Trading · integration",
    "Each field has one home.",
    """<div class="split">
      <div class="box live"><div class="cap">CTRM</div><div class="small">Trade. Parcel. Price. Position.</div></div>
      <div class="box plain"><div class="cap">ERP</div><div class="small">Ledger. Invoice. Tax. Payment.</div></div>
    </div>
    <p class="note">The CTRM sends the priced parcel. The ERP sends back the invoice number and the cash. Neither side edits the other's book.</p>""",
    "pveselov.space/trading/integration",
)))

cards.append(("key", page(
    "Trading · integration",
    "Send it twice. Keep one invoice.",
    """<div class="split">
      <div class="box live"><div class="cap">Same key, sent twice</div><div class="big">1 invoice</div><div class="small">Trade, parcel, version. The second copy updates the first.</div></div>
      <div class="box dead"><div class="cap">No key</div><div class="big">2 invoices</div><div class="small">The retry looks like a new deal.</div></div>
    </div>""",
    "pveselov.space/trading/integration",
)))

cards.append(("window", page(
    "Trading · integration",
    "The file replaces the window.",
    """<div class="meters">
      <div class="m"><b>Tuesday's file</b><span>Count. Quantity. Value. A person signs the totals, then the journal.</span></div>
      <div class="m"><b>Rerun</b><span>Replaces Tuesday. It does not lay a second Tuesday underneath.</span></div>
    </div>
    <p class="note">A missed night is visible in the morning. Intraday credit does not travel in this file.</p>""",
    "pveselov.space/trading/integration",
)))

cards.append(("warehouse", page(
    "Trading · integration",
    "The warehouse is where you read.",
    """<div class="split">
      <div class="box plain"><div class="cap">Write in</div><div class="small">CTRM sends the book. ERP sends the ledger. On a schedule.</div></div>
      <div class="box live"><div class="cap">Keep</div><div class="small">The copy you filed. The bridge. The time of the load.</div></div>
      <div class="box plain"><div class="cap">Read out</div><div class="small">A filing. A board page. A question you had not written yet.</div></div>
    </div>
    <p class="note">A deal is booked in the CTRM. A journal is posted in the ERP. The desk does not sell off this page.</p>""",
    "pveselov.space/trading/integration",
)))

cards.append(("homes", page(
    "Trading · setup",
    "Six homes. One fact each.",
    """<div class="chain">
      <div class="row"><div class="n">1</div><div class="card"><b>CTRM</b><span>Trade, parcel, price, position, inventory in the unit you trade</span></div></div>
      <div class="row"><div class="n">2</div><div class="card"><b>ERP</b><span>Ledger, invoice, tax, payment</span></div></div>
      <div class="row"><div class="n">3</div><div class="card"><b>Market data</b><span>The official price the book is valued on</span></div></div>
      <div class="row"><div class="n">4</div><div class="card"><b>Documents</b><span>Contract, BL, assay, on the trade id</span></div></div>
      <div class="row"><div class="n">5</div><div class="card"><b>Identity</b><span>Who may book, who may value, who may pay</span></div></div>
      <div class="row"><div class="n">6</div><div class="card"><b>Warehouse</b><span>Later. Filings, the bridge, questions</span></div></div>
    </div>""",
    "pveselov.space/trading/setup",
)))

cards.append(("formula", page(
    "Trading · setup",
    "The price is not known on trade date.",
    """<div class="chain">
      <div class="row"><div class="n">1</div><div class="card"><b>Index</b><span>The published fix, with a date</span></div></div>
      <div class="row"><div class="n">2</div><div class="card"><b>Quotational period</b><span>Which days count</span></div></div>
      <div class="row"><div class="n">3</div><div class="card"><b>Premium</b><span>Quality, place, the deal</span></div></div>
      <div class="row"><div class="n">4</div><div class="card"><b>Provisional, then final</b><span>Same trade id. The second price updates the first invoice.</span></div></div>
    </div>""",
    "pveselov.space/trading/setup",
)))

cards.append(("one-price", page(
    "Trading · setup",
    "One curve becomes the journal.",
    """<div class="split">
      <div class="box live"><div class="cap">Official fix</div><div class="small">Dated. The CTRM values the book. The ledger uses the same fix for the cut.</div></div>
      <div class="box dead"><div class="cap">Private mark</div><div class="small">A scenario. Labeled. It stays off the journal.</div></div>
    </div>
    <p class="note">Two curves in production means two P&amp;Ls. The meeting will pick the kinder one.</p>""",
    "pveselov.space/trading/setup",
)))

cards.append(("document", page(
    "Trading · setup",
    "The file hangs off the trade.",
    """<div class="split">
      <div class="box live"><div class="cap">On the trade id</div><div class="small">Contract. Bill of lading. Assay. Letter of credit.</div></div>
      <div class="box dead"><div class="cap">A folder called March</div><div class="small">The claim is in there. Somewhere.</div></div>
    </div>""",
    "pveselov.space/trading/setup",
)))

cards.append(("roles", page(
    "Trading · setup",
    "Three clicks. Split them.",
    """<div class="split">
      <div class="box live"><div class="cap">Trader</div><div class="small">Captures the deal.</div></div>
      <div class="box plain"><div class="cap">Middle office</div><div class="small">Values the book. Releases the cut.</div></div>
      <div class="box plain"><div class="cap">Finance</div><div class="small">Pays. Owns the ledger.</div></div>
    </div>
    <p class="note">At ten people, two of these are the same human. The access is still split.</p>""",
    "pveselov.space/trading/setup",
)))

cards.append(("order", page(
    "Trading · setup",
    "Turn them on in this order.",
    """<div class="chain">
      <div class="row"><div class="n">1</div><div class="card"><b>Four maps</b><span>Legal entity, counterparty, commodity and unit, location. Count the mismatches.</span></div></div>
      <div class="row"><div class="n">2</div><div class="card"><b>New trades in the CTRM</b><span>History loads once. The spreadsheet becomes read-only.</span></div></div>
      <div class="row"><div class="n">3</div><div class="card"><b>Four live flows</b><span>Title, payment, stock, final price.</span></div></div>
      <div class="row"><div class="n">4</div><div class="card"><b>A signed cut</b><span>Valuation and inventory. Totals, then the journal.</span></div></div>
      <div class="row"><div class="n">5</div><div class="card"><b>Credit and the hedge link</b><span>A trade past the limit needs a name.</span></div></div>
      <div class="row"><div class="n">6</div><div class="card"><b>Readers</b><span>Documents on the trade. Then the warehouse, the filed extract, one board page.</span></div></div>
    </div>""",
    "pveselov.space/trading/setup",
)))


def main():
    for name, html in cards:
        (OUT / f"{name}.html").write_text(html)
        print(name)
    print(len(cards), "cards")


if __name__ == "__main__":
    main()
