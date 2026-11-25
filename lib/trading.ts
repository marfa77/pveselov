export const tradingMeta = {
  path: "/trading",
  title: "Commodity trading systems",
  description:
    "Two guides for a physical commodity book: how a CTRM and an ERP from two vendors should exchange data, and the application setup I would stand up from an empty building.",
  updated: "2026-11-25",
  updatedLabel: "25 Nov 2026",
};

export type GuideBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; headers: string[]; rows: string[][] };

export type GuideFigure = {
  src: string;
  alt: string;
  height: number;
};

export type GuideSection = {
  id: string;
  title: string;
  figures?: GuideFigure[];
  blocks: GuideBlock[];
};

export type TradingGuide = {
  path: string;
  title: string;
  shortTitle: string;
  description: string;
  kicker: string;
  lede: string[];
  sections: GuideSection[];
};

export const integrationGuide: TradingGuide = {
  path: "/trading/integration",
  title: "ERP and CTRM. Two vendors.",
  shortTitle: "ERP and CTRM integration",
  description:
    "Direct live integration, a file on a clock, and a warehouse in the middle. Which pipe carries the next action, the close, and the regulatory and analytical read.",
  kicker: "Commodity trading",
  lede: [
    "Someone says: we'll integrate them.",
    "That sentence hides three jobs. The next action. The cut finance signs. The question a regulator, an auditor, or a board pack has not written yet.",
    "Live messages do the first. A file on a clock does the second. A warehouse does the third. Use all three. Give each field one owner.",
  ],
  sections: [
    {
      id: "three-jobs",
      title: "We'll integrate them.",
      figures: [
        {
          src: "/trading/pipes.png",
          alt: "Three pipes: live for the next action, a clock for the cut finance signs, a warehouse for the question and the filing.",
          height: 335,
        },
        {
          src: "/trading/owners.png",
          alt: "The CTRM owns the trade, parcel, price, and position. The ERP owns the ledger, invoice, tax, and payment.",
          height: 314,
        },
      ],
      blocks: [
        {
          kind: "p",
          text: "The CTRM owns the trade, the parcel, the price, and the position. The ERP owns the ledger, the invoice, the tax, and the payment. Two vendors will not share a product code, a unit, or a counterparty. That mapping is the project. The pipe is the easy part.",
        },
        {
          kind: "p",
          text: "A one-way street can still run in a two-way neighbourhood. The CTRM sends the priced parcel. The ERP sends back the invoice number and the cash. Neither side edits the other's book.",
        },
      ],
    },
    {
      id: "live",
      title: "Live, both ways.",
      figures: [
        {
          src: "/trading/key.png",
          alt: "The same key sent twice updates one invoice. With no key, the retry becomes a second invoice.",
          height: 317,
        },
      ],
      blocks: [
        {
          kind: "p",
          text: "They should talk to each other for the short list of events that change what someone does next.",
        },
        {
          kind: "list",
          items: [
            "A parcel passes title, and finance must raise the document today.",
            "A payment clears, and credit must fall today.",
            "Stock is free again, and the desk will sell it today.",
            "A final price replaces a provisional invoice, on the same trade id.",
          ],
        },
        {
          kind: "p",
          text: "The message carries a key you can send twice: trade, parcel, version. The second copy updates the first. It does not open a second invoice.",
        },
        {
          kind: "p",
          text: "Keep this list short. A live pipe for every table is two systems and a queue, and three places a number can hide.",
        },
      ],
    },
    {
      id: "clock",
      title: "Once, or on a clock.",
      figures: [
        {
          src: "/trading/window.png",
          alt: "Tuesday's file carries count, quantity, and value. A rerun replaces that window.",
          height: 387,
        },
      ],
      blocks: [
        {
          kind: "p",
          text: "A one-time load is a move, at cutover or when you backfill history. After that weekend you still need a pipe. Archive the file and the control totals. You will be asked what you loaded.",
        },
        {
          kind: "p",
          text: "A periodic file is the right pipe for the cut. End of day: a journal proposal for valuation, an inventory snapshot, an open-item list. Once a month: the close. The clock is agreed. A missed night is visible in the morning.",
        },
        {
          kind: "p",
          text: "You reconcile a batch with totals. Quantity, value, count of lines. A reject file has an owner before the desk starts. A rerun replaces the window. Intraday credit does not belong in this file. The ledger does not want a journal every time a price blinks.",
        },
      ],
    },
    {
      id: "warehouse",
      title: "Through a warehouse.",
      figures: [
        {
          src: "/trading/warehouse.png",
          alt: "The CTRM and the ERP write into the warehouse. Filings and questions read out. Deals and journals stay in the source systems.",
          height: 335,
        },
      ],
      blocks: [
        {
          kind: "p",
          text: "The warehouse is where you read. Both systems write in, on a schedule. Reports, filings, and models read out. Nothing in the warehouse posts a journal or books a deal.",
        },
        {
          kind: "p",
          text: "Regulatory. The filing is a snapshot you must be able to open again. The live CTRM has since been amended. The warehouse keeps the extract you sent, the version, and the time. Trade reports, tax invoices, customs, the statutory number. Different regimes, same rule: keep the copy you filed.",
        },
        {
          kind: "p",
          text: "The close. Trading P&L and the ledger never match line for line. Price, volume, FX, timing of title. The bridge lives here, tied to the same control totals as the batch. A third number, invented in a slide, is a bug.",
        },
        {
          kind: "p",
          text: "Analytics. Curves, voyages, documents, years of amendments. The ERP will not hold this. The CTRM should stay the book, and the warehouse holds the rest beside a conformed trade id and a conformed legal entity. A question can then join a deal to an invoice to a voyage.",
        },
        {
          kind: "p",
          text: "A dashboard on this store shows the as-of time in the corner. A dashboard people trade on belongs on the system that owns the action. If the CTRM reads stock from the warehouse to decide a sale, a live decision is riding yesterday's load.",
        },
      ],
    },
    {
      id: "what-travels",
      title: "What travels where.",
      blocks: [
        {
          kind: "table",
          headers: ["On the live pipe", "On the clock", "In the warehouse"],
          rows: [
            [
              "Title that releases an invoice today",
              "Valuation journals",
              "The filed regulatory extract",
            ],
            [
              "Payment status back to credit",
              "Inventory snapshot and valuation",
              "The P&L bridge to the ledger",
            ],
            [
              "Stock that can be sold again today",
              "Open items",
              "Exposure and amendment history",
            ],
            [
              "Final price on a provisional invoice",
              "Accruals and cost",
              "Dashboards, models, documents, curves",
            ],
          ],
        },
        {
          kind: "p",
          text: "Master data sits under all three. Legal entity against trading name. Unit against unit. Commodity against the account it hits. Location against the plant. If those four disagree, every pipe is confident and wrong.",
        },
      ],
    },
    {
      id: "aspects",
      title: "Every aspect.",
      blocks: [
        {
          kind: "table",
          headers: ["Aspect", "Live, both ways", "Once, or on a clock", "Warehouse in the middle"],
          rows: [
            ["The job", "The next action", "The cut, or the initial move", "The question, the filing, the chart"],
            ["Direction", "Each field has one owner. The street can run both ways", "One way per flow", "Both systems write in. Readers only read out"],
            ["Clock", "Seconds to minutes", "The agreed hour. A one-time load is a weekend, then it is over", "The load time, printed on the page"],
            ["What moves", "One event", "One file that replaces a window", "Events and snapshots, kept"],
            ["System of record", "The system that owns the field", "The same", "Neither. A copy"],
            ["History", "What the vendor keeps", "The files you archived", "Years, versions, the copy as reported"],
            ["Master data", "Must match before you send", "Same, plus a reject file a person owns", "A conformed key. A fix that exists only in the report is a second copy of the lie"],
            ["Tie-out", "Event, key, no duplicates", "Count, quantity, value", "The load ties back to those same totals"],
            ["When it fails", "Queue and retry. The other system keeps working", "The morning shows a missed night", "The page is stale, and it says so"],
            ["Replay", "Safe with an idempotent key", "A rerun replaces the window", "Rebuild a day. Leave it as a read"],
            ["A vendor upgrades", "The live map breaks first", "The next file breaks. You see it at the clock", "The model breaks. The chart goes blank or quietly wrong"],
            ["Coupling", "Highest. Two release trains", "A contract on a file", "The two products stay apart. The model becomes the coupling"],
            ["Volume", "The events that move money or stock", "The book, once per run", "Trades, prices, logs, curves, documents"],
            ["Security", "The message may change state. Least privilege per event", "A signed file drop", "Readers get a mart. They do not get both databases"],
            ["Regulatory filing", "Creates the record. A weak place to keep what you sent", "Enough when the filing is T+1 and you archive the file", "The place you keep the extract, the version, and the time"],
            ["Statutory close", "A tick is a poor journal", "The journal run", "The bridge. Read-only"],
            ["Audit question", "Which message", "Which file, which hash", "Which load, which definition, which version of the report"],
            ["Live credit, stock, payment", "This pipe", "Too late for a decision today", "Too late, and one step removed"],
            ["Dashboards", "On the operational system, for the next action", "The morning pack", "The cross-system page, with the as-of time"],
            ["Big data and models", "Leave the book-sized history off this pipe", "A dump is a file", "The place curves, voyages, and years of amendments belong"],
            ["Cost", "High per flow. Painful on each upgrade", "Cheaper to build. A person owns the clock", "A platform. It pays when the questions multiply"],
            ["Owner on a Tuesday", "Integration plus the desk that feels the reject", "Finance plus the night job", "A data owner. A definition someone can point at"],
            ["How it goes wrong", "Two truths and a queue", "The desk trades on yesterday's file and nobody noticed", "Someone books a deal off a chart"],
          ],
        },
      ],
    },
    {
      id: "one-company",
      title: "One company.",
      blocks: [
        {
          kind: "p",
          text: "A mid-size trading firm. Coal and iron ore. A CTRM from one vendor, an ERP from another. No shared codes. This is a worked example, not a client.",
        },
        {
          kind: "p",
          text: "Week 1. Write the owner of each field. Trade, price, and parcel live in the CTRM. Invoice, tax, and payment live in the ERP. Write the four master maps: legal entity, unit, commodity, plant. Count the mismatches. That count is the scope.",
        },
        {
          kind: "p",
          text: "The live list stays at four flows. Title that must produce an invoice the same day. Payment status back to credit. Stock that can be sold again. A final price that amends a provisional invoice. Each one has a key and a reject queue a person reads.",
        },
        {
          kind: "p",
          text: "The clock is the close. Valuation and inventory go across as a file with totals. Finance signs the totals, then the journal. A missed file stops the close.",
        },
        {
          kind: "p",
          text: "The warehouse takes the same cut, plus the curves and the voyage history. The regulatory extract is stored as it was sent. The board page reads the bridge and shows the time the load finished. The desk does not sell off that page.",
        },
        {
          kind: "p",
          text: "The next flow waits until these three are dull. Dull is the sign it works. Same rule for the next pair of systems. One owner per field. Live only for the next action. A clock for the cut. A warehouse for every question that is a read.",
        },
      ],
    },
  ],
};

export const setupGuide: TradingGuide = {
  path: "/trading/setup",
  title: "The book, the ledger, and the readers.",
  shortTitle: "Commodity trading setup",
  description:
    "The application setup I would stand up for a physical commodity firm starting from zero. One deal, walked through the people and the systems. Then master data, counterparty clearance, and the order you turn the homes on.",
  kicker: "Commodity trading",
  lede: [
    "Someone says: we'll buy a platform.",
    "The center of this page is one deal. Who does the step, and which system holds it. Around that deal sit six homes. I have run this shape on a physical book: a CTRM, SAP Finance, and a warehouse the reports actually used.",
    "The products can change. The homes do not. If a sentence below does not match the firm in front of you, the firm is the special case, and it should be written down.",
  ],
  sections: [
    {
      id: "six-homes",
      title: "Six homes.",
      figures: [
        {
          src: "/trading/homes.png",
          alt: "Six homes in order: CTRM, ERP, market data, documents, identity, and a warehouse later.",
          height: 585,
        },
      ],
      blocks: [
        {
          kind: "p",
          text: "Start with six. Some of them are modules inside a product you already chose. A separate vendor earns its place when the job has its own clock and its own owner.",
        },
        {
          kind: "list",
          items: [
            "CTRM. The book: trade, parcel, price, position, inventory in the unit you trade.",
            "ERP. The legal entity: ledger, invoice, tax, payment.",
            "Market data. The official price the book is valued on.",
            "Documents. The contract, the BL, the assay, on the trade id.",
            "Identity. Who may book, who may value, who may pay.",
            "A warehouse. Later. Filings, the bridge to the ledger, and questions.",
          ],
        },
        {
          kind: "p",
          text: "The pipes between the CTRM and the ERP are the other guide. They are not a seventh trading system.",
        },
        {
          kind: "p",
          text: "Treasury starts inside the ERP. Credit starts as a limit on the counterparty in the CTRM, fed by what finance has not collected. A separate treasury system, or a separate credit system, waits until the simple one is honestly too small.",
        },
      ],
    },
    {
      id: "deal",
      title: "One deal, from the name to the cash.",
      figures: [
        {
          src: "/trading/deal.png",
          alt: "One physical deal in six steps: clear the counterparty, book, move the cargo, invoice and cash, sign the cut, then read from the warehouse.",
          height: 585,
        },
      ],
      blocks: [
        {
          kind: "p",
          text: "A physical cargo. Coal or iron ore. One contract, one or many parcels, a price that is not known on the day you trade. This is the path. The homes above are only there to hold a step of it.",
        },
        {
          kind: "table",
          headers: ["Step", "Who", "System", "What happens"],
          rows: [
            ["Clear the name", "Compliance, then credit", "CTRM, evidence on the counterparty id", "Screened, KYC, a limit, an expiry. No firm trade before this."],
            ["Book", "Trader", "CTRM", "Contract, commodity, quantity, incoterm, delivery window, price formula, book."],
            ["Check the booking", "Middle office", "CTRM", "Codes match. The name is allowed. Credit has room. The formula is complete."],
            ["Nominate", "Operations", "CTRM", "A parcel under the contract. Vessel or tank. Laycan."],
            ["Title", "Operations", "CTRM, then the ERP if the invoice is the same day", "Bill of lading or warehouse receipt. Quantity. Stock that can be sold again."],
            ["Provisional invoice", "Finance", "ERP", "Tax, the commercial reference, the provisional amount."],
            ["Final price and assay", "Middle office, then finance", "CTRM calculates. ERP amends the same invoice.", "Same trade id. Quantity moves if the assay says so."],
            ["Cash", "Finance", "ERP, status back to the CTRM", "The payment. Credit falls."],
            ["The cut", "Middle office proposes. Finance signs.", "CTRM file, ERP journal", "The official fix. Totals. One journal."],
            ["Read", "The board, a regulator, a question", "Warehouse", "The copy you filed. The bridge. Nobody books a deal here."],
          ],
        },
        {
          kind: "p",
          text: "At ten people, two of these names are the same human. The step still has an owner, and the click still has a right. A trader who also clears their own counterparty has no gate.",
        },
      ],
    },
    {
      id: "ctrm",
      title: "The CTRM already knows the words.",
      figures: [
        {
          src: "/trading/formula.png",
          alt: "A commodity price is an index, a quotational period, a premium, then a provisional invoice that a final price updates.",
          height: 447,
        },
      ],
      blocks: [
        {
          kind: "p",
          text: "Buy a system that already contains a physical commodity book. Teaching a generic deal blotter these words is a two-year project with your name on it.",
        },
        {
          kind: "list",
          items: [
            "A physical contract and a paper hedge in one position, by book, commodity, and tenor.",
            "Many parcels under one contract. Nomination, bill of lading, and title are events on the parcel.",
            "A price made of an index, a quotational period, a premium, and a provisional that becomes final, on the same trade id.",
            "The commercial amount. The legal invoice still lives in the ERP.",
            "Inventory in the unit you trade, with grade. An assay can change quantity and that final amount.",
            "Credit used against the limit, falling when finance applies the cash.",
            "A hedge linked to the physical it covers. If finance elects hedge accounting, that link has a designation date and an owner. If they do not, keep the economic link, so the desk can see the flat price.",
            "A mark to market on the official fix, written as a file for the cut. Not a journal.",
          ],
        },
        {
          kind: "p",
          text: "If the firm operates vessels, a voyage system feeds the parcel. If the firm only nominates on someone else's vessel, the BL number lives on the parcel. A chartering suite is the wrong home for a document reference.",
        },
        {
          kind: "p",
          text: "Writing your own CTRM is how a trading firm accidentally becomes a software firm. Buy the book. Spend the effort on master data and on the cut.",
        },
      ],
    },
    {
      id: "erp",
      title: "The ERP closes the company.",
      blocks: [
        {
          kind: "p",
          text: "The ERP is the legal entity. It already knows these jobs. An invoice on a physical book is often provisional, then adjusted when the price and the assay land. The adjustment stays on the same commercial reference.",
        },
        {
          kind: "list",
          items: [
            "Company codes and the chart of accounts.",
            "The vendor and the customer as a legal entity: tax id, address, bank.",
            "A purchase invoice and a sales invoice. Provisional, then amended.",
            "Tax on that invoice.",
            "The payment, and a status the CTRM can read so credit falls.",
            "A journal with a quantity and a value that tie to the trading totals.",
          ],
        },
        {
          kind: "p",
          text: "It does not need a position screen. A project plan that says the position will be built in the ERP is a plan to keep two books.",
        },
        {
          kind: "p",
          text: "Pick the ERP finance can close. On a greenfield that is often the one the group already runs. Pick the CTRM for the commodity words. Making one vendor win both arguments gives you a weaker book or a weaker close.",
        },
      ],
    },
    {
      id: "master-data",
      title: "Master data is the project.",
      figures: [
        {
          src: "/trading/master.png",
          alt: "Six master-data maps: legal entity, counterparty, commodity and unit, place, book, and the index with its ledger account.",
          height: 585,
        },
      ],
      blocks: [
        {
          kind: "p",
          text: "Two vendors will not share a code. Until the maps match, every deal, every invoice, and every report is confident and wrong. Write the owner of each field before the first workshop.",
        },
        {
          kind: "table",
          headers: ["Field", "Who owns the record", "Who else must use that code"],
          rows: [
            ["Legal entity", "ERP", "The CTRM company code on every deal"],
            ["Legal name, tax id, bank", "ERP", "The payment, the tax, the compliance file"],
            ["Trading name", "CTRM", "The contract the desk actually speaks"],
            ["Commodity, grade, unit", "One agreed map", "The position and the invoice quantity"],
            ["Port, plant, tank", "One agreed map", "Inventory and title"],
            ["Book", "CTRM", "Whose position, whose P&L"],
            ["Index", "Market data", "The formula and the cut"],
            ["GL account", "ERP", "The journal line that commodity hits"],
          ],
        },
        {
          kind: "p",
          text: "A tonne is not a lot. A wet tonne is not a dry tonne. A trading name is not the company that owns the bank account. Count the rows that do not match. That count is the scope. A fix that exists only in a report is a second copy of the lie.",
        },
      ],
    },
    {
      id: "counterparty",
      title: "No firm trade before the name is clear.",
      figures: [
        {
          src: "/trading/counterparty.png",
          alt: "A counterparty is allowed only when it is screened, with KYC, a credit limit, and an expiry. A blocked name cannot be traded, and the trader cannot clear it.",
          height: 298,
        },
      ],
      blocks: [
        {
          kind: "p",
          text: "Someone says: the trader knows them. The counterparty is a record with a status. Allowed, blocked, or expired. The status sits on the name in the CTRM, and the trade cannot become firm against a blocked name.",
        },
        {
          kind: "list",
          items: [
            "A sanctions screen, dated.",
            "The KYC pack on the counterparty id. Who owns them. Where they are. The legal name that matches the ERP.",
            "A credit limit, fed by what finance has not collected.",
            "An expiry. A name cleared last year is not cleared today.",
          ],
        },
        {
          kind: "p",
          text: "The trader cannot clear their own counterparty. A named person does, and writes the date. Bank details used to pay are the ERP's, for that legal entity. A change of bank is a call to a number finance already has.",
        },
      ],
    },
    {
      id: "price",
      title: "One official price.",
      figures: [
        {
          src: "/trading/one-price.png",
          alt: "The official fix, dated, values the book and the journal. A private mark stays a labeled scenario.",
          height: 335,
        },
      ],
      blocks: [
        {
          kind: "p",
          text: "One curve store. The CTRM values the book on it. The ledger uses the same fix for the cut. The system does these jobs, and it does not book a trade.",
        },
        {
          kind: "list",
          items: [
            "Each fix has a source, a date, and the index name the formula uses.",
            "The official fix is the number on the valuation file and the number on the journal.",
            "A missing day is a hole, not a copy of yesterday, unless a person writes that rule down.",
            "A trader's private mark is a scenario. It is labeled. It stays off the journal.",
          ],
        },
        {
          kind: "p",
          text: "Two curves in production means two P&Ls, and the meeting will pick the kinder one.",
        },
      ],
    },
    {
      id: "documents",
      title: "The file hangs off the trade.",
      figures: [
        {
          src: "/trading/document.png",
          alt: "Contract, bill of lading, assay, and letter of credit hang off the trade id, rather than a folder named after the month.",
          height: 277,
        },
      ],
      blocks: [
        {
          kind: "p",
          text: "The store holds the evidence. It does not price a deal and it does not post a journal. Each file hangs off an id that already exists.",
        },
        {
          kind: "list",
          items: [
            "The contract and the confirmation, on the trade id.",
            "The bill of lading, the assay, and the warehouse receipt, on the parcel.",
            "The letter of credit, on the trade or on the invoice reference.",
            "The KYC pack, on the counterparty id. Not in a folder called Compliance.",
          ],
        },
        {
          kind: "p",
          text: "This can start as the store the CTRM already has. A separate contract system waits until legal volume has its own clock. The id is decided on day one, so the later system has somewhere to attach. A folder named after the month is how a claim goes missing.",
        },
      ],
    },
    {
      id: "identity",
      title: "Who is allowed to click.",
      figures: [
        {
          src: "/trading/roles.png",
          alt: "A trader captures, middle office values and releases the cut, finance pays. The access stays split.",
          height: 314,
        },
      ],
      blocks: [
        {
          kind: "p",
          text: "One directory. The right is the job, not the person. A person who leaves loses access the same day. The admin of the CTRM is a separate account, used rarely.",
        },
        {
          kind: "list",
          items: [
            "Trader. Captures the deal. Cannot clear the name and cannot release the cut.",
            "Operations. Nominates the parcel and records title.",
            "Middle office. Checks the booking, values the book, releases the cut.",
            "Compliance. Clears a name, with a date. Cannot book.",
            "Finance. Invoices and pays. Owns the ledger.",
          ],
        },
        {
          kind: "p",
          text: "At ten people, two of these seats are the same human. The access is still split, so the firm can add a person later without adding a spreadsheet. The rest of that job is the security playbook.",
        },
      ],
    },
    {
      id: "readers",
      title: "What the warehouse is for.",
      blocks: [
        {
          kind: "p",
          text: "The warehouse arrives after a person has signed a cut. It reads. It does not book, and the CTRM does not ask it whether a cargo can be sold.",
        },
        {
          kind: "list",
          items: [
            "The extract as it was filed, with the date and the totals.",
            "The bridge from the trading totals to the journal.",
            "The question the board, or a regulator, asks next quarter.",
            "A dashboard with the load time in the corner. A chart of a book that does not tie is a rumour.",
          ],
        },
      ],
    },
    {
      id: "order",
      title: "The order you turn them on.",
      figures: [
        {
          src: "/trading/order.png",
          alt: "Turn the systems on in order: six maps and the counterparty gate, new trades, four live flows, a signed cut, the hedge link, then readers.",
          height: 585,
        },
      ],
      blocks: [
        {
          kind: "p",
          text: "Before any vendor workshop, write the six maps and count the rows that do not match. A name that is not allowed cannot be the first firm trade. That count, and that gate, are the plan.",
        },
        {
          kind: "list",
          items: [
            "New trades hit the CTRM, and only against a name that is allowed. History loads once, with the file and the totals kept. The spreadsheet becomes read-only the day the first new trade lands in the book.",
            "Invoices and payments hit the ERP. The four live flows: title to invoice, payment back to credit, stock that can be sold, final price on a provisional.",
            "The clock. Valuation and inventory, with totals a person signs, then the journal.",
            "The hedge link. The physical and the paper that covers it. Credit is already the gate, not a feature you add after the first close.",
            "Documents on the trade id.",
            "The warehouse, the extract as it was filed, one board page with the load time in the corner.",
          ],
        },
        {
          kind: "p",
          text: "The next system waits until one of these six is dull and still too small. A lake, a model, and a dashboard people will love come after the cut ties. A beautiful chart of a book that does not tie is a rumour.",
        },
      ],
    },
    {
      id: "waits",
      title: "What waits.",
      blocks: [
        {
          kind: "list",
          items: [
            "A CTRM you write yourselves.",
            "A second book in a spreadsheet, kept alive until go-live, which never arrives.",
            "A warehouse before the cut has totals.",
            "A dashboard the desk uses to trade.",
            "An integration bus that is also trying to be the data model.",
            "A new platform per commodity, when you still have one desk.",
            "A model reading invoices into a book you have not tied out.",
            "A chartering system whose only job is to store a BL number.",
          ],
        },
      ],
    },
    {
      id: "one-company",
      title: "One company.",
      blocks: [
        {
          kind: "p",
          text: "A mid-size firm. Coal and iron ore. A few legal entities. One desk that hedges. This is a worked example, not a client.",
        },
        {
          kind: "p",
          text: "They buy a CTRM that already has parcels, formula prices, and inventory. They keep the ERP the finance team can already close. Market data is one feed, dated. Documents hang off the trade and the counterparty. Identity is the directory they already use for email, with the clicks split.",
        },
        {
          kind: "p",
          text: "Month 1 is the six maps, the counterparty gate, and new trades in the CTRM. No firm trade against a name that is not allowed. Month 2 is the invoice and the four live flows. Month 3 is the first close a person signed from totals, with the bridge stored. The board page comes after that signature exists. The next desk uses the same six homes.",
        },
      ],
    },
  ],
};

export const tradingGuides = [integrationGuide, setupGuide];
