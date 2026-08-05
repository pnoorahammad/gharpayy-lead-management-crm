import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, aE as usePip, G as Sheet, H as SheetContent, J as SheetHeader, M as SheetTitle } from "./AppShell-Cp2f_YYK.mjs";
import { aC as useAppState, k as Button, U as Label, X as Input, aJ as zones, A as Textarea, B as Badge, aI as teamMembers, Z as Dialog, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, a2 as DialogFooter, q as cn } from "./router-kYRMoTX_.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useNavigate } from "./react-router-dom-DMFzJWOF.mjs";
import { R as RequestAccessSheet, D as DuplicateModal, d as detectZone, p as parseLead } from "./RequestAccessSheet-T4bt5G6i.mjs";
import { u as useIdentityStore } from "./store-CBikX2jm.mjs";
import "../_libs/react-dom.mjs";
import { aP as PictureInPicture2, Z as Zap, bL as FlaskConical, bM as Info, S as Sparkles, bN as CircleCheckBig, bO as CircleX, t as Plus, P as Phone, A as ArrowRight, bP as ClipboardPaste, k as CircleCheck, av as CircleAlert, $ as Search, H as Play, bQ as LoaderCircle, br as Upload, g as TriangleAlert, am as Download, O as MapPin, bR as Repeat2, a9 as Save, X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./store-CeJJuoup.mjs";
import "./analytics-Ds6VG4Ib.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/cmdk.mjs";
import "./personas-DYCrD02E.mjs";
import "../_libs/radix-ui__react-scroll-area.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/date-fns.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/radix-ui__react-label.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./audit-log-BbY99Bzt.mjs";
const emptyDraft = () => ({
  name: "",
  phone: "",
  email: "",
  location: "",
  areas: [],
  fullAddress: "",
  budget: "",
  moveIn: "",
  type: "",
  room: "",
  need: "",
  specialReqs: "",
  inBLR: null,
  zone: "",
  rawSource: ""
});
function PasteToLead({ onCreated }) {
  const checkDuplicates = useIdentityStore((s) => s.checkDuplicates);
  const createLead = useIdentityStore((s) => s.createLead);
  const [raw, setRaw] = reactExports.useState("");
  const [draft, setDraft] = reactExports.useState(emptyDraft());
  const [parsed, setParsed] = reactExports.useState(false);
  const [match, setMatch] = reactExports.useState(null);
  const [showModal, setShowModal] = reactExports.useState(false);
  const detected = reactExports.useMemo(() => ({
    name: !!draft.name,
    phone: !!draft.phone,
    email: !!draft.email,
    location: !!draft.location,
    budget: !!draft.budget,
    moveIn: !!draft.moveIn,
    zone: !!draft.zone
  }), [draft]);
  const onParse = () => {
    const p = parseLead(raw);
    if (!p) {
      toast.error("Couldn't parse — need at least name, phone, or email.");
      return;
    }
    setDraft(p);
    setParsed(true);
    toast.success("Parsed — review fields and run duplicate check.");
  };
  const onPasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setRaw(text);
      const p = parseLead(text);
      if (p) {
        setDraft(p);
        setParsed(true);
        toast.success("Pasted & parsed");
      }
    } catch {
      toast.error("Clipboard blocked — paste manually.");
    }
  };
  const updateField = (k, v) => {
    setDraft((d) => {
      const next = { ...d, [k]: v };
      if (k === "location") {
        next.zone = detectZone(`${v} ${d.rawSource}`);
      }
      return next;
    });
  };
  const onCheckAndSave = () => {
    const r = checkDuplicates(draft);
    setMatch(r);
    setShowModal(true);
  };
  const onForceCreate = () => {
    const lead = createLead(draft);
    toast.success(`Lead created · ULID ${lead.ulid.slice(0, 12)}…`);
    setShowModal(false);
    setRaw("");
    setDraft(emptyDraft());
    setParsed(false);
    setMatch(null);
    onCreated?.(lead);
  };
  const onUseExisting = (lead) => {
    toast.info(`Opening existing lead: ${lead.name}`);
    setShowModal(false);
    onCreated?.(lead);
  };
  const Dot = ({ on }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block h-1.5 w-1.5 rounded-full mr-1.5 ${on ? "bg-primary" : "bg-muted-foreground/30"}` });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-sm flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
            " Paste lead"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "WhatsApp form, plain text, spreadsheet row — anything works." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-8 text-xs gap-1", onClick: onPasteFromClipboard, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardPaste, { className: "h-3.5 w-3.5" }),
            " Paste"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-8 text-xs", onClick: onParse, disabled: !raw.trim(), children: "Parse" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          value: raw,
          onChange: (e) => setRaw(e.target.value),
          placeholder: `Paste anything…

📝 GHARPAYY FORM
Name: Rahul Sharma
Phone: 9876543210
Location: Koramangala
Budget: 8-12k
Move-in: 1 May`,
          className: "min-h-32 font-mono text-xs"
        }
      )
    ] }),
    parsed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", children: "Review parsed fields" }),
        draft.zone && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-[10px]", children: [
          "Zone · ",
          draft.zone
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { on: detected.name }),
            "Name"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.name, onChange: (e) => updateField("name", e.target.value), className: "h-9 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { on: detected.phone }),
            "Phone"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.phone, onChange: (e) => updateField("phone", e.target.value), className: "h-9 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { on: detected.email }),
            "Email"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.email, onChange: (e) => updateField("email", e.target.value), className: "h-9 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { on: detected.location }),
            "Location / Area"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.location, onChange: (e) => updateField("location", e.target.value), className: "h-9 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { on: detected.budget }),
            "Budget"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.budget, onChange: (e) => updateField("budget", e.target.value), className: "h-9 text-sm", placeholder: "e.g. 8-12k" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { on: detected.moveIn }),
            "Move-in"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.moveIn, onChange: (e) => updateField("moveIn", e.target.value), className: "h-9 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.type, onChange: (e) => updateField("type", e.target.value), className: "h-9 text-sm", placeholder: "Student / Working" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", children: "Room" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.room, onChange: (e) => updateField("room", e.target.value), className: "h-9 text-sm", placeholder: "Private / Shared / Both" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground flex items-center gap-2", children: Object.values(detected).filter(Boolean).length >= 3 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-primary" }),
        " Enough signals to dedup safely"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3.5 w-3.5 text-warning" }),
        " Add more fields for stronger dedup confidence"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: onCheckAndSave, className: "w-full h-10 gap-2", disabled: !draft.name && !draft.phone && !draft.email, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }),
        " Check duplicates & save"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DuplicateModal,
      {
        open: showModal,
        onClose: () => setShowModal(false),
        result: match,
        onForceCreate,
        onUseExisting
      }
    )
  ] });
}
function parseCsv(text) {
  const rows = [];
  let cur = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') inQuotes = false;
      else field += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ",") {
        cur.push(field);
        field = "";
      } else if (c === "\n") {
        cur.push(field);
        rows.push(cur);
        cur = [];
        field = "";
      } else if (c === "\r") ;
      else field += c;
    }
  }
  if (field.length || cur.length) {
    cur.push(field);
    rows.push(cur);
  }
  if (rows.length === 0) return [];
  const headers = rows[0];
  return rows.slice(1).filter((r) => r.length > 1).map((r) => {
    const o = {};
    headers.forEach((h, i) => {
      o[h.trim()] = r[i] ?? "";
    });
    return o;
  });
}
const REQUIRED_FOR_PARSED = ["name", "phone"];
function classify(p) {
  if (!p) return { status: "failed", missing: ["name", "phone", "location", "budget"] };
  const missing = [];
  if (!p.name) missing.push("name");
  if (!p.phone) missing.push("phone");
  if (!p.email) missing.push("email");
  if (!p.location) missing.push("location");
  if (!p.budget) missing.push("budget");
  const hasReq = REQUIRED_FOR_PARSED.every((k) => (p[k] ?? "").toString().trim().length > 0);
  const hasContact = !!(p.phone || p.email);
  if (hasReq && (p.location || p.budget)) return { status: "parsed", missing };
  if (hasContact) return { status: "usable", missing };
  return { status: "failed", missing };
}
function runParserSuite(rawSamples) {
  const t0 = performance.now();
  const rows = [];
  const missing = { phone: 0, location: 0, budget: 0, name: 0, email: 0 };
  let parsed = 0, usable = 0, failed = 0;
  let zoneHits = 0, zoneSample = 0;
  rawSamples.forEach((raw, i) => {
    const p = parseLead(raw);
    const { status, missing: miss } = classify(p);
    if (status === "parsed") parsed++;
    else if (status === "usable") usable++;
    else failed++;
    miss.forEach((m) => {
      if (m in missing) missing[m]++;
    });
    if (p && p.location) {
      zoneSample++;
      const expected = detectZone(p.location);
      if (expected && expected === p.zone) zoneHits++;
      else if (!expected && !p.zone) zoneHits++;
    }
    rows.push({
      index: i,
      raw,
      parsed: p,
      status,
      missing: miss,
      reason: !p ? "Parser returned null (no name/phone/email signal)" : void 0
    });
  });
  return {
    total: rawSamples.length,
    parsed,
    usable,
    failed,
    missing,
    zoneAccuracy: zoneSample === 0 ? 0 : Math.round(zoneHits / zoneSample * 1e3) / 10,
    zoneSample,
    rows,
    durationMs: Math.round(performance.now() - t0)
  };
}
function extractSamplesFromCsv(csvText) {
  const rows = parseCsv(csvText);
  const out = [];
  for (const row of rows) {
    const candidate = row.rawText ?? row.raw ?? row.text ?? row.paste ?? "";
    if (candidate && candidate.trim().length > 4) out.push(candidate);
  }
  return out;
}
const BUILTIN_SAMPLES = [
  `Name: Vemula Shanmukha Sai \\nPhone: 9398992589\\nEmail: saishanmukha390@gmail.com \\nPreferred location : Koramangala\\nBudget range: 8k - 12k\\nMove in date: tomorrow \\nWorking \\nShared room`,
  `Name: Riya\\r\\nPhone: 9111310344\\r\\nLocation: Near Christ University Central Campus Bangalore\\r\\nBudget: Within ₹20k\\r\\nMove in date: June first week\\r\\nStudent\\r\\nGirls pg preferable`,
  `📝 *Name:*  Keshav Kakkar\\r\\n📱 *Phone:*  8218844116\\r\\n✉️ *Email:*  kaka.kakkar3110@gmail.com\\r\\n📍 *Preferred Location:*  HustleHub Tech Park, HSR Layout\\r\\n💰 *Budget Range:* ₹8-16k monthly\\r\\n📆 *Move-in Date:*  Last week of April\\r\\nWorking \\r\\n🏢 Shared\\r\\n👫 NEED Boys`,
  `Abhineet\\r\\n8400411502\\r\\nabhineet738@gmail.com\\r\\nPreferred location: HSR Layout\\r\\nBudget: 13-16k\\r\\nMove in date: 1st May\\r\\nWorking professional\\r\\nRoom Type: Private\\r\\nNeed: Coed`,
  `Priya 9876543210 Indiranagar 12k May 5`,
  `not filled`,
  `Karthik\\n+91 824 869 6034\\nWhitefield\\nbudget 9000\\nimmediate`
];
function ParserTestModal({ open, onClose }) {
  const [report, setReport] = reactExports.useState(null);
  const [running, setRunning] = reactExports.useState(false);
  const fileRef = reactExports.useRef(null);
  const runBuiltin = () => {
    setRunning(true);
    setTimeout(() => {
      setReport(runParserSuite(BUILTIN_SAMPLES));
      setRunning(false);
    }, 50);
  };
  const onFile = async (file) => {
    setRunning(true);
    try {
      const text = await file.text();
      const samples = extractSamplesFromCsv(text);
      if (samples.length === 0) {
        toast.error("No `rawText` column found in CSV");
        setRunning(false);
        return;
      }
      setReport(runParserSuite(samples));
    } catch (e) {
      toast.error(`Test failed: ${e.message}`);
    } finally {
      setRunning(false);
    }
  };
  const downloadFailed = () => {
    if (!report) return;
    const failed = report.rows.filter((r) => r.status === "failed");
    const csv = "index,reason,raw\n" + failed.map(
      (r) => `${r.index},"${(r.reason ?? "").replace(/"/g, '""')}","${r.raw.replace(/"/g, '""').replace(/\n/g, "\\n")}"`
    ).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `parser-failures-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
      " Lead Parser Test Suite"
    ] }) }),
    !report && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "Run the parser against a CSV of raw pastes (must include a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "rawText" }),
        " column) or use the built-in real-world sample set."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: runBuiltin, disabled: running, className: "gap-2", children: [
          running ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
          "Run built-in suite (",
          BUILTIN_SAMPLES.length,
          " samples)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => fileRef.current?.click(), disabled: running, className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
          " Upload CSV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: fileRef,
            type: "file",
            accept: ".csv,text/csv",
            hidden: true,
            onChange: (e) => e.target.files?.[0] && onFile(e.target.files[0])
          }
        )
      ] })
    ] }),
    report && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Total", value: report.total, tone: "neutral" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Parsed ✅", value: report.parsed, tone: "good" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Failed ❌", value: report.failed, tone: "bad" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-3 space-y-1.5 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Usable (contact only)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: report.usable })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Zone accuracy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
            report.zoneAccuracy,
            "% ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", children: [
              "(",
              report.zoneSample,
              " sampled)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Run time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
            report.durationMs,
            " ms"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5", children: "Missing fields" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: Object.entries(report.missing).map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: v === 0 ? "secondary" : "destructive", className: "capitalize", children: [
          k,
          ": ",
          v
        ] }, k)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border max-h-56 overflow-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 text-muted-foreground sticky top-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-2 py-1.5", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-2 py-1.5", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-2 py-1.5", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-2 py-1.5", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-2 py-1.5", children: "Zone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-2 py-1.5", children: "Missing" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: report.rows.slice(0, 50).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1 tabular-nums", children: r.index + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-2 py-1", children: [
              r.status === "parsed" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-500" }),
              r.status === "usable" && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 text-amber-500" }),
              r.status === "failed" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3.5 w-3.5 text-destructive" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1 truncate max-w-32", children: r.parsed?.name || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1 tabular-nums", children: r.parsed?.phone || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1", children: r.parsed?.zone || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1 text-[10px] text-muted-foreground", children: r.missing.join(", ") || "none" })
          ] }, r.index)) })
        ] }),
        report.rows.length > 50 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground text-center py-1.5", children: [
          "+ ",
          report.rows.length - 50,
          " more rows"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2", children: [
      report && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setReport(null), children: "Re-run" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: downloadFailed, disabled: report.failed === 0, className: "gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
          " Download failed rows"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: onClose, children: "Close" })
    ] })
  ] }) });
}
function Stat({ label, value, tone }) {
  const cls = tone === "good" ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400" : tone === "bad" ? "border-destructive/30 bg-destructive/5 text-destructive" : "border-border bg-muted/30 text-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border p-3 ${cls}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider opacity-80", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold tabular-nums", children: value })
  ] });
}
const todayIso = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
const ZONE_BUCKETS = [
  "CENTRAL STUDENTS",
  "CU YPR / STUDENTS / WORKING",
  "HOMES KORA",
  "HOMES MWB",
  "KORA CORE",
  "MTECH HUB",
  "MWB MORE",
  "OTHERS COLLEGE STUDENTS",
  "YPR MAJOR MAIN",
  "OTHERS"
];
const STAGES = [
  "MYT [TENANT]",
  "2A. Options Shared – BLR",
  "2B. Options Shared – Non-BLR",
  "3A. Visit Intent Confirmed",
  "3B. try.prebook / virtual tour Intent",
  "4A. Visit Scheduled in BLR",
  "5A. Visit Done",
  "Finalizing",
  "WON 🏆",
  "LOST 😭"
];
const TYPE_OPTS = ["Student", "Working", "Intern", "Family", "Other"];
const ROOM_OPTS = ["Private", "Shared", "Both", "Studio"];
const NEED_OPTS = ["Boys", "Girls", "Coed"];
const QUALITY_OPTS = [
  { v: "hot", label: "🔥 Hot" },
  { v: "good", label: "✅ Good" },
  { v: "bad", label: "❌ Bad" }
];
const BLR_OPTS = [
  { v: true, label: "🏙 In" },
  { v: false, label: "✈️ Out" },
  { v: null, label: "❓ Unknown" }
];
function QuickAddLeadPanel({ open, onClose }) {
  const checkDup = useIdentityStore((s) => s.checkDuplicates);
  const create = useIdentityStore((s) => s.createLead);
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [areasText, setAreasText] = reactExports.useState("");
  const [fullAddress, setFullAddress] = reactExports.useState("");
  const [budget, setBudget] = reactExports.useState("");
  const [moveIn, setMoveIn] = reactExports.useState(todayIso());
  const [type, setType] = reactExports.useState("");
  const [room, setRoom] = reactExports.useState("");
  const [need, setNeed] = reactExports.useState("");
  const [specialReqs, setSpecialReqs] = reactExports.useState("");
  const [inBLR, setInBLR] = reactExports.useState(null);
  const [quality, setQuality] = reactExports.useState(null);
  const [zoneBucket, setZoneBucket] = reactExports.useState("");
  const [assigneeId, setAssigneeId] = reactExports.useState("");
  const [stage, setStage] = reactExports.useState(STAGES[0]);
  const [notes, setNotes] = reactExports.useState("");
  const nameRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (open) setTimeout(() => nameRef.current?.focus(), 50);
  }, [open]);
  const detectedZone = reactExports.useMemo(
    () => detectZone(`${areasText} ${fullAddress}`),
    [areasText, fullAddress]
  );
  const reset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setAreasText("");
    setFullAddress("");
    setBudget("");
    setMoveIn(todayIso());
    setType("");
    setRoom("");
    setNeed("");
    setSpecialReqs("");
    setInBLR(null);
    setQuality(null);
    setZoneBucket("");
    setAssigneeId("");
    setStage(STAGES[0]);
    setNotes("");
    setTimeout(() => nameRef.current?.focus(), 30);
  };
  const save = (keepOpen) => {
    if (!name.trim() || !phone.replace(/\D/g, "").match(/^[6-9]\d{9}$/)) {
      toast.error("Need a name and a valid 10-digit phone");
      return;
    }
    const dup = checkDup({ name, phone, email, location: areasText });
    if (dup.type === "exact" || dup.type === "strong") {
      toast.warning(`Duplicate detected: ${dup.candidates[0]?.lead.name}`);
      return;
    }
    const areasArr = areasText.split(",").map((a) => a.trim()).filter(Boolean);
    const assignee = teamMembers.find((m) => m.id === assigneeId);
    const lead = create(
      {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        location: areasText.trim(),
        areas: areasArr,
        fullAddress: fullAddress.trim(),
        budget: budget.trim(),
        moveIn,
        type,
        room,
        need,
        specialReqs: [specialReqs, notes].filter(Boolean).join(" · "),
        inBLR,
        zone: detectedZone,
        rawSource: `[QuickAdd] ${name} ${phone}`
      },
      {
        quality,
        stage,
        zoneCategory: zoneBucket,
        assigneeId: assignee?.id ?? null,
        assigneeName: assignee?.name ?? null
      }
    );
    toast.success(`Lead saved · ${lead.name}`);
    if (keepOpen) reset();
    else onClose();
  };
  const onAnyPaste = (e) => {
    const txt = e.clipboardData.getData("text");
    if (!txt || txt.length < 30) return;
    const parsed = parseLead(txt);
    if (!parsed) return;
    e.preventDefault();
    if (parsed.name) setName(parsed.name);
    if (parsed.phone) setPhone(parsed.phone);
    if (parsed.email) setEmail(parsed.email);
    if (parsed.areas?.length) setAreasText(parsed.areas.join(", "));
    else if (parsed.location) setAreasText(parsed.location);
    if (parsed.fullAddress) setFullAddress(parsed.fullAddress);
    if (parsed.budget) setBudget(parsed.budget);
    if (parsed.moveIn && /^\d{4}-\d{2}-\d{2}$/.test(parsed.moveIn)) setMoveIn(parsed.moveIn);
    if (parsed.type) setType(parsed.type);
    if (parsed.room) setRoom(parsed.room);
    if (parsed.need) setNeed(parsed.need.split(" / ")[0] ?? parsed.need);
    if (parsed.specialReqs) setSpecialReqs(parsed.specialReqs);
    if (parsed.inBLR !== null) setInBLR(parsed.inBLR);
    toast.success("Auto-filled from WhatsApp paste");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SheetContent,
    {
      side: "right",
      className: "w-full sm:max-w-lg flex flex-col p-0",
      onKeyDown: (e) => {
        if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          save(false);
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "px-5 pt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
            " Quick Add Lead"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
            "Paste a WhatsApp message into ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "any" }),
            " field → auto-fills every column · ⌘/Ctrl + Enter saves"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-5 py-4 space-y-3", onPaste: onAnyPaste, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "👤 Name *", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ref: nameRef, value: name, onChange: (e) => setName(e.target.value), placeholder: "Rahul Sharma" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "📱 Phone *", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "98xxxxxxxx", inputMode: "tel" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "✉️ Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: email, onChange: (e) => setEmail(e.target.value), placeholder: "name@example.com", inputMode: "email" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: "📍 Areas (comma-separated)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: areasText,
                  onChange: (e) => setAreasText(e.target.value),
                  placeholder: "HSR Layout, BTM, Koramangala"
                }
              ),
              detectedZone && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "absolute right-1.5 top-1/2 -translate-y-1/2 text-[10px]", children: detectedZone })
            ] }),
            areasText.includes(",") && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-primary mt-1 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-2.5 w-2.5" }),
              " Multiple Areas Detected"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "🏠 Full Address / Map link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: fullAddress,
              onChange: (e) => setFullAddress(e.target.value),
              rows: 2,
              placeholder: "Door no, street, landmark or Google Maps URL",
              className: "resize-none"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "💰 Budget", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: budget, onChange: (e) => setBudget(e.target.value), placeholder: "8-12k" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "📅 Move-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: moveIn, onChange: (e) => setMoveIn(e.target.value) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "💼 Type", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChipGroup, { options: TYPE_OPTS, value: type, onChange: setType }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "🛏 Room", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChipGroup, { options: ROOM_OPTS, value: room, onChange: setRoom }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "👥 Need", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChipGroup, { options: NEED_OPTS, value: need, onChange: setNeed }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "⭐ Special Requests", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: specialReqs,
              onChange: (e) => setSpecialReqs(e.target.value),
              rows: 2,
              placeholder: "Veg only · attached washroom · top floor…",
              className: "resize-none"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Currently in Bangalore?", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChipGroup,
            {
              options: BLR_OPTS.map((o) => o.label),
              value: BLR_OPTS.find((o) => o.v === inBLR)?.label ?? "",
              onChange: (label) => setInBLR(BLR_OPTS.find((o) => o.label === label)?.v ?? null)
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lead Quality", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChipGroup,
            {
              options: QUALITY_OPTS.map((o) => o.label),
              value: QUALITY_OPTS.find((o) => o.v === quality)?.label ?? "",
              onChange: (label) => setQuality(QUALITY_OPTS.find((o) => o.label === label)?.v ?? null)
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Zone *", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: zoneBucket,
              onChange: (e) => setZoneBucket(e.target.value),
              className: "w-full h-9 bg-background border border-border rounded-md px-2 text-xs",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select zone bucket…" }),
                ZONE_BUCKETS.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: z, children: z }, z))
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Assign Member", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: assigneeId,
              onChange: (e) => setAssigneeId(e.target.value),
              className: "w-full h-9 bg-background border border-border rounded-md px-2 text-xs",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Unassigned" }),
                teamMembers.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m.id, children: m.name }, m.id))
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lead Stage", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: stage,
              onChange: (e) => setStage(e.target.value),
              className: "w-full h-9 bg-background border border-border rounded-md px-2 text-xs",
              children: STAGES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "📝 Notes", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: notes,
              onChange: (e) => setNotes(e.target.value),
              rows: 2,
              placeholder: "Free notes…",
              className: "resize-none"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-5 py-3 flex flex-col gap-2 bg-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => save(true), variant: "outline", size: "sm", className: "flex-1 gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Repeat2, { className: "h-3.5 w-3.5" }),
              " Save + Next"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => save(false), size: "sm", className: "flex-1 gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-3.5 w-3.5" }),
              " Save"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, className: "gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground text-center", children: "Tip: paste a WhatsApp message anywhere → all fields auto-fill · ⌘/Ctrl + Enter to save" })
        ] })
      ]
    }
  ) });
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground uppercase tracking-wide", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5", children })
  ] });
}
function ChipGroup({ options, value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: () => onChange(value === opt ? "" : opt),
      className: cn(
        "px-2 py-1 text-[11px] rounded-md border transition-colors",
        value === opt ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border text-muted-foreground hover:text-foreground"
      ),
      children: opt
    },
    opt
  )) });
}
function MYTLeadTracker() {
  const { leads, setLeads, currentMemberId } = useAppState();
  const navigate = useNavigate();
  const [mode, setMode] = reactExports.useState("paste");
  const identityLeadCount = useIdentityStore((s) => s.leads.length);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [showParserTest, setShowParserTest] = reactExports.useState(false);
  const [showQuickAdd, setShowQuickAdd] = reactExports.useState(false);
  const { open: openPip, close: closePip, active: pipActive, supported: pipSupported } = usePip();
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    area: "",
    budget: "10000",
    moveInDate: "",
    dateConfirmed: false
  });
  const myLeads = currentMemberId ? leads.filter((l) => l.addedBy === currentMemberId) : leads;
  const qualified = myLeads.filter((l) => l.mytQualified);
  const unqualified = myLeads.filter((l) => !l.mytQualified);
  const handleSubmit = (e) => {
    e.preventDefault();
    const budget = parseInt(form.budget);
    const moveIn = new Date(form.moveInDate);
    const areaCovered = zones.some((z) => z.area.toLowerCase() === form.area.toLowerCase());
    const daysToMoveIn = (moveIn.getTime() - Date.now()) / (1e3 * 60 * 60 * 24);
    const mytQualified = areaCovered && budget >= 7e3 && daysToMoveIn <= 15 && form.dateConfirmed;
    const agent = currentMemberId ? teamMembers.find((m) => m.id === currentMemberId) : teamMembers.find((m) => m.role === "flow-ops");
    const newLead = {
      id: `l${Date.now()}`,
      name: form.name,
      phone: form.phone,
      area: form.area,
      budget,
      moveInDate: form.moveInDate,
      dateConfirmed: form.dateConfirmed,
      status: mytQualified ? "qualified" : "contacted",
      mytQualified,
      addedBy: agent?.id || "m1",
      addedByName: agent?.name || "Rahul Sharma",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      notes: ""
    };
    setLeads((prev) => [newLead, ...prev]);
    toast.success(mytQualified ? "MYT Qualified! Ready for tour" : "Lead added — not MYT qualified");
    setForm({ name: "", phone: "", area: "", budget: "10000", moveInDate: "", dateConfirmed: false });
    setShowForm(false);
  };
  const pushToTour = (lead) => {
    navigate("/myt/schedule", { state: { lead } });
  };
  const selectClass = "w-full h-10 bg-surface-2 border border-border rounded-md px-3 text-sm text-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-slide-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", children: "MYT Lead Tracker" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "Paste any format · auto-dedup against ",
          identityLeadCount,
          " unified leads"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: pipActive ? "secondary" : "default",
            onClick: () => pipActive ? closePip() : openPip(),
            disabled: !pipSupported && !pipActive,
            className: "h-8 text-xs gap-1.5",
            title: pipSupported ? "Pop dashboard out as a floating window over WhatsApp" : "Document Picture-in-Picture not supported in this browser",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PictureInPicture2, { className: "h-3.5 w-3.5" }),
              pipActive ? "Exit PiP" : "Open PiP"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "default",
            onClick: async () => {
              if (!pipActive && pipSupported) await openPip();
              setShowQuickAdd(true);
            },
            disabled: !pipSupported && !pipActive,
            className: "h-8 text-xs gap-1.5 bg-accent text-accent-foreground hover:bg-accent/90",
            title: "Open PiP and immediately start adding a lead inside the floating window",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PictureInPicture2, { className: "h-3.5 w-3.5" }),
              " PiP + Add Lead"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => setShowQuickAdd(true), className: "h-8 text-xs gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5" }),
          " Quick Add"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => setShowParserTest(true), className: "h-8 text-xs gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "h-3.5 w-3.5" }),
          " Run Parser Test"
        ] })
      ] })
    ] }),
    !pipSupported && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-3 text-xs flex items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-muted-foreground shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: "Picture-in-Picture isn't available in this browser." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", children: [
          "For the floating dashboard, open this site in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Chrome, Edge, Brave or Opera" }),
          " on desktop. Alternative: use split-screen (Windows: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "px-1 rounded border border-border", children: "Win" }),
          "+",
          /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "px-1 rounded border border-border", children: "←" }),
          " · macOS: drag tab into a Stage Manager group)."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 rounded-lg border border-border p-0.5 bg-surface-2/50 w-fit", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setMode("paste"), className: `px-2.5 py-1 text-[11px] rounded-md ${mode === "paste" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 inline mr-1" }),
        "Paste"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("manual"), className: `px-2.5 py-1 text-[11px] rounded-md ${mode === "manual" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, children: "Manual" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("requests"), className: `px-2.5 py-1 text-[11px] rounded-md ${mode === "requests" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, children: "Requests" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-role-tcm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-heading font-bold text-foreground", children: qualified.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "MYT Qualified" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-5 w-5 text-danger" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-heading font-bold text-foreground", children: unqualified.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Not Qualified" })
        ] })
      ] })
    ] }),
    mode === "paste" && /* @__PURE__ */ jsxRuntimeExports.jsx(PasteToLead, {}),
    mode === "requests" && /* @__PURE__ */ jsxRuntimeExports.jsx(RequestAccessSheet, {}),
    mode === "manual" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => setShowForm(!showForm), className: "h-8 text-xs gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
      " ",
      showForm ? "Hide form" : "Manual MYT form"
    ] }) }),
    mode === "manual" && showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "glass-card p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.name, onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })), required: true, className: "bg-surface-2 border-border" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.phone, onChange: (e) => setForm((f) => ({ ...f, phone: e.target.value })), required: true, className: "bg-surface-2 border-border" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", children: "Area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.area, onChange: (e) => setForm((f) => ({ ...f, area: e.target.value })), className: selectClass, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Area" }),
            zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: z.area, children: z.area }, z.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", children: "Budget (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: form.budget, onChange: (e) => setForm((f) => ({ ...f, budget: e.target.value })), className: "bg-surface-2 border-border" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", children: "Move-in Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: form.moveInDate, onChange: (e) => setForm((f) => ({ ...f, moveInDate: e.target.value })), required: true, className: "bg-surface-2 border-border" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: form.dateConfirmed, onChange: (e) => setForm((f) => ({ ...f, dateConfirmed: e.target.checked })), className: "rounded" }),
        "Date confirmed by lead"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", children: "Add & Qualify Lead" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-role-tcm", children: "✅ MYT Qualified — Push to Tour" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        qualified.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-4", children: "No qualified leads yet" }),
        qualified.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-3 py-2.5 rounded-lg bg-surface-2/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", children: l.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs ml-2", children: [
              l.area,
              " · ₹",
              l.budget.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs ml-2", children: [
              "Move-in: ",
              l.moveInDate
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${l.phone}`, className: "p-2 rounded-md bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }) }),
            l.status !== "tour-scheduled" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => pushToTour(l), className: "h-8 text-xs gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" }),
              " Schedule Tour"
            ] }),
            l.status === "tour-scheduled" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-1 rounded-full bg-role-tcm/15 text-role-tcm", children: "Tour Set" })
          ] })
        ] }, l.id))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-danger", children: "❌ Not Qualified" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        unqualified.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-4", children: "All leads are qualified!" }),
        unqualified.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-3 py-2.5 rounded-lg bg-surface-2/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", children: l.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs ml-2", children: [
              l.area,
              " · ₹",
              l.budget.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 flex-wrap", children: [
            l.budget < 7e3 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-danger/10 text-danger", children: "Low budget" }),
            !l.dateConfirmed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-warning/10 text-warning", children: "No date" }),
            !zones.some((z) => z.area === l.area) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-danger/10 text-danger", children: "Area N/A" })
          ] })
        ] }, l.id))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParserTestModal, { open: showParserTest, onClose: () => setShowParserTest(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickAddLeadPanel, { open: showQuickAdd, onClose: () => setShowQuickAdd(false) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MYTLeadTracker, {}) });
export {
  SplitComponent as component
};
