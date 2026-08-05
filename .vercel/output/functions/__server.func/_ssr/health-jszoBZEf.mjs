import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell } from "./AppShell-qrUFATK5.mjs";
import { u as useApp, a as useSettings, c as useMountedNow } from "./router-Brs45mHz.mjs";
import { u as useCRM10x } from "./store-CeJJuoup.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { y as Target, aD as Database, N as MessageSquare, Z as Zap, u as Brain, f as Activity, ad as Layers, k as CircleCheck, g as TriangleAlert } from "../_libs/lucide-react.mjs";
import { f as format } from "../_libs/date-fns.mjs";
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
import "./analytics-Ds6VG4Ib.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/cmdk.mjs";
import "./personas-DYCrD02E.mjs";
import "../_libs/radix-ui__react-scroll-area.mjs";
import "../_libs/radix-ui__number.mjs";
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
function HealthPage() {
  const {
    leads,
    tours,
    properties,
    bookings,
    tcms
  } = useApp();
  const {
    profiles,
    messageOutcomes,
    calls,
    objections
  } = useCRM10x();
  const {
    settings
  } = useSettings();
  const [now, mounted] = useMountedNow();
  const checks = [{
    id: "leads",
    label: "Leads module",
    icon: Target,
    href: "/leads",
    ok: leads.length > 0,
    detail: `${leads.length} leads · ${tours.length} tours · ${bookings.length} bookings`
  }, {
    id: "deep-profile",
    label: "Deep profile store",
    icon: Database,
    ok: true,
    detail: `${Object.keys(profiles).length} enriched profiles · ${calls.length} calls · ${objections.length} objections logged`
  }, {
    id: "smart-wa",
    label: "SmartWaLayer",
    icon: MessageSquare,
    ok: true,
    detail: `${messageOutcomes.length} sends tracked · ${messageOutcomes.filter((m) => m.replied).length} replied · ${messageOutcomes.filter((m) => m.bookedAfter).length} booked-after`
  }, {
    id: "queue",
    label: "Daily Action Queue",
    icon: Zap,
    href: "/queue",
    ok: true,
    detail: "Mounted at /queue — fire/confirm/recover/nurture bands"
  }, {
    id: "zone-brain",
    label: "Zone Brain",
    icon: Brain,
    href: "/zone-brain",
    ok: settings.zones && settings.zones.length > 0,
    detail: `${settings.zones?.length ?? 0} zones · ${tcms.length} TCMs · capacity + rebalancing recos`
  }, {
    id: "conversion",
    label: "Conversion Intelligence",
    icon: Activity,
    href: "/manager",
    ok: true,
    detail: "Mounted on Manager dashboard — funnel velocity, objection-loss, agent cohort"
  }, {
    id: "supply",
    label: "Supply Hub",
    icon: Layers,
    href: "/supply-hub",
    ok: properties.length > 0,
    detail: `${properties.length} properties indexed · matcher v2 live`
  }];
  const okCount = checks.filter((c) => c.ok).length;
  const allGreen = okCount === checks.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-end justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", children: "System Health" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Arena Infrastructure runtime check —",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: allGreen ? "text-success font-mono" : "text-destructive font-mono", children: [
            okCount,
            "/",
            checks.length,
            " modules OK"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-mono min-h-[1em]", children: mounted ? format(new Date(now), "EEE MMM d · HH:mm:ss") : " " })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "rounded-xl border border-border bg-card divide-y divide-border", children: checks.map((c) => {
      const Icon = c.icon;
      const Tone = c.ok ? CircleCheck : TriangleAlert;
      const row = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-muted-foreground shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: c.detail })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tone, { className: `h-4 w-4 shrink-0 ${c.ok ? "text-success" : "text-destructive"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-mono uppercase ${c.ok ? "text-success" : "text-destructive"}`, children: c.ok ? "OK" : "FAIL" })
      ] });
      return c.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: c.href, className: "block hover:bg-muted/40 transition-colors", children: row }, c.id) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: row }, c.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-4 text-xs space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-sm mb-2", children: "Build info" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "App", v: "Gharpayy · Arena Infrastructure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Stack", v: "TanStack Start · Vite · Zustand (persisted)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Persistence", v: "localStorage v1 — gharpayy.crm10x.v1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Last hydrated", v: mounted ? format(new Date(now), "PPpp") : "—" })
    ] })
  ] }) });
}
function Row({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", children: v })
  ] });
}
export {
  HealthPage as component
};
