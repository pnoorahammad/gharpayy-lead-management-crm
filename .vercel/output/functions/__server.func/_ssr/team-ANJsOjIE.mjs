import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-qrUFATK5.mjs";
import { aC as useAppState, aK as getMemberPerformance, aJ as zones, q as cn } from "./router-Brs45mHz.mjs";
import { D as DateRangeToggle } from "./DateRangeToggle-419mz4Fm.mjs";
import { S as StatusBadge, O as OutcomeBadge } from "./StatusBadge-TSI28v8v.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { X, a as ChevronUp, C as ChevronDown } from "../_libs/lucide-react.mjs";
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
function TeamPerformance() {
  const { tours } = useAppState();
  const [dateRange, setDateRange] = reactExports.useState("today");
  const [selectedMember, setSelectedMember] = reactExports.useState(null);
  const [sortKey, setSortKey] = reactExports.useState("showUpRate");
  const [sortAsc, setSortAsc] = reactExports.useState(false);
  const [filterZone, setFilterZone] = reactExports.useState("all");
  const memberPerf = getMemberPerformance(tours);
  const filtered = filterZone === "all" ? memberPerf : memberPerf.filter((m) => m.zoneName.includes(filterZone));
  const sorted = [...filtered].sort((a, b) => {
    const av = a[sortKey], bv = b[sortKey];
    if (typeof av === "number" && typeof bv === "number") return sortAsc ? av - bv : bv - av;
    return 0;
  });
  const memberTours = selectedMember ? tours.filter((t) => t.assignedTo === selectedMember || t.scheduledBy === selectedMember) : [];
  const handleSort = (key) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(false);
    }
  };
  const SortIcon = ({ field }) => {
    if (sortKey !== field) return null;
    return sortAsc ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-3 w-3 inline" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3 w-3 inline" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", children: "Team Performance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: filterZone,
            onChange: (e) => setFilterZone(e.target.value),
            className: "bg-surface-2 border border-border rounded-lg px-2 py-1.5 text-xs text-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Zones" }),
              zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: z.area, children: z.area }, z.id))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeToggle, { value: dateRange, onChange: setDateRange })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden space-y-2", children: sorted.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onClick: () => setSelectedMember(m.memberId === selectedMember ? null : m.memberId),
        className: "glass-card p-3 cursor-pointer active:scale-[0.99] transition-transform",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", children: m.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("ml-2 text-[10px] font-medium px-1.5 py-0.5 rounded-full", m.role === "flow-ops" ? "bg-flow-ops/15 text-role-flow" : "bg-tcm/15 text-role-tcm"), children: m.role === "flow-ops" ? "FO" : "TCM" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: m.zoneName.split(" — ")[1] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Tours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: m.toursScheduled })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Done" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: m.toursCompleted })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Show%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: cn("text-sm font-medium", m.showUpRate >= 70 ? "text-role-tcm" : m.showUpRate >= 50 ? "text-role-hr" : "text-danger"), children: [
                m.showUpRate,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Drafts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-role-hr", children: m.drafts })
            ] })
          ] })
        ]
      },
      m.memberId
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block glass-card overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground bg-surface-2/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4 font-medium", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", children: "Zone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center py-3 px-2 font-medium cursor-pointer", onClick: () => handleSort("leadsAdded"), children: [
          "Leads ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { field: "leadsAdded" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center py-3 px-2 font-medium cursor-pointer", onClick: () => handleSort("toursScheduled"), children: [
          "Tours ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { field: "toursScheduled" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center py-3 px-2 font-medium cursor-pointer", onClick: () => handleSort("toursCompleted"), children: [
          "Done ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { field: "toursCompleted" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center py-3 px-2 font-medium cursor-pointer", onClick: () => handleSort("showUpRate"), children: [
          "Show% ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { field: "showUpRate" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center py-3 px-2 font-medium cursor-pointer", onClick: () => handleSort("drafts"), children: [
          "Drafts ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { field: "drafts" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center py-3 px-2 font-medium cursor-pointer", onClick: () => handleSort("sameDayRate"), children: [
          "Same-Day% ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { field: "sameDayRate" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: sorted.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b border-border/50 hover:bg-accent/30 cursor-pointer transition-colors",
          onClick: () => setSelectedMember(m.memberId === selectedMember ? null : m.memberId),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 font-medium text-foreground", children: m.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-xs font-medium px-2 py-0.5 rounded-full", m.role === "flow-ops" ? "bg-flow-ops/15 text-role-flow" : "bg-tcm/15 text-role-tcm"), children: m.role === "flow-ops" ? "Flow Ops" : "TCM" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-muted-foreground text-xs", children: m.zoneName.split(" — ")[1] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-center text-muted-foreground", children: m.leadsAdded }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-center text-muted-foreground", children: m.toursScheduled }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-center text-muted-foreground", children: m.toursCompleted }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: cn("py-2.5 px-2 text-center font-medium", m.showUpRate >= 70 ? "text-role-tcm" : m.showUpRate >= 50 ? "text-role-hr" : "text-danger"), children: [
              m.showUpRate,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-center text-role-hr font-medium", children: m.drafts }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-2 text-center text-muted-foreground", children: [
              m.sameDayRate,
              "%"
            ] })
          ]
        },
        m.memberId
      )) })
    ] }) }) }),
    selectedMember && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5 animate-slide-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-heading font-semibold text-sm text-foreground", children: [
          sorted.find((m) => m.memberId === selectedMember)?.name,
          " — History"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedMember(null), className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:hidden", children: [
        memberTours.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-2/50 rounded-lg p-3 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: t.leadName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              t.tourDate,
              " ",
              t.tourTime
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.propertyName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: t.outcome })
          ] })
        ] }, t.id)),
        memberTours.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground text-sm py-4", children: "No tours found" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Property" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Outcome" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Remarks" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: memberTours.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", children: t.tourDate }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", children: t.tourTime }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-foreground", children: t.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", children: t.propertyName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: t.outcome }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground text-xs", children: t.remarks || "—" })
        ] }, t.id)) })
      ] }) })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TeamPerformance, {}) });
export {
  SplitComponent as component
};
