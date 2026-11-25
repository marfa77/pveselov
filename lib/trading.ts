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

export type GuideSection = {
  id: string;
  title: string;
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
    "The application setup I would stand up for a physical commodity firm starting from zero: one home per fact, the order you turn the systems on, and what waits until the book ties out.",
  kicker: "Commodity trading",
  lede: [
    "Someone says: we'll buy a platform.",
    "You are standing up a short list of homes. Each fact lives in one of them. I have run this shape on a physical book: a CTRM, SAP Finance, and a warehouse the reports actually used.",
    "The products can change. The homes do not. If a sentence below does not match the firm in front of you, the firm is the special case, and it should be written down.",
  ],
  sections: [
    {
      id: "six-homes",
      title: "Six homes.",
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
      id: "ctrm",
      title: "The CTRM already knows the words.",
      blocks: [
        {
          kind: "p",
          text: "Buy a system that already contains a physical commodity book. Teaching a generic deal blotter these words is a two-year project with your name on it.",
        },
        {
          kind: "list",
          items: [
            "Physical and paper in one position.",
            "A contract with many parcels.",
            "A price made of an index, a quotational period, a premium, and a provisional that becomes final.",
            "Inventory in the unit you trade, with quality. An assay can change quantity and the final invoice.",
            "A hedge linked to the physical it covers. If finance elects hedge accounting, that link has a designation date and an owner. If they do not, keep the economic link anyway, so the desk can see the flat price.",
            "Title, shipment, and invoice as events on the same trade.",
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
          text: "The ERP already knows legal entities, a chart of accounts, tax, a vendor invoice, a customer invoice, and a payment. An invoice on a physical book is often provisional, then adjusted when the price and the assay land. The ERP has to carry that adjustment on the same commercial reference.",
        },
        {
          kind: "p",
          text: "It takes a journal with a quantity and a value that tie to a trading total. It does not need a position screen. A project plan that says the position will be built in the ERP is a plan to keep two books.",
        },
        {
          kind: "p",
          text: "Pick the ERP finance can close. On a greenfield that is often the one the group already runs. Pick the CTRM for the commodity words. Making one vendor win both arguments gives you a weaker book or a weaker close.",
        },
      ],
    },
    {
      id: "price",
      title: "One official price.",
      blocks: [
        {
          kind: "p",
          text: "One curve store. The CTRM values the book on it. Each fix has a source and a date. The ledger uses the same fix for the cut.",
        },
        {
          kind: "p",
          text: "A trader's private mark is a scenario. It is labeled. It stays off the journal. Two curves in production means two P&Ls, and the meeting will pick the kinder one.",
        },
      ],
    },
    {
      id: "documents",
      title: "The file hangs off the trade.",
      blocks: [
        {
          kind: "p",
          text: "Confirmations, contracts, bills of lading, assays, letters of credit. Each file hangs off a trade id, a parcel id, or a counterparty id. A folder named after the month is how a claim goes missing.",
        },
        {
          kind: "p",
          text: "This can start as a store the CTRM already has. A separate contract system waits until legal volume has its own clock. The id it hangs from is decided on day one, so the later system has somewhere to attach.",
        },
      ],
    },
    {
      id: "identity",
      title: "Who is allowed to click.",
      blocks: [
        {
          kind: "p",
          text: "One directory. A trader can capture. Middle office can value and release the cut. Finance can pay. The admin of the CTRM is a separate account, used rarely. A person who leaves loses access the same day.",
        },
        {
          kind: "p",
          text: "At ten people, two of these roles are the same human. The access is still split, so the firm can add a seat later. The rest of that job is the security playbook.",
        },
      ],
    },
    {
      id: "order",
      title: "The order you turn them on.",
      blocks: [
        {
          kind: "p",
          text: "Before any vendor workshop, write four maps and count the rows that do not match. Legal entity. Counterparty, trading name and legal name. Commodity and unit. Location and plant. That count is the plan.",
        },
        {
          kind: "list",
          items: [
            "New trades hit the CTRM. History loads once, with the file and the totals kept. The spreadsheet becomes read-only the day the first new trade lands in the book.",
            "Invoices and payments hit the ERP. The four live flows: title to invoice, payment back to credit, stock that can be sold, final price on a provisional.",
            "The clock. Valuation and inventory, with totals a person signs, then the journal.",
            "Credit limit and the hedge link. A trade past the limit needs a name on it.",
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
          text: "They buy a CTRM that already has parcels, formula prices, and inventory. They keep the ERP the finance team can already close. Market data is one feed, dated. Documents hang off the trade. Identity is the directory they already use for email, with the three roles split.",
        },
        {
          kind: "p",
          text: "Month 1 is master data and new trades in the CTRM. Month 2 is the invoice and the four live flows. Month 3 is the first close a person signed from totals, with the bridge stored. The board page comes after that signature exists. The next desk uses the same six homes.",
        },
      ],
    },
  ],
};

export const tradingGuides = [integrationGuide, setupGuide];
