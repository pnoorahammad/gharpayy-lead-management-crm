import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell } from "./AppShell-qrUFATK5.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { z as Sun, d as Users, L as ClipboardCheck, o as ChartColumn, S as Sparkles } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "./router-Brs45mHz.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/zustand.mjs";
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
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "./store-CeJJuoup.mjs";
import "./analytics-Ds6VG4Ib.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/cmdk.mjs";
import "./personas-DYCrD02E.mjs";
import "../_libs/radix-ui__react-scroll-area.mjs";
import "../_libs/date-fns.mjs";
function HelpPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-semibold tracking-tight", children: "How to use this" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Three roles, three landing pages, one connected machine. Below is the daily rhythm — follow it and the system runs itself." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-lg font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4 text-accent" }),
        " Daily operating rhythm"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { time: "9:30 AM", title: "Owners open the update window", link: {
          to: "/owner",
          label: "Owner Portal"
        }, body: "Each owner reviews every room individually. No bulk shortcuts. Status: Occupied / Vacating (date+rent) / Vacant / Blocked." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { time: "11 AM · 2 PM · 7 PM", title: "Three owner warnings", body: "Owners get three reminders to confirm rooms without killing supply in one go." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { time: "10:00 PM", title: "End-of-day lock", link: {
          to: "/owner/rooms",
          label: "View rooms"
        }, body: "Only after the warning cycle do unverified rooms become unsellable for the team.", accent: "danger" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { time: "11 AM – 1 PM", title: "Flow Ops activates new rooms", link: {
          to: "/myt/flow-ops",
          label: "Flow Ops"
        }, body: "Every new room: 5 pitches or 2 qualified matches within 2 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { time: "1 PM – 7 PM", title: "TCM runs visits", link: {
          to: "/myt/tcm",
          label: "TCM Desk"
        }, body: "Each visit tied to a room_id. Post-visit report filed within 15 min — captures objection, budget gap, timeline." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { time: "Anytime", title: "Owners approve blocks within 15 min", link: {
          to: "/owner/blocks",
          label: "Block requests"
        }, body: "High-intent leads need an owner OK in 15 min, else auto-released." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { time: "7 PM", title: "HR reviews compliance + leaderboard", link: {
          to: "/myt",
          label: "HR Tower"
        }, body: "Daily snapshot: pitches, visits, outcomes. Owner responsiveness badge. Lead routing throttled below 70 score." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RoleCard, { icon: Users, title: "Flow Ops", to: "/myt/flow-ops", body: "Add leads, qualify, schedule tours, send confirmation messages. Activation Window enforced per room." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RoleCard, { icon: ClipboardCheck, title: "TCM", to: "/myt/tcm", body: "Run pre/in/post-visit checklist. File the Lead Intelligence Report within 15 min of tour end." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RoleCard, { icon: ChartColumn, title: "HR / Leadership", to: "/", body: "Compliance dashboard, leaderboard, revenue, heatmap, revival queue, owner trust scores." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-lg font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-info" }),
        " One way to do things"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1.5 list-disc list-inside", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Same action menu (⋯) on every lead — same actions, same order, everywhere." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Same card style across Tours, Properties, Owners, and Leads." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Tour confirmation messages share one template library — no inconsistencies." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Every action publishes to the closed-loop event bus → owner sees team activity, team sees owner updates." })
      ] })
    ] })
  ] }) });
}
function Step({
  time,
  title,
  body,
  link,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `rounded-lg border p-3 ${accent === "danger" ? "border-destructive/30 bg-destructive/5" : "border-border bg-card"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-mono ${accent === "danger" ? "text-destructive" : "text-accent"}`, children: time }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", children: title }),
      link && /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: link.to, className: "text-xs text-accent ml-auto", children: [
        link.label,
        " →"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1.5", children: body })
  ] });
}
function RoleCard({
  icon: Icon,
  title,
  body,
  to
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "rounded-xl border border-border bg-card p-4 hover:border-accent/50 transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: body })
  ] });
}
export {
  HelpPage as component
};
