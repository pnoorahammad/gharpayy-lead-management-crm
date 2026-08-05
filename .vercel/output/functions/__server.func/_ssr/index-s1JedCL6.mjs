import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, G as Sheet, am as SheetTrigger, H as SheetContent, J as SheetHeader, M as SheetTitle } from "./AppShell-Cp2f_YYK.mjs";
import { g as useSearch, d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as dailyTruthPhase, g as getRegistry, s as subscribeRegistry, v as verifyRoomToday, a as addedRoomCountFor, m as maxAddedRoomsPerPG, h as holdForGharpayy, b as addRooms, p as patchRoom, r as removeAddedRoom, l as lookupOwnerByRoomId } from "./owner-registry-BJrt1Csq.mjs";
import { q as cn, X as Input, k as Button, a3 as glueBus, B as Badge, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem } from "./router-kYRMoTX_.mjs";
import { t as toast } from "./use-toast-CW1pxMtS.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bA as Hotel, au as CalendarDays, as as Inbox, f as Activity, a8 as Lock, p as Bell, P as Phone, r as MessageCircle, j as Copy, k as CircleCheck, l as ShieldCheck, T as TrendingUp, B as Building2, S as Sparkles, t as Plus, X, ao as Trash2 } from "../_libs/lucide-react.mjs";
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
import "../_libs/isbot.mjs";
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
const EMPTY = {
  pitches: 0,
  visitsScheduled: 0,
  visitsCompleted: 0,
  tours: 0,
  blocksRequested: 0,
  blocksApproved: 0,
  blocksRejected: 0,
  recent: []
};
function ownerIdFromEvent(e) {
  const direct = e.ownerId;
  if (direct) return direct;
  const roomId = e.roomId;
  if (roomId) return lookupOwnerByRoomId(roomId)?.id ?? null;
  return null;
}
function fold(events, targetOwnerId) {
  const acc = { ...EMPTY, recent: [] };
  for (const e of events) {
    const oid = ownerIdFromEvent(e);
    if (oid !== targetOwnerId) continue;
    const at = (/* @__PURE__ */ new Date()).toISOString();
    const roomId = e.roomId;
    acc.lastEventAt = at;
    switch (e.type) {
      case "team.lead.pitched":
        acc.pitches++;
        acc.recent.unshift({ kind: "Lead pitched", roomId, at });
        break;
      case "team.visit.scheduled":
        acc.visitsScheduled++;
        acc.recent.unshift({ kind: "Visit scheduled", roomId, at });
        break;
      case "team.visit.ended":
        acc.visitsCompleted++;
        acc.recent.unshift({ kind: "Visit completed", roomId, at });
        break;
      case "tour.confirmation.sent":
      case "tour.reminder.sent":
        acc.tours++;
        acc.recent.unshift({ kind: "Tour outreach", roomId, at });
        break;
      case "team.block.requested":
        acc.blocksRequested++;
        acc.recent.unshift({ kind: "Block requested", roomId, at });
        break;
      case "owner.block.approved":
        acc.blocksApproved++;
        acc.recent.unshift({ kind: "Block approved", roomId, at });
        break;
      case "owner.block.rejected":
        acc.blocksRejected++;
        acc.recent.unshift({ kind: "Block rejected", roomId, at });
        break;
    }
  }
  acc.recent = acc.recent.slice(0, 10);
  return acc;
}
function useOwnerEffort(ownerId) {
  const [effort, setEffort] = reactExports.useState(EMPTY);
  reactExports.useEffect(() => {
    if (!ownerId) {
      setEffort(EMPTY);
      return;
    }
    const recompute = () => setEffort(fold(glueBus.recent(void 0, 200), ownerId));
    recompute();
    return glueBus.subscribe(recompute);
  }, [ownerId]);
  return effort;
}
function useRegistry() {
  const [data, setData] = reactExports.useState(() => getRegistry());
  reactExports.useEffect(() => subscribeRegistry(() => setData(getRegistry())), []);
  return data;
}
function useGlueRecent() {
  const [events, setEvents] = reactExports.useState(() => glueBus.recent(void 0, 200));
  reactExports.useEffect(() => {
    const refresh = () => setEvents(glueBus.recent(void 0, 200));
    refresh();
    return glueBus.subscribe(refresh);
  }, []);
  return events;
}
const STATUS_TONE = {
  vacant: "bg-success/15 text-success border-success/30",
  vacating: "bg-warning/15 text-warning-foreground border-warning/30",
  occupied: "bg-muted text-muted-foreground border-border",
  blocked: "bg-destructive/10 text-destructive border-destructive/30",
  held: "bg-accent/15 text-accent-foreground border-accent/30",
  booked: "bg-info/10 text-info border-info/30"
};
const PHASE_COPY = {
  idle: { label: "Update window opens 9:30 AM", tone: "bg-muted text-muted-foreground border-border" },
  open: { label: "OPEN — confirm rooms for today", tone: "bg-info/10 text-info border-info/30" },
  warn1: { label: "Reminder 1 of 3 — please confirm rooms", tone: "bg-warning/15 text-warning-foreground border-warning/30" },
  warn2: { label: "Reminder 2 of 3 — confirm before 7 PM", tone: "bg-warning/15 text-warning-foreground border-warning/30" },
  warn3: { label: "Final reminder — confirm before 10 PM", tone: "bg-destructive/10 text-destructive border-destructive/30" },
  locked: { label: "LOCKED — unconfirmed rooms removed", tone: "bg-destructive/10 text-destructive border-destructive/30" }
};
const TABS = [
  { id: "inventory", label: "Inventory", icon: Hotel },
  { id: "tours", label: "Tours", icon: CalendarDays },
  { id: "blocks", label: "Block requests", icon: Inbox },
  { id: "activity", label: "Activity", icon: Activity }
];
function OwnerHome() {
  const owners = useRegistry();
  const search = useSearch({ strict: false });
  const navigate = useNavigate();
  const [q, setQ] = reactExports.useState("");
  const selectedId = search.id ?? owners[0]?.id;
  const owner = reactExports.useMemo(
    () => owners.find((o) => o.id === selectedId) ?? owners[0],
    [owners, selectedId]
  );
  const tab = TABS.find((t) => t.id === search.tab)?.id ?? "inventory";
  const phase = dailyTruthPhase();
  const effort = useOwnerEffort(owner?.id ?? null);
  const glueEvents = useGlueRecent();
  const matches = reactExports.useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return owners.slice(0, 8);
    return owners.filter(
      (o) => o.id.toLowerCase().includes(term) || o.name.toLowerCase().includes(term) || (o.phone || "").includes(term)
    ).slice(0, 8);
  }, [owners, q]);
  if (!owner) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-sm text-muted-foreground", children: "No owners in registry yet." });
  }
  const allRooms = owner.properties.flatMap((p) => p.rooms);
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const available = allRooms.filter(
    (r) => !r.lockedUnsellable && (r.status === "vacant" || r.status === "vacating")
  ).length;
  const held = allRooms.filter((r) => r.status === "held").length;
  const bookedToday = allRooms.filter((r) => r.status === "booked" && r.updatedAt.startsWith(today)).length;
  const vacatingSoon = allRooms.filter((r) => r.status === "vacating").length;
  const monthlyRevenue = allRooms.filter((r) => r.status === "occupied" || r.status === "booked").reduce((s, r) => s + r.rent * Math.max(1, r.beds), 0);
  const ownerRoomIds = new Set(allRooms.map((r) => r.id));
  const tours = reactExports.useMemo(() => {
    return glueEvents.filter((e) => e.type === "team.visit.scheduled" || e.type === "team.visit.started" || e.type === "team.visit.ended").map((e) => e).filter((e) => {
      const rid = e.roomId;
      if (rid && ownerRoomIds.has(rid)) return true;
      const oid = e.ownerId;
      return oid === owner.id;
    }).slice(0, 25);
  }, [glueEvents, ownerRoomIds, owner.id]);
  const toursScheduledCount = tours.filter((t) => t.type === "team.visit.scheduled").length;
  const selectOwner = (id) => navigate({ to: "/owner", search: (prev) => ({ id, tab: prev?.tab }) });
  const selectTab = (id) => navigate({ to: "/owner", search: (prev) => ({ id: prev?.id, tab: id }) });
  const verifyAllUnchanged = () => {
    allRooms.forEach((r) => verifyRoomToday(r.id));
    toast({ title: "All rooms confirmed", description: `${allRooms.length} rooms verified for today.` });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col gap-3 md:flex-row md:items-end md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: [
          "Owner ID · ",
          owner.id
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", children: owner.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          owner.properties.length,
          " propert",
          owner.properties.length === 1 ? "y" : "ies",
          " ·",
          " ",
          new Set(owner.properties.map((p) => p.hub)).size,
          " hub",
          new Set(owner.properties.map((p) => p.hub)).size === 1 ? "" : "s",
          " ·",
          " ",
          owner.totalBeds,
          " beds"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("text-[11px] font-mono inline-flex items-center gap-2 rounded-md border px-2 py-1", PHASE_COPY[phase].tone), children: [
        phase === "locked" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-3 w-3" }),
        PHASE_COPY[phase].label
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Switch owner — search ID, name, phone…",
            value: q,
            onChange: (e) => setQ(e.target.value),
            className: "max-w-sm h-8 text-xs"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex flex-wrap items-center gap-1.5 text-xs", children: [
          owner.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "inline-flex h-7 items-center gap-1 rounded-md border border-border px-2 hover:bg-muted", href: `tel:${owner.phone}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
              " Call"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "inline-flex h-7 items-center gap-1 rounded-md border border-border px-2 hover:bg-muted", target: "_blank", rel: "noreferrer", href: `https://wa.me/${owner.phone.replace(/\D/g, "")}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3 w-3" }),
              " WhatsApp"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: "inline-flex h-7 items-center gap-1 rounded-md border border-border px-2 hover:bg-muted",
              onClick: () => {
                navigator.clipboard?.writeText(owner.id);
                toast({ title: "Owner ID copied", description: owner.id });
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3" }),
                " Copy ID"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7", onClick: verifyAllUnchanged, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3 mr-1" }),
            " Confirm all unchanged"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
        matches.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => selectOwner(o.id),
            className: cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] whitespace-nowrap transition-colors",
              o.id === owner.id ? "border-accent/50 bg-accent/10 text-accent-foreground" : "border-border bg-card hover:bg-muted text-muted-foreground"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] opacity-70", children: o.id }),
              o.name
            ]
          },
          o.id
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/owner/registry", className: "text-[11px] text-accent underline ml-auto self-center", children: "Full directory →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Available", value: available, tone: "success", icon: Hotel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Held for Gharpayy", value: held, tone: "accent", icon: ShieldCheck }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Booked today", value: bookedToday, tone: "info", icon: CircleCheck }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Tours", value: toursScheduledCount, tone: "muted", icon: CalendarDays }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Vacating soon", value: vacatingSoon, tone: "warning", icon: TrendingUp }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Monthly ₹", value: `₹${(monthlyRevenue / 1e3).toFixed(0)}k`, tone: "muted", icon: Building2 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 border-b border-border", children: TABS.map((t) => {
      const active = t.id === tab;
      const Icon = t.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => selectTab(t.id),
          className: cn(
            "inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium border-b-2 -mb-px transition-colors",
            active ? "border-accent text-accent-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }),
            t.label
          ]
        },
        t.id
      );
    }) }),
    tab === "inventory" && /* @__PURE__ */ jsxRuntimeExports.jsx(InventoryTab, { owner }),
    tab === "tours" && /* @__PURE__ */ jsxRuntimeExports.jsx(ToursTab, { tours, allRooms }),
    tab === "blocks" && /* @__PURE__ */ jsxRuntimeExports.jsx(BlocksTab, { ownerId: owner.id, events: glueEvents, ownerRoomIds }),
    tab === "activity" && /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityTab, { effort })
  ] });
}
function InventoryTab({ owner }) {
  const bulkHold = (propRooms) => {
    const targets = propRooms.filter((r) => r.status === "vacant" || r.status === "vacating");
    targets.forEach((r) => holdForGharpayy(r.id, true));
    toast({
      title: `Held ${targets.length} rooms`,
      description: "Now exclusive for Gharpayy deals."
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: owner.properties.map((p) => {
    const addedCount = addedRoomCountFor(p.pgId);
    const max = maxAddedRoomsPerPG();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 p-3 bg-muted/30 border-b border-border flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-accent/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-sm", children: [
              p.pgName,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal", children: [
                "· ",
                p.area
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground font-mono", children: [
              p.pgId,
              " · hub:",
              p.hub,
              " · ",
              p.rooms.length,
              " rooms · ",
              addedCount,
              "/",
              max,
              " added"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px]", onClick: () => bulkHold(p.rooms), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3 mr-1" }),
            " Hold all vacant"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AddRoomsSheet, { pgId: p.pgId, pgName: p.pgName, addedCount, max })
        ] })
      ] }),
      p.rooms.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-[11px] text-muted-foreground", children: "No rooms configured yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-2", children: p.rooms.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(RoomCard, { room: r }, r.id)) })
    ] }, p.pgId);
  }) });
}
function RoomCard({ room }) {
  const [status, setStatus] = reactExports.useState(room.status);
  const [rent, setRent] = reactExports.useState(String(room.rent));
  const [vacating, setVacating] = reactExports.useState(room.vacatingDate ?? "");
  reactExports.useEffect(() => {
    setStatus(room.status);
    setRent(String(room.rent));
    setVacating(room.vacatingDate ?? "");
  }, [room.status, room.rent, room.vacatingDate]);
  const dirty = status !== room.status || Number(rent) !== room.rent || (vacating || "") !== (room.vacatingDate ?? "");
  const save = () => {
    patchRoom(room.id, {
      status,
      rent: Number(rent) || 0,
      vacatingDate: status === "vacating" ? vacating || void 0 : void 0,
      verifiedOn: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
    });
    toast({ title: "Room confirmed", description: room.id });
  };
  const toggleHold = () => {
    const on = room.status !== "held";
    holdForGharpayy(room.id, on);
    toast({
      title: on ? "Held for Gharpayy" : "Released hold",
      description: room.id
    });
  };
  const remove = () => {
    if (!room.ownerAdded) return;
    if (removeAddedRoom(room.id)) {
      toast({ title: "Room removed", description: room.id });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "rounded-lg border bg-card p-2.5 space-y-2",
        room.lockedUnsellable ? "border-destructive/40" : room.status === "held" ? "border-accent/40" : room.verifiedToday ? "border-success/30" : "border-border"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-muted-foreground truncate", children: room.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold capitalize flex items-center gap-1.5", children: [
              room.type,
              room.ownerAdded && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] h-4 px-1", children: "added" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("text-[10px]", STATUS_TONE[room.status]), children: room.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] uppercase tracking-wider text-muted-foreground font-mono", children: "Rent ₹" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: rent,
                onChange: (e) => setRent(e.target.value.replace(/\D/g, "")),
                className: "h-7 text-xs"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] uppercase tracking-wider text-muted-foreground font-mono", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: status, onValueChange: (v) => setStatus(v), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacant", children: "Vacant" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacating", children: "Vacating" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "occupied", children: "Occupied" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "held", children: "Held for Gharpayy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "blocked", children: "Blocked" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "booked", children: "Booked" })
              ] })
            ] })
          ] })
        ] }),
        status === "vacating" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] uppercase tracking-wider text-muted-foreground font-mono", children: "Vacating date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: vacating, onChange: (e) => setVacating(e.target.value), className: "h-7 text-xs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: room.status === "held" ? "default" : "outline", className: "h-7 text-[11px] flex-1", onClick: toggleHold, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3 mr-1" }),
            room.status === "held" ? "Release hold" : "Hold for Gharpayy"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-7 text-[11px]", onClick: save, disabled: !dirty, children: "Save" }),
          room.ownerAdded && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 text-[11px] text-destructive hover:text-destructive", onClick: remove, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" }) })
        ] })
      ]
    }
  );
}
function AddRoomsSheet({
  pgId,
  pgName,
  addedCount,
  max
}) {
  const remaining = Math.max(0, max - addedCount);
  const [open, setOpen] = reactExports.useState(false);
  const [rows, setRows] = reactExports.useState(() => [{ type: "single", beds: 1, rent: 1e4 }]);
  const update = (i, patch) => {
    setRows((prev) => prev.map((r, idx) => idx === i ? { ...r, ...patch } : r));
  };
  const addRow = () => {
    if (rows.length >= remaining) return;
    setRows((prev) => [...prev, { type: "single", beds: 1, rent: 1e4 }]);
  };
  const removeRow = (i) => setRows((prev) => prev.filter((_, idx) => idx !== i));
  const save = () => {
    const valid = rows.filter((r) => r.beds > 0 && r.rent > 0);
    if (valid.length === 0) {
      toast({ title: "Nothing to add", description: "Set beds and rent for at least one row." });
      return;
    }
    const res = addRooms(pgId, valid);
    toast({
      title: `${res.added} room${res.added === 1 ? "" : "s"} added`,
      description: res.skipped > 0 ? `${res.skipped} skipped — limit of ${max} per property.` : `Live in Sales Inventory Truth.`
    });
    setOpen(false);
    setRows([{ type: "single", beds: 1, rent: 1e4 }]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 text-[11px]", disabled: remaining === 0, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3 mr-1" }),
      " Add rooms"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { side: "right", className: "w-full sm:max-w-xl overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { children: [
        "Add rooms to ",
        pgName
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
        "Add up to ",
        remaining,
        " more rooms (limit ",
        max,
        " per property). Hotel rules: one rent, one bed count per row. Rooms go live for sales immediately."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr,80px,1fr,32px] gap-2 text-[10px] uppercase tracking-wider text-muted-foreground font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: "Beds" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: "Rent ₹" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
        ] }),
        rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr,80px,1fr,32px] gap-2 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: row.type, onValueChange: (v) => update(i, { type: v }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "single", children: "Single" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "double", children: "Double" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "triple", children: "Triple" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              min: 1,
              value: row.beds,
              onChange: (e) => update(i, { beds: Number(e.target.value) || 0 }),
              className: "h-8 text-xs text-right"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              min: 0,
              value: row.rent,
              onChange: (e) => update(i, { rent: Number(e.target.value) || 0 }),
              className: "h-8 text-xs text-right"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeRow(i),
              disabled: rows.length === 1,
              className: "h-8 w-8 grid place-items-center rounded-md border border-border text-muted-foreground hover:text-destructive disabled:opacity-30",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
            }
          )
        ] }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            className: "h-8 text-xs w-full",
            onClick: addRow,
            disabled: rows.length >= remaining,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3 mr-1" }),
              " Add row (",
              rows.length,
              "/",
              remaining,
              ")"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: save, children: [
          "Save ",
          rows.length,
          " room",
          rows.length === 1 ? "" : "s"
        ] })
      ] })
    ] })
  ] });
}
function ToursTab({ tours, allRooms }) {
  if (tours.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-6 w-6 mx-auto mb-2 opacity-50" }),
      "No tours scheduled yet. When sales schedules a visit on any of your rooms it will appear here in real time."
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden divide-y divide-border", children: tours.map((t, i) => {
    const rid = t.roomId;
    const room = rid ? allRooms.find((r) => r.id === rid) : void 0;
    const kind = t.type === "team.visit.scheduled" ? "Scheduled" : t.type === "team.visit.started" ? "In progress" : "Completed";
    const tone = t.type === "team.visit.scheduled" ? "text-info" : t.type === "team.visit.started" ? "text-warning-foreground" : "text-success";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: cn("h-4 w-4", tone) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: room ? `${room.pgName} · ${room.type}` : "Tour event" }),
        rid && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-muted-foreground truncate", children: rid })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("text-[10px]", tone), children: kind })
    ] }, i);
  }) });
}
function BlocksTab({
  ownerId,
  events,
  ownerRoomIds
}) {
  const requests = events.filter((e) => e.type === "team.block.requested").map((e) => e).filter((e) => e.ownerId === ownerId || ownerRoomIds.has(e.roomId)).slice(0, 20);
  if (requests.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-6 w-6 mx-auto mb-2 opacity-50" }),
      "Inbox zero. Block requests from the team land here."
    ] });
  }
  const approve = (req) => {
    glueBus.publish({
      type: "owner.block.approved",
      blockId: req.blockId,
      roomId: req.roomId,
      leadId: req.leadId
    });
    holdForGharpayy(req.roomId, true);
    toast({ title: "Block approved", description: req.roomId });
  };
  const reject = (req) => {
    glueBus.publish({
      type: "owner.block.rejected",
      blockId: req.blockId,
      roomId: req.roomId,
      leadId: req.leadId
    });
    toast({ title: "Block rejected", description: req.roomId });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: requests.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-warning/30 bg-card p-3 flex flex-wrap items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[180px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold", children: [
        "Lead ",
        r.leadId
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground font-mono mt-0.5", children: r.roomId })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => reject(r), children: "Reject" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => approve(r), children: "Approve & hold" })
    ] })
  ] }, r.blockId)) });
}
function ActivityTab({ effort }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-b border-border flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 text-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-base font-semibold", children: "What Gharpayy did for you" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[10px] text-muted-foreground font-mono", children: "live · last 200 events" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Leads pitched", value: effort.pitches }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Visits scheduled", value: effort.visitsScheduled }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Visits completed", value: effort.visitsCompleted }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Tours / outreach", value: effort.tours }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Blocks requested", value: effort.blocksRequested }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Blocks approved", value: effort.blocksApproved, tone: "success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Blocks rejected", value: effort.blocksRejected, tone: "warning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Last activity", value: effort.lastEventAt ? "live" : "—", small: true })
    ] }),
    effort.recent.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border divide-y divide-border text-[11px]", children: effort.recent.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.kind }),
      r.roomId && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-muted-foreground", children: [
        "· ",
        r.roomId
      ] })
    ] }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-4 text-[11px] text-muted-foreground text-center", children: "No team activity yet today." })
  ] });
}
function Kpi({
  label,
  value,
  tone,
  icon: Icon
}) {
  const toneClass = tone === "success" ? "text-success" : tone === "info" ? "text-info" : tone === "warning" ? "text-warning-foreground" : tone === "accent" ? "text-accent-foreground" : "text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3 flex items-start gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: cn("h-4 w-4 mt-0.5", toneClass) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-display text-xl font-semibold tabular-nums truncate", toneClass), children: value })
    ] })
  ] });
}
function Mini({
  label,
  value,
  tone,
  small
}) {
  const toneClass = tone === "success" ? "text-success" : tone === "warning" ? "text-warning-foreground" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-muted/20 p-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-display font-semibold tabular-nums", small ? "text-xs" : "text-lg", toneClass), children: value })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerHome, {}) });
export {
  SplitComponent as component
};
