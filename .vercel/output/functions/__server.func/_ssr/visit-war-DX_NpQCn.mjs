import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-Cp2f_YYK.mjs";
import { u as useApp, b as useVisitWar, c as useMountedNow, d as defaultLensFor, i as isClosedOut, r as reportSignature, e as buildVisitReport, f as archiveVisitEvent, g as upsertVisitEvent, v as visitBlock, s as selectByLens, p as probabilityFor, C as Card, B as Badge, W as WalkInDialog, R as RoleLensSwitcher, D as DayPlannerStrip, T as Tabs, h as TabsList, j as TabsTrigger, k as Button, l as TabsContent, m as TeamPulseGrid, n as WarMapPanel, o as DayReportPanel, q as cn, t as fmtElapsed, V as VisitCopyChips, O as OBJECTION_CATALOG, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, A as Textarea, E as CoachNoteThread, F as STAGE_META } from "./router-kYRMoTX_.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { R as Radio, h as Siren, f as Activity, m as CalendarClock, F as Flame, W as Wallet, T as TrendingUp, d as Users, n as Map, i as FileText, o as ChartColumn, p as Bell, B as Building2, g as TriangleAlert, q as ChevronRight, P as Phone, r as MessageCircle, X, s as Clock, G as Gauge, t as Plus } from "../_libs/lucide-react.mjs";
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
function stageTone(stage) {
  switch (stage) {
    case "scheduled":
      return {
        className: "bg-muted text-muted-foreground border-border",
        dot: "bg-muted-foreground"
      };
    case "started":
      return {
        className: "bg-info/10 text-info border-info/30",
        dot: "bg-info"
      };
    case "at-property":
      return {
        className: "bg-success/10 text-success border-success/30",
        dot: "bg-success"
      };
    case "tour-ongoing":
      return {
        className: "bg-warning/15 text-warning-foreground border-warning/40",
        dot: "bg-warning"
      };
    case "completed":
      return {
        className: "bg-info/10 text-info border-info/30",
        dot: "bg-info"
      };
    case "objection":
      return {
        className: "bg-warning/15 text-warning-foreground border-warning/40",
        dot: "bg-warning"
      };
    case "follow-up":
      return {
        className: "bg-accent/10 text-accent border-accent/30",
        dot: "bg-accent"
      };
    case "booked":
      return {
        className: "bg-success/15 text-success border-success/40",
        dot: "bg-success"
      };
    case "lost":
      return {
        className: "bg-destructive/10 text-destructive border-destructive/30",
        dot: "bg-destructive"
      };
  }
}
function probTone(p) {
  if (p >= 75) return "bg-success/15 text-success border-success/30";
  if (p >= 45) return "bg-warning/15 text-warning-foreground border-warning/40";
  return "bg-destructive/10 text-destructive border-destructive/30";
}
function timerTone(elapsedSec) {
  if (elapsedSec >= 75 * 60) return "text-destructive";
  if (elapsedSec >= 45 * 60) return "text-warning-foreground";
  if (elapsedSec >= 30 * 60) return "text-warning";
  return "text-success";
}
function VisitWarRoom({
  inline = false
} = {}) {
  const {
    leads,
    properties,
    tours,
    tcms,
    role,
    currentTcmId
  } = useApp();
  const {
    records,
    alerts,
    upsert,
    patch,
    pushAlert,
    markAlertsSeen,
    addObjection,
    alertsSeenAt,
    setReport
  } = useVisitWar();
  const [now, mounted] = useMountedNow(1e3);
  const [lens, setLens] = reactExports.useState(() => defaultLensFor(role));
  const [tab, setTab] = reactExports.useState("live");
  const [focusTour, setFocusTour] = reactExports.useState(null);
  const [sortMode, setSortMode] = reactExports.useState("prob");
  reactExports.useEffect(() => {
    setLens(defaultLensFor(role));
  }, [role]);
  reactExports.useEffect(() => {
    if (!mounted) return;
    tours.forEach((t) => {
      if (records[t.id]) return;
      const lead = leads.find((l) => l.id === t.leadId);
      const prop = properties.find((p) => p.id === t.propertyId);
      const tcm = tcms.find((m) => m.id === t.tcmId);
      const sched = +new Date(t.scheduledAt);
      let stage = "scheduled";
      if (t.status === "completed") stage = "completed";
      else if (t.status === "cancelled" || t.status === "no-show") stage = "lost";
      else if (sched < Date.now() - 10 * 6e4) stage = "tour-ongoing";
      upsert({
        tourId: t.id,
        leadId: t.leadId,
        leadName: lead?.name ?? "Lead",
        leadPhone: lead?.phone ?? "—",
        propertyId: t.propertyId,
        propertyName: prop?.name ?? "Property",
        propertyArea: prop?.area ?? "—",
        tcmId: t.tcmId,
        tcmName: tcm?.name ?? "Coordinator",
        scheduledAt: sched,
        stage,
        startedAt: stage !== "scheduled" ? sched : void 0,
        completedAt: stage === "completed" ? sched + 35 * 6e4 : void 0,
        objections: [],
        outcome: stage === "completed" ? "thinking" : null,
        lastUpdateAt: Date.now()
      });
    });
  }, [tours, leads, properties, tcms, records, upsert, mounted]);
  reactExports.useEffect(() => {
    if (!mounted) return;
    Object.values(records).forEach((v) => {
      if (v.stage === "scheduled" && now - v.scheduledAt > 15 * 6e4 && !v.warnedDelay) {
        patch(v.tourId, {
          warnedDelay: true
        });
        pushAlert({
          tourId: v.tourId,
          leadName: v.leadName,
          severity: "warn",
          kind: "delay",
          message: "Delayed · no start 15m past schedule"
        });
      }
      if ((v.stage === "started" || v.stage === "at-property") && v.startedAt && now - v.startedAt > 30 * 6e4 && !v.warnedAtRisk) {
        patch(v.tourId, {
          warnedAtRisk: true
        });
        pushAlert({
          tourId: v.tourId,
          leadName: v.leadName,
          severity: "warn",
          kind: "delay",
          message: "At risk · no update 30m after start"
        });
      }
      if ((v.stage === "started" || v.stage === "at-property" || v.stage === "tour-ongoing") && v.startedAt && now - v.startedAt > 60 * 6e4 && !v.warnedEscalate) {
        patch(v.tourId, {
          warnedEscalate: true,
          escalated: true
        });
        pushAlert({
          tourId: v.tourId,
          leadName: v.leadName,
          severity: "risk",
          kind: "escalate",
          message: "ESCALATE · 60m no update — manager notified"
        });
      }
      if (v.stage === "completed" && v.completedAt && now - v.completedAt > 6 * 36e5 && (!v.outcome || v.outcome === "thinking") && !v.warnedGhost) {
        patch(v.tourId, {
          warnedGhost: true
        });
        pushAlert({
          tourId: v.tourId,
          leadName: v.leadName,
          severity: "risk",
          kind: "ghost",
          message: "Ghost · post-visit silence 6h+"
        });
      }
    });
  }, [now, records, patch, pushAlert, mounted]);
  reactExports.useEffect(() => {
    if (!mounted) return;
    Object.values(records).forEach((v) => {
      if (!isClosedOut(v)) return;
      const sig = reportSignature(v);
      const stale = !v.report || v.report.generatedAt < v.lastUpdateAt;
      if (!stale) return;
      const text = `${buildVisitReport(v)}

[sig:${sig}]`;
      setReport(v.tourId, text);
    });
  }, [records, mounted, setReport]);
  reactExports.useEffect(() => {
    if (!mounted) return;
    Object.values(records).forEach((v) => {
      if (v.stage === "lost") {
        archiveVisitEvent(v.tourId);
        return;
      }
      upsertVisitEvent({
        tourId: v.tourId,
        leadId: v.leadId,
        leadName: v.leadName,
        leadPhone: v.leadPhone,
        propertyName: v.propertyName,
        propertyArea: v.propertyArea,
        scheduledAt: v.scheduledAt,
        description: visitBlock({
          leadName: v.leadName,
          leadPhone: v.leadPhone,
          propertyName: v.propertyName,
          propertyArea: v.propertyArea,
          scheduledAt: v.scheduledAt
        }),
        durationMin: 60
      });
    });
  }, [records, mounted]);
  const lensRecords = reactExports.useMemo(() => {
    const filtered = selectByLens(records, lens, {
      tcmId: currentTcmId ?? void 0,
      ownerCode: void 0
      // TODO: derive from owner-context when in owner shell
    });
    return filtered;
  }, [records, lens, currentTcmId]);
  const list = reactExports.useMemo(() => lensRecords, [lensRecords]);
  const sorted = reactExports.useMemo(() => {
    const arr = [...list];
    arr.sort((a, b) => {
      if (sortMode === "prob") {
        return probabilityFor(b.reaction, b.objections.length, b.stage) - probabilityFor(a.reaction, a.objections.length, a.stage);
      }
      if (sortMode === "dur") {
        const da = a.startedAt ? now - a.startedAt : 0;
        const db = b.startedAt ? now - b.startedAt : 0;
        return db - da;
      }
      if (sortMode === "obj") return b.objections.length - a.objections.length;
      return b.lastUpdateAt - a.lastUpdateAt;
    });
    return arr;
  }, [list, sortMode, now]);
  const liveList = list.filter((v) => ["started", "at-property", "tour-ongoing"].includes(v.stage));
  const upcoming = list.filter((v) => v.stage === "scheduled" && v.scheduledAt > now - 5 * 6e4 && v.scheduledAt < now + 24 * 36e5).sort((a, b) => a.scheduledAt - b.scheduledAt);
  const hot = list.filter((v) => v.stage === "completed" && v.completedAt && now - v.completedAt < 24 * 36e5 && v.outcome !== "booked");
  const unreadAlerts = alerts.filter((a) => a.ts > alertsSeenAt).length;
  const intervention = list.filter((v) => {
    const prob = probabilityFor(v.reaction, v.objections.length, v.stage);
    const sevObj = v.objections.some((o) => o.resolution === "unresolved");
    return v.escalated || prob >= 80 || v.startedAt && now - v.startedAt > 30 * 6e4 && !v.completedAt || sevObj;
  });
  const revenueWalking = reactExports.useMemo(() => {
    const pool = [...liveList, ...hot];
    return pool.reduce((sum, v) => {
      const prop = properties.find((p2) => p2.id === v.propertyId);
      const price = prop?.pricePerBed ?? 12e3;
      const p = probabilityFor(v.reaction, v.objections.length, v.stage) / 100;
      return sum + price * p;
    }, 0);
  }, [liveList, hot, properties]);
  const todayMs = (() => {
    const d = /* @__PURE__ */ new Date();
    d.setHours(0, 0, 0, 0);
    return +d;
  })();
  const todays = list.filter((v) => v.scheduledAt >= todayMs);
  const expectedBookings = Math.round(list.filter((v) => v.completedAt && now - v.completedAt < 24 * 36e5).reduce((s, v) => s + probabilityFor(v.reaction, v.objections.length, v.stage) / 100, 0));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    !inline && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 md:p-5 border-l-4 border-l-accent bg-gradient-to-br from-card to-card/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-accent font-semibold", children: "Gharpayy · Visit OS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg md:text-xl font-bold leading-tight", children: "Visit Command Center" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "ml-1 gap-1.5 border-success/40 bg-success/10 text-success", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success animate-pulse" }),
          liveList.length,
          " LIVE"
        ] }),
        intervention.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "gap-1.5 border-destructive/40 bg-destructive/10 text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Siren, { className: "h-3 w-3" }),
          " ",
          intervention.length,
          " need intervention"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(WalkInDialog, { onCreated: (id) => {
            setFocusTour(id);
            setTab("live");
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RoleLensSwitcher, { value: lens, onChange: setLens }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm tabular-nums font-mono text-muted-foreground", children: mounted ? new Date(now).toLocaleTimeString("en-IN", {
            hour12: false
          }) : "--:--:--" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 md:grid-cols-5 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Activity, label: "Visits today", value: todays.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: CalendarClock, label: "Next 24h", value: upcoming.length, tone: "info" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Flame, label: "Hot (<24h)", value: hot.length, tone: "warning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Wallet, label: "Revenue walking", value: `₹${(revenueWalking / 1e3).toFixed(0)}k`, tone: "success" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: TrendingUp, label: "Expected bookings", value: expectedBookings, tone: "accent" })
      ] })
    ] }),
    inline && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WalkInDialog, { onCreated: (id) => {
      setFocusTour(id);
      setTab("live");
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DayPlannerStrip, { visits: Object.values(records), now, onFocus: setFocusTour, focusTourId: focusTour }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: tab, onValueChange: (v) => setTab(v), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "live", className: "gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5" }),
            " Live (",
            liveList.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "upcoming", className: "gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-3.5 w-3.5" }),
            " Upcoming (",
            upcoming.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "hot", className: "gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3.5 w-3.5" }),
            " Hot (",
            hot.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "team", className: "gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }),
            " Team Pulse"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "map", className: "gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Map, { className: "h-3.5 w-3.5" }),
            " War Map"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "reports", className: "gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }),
            " Reports"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "stats", className: "gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-3.5 w-3.5" }),
            " Stats"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "alerts", onClick: () => markAlertsSeen(), className: "gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-3.5 w-3.5" }),
            " Alerts",
            unreadAlerts > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", className: "ml-1 px-1.5 py-0 text-[10px] h-4", children: unreadAlerts })
          ] })
        ] }),
        tab === "live" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase text-muted-foreground tracking-wider mr-1", children: "Sort" }),
          ["prob", "dur", "obj", "update"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: sortMode === m ? "default" : "outline", className: "h-7 px-2.5 text-[11px] uppercase font-mono", onClick: () => setSortMode(m), children: m === "prob" ? "Probability" : m === "dur" ? "Duration" : m === "obj" ? "Objections" : "Updated" }, m))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-4 mt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "live", className: "m-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LiveBoard, { list: sorted.filter((v) => !["booked", "lost"].includes(v.stage)), now, mounted, onFocus: setFocusTour, focus: focusTour }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "upcoming", className: "m-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UpcomingPanel, { list: upcoming, now, mounted, onFocus: setFocusTour }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "hot", className: "m-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HotRoom, { list: hot, now, mounted, onFocus: setFocusTour }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "team", className: "m-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TeamPulseGrid, { now }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "map", className: "m-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WarMapPanel, { now }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "reports", className: "m-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DayReportPanel, { visits: Object.values(records), dayStart: todayMs }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "stats", className: "m-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WarRoomStats, { list }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "alerts", className: "m-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertFeed, {}) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-0 overflow-hidden min-h-[420px]", children: focusTour && records[focusTour] ? /* @__PURE__ */ jsxRuntimeExports.jsx(VisitDetailPanel, { v: records[focusTour], now, onClose: () => setFocusTour(null), onPatch: (p) => patch(focusTour, p), onAddObjection: (o) => addObjection(focusTour, o), onAlert: (severity, kind, message) => pushAlert({
          tourId: focusTour,
          leadName: records[focusTour].leadName,
          severity,
          kind,
          message
        }) }, focusTour) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 text-center text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-10 w-10 mx-auto mb-3 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground mb-1", children: "Select a visit" }),
          "Open any row on the left to capture reactions, objections, and outcomes in real time."
        ] }) })
      ] })
    ] })
  ] });
}
function Metric({
  icon: Icon,
  label,
  value,
  tone
}) {
  const toneCls = tone === "info" ? "text-info bg-info/10" : tone === "warning" ? "text-warning-foreground bg-warning/15" : tone === "success" ? "text-success bg-success/10" : tone === "accent" ? "text-accent bg-accent/10" : "text-foreground bg-muted";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card/60 p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-7 w-7 rounded-md flex items-center justify-center", toneCls), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 text-2xl font-bold tabular-nums", children: value })
  ] });
}
function StagePill({
  stage
}) {
  const m = STAGE_META[stage];
  const tone = stageTone(stage);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border", tone.className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-1.5 w-1.5 rounded-full", tone.dot) }),
    m.label
  ] });
}
function LiveTimer({
  since,
  kind = "visit"
}) {
  const [tick, setTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 1e3);
    return () => clearInterval(id);
  }, []);
  const elapsed = Date.now() - since;
  const sec = Math.floor(elapsed / 1e3);
  const tone = kind === "post" ? elapsed < 4 * 36e5 ? "text-success" : elapsed < 12 * 36e5 ? "text-warning-foreground" : "text-destructive" : timerTone(sec);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-mono text-xs tabular-nums font-semibold", tone), children: fmtElapsed(elapsed) });
}
function Countdown({
  to
}) {
  const [tick, setTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 1e3);
    return () => clearInterval(id);
  }, []);
  const ms = to - Date.now();
  if (ms <= 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-destructive font-semibold", children: "NOW" });
  const tone = ms < 15 * 6e4 ? "text-destructive" : ms < 60 * 6e4 ? "text-warning-foreground" : "text-info";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("font-mono text-xs tabular-nums font-semibold", tone), children: [
    "in ",
    fmtElapsed(ms)
  ] });
}
function UpcomingPanel({
  list,
  mounted,
  onFocus
}) {
  if (list.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm py-16 text-center text-muted-foreground", children: "No visits scheduled in the next 24 hours." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: list.map((v) => {
    const ms = v.scheduledAt - Date.now();
    const risk = ms < 30 * 6e4 ? "high" : ms < 2 * 36e5 ? "med" : "low";
    const riskCls = risk === "high" ? "border-l-destructive" : risk === "med" ? "border-l-warning" : "border-l-info";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: cn("p-3 border-l-4 hover:bg-muted/40 transition-colors cursor-pointer", riskCls), onClick: () => onFocus(v.tourId), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate", children: v.leadName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
          v.propertyName,
          " · ",
          v.propertyArea,
          " · ",
          v.tcmName
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono tabular-nums text-muted-foreground", children: mounted ? new Date(v.scheduledAt).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit"
        }) : "--:--" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown, { to: v.scheduledAt })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("uppercase", risk === "high" ? "border-destructive/40 bg-destructive/10 text-destructive" : risk === "med" ? "border-warning/40 bg-warning/15 text-warning-foreground" : "border-info/40 bg-info/10 text-info"), children: risk === "high" ? "Imminent" : risk === "med" ? "Soon" : "Scheduled" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground" })
    ] }) }, v.tourId);
  }) });
}
function LiveBoard({
  list,
  now,
  mounted,
  onFocus,
  focus
}) {
  if (list.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm py-16 text-center text-muted-foreground", children: "No active visits. Schedule one from the Impact Queue to begin." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: list.map((v) => {
    const prob = probabilityFor(v.reaction, v.objections.length, v.stage);
    const latestObj = v.objections[0];
    const isFocus = focus === v.tourId;
    const leftTint = v.escalated ? "border-l-destructive" : v.warnedAtRisk ? "border-l-warning" : v.stage === "tour-ongoing" ? "border-l-warning" : v.stage === "at-property" ? "border-l-success" : v.stage === "started" ? "border-l-info" : "border-l-muted";
    const sec = v.startedAt ? Math.floor((now - v.startedAt) / 1e3) : 0;
    const postSec = v.completedAt ? Math.floor((now - v.completedAt) / 1e3) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: () => onFocus(v.tourId), className: cn("p-3 border-l-4 cursor-pointer transition-all hover:bg-muted/40", leftTint, isFocus && "ring-2 ring-accent/40 bg-muted/40"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-2 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-3 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate", children: v.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground font-mono", children: [
            "••",
            v.leadPhone.slice(-4),
            " · ",
            v.tcmName
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 md:col-span-3 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs truncate font-medium", children: v.propertyName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: v.propertyArea })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 md:col-span-1 text-[11px] font-mono text-muted-foreground tabular-nums", children: mounted ? new Date(v.scheduledAt).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }) : "--:--" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 md:col-span-2 flex flex-col gap-1 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StagePill, { stage: v.stage }),
          v.escalated && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", className: "text-[9px] h-4 px-1 animate-pulse", children: "ESCALATE" }),
          !v.escalated && v.warnedAtRisk && v.stage !== "completed" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] h-4 px-1 border-warning/40 bg-warning/15 text-warning-foreground", children: "At Risk" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 md:col-span-1", children: [
          v.startedAt && !v.completedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-muted-foreground tracking-wider", children: "Visit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-mono text-xs tabular-nums font-semibold", timerTone(sec)), children: fmtElapsed(now - v.startedAt) })
          ] }),
          v.completedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-muted-foreground tracking-wider", children: "Post" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-mono text-xs tabular-nums font-semibold", postSec < 4 * 3600 ? "text-success" : postSec < 12 * 3600 ? "text-warning-foreground" : "text-destructive"), children: fmtElapsed(now - v.completedAt) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-6 md:col-span-1 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: cn("font-mono font-bold tabular-nums", probTone(prob)), children: [
          prob,
          "%"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-1 flex md:justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NextActionButton, { v, onClick: () => onFocus(v.tourId) }) })
      ] }),
      latestObj && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 pt-2 border-t border-border/60 flex items-center gap-2 text-[11px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3 text-warning-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-warning-foreground font-semibold uppercase", children: [
          latestObj.category,
          " · ",
          latestObj.subType
        ] }),
        latestObj.customerSaid && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground italic truncate", children: [
          '"',
          latestObj.customerSaid,
          '"'
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 pt-2 border-t border-border/60", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisitCopyChips, { v, layout: "inline" }) })
    ] }, v.tourId);
  }) });
}
function NextActionButton({
  v,
  onClick
}) {
  let label = "Open";
  if (v.stage === "scheduled") label = "Mark Started";
  else if (v.stage === "started" || v.stage === "at-property") label = "Capture";
  else if (v.stage === "tour-ongoing") label = "Complete";
  else if (v.stage === "completed") label = !v.outcome || v.outcome === "thinking" ? "Set Outcome" : "Log Objection";
  else if (v.stage === "objection") label = "Log Objection";
  else if (v.stage === "follow-up") label = "Close";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 text-[11px] gap-1", onClick: (e) => {
    e.stopPropagation();
    onClick();
  }, children: [
    label,
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
  ] });
}
function HotRoom({
  list,
  now,
  onFocus
}) {
  if (list.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm py-16 text-center text-muted-foreground", children: "No hot leads in the 24-hour window." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: list.sort((a, b) => (a.completedAt ?? 0) - (b.completedAt ?? 0)).map((v) => {
    const remaining = 24 * 36e5 - (now - (v.completedAt ?? now));
    const hrsLeft = Math.max(0, Math.floor(remaining / 36e5));
    const prob = probabilityFor(v.reaction, v.objections.length, v.stage);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { onClick: () => onFocus(v.tourId), className: "p-3 border-l-4 border-l-accent cursor-pointer hover:bg-muted/40 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate", children: v.leadName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
          v.propertyName,
          " · ",
          v.propertyArea
        ] }),
        v.objections[0] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] mt-0.5 text-warning-foreground", children: [
          "Latest: ",
          v.objections[0].subType,
          ' — "',
          v.objections[0].customerSaid.slice(0, 60),
          '"'
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-muted-foreground tracking-wider", children: "Window" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("font-mono text-sm font-bold", hrsLeft < 6 ? "text-destructive" : "text-warning-foreground"), children: [
          hrsLeft,
          "h left"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: cn("font-mono font-bold", probTone(prob)), children: [
        prob,
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "icon", variant: "default", className: "h-8 w-8", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${v.leadPhone}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "icon", variant: "outline", className: "h-8 w-8 border-success/40 text-success hover:bg-success/10", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://wa.me/${v.leadPhone.replace(/\D/g, "")}`, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }) }) })
      ] })
    ] }) }, v.tourId);
  }) });
}
function WarRoomStats({
  list
}) {
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const todayMs = +today;
  const todays = list.filter((v) => v.scheduledAt >= todayMs);
  const scheduled = todays.length;
  const started = todays.filter((v) => v.startedAt).length;
  const completed = todays.filter((v) => v.completedAt).length;
  const booked = todays.filter((v) => v.outcome === "booked").length;
  const lost = todays.filter((v) => v.outcome === "lost").length;
  const conv = completed > 0 ? Math.round(booked / completed * 100) : 0;
  const durations = todays.filter((v) => v.startedAt && v.completedAt).map((v) => (v.completedAt - v.startedAt) / 6e4);
  const avgDur = durations.length ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length) : 0;
  const objCount = {};
  list.forEach((v) => v.objections.forEach((o) => {
    objCount[o.subType] = (objCount[o.subType] ?? 0) + 1;
  }));
  const topObj = Object.entries(objCount).sort((a, b) => b[1] - a[1])[0];
  const propCount = {};
  todays.forEach((v) => {
    propCount[v.propertyName] = (propCount[v.propertyName] ?? 0) + 1;
  });
  const topProp = Object.entries(propCount).sort((a, b) => b[1] - a[1])[0];
  const closerCount = {};
  todays.filter((v) => v.outcome === "booked").forEach((v) => {
    closerCount[v.tcmName] = (closerCount[v.tcmName] ?? 0) + 1;
  });
  const topCloser = Object.entries(closerCount).sort((a, b) => b[1] - a[1])[0];
  const zoneCount = {};
  todays.forEach((v) => {
    zoneCount[v.propertyArea] = (zoneCount[v.propertyArea] ?? 0) + 1;
  });
  const maxZone = Math.max(1, ...Object.values(zoneCount));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Scheduled", value: scheduled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Started", value: started, tone: "info" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Completed", value: completed, tone: "info" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Booked", value: booked, tone: "success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Conversion", value: `${conv}%`, tone: "accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Lost", value: lost, tone: "destructive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Avg duration", value: `${avgDur}m`, tone: "warning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Top objection", value: topObj ? `${topObj[0]}` : "—", sub: topObj ? `${topObj[1]} times` : "", tone: "warning" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider mb-3 text-muted-foreground font-semibold", children: "Visits by zone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          Object.entries(zoneCount).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "No data yet." }),
          Object.entries(zoneCount).map(([z, c]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 text-xs truncate", children: z }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-accent", style: {
              width: `${c / maxZone * 100}%`
            } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 text-right font-mono text-xs text-muted-foreground tabular-nums", children: c })
          ] }, z))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider mb-3 text-muted-foreground font-semibold", children: "Spotlight" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SpotRow, { icon: Building2, label: "Top property", value: topProp ? `${topProp[0]} (${topProp[1]} visits)` : "—", tone: "info" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SpotRow, { icon: TrendingUp, label: "Top closer", value: topCloser ? `${topCloser[0]} (${topCloser[1]} books)` : "—", tone: "success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SpotRow, { icon: TriangleAlert, label: "Top objection", value: topObj ? `${topObj[0]} (${topObj[1]})` : "—", tone: "warning" })
        ] })
      ] })
    ] })
  ] });
}
function StatCard({
  label,
  value,
  sub,
  tone
}) {
  const valCls = tone === "info" ? "text-info" : tone === "warning" ? "text-warning-foreground" : tone === "success" ? "text-success" : tone === "destructive" ? "text-destructive" : tone === "accent" ? "text-accent" : "text-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-2xl font-bold tabular-nums mt-1 truncate", valCls), children: value }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: sub })
  ] });
}
function SpotRow({
  icon: Icon,
  label,
  value,
  tone
}) {
  const cls = tone === "info" ? "text-info bg-info/10" : tone === "warning" ? "text-warning-foreground bg-warning/15" : "text-success bg-success/10";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-9 w-9 rounded-lg flex items-center justify-center", cls), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold truncate", children: value })
    ] })
  ] });
}
function AlertFeed() {
  const {
    alerts
  } = useVisitWar();
  if (alerts.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm py-16 text-center text-muted-foreground", children: "No alerts. The system pings when something needs attention." });
  }
  const tone = (s) => s === "risk" ? "border-l-destructive bg-destructive/5" : s === "warn" ? "border-l-warning bg-warning/5" : s === "win" ? "border-l-success bg-success/5" : "border-l-info bg-info/5";
  const tagTone = (s) => s === "risk" ? "text-destructive" : s === "warn" ? "text-warning-foreground" : s === "win" ? "text-success" : "text-info";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: alerts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn("p-2.5 border-l-4 flex items-center gap-3", tone(a.severity)), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] w-20 text-muted-foreground tabular-nums", children: new Date(a.ts).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[10px] font-bold uppercase tracking-wider", tagTone(a.severity)), children: a.kind }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-foreground", children: a.leadName }),
      " — ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: a.message })
    ] })
  ] }, a.id)) });
}
function VisitDetailPanel({
  v,
  onClose,
  onPatch,
  onAddObjection,
  onAlert
}) {
  const prob = probabilityFor(v.reaction, v.objections.length, v.stage);
  const [cat, setCat] = reactExports.useState("budget");
  const [sub, setSub] = reactExports.useState(OBJECTION_CATALOG.budget[0]);
  const [said, setSaid] = reactExports.useState("");
  const [resp, setResp] = reactExports.useState("");
  const [res, setRes] = reactExports.useState("partial");
  const replay = [];
  replay.push({
    ts: v.scheduledAt,
    label: "Visit scheduled",
    tone: "info"
  });
  if (v.startedAt) replay.push({
    ts: v.startedAt,
    label: `Started — ${v.startedMode ?? "on the way"}`,
    tone: "info"
  });
  if (v.reachedAt) replay.push({
    ts: v.reachedAt,
    label: "Reached property",
    tone: "success"
  });
  if (v.ongoingAt) replay.push({
    ts: v.ongoingAt,
    label: "Tour started",
    tone: "info"
  });
  if (v.completedAt) replay.push({
    ts: v.completedAt,
    label: "Tour completed",
    tone: "success"
  });
  v.objections.forEach((o) => replay.push({
    ts: o.ts,
    label: `Objection · ${o.subType}`,
    tone: o.resolution === "resolved" ? "success" : o.resolution === "unresolved" ? "risk" : "warn"
  }));
  if (v.outcome === "booked") replay.push({
    ts: v.lastUpdateAt,
    label: "Booking confirmed 🎉",
    tone: "success"
  });
  if (v.outcome === "lost") replay.push({
    ts: v.lastUpdateAt,
    label: `Lost · ${v.lostReason ?? "—"}`,
    tone: "risk"
  });
  replay.sort((a, b) => a.ts - b.ts);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col max-h-[calc(100vh-200px)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b bg-muted/30 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold truncate", children: v.leadName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground font-mono", children: [
          "••",
          v.leadPhone.slice(-4),
          " · ",
          v.propertyName
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-7 w-7", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap p-2 rounded-lg bg-muted/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StagePill, { stage: v.stage }),
        v.startedAt && !v.completedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
          " Visit ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(LiveTimer, { since: v.startedAt, kind: "visit" })
        ] }),
        v.startedAt && v.reachedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
          "Journey ",
          Math.round((v.reachedAt - v.startedAt) / 6e4),
          "m"
        ] }),
        v.completedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
          " Post ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(LiveTimer, { since: v.completedAt, kind: "post" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: cn("ml-auto font-mono font-bold", probTone(prob)), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "h-3 w-3 mr-1" }),
          " ",
          prob,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "1 · Scheduled", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(KV, { k: "Time", v: new Date(v.scheduledAt).toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short"
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KV, { k: "Property", v: `${v.propertyName} · ${v.propertyArea}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KV, { k: "Coordinator", v: v.tcmName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "2 · Visit Started", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "On The Way", tone: "info", active: v.startedMode === "on-the-way", onClick: () => {
          onPatch({
            stage: "started",
            startedMode: "on-the-way",
            startedAt: v.startedAt ?? Date.now()
          });
          onAlert("info", "started", "Customer on the way");
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "Reached", tone: "success", active: v.startedMode === "reached", onClick: () => {
          onPatch({
            stage: "at-property",
            startedMode: "reached",
            startedAt: v.startedAt ?? Date.now(),
            reachedAt: Date.now()
          });
          onAlert("win", "reached", "Reached property");
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "Delayed", tone: "warning", active: v.startedMode === "delayed", onClick: () => {
          onPatch({
            startedMode: "delayed"
          });
          onAlert("warn", "delay", "Customer delayed");
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "No Show", tone: "destructive", active: v.startedMode === "no-show", onClick: () => {
          onPatch({
            stage: "lost",
            startedMode: "no-show",
            outcome: "lost"
          });
          onAlert("risk", "lost", "No-show");
        } })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "3 · Tour Ongoing · Reaction", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonRow, { children: ["loved", "interested", "comparing", "average", "rejected"].map((r) => {
        const emoji = {
          loved: "😍",
          interested: "🙂",
          comparing: "🤔",
          average: "😐",
          rejected: "❌"
        }[r];
        const active = v.reaction === r;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: active ? "default" : "outline", className: "h-8 gap-1 capitalize", onClick: () => onPatch({
          reaction: r,
          stage: v.stage === "completed" ? "completed" : "tour-ongoing",
          ongoingAt: v.ongoingAt ?? Date.now()
        }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: emoji }),
          r
        ] }, r);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "4 · Visit Done · Decision", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonRow, { children: [["ready-to-book", "Ready To Book", "success"], ["needs-discussion", "Needs Discussion", void 0], ["comparing-options", "Comparing", void 0], ["parent-approval", "Parent Approval", void 0], ["budget-pending", "Budget Pending", void 0], ["not-interested", "Not Interested", "destructive"]].map(([d, label, tone]) => /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label, tone, active: v.decision === d, onClick: () => {
        onPatch({
          decision: d,
          stage: d === "not-interested" ? "lost" : "completed",
          completedAt: v.completedAt ?? Date.now(),
          outcome: d === "ready-to-book" ? "thinking" : d === "not-interested" ? "lost" : "thinking"
        });
        onAlert(d === "not-interested" ? "risk" : "info", "completed", `Visit done · ${label}`);
      } }, d)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "5 · Objection Tracker", children: [
        v.objections.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 mb-3", children: v.objections.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-lg bg-muted/50 text-[11px] border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] uppercase border-warning/40 bg-warning/15 text-warning-foreground", children: o.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: o.subType }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("ml-auto text-[9px] uppercase", o.resolution === "resolved" ? "border-success/40 bg-success/10 text-success" : o.resolution === "partial" ? "border-warning/40 bg-warning/15 text-warning-foreground" : "border-destructive/40 bg-destructive/10 text-destructive"), children: o.resolution })
          ] }),
          o.customerSaid && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-foreground", children: [
            '"',
            o.customerSaid,
            '"'
          ] }),
          o.salesResponse && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 italic text-muted-foreground", children: [
            "→ ",
            o.salesResponse
          ] })
        ] }, o.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: cat, onValueChange: (c) => {
            setCat(c);
            setSub(OBJECTION_CATALOG[c][0]);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.keys(OBJECTION_CATALOG).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, className: "capitalize", children: c }, c)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sub, onValueChange: setSub, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: OBJECTION_CATALOG[cat].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: said, onChange: (e) => setSaid(e.target.value), rows: 2, placeholder: 'Customer exact words — "my office is 8 km away..."', className: "text-xs mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: resp, onChange: (e) => setResp(e.target.value), rows: 2, placeholder: "Sales response — what did you say back?", className: "text-xs mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
          ["resolved", "partial", "unresolved"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: res === r ? "default" : "outline", className: cn("h-7 text-[11px] capitalize", res === r && r === "resolved" && "bg-success hover:bg-success/90", res === r && r === "unresolved" && "bg-destructive hover:bg-destructive/90"), onClick: () => setRes(r), children: r }, r)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "ml-auto h-7 text-[11px] gap-1", onClick: () => {
            if (!sub) return;
            onAddObjection({
              category: cat,
              subType: sub,
              customerSaid: said,
              salesResponse: resp,
              resolution: res
            });
            setSaid("");
            setResp("");
            setRes("partial");
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }),
            " Log"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "6 · Follow-up Stage", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: [["fu-1", "Follow-up 1"], ["fu-2", "Follow-up 2"], ["fu-3", "Follow-up 3"], ["negotiation", "Negotiation"], ["waiting-salary", "Wait · Salary"], ["waiting-joining", "Wait · Joining"], ["waiting-parents", "Wait · Parents"], ["booking-expected", "Booking Expected"]].map(([k, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: v.followUpStage === k ? "default" : "outline", className: "h-7 text-[11px] justify-start", onClick: () => onPatch({
        followUpStage: k,
        stage: "follow-up"
      }), children: label }, k)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "7 · Final Outcome", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "✅ Booked", tone: "success", active: v.outcome === "booked", onClick: () => {
          onPatch({
            stage: "booked",
            outcome: "booked"
          });
          onAlert("win", "booked", "Booking closed");
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "🟡 Thinking", active: v.outcome === "thinking", onClick: () => onPatch({
          outcome: "thinking"
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "🔵 Follow-up", tone: "info", active: v.outcome === "follow-up", onClick: () => onPatch({
          outcome: "follow-up",
          stage: "follow-up"
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "🔴 Lost", tone: "destructive", active: v.outcome === "lost", onClick: () => {
          onPatch({
            stage: "lost",
            outcome: "lost"
          });
          onAlert("risk", "lost", "Visit lost");
        } })
      ] }) }),
      v.outcome === "lost" && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Why Lost?", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: [["chose-another-pg", "Chose Another PG"], ["chose-flat", "Chose Flat"], ["cancelled-relocation", "Cancelled Move"], ["budget", "Budget"], ["location", "Location"], ["amenities", "Amenities"], ["family-rejected", "Family Rejected"], ["no-response", "No Response"], ["joined-different-company", "Different Co."], ["college-plan-changed", "College Changed"]].map(([k, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: v.lostReason === k ? "destructive" : "outline", className: "h-7 text-[11px] justify-start", onClick: () => onPatch({
        lostReason: k
      }), children: label }, k)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "📼 Visit Replay", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 border-l-2 border-border ml-1 pl-3", children: [
        replay.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "No events yet." }),
        replay.map((e, i) => {
          const dot = e.tone === "risk" ? "bg-destructive" : e.tone === "warn" ? "bg-warning" : e.tone === "success" ? "bg-success" : "bg-info";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("absolute -left-[17px] top-1.5 h-2 w-2 rounded-full", dot) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground tabular-nums", children: new Date(e.ts).toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: e.label })
            ] })
          ] }, i);
        })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "📲 WhatsApp Copy Block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisitCopyChips, { v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "🎯 Coach & Intervention", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CoachNoteThread, { v }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t p-3 flex gap-2 bg-muted/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "flex-1 gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${v.leadPhone}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
        " Call"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "flex-1 gap-1.5 border-success/40 text-success hover:bg-success/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${v.leadPhone.replace(/\D/g, "")}`, target: "_blank", rel: "noreferrer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
        " WhatsApp"
      ] }) })
    ] })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.15em] mb-2 text-accent font-bold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children })
  ] });
}
function KV({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] py-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: v })
  ] });
}
function ButtonRow({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children });
}
function ActBtn({
  label,
  onClick,
  tone,
  active
}) {
  const activeCls = tone === "success" ? "bg-success text-success-foreground hover:bg-success/90" : tone === "destructive" ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : tone === "warning" ? "bg-warning text-warning-foreground hover:bg-warning/90" : tone === "info" ? "bg-info text-info-foreground hover:bg-info/90" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: active ? "default" : "outline", className: cn("h-8 text-xs", active && activeCls), onClick, children: label });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisitWarRoom, {}) });
export {
  VisitWarRoom,
  SplitComponent as component
};
