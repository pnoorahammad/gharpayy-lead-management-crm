import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, P as PGDetail, s as seasonalNudge, m as matchLead, r as rating, a as AREAS, d as AreaMoodCard, D as DualMatcher, f as DISTANCE, g as useShortlist, h as buildInstantMatch, w as waLink, p as perDay, i as scarcity, t as telLink, j as CopyButton, v as valueScore, k as buildThreeOptions, l as findAlternatives, n as budgetStretch, o as buildReengagement, q as freshness, x as personaBadge, L as LANDMARKS, y as AREA_CENTROID, z as personaStyle } from "./AppShell-qrUFATK5.mjs";
import { B as Badge, P as PGS, T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent, q as cn } from "./router-Brs45mHz.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { B as Building2, Z as Zap, u as Brain, O as MapPin, Q as Ruler, K as Send, w as Shield, r as MessageCircle, V as Footprints, Y as Funnel, S as Sparkles, _ as Star, X, $ as Search, P as Phone, A as ArrowRight, T as TrendingUp, s as Clock, a0 as Hospital, a1 as Banknote, a2 as TramFront, a3 as GraduationCap, a4 as Briefcase, a5 as StarOff, F as Flame } from "../_libs/lucide-react.mjs";
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
const norm = (s) => (s || "").toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
const ALIASES = {
  kora: ["koramangala"],
  hsr: ["hsr layout", "hsr"],
  btm: ["btm layout", "btm"],
  ecity: ["electronic city", "e city"],
  manyata: ["manyata embassy business park", "manyata tech park"],
  manytha: ["manyata"],
  mtp: ["manyata tech park", "manyata"],
  itpl: ["international tech park", "itpb", "whitefield"],
  embassy: ["embassy tech village", "etv"],
  marathalli: ["marathahalli"],
  bellandur: ["bellandur", "kadubeesanahalli"],
  ypr: ["yeshwanthpur"],
  jp: ["jp nagar"],
  goldmna: ["goldman sachs"],
  goldman: ["goldman sachs"],
  flipkart: ["flipkart embassy tech village"],
  swiggy: ["swiggy koramangala"],
  razorpay: ["razorpay sjr"],
  myntra: ["myntra prestige tech park"],
  christ: ["christ university"],
  nexus: ["nexus mall"],
  forum: ["forum mall"],
  tonic: ["tonic koramangala"],
  hustle: ["hustle hub"],
  prestige: ["prestige tech park"],
  sony: ["sony signal"]
};
function expandQuery(q) {
  const n = norm(q);
  const out = /* @__PURE__ */ new Set([n]);
  for (const tok of n.split(" ")) {
    const al = ALIASES[tok];
    if (al) al.forEach((a) => out.add(a));
  }
  return Array.from(out);
}
function lev(a, b) {
  if (Math.abs(a.length - b.length) > 3) return 99;
  const m = a.length;
  const n = b.length;
  const dp = new Array(n + 1);
  for (let j = 0; j <= n; j++) dp[j] = j;
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      dp[j] = a[i - 1] === b[j - 1] ? prev : 1 + Math.min(prev, dp[j], dp[j - 1]);
      prev = tmp;
    }
  }
  return dp[n];
}
function tokenScore(hay, q) {
  if (!q) return 0;
  if (hay === q) return 1;
  if (hay.startsWith(q)) return 0.92;
  if (hay.includes(` ${q}`) || hay.endsWith(` ${q}`)) return 0.82;
  if (hay.includes(q)) return 0.7;
  const hwords = hay.split(" ");
  for (const w of hwords) {
    if (w.startsWith(q)) return 0.6;
    if (q.length >= 4 && w.length >= 4) {
      const d = lev(w, q);
      if (d <= 1) return 0.55;
      if (d === 2 && q.length >= 6) return 0.4;
    }
  }
  return 0;
}
function fieldScore(hay, queries) {
  const h = norm(hay);
  if (!h) return 0;
  let best = 0;
  for (const q of queries) {
    const phrase = tokenScore(h, q);
    if (phrase > best) best = phrase;
    const toks = q.split(" ").filter((t) => t.length > 1);
    if (toks.length > 1) {
      let sum = 0;
      let any = 0;
      for (const t of toks) {
        const s = tokenScore(h, t);
        if (s > 0) any++;
        sum += s;
      }
      const avg = sum / toks.length * (any / toks.length);
      if (avg > best) best = avg;
    }
  }
  return best;
}
function searchLandmarks(query, limit = 30) {
  if (!query.trim()) return [];
  const queries = expandQuery(query);
  const hits = [];
  for (const lm of LANDMARKS) {
    const sName = fieldScore(lm.n, queries);
    const sArea = fieldScore(lm.a, queries) * 0.6;
    const sPin = fieldScore(lm.p, queries) * 0.9;
    const sNote = fieldScore(lm.x, queries) * 0.4;
    const sMetro = fieldScore(lm.m, queries) * 0.5;
    const score = Math.max(sName, sArea, sPin, sNote, sMetro);
    if (score > 0.35) hits.push({ ...lm, score });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}
function searchPGs(query, limit = 30) {
  if (!query.trim()) return PGS.map((pg) => ({ pg, score: 1, matched: [] }));
  const queries = expandQuery(query);
  const hits = [];
  for (const pg of PGS) {
    const matched = [];
    let score = 0;
    const add = (label, val, weight) => {
      const s = fieldScore(val, queries) * weight;
      if (s > 0.3) {
        matched.push(`${label}: ${val.slice(0, 60)}`);
        score = Math.max(score, s);
      }
    };
    add("Name", pg.name, 1);
    add("Actual", pg.actualName, 0.9);
    add("Area", pg.area, 1);
    add("Locality", pg.locality, 0.85);
    add("Persona", pg.persona.archetype, 0.6);
    add("USP", pg.usp, 0.5);
    pg.landmarksInline.forEach((lm) => add("Landmark", lm, 0.95));
    pg.amenities.forEach((a) => add("Amenity", a, 0.5));
    if (queries.some((q) => pg.gender.toLowerCase().includes(q))) {
      score = Math.max(score, 0.8);
      matched.push(`Gender: ${pg.gender}`);
    }
    if (queries.some((q) => pg.tier.toLowerCase().includes(q))) {
      score = Math.max(score, 0.7);
      matched.push(`Tier: ${pg.tier}`);
    }
    if (score > 0.3) hits.push({ pg, score, matched: matched.slice(0, 4) });
  }
  hits.sort((a, b) => b.score - a.score || b.pg.iq - a.pg.iq);
  return hits.slice(0, limit);
}
const TYPE_ICON = {
  "Tech Park": Building2,
  "MNC": Briefcase,
  "Unicorn": Sparkles,
  "Startup": Sparkles,
  "GCC": Briefcase,
  "Coworking": Briefcase,
  "Hospital": Hospital,
  "College": GraduationCap,
  "Metro": TramFront,
  "Bank": Banknote,
  "Retail HQ": Building2,
  "Pharma": Hospital,
  "Gaming/AI": Sparkles,
  "Govt": Building2
};
const TYPE_COLOR = {
  "Tech Park": "text-cyan-400 bg-cyan-400/10",
  "MNC": "text-violet-400 bg-violet-400/10",
  "Unicorn": "text-pink-400 bg-pink-400/10",
  "Startup": "text-fuchsia-400 bg-fuchsia-400/10",
  "GCC": "text-indigo-400 bg-indigo-400/10",
  "Coworking": "text-teal-400 bg-teal-400/10",
  "Hospital": "text-rose-400 bg-rose-400/10",
  "College": "text-amber-400 bg-amber-400/10",
  "Metro": "text-emerald-400 bg-emerald-400/10",
  "Bank": "text-blue-400 bg-blue-400/10",
  "Retail HQ": "text-orange-400 bg-orange-400/10",
  "Pharma": "text-red-400 bg-red-400/10",
  "Gaming/AI": "text-purple-400 bg-purple-400/10",
  "Govt": "text-slate-400 bg-slate-400/10"
};
const RECENT_KEY = "gh_recent_searches";
function UniversalSearch({ onPickLandmark, onPickPG, placeholder, autoFocus }) {
  const [q, setQ] = reactExports.useState("");
  const [open, setOpen] = reactExports.useState(false);
  const [recent, setRecent] = reactExports.useState([]);
  const inputRef = reactExports.useRef(null);
  const wrapRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    try {
      const r = sessionStorage.getItem(RECENT_KEY);
      if (r) setRecent(JSON.parse(r));
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);
  reactExports.useEffect(() => {
    const onClick = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  const lmHits = reactExports.useMemo(() => searchLandmarks(q, 12), [q]);
  const pgHits = reactExports.useMemo(() => q ? searchPGs(q, 6) : [], [q]);
  const saveRecent = (term) => {
    const next = [term, ...recent.filter((r) => r !== term)].slice(0, 8);
    setRecent(next);
    try {
      sessionStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {
    }
  };
  const pickLM = (lm) => {
    saveRecent(lm.n);
    setQ(lm.n);
    setOpen(false);
    onPickLandmark(lm);
  };
  const pickPG = (pg) => {
    saveRecent(pg.name);
    setQ(pg.name);
    setOpen(false);
    onPickPG(pg);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: wrapRef, className: "relative w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
      "flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-smooth",
      open && "ring-glow"
    ), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-muted-foreground shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref: inputRef,
          value: q,
          onChange: (e) => {
            setQ(e.target.value);
            setOpen(true);
          },
          onFocus: () => setOpen(true),
          placeholder: placeholder ?? "Search anything — Manyata, Tonic Kora, Christ back gate, 560066, Goldman Sachs, NEX COED…",
          className: "flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground/70"
        }
      ),
      q && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setQ("");
        inputRef.current?.focus();
      }, className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 right-0 z-50 mt-2 max-h-[70vh] overflow-y-auto rounded-xl border border-border bg-popover shadow-card animate-fade-up", children: [
      !q && recent.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-[10px] uppercase tracking-widest text-muted-foreground", children: "Recent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: recent.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              setQ(r);
              inputRef.current?.focus();
            },
            className: "rounded-full border border-border bg-surface-2 px-3 py-1 text-xs hover:border-primary/50",
            children: r
          },
          r
        )) })
      ] }),
      q && lmHits.length === 0 && pgHits.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center text-sm text-muted-foreground", children: [
        'No results for "',
        q,
        '". Try a different spelling, area name, or pincode.'
      ] }),
      pgHits.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pt-3 text-[10px] uppercase tracking-widest text-muted-foreground", children: "Properties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: pgHits.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => pickPG(h.pg), className: "flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-surface-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium truncate", children: [
              h.pg.name,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] text-muted-foreground", children: [
                "IQ ",
                h.pg.iq
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate", children: [
              h.pg.area,
              " · ",
              h.pg.gender,
              " · ",
              h.pg.tier,
              h.matched[0] && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary/80", children: [
                " · ",
                h.matched[0]
              ] })
            ] })
          ] })
        ] }) }, h.pg.id)) })
      ] }),
      lmHits.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 text-[10px] uppercase tracking-widest text-muted-foreground", children: [
          "Landmarks · ",
          lmHits.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: lmHits.map((lm, i) => {
          const Icon = TYPE_ICON[lm.t] ?? MapPin;
          const color = TYPE_COLOR[lm.t] ?? "text-muted-foreground bg-muted";
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => pickLM(lm), className: "flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-surface-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("flex h-8 w-8 items-center justify-center rounded-md", color), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium truncate", children: [
                lm.n,
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-muted-foreground", children: [
                  Math.round(lm.score * 100),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate", children: [
                lm.t,
                lm.a && ` · ${lm.a}`,
                lm.p && ` · ${lm.p}`,
                lm.x && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground/70", children: [
                  " · ",
                  lm.x
                ] })
              ] })
            ] })
          ] }) }, `${lm.n}-${i}`);
        }) })
      ] })
    ] })
  ] });
}
const tierColor = (t) => t === "Premium" ? "text-accent border-accent/40 bg-accent/10" : t === "Mid" ? "text-info border-info/40 bg-info/10" : "text-muted-foreground border-border bg-muted";
const genderColor = (g) => g === "Girls" ? "text-pink-400 bg-pink-400/10" : g === "Boys" ? "text-blue-400 bg-blue-400/10" : "text-emerald-400 bg-emerald-400/10";
function iqColor(iq) {
  if (iq >= 75) return "text-emerald-400";
  if (iq >= 60) return "text-amber-400";
  if (iq >= 40) return "text-orange-400";
  return "text-rose-400";
}
function priceLabel(pg) {
  const parts = [];
  if (pg.prices.triple) parts.push(`T ${Math.round(pg.prices.triple / 1e3)}k`);
  if (pg.prices.double) parts.push(`D ${Math.round(pg.prices.double / 1e3)}k`);
  if (pg.prices.single) parts.push(`S ${Math.round(pg.prices.single / 1e3)}k`);
  const beds = [pg.prices.triple, pg.prices.double, pg.prices.single].filter((p) => p > 0);
  const cheapest = beds.length ? Math.min(...beds) : 0;
  return {
    primary: parts.length ? parts.join(" · ") : "On call",
    perDay: cheapest ? `₹${perDay(cheapest)}/day` : null
  };
}
function PGTile({ pg, onClick, badge }) {
  const { has, toggle } = useShortlist();
  const saved = has(pg.id);
  const closest = pg.nearbyLandmarks?.[0];
  const price = priceLabel(pg);
  const persona = personaBadge(pg);
  const pStyle = personaStyle(persona);
  const sc = scarcity(pg);
  const fr = freshness(pg);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick,
        className: "flex w-full flex-col gap-2.5 rounded-xl border border-border bg-card p-3.5 text-left shadow-card transition-smooth hover:border-primary/40 hover:shadow-glow",
        children: [
          badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 left-3 z-10 rounded-full border border-primary/40 bg-primary/15 px-2 py-0.5 text-[10px] font-mono text-primary", children: badge }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 pr-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-semibold leading-tight truncate", children: pg.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground truncate", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 shrink-0" }),
                " ",
                pg.area
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-0.5 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-mono text-2xl font-bold leading-none tabular-nums", iqColor(pg.iq)), children: pg.iq }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-widest text-muted-foreground", children: "IQ" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] font-medium", pStyle.color), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: persona })
          ] }),
          closest && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 rounded-md bg-surface-2 px-2 py-1.5 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Footprints, { className: "h-3.5 w-3.5 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate flex-1", children: closest.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground shrink-0", children: closest.w <= 0 ? "<1m" : `${closest.w}m walk` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("rounded-md border px-2 py-0.5 text-[10px] font-medium", tierColor(pg.tier)), children: pg.tier }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("rounded-md px-2 py-0.5 text-[10px] font-medium", genderColor(pg.gender)), children: pg.gender }),
            pg.foodType && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-surface-2 px-2 py-0.5 text-[10px] text-muted-foreground", children: pg.foodType }),
            fr.isFresh && fr.changeKind && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-md border border-cyan-400/40 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-medium text-cyan-300", title: fr.message, children: [
              "✦ ",
              fr.changeKind
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between border-t border-border pt-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm tabular-nums", children: price.primary }),
              price.perDay && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-emerald-400 tabular-nums leading-none mt-0.5", children: price.perDay })
            ] }),
            sc.hot ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md border border-rose-400/40 bg-rose-400/10 px-1.5 py-0.5 text-[10px] font-bold text-rose-300 animate-pulse-dot", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3 w-3" }),
              " ",
              sc.level
            ] }) : sc.level === "FEW LEFT" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 rounded-md border border-amber-400/40 bg-amber-400/10 px-1.5 py-0.5 text-[10px] font-medium text-amber-300", children: sc.level }) : sc.level === "FULL" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 rounded-md border border-border bg-surface-2 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground", children: "Waitlist" }) : pg.manager.phone ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 font-mono text-[10px] text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
              " ",
              pg.manager.phone
            ] }) : null
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: (e) => {
          e.stopPropagation();
          toggle(pg.id);
        },
        title: saved ? "Remove from shortlist" : "Add to shortlist",
        className: cn(
          "absolute right-3 top-3 z-10 rounded-md p-1.5 transition-smooth",
          saved ? "text-amber-400 bg-amber-400/10" : "text-muted-foreground opacity-0 group-hover:opacity-100 hover:bg-surface-2"
        ),
        children: saved ? /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(StarOff, { className: "h-4 w-4" })
      }
    )
  ] });
}
function ShortlistTray({ onOpenPG }) {
  const { ids, remove, clear, count } = useShortlist();
  const [open, setOpen] = reactExports.useState(false);
  const items = reactExports.useMemo(() => ids.map((id) => PGS.find((p) => p.id === id)).filter(Boolean), [ids]);
  if (count === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        className: "fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/15 px-4 py-2.5 font-display text-sm font-medium text-amber-300 shadow-glow backdrop-blur transition-smooth hover:bg-amber-400/25 sm:left-auto sm:right-6 sm:translate-x-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }),
          "Shortlist",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-amber-400 px-1.5 py-0.5 font-mono text-[10px] text-amber-950", children: count })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm animate-fade-up sm:items-center", onClick: () => setOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: (e) => e.stopPropagation(), className: "w-full max-w-4xl max-h-[85vh] overflow-y-auto overscroll-contain rounded-t-2xl border border-border bg-background p-4 shadow-card sm:rounded-2xl sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-lg font-bold", children: [
            "Compare ",
            items.length,
            " ",
            items.length === 1 ? "property" : "properties"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Side-by-side view. Tap a card to open full playbook." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clear, className: "rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground hover:border-rose-400/40 hover:text-rose-400", children: "Clear all" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), className: "rounded-md p-2 text-muted-foreground hover:bg-surface-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
        "grid gap-3",
        items.length === 1 ? "grid-cols-1" : items.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      ), children: items.map((pg) => /* @__PURE__ */ jsxRuntimeExports.jsx(CompareCard, { pg, onOpen: () => {
        onOpenPG(pg);
        setOpen(false);
      }, onRemove: () => remove(pg.id) }, pg.id)) })
    ] }) })
  ] });
}
function CompareCard({ pg, onOpen, onRemove }) {
  const closest = pg.nearbyLandmarks?.[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg border border-border bg-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onRemove, className: "absolute right-2 top-2 rounded p-1 text-muted-foreground hover:bg-surface-2 hover:text-rose-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onOpen, className: "block w-full text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-semibold pr-6 truncate", children: pg.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 text-xs text-muted-foreground truncate", children: [
        pg.area,
        " · ",
        pg.gender,
        " · ",
        pg.tier
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "IQ", value: String(pg.iq) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Triple", value: pg.prices.triple ? `₹${(pg.prices.triple / 1e3).toFixed(0)}k` : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Double", value: pg.prices.double ? `₹${(pg.prices.double / 1e3).toFixed(0)}k` : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Single", value: pg.prices.single ? `₹${(pg.prices.single / 1e3).toFixed(0)}k` : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Food", value: pg.foodType || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Deposit", value: pg.deposit?.split(" ")[0] || "—" })
      ] }),
      closest && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-md bg-surface-2 px-2 py-1.5 text-[11px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1 inline h-3 w-3 text-primary" }),
        closest.w <= 0 ? "<1" : closest.w,
        " min walk to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: closest.n })
      ] })
    ] })
  ] });
}
function Row({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/50 pb-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono tabular-nums", children: value })
  ] });
}
function hav(lat1, lng1, lat2, lng2) {
  const R = 6371, p1 = lat1 * Math.PI / 180, p2 = lat2 * Math.PI / 180;
  const dp = (lat2 - lat1) * Math.PI / 180, dl = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 10) / 10;
}
function resolveOffice(name) {
  const n = name.toLowerCase().trim();
  if (!n) return null;
  const lm = LANDMARKS.find((l) => l.lat && l.lng && l.n.toLowerCase().includes(n));
  if (lm?.lat && lm?.lng) return { lat: lm.lat, lng: lm.lng, label: lm.n };
  for (const [k, v] of Object.entries(AREA_CENTROID)) {
    if (k.toLowerCase().includes(n) || n.includes(k.toLowerCase())) return { ...v, label: k };
  }
  return null;
}
function CloserModule({ onOpen }) {
  const [tab, setTab] = reactExports.useState("instant");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl sm:text-3xl font-bold", children: "The Closer" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs sm:text-sm text-muted-foreground", children: [
        "One screen. Four moves. Built for the 60-second call. ",
        seasonalNudge()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-x-auto rounded-lg border border-border bg-surface-1 p-1 scrollbar-none", children: [
      { k: "instant", l: "Instant Match", I: Zap },
      { k: "send3", l: "Send 3", I: Send },
      { k: "objection", l: "Objection Pivot", I: Shield },
      { k: "reengage", l: "Re-Engage", I: MessageCircle }
    ].map(({ k, l, I }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setTab(k),
        className: cn(
          "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium transition-smooth",
          tab === k ? "bg-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-3.5 w-3.5" }),
          " ",
          l
        ]
      },
      k
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
      tab === "instant" && /* @__PURE__ */ jsxRuntimeExports.jsx(InstantMatch, { onOpen }),
      tab === "send3" && /* @__PURE__ */ jsxRuntimeExports.jsx(SendThree, { onOpen }),
      tab === "objection" && /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectionPivot, { onOpen }),
      tab === "reengage" && /* @__PURE__ */ jsxRuntimeExports.jsx(ReEngage, { onOpen })
    ] }, tab)
  ] });
}
function InstantMatch({ onOpen }) {
  const [office, setOffice] = reactExports.useState("Goldman Sachs");
  const [budget, setBudget] = reactExports.useState(18e3);
  const [gender, setGender] = reactExports.useState("Any");
  const [leadName, setLeadName] = reactExports.useState("");
  const office_ = reactExports.useMemo(() => resolveOffice(office), [office]);
  const pick = reactExports.useMemo(() => {
    const candidates = PGS.filter((p) => gender === "Any" || p.gender === gender || p.gender === "Co-live").map((pg) => {
      const beds = [pg.prices.triple, pg.prices.double, pg.prices.single].filter((x) => x > 0);
      const cheap = beds.length ? Math.min(...beds) : 99999;
      if (cheap > budget * 1.15) return null;
      const km = office_ && pg.lat && pg.lng ? hav(office_.lat, office_.lng, pg.lat, pg.lng) : null;
      if (km !== null && km > 15) return null;
      const budgetFit = cheap <= budget ? 40 : 25;
      const distScore = km === null ? 15 : km <= 3 ? 35 : km <= 6 ? 25 : km <= 10 ? 15 : 5;
      const iqScore = pg.iq / 100 * 25;
      return { pg, score: budgetFit + distScore + iqScore, km, cheap };
    }).filter((x) => !!x).sort((a, b) => b.score - a.score);
    return candidates[0] ?? null;
  }, [office, budget, gender, office_]);
  const card = reactExports.useMemo(() => pick ? buildInstantMatch(pick.pg, {
    leadName: leadName || void 0,
    office: office_?.label || office,
    budget,
    commute: pick.km !== null ? { km: pick.km, mins: Math.round(pick.km * 2.8) } : null
  }) : "", [pick, leadName, office, office_, budget]);
  const wa = pick ? waLink(pick.pg.manager.phone, card) : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-[340px_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-lg border border-border bg-card p-4 lg:sticky lg:top-24 lg:h-fit", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-sm font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
        " 30-second sell"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Two questions. One answer. One copy button." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lead's name (optional)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: leadName,
          onChange: (e) => setLeadName(e.target.value),
          placeholder: "e.g. Kruthika",
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none focus:border-primary/60"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: "Where do they work / study?", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: office,
              onChange: (e) => setOffice(e.target.value),
              placeholder: "Goldman Sachs, Manyata, Christ…",
              className: "w-full rounded-md border border-input bg-surface-1 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60"
            }
          )
        ] }),
        office_ && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[10px] text-emerald-400", children: [
          "✓ Found: ",
          office_.label
        ] }),
        office.length > 2 && !office_ && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] text-amber-400", children: "Will use as area name" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: `Budget: ₹${budget.toLocaleString("en-IN")} / mo (₹${perDay(budget)}/day)`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 9e3,
            max: 35e3,
            step: 500,
            value: budget,
            onChange: (e) => setBudget(+e.target.value),
            className: "w-full accent-primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "9k" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "22k" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "35k" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Gender", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1", children: ["Any", "Boys", "Girls", "Co-live"].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setGender(g),
          className: cn(
            "rounded-md border px-2 py-1.5 text-[11px] font-medium transition-smooth",
            gender === g ? "border-primary bg-primary text-primary-foreground" : "border-border bg-surface-1 hover:border-primary/40"
          ),
          children: g
        },
        g
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: pick ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-primary/40 bg-primary/5 p-5 shadow-glow animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5" }),
          " The one to send · score ",
          Math.round(pick.score)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl sm:text-3xl font-bold leading-tight", children: pick.pg.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
          " ",
          pick.pg.area,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pick.pg.gender }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "IQ ",
            pick.pg.iq,
            "/100"
          ] }),
          pick.km !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("font-mono", pick.km <= 3 ? "text-emerald-400" : pick.km <= 8 ? "text-amber-400" : "text-orange-400"), children: [
              pick.km,
              "km from ",
              office_?.label || office
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Best fit", value: `₹${(pick.cheap / 1e3).toFixed(0)}k/mo`, accent: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Per day", value: `₹${perDay(pick.cheap)}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Commute", value: pick.km !== null ? `${Math.round(pick.km * 2.8)} min` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Inventory", value: scarcity(pick.pg).level, hot: scarcity(pick.pg).hot })
        ] }),
        pick.pg.usp && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-md bg-surface-2 p-3 text-sm leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-primary", children: "Pitch line" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: pick.pg.usp })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onOpen(pick.pg), className: "inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:opacity-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            " Open Playbook"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: wa, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 rounded-md border border-emerald-400/40 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-400/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
            " Send WhatsApp"
          ] }),
          telLink(pick.pg.manager.phone) && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: telLink(pick.pg.manager.phone), className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-xs font-medium hover:border-primary/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
            " Call manager"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { text: card, label: "Copy message" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "rounded-lg border border-border bg-card p-3 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "cursor-pointer text-xs font-medium text-muted-foreground select-none flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Preview the WhatsApp message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 transition-transform group-open:rotate-90" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-3 max-h-72 overflow-y-auto whitespace-pre-wrap rounded bg-surface-2 p-3 text-xs leading-relaxed", children: card })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { message: "No PG fits those filters. Widen budget by 15% or pick a different area." }) })
  ] });
}
function SendThree({ onOpen }) {
  const allAreas = reactExports.useMemo(() => Array.from(new Set(PGS.map((p) => p.area))).sort(), []);
  const [area, setArea] = reactExports.useState(allAreas[0] || "Koramangala");
  const [gender, setGender] = reactExports.useState("Any");
  const [budgetMin, setBudgetMin] = reactExports.useState(12e3);
  const [budgetMax, setBudgetMax] = reactExports.useState(2e4);
  const [leadName, setLeadName] = reactExports.useState("");
  const picks = reactExports.useMemo(() => {
    return PGS.filter((p) => p.area === area).filter((p) => gender === "Any" || p.gender === gender || p.gender === "Co-live").map((p) => {
      const beds = [p.prices.triple, p.prices.double, p.prices.single].filter((x) => x > 0);
      const cheap = beds.length ? Math.min(...beds) : 99999;
      const fits = cheap >= budgetMin * 0.85 && cheap <= budgetMax * 1.15;
      if (!fits) return null;
      const value = valueScore(p);
      return { pg: p, cheap, value };
    }).filter((x) => !!x).sort((a, b) => b.value - a.value).slice(0, 3);
  }, [area, gender, budgetMin, budgetMax]);
  const message = reactExports.useMemo(() => buildThreeOptions(picks.map((p) => p.pg), {
    leadName: leadName || void 0,
    landmark: area,
    gender: gender !== "Any" ? gender : void 0
  }), [picks, leadName, area, gender]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 rounded-lg border border-border bg-card p-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lead name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: leadName,
          onChange: (e) => setLeadName(e.target.value),
          placeholder: "Optional",
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Area", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: area,
          onChange: (e) => setArea(e.target.value),
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none cursor-pointer",
          children: allAreas.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a, className: "bg-card", children: a }, a))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Gender", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: gender,
          onChange: (e) => setGender(e.target.value),
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none cursor-pointer",
          children: ["Any", "Boys", "Girls", "Co-live"].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: g, className: "bg-card", children: g }, g))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: `Budget ₹${(budgetMin / 1e3).toFixed(0)}k–${(budgetMax / 1e3).toFixed(0)}k`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: budgetMin,
            onChange: (e) => setBudgetMin(+e.target.value || 0),
            className: "w-full rounded-md border border-input bg-surface-1 px-2 py-2 text-sm outline-none font-mono"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: budgetMax,
            onChange: (e) => setBudgetMax(+e.target.value || 0),
            className: "w-full rounded-md border border-input bg-surface-1 px-2 py-2 text-sm outline-none font-mono"
          }
        )
      ] }) })
    ] }),
    picks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { message: "No 3 options match. Widen budget or pick a different area." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-[1fr_360px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: picks.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => onOpen(p.pg),
          className: "block w-full rounded-lg border border-border bg-card p-3 text-left transition-smooth hover:border-primary/40",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/15 font-mono text-sm font-bold text-primary", children: i + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-semibold truncate", children: p.pg.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate", children: [
                p.pg.area,
                " · ₹",
                (p.cheap / 1e3).toFixed(0),
                "k (₹",
                perDay(p.cheap),
                "/day)",
                p.pg.nearbyLandmarks?.[0] && ` · ${p.pg.nearbyLandmarks[0].w <= 0 ? "<1m" : p.pg.nearbyLandmarks[0].w + "m"} to ${p.pg.nearbyLandmarks[0].n}`
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm font-bold tabular-nums text-emerald-400", children: p.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-widest text-muted-foreground", children: "Value" })
            ] })
          ] })
        },
        p.pg.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5 text-primary" }),
            " Forwardable message"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { text: message, label: "Copy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "max-h-96 overflow-y-auto whitespace-pre-wrap rounded bg-surface-2 p-3 text-[11px] leading-relaxed", children: message }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: waLink(void 0, message),
            target: "_blank",
            rel: "noreferrer",
            className: "mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-emerald-500/15 border border-emerald-400/40 px-3 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-500/25",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
              " Send via WhatsApp"
            ]
          }
        )
      ] })
    ] })
  ] });
}
function ObjectionPivot({ onOpen }) {
  const [pgId, setPgId] = reactExports.useState(PGS[0]?.id || "");
  const [objection, setObjection] = reactExports.useState("expensive");
  const pg = PGS.find((p) => p.id === pgId);
  const alternatives = reactExports.useMemo(() => pg ? findAlternatives(pg, objection, PGS) : [], [pg, objection]);
  const baseBudget = reactExports.useMemo(() => {
    if (!pg) return 15e3;
    const beds = [pg.prices.triple, pg.prices.double, pg.prices.single].filter((x) => x > 0);
    return beds.length ? Math.min(...beds) : 15e3;
  }, [pg]);
  const stretch = reactExports.useMemo(() => budgetStretch(baseBudget, PGS, pg?.gender), [baseBudget, pg]);
  const objections = [
    { k: "expensive", l: "Too expensive", emoji: "💰" },
    { k: "far", l: "Too far", emoji: "📍" },
    { k: "no_gym", l: "Need gym", emoji: "💪" },
    { k: "no_meals", l: "Need meals", emoji: "🍽" },
    { k: "no_ac", l: "Need AC", emoji: "❄️" },
    { k: "wrong_food", l: "Need non-veg", emoji: "🍗" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Property the lead is hesitating on", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: pgId,
          onChange: (e) => setPgId(e.target.value),
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none cursor-pointer",
          children: PGS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: p.id, className: "bg-card", children: [
            p.name,
            " — ",
            p.area
          ] }, p.id))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-[10px] uppercase tracking-widest text-muted-foreground", children: "Lead's objection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6", children: objections.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setObjection(o.k),
            className: cn(
              "rounded-md border px-2 py-2 text-xs font-medium transition-smooth",
              objection === o.k ? "border-primary bg-primary/15 text-primary" : "border-border bg-surface-1 hover:border-primary/40"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1", children: o.emoji }),
              o.l
            ]
          },
          o.k
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-3 text-sm font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-primary" }),
        " 3 alternatives that kill this objection"
      ] }),
      alternatives.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { message: "No alternatives in the same area for that objection. Try a different area or relax filters." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-3", children: alternatives.map((alt) => {
        const cheap = Math.min(...[alt.prices.triple, alt.prices.double, alt.prices.single].filter((x) => x > 0).concat(99999));
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => onOpen(alt),
            className: "rounded-md border border-border bg-surface-1 p-3 text-left transition-smooth hover:border-primary/40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm truncate", children: alt.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate", children: [
                alt.area,
                " · IQ ",
                alt.iq
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-mono text-sm tabular-nums text-emerald-400", children: cheap < 99999 ? `₹${(cheap / 1e3).toFixed(0)}k · ₹${perDay(cheap)}/day` : "On call" })
            ]
          },
          alt.id
        );
      }) })
    ] }),
    objection === "expensive" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-3 text-sm font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-primary" }),
        " Budget stretch — what they unlock"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-3", children: stretch.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
        "rounded-md border p-3",
        i === 0 ? "border-border bg-surface-1" : i === 1 ? "border-amber-400/40 bg-amber-400/5" : "border-emerald-400/40 bg-emerald-400/5"
      ), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-base font-bold tabular-nums", children: [
            "₹",
            (s.budget / 1e3).toFixed(0),
            "k"
          ] }),
          i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground font-mono", children: [
            "+₹",
            s.perDayDelta,
            "/day"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] uppercase tracking-widest text-muted-foreground", children: "Unlocks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-1 space-y-0.5 text-xs", children: s.unlocks.slice(0, 4).map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "✓" }),
          u
        ] }, u)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-[10px] text-muted-foreground", children: [
          s.pgs.length,
          " PGs available"
        ] })
      ] }, s.budget)) })
    ] })
  ] });
}
function ReEngage({ onOpen }) {
  const [pgId, setPgId] = reactExports.useState(PGS[0]?.id || "");
  const [stage, setStage] = reactExports.useState("visited");
  const [leadName, setLeadName] = reactExports.useState("");
  const pg = PGS.find((p) => p.id === pgId);
  const message = reactExports.useMemo(() => pg ? buildReengagement(pg, stage) : "", [pg, stage]);
  const personalised = leadName ? message.replace(/^Hi!/, `Hi ${leadName}!`) : message;
  const fr = pg ? freshness(pg) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lead name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: leadName,
          onChange: (e) => setLeadName(e.target.value),
          placeholder: "Optional",
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Which property did they engage with?", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: pgId,
          onChange: (e) => setPgId(e.target.value),
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none cursor-pointer",
          children: PGS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: p.id, className: "bg-card", children: [
            p.name,
            " — ",
            p.area
          ] }, p.id))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "What stage did they reach?", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["visited", "got_price", "browsed"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setStage(s),
          className: cn(
            "rounded-md border px-2 py-2 text-xs font-medium transition-smooth",
            stage === s ? "border-primary bg-primary/15 text-primary" : "border-border bg-surface-1 hover:border-primary/40"
          ),
          children: s === "visited" ? "Visited" : s === "got_price" ? "Got price" : "Just browsed"
        },
        s
      )) }) })
    ] }),
    pg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-primary" }),
          " Re-engagement message"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { text: personalised, label: "Copy" })
      ] }),
      fr?.isFresh && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 rounded-md border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-300", children: [
        "✦ ",
        fr.changeKind,
        " ",
        fr.daysAgo,
        " days ago — perfect re-engagement hook."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "max-h-72 overflow-y-auto whitespace-pre-wrap rounded bg-surface-2 p-3 text-xs leading-relaxed", children: personalised }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: waLink(pg.manager.phone, personalised),
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-1.5 rounded-md bg-emerald-500/15 border border-emerald-400/40 px-3 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-500/25",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
              " Send WhatsApp"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onOpen(pg), className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-1 px-3 py-2 text-xs font-medium hover:border-primary/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " Open property"
        ] })
      ] })
    ] })
  ] });
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-[10px] uppercase tracking-widest text-muted-foreground", children: label }),
    children
  ] });
}
function Stat({ label, value, accent, hot }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-surface-2 p-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
      "mt-0.5 font-mono text-sm font-bold tabular-nums",
      hot ? "text-rose-300" : accent ? "text-primary" : "text-foreground"
    ), children: value })
  ] });
}
function EmptyState({ message }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-dashed border-border bg-card p-12 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: message })
  ] });
}
function PropertyHubPage() {
  const [tab, setTab] = reactExports.useState("hub");
  const [active, setActive] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-svh flex-col bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 flex h-12 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-md bg-accent/15 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-semibold", children: "Property Hub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] font-mono", children: [
          PGS.length,
          " PGs"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto text-[10px] text-muted-foreground hidden sm:block", children: "Connected to Impact Queue" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container py-4 sm:py-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: tab, onValueChange: (v) => setTab(v), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "h-9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "closer", className: "text-xs gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5" }),
          "Closer"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "hub", className: "text-xs gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5" }),
          "Hub"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "matcher", className: "text-xs gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-3.5 w-3.5" }),
          "Matcher"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "area", className: "text-xs gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
          "Area Intel"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "distance", className: "text-xs gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { className: "h-3.5 w-3.5" }),
          "Distance"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "closer", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloserModule, { onOpen: setActive }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "hub", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyHub, { onOpen: setActive }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "matcher", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeadMatcherTab, { onOpen: setActive }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "area", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AreaIntelTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "distance", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DistanceFinderTab, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShortlistTray, { onOpenPG: setActive }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PGDetail, { pg: active, onClose: () => setActive(null) })
  ] });
}
function PropertyHub({ onOpen }) {
  const [submitted, setSubmitted] = reactExports.useState("");
  const [area, setArea] = reactExports.useState("All");
  const [gender, setGender] = reactExports.useState("All");
  const [pickedLandmark, setPickedLandmark] = reactExports.useState(null);
  const allAreas = reactExports.useMemo(() => Array.from(new Set(PGS.map((p) => p.area))).sort(), []);
  const list = reactExports.useMemo(() => {
    let arr = submitted ? searchPGs(submitted, 400).map((h) => h.pg) : [...PGS];
    if (area !== "All") arr = arr.filter((p) => p.area === area);
    if (gender !== "All") arr = arr.filter((p) => p.gender === gender);
    arr.sort((a, b) => b.iq - a.iq);
    return arr.slice(0, 60);
  }, [submitted, area, gender]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UniversalSearch,
      {
        onPickLandmark: (lm) => {
          setPickedLandmark(lm);
          setSubmitted(lm.n);
        },
        onPickPG: onOpen,
        placeholder: "Search Tonic Kora, Manyata, Christ back gate, Goldman Sachs, 560066…"
      }
    ),
    pickedLandmark && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-primary/40 bg-primary/5 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footprints, { className: "h-4 w-4 shrink-0 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
          "Filtered near ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: pickedLandmark.n })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setPickedLandmark(null);
        setSubmitted("");
      }, className: "rounded-md border border-border bg-card px-2.5 py-1 text-xs hover:border-primary/40 shrink-0", children: "Clear" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 rounded-lg border border-border bg-surface-1 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectChip, { label: "Area", value: area, options: ["All", ...allAreas], onChange: setArea }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectChip, { label: "Gender", value: gender, options: ["All", "Boys", "Girls", "Co-live"], onChange: setGender }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto text-[10px] text-muted-foreground", children: [
        list.length,
        " results"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: list.map((pg) => /* @__PURE__ */ jsxRuntimeExports.jsx(PGTile, { pg, onClick: () => onOpen(pg) }, pg.id)) }),
    list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border bg-muted/30 p-8 text-center text-xs text-muted-foreground", children: "No PGs match those filters." })
  ] });
}
function SelectChip({ label, value, options, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "select",
      {
        value,
        onChange: (e) => onChange(e.target.value),
        className: "rounded-md border border-border bg-card px-2 py-1 text-xs",
        children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, children: o }, o))
      }
    )
  ] });
}
function LeadMatcherTab({ onOpen }) {
  const [lead, setLead] = reactExports.useState({
    area: "Whitefield",
    gender: "Any",
    budgetMin: 1e4,
    budgetMax: 18e3,
    audience: "Working",
    occupancy: "Any"
  });
  const results = reactExports.useMemo(() => matchLead(lead).slice(0, 12), [lead]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-4 grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Area / landmark" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: lead.area,
            onChange: (e) => setLead({ ...lead, area: e.target.value }),
            className: "w-full rounded-md border bg-background px-2 py-1.5"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Gender" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: lead.gender,
            onChange: (e) => setLead({ ...lead, gender: e.target.value }),
            className: "w-full rounded-md border bg-background px-2 py-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Any" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Boys" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Girls" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Co-live" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Budget min" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: lead.budgetMin,
            onChange: (e) => setLead({ ...lead, budgetMin: Number(e.target.value) }),
            className: "w-full rounded-md border bg-background px-2 py-1.5"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Budget max" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: lead.budgetMax,
            onChange: (e) => setLead({ ...lead, budgetMax: Number(e.target.value) }),
            className: "w-full rounded-md border bg-background px-2 py-1.5"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Sharing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: lead.occupancy,
            onChange: (e) => setLead({ ...lead, occupancy: e.target.value }),
            className: "w-full rounded-md border bg-background px-2 py-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Any" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Single" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Double" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Triple" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: results.map((r) => {
      const rt = rating(r.total);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => onOpen(r.pg),
          className: "text-left rounded-lg border bg-card hover:border-accent/60 transition p-3 space-y-1.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm truncate flex-1", children: r.pg.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[9px] font-mono ${rt.color}`, children: r.total })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
              r.pg.area,
              " · ",
              r.pg.gender,
              " · ",
              r.bedLabel
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px]", children: [
              rt.label,
              " — ",
              rt.action
            ] }),
            r.commuteKm !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
              r.commuteKm,
              " km away"
            ] })
          ]
        },
        r.pg.id
      );
    }) })
  ] });
}
function AreaIntelTab() {
  const [areaName, setAreaName] = reactExports.useState(AREAS[0]?.area ?? "Whitefield");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Area" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: areaName,
          onChange: (e) => setAreaName(e.target.value),
          className: "rounded-md border bg-background px-2 py-1.5 text-xs",
          children: AREAS.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a.area, children: a.area }, a.area))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AreaMoodCard, { area: areaName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DualMatcher, { onOpen: () => {
    } })
  ] });
}
function DistanceFinderTab() {
  const areas = reactExports.useMemo(() => Object.keys(DISTANCE).sort(), []);
  const [from, setFrom] = reactExports.useState(areas[0] ?? "");
  const row = DISTANCE[from] ?? {};
  const list = Object.entries(row).sort((a, b) => a[1] - b[1]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "From" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: from,
          onChange: (e) => setFrom(e.target.value),
          className: "rounded-md border bg-background px-2 py-1.5 text-xs",
          children: areas.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a, children: a }, a))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-accent ml-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
        list.length,
        " known links"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2", children: list.map(([to, km]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border bg-card p-2.5 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", children: to }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", children: [
        km,
        " km"
      ] })
    ] }, to)) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyHubPage, {}) });
export {
  SplitComponent as component
};
