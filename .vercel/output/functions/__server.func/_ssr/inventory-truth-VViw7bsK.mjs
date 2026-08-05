import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-qrUFATK5.mjs";
import { d as dailyTruthPhase, g as getRegistry, s as subscribeRegistry, c as closeDeal } from "./owner-registry-DRKLY8k0.mjs";
import { X as Input, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, B as Badge, k as Button, q as cn, a3 as glueBus } from "./router-Brs45mHz.mjs";
import { t as toast } from "./use-toast-CW1pxMtS.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { g as TriangleAlert, O as MapPin, a8 as Lock, l as ShieldCheck, k as CircleCheck, H as Play, ar as CalendarPlus, j as Copy } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
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
import "../_libs/isbot.mjs";
function useRegistry() {
  const [data, setData] = reactExports.useState(() => getRegistry());
  reactExports.useEffect(() => subscribeRegistry(() => setData(getRegistry())), []);
  return data;
}
function SalesInventoryTruth() {
  const owners = useRegistry();
  const [area, setArea] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("sellable");
  const [q, setQ] = reactExports.useState("");
  const phase = dailyTruthPhase();
  const flat = reactExports.useMemo(() => {
    const rows = [];
    owners.forEach(
      (o) => o.properties.forEach(
        (p) => p.rooms.forEach(
          (r) => rows.push({ ...r, ownerId: o.id, ownerName: o.name })
        )
      )
    );
    return rows;
  }, [owners]);
  const areas = reactExports.useMemo(() => {
    const s = /* @__PURE__ */ new Set();
    flat.forEach((r) => s.add(r.area));
    return Array.from(s).sort();
  }, [flat]);
  const filtered = reactExports.useMemo(() => {
    const term = q.trim().toLowerCase();
    return flat.filter((r) => {
      if (area !== "all" && r.area !== area) return false;
      if (statusFilter === "sellable") {
        if (r.lockedUnsellable) return false;
        if (!(r.status === "vacant" || r.status === "vacating" || r.status === "held")) return false;
      } else if (statusFilter === "vacant") {
        if (r.status !== "vacant") return false;
      } else if (statusFilter === "vacating") {
        if (r.status !== "vacating") return false;
      } else if (statusFilter === "held") {
        if (r.status !== "held") return false;
      } else if (statusFilter === "booked") {
        if (r.status !== "booked") return false;
      } else if (statusFilter === "locked") {
        if (!r.lockedUnsellable) return false;
      }
      if (!term) return true;
      return r.id.toLowerCase().includes(term) || r.pgName.toLowerCase().includes(term) || r.area.toLowerCase().includes(term) || r.ownerName.toLowerCase().includes(term) || r.ownerId.toLowerCase().includes(term);
    });
  }, [flat, area, statusFilter, q]);
  const grouped = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((r) => {
      const list = map.get(r.area) || [];
      list.push(r);
      map.set(r.area, list);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);
  const totals = {
    sellable: flat.filter(
      (r) => !r.lockedUnsellable && (r.status === "vacant" || r.status === "vacating" || r.status === "held")
    ).length,
    held: flat.filter((r) => r.status === "held").length,
    booked: flat.filter((r) => r.status === "booked").length,
    locked: flat.filter((r) => r.lockedUnsellable).length,
    areas: areas.length,
    rooms: flat.length
  };
  const pitch = (r) => {
    glueBus.publish({
      type: "team.lead.pitched",
      leadId: `manual-${Date.now()}`,
      roomId: r.id,
      tcmId: "sales"
    });
    toast({ title: "Pitch logged", description: `${r.pgName} · ${r.type}` });
  };
  const requestBlock = (r) => {
    glueBus.publish({
      type: "team.block.requested",
      blockId: `blk-${Date.now()}`,
      roomId: r.id,
      leadId: `manual-${Date.now()}`,
      ownerId: r.ownerId
    });
    toast({
      title: "Block requested",
      description: `Owner notified · 15 min auto-expire`
    });
  };
  const close = (r) => {
    closeDeal(r.id);
    toast({ title: "Deal closed", description: `${r.pgName} · ${r.type} → booked` });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col gap-2 md:flex-row md:items-end md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", children: "Sales Inventory Truth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Every sellable room, owner-confirmed, with Room IDs ready for visits and blocks. No ghost selling." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[11px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Sellable", value: totals.sellable, tone: "success" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Held", value: totals.held, tone: "accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Booked", value: totals.booked, tone: "info" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Locked", value: totals.locked, tone: "danger" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Areas", value: totals.areas }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Total rooms", value: totals.rooms })
      ] })
    ] }),
    phase === "locked" && totals.locked > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-destructive/30 bg-destructive/5 p-2 text-[11px] flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 text-destructive" }),
      totals.locked,
      " room",
      totals.locked > 1 ? "s" : "",
      " hidden — owner missed today's truth check. Don't sell these."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 rounded-xl border border-border bg-card p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search Room ID, PG, owner…",
          value: q,
          onChange: (e) => setQ(e.target.value),
          className: "max-w-xs h-8 text-xs"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: area, onValueChange: setArea, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-40 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All areas" }),
          areas.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: a, children: a }, a))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-40 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sellable", children: "Sellable (incl held)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacant", children: "Vacant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacating", children: "Vacating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "held", children: "Held for Gharpayy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "booked", children: "Booked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "locked", children: "Locked / unverified" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All statuses" })
        ] })
      ] })
    ] }),
    grouped.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground", children: "No rooms match those filters." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: grouped.map(([areaName, rows]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold uppercase tracking-wider", children: areaName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
          "· ",
          rows.length,
          " rooms"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Room ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "PG / Owner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", children: "Beds" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", children: "Rent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: cn(
              "border-t border-border align-middle",
              r.lockedUnsellable && "opacity-50"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-mono text-[10px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "hover:underline",
                  onClick: () => {
                    navigator.clipboard?.writeText(r.id);
                    toast({ title: "Room ID copied", description: r.id });
                  },
                  children: r.id
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: r.pgName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/owner",
                    search: { id: r.ownerId, tab: void 0 },
                    className: "text-[10px] text-accent hover:underline font-mono",
                    children: [
                      r.ownerId,
                      " · ",
                      r.ownerName
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 capitalize", children: r.type }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", children: r.beds }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right tabular-nums", children: [
                "₹",
                r.rent.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", children: r.lockedUnsellable ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: "text-[10px] bg-destructive/10 text-destructive border-destructive/30",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-2.5 w-2.5 mr-1" }),
                    "locked"
                  ]
                }
              ) : r.status === "held" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] bg-accent/15 text-accent-foreground border-accent/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-2.5 w-2.5 mr-1" }),
                "held for Gharpayy"
              ] }) : r.status === "booked" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] bg-info/10 text-info border-info/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-2.5 w-2.5 mr-1" }),
                "booked"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] capitalize", children: [
                r.status,
                r.verifiedToday && " ✓"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-[10px]",
                    disabled: r.lockedUnsellable,
                    onClick: () => pitch(r),
                    title: "Log virtual tour / pitch",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3 w-3 mr-1" }),
                      " Pitch"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-[10px]",
                    disabled: r.lockedUnsellable,
                    onClick: () => requestBlock(r),
                    title: "Request 15-min block",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3 mr-1" }),
                      " Block"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: `/visit-war?roomId=${encodeURIComponent(r.id)}`,
                    className: cn(
                      "inline-flex h-7 items-center gap-1 rounded-md border border-border px-2 text-[10px] hover:bg-muted",
                      r.lockedUnsellable && "pointer-events-none"
                    ),
                    title: "Schedule visit",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarPlus, { className: "h-3 w-3" }),
                      " Visit"
                    ]
                  }
                ),
                (r.status === "held" || r.status === "vacant" || r.status === "vacating") && !r.lockedUnsellable && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    className: "h-7 text-[10px]",
                    onClick: () => close(r),
                    title: "Close deal — hotel-style",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3 mr-1" }),
                      " Close"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "inline-flex h-7 w-7 items-center justify-center rounded-md border border-border hover:bg-muted",
                    onClick: () => {
                      navigator.clipboard?.writeText(r.id);
                      toast({ title: "Room ID copied", description: r.id });
                    },
                    title: "Copy Room ID",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3" })
                  }
                )
              ] }) })
            ]
          },
          r.id
        )) })
      ] }) })
    ] }, areaName)) })
  ] });
}
function Stat({
  label,
  value,
  tone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card px-2.5 py-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground font-mono", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "font-display text-sm font-semibold tabular-nums",
          tone === "success" && "text-success",
          tone === "danger" && "text-destructive",
          tone === "accent" && "text-accent-foreground",
          tone === "info" && "text-info"
        ),
        children: value
      }
    )
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SalesInventoryTruth, {}) });
export {
  SplitComponent as component
};
