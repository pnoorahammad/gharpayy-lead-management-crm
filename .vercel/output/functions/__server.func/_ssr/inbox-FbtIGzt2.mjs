import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { Q as useNotifications, R as selectInboxFor, A as AppShell, T as ScrollArea } from "./AppShell-Cp2f_YYK.mjs";
import { u as useApp, B as Badge, k as Button, q as cn } from "./router-kYRMoTX_.mjs";
import { a as activePersona, P as PERSONA_BY_ID } from "./personas-DYCrD02E.mjs";
import { H as HRBroadcastComposer } from "./HRBroadcastComposer-CX8-Ynt0.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { as as Inbox, k as CircleCheck, Y as Funnel, K as Send, at as ListTodo, au as CalendarDays, aq as Mail, av as CircleAlert, p as Bell } from "../_libs/lucide-react.mjs";
import { b as formatDistanceToNow } from "../_libs/date-fns.mjs";
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
function InboxPage() {
  const role = useApp((s) => s.role);
  const currentTcmId = useApp((s) => s.currentTcmId);
  const me = activePersona(role, role === "tcm" ? currentTcmId : void 0);
  const items = useNotifications((s) => s.items);
  const markRead = useNotifications((s) => s.markRead);
  const markAllRead = useNotifications((s) => s.markAllRead);
  const toggleTodoDone = useNotifications((s) => s.toggleTodoDone);
  const inbox = reactExports.useMemo(() => selectInboxFor(items, role, me.id), [items, role, me.id]);
  const [tab, setTab] = reactExports.useState("all");
  const filtered = reactExports.useMemo(() => {
    if (tab === "all") return inbox;
    if (tab === "broadcasts") return inbox.filter((n) => n.kind === "broadcast");
    if (tab === "todo") return inbox.filter((n) => n.channels?.includes("todo"));
    if (tab === "calendar") return inbox.filter((n) => n.channels?.includes("calendar"));
    if (tab === "email") return inbox.filter((n) => n.emailQueued);
    return inbox;
  }, [inbox, tab]);
  const counts = {
    all: inbox.length,
    broadcasts: inbox.filter((n) => n.kind === "broadcast").length,
    todo: inbox.filter((n) => n.channels?.includes("todo") && !n.todoDone).length,
    calendar: inbox.filter((n) => n.channels?.includes("calendar")).length,
    email: inbox.filter((n) => n.emailQueued).length
  };
  const unread = inbox.filter((n) => !n.read).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-end justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-3.5 w-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Inbox · ",
            me.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] font-mono", children: labelForRole(role) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", children: "Everything you need to act on, in one place." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: inbox.length === 0 ? "Nothing to do right now. Inbox zero." : `${unread} unread · ${counts.todo} open todos · ${counts.calendar} calendar items.` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => markAllRead(role, me.id), disabled: unread === 0, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 mr-1.5" }),
        "Mark all read"
      ] })
    ] }),
    role === "hr" && /* @__PURE__ */ jsxRuntimeExports.jsx(HRBroadcastComposer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-3 w-3 text-muted-foreground mr-1" }),
      [["all", "All", Inbox, counts.all], ["broadcasts", "From HR", Send, counts.broadcasts], ["todo", "Todo", ListTodo, counts.todo], ["calendar", "Calendar", CalendarDays, counts.calendar], ["email", "Email", Mail, counts.email]].map(([k, label, Icon, n]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(k), className: cn("inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5", tab === k ? "border-accent/40 bg-accent/10 text-accent" : "border-border text-muted-foreground hover:bg-muted"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3" }),
        label,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] opacity-70", children: [
          "(",
          n,
          ")"
        ] })
      ] }, k))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[calc(100vh-360px)] min-h-[400px] pr-2", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground", children: "Nothing here yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: filtered.map((n) => {
      const sender = n.senderId ? PERSONA_BY_ID[n.senderId] : void 0;
      const overdue = n.dueAt ? n.dueAt < Date.now() : false;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: cn("rounded-lg border p-3", severityClass(n.severity), !n.read && "ring-1 ring-accent/20"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityDot, { severity: n.severity }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: n.title }),
            n.kind === "broadcast" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] uppercase", children: [
              "From ",
              sender?.name.split(" ")[0] ?? "HR"
            ] }),
            !n.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-muted-foreground mt-0.5", children: n.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex flex-wrap items-center gap-1.5 text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: formatDistanceToNow(n.ts, {
              addSuffix: true
            }) }),
            n.dueAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center gap-1 rounded px-1.5 py-0.5", overdue ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning"), children: [
              overdue ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-2.5 w-2.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-2.5 w-2.5" }),
              "due ",
              formatDistanceToNow(n.dueAt, {
                addSuffix: true
              })
            ] }),
            (n.channels ?? []).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChannelChip, { c }, c)),
            n.emailQueued && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded px-1.5 py-0.5 bg-info/10 text-info", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-2.5 w-2.5" }),
              " email queued"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1.5 shrink-0", children: [
          n.channels?.includes("todo") && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: n.todoDone ? "outline" : "default", size: "sm", className: "h-7 text-[11px]", onClick: () => toggleTodoDone(n.id), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3 mr-1" }),
            n.todoDone ? "Reopen" : "Done"
          ] }),
          n.href && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.href, onClick: () => markRead(n.id), className: "text-[11px] text-accent hover:underline", children: "Open" })
        ] })
      ] }) }, n.id);
    }) }) })
  ] }) });
}
function ChannelChip({
  c
}) {
  const map = {
    "in-app": {
      Icon: Bell,
      label: "in-app"
    },
    todo: {
      Icon: ListTodo,
      label: "todo"
    },
    calendar: {
      Icon: CalendarDays,
      label: "calendar"
    },
    email: {
      Icon: Mail,
      label: "email"
    }
  };
  const {
    Icon,
    label
  } = map[c];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded px-1.5 py-0.5 bg-muted/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-2.5 w-2.5" }),
    " ",
    label
  ] });
}
function SeverityDot({
  severity
}) {
  const cls = severity === "urgent" ? "bg-destructive" : severity === "warn" ? "bg-warning" : severity === "success" ? "bg-success" : "bg-info";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("mt-1 h-2 w-2 rounded-full shrink-0", cls) });
}
function severityClass(severity) {
  if (severity === "urgent") return "border-destructive/30 bg-destructive/5";
  if (severity === "warn") return "border-warning/30 bg-warning/5";
  if (severity === "success") return "border-success/30 bg-success/5";
  return "border-border bg-card";
}
function labelForRole(r) {
  return r === "tcm" ? "TCM" : r === "flow-ops" ? "Flow Ops" : r === "hr" ? "HR" : "Owner";
}
export {
  InboxPage as component
};
