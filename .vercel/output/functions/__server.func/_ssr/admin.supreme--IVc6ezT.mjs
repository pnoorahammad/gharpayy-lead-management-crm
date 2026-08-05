import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AdminShell } from "./AdminShell-C2BUOQ7i.mjs";
import { u as useAdminRows } from "./use-admin-rows-CJo-34sF.mjs";
import { c as computeMoneyMap, b as computeTcmHealth, d as computeAreaPulse, e as computeSourceROI, f as collectVoiceOfCustomer, a as computeSlaBreaches } from "./supreme-metrics-r51wfKg6.mjs";
import { q as cn } from "./router-kYRMoTX_.mjs";
import "../_libs/sonner.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./store-CeJJuoup.mjs";
import "../_libs/zustand.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/lucide-react.mjs";
function inrL(n) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)}Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)}L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}
function pct(n) {
  return `${Math.round(n * 100)}%`;
}
function SupremePage() {
  const rows = useAdminRows();
  const money = reactExports.useMemo(() => computeMoneyMap(rows), [rows]);
  const tcms = reactExports.useMemo(() => computeTcmHealth(rows), [rows]);
  const areas = reactExports.useMemo(() => computeAreaPulse(rows), [rows]).slice(0, 8);
  const sources = reactExports.useMemo(() => computeSourceROI(rows), [rows]).slice(0, 6);
  const voices = reactExports.useMemo(() => collectVoiceOfCustomer(rows, 10), [rows]);
  const breaches = reactExports.useMemo(() => computeSlaBreaches(rows), [rows]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminShell, { title: "Admin Supreme · God Mode", sub: "Every rupee, every person, every breach — one screen.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-2 md:grid-cols-5 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Booked revenue (12mo)", value: inrL(money.bookedRevenue), tone: "success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Pipeline (weighted)", value: inrL(money.pipelineRevenue), tone: "info" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Hot revenue ≥70%", value: inrL(money.hotRevenue), tone: "accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "At-risk (stale ≥3d)", value: inrL(money.atRiskRevenue), tone: "warn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Walking (lost 30d)", value: inrL(money.walkingRevenue), tone: "danger" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-3 mt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "SLA breach board", sub: "Most expensive overdue work first", className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[10px] uppercase text-muted-foreground border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5", children: "Lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left", children: "TCM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left", children: "Breach" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Age" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Prob" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "EV" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          breaches.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60 hover:bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/leads", className: "hover:underline", children: b.leadName }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: b.tcm }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 rounded bg-destructive/15 text-destructive text-[10px]", children: b.type }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right font-mono", children: [
              Math.round(b.ageHrs),
              "h"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right font-mono", children: [
              b.probability,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono text-accent", children: inrL(b.expectedValue) })
          ] }, b.leadId + b.type)),
          !breaches.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 6, className: "text-center text-muted-foreground py-4", children: "No breaches. Clean slate." }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Voice of customer", sub: "Raw objections & lost-reasons, latest first", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-xs max-h-[420px] overflow-auto pr-1", children: [
        voices.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border-l-2 border-destructive/60 pl-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground", children: [
            '"',
            v.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: [
            "— ",
            v.leadName,
            " · ",
            new Date(v.ts).toLocaleDateString("en-IN")
          ] })
        ] }, i)),
        !voices.length && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground", children: "No captured voice yet." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "People health · load & burn", sub: "Watch and burn flags drive coaching priority", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-2", children: [
      tcms.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-lg border p-2.5 bg-card", t.riskFlag === "burn" && "border-destructive/60", t.riskFlag === "watch" && "border-warning/60", t.riskFlag === "ok" && "border-border"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[10px] uppercase px-1.5 py-0.5 rounded", t.riskFlag === "burn" && "bg-destructive/20 text-destructive", t.riskFlag === "watch" && "bg-warning/20 text-warning", t.riskFlag === "ok" && "bg-success/20 text-success"), children: t.riskFlag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1 mt-2 text-[11px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Open", v: t.open }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Hot", v: t.hot, accent: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Dormant", v: t.dormant }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Booked", v: t.booked }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Lost", v: t.lost }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "CVR", v: pct(t.conversion) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-[10px] text-muted-foreground flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Pipeline ",
            inrL(t.pipelineValue)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Age ",
            t.avgAgeDays,
            "d"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-1 rounded bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-full", t.loadScore > 80 ? "bg-destructive" : t.loadScore > 55 ? "bg-warning" : "bg-success"), style: {
          width: `${t.loadScore}%`
        } }) })
      ] }, t.tcmId)),
      !tcms.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: "No TCM data." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3 mt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Area pulse", sub: "Demand vs lost-rate by preferred area", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[10px] uppercase text-muted-foreground border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5", children: "Area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Hot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Booked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Lost %" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Revenue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left pl-2", children: "Top objection" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: areas.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 font-medium", children: a.area }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono", children: a.leads }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono text-accent", children: a.hot }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono text-success", children: a.booked }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cn("text-right font-mono", a.lostRate > 0.4 && "text-destructive"), children: pct(a.lostRate) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono", children: inrL(a.revenue) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pl-2 text-muted-foreground", children: a.topObjection })
        ] }, a.area)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Source ROI", sub: "Which channel actually books beds", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[10px] uppercase text-muted-foreground border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5", children: "Source" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Booked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "CVR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Avg ₹" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Revenue" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: sources.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 font-medium capitalize", children: s.source }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono", children: s.leads }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono text-success", children: s.booked }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono", children: pct(s.cvr) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono", children: inrL(s.avgBudget) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono text-accent", children: inrL(s.revenue) })
        ] }, s.source)) })
      ] }) })
    ] })
  ] });
}
function Tile({
  label,
  value,
  tone
}) {
  const cls = {
    success: "text-success",
    info: "text-info",
    accent: "text-accent",
    warn: "text-warning",
    danger: "text-destructive"
  }[tone];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-xl font-display font-semibold", cls), children: value })
  ] });
}
function Panel({
  title,
  sub,
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-xl border border-border bg-card p-3", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold", children: title }),
      sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: sub })
    ] }),
    children
  ] });
}
function Stat({
  k,
  v,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-mono text-sm", accent && "text-accent"), children: v })
  ] });
}
export {
  SupremePage as component
};
