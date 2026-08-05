import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-Cp2f_YYK.mjs";
import { aC as useAppState, aI as teamMembers, aJ as zones, q as cn, aL as intentBg } from "./router-kYRMoTX_.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bJ as Video, a4 as Briefcase, B as Building2 } from "../_libs/lucide-react.mjs";
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
const HOURS = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
function getWeekDays() {
  const out = [];
  const today = /* @__PURE__ */ new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    out.push({
      iso: d.toISOString().split("T")[0],
      day: d.toLocaleDateString(void 0, { weekday: "short" }),
      date: d.getDate().toString().padStart(2, "0")
    });
  }
  return out;
}
const tourIcon = (t) => t === "virtual" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-2.5 w-2.5" }) : t === "pre-book-pitch" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-2.5 w-2.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-2.5 w-2.5" });
function TourCalendar() {
  const { tours, currentMemberId, globalZoneFilter } = useAppState();
  const [tcmFilter, setTcmFilter] = reactExports.useState(currentMemberId ?? "all");
  const [hoveredTour, setHoveredTour] = reactExports.useState(null);
  const tcms = teamMembers.filter((m) => m.role === "tcm");
  const days = reactExports.useMemo(getWeekDays, []);
  const filtered = reactExports.useMemo(() => tours.filter((t) => {
    if (tcmFilter !== "all" && t.assignedTo !== tcmFilter) return false;
    if (globalZoneFilter && t.zoneId !== globalZoneFilter) return false;
    if (t.status === "cancelled") return false;
    return true;
  }), [tours, tcmFilter, globalZoneFilter]);
  const slotMap = reactExports.useMemo(() => {
    const map = {};
    filtered.forEach((t) => {
      const hour = t.tourTime.split(":")[0] + ":00";
      const key = `${t.tourDate}_${hour}`;
      (map[key] = map[key] ?? []).push(t);
    });
    return map;
  }, [filtered]);
  const intentColor = (intent) => intent === "hard" ? "bg-role-tcm/30 border-role-tcm hover:bg-role-tcm/50" : intent === "medium" ? "bg-role-hr/30 border-role-hr hover:bg-role-hr/50" : "bg-muted/40 border-muted-foreground/30 hover:bg-muted/60";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-slide-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", children: "Tour Calendar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "7-day slot availability — color = intent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: tcmFilter,
          onChange: (e) => setTcmFilter(e.target.value),
          className: "h-9 bg-surface-2 border border-border rounded-md px-3 text-sm text-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All TCMs" }),
            tcms.map((m) => {
              const z = zones.find((z2) => z2.id === m.zoneId);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: m.id, children: [
                m.name,
                " · ",
                z?.area
              ] }, m.id);
            })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[10px] text-muted-foreground flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded bg-role-tcm/30 border border-role-tcm" }),
        " Hard"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded bg-role-hr/30 border border-role-hr" }),
        " Medium"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded bg-muted/40 border border-muted-foreground/30" }),
        " Soft"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded bg-surface-2 border border-border" }),
        " Open"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block glass-card p-3 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", style: { gridTemplateColumns: "60px repeat(7, minmax(120px, 1fr))" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      days.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center pb-2 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: d.day }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground", children: d.date })
      ] }, d.iso)),
      HOURS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contents", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground py-1.5 pr-2 text-right border-r border-border", children: h }),
        days.map((d) => {
          const items = slotMap[`${d.iso}_${h}`] ?? [];
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-r border-border/30 p-1 min-h-[40px] space-y-0.5", children: items.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onMouseEnter: () => setHoveredTour(t),
              onMouseLeave: () => setHoveredTour(null),
              className: cn(
                "text-[10px] px-1.5 py-1 rounded border cursor-pointer transition-colors flex items-center gap-1",
                intentColor(t.intent)
              ),
              children: [
                tourIcon(t.tourType),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-foreground font-medium", children: t.leadName.split(" ")[0] })
              ]
            },
            t.id
          )) }, d.iso + h);
        })
      ] }, h))
    ] }) }),
    hoveredTour && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("hidden md:block fixed bottom-4 right-4 z-50 glass-card p-3 max-w-xs border", intentBg[hoveredTour.intent]), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: hoveredTour.leadName }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
        hoveredTour.propertyName,
        " · ",
        hoveredTour.tourTime
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mt-1", children: [
        hoveredTour.confidenceScore,
        "% · ",
        hoveredTour.confidenceReason.join(" · ")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden space-y-3", children: days.map((d) => {
      const dayTours = filtered.filter((t) => t.tourDate === d.iso).sort((a, b) => a.tourTime.localeCompare(b.tourTime));
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-foreground", children: [
            d.day,
            " ",
            d.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
            "· ",
            dayTours.length,
            " tours"
          ] })
        ] }),
        dayTours.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No tours scheduled" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: dayTours.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-2 px-2 py-1.5 rounded border", intentColor(t.intent)), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-foreground tabular-nums w-12", children: t.tourTime }),
          tourIcon(t.tourType),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground truncate flex-1", children: t.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground tabular-nums", children: [
            t.confidenceScore,
            "%"
          ] })
        ] }, t.id)) })
      ] }, d.iso);
    }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TourCalendar, {}) });
export {
  SplitComponent as component
};
