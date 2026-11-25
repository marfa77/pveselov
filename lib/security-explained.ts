export const securityExplainedMeta = {
  title: "Security Explained",
  path: "/security/explained",
  description:
    "The Head of IT Security Playbook as ten short parts. One familiar sentence, one picture, one distinction. The same checklist, easier to remember.",
};

export type ExplainedCard = {
  src: string;
  alt: string;
  source: string;
};

export type ExplainedPart = {
  n: number;
  id: string;
  open: string;
  paragraphs: string[];
  cards: ExplainedCard[];
};

export const securityExplainedParts: ExplainedPart[] = [
  {
    n: 1,
    id: "part-1",
    open: "We'll buy a tool.",
    paragraphs: [
      "Someone says that after a scare, or before an audit. A product arrives. A dashboard arrives. The board hears that you are covered.",
      "Then a laptop is encrypted, or finance pays a fake invoice. The tool was on. The job was not.",
      "The job is nine moves, in this order. Know what you own. Lock identity. Harden what people touch. Close the doors attackers actually use. Treat cloud and vendors as your estate. Watch apps and data. Notice. Recover. Prove it.",
      "That is the map. The next parts go one move at a time.",
    ],
    cards: [
      {
        src: "/security-explained/01-map.png",
        alt: "Nine moves in order: Know, Identity, People, The usual doors, Cloud and vendors, Apps and data, Notice, Recover, Prove.",
        source: "Full checklist on the playbook",
      },
    ],
  },
  {
    n: 2,
    id: "part-2",
    open: "We know what we have.",
    paragraphs: [
      "Often you know what finance pays for. You do not know what is on the network.",
      "List the computers, the cloud accounts, and the apps people bought on a card. Give each line an owner. The first pass is done when you can name about 95% of company computers, and every production cloud account.",
      "Then a shorter list. The systems whose loss stops the company: finance, customer data, identity, backups. Not every laptop.",
      "A tool IT did not buy is still yours. Tag it keep, replace, or block.",
      "This month: one inventory, one crown-jewel list, five conversations about tools IT did not buy.",
    ],
    cards: [
      {
        src: "/security-explained/02-inventory.png",
        alt: "95% of company computers with an owner, beside a short list of systems that stop the company.",
        source: "Checklist bar · asset inventory",
      },
      {
        src: "/security-explained/02-shadow.png",
        alt: "Three tags for a tool IT did not buy: keep, replace, or block.",
        source: "Shadow IT",
      },
    ],
  },
  {
    n: 3,
    id: "part-3",
    open: "Everyone has a password.",
    paragraphs: [
      "A password is not a wall.",
      "One directory for people. Daily work and admin are two accounts. MFA on email, remote access, cloud, and finance. For admins, a phishing-resistant key, not a text message. The checklist bar is 99% of the apps that matter.",
      "A person who leaves loses access the same day. Check the last 20 leavers. Zero live access after exit day.",
      "API keys and service accounts have an owner and an expiry. A key pasted into chat is already a leaked key.",
    ],
    cards: [
      {
        src: "/security-explained/03-identity.png",
        alt: "A daily account beside a separate admin account that uses a phishing-resistant key.",
        source: "Checklist bar · identity",
      },
      {
        src: "/security-explained/03-leaver.png",
        alt: "Access is removed on exit day. Sample the last 20 leavers. Keys have an owner and an expiry.",
        source: "Joiner, mover, leaver",
      },
    ],
  },
  {
    n: 4,
    id: "part-4",
    open: "We trained the staff.",
    paragraphs: [
      "A course does not stop a payment.",
      "Every company laptop is encrypted, a normal user is not a local admin, and the endpoint agent is actually healthy. The bar is 98%.",
      "Your domains reject spoofed mail. A newsletter is not a reason to leave that open.",
      "A bank-detail change is confirmed on a number finance already has. Not by replying to the email. A second person signs a large payment. IT never asks for a password.",
    ],
    cards: [
      {
        src: "/security-explained/04-endpoint.png",
        alt: "98% healthy endpoint agents, encrypted disks, and domains that reject spoofed mail.",
        source: "Checklist bar · endpoints and email",
      },
      {
        src: "/security-explained/04-payment.png",
        alt: "Do not reply to an email that changes bank details. Call the number finance already has.",
        source: "Payment fraud is a finance process",
      },
    ],
  },
  {
    n: 5,
    id: "part-5",
    open: "We take backups.",
    paragraphs: [
      "A copy the attacker can change is not a backup.",
      "Keep one copy offline or locked. Its own login. Its own MFA. Do not use the everyday admin account.",
      "Restore one important system into a test room and time it. Write the time down.",
      "One PC should not see every server. Remote desktop is not open to the internet. A known hole on an internet-facing system has an owner and a date. Critical means days, not a quarter.",
    ],
    cards: [
      {
        src: "/security-explained/05-backup.png",
        alt: "A backup on the same network, which ransomware can encrypt, beside an offline or locked copy.",
        source: "CISA #StopRansomware",
      },
      {
        src: "/security-explained/05-remote.png",
        alt: "Open remote desktop on the internet beside access that requires MFA and only the apps a person needs.",
        source: "Remote access and segmentation",
      },
    ],
  },
  {
    n: 6,
    id: "part-6",
    open: "It's in the cloud.",
    paragraphs: [
      "The provider runs the building. You still own the keys and the doors.",
      "List every cloud account. The root login has MFA and is almost never used. A storage folder the world can open is a finding, not a setting.",
      "An app that can read all mail or all files needs a reason. If nobody can explain it, remove it.",
      "A vendor who can log into your network has a named account, MFA, and a way to turn them off. A shared VPN password is not a contract.",
    ],
    cards: [
      {
        src: "/security-explained/06-cloud.png",
        alt: "Root login with MFA, no public crown-jewel storage, and a vendor login you can turn off.",
        source: "Cloud, SaaS, and suppliers",
      },
    ],
  },
  {
    n: 7,
    id: "part-7",
    open: "We would see an attack.",
    paragraphs: [
      "A log that nobody reads is a receipt.",
      "Identity, endpoint alerts, email, remote access, and cloud audit go to one place. The checklist asks for more than 90% of those critical logs to actually arrive.",
      "Someone is named to look. You, an on-call, or a service with a clock on how fast they call you.",
      "Pick the few techniques that would hurt the crown jewels. Phishing. A stolen password. Someone deleting backups. Each one has a control, or a gap with an owner.",
    ],
    cards: [
      {
        src: "/security-explained/07-notice.png",
        alt: "More than 90% of critical logs arrive, a named person watches them, and ten techniques each have a control or a gap.",
        source: "Checklist bar · logging",
      },
    ],
  },
  {
    n: 8,
    id: "part-8",
    open: "We have a plan.",
    paragraphs: [
      "A document nobody has practised is a hope.",
      "Keep it short enough to use. Who decides, who speaks, who you call when email is down. The CEO has seen it.",
      "Twice a year. One ransomware exercise. One fake invoice. Finance is in the room.",
      "Restore a crown jewel and time it. An untested backup does not count.",
    ],
    cards: [
      {
        src: "/security-explained/08-clock.png",
        alt: "A short plan the CEO has seen, two exercises a year, and a timed restore.",
        source: "Respond and recover",
      },
    ],
  },
  {
    n: 9,
    id: "part-9",
    open: "The board is covered.",
    paragraphs: [
      "A slide that counts blocked attacks is not coverage.",
      "One page, the same numbers every time. MFA and endpoint coverage. The date you last restored a backup. Open critical holes on internet-facing systems. The top three risks, and what you are asking for.",
      "If a customer asks for proof, you open a folder. You do not spend a week looking.",
      "Once a quarter, break one control on purpose. Turn an agent off on a test laptop and see if anyone notices.",
    ],
    cards: [
      {
        src: "/security-explained/09-board.png",
        alt: "An honest board page: coverage, open holes, and the top three risks with an ask.",
        source: "One honest page",
      },
    ],
  },
  {
    n: 10,
    id: "part-10",
    open: "Show me one company.",
    paragraphs: [
      "A mid-size firm. No separate security chief. The Head of IT owns it. The board wants a tool. Finance pays suppliers by email.",
      "Write the owner first. You are accountable. The CEO signs downtime, spend, and what you will not accept. Shared admin passwords are on that list.",
      "Name the crown jewels. The finance system, the identity store, the backups.",
      "Separate admin from daily work. MFA on mail and cloud. A leaver is gone the same day. Bank-detail changes go through a phone call finance already uses.",
      "One backup copy cannot be reached from a normal PC. You restore a file and write down the time. The supplier login is named, and you can turn it off.",
      "The board page shows the gaps. The next tool waits until those gaps have owners.",
      "Same nine moves. One firm. Then the next hole.",
    ],
    cards: [
      {
        src: "/security-explained/10-one-company.png",
        alt: "One company walked through six moves, from naming an owner to an honest board page.",
        source: "A worked example, not a client",
      },
    ],
  },
];
