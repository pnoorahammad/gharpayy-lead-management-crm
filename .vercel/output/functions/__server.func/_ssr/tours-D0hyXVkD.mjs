import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell } from "./AppShell-qrUFATK5.mjs";
import { u as useApp, c as useMountedNow, B as Badge } from "./router-Brs45mHz.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { g as TriangleAlert, s as Clock, k as CircleCheck } from "../_libs/lucide-react.mjs";
import { i as isPast, a as isToday, f as format } from "../_libs/date-fns.mjs";
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
function ToursPage() {
  const {
    tours,
    leads,
    properties,
    tcms,
    selectLead
  } = useApp();
  const [now, mounted] = useMountedNow();
  const sorted = [...tours].sort((a, b) => +new Date(b.scheduledAt) - +new Date(a.scheduledAt));
  const upcoming = sorted.filter((t) => t.status === "scheduled");
  const completed = sorted.filter((t) => t.status === "completed");
  const incomplete = completed.filter((t) => !t.postTour.filledAt);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", children: "Tours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          upcoming.length,
          " upcoming · ",
          completed.length,
          " completed · ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-destructive font-medium", children: [
            incomplete.length,
            " pending post-tour"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/live-visit", className: "ml-auto inline-flex items-center gap-1.5 rounded-lg border border-success/40 bg-success/10 px-3 py-1.5 text-xs font-medium text-success hover:bg-success/15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute h-full w-full rounded-full bg-success/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative h-2 w-2 rounded-full bg-success" })
        ] }),
        "Open Live Visit War Room"
      ] })
    ] }),
    incomplete.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Post-tour enforcement", tone: "destructive", icon: TriangleAlert, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: incomplete.map((t) => {
      const lead = leads.find((l) => l.id === t.leadId);
      const prop = properties.find((p) => p.id === t.propertyId);
      const tcm = tcms.find((x) => x.id === t.tcmId);
      if (!lead) return null;
      const hours = mounted ? Math.round((now - +new Date(t.scheduledAt)) / 36e5) : null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => selectLead(lead.id), className: "text-left rounded-lg border border-destructive/30 bg-destructive/5 p-3 hover:bg-destructive/10 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", children: lead.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] border-destructive/40 text-destructive", children: hours === null ? "Overdue" : `${hours}h overdue` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5", children: [
          prop?.name,
          " · ",
          tcm?.name
        ] })
      ] }, t.id);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Upcoming tours", icon: Clock, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TourList, { tours: upcoming }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Completed", icon: CircleCheck, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TourList, { tours: completed }) })
  ] }) });
}
function Section({
  title,
  icon: Icon,
  tone = "default",
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 ${tone === "destructive" ? "text-destructive" : "text-muted-foreground"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", children: title })
    ] }),
    children
  ] });
}
function TourList({
  tours
}) {
  const {
    leads,
    properties,
    tcms,
    selectLead
  } = useApp();
  if (tours.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-dashed border-border p-6 text-center text-xs text-muted-foreground", children: "No tours." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden divide-y divide-border", children: tours.map((t) => {
    const lead = leads.find((l) => l.id === t.leadId);
    const prop = properties.find((p) => p.id === t.propertyId);
    const tcm = tcms.find((x) => x.id === t.tcmId);
    if (!lead) return null;
    const when = new Date(t.scheduledAt);
    const overdue = t.status === "scheduled" && isPast(when) && !isToday(when);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => selectLead(lead.id), className: "w-full text-left grid grid-cols-12 px-4 py-3 items-center hover:bg-accent/5 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: lead.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: lead.phone })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 text-xs", children: prop?.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-xs", children: tcm?.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-xs font-mono", children: format(when, "MMM d, p") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 flex items-center gap-1.5 justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "capitalize text-[10px]", children: t.status }),
        t.decision && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "capitalize text-[10px]", children: t.decision }),
        overdue && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] border-destructive/40 text-destructive", children: "Late" }),
        t.status === "completed" && !t.postTour.filledAt && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] border-destructive/40 text-destructive", children: "Form" })
      ] })
    ] }, t.id);
  }) });
}
export {
  ToursPage as component
};
