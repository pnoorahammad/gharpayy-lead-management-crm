import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, I as IntentChip, C as ConfidenceBar } from "./AppShell-Cp2f_YYK.mjs";
import { u as useApp, c as useMountedNow, k as Button } from "./router-kYRMoTX_.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { i as isPast, a as isToday, f as format, b as formatDistanceToNow } from "../_libs/date-fns.mjs";
import { k as CircleCheck } from "../_libs/lucide-react.mjs";
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
function FollowUpsPage() {
  const {
    followUps,
    leads,
    completeFollowUp,
    selectLead
  } = useApp();
  const [, mounted] = useMountedNow();
  const enriched = reactExports.useMemo(() => {
    return followUps.filter((f) => !f.done).map((f) => ({
      f,
      lead: leads.find((l) => l.id === f.leadId)
    })).filter((x) => x.lead);
  }, [followUps, leads]);
  const overdue = enriched.filter((x) => isPast(new Date(x.f.dueAt)) && !isToday(new Date(x.f.dueAt)));
  const today = enriched.filter((x) => isToday(new Date(x.f.dueAt)));
  const upcoming = enriched.filter((x) => !isPast(new Date(x.f.dueAt)) && !isToday(new Date(x.f.dueAt)));
  const hot = enriched.filter((x) => x.lead.intent === "hot");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", children: "Follow-up queue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        overdue.length,
        " overdue · ",
        today.length,
        " today · ",
        upcoming.length,
        " upcoming · ",
        hot.length,
        " hot"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bucket, { title: "Overdue", tone: "destructive", items: overdue, mounted, onDone: (id) => {
      completeFollowUp(id);
      toast.success("Follow-up marked done");
    }, onOpen: selectLead }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bucket, { title: "Today", tone: "accent", items: today, mounted, onDone: (id) => {
      completeFollowUp(id);
      toast.success("Follow-up marked done");
    }, onOpen: selectLead }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bucket, { title: "Upcoming", items: upcoming, mounted, onDone: (id) => {
      completeFollowUp(id);
      toast.success("Follow-up marked done");
    }, onOpen: selectLead })
  ] }) });
}
function Bucket({
  title,
  items,
  tone = "default",
  mounted,
  onDone,
  onOpen
}) {
  const toneCls = {
    default: "border-border",
    accent: "border-accent/30",
    destructive: "border-destructive/30"
  }[tone];
  const titleCls = {
    default: "text-foreground",
    accent: "text-accent",
    destructive: "text-destructive"
  }[tone];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: `font-display text-sm font-semibold mb-2 ${titleCls}`, children: [
      title,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal", children: [
        "(",
        items.length,
        ")"
      ] })
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-dashed border-border p-6 text-center text-xs text-muted-foreground", children: "Nothing here." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-xl border ${toneCls} bg-card overflow-hidden divide-y divide-border`, children: items.map(({
      f,
      lead
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 px-4 py-3 items-center gap-2 hover:bg-accent/5 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onOpen(lead.id), className: "col-span-3 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: lead.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: lead.phone })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IntentChip, { intent: lead.intent }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBar, { value: lead.confidence }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: f.reason }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground text-[11px]", children: [
          format(new Date(f.dueAt), "MMM d, p"),
          " · ",
          mounted ? formatDistanceToNow(new Date(f.dueAt), {
            addSuffix: true
          }) : "—"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 flex justify-end gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-8", onClick: () => onOpen(lead.id), children: "Open" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-8", onClick: () => onDone(f.id), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 mr-1" }),
          " Done"
        ] })
      ] })
    ] }, f.id)) })
  ] });
}
export {
  FollowUpsPage as component
};
