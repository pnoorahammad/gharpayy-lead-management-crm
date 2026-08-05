import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-qrUFATK5.mjs";
import { aC as useAppState, aJ as zones, q as cn, aL as intentBg, k as Button, aI as teamMembers } from "./router-Brs45mHz.mjs";
import { z as zoneMedianBudget, l as leadIntent, b as budgetPowerScore, c as conversionProbability, u as urgencyExpiry, U as UrgencyTimer } from "./UrgencyTimer-zbkb45Do.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useNavigate } from "./react-router-dom-DMFzJWOF.mjs";
import { L as LeadControlPanel } from "./LeadControlPanel-BXb2atrI.mjs";
import "../_libs/react-dom.mjs";
import { Z as Zap, P as Phone, O as MapPin, W as Wallet, x as Calendar, T as TrendingUp, S as Sparkles, bK as Hand } from "../_libs/lucide-react.mjs";
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
import "./blocks-BqftbsFF.mjs";
import "./slider-BkIGaRIX.mjs";
import "../_libs/radix-ui__react-slider.mjs";
function LeadMarketplace() {
  const { leads, setLeads, currentRole, currentMemberId, globalZoneFilter } = useAppState();
  const navigate = useNavigate();
  const enriched = reactExports.useMemo(() => {
    return leads.filter((l) => l.status !== "dead" && l.status !== "tour-scheduled").filter((l) => !globalZoneFilter || zones.find((z) => z.id === globalZoneFilter)?.area === l.area).map((l) => {
      const median = zoneMedianBudget(leads, l.area);
      const intent = leadIntent(l);
      const bp = l.budgetPowerScore ?? budgetPowerScore(l.budget, median);
      const cp = l.conversionProbability ?? conversionProbability(bp, intent);
      const exp = l.urgencyExpiresAt ?? urgencyExpiry(intent, l.createdAt);
      return { lead: l, intent, budgetPower: bp, conversionProb: cp, expiresAt: exp };
    }).sort((a, b) => b.conversionProb - a.conversionProb);
  }, [leads, globalZoneFilter]);
  const claimLead = (leadId) => {
    if (currentRole !== "tcm" || !currentMemberId) {
      toast.error("Pick yourself in the header to claim leads");
      return;
    }
    setLeads((prev) => prev.map((l) => l.id === leadId ? { ...l, claimedBy: currentMemberId, status: "qualified" } : l));
    const member = teamMembers.find((m) => m.id === currentMemberId);
    toast.success(`Claimed — go schedule the tour now`, {
      description: `${member?.name} owns this lead`
    });
  };
  const scheduleFromLead = (l) => {
    navigate("/myt/schedule");
    toast.info(`Pre-fill: ${l.name} · ₹${l.budget} · ${l.area}`);
  };
  const summary = {
    hard: enriched.filter((e) => e.intent === "hard").length,
    medium: enriched.filter((e) => e.intent === "medium").length,
    soft: enriched.filter((e) => e.intent === "soft").length,
    avgProb: enriched.length ? Math.round(enriched.reduce((s, e) => s + e.conversionProb, 0) / enriched.length) : 0
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-slide-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-role-hr" }),
        "Lead Marketplace"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: currentRole === "tcm" ? "Live unassigned leads — claim before they expire" : "Watch demand flow through the funnel in real time" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Hard", value: summary.hard, accent: "green" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Medium", value: summary.medium, accent: "amber" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Soft", value: summary.soft }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Avg Conv %", value: `${summary.avgProb}%`, accent: "primary" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      enriched.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-8 text-center text-sm text-muted-foreground", children: "No live leads right now. New ones surface as Flow Ops adds them." }),
      enriched.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "rounded-xl border p-3 space-y-2 transition-all",
            e.intent === "hard" && "border-role-tcm/30 bg-role-tcm/5",
            e.intent === "medium" && "border-role-hr/20 bg-role-hr/5",
            e.intent === "soft" && "border-border bg-surface-2/40",
            e.lead.claimedBy && "opacity-60"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm", children: e.lead.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[9px] px-1.5 py-0.5 rounded border font-medium uppercase", intentBg[e.intent]), children: e.intent }),
                  e.lead.claimedBy && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground", children: "Claimed" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] text-muted-foreground mt-0.5 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${e.lead.phone}`, className: "flex items-center gap-1 hover:text-primary", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
                    e.lead.phone
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                    e.lead.area
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3 w-3" }),
                    "₹",
                    (e.lead.budget / 1e3).toFixed(0),
                    "k"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
                    "Move ",
                    e.lead.moveInDate.slice(5)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UrgencyTimer, { expiresAt: e.expiresAt })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreInline, { label: "Budget power", value: e.budgetPower, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3 w-3" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreInline, { label: "Conversion prob", value: e.conversionProb, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                LeadControlPanel,
                {
                  subject: { kind: "lead", lead: e.lead },
                  trigger: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-8 text-xs gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
                    " Open"
                  ] })
                }
              ),
              currentRole === "tcm" && !e.lead.claimedBy && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => claimLead(e.lead.id), className: "h-8 text-xs flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { className: "h-3 w-3 mr-1" }),
                " Claim"
              ] }),
              (currentRole === "flow-ops" || currentRole === "tcm" && e.lead.claimedBy === currentMemberId) && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => scheduleFromLead(e.lead), className: "h-8 text-xs flex-1", children: "Schedule tour →" })
            ] })
          ]
        },
        e.lead.id
      ))
    ] })
  ] });
}
function Stat({ label, value, accent }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wide text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
      "text-xl font-bold tabular-nums mt-0.5",
      accent === "green" && "text-role-tcm",
      accent === "amber" && "text-role-hr",
      accent === "primary" && "text-primary",
      !accent && "text-foreground"
    ), children: value })
  ] });
}
function ScoreInline({ label, value, icon }) {
  const color = value >= 70 ? "bg-role-tcm" : value >= 45 ? "bg-role-hr" : "bg-danger";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
        icon,
        label
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono tabular-nums text-foreground", children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 rounded-full bg-surface-3 mt-0.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-full", color), style: { width: `${value}%` } }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeadMarketplace, {}) });
export {
  SplitComponent as component
};
