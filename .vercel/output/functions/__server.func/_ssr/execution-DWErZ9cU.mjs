import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-Cp2f_YYK.mjs";
import { u as useIdentityStore } from "./store-CBikX2jm.mjs";
import { c as computeNextAction, b as breachState, r as renderForLead, O as OBJECTION_TAGS } from "./execution-engine-BqxRWtlf.mjs";
import { as as useNow, B as Badge, X as Input, T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent, C as Card, A as Textarea, k as Button, q as cn } from "./router-kYRMoTX_.mjs";
import { t as toast } from "./use-toast-CW1pxMtS.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { s as Clock, g as TriangleAlert, F as Flame, b as Check, K as Send, N as MessageSquare, P as Phone, S as Sparkles, ar as CalendarPlus, bo as UserX, bp as RotateCw } from "../_libs/lucide-react.mjs";
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
import "./audit-log-BbY99Bzt.mjs";
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
function ObjectionChipRow({
  value,
  onChange,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-wrap gap-1.5", className), children: OBJECTION_TAGS.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      size: "sm",
      variant: value === tag ? "default" : "outline",
      className: "h-7 rounded-full text-[11px] font-medium",
      onClick: () => onChange(tag),
      children: tag.replace(/-/g, " ")
    },
    tag
  )) });
}
const COLORS = {
  L: "bg-blue-500/15 text-blue-700 dark:text-blue-300 ring-blue-500/30",
  T: "bg-amber-500/15 text-amber-700 dark:text-amber-300 ring-amber-500/30",
  CI: "bg-rose-500/15 text-rose-700 dark:text-rose-300 ring-rose-500/30"
};
function PhaseDayBadge({ action, className }) {
  const sign = action.dayOffset >= 0 ? "+" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ring-1",
        COLORS[action.anchor],
        className
      ),
      title: action.reason,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-70", children: [
          "P",
          action.phase
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          action.anchor,
          sign,
          action.dayOffset
        ] })
      ]
    }
  );
}
function NextActionCard({ lead, compact = false }) {
  const now = useNow(3e4);
  const nowDate = now ? new Date(now) : /* @__PURE__ */ new Date();
  const action = computeNextAction(lead, nowDate);
  const breach = breachState(lead, nowDate);
  const recordContact = useIdentityStore((s) => s.recordContact);
  const recordReply = useIdentityStore((s) => s.recordReply);
  const setObjection = useIdentityStore((s) => s.setObjection);
  const bookTour = useIdentityStore((s) => s.bookTour);
  const markNoShow = useIdentityStore((s) => s.markNoShow);
  const markToured = useIdentityStore((s) => s.markToured);
  const [editing, setEditing] = reactExports.useState(false);
  const [body, setBody] = reactExports.useState(action ? renderForLead(action.body, lead) : "");
  const [tourDate, setTourDate] = reactExports.useState("");
  if (!action) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 text-sm text-muted-foreground flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-emerald-500" }),
      "No next action — lead is at terminal state."
    ] });
  }
  const rendered = editing ? body : renderForLead(action.body, lead);
  const phoneDigits = (lead.phoneE164 || lead.phoneRaw || "").replace(/\D/g, "");
  const waUrl = phoneDigits ? `https://wa.me/${phoneDigits}?text=${encodeURIComponent(rendered)}` : null;
  const breachClass = {
    ok: "border-border",
    due: "border-amber-500/60 bg-amber-500/5",
    breached: "border-rose-500/60 bg-rose-500/5",
    escalated: "border-rose-700 bg-rose-700/10"
  }[breach];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn("p-3 space-y-3 border-2 transition-colors", breachClass), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PhaseDayBadge, { action }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold truncate", children: action.label }),
        breach !== "ok" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "destructive", className: "gap-1 text-[10px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-3" }),
          breach.toUpperCase()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3" }),
        "Due ",
        new Date(action.dueAt).toLocaleString([], { hour: "2-digit", minute: "2-digit", day: "numeric", month: "short" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: action.reason })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-muted/40 p-2.5 text-[13px] whitespace-pre-wrap leading-relaxed", children: editing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Textarea,
      {
        value: body,
        onChange: (e) => setBody(e.target.value),
        className: "min-h-[120px] bg-background",
        autoFocus: true
      }
    ) : rendered }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
      waUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          asChild: true,
          onClick: () => recordContact(lead.ulid, "wa"),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waUrl, target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-3.5 mr-1" }),
            " Send WhatsApp"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => {
        recordContact(lead.ulid, "wa");
        toast({ title: "Marked sent", description: action.label });
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 mr-1" }),
        " Mark Sent"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => {
        recordReply(lead.ulid);
        toast({ title: "Reply logged" });
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-3.5 mr-1" }),
        " Log Reply"
      ] }),
      phoneDigits && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", asChild: true, onClick: () => recordContact(lead.ulid, "call"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:+${phoneDigits}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3.5 mr-1" }),
        " Call"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: () => setEditing((v) => !v), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5 mr-1" }),
        " ",
        editing ? "Use template" : "Edit"
      ] })
    ] }),
    !compact && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      action.phase <= 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "datetime-local",
            value: tourDate,
            onChange: (e) => setTourDate(e.target.value),
            className: "h-8 text-xs"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "secondary",
            disabled: !tourDate,
            onClick: () => {
              bookTour(lead.ulid, new Date(tourDate).toISOString());
              setTourDate("");
              toast({ title: "Tour booked" });
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarPlus, { className: "size-3.5 mr-1" }),
              " Book tour"
            ]
          }
        )
      ] }),
      action.phase === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => markNoShow(lead.ulid), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { className: "size-3.5 mr-1" }),
          " No-show"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => markToured(lead.ulid, "WARM"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 mr-1" }),
          " Toured"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: () => {
          const d = lead.anchors?.tourDate ? new Date(+new Date(lead.anchors.tourDate) + 24 * 36e5).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
          useIdentityStore.getState().rescheduleTour(lead.ulid, d);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "size-3.5 mr-1" }),
          " Reschedule +1d"
        ] })
      ] }),
      action.phase === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: ["HOT", "WARM", "COLD"].map((lvl) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: lead.interestLevel === lvl ? "default" : "outline",
          onClick: () => useIdentityStore.getState().setInterestLevel(lead.ulid, lvl),
          children: lvl
        },
        lvl
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wide text-muted-foreground", children: "Primary objection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ObjectionChipRow,
          {
            value: lead.primaryObjection,
            onChange: (t) => setObjection(lead.ulid, t)
          }
        )
      ] })
    ] })
  ] });
}
const DAY = 24 * 60 * 60 * 1e3;
function ExecutionQueue() {
  const leads = useIdentityStore((s) => s.leads);
  const now = useNow(3e4);
  const nowDate = now ? new Date(now) : /* @__PURE__ */ new Date();
  const [q, setQ] = reactExports.useState("");
  const enriched = reactExports.useMemo(() => leads.map((l) => {
    const action = computeNextAction(l, nowDate);
    const breach = breachState(l, nowDate);
    return { lead: l, action, breach };
  }).filter((x) => x.action), [leads, nowDate]);
  const filtered = q ? enriched.filter((e) => e.lead.name.toLowerCase().includes(q.toLowerCase())) : enriched;
  const dueNow = filtered.filter((e) => e.breach !== "ok");
  const today = filtered.filter((e) => +new Date(e.action.dueAt) <= +nowDate + DAY && e.breach === "ok");
  const tomorrow = filtered.filter((e) => {
    const due = +new Date(e.action.dueAt);
    return due > +nowDate + DAY && due <= +nowDate + 2 * DAY;
  });
  const breached = filtered.filter((e) => e.breach === "breached" || e.breach === "escalated");
  const cold = filtered.filter((e) => e.action.phase === 4);
  const fifteenMinLeads = enriched.filter((e) => !e.lead.lastContactAt && +nowDate - +new Date(e.lead.createdAt) < 15 * 60 * 1e3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-4 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "Execution Queue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Date-anchored next actions. Every lead has exactly one next move — execute on schedule." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3" }),
          filtered.length,
          " actions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "destructive", className: "gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-3" }),
          breached.length,
          " breached"
        ] }),
        fifteenMinLeads.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "gap-1 bg-orange-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "size-3" }),
          fifteenMinLeads.length,
          " in 15-min law"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        placeholder: "Search leads…",
        value: q,
        onChange: (e) => setQ(e.target.value),
        className: "max-w-sm"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "due", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "due", children: [
          "Due now (",
          dueNow.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "today", children: [
          "Today (",
          today.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "tomorrow", children: [
          "Tomorrow (",
          tomorrow.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "breached", children: [
          "Breached (",
          breached.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "cold", children: [
          "Cold drip (",
          cold.length,
          ")"
        ] })
      ] }),
      ["due", "today", "tomorrow", "breached", "cold"].map((key) => {
        const list = { due: dueNow, today, tomorrow, breached, cold }[key];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: key, className: "space-y-3 mt-4", children: [
          list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 text-sm text-muted-foreground text-center", children: "Nothing here." }),
          list.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium px-1 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: e.lead.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", children: [
                e.lead.area,
                " · ",
                e.lead.phoneRaw || e.lead.phoneE164
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NextActionCard, { lead: e.lead })
          ] }, e.lead.ulid))
        ] }, key);
      })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExecutionQueue, {}) });
export {
  SplitComponent as component
};
