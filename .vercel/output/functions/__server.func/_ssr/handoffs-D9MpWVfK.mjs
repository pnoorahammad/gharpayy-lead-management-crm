import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, U as ClientOnly } from "./AppShell-Cp2f_YYK.mjs";
import { u as useApp, k as Button } from "./router-kYRMoTX_.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { N as MessageSquare, g as TriangleAlert, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { f as format } from "../_libs/date-fns.mjs";
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
function HandoffsPage() {
  const {
    handoffs,
    leads,
    tcms,
    role,
    currentTcmId,
    selectLead,
    markHandoffsRead
  } = useApp();
  const grouped = reactExports.useMemo(() => {
    const byLead = /* @__PURE__ */ new Map();
    for (const h of handoffs) {
      const arr = byLead.get(h.leadId) ?? [];
      arr.push(h);
      byLead.set(h.leadId, arr);
    }
    return Array.from(byLead.entries()).map(([leadId, msgs]) => {
      const sorted = [...msgs].sort((a, b) => +new Date(b.ts) - +new Date(a.ts));
      const last = sorted[0];
      const unread = sorted.filter((m) => !m.read && m.to === role).length;
      const hasUrgent = sorted.some((m) => m.priority === "urgent" && !m.read);
      return {
        leadId,
        msgs: sorted,
        last,
        unread,
        hasUrgent
      };
    }).sort((a, b) => {
      if (a.unread !== b.unread) return b.unread - a.unread;
      return +new Date(b.last.ts) - +new Date(a.last.ts);
    });
  }, [handoffs, role]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl font-semibold tracking-tight inline-flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-6 w-6 text-accent" }),
        " Handoffs"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "FlowOps qualifies and routes. TCM closes. Both sides stay in sync here — every lead, in real time." })
    ] }),
    grouped.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-8 w-8 text-muted-foreground mx-auto mb-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold", children: "No handoffs yet." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "When FlowOps routes a lead or a TCM updates one, it appears here." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden divide-y divide-border", children: grouped.map(({
      leadId,
      msgs,
      last,
      unread,
      hasUrgent
    }) => {
      const lead = leads.find((l) => l.id === leadId);
      if (!lead) return null;
      const fromLabel = last.from === "flow-ops" ? "Flow Ops" : last.from === "tcm" ? tcms.find((t) => t.id === last.fromId)?.name ?? "TCM" : "HR";
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-4 py-3 hover:bg-muted/30 transition-colors ${hasUrgent ? "bg-destructive/5" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            hasUrgent && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 text-destructive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", children: lead.name }),
            unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center rounded-full bg-accent text-accent-foreground px-1.5 py-0 text-[10px] font-mono", children: [
              unread,
              " new"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
              "· ",
              msgs.length,
              " msg",
              msgs.length === 1 ? "" : "s"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground mt-1 inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: fromLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-2.5 w-2.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: last.to === "flow-ops" ? "Flow Ops" : last.to === "tcm" ? "TCM" : "HR" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { suppressHydrationWarning: true, children: "· …" }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "· ",
              format(new Date(last.ts), "MMM d, p")
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-1.5 line-clamp-2", children: last.text })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => {
          selectLead(leadId);
          markHandoffsRead(leadId);
        }, children: "Open" })
      ] }) }, leadId);
    }) })
  ] }) });
}
export {
  HandoffsPage as component
};
