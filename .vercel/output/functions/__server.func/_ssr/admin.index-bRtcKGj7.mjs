import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AdminShell } from "./AdminShell-C2BUOQ7i.mjs";
import { u as useAdminRows, s as summarizeWhyNotClosing, a as summarizeTopObjections } from "./use-admin-rows-CJo-34sF.mjs";
import { u as useAuditLog } from "./audit-log-BbY99Bzt.mjs";
import { C as CopyChipRail, b as buildLeadCopyBlocks } from "./whatsapp-blocks-ZZI8-Ktg.mjs";
import { b as useVisitWar } from "./router-kYRMoTX_.mjs";
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
import "../_libs/lucide-react.mjs";
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
function AdminCockpit() {
  const rows = useAdminRows();
  const audit = useAuditLog((s) => s.entries).slice(0, 40);
  const alerts = useVisitWar((s) => s.alerts).slice(0, 20);
  const open = rows.filter((r) => r.status === "open" || r.status === "dormant");
  const hot = open.filter((r) => r.probability >= 70);
  const booked = rows.filter((r) => r.booked);
  const lost = rows.filter((r) => r.status === "lost");
  const walking = lost.reduce((s, r) => s + r.lead.budget * 12, 0);
  const revenue = booked.reduce((s, r) => s + (r.bookings[0]?.amount ?? r.lead.budget) * 12, 0);
  const why = reactExports.useMemo(() => summarizeWhyNotClosing(rows), [rows]);
  const objs = reactExports.useMemo(() => summarizeTopObjections(rows.flatMap((r) => r.objections)), [rows]);
  const top24h = reactExports.useMemo(() => [...open].sort((a, b) => b.probability - a.probability).slice(0, 5), [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminShell, { title: "Cockpit", sub: "Single screen — every signal, every action.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3", children: [{
      label: "Pipeline open",
      value: open.length,
      accent: "text-info"
    }, {
      label: "Hot ≥70%",
      value: hot.length,
      accent: "text-accent"
    }, {
      label: "Booked",
      value: booked.length,
      accent: "text-success"
    }, {
      label: "₹ Booked",
      value: `₹${(revenue / 1e5).toFixed(1)}L`,
      accent: "text-success"
    }, {
      label: "₹ Walking",
      value: `₹${(walking / 1e5).toFixed(1)}L`,
      accent: "text-destructive"
    }].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: k.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xl font-display font-semibold ${k.accent}`, children: k.value })
    ] }, k.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-3 mt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyCard, { title: "Why leads aren't closing", rows: why.map((w) => [w.reason, w.count]) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyCard, { title: "Top objection codes", rows: objs.map((o) => [o.code, o.count]) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-2", children: "Most likely to close in 24h" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-1 text-xs", children: [
          top24h.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/leads", className: "truncate hover:underline", children: [
              i + 1,
              ". ",
              r.lead.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-accent font-mono", children: [
              r.probability,
              "%"
            ] })
          ] }, r.lead.id)),
          !top24h.length && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground", children: "No open leads." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3 mt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-2", children: "Live pulse — visit alerts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-xs max-h-72 overflow-auto", children: [
          alerts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-mono", children: new Date(a.ts).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit"
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.message })
          ] }, a.id)),
          !alerts.length && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground", children: "No alerts." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-2", children: "Audit feed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-xs max-h-72 overflow-auto", children: [
          audit.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-mono", children: new Date(e.ts).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit"
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: e.summary })
          ] }, e.id)),
          !audit.length && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground", children: "No entries yet." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3 mt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-2", children: "Broadcast snippets" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CopyChipRail, { blocks: top24h.length ? buildLeadCopyBlocks(top24h[0], rows).filter((b) => ["daily", "weekly"].includes(b.key)) : [] })
    ] })
  ] });
}
function WhyCard({
  title,
  rows
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-2", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-xs", children: [
      rows.map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-accent", children: v })
      ] }, k)),
      !rows.length && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground", children: "No data." })
    ] })
  ] });
}
export {
  AdminCockpit as component
};
