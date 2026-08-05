import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-Cp2f_YYK.mjs";
import { aC as useAppState, Z as Dialog, _ as DialogTrigger, k as Button, X as Input, q as cn, aJ as zones, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, A as Textarea, U as Label, a2 as DialogFooter } from "./router-kYRMoTX_.mjs";
import { s as scoreProperty, U as UrgencyTimer } from "./UrgencyTimer-BNw3zhhz.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { B as Building2, t as Plus, $ as Search, S as Sparkles, O as MapPin, W as Wallet, T as TrendingUp, y as Target, Z as Zap, a8 as Lock } from "../_libs/lucide-react.mjs";
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
const signalConfig = {
  hot: { label: "Hot", emoji: "🔥", cls: "bg-danger/15 text-danger border-danger/30" },
  balanced: { label: "Balanced", emoji: "⚖️", cls: "bg-role-hr/15 text-role-hr border-role-hr/30" },
  cold: { label: "Cold", emoji: "❄️", cls: "bg-primary/10 text-primary border-primary/30" }
};
function SignalChip({ signal, className }) {
  const c = signalConfig[signal];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn(
    "inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-semibold uppercase tracking-wide",
    c.cls,
    className
  ), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.emoji }),
    c.label
  ] });
}
const scoreColor = (s) => s >= 70 ? "text-role-tcm" : s >= 45 ? "text-role-hr" : "text-danger";
const scoreBg = (s) => s >= 70 ? "bg-role-tcm" : s >= 45 ? "bg-role-hr" : "bg-danger";
function PropertyCard({ property: p, scores: s, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: "w-full text-left rounded-xl border border-border bg-card p-3 space-y-2.5 hover:border-accent/50 hover:shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm truncate", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SignalChip, { signal: s.signal })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5 text-[11px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
              p.area
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3 w-3" }),
              "₹",
              (p.basePrice / 1e3).toFixed(0),
              "k"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreTile, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }), label: "Demand", value: s.demandScore }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreTile, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-3 w-3" }), label: "Conv", value: s.conversionScore }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreTile, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3" }), label: "Velocity", value: s.velocityScore })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Beds" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: s.bedsAvailable }),
              " open · ",
              s.bedsBlocked,
              " blocked · ",
              s.bedsOccupied,
              "/",
              s.bedsTotal
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-1.5 rounded-full bg-surface-3 overflow-hidden flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-role-tcm", style: { width: `${s.bedsOccupied / Math.max(1, s.bedsTotal) * 100}%` } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-role-hr", style: { width: `${s.bedsBlocked / Math.max(1, s.bedsTotal) * 100}%` } })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] pt-1 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "This week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 font-mono tabular-nums", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-role-tcm font-semibold", children: [
              "+₹",
              (s.revenueWeek / 1e3).toFixed(0),
              "k"
            ] }),
            s.missedRevenue > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-danger", children: [
              "−₹",
              (s.missedRevenue / 1e3).toFixed(0),
              "k"
            ] })
          ] })
        ] }),
        s.suggestedActions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-primary bg-primary/5 border border-primary/20 rounded px-2 py-1 leading-snug", children: [
          "💡 ",
          s.suggestedActions[0]
        ] }),
        s.bedsBlocked > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-role-hr flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3" }),
          s.bedsBlocked,
          " bed",
          s.bedsBlocked > 1 ? "s" : "",
          " held"
        ] })
      ]
    }
  );
}
function ScoreTile({ icon, label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-surface-3 px-2 py-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[9px] uppercase tracking-wide text-muted-foreground", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1 mt-0.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-base font-bold tabular-nums", scoreColor(value)), children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground", children: "/100" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 rounded-full bg-surface-2 overflow-hidden mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-full", scoreBg(value)), style: { width: `${value}%` } }) })
  ] });
}
const emptyRoomDraft = (price = 8e3) => ({
  type: "double",
  bedsTotal: 2,
  bedsOccupied: 0,
  currentPrice: price
});
function PropertyCommandCenter() {
  const {
    tours,
    leads,
    blocks,
    globalZoneFilter,
    managedProperties,
    setManagedProperties,
    managedRooms,
    setManagedRooms
  } = useAppState();
  const [search, setSearch] = reactExports.useState("");
  const [signalFilter, setSignalFilter] = reactExports.useState("all");
  const [selected, setSelected] = reactExports.useState(null);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const scoredProps = reactExports.useMemo(() => {
    return managedProperties.map((p) => ({ p, s: scoreProperty(p, managedRooms, tours, leads, blocks) })).filter(({ p }) => !globalZoneFilter || p.zoneId === globalZoneFilter).filter(({ p }) => !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.area.toLowerCase().includes(search.toLowerCase())).filter(({ s }) => signalFilter === "all" || s.signal === signalFilter).sort((a, b) => b.s.demandScore - a.s.demandScore);
  }, [managedProperties, managedRooms, tours, leads, blocks, globalZoneFilter, search, signalFilter]);
  const totals = reactExports.useMemo(() => {
    const all = managedProperties.map((p) => scoreProperty(p, managedRooms, tours, leads, blocks));
    return {
      hot: all.filter((s) => s.signal === "hot").length,
      cold: all.filter((s) => s.signal === "cold").length,
      revenue: all.reduce((sum, s) => sum + s.revenueWeek, 0),
      missed: all.reduce((sum, s) => sum + s.missedRevenue, 0),
      blockedBeds: all.reduce((sum, s) => sum + s.bedsBlocked, 0)
    };
  }, [managedProperties, managedRooms, tours, leads, blocks]);
  const handleCreate = (property, rooms) => {
    setManagedProperties((prev) => [...prev, property]);
    setManagedRooms((prev) => [...prev, ...rooms]);
    setAddOpen(false);
    toast.success(`${property.name} added`);
  };
  const isEmpty = managedProperties.length === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-slide-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-primary" }),
          "Property Command Center"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Live demand, conversion & velocity — populated from your real properties." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "gap-1.5 h-9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add property"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AddPropertyDialog, { onCreate: handleCreate })
      ] })
    ] }),
    !isEmpty && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryTile, { label: "🔥 Hot", value: totals.hot }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryTile, { label: "❄️ Cold", value: totals.cold }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryTile, { label: "Beds Held", value: totals.blockedBeds }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryTile, { label: "Revenue (7d)", value: `₹${(totals.revenue / 1e3).toFixed(0)}k` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryTile, { label: "Missed (7d)", value: `₹${(totals.missed / 1e3).toFixed(0)}k`, accent: "danger" })
    ] }),
    !isEmpty && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[160px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Search property or area…",
            className: "pl-8 h-9 bg-surface-2 border-border text-xs"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: ["all", "hot", "balanced", "cold"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setSignalFilter(f),
          className: cn(
            "px-2.5 h-9 rounded-md text-[11px] font-medium uppercase tracking-wide transition-colors",
            signalFilter === f ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground hover:bg-surface-3"
          ),
          children: f
        },
        f
      )) })
    ] }),
    isEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { onAdd: () => setAddOpen(true) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 md:grid-cols-2 lg:grid-cols-3", children: scoredProps.map(({ p, s }) => /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyCard, { property: p, scores: s, onClick: () => setSelected(p) }, p.id)) }),
      scoredProps.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-8 text-center text-sm text-muted-foreground", children: "No properties match these filters." })
    ] }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyDrawer, { property: selected, onClose: () => setSelected(null) })
  ] });
}
function EmptyState({ onAdd }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-10 md:p-14 text-center space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-7 w-7 text-primary" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-lg md:text-xl font-bold text-foreground", children: "No properties yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-md mx-auto", children: "Command Center stays clean until you add real properties. Once added, demand, conversion, velocity and revenue signals stream in live from tours, leads, and active holds." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 text-[11px] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Zero seed data · everything you see is yours" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: onAdd, size: "lg", className: "gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
      " Add your first property"
    ] })
  ] });
}
function SummaryTile({ label, value, accent }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wide text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
      "text-lg font-bold tabular-nums mt-0.5",
      accent === "danger" ? "text-danger" : "text-foreground"
    ), children: value })
  ] });
}
function AddPropertyDialog({ onCreate }) {
  const [name, setName] = reactExports.useState("");
  const [zoneId, setZoneId] = reactExports.useState(zones[0]?.id ?? "");
  const [address, setAddress] = reactExports.useState("");
  const [ownerName, setOwnerName] = reactExports.useState("");
  const [basePrice, setBasePrice] = reactExports.useState(8e3);
  const [foodRating, setFoodRating] = reactExports.useState(4);
  const [hygieneRating, setHygieneRating] = reactExports.useState(4);
  const [amenitiesText, setAmenitiesText] = reactExports.useState("WiFi, AC, Laundry, Power backup");
  const [photoCount, setPhotoCount] = reactExports.useState(0);
  const [rooms, setRooms] = reactExports.useState([emptyRoomDraft()]);
  const zone = zones.find((z) => z.id === zoneId);
  const submit = () => {
    if (!name.trim()) return toast.error("Property name is required");
    if (!zone) return toast.error("Select a zone");
    if (!ownerName.trim()) return toast.error("Owner name is required");
    if (rooms.length === 0) return toast.error("Add at least one room");
    const id = `prop-${Date.now()}`;
    const property = {
      id,
      name: name.trim(),
      zoneId: zone.id,
      area: zone.area,
      address: address.trim() || zone.area,
      basePrice,
      foodRating,
      hygieneRating,
      amenities: amenitiesText.split(",").map((a) => a.trim()).filter(Boolean),
      ownerName: ownerName.trim(),
      photoCount,
      pageViews: 0,
      shares: 0
    };
    const builtRooms = rooms.map((r, i) => ({
      id: `${id}-r${i + 1}`,
      propertyId: id,
      type: r.type,
      bedsTotal: r.bedsTotal,
      bedsOccupied: Math.min(r.bedsOccupied, r.bedsTotal),
      currentPrice: r.currentPrice
    }));
    onCreate(property, builtRooms);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-xl max-h-[88vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add property" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Property name *", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: name, onChange: (e) => setName(e.target.value), placeholder: "e.g. Lakeview Residency", className: "h-9 text-sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Zone *", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: zoneId, onValueChange: setZoneId, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: z.id, children: z.name }, z.id)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Address", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: address, onChange: (e) => setAddress(e.target.value), placeholder: "Street, locality", className: "h-9 text-sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Owner name *", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: ownerName, onChange: (e) => setOwnerName(e.target.value), placeholder: "Owner / contact", className: "h-9 text-sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Base price (₹/bed/mo)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: basePrice, onChange: (e) => setBasePrice(+e.target.value || 0), className: "h-9 text-sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Photos uploaded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: photoCount, onChange: (e) => setPhotoCount(+e.target.value || 0), className: "h-9 text-sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Food rating (0–5)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.1", min: 0, max: 5, value: foodRating, onChange: (e) => setFoodRating(+e.target.value || 0), className: "h-9 text-sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Hygiene rating (0–5)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.1", min: 0, max: 5, value: hygieneRating, onChange: (e) => setHygieneRating(+e.target.value || 0), className: "h-9 text-sm" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Amenities (comma separated)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: amenitiesText, onChange: (e) => setAmenitiesText(e.target.value), className: "min-h-16 text-sm" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] uppercase tracking-wide text-muted-foreground", children: "Rooms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 gap-1 text-xs", onClick: () => setRooms((r) => [...r, emptyRoomDraft(basePrice)]), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }),
            " Add room"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: rooms.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-2 items-end rounded-md border border-border bg-surface-2 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: r.type, onValueChange: (v) => setRooms((rs) => rs.map((x, j) => j === i ? { ...x, type: v } : x)), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "single", children: "Single" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "double", children: "Double" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "triple", children: "Triple" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "studio", children: "Studio" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", children: "Beds" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 1, value: r.bedsTotal, onChange: (e) => setRooms((rs) => rs.map((x, j) => j === i ? { ...x, bedsTotal: +e.target.value || 1 } : x)), className: "h-8 text-xs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", children: "Occ." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 0, value: r.bedsOccupied, onChange: (e) => setRooms((rs) => rs.map((x, j) => j === i ? { ...x, bedsOccupied: +e.target.value || 0 } : x)), className: "h-8 text-xs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", children: "Price ₹" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: r.currentPrice, onChange: (e) => setRooms((rs) => rs.map((x, j) => j === i ? { ...x, currentPrice: +e.target.value || 0 } : x)), className: "h-8 text-xs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "ghost",
              className: "h-8 w-full text-xs text-muted-foreground hover:text-destructive",
              onClick: () => setRooms((rs) => rs.filter((_, j) => j !== i)),
              disabled: rooms.length === 1,
              children: "Remove"
            }
          ) })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submit, className: "w-full sm:w-auto", children: "Save property" }) })
  ] });
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] uppercase tracking-wide text-muted-foreground", children: label }),
    children
  ] });
}
function PropertyDrawer({ property, onClose }) {
  const { tours, leads, blocks, managedRooms } = useAppState();
  const scores = scoreProperty(property, managedRooms, tours, leads, blocks);
  const propRooms = managedRooms.filter((r) => r.propertyId === property.id);
  const activeBlocks = blocks.filter((b) => b.propertyId === property.id && b.status === "active" && new Date(b.expiresAt).getTime() > Date.now());
  const recentTours = tours.filter((t) => t.propertyName === property.name).slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex md:items-center md:justify-center", onClick: onClose, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/80 backdrop-blur-sm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onClick: (e) => e.stopPropagation(),
        className: "relative w-full md:max-w-2xl md:max-h-[85vh] max-h-[90vh] bg-card border border-border md:rounded-xl rounded-t-2xl mt-auto md:mt-0 overflow-y-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 bg-card border-b border-border p-4 flex items-start justify-between z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-bold text-foreground", children: property.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SignalChip, { signal: scores.signal })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                property.address,
                " · Owner: ",
                property.ownerName
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-muted-foreground hover:text-foreground text-xl leading-none", children: "×" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-wide text-muted-foreground font-semibold", children: "Recommended Actions" }),
              scores.suggestedActions.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-foreground bg-primary/5 border border-primary/20 rounded px-3 py-2 flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💡" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a })
              ] }, i))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-[10px] uppercase tracking-wide text-muted-foreground font-semibold mb-2", children: [
                "Rooms (",
                propRooms.length,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: propRooms.map((r) => {
                const blocksOnRoom = activeBlocks.filter((b) => b.roomId === r.id).length;
                const free = r.bedsTotal - r.bedsOccupied - blocksOnRoom;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-surface-2 p-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground capitalize", children: r.type }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                      "₹",
                      (r.currentPrice / 1e3).toFixed(1),
                      "k"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-1", children: [
                    free,
                    " free · ",
                    r.bedsOccupied,
                    " taken",
                    blocksOnRoom > 0 && ` · ${blocksOnRoom} held`
                  ] })
                ] }, r.id);
              }) })
            ] }),
            activeBlocks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-[10px] uppercase tracking-wide text-muted-foreground font-semibold mb-2 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3" }),
                "Active Holds"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: activeBlocks.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs bg-surface-2 rounded px-3 py-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
                  b.leadName,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                    "· ",
                    b.intent
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(UrgencyTimer, { expiresAt: b.expiresAt })
              ] }, b.id)) })
            ] }),
            recentTours.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-wide text-muted-foreground font-semibold mb-2", children: "Recent Tours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: recentTours.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs bg-surface-2 rounded px-3 py-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground truncate", children: t.leadName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground capitalize", children: [
                  t.status,
                  " ",
                  t.outcome ? `· ${t.outcome}` : ""
                ] })
              ] }, t.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden", children: leads.length })
          ] })
        ]
      }
    )
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyCommandCenter, {}) });
export {
  SplitComponent as component
};
