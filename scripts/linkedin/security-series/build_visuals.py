#!/usr/bin/env python3
"""Typeset the Security Explained cards. Numbers stay in HTML, never drawn by a model."""
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
.n{flex:none;width:32px;height:32px;border-radius:50%;border:2px solid #f59e0b;color:#b45309;
 font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center;background:#fff}
.card{border:2px solid #e5e7eb;background:#f8fafc;border-radius:12px;padding:6px 12px;flex:1}
.card b{display:block;font-size:16px}
.card span{display:block;font-size:14px;color:#6b7280;margin-top:1px}
.chain{display:flex;flex-direction:column;gap:6px}
.note{font-size:17px;color:#4b5563;margin-top:0;line-height:1.35}
.split{display:flex;gap:16px;align-items:stretch}
.box{flex:1;border-radius:16px;padding:18px 20px;min-height:0;display:flex;flex-direction:column;justify-content:center}
.box .big{font-size:48px;font-weight:750;letter-spacing:-.04em;line-height:1}
.box .cap{font-size:18px;margin-top:8px;line-height:1.25;font-weight:650}
.box .small{font-size:15px;margin-top:6px;line-height:1.3}
.dead{background:#f3f4f6;color:#6b7280}
.live{background:#fffbeb;border:3px solid #f59e0b;color:#111827}
.mid{background:#fff;border:2px solid #e5e7eb;color:#111827}
.firm{background:#f3f4f6;border:2px solid #e5e7eb;color:#111827}
.three{display:flex;gap:12px;align-items:stretch}
.three .box{min-height:0;padding:16px 14px}
.three .big{font-size:28px;letter-spacing:-.03em}
.meters{display:flex;flex-direction:column;gap:10px}
.m{border:2px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#f8fafc}
.m b{font-size:20px;display:block}
.m span{font-size:15px;color:#6b7280}
.cal{display:flex;flex-direction:column;gap:8px}
.cal .r{display:flex;gap:14px;align-items:center;background:#f8fafc;border:2px solid #e5e7eb;border-radius:12px;padding:12px 16px}
.tag{flex:none;width:150px;font-weight:750;font-size:16px;color:#b45309}
.cal p{font-size:16px;line-height:1.3}
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

cards.append(("01-map", page(
    "Security explained · part 1",
    "Nine moves. In this order.",
    """<div class="chain">
      <div class="row"><div class="n">1</div><div class="card"><b>Know</b><span>What you own, and the few systems that stop the company</span></div></div>
      <div class="row"><div class="n">2</div><div class="card"><b>Identity</b><span>One directory. A second factor. Leavers the same day</span></div></div>
      <div class="row"><div class="n">3</div><div class="card"><b>People</b><span>Laptops, email, and the payment phone call</span></div></div>
      <div class="row"><div class="n">4</div><div class="card"><b>The usual doors</b><span>Patch, backup, segment, remote access</span></div></div>
      <div class="row"><div class="n">5</div><div class="card"><b>Cloud and vendors</b><span>Your keys. Their logins</span></div></div>
      <div class="row"><div class="n">6</div><div class="card"><b>Apps and data</b><span>What faces the internet. Where secrets live</span></div></div>
      <div class="row"><div class="n">7</div><div class="card"><b>Notice</b><span>Logs a named person actually sees</span></div></div>
      <div class="row"><div class="n">8</div><div class="card"><b>Recover</b><span>A plan you have run. A restore with a clock</span></div></div>
      <div class="row"><div class="n">9</div><div class="card"><b>Prove</b><span>One honest page for the board</span></div></div>
    </div>""",
    "Full checklist: pveselov.space/security",
)))

cards.append(("02-inventory", page(
    "Security explained · part 2",
    "Two lists. They are not the same list.",
    """<div class="split">
      <div class="box live"><div class="big">95%</div><div class="cap">Company computers with an owner</div><div class="small">Plus every production cloud account.</div></div>
      <div class="box mid"><div class="big">Few</div><div class="cap">Systems that stop the company</div><div class="small">Finance, customer data, identity, backups. Not every laptop.</div></div>
    </div>
    <p class="note">Finance knows what you pay for. The network knows what is plugged in. Reconcile both.</p>""",
    "Checklist bar · asset inventory",
)))

cards.append(("02-shadow", page(
    "Security explained · part 2",
    "A tool IT did not buy is still yours.",
    """<div class="three">
      <div class="box live"><div class="big">Keep</div><div class="cap">It has an owner and a reason</div></div>
      <div class="box mid"><div class="big">Replace</div><div class="cap">The official tool can do the job</div><div class="small">Give it a date.</div></div>
      <div class="box firm"><div class="big">Block</div><div class="cap">It holds data it should not</div></div>
    </div>
    <p class="note">Five department heads. Expense lines. What people actually open. Do not punish the answer.</p>""",
    "Shadow IT · keep, replace, or block",
)))

cards.append(("03-identity", page(
    "Security explained · part 3",
    "A password is not a wall.",
    """<div class="split">
      <div class="box dead"><div class="big">Daily</div><div class="cap">Mail, files, the normal day</div><div class="small">One directory. One login.</div></div>
      <div class="box live"><div class="big">Admin</div><div class="cap">A different account</div><div class="small">Phishing-resistant key. Not a text message.</div></div>
    </div>
    <p class="note">MFA on email, remote access, cloud, and finance. The checklist bar is 99% of the apps that matter.</p>""",
    "Checklist bar · identity",
)))

cards.append(("03-leaver", page(
    "Security explained · part 3",
    "Exit day is the deadline.",
    """<div class="cal">
      <div class="r"><div class="tag">Same day</div><p>Mail, remote access, laptop, cloud, badge. Not next month.</p></div>
      <div class="r"><div class="tag">Last 20</div><p>Sample the last 20 leavers. Zero live access after exit day.</p></div>
      <div class="r"><div class="tag">Keys</div><p>Service accounts and API keys have an owner and an expiry.</p></div>
    </div>
    <p class="note">A key pasted into chat is already a leaked key. Rotate it.</p>""",
    "Joiner, mover, leaver",
)))

cards.append(("04-endpoint", page(
    "Security explained · part 4",
    "Training is not a control.",
    """<div class="meters">
      <div class="m"><b>98%</b><span>Company laptops with a healthy endpoint agent. That is the bar.</span></div>
      <div class="m"><b>Encrypted</b><span>Disk on. Screen lock on. A normal user is not a local admin.</span></div>
      <div class="m"><b>Reject fakes</b><span>Your domains reject spoofed mail. A newsletter is not a reason to stay open.</span></div>
    </div>
    <p class="note">A course can help. It does not replace the agent, the encryption, or the mail setting.</p>""",
    "Checklist bar · endpoints and email",
)))

cards.append(("04-payment", page(
    "Security explained · part 4",
    "Do not pay the email.",
    """<div class="split">
      <div class="box dead"><div class="big">Reply</div><div class="cap">The email says the bank details changed</div><div class="small">That is the attack.</div></div>
      <div class="box live"><div class="big">Call</div><div class="cap">The number finance already has</div><div class="small">A second person on a large payment.</div></div>
    </div>
    <p class="note">IT never asks for a password. If a mailbox looks wrong, check the forwarding rules the same day.</p>""",
    "Payment fraud is a finance process",
)))

cards.append(("05-backup", page(
    "Security explained · part 5",
    "A backup the attacker can reach is not a backup.",
    """<div class="split">
      <div class="box dead"><div class="big">Same network</div><div class="cap">Ransomware encrypts this copy too</div></div>
      <div class="box live"><div class="big">Offline or locked</div><div class="cap">One copy they cannot change</div><div class="small">Its own login. Its own MFA.</div></div>
    </div>
    <p class="note">Restore one important system into a test room and time it. Write the time down. A copy you have never restored is a hope.</p>""",
    "CISA #StopRansomware",
)))

cards.append(("05-remote", page(
    "Security explained · part 5",
    "One PC should not see everything.",
    """<div class="split">
      <div class="box dead"><div class="big">Open</div><div class="cap">Remote desktop on the internet</div><div class="small">A laptop that can reach every server.</div></div>
      <div class="box live"><div class="big">Jump</div><div class="cap">MFA, then only the apps they need</div><div class="small">Servers and users are not one flat room.</div></div>
    </div>
    <p class="note">A known hole on an internet-facing system has an owner and a date. Critical means days, not a quarter.</p>""",
    "Remote access and segmentation",
)))

cards.append(("06-cloud", page(
    "Security explained · part 6",
    "They run the building. You own the doors.",
    """<div class="meters">
      <div class="m"><b>Root</b><span>MFA on. Almost never used. Every cloud account has an owner.</span></div>
      <div class="m"><b>Public</b><span>A storage folder the world can open is a finding, not a setting.</span></div>
      <div class="m"><b>Vendors</b><span>Named login, MFA, and a way to turn them off. No shared VPN password.</span></div>
    </div>
    <p class="note">Apps that can read all mail or all files need a reason. If nobody can explain the app, remove it.</p>""",
    "Cloud, SaaS, and suppliers",
)))

cards.append(("07-notice", page(
    "Security explained · part 7",
    "A log nobody reads is a receipt.",
    """<div class="meters">
      <div class="m"><b>More than 90%</b><span>Critical logs actually arrive. Identity, endpoints, email, remote access, cloud.</span></div>
      <div class="m"><b>A named person</b><span>You, an on-call, or a service with a clock on how fast they call you.</span></div>
      <div class="m"><b>Ten techniques</b><span>Phishing. A stolen password. Deleted backups. Each one has a control or a gap with an owner.</span></div>
    </div>
    <p class="note">A detection console with no watcher is a licence.</p>""",
    "Checklist bar · logging",
)))

cards.append(("08-clock", page(
    "Security explained · part 8",
    "A plan you have not run is a document.",
    """<div class="cal">
      <div class="r"><div class="tag">Short plan</div><p>Who decides. Who speaks. Who you call when email is down. The CEO has seen it.</p></div>
      <div class="r"><div class="tag">Twice a year</div><p>One ransomware exercise. One fake invoice. Finance is in the room.</p></div>
      <div class="r"><div class="tag">A clock</div><p>Restore one crown jewel. Write down the time and what was missing.</p></div>
    </div>""",
    "Respond and recover",
)))

cards.append(("09-board", page(
    "Security explained · part 9",
    "Blocked attacks is not a status.",
    """<div class="meters">
      <div class="m"><b>Coverage</b><span>MFA. Endpoint agents. The date you last restored a backup.</span></div>
      <div class="m"><b>Open holes</b><span>Critical issues on internet-facing systems, with an owner.</span></div>
      <div class="m"><b>The ask</b><span>Top three risks. What you need. Same page, two cycles in a row.</span></div>
    </div>
    <p class="note">Proof lives in a folder you can open today. Once a quarter, break one control on purpose and see if anyone notices.</p>""",
    "One honest page",
)))

cards.append(("10-one-company", page(
    "Security explained · part 10",
    "One firm. The whole path.",
    """<div class="chain">
      <div class="row"><div class="n">1</div><div class="card"><b>Name the owner</b><span>The Head of IT. The CEO signs downtime, spend, and what you will not accept.</span></div></div>
      <div class="row"><div class="n">2</div><div class="card"><b>Name the crown jewels</b><span>Finance system, identity, backups. Not every laptop.</span></div></div>
      <div class="row"><div class="n">3</div><div class="card"><b>Split admin from the day</b><span>MFA on mail and cloud. A leaver is gone the same day.</span></div></div>
      <div class="row"><div class="n">4</div><div class="card"><b>Call, do not reply</b><span>Bank-detail changes use the number finance already has.</span></div></div>
      <div class="row"><div class="n">5</div><div class="card"><b>One copy they cannot touch</b><span>Restore a file. Write down the time.</span></div></div>
      <div class="row"><div class="n">6</div><div class="card"><b>Then the board page</b><span>The gaps, with owners. The next tool waits.</span></div></div>
    </div>""",
    "A worked example, not a client",
)))

for name, html in cards:
    (OUT / f"{name}.html").write_text(html)
    print(name)

print(f"{len(cards)} cards")
