import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { k as Button, Z as Dialog, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, a4 as DialogDescription, a2 as DialogFooter } from "./router-Brs45mHz.mjs";
import { u as useIdentityStore } from "./store-CBikX2jm.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { as as Inbox, b as Check, X, S as Sparkles, $ as Search, g as TriangleAlert, af as ShieldAlert, A as ArrowRight, w as Shield, a8 as Lock, U as UserPlus, bh as Eye } from "../_libs/lucide-react.mjs";
import { b as formatDistanceToNow } from "../_libs/date-fns.mjs";
const ZONES = [
  {
    zone: "South",
    priority: 1,
    keywords: [
      "koramangala",
      "kormangala",
      "kormagalam",
      "kormanagala",
      "korma",
      "btm layout",
      "btm",
      "jayanagar",
      "jaynagar",
      "jp nagar",
      "jpnagar",
      "hsr layout",
      "hsr",
      "banashankari",
      "basavanagudi",
      "lalbagh",
      "south end",
      "southend",
      "electronic city",
      "neeladri",
      "begur",
      "bommanahalli",
      "hulimavu",
      "sg palya",
      "silk board",
      "silkboard",
      "agara",
      "madiwala",
      "tavarekere",
      "christ university",
      "bannerghatta",
      "kanakapura",
      "kalena agrahara",
      "hosur road",
      "forum mall",
      "vv puram",
      "jayadev hospital",
      "jayanagar 9th",
      "btm 2nd stage",
      "btm stage 2",
      "koramangala 3rd",
      "koramangala 4th",
      "koramangala 5th",
      "koramangala 6th",
      "umiya emporium",
      "nexus mall"
    ]
  },
  {
    zone: "East",
    priority: 2,
    keywords: [
      "whitefield",
      "white field",
      "hopefarm",
      "itpl",
      "kundanahalli",
      "kundalahalli",
      "kadugodi",
      "brookfield",
      "hoodi",
      "garudacharpalya",
      "varthur",
      "nallurhalli",
      "kr puram",
      "seetharampalya",
      "seetharam palya",
      "bellandur",
      "sarjapur",
      "ecospace",
      "embassy tech village",
      "prestige tech park",
      "prestige technopark",
      "yemalur",
      "indiranagar",
      "indranagar",
      "indira nagar",
      "domlur",
      "ejipura",
      "murgeshpalya",
      "cv raman nagar",
      "new thippasandra",
      "old airport road",
      "airport road",
      "hal",
      "marathahalli",
      "marathalli",
      "mahadevapura",
      "mahadevpura",
      "bagmane",
      "brigade tech",
      "kadubeesanahalli",
      "kadubeesana",
      "spice garden",
      "phoenix market city",
      "brigade metropolis",
      "rmz infinity",
      "prestige shantiniketan",
      "whitefield metro",
      "aecs layout",
      "aecs"
    ]
  },
  {
    zone: "North",
    priority: 3,
    keywords: [
      "yelahanka",
      "hebbal",
      "manyata tech",
      "manyata",
      "manyatha",
      "nagawara",
      "thanisandra",
      "jakkur",
      "banaswadi",
      "kalyan nagar",
      "rt nagar",
      "sahakara nagar",
      "devanahalli",
      "vidyaranyapura",
      "jalahalli",
      "bhartiya",
      "embassy boulevard",
      "nagasandra",
      "hennur",
      "peenya",
      "yeshwanthpur",
      "ypr"
    ]
  },
  {
    zone: "West",
    priority: 4,
    keywords: [
      "rajajinagar",
      "vijaynagar",
      "vijaya nagar",
      "yeswanthpur",
      "nagarbhavi",
      "chord road",
      "mahalakshmi layout",
      "malleshwaram",
      "tumkur road",
      "sanjayanagara",
      "chandra layout"
    ]
  },
  {
    zone: "Central",
    priority: 5,
    keywords: [
      "mg road",
      "brigade road",
      "richmond road",
      "richmond circle",
      "shanthinagar",
      "ashok nagar",
      "vittal mallya",
      "jayamahal",
      "majestic",
      "gandhi nagar",
      "frazer town",
      "cubbon park",
      "ub city",
      "vasanth nagar",
      "trinity circle",
      "halasuru",
      "church street",
      "lavelle road",
      "residency road",
      "museum road",
      "adugodi",
      "wilson garden",
      "cunningham"
    ]
  }
];
function detectZone(rawText) {
  if (!rawText) return "";
  const t = rawText.toLowerCase();
  for (const z of [...ZONES].sort((a, b) => a.priority - b.priority)) {
    if (z.keywords.some((kw) => t.includes(kw))) return z.zone;
  }
  return "";
}
const EMOJI_RE = /[📝📱✉️📍💰📆📅👨🏢👫✨💥💯⚡🔥💛😘🏠🎯👥📞👤💼🛏️]/g;
const LOCATION_HINTS = [
  ...ZONES.flatMap((z) => z.keywords),
  "near",
  "opposite",
  "mall",
  "road",
  "layout",
  "circle",
  "stage",
  "cross",
  "main",
  "metro",
  "station",
  "colony",
  "nagar",
  "palya",
  "puram",
  "halli",
  "village"
];
const NON_NAME_TOKENS = /\b(name|phone|mobile|email|location|area|budget|move|moving|room|need|special|request|profession|working|student|intern|girls?|boys?|coed|private|shared|sharing|single|double|triple|ac|veg|gym|preferred|in\s*blr|out\s*of)\b/i;
const LABEL_TERMINATORS = "(?:Name|Phone|Mobile|Ph|Contact|Email|E-mail|Mail|Preferred\\s*Location|Location|Area|Landmark|Map\\s*link|Budget(?:\\s*Range)?|Budjet|Actual\\s*budget|Move[-\\s]?in(?:[-\\s]?Date)?|Moving(?:\\s*Date)?|Movein|Profession|Occupation|Working|Student|Intern|Room(?:\\s*Type)?|Sharing|Need|NEED|Cohort|Special\\s*Requests?|Special\\s*Request|Notes?|Remarks?|How\\s*Many\\s*Members|Members?)";
const LABEL_TERMINATOR_LOOKAHEAD = new RegExp(`\\s+${LABEL_TERMINATORS}\\s*[:\\-–]`, "i");
function cutAtNextLabel(value) {
  if (!value) return value;
  const m = value.match(LABEL_TERMINATOR_LOOKAHEAD);
  if (m && m.index !== void 0) return value.slice(0, m.index);
  return value;
}
function normalisePaste(raw) {
  return raw.replace(/\\r\\n/g, "\n").replace(/\\n/g, "\n").replace(/\\r/g, "\n").replace(/\\t/g, " ").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}
function looksLikeName(line) {
  const t = line.trim();
  if (!t || t.length < 2 || t.length > 50) return false;
  if (/\d/.test(t)) return false;
  if (/@/.test(t)) return false;
  if (NON_NAME_TOKENS.test(t)) return false;
  if (LOCATION_HINTS.some((k) => t.toLowerCase().includes(k))) return false;
  const words = t.replace(/[^a-zA-Z\s.]/g, "").trim().split(/\s+/).filter(Boolean);
  if (words.length < 1 || words.length > 5) return false;
  return /^[A-Z]/.test(words[0]) || /^[a-z]/.test(words[0]);
}
function looksLikeLocation(line) {
  const t = line.trim().toLowerCase();
  if (!t || t.length > 120) return false;
  if (/\d{5,}/.test(t)) return false;
  if (/@/.test(t)) return false;
  return LOCATION_HINTS.some((k) => t.includes(k));
}
function looksLikeBudget(line) {
  const t = line.trim().toLowerCase().replace(/[₹,\s]/g, "");
  return /^\d{3,6}$/.test(t) || /^\d+(?:\.\d+)?k$/i.test(t) || /^\d+[-–to]+\d+k?$/i.test(t) || /^\d+k?[-–to/]+\d+k?$/i.test(t);
}
function looksLikeDate(line) {
  const t = line.trim().toLowerCase();
  if (t.length > 40) return false;
  return /^(immediate|asap|now|today|tomorrow)/i.test(t) || /\d{1,2}[\/\-.]\d{1,2}[\/\-.]\d{2,4}/.test(t) || /\d{1,2}(?:st|nd|rd|th)?\s+(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i.test(t) || /(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+\d{1,2}/i.test(t) || /(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i.test(t);
}
function normalizeRoom(text) {
  const t = text.toLowerCase();
  const hasPrivate = /\b(private|single|1\s*sharing|1bhk|studio)\b/.test(t);
  const hasShared = /\b(shared|sharing|double|2\s*sharing|triple|3\s*sharing|twin)\b/.test(t);
  if (hasPrivate && hasShared) return "Both";
  if (hasPrivate) return "Private";
  if (hasShared) return "Shared";
  return "";
}
function titleCase(name) {
  return name.split(/\s+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
}
function parseLead(raw) {
  if (!raw || raw.trim().length < 4) return null;
  const normalised = normalisePaste(raw);
  const clean = normalised.replace(/\*{1,2}([^*\n]+)\*{1,2}/g, "$1").replace(/_{1,3}([^_\n]+)_{1,3}/g, "$1").replace(/`([^`]+)`/g, "$1");
  const grab = (...patterns) => {
    for (const re of patterns) {
      const m = clean.match(re);
      if (m?.[1]) {
        let v = m[1].replace(EMOJI_RE, "").trim();
        v = cutAtNextLabel(v);
        return v.replace(/^[\s,;:|.\-–—]+|[\s,;:|.\-–—]+$/g, "").trim();
      }
    }
    return "";
  };
  let phone = "";
  const digitOnly = clean.replace(/[^\d]/g, "");
  const tightMatch = clean.match(/(?:\+?\s*91[-\s]?)?(?:\d[-\s]?){9,12}\d/);
  if (tightMatch) {
    const candidate = tightMatch[0].replace(/[^\d]/g, "");
    const trimmed = candidate.replace(/^91/, "");
    const m = trimmed.match(/[6-9]\d{9}/);
    if (m) phone = m[0];
  }
  if (!phone) {
    const m = digitOnly.match(/[6-9]\d{9}/);
    if (m) phone = m[0];
  }
  const emailMatch = clean.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/);
  const email = emailMatch?.[0] ?? "";
  let name = grab(
    /(?:^|\n)\s*Name\s*[:\-–*]+\s*([^\n,📱\d]{2,60})/im,
    /(?:^|\n)\s*\.Name\s+([^\n.]{2,60})/im,
    /(?:^|\n)\s*[-–]\s*([A-Z][a-z][^\n\d]{1,40})\s*\n/m
  );
  if (name) {
    name = name.split(/\s+(?:Phone|Mobile|Email|Location|Budget|Move|Moving|Working|Student|Room|Need)\b/i)[0].replace(/[\d@].*$/, "").replace(/^\W+|\W+$/g, "").trim();
  }
  if (!name) {
    const lines = clean.split("\n").map((l) => l.trim()).filter(Boolean);
    for (const line of lines.slice(0, 3)) {
      const stripped = line.replace(EMOJI_RE, "").replace(/^[-–*•]\s*/, "").trim();
      const inlineMatch = stripped.match(/^([A-Za-z][A-Za-z\s.]{1,40}?)\s+(?:\+?91)?[6-9]\d{9}/);
      if (inlineMatch) {
        name = inlineMatch[1].trim();
        break;
      }
      if (looksLikeName(stripped)) {
        name = stripped;
        break;
      }
    }
  }
  if (name) name = titleCase(name);
  let location = grab(
    /Preferred\s*Location[^:\n]*[:\-–]+\s*([^\n💰📆👨🏢]{3,200})/i,
    /Which\s+location\s*[:\-–]+\s*([^\n]{3,200})/i,
    /Location\s*[:\-–]+\s*([^\n💰📆👨🏢]{3,200})/i,
    /Area\s*[:\-–]+\s*([^\n]{3,200})/i,
    /Landmark[^:\n]*[:\-–]+\s*([^\n]{3,200})/i
  );
  location = location.replace(/\(Map\s*link\)|https?:\/\/\S+/gi, "").trim();
  if (!location) {
    for (const line of clean.split("\n").map((l) => l.trim())) {
      if (looksLikeLocation(line) && !looksLikeBudget(line)) {
        location = line.replace(EMOJI_RE, "").trim();
        break;
      }
    }
  }
  let budget = grab(
    /(?:Actual\s*budget|Budget\s*Range|Budget\s*range|Budget\s*is|Budget|Budjet)\s*[:\-–(]*\s*([^\n)📆👨🏢]{2,80})/i
  ).replace(/[₹()\[\]]/g, "").replace(/\s+/g, " ").trim();
  if (!budget) {
    for (const line of clean.split("\n").map((l) => l.trim())) {
      if (looksLikeBudget(line)) {
        budget = line.replace(/[₹]/g, "").trim();
        break;
      }
    }
  }
  let moveIn = grab(
    /Move[-\s]?in[-\s]?Date\s*[:\-–😘*]+\s*([^\n👨🏢👫✨]{2,80})/i,
    /Moving\s*Date\s*[:\-–]+\s*([^\n]{2,60})/i,
    /Move[-\s]?in\s*[:\-–]+\s*([^\n]{2,60})/i,
    /Movein\s*[:\-–]+\s*([^\n]{2,60})/i
  );
  if (!moveIn) {
    for (const line of clean.split("\n").map((l) => l.trim())) {
      if (looksLikeDate(line) && !looksLikeBudget(line)) {
        moveIn = line;
        break;
      }
    }
  }
  const isWorking = /\bworking\b|\bprofessional\b|\banalyst\b|\banalysist\b|\bmarketer\b|\bengineer\b|\bdeveloper\b|\bemployee\b/i.test(clean);
  const isStudent = /\bstudent\b/i.test(clean);
  const isIntern = /\bintern(?:ing)?\b/i.test(clean);
  const type = isWorking && isStudent ? "Student/Working" : isWorking ? "Working" : isStudent ? "Student" : isIntern ? "Intern" : "";
  const roomLabeled = grab(/Room(?:\s*Type)?\s*[*:\-–(]+\s*([^\n👫✨📞]{2,60})/i);
  const room = normalizeRoom(roomLabeled || clean);
  const needRaw = grab(
    /NEED\s*[*:\-–(]+\s*([^\n✨📞]{2,60})/i,
    /Need\s*[:\-–]+\s*([^\n]{2,60})/i,
    /Cohort\s*[:\-–]+\s*([^\n]{2,60})/i
  ).toLowerCase();
  const wantGirls = needRaw.includes("girl") || /\bgirls?\s*(?:pg|preferable|only)?/i.test(clean);
  const wantBoys = needRaw.includes("boy") || /\bboys?\b/i.test(clean);
  const wantCoed = needRaw.includes("coed") || /\bcoed\b/i.test(clean);
  const need = [wantGirls && "Girls", wantBoys && "Boys", wantCoed && "Coed"].filter(Boolean).join(" / ");
  let specialReqs = grab(
    /Special\s*Requests?\s*[*:\-–(]+\s*([^\n*📞]{2,200})/i,
    /Notes?\s*[:\-–]+\s*([^\n]{2,200})/i,
    /Remarks?\s*[:\-–]+\s*([^\n]{2,200})/i
  ).replace(/\b(NA|None|n\/a|If any)\b/gi, "").trim();
  if (!specialReqs) {
    const consumed = /* @__PURE__ */ new Set();
    [name, phone, email, location, budget, moveIn].forEach((v) => v && consumed.add(v.toLowerCase().trim()));
    const extras = [];
    for (const rawLine of clean.split("\n")) {
      const line = rawLine.replace(EMOJI_RE, "").trim();
      if (!line || line.length < 4 || line.length > 200) continue;
      const lower = line.toLowerCase();
      if (consumed.has(lower)) continue;
      if (/\d{6,}/.test(line)) continue;
      if (/@/.test(line)) continue;
      if (looksLikeBudget(line) || looksLikeDate(line)) continue;
      if (NON_NAME_TOKENS.test(line) && !/\b(veg|non[- ]?veg|ac|gym|wifi|food|parking|pet|ventilation|spacious|clean|backup|family|balcony|attached|sunlight|quiet|washroom)\b/i.test(line)) continue;
      if (/\b(veg|non[- ]?veg|ac|gym|wifi|food|parking|pet|ventilation|spacious|clean|backup|family|quiet|sunlight|balcony|attached|washroom)\b/i.test(line) || /^[A-Za-z]/.test(line) && line.split(/\s+/).length >= 3) {
        extras.push(line);
      }
    }
    specialReqs = extras.join("; ").slice(0, 240);
  }
  const inBLRTrue = /\bin\s*blr\b|in bangalore|currently in bangalore|already here|yes.*blr/i.test(normalised);
  const inBLRFalse = /not in blr|not in bangalore|outside bangalore|relocating|out.*blr/i.test(normalised);
  const inBLR = inBLRTrue ? true : inBLRFalse ? false : null;
  const zone = detectZone(normalised);
  const areaPool = `${location} ${normalised}`.toLowerCase();
  const areaSet = /* @__PURE__ */ new Set();
  for (const z of ZONES) {
    for (const kw of z.keywords) {
      if (kw.length < 4) continue;
      if (areaPool.includes(kw)) {
        areaSet.add(kw.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "));
      }
    }
  }
  const areas = [...areaSet].slice(0, 6);
  let fullAddress = "";
  const urlMatch = normalised.match(/https?:\/\/\S+/);
  if (urlMatch) fullAddress = urlMatch[0];
  if (!fullAddress) {
    const longLine = normalised.split("\n").map((l) => l.trim()).find((l) => l.length > 60 && /\d/.test(l) && !/@/.test(l));
    if (longLine) fullAddress = longLine;
  }
  const labeledFull = grab(/Full\s*Address\s*[:\-–]+\s*([^\n]{5,300})/i);
  if (labeledFull) fullAddress = labeledFull;
  if (!phone && !email && !name) return null;
  return {
    name,
    phone,
    email,
    location,
    areas,
    fullAddress,
    budget,
    moveIn,
    type,
    room,
    need,
    specialReqs,
    inBLR,
    zone,
    rawSource: raw
  };
}
function OwnershipBadge({ lead, ownerName, compact }) {
  const me = useIdentityStore((s) => s.currentUser);
  const requestAccess = useIdentityStore((s) => s.requestAccess);
  const isPrimary = lead.primaryOwnerId === me.id;
  const isSecondary = lead.secondaryOwnerId === me.id;
  const slotsFull = !!lead.secondaryOwnerId;
  const onRequest = () => {
    const r = requestAccess(lead.ulid);
    if (r) toast.success("Access request sent to owner");
    else toast.info("Already pending or you're the owner");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium border ${isPrimary ? "bg-primary/10 border-primary/30 text-primary" : isSecondary ? "bg-accent/10 border-accent/30 text-accent-foreground" : "bg-muted border-border text-muted-foreground"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3 w-3" }),
      isPrimary ? "You · Primary" : `Owner: ${ownerName ?? lead.primaryOwnerId}`
    ] }),
    lead.secondaryOwnerId && !compact && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] bg-muted border border-border text-muted-foreground", children: "+1 secondary" }),
    !isPrimary && !isSecondary && (slotsFull ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] bg-muted border border-border text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3" }),
      " Both slots taken — view only"
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px] gap-1", onClick: onRequest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-3 w-3" }),
      " Request access"
    ] })),
    !isPrimary && !isSecondary && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3" }),
      " view-only"
    ] })
  ] });
}
function DuplicateModal({ open, onClose, result, onForceCreate, onUseExisting }) {
  if (!result) return null;
  const { type, candidates } = result;
  const header = {
    exact: { icon: ShieldAlert, title: "Lead already exists", color: "text-destructive", desc: "An exact match was found. You cannot create a duplicate." },
    strong: { icon: TriangleAlert, title: "Likely duplicate", color: "text-warning", desc: "Strong match found. Confirm whether this is a new lead or the same person." },
    possible: { icon: Search, title: "Possible duplicate", color: "text-amber-500", desc: "Some signals match. You can proceed but please double-check." },
    new: { icon: Sparkles, title: "New lead", color: "text-primary", desc: "No matches found. Safe to create." }
  }[type];
  const Icon = header.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: `flex items-center gap-2 ${header.color}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }),
        " ",
        header.title
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: header.desc })
    ] }),
    candidates.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-72 overflow-y-auto", children: candidates.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-3 bg-muted/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: c.lead.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
            c.lead.phoneE164 || c.lead.phoneRaw || "no phone",
            " · ",
            c.lead.area || "no area"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-1", children: [
            "Last activity ",
            formatDistanceToNow(new Date(c.lead.lastActivityAt), { addSuffix: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold", children: [
            c.score,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/100" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: c.reasons.slice(0, 2).join(", ") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(OwnershipBadge, { lead: c.lead, compact: true }),
        type !== "exact" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", className: "h-7 text-[11px] gap-1", onClick: () => onUseExisting(c.lead), children: [
          "Use this ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
        ] }),
        type === "exact" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px]", onClick: () => onUseExisting(c.lead), children: "Open lead" })
      ] })
    ] }, c.lead.ulid)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2 sm:gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, children: "Cancel" }),
      type !== "exact" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onForceCreate, children: type === "new" ? "Create lead" : "This is a new lead — create anyway" })
    ] })
  ] }) });
}
function RequestAccessSheet() {
  const me = useIdentityStore((s) => s.currentUser);
  const requests = useIdentityStore((s) => s.requests);
  const leads = useIdentityStore((s) => s.leads);
  const decideRequest = useIdentityStore((s) => s.decideRequest);
  const incoming = requests.filter((r) => r.toOwnerId === me.id && r.state === "pending");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-sm flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-4 w-4" }),
      " Access requests",
      incoming.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground", children: incoming.length })
    ] }),
    incoming.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No pending access requests." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: incoming.map((r) => {
      const lead = leads.find((l) => l.ulid === r.ulid);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 p-2 rounded-lg bg-muted/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: r.requesterName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
            "wants secondary access on ",
            lead?.name ?? r.ulid.slice(0, 8),
            " ·",
            " ",
            formatDistanceToNow(new Date(r.ts), { addSuffix: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-[11px] gap-1",
              onClick: () => {
                decideRequest(r.id, "approved");
                toast.success("Granted");
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }),
                " Approve"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "ghost",
              className: "h-7 text-[11px] gap-1",
              onClick: () => {
                decideRequest(r.id, "rejected");
                toast.info("Rejected");
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" }),
                " Reject"
              ]
            }
          )
        ] })
      ] }, r.id);
    }) })
  ] });
}
export {
  DuplicateModal as D,
  RequestAccessSheet as R,
  detectZone as d,
  parseLead as p
};
