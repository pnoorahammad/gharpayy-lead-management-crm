import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-qrUFATK5.mjs";
import { ao as useOwner, k as Button, q as cn, Z as Dialog, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, a4 as DialogDescription, U as Label, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, X as Input, a2 as DialogFooter } from "./router-Brs45mHz.mjs";
import { S as Switch } from "./switch-G7-vbv5u.mjs";
import { C as Checkbox } from "./checkbox-C7zaySDn.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { r as roomHeroClass } from "./room-hero-DSFlcFl0.mjs";
import "../_libs/react-dom.mjs";
import { Z as Zap, B as Building2, t as Plus, a8 as Lock, S as Sparkles, I as IndianRupee, bh as Eye, bF as Camera, x as Calendar, b as Check, av as CircleAlert } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-switch.mjs";
import "../_libs/radix-ui__react-checkbox.mjs";
function Countdown({ to, prefix = "", urgentBelowMs = 5 * 60 * 1e3 }) {
  const [now, setNow] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1e3);
    return () => clearInterval(t);
  }, []);
  if (now === null) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono tabular-nums", children: "—" });
  const diff = Date.parse(to) - now;
  if (diff <= 0) return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono tabular-nums text-destructive", children: [
    prefix,
    "expired"
  ] });
  const h = Math.floor(diff / 36e5);
  const m = Math.floor(diff % 36e5 / 6e4);
  const s = Math.floor(diff % 6e4 / 1e3);
  const txt = h > 0 ? `${h}h ${m}m` : m > 0 ? `${m}m ${String(s).padStart(2, "0")}s` : `${s}s`;
  const urgent = diff < urgentBelowMs;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-mono tabular-nums ${urgent ? "text-destructive font-medium" : ""}`, children: [
    prefix,
    txt
  ] });
}
function OwnerRooms() {
  const {
    currentOwnerId,
    owners,
    properties,
    rooms,
    roomStatuses,
    updateRoomStatus,
    markRoomVerified,
    toggleDedicated,
    bulkVerify,
    bulkRentDelta,
    addProperty,
    addRoom,
    media,
    truth,
    blocks
  } = useOwner();
  const owner = owners.find((o) => o.id === currentOwnerId) ?? owners[0];
  const myProps = reactExports.useMemo(
    () => properties.filter((p) => owner.propertyIds.includes(p.id)),
    [properties, owner.propertyIds]
  );
  const [editing, setEditing] = reactExports.useState(null);
  const [editForm, setEditForm] = reactExports.useState({
    kind: "occupied",
    vacatingDate: "",
    rentConfirmed: "",
    floorPrice: "",
    notes: ""
  });
  const [addPropOpen, setAddPropOpen] = reactExports.useState(false);
  const [propForm, setPropForm] = reactExports.useState({ name: "", area: "" });
  const [addRoomFor, setAddRoomFor] = reactExports.useState(null);
  const [roomForm, setRoomForm] = reactExports.useState({
    type: "double",
    bedsTotal: "2",
    price: "",
    floorPrice: ""
  });
  const [bulkOpen, setBulkOpen] = reactExports.useState(false);
  const [bulkSelected, setBulkSelected] = reactExports.useState([]);
  const [bulkAction, setBulkAction] = reactExports.useState("verify");
  const openEdit = (s) => {
    setEditForm({
      kind: s.kind,
      vacatingDate: s.vacatingDate ?? "",
      rentConfirmed: s.rentConfirmed?.toString() ?? "",
      floorPrice: s.floorPrice?.toString() ?? "",
      notes: s.notes ?? ""
    });
    setEditing(s);
  };
  const submitEdit = () => {
    if (!editing) return;
    const needsVac = editForm.kind === "vacating";
    if (needsVac && (!editForm.vacatingDate || !editForm.rentConfirmed)) {
      toast.error("Vacating needs date + rent");
      return;
    }
    updateRoomStatus(editing.roomId, {
      kind: editForm.kind,
      vacatingDate: needsVac ? editForm.vacatingDate : void 0,
      rentConfirmed: editForm.rentConfirmed ? Number(editForm.rentConfirmed) : void 0,
      floorPrice: editForm.floorPrice ? Number(editForm.floorPrice) : void 0,
      notes: editForm.notes || void 0
    });
    toast.success(`Room confirmed`, { description: "Synced with the team in real time." });
    setEditing(null);
  };
  const submitAddProperty = () => {
    if (!propForm.name || !propForm.area) {
      toast.error("Name and area required");
      return;
    }
    addProperty(propForm);
    toast.success("Property added", { description: propForm.name });
    setPropForm({ name: "", area: "" });
    setAddPropOpen(false);
  };
  const submitAddRoom = () => {
    if (!addRoomFor || !roomForm.price) {
      toast.error("Property and price required");
      return;
    }
    addRoom({
      propertyId: addRoomFor,
      type: roomForm.type,
      bedsTotal: Number(roomForm.bedsTotal) || 1,
      price: Number(roomForm.price),
      floorPrice: roomForm.floorPrice ? Number(roomForm.floorPrice) : void 0
    });
    toast.success(`Room added`, { description: "Now visible to your sales team." });
    setRoomForm({ type: "double", bedsTotal: "2", price: "", floorPrice: "" });
    setAddRoomFor(null);
  };
  const submitBulk = () => {
    if (!bulkSelected.length) {
      toast.error("Select at least one room");
      return;
    }
    if (bulkAction === "verify") bulkVerify(bulkSelected);
    if (bulkAction === "rent_down_500") bulkRentDelta(bulkSelected, -500);
    if (bulkAction === "rent_up_500") bulkRentDelta(bulkSelected, 500);
    toast.success(`Applied to ${bulkSelected.length} rooms`);
    setBulkSelected([]);
    setBulkOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-end justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl md:text-2xl font-semibold tracking-tight", children: "Update rooms · per-room precision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Confirm rooms anytime today. Warnings go at 11 AM, 2 PM and 7 PM before any 10 PM lock." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => setBulkOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5 mr-1" }),
          " Bulk actions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => setAddPropOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5 mr-1" }),
          " Add property"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => setAddRoomFor(myProps[0]?.id ?? null), disabled: !myProps.length, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5 mr-1" }),
          " Add room"
        ] })
      ] })
    ] }),
    truth.phase === "locked" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-destructive/30 bg-destructive/5 p-3 text-xs flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5 text-destructive" }),
      " Window closed. Updates still allowed but rooms missed today's truth check."
    ] }),
    myProps.map((property) => {
      const propStatuses = roomStatuses.filter((s) => s.propertyId === property.id);
      const propRooms = rooms.filter((r) => r.propertyId === property.id);
      const sellable = propStatuses.filter((s) => s.verifiedToday && !s.lockedUnsellable && (s.kind === "vacant" || s.kind === "vacating")).length;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-base font-semibold", children: property.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground font-mono", children: [
                property.area,
                " · ",
                propRooms.length,
                " rooms · ",
                sellable,
                " sellable"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => setAddRoomFor(property.id), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5 mr-1" }),
            " Add room"
          ] })
        ] }),
        propStatuses.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6 text-center text-xs text-muted-foreground", children: [
          "No rooms yet at ",
          property.name,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: propStatuses.map((s) => {
          const r = propRooms.find((x) => x.id === s.roomId);
          const m = media.find((x) => x.roomId === s.roomId);
          const hasMedia = !!m && m.photos.length >= 3 && !!m.videoUrl;
          const block = blocks.find((b) => b.roomId === s.roomId && b.state === "pending");
          const tone = s.lockedUnsellable ? "border-destructive/40" : s.verifiedToday ? "border-success/30" : "border-warning/40";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-xl border bg-card overflow-hidden flex flex-col", tone), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("h-20 relative flex items-end p-3", roomHeroClass(s.roomId)), children: [
              s.isDedicated && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-white/95 text-foreground px-2 py-0.5 text-[10px] font-mono font-bold uppercase shadow-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-2.5 w-2.5" }),
                " Dedicated"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-mono uppercase font-bold bg-white/90 text-foreground"
              ), children: s.kind }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] opacity-80 tracking-widest uppercase", children: "Room" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-display font-semibold leading-none capitalize", children: r?.type ?? "—" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2 flex-1 flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-display font-semibold tabular-nums", children: [
                  "₹",
                  (s.rentConfirmed ?? r?.currentPrice ?? 0).toLocaleString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "/mo" }),
                s.floorPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-[10px] text-muted-foreground inline-flex items-center gap-0.5", title: "Your floor price (private)", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-2.5 w-2.5" }),
                  "floor ",
                  s.floorPrice.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 text-[10px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md bg-muted px-1.5 py-0.5 font-mono", children: [
                  r?.bedsTotal ?? 0,
                  " bed",
                  r && r.bedsTotal > 1 ? "s" : ""
                ] }),
                (s.views ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md bg-muted px-1.5 py-0.5 font-mono", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-2.5 w-2.5" }),
                  " ",
                  s.views,
                  " views"
                ] }),
                block && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md bg-warning/10 text-warning-foreground border border-warning/30 px-1.5 py-0.5 font-mono uppercase", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-2.5 w-2.5" }),
                  " Block req"
                ] }),
                !hasMedia && s.kind === "vacant" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/owner/media/$roomId",
                    params: { roomId: s.roomId },
                    className: "inline-flex items-center gap-1 rounded-md bg-info/10 text-info border border-info/30 px-1.5 py-0.5 font-mono uppercase",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-2.5 w-2.5" }),
                      " Add media"
                    ]
                  }
                )
              ] }),
              s.vacatingDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-warning-foreground inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
                " Vacant ",
                s.vacatingDate
              ] }),
              s.lockedUnsellable && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-destructive font-medium", children: "⚠ Auto-locked — not verified after 3 warnings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground inline-flex items-center gap-2", children: [
                s.verifiedToday && !s.lockedUnsellable && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }),
                  " verified today"
                ] }),
                !s.verifiedToday && !s.lockedUnsellable && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-warning-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3" }),
                  " not verified"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-1 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: !!s.isDedicated,
                      onCheckedChange: () => {
                        toggleDedicated(s.roomId);
                        toast(s.isDedicated ? "Removed from dedicated" : "Added to dedicated supply");
                      },
                      disabled: s.kind === "occupied"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Dedicated" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => markRoomVerified(s.roomId), children: "No change" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => openEdit(s), children: "Edit" })
              ] }),
              block && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground border-t border-border pt-1.5 mt-1", children: [
                "Block expires in ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown, { to: block.expiresAt })
              ] })
            ] })
          ] }, s.roomId);
        }) })
      ] }, property.id);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-4 left-4 right-4 z-40 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-2 flex gap-2 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "flex-1", onClick: () => setBulkOpen(true), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 mr-1" }),
        " Bulk"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "flex-1", onClick: () => setAddPropOpen(true), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 mr-1" }),
        " Property"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "flex-1", onClick: () => setAddRoomFor(myProps[0]?.id ?? null), disabled: !myProps.length, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-1" }),
        " Room"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!editing, onOpenChange: (o) => !o && setEditing(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Confirm room" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "This is the source of truth. Sales sees this in seconds." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: editForm.kind, onValueChange: (v) => setEditForm((f) => ({ ...f, kind: v })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "occupied", children: "Occupied" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacating", children: "Vacating (date + rent)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacant", children: "Vacant" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "blocked", children: "Blocked" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: "Confirmed rent ₹" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: editForm.rentConfirmed, onChange: (e) => setEditForm((f) => ({ ...f, rentConfirmed: e.target.value })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: "Floor (private) ₹" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: editForm.floorPrice, onChange: (e) => setEditForm((f) => ({ ...f, floorPrice: e.target.value })) })
          ] })
        ] }),
        editForm.kind === "vacating" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: "Vacating date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: editForm.vacatingDate, onChange: (e) => setEditForm((f) => ({ ...f, vacatingDate: e.target.value })) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editForm.notes, onChange: (e) => setEditForm((f) => ({ ...f, notes: e.target.value })), placeholder: "Optional" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => setEditing(null), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submitEdit, children: "Save & verify" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addPropOpen, onOpenChange: setAddPropOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add property" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Add a new building under your portfolio." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Property name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: propForm.name, onChange: (e) => setPropForm((f) => ({ ...f, name: e.target.value })), placeholder: "Sunshine Residency" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: propForm.area, onChange: (e) => setPropForm((f) => ({ ...f, area: e.target.value })), placeholder: "Koramangala 5th Block" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => setAddPropOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submitAddProperty, children: "Add property" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!addRoomFor, onOpenChange: (o) => !o && setAddRoomFor(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add room" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: properties.find((p) => p.id === addRoomFor)?.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Room type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: roomForm.type, onValueChange: (v) => setRoomForm((f) => ({ ...f, type: v })), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "single", children: "Single" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "double", children: "Double" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "triple", children: "Triple" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "studio", children: "Studio" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Beds total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: roomForm.bedsTotal, onChange: (e) => setRoomForm((f) => ({ ...f, bedsTotal: e.target.value })) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Expected rent ₹" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: roomForm.price, onChange: (e) => setRoomForm((f) => ({ ...f, price: e.target.value })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Floor price ₹ (private)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: roomForm.floorPrice, onChange: (e) => setRoomForm((f) => ({ ...f, floorPrice: e.target.value })) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => setAddRoomFor(null), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submitAddRoom, children: "Add room" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: bulkOpen, onOpenChange: setBulkOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Bulk actions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Apply the same change to many rooms — emergency lever only." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Action" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: bulkAction, onValueChange: (v) => setBulkAction(v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "verify", children: "Mark verified · no change" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "rent_down_500", children: "Drop rent ₹500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "rent_up_500", children: "Raise rent ₹500" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
            "Pick rooms (",
            bulkSelected.length,
            " selected)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-64 overflow-y-auto rounded-md border border-border divide-y divide-border", children: roomStatuses.filter((s) => s.ownerId === owner.id).map((s) => {
            const r = rooms.find((x) => x.id === s.roomId);
            const p = properties.find((x) => x.id === s.propertyId);
            const checked = bulkSelected.includes(s.roomId);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 px-3 py-2 text-xs cursor-pointer hover:bg-muted/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked, onCheckedChange: (v) => {
                setBulkSelected((prev) => v ? [...prev, s.roomId] : prev.filter((x) => x !== s.roomId));
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 truncate", children: [
                p?.name,
                " · ",
                r?.type,
                " (",
                r?.bedsTotal,
                "b)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-muted-foreground", children: [
                "₹",
                s.rentConfirmed?.toLocaleString() ?? "—"
              ] })
            ] }, s.roomId);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => setBulkOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submitBulk, children: "Apply" })
      ] })
    ] }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerRooms, {}) });
export {
  SplitComponent as component
};
