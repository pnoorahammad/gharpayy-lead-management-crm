import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-qrUFATK5.mjs";
import { g as getRegistry, s as subscribeRegistry, p as patchRoom } from "./owner-registry-DRKLY8k0.mjs";
import { X as Input, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, B as Badge, k as Button } from "./router-Brs45mHz.mjs";
import { t as toast } from "./use-toast-CW1pxMtS.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { C as ChevronDown, q as ChevronRight, P as Phone, r as MessageCircle, j as Copy } from "../_libs/lucide-react.mjs";
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
function useRegistry() {
  const [data, setData] = reactExports.useState(() => getRegistry());
  reactExports.useEffect(() => subscribeRegistry(() => setData(getRegistry())), []);
  return data;
}
const STATUS_TONE = {
  vacant: "bg-success/15 text-success border-success/30",
  vacating: "bg-warning/15 text-warning-foreground border-warning/30",
  occupied: "bg-muted text-muted-foreground border-border",
  blocked: "bg-destructive/10 text-destructive border-destructive/30",
  held: "bg-accent/15 text-accent-foreground border-accent/30",
  booked: "bg-info/10 text-info border-info/30"
};
function OwnerRegistry() {
  const owners = useRegistry();
  const [q, setQ] = reactExports.useState("");
  const [expanded, setExpanded] = reactExports.useState(/* @__PURE__ */ new Set());
  const [hubFilter, setHubFilter] = reactExports.useState("all");
  const filtered = reactExports.useMemo(() => {
    const term = q.trim().toLowerCase();
    return owners.map((o) => {
      const props = hubFilter === "all" ? o.properties : o.properties.filter((p) => p.hub === hubFilter);
      return { ...o, properties: props };
    }).filter((o) => o.properties.length > 0).filter((o) => {
      if (!term) return true;
      return o.id.toLowerCase().includes(term) || o.name.toLowerCase().includes(term) || (o.phone || "").includes(term) || o.properties.some(
        (p) => p.pgName.toLowerCase().includes(term) || p.area.toLowerCase().includes(term) || p.pgId.toLowerCase().includes(term)
      );
    });
  }, [owners, q, hubFilter]);
  const totals = reactExports.useMemo(() => {
    const t = { owners: filtered.length, properties: 0, beds: 0, vacant: 0 };
    filtered.forEach((o) => {
      t.properties += o.properties.length;
      o.properties.forEach((p) => {
        p.rooms.forEach((r) => {
          t.beds += r.beds;
          if (r.status === "vacant" || r.status === "vacating") t.vacant += r.beds;
        });
      });
    });
    return t;
  }, [filtered]);
  const toggle = (id) => setExpanded((s) => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const copy = (text, label = "Copied") => {
    navigator.clipboard?.writeText(text);
    toast({ title: label, description: text });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col gap-3 md:flex-row md:items-end md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", children: "Owner Console — unified" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Every owner across both property hubs, with auto-generated IDs and room-level controls in one place." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Owners", value: totals.owners }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Properties", value: totals.properties }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Beds", value: totals.beds }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Vacant", value: totals.vacant, accent: true })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search owner ID, name, phone, property, area…",
          value: q,
          onChange: (e) => setQ(e.target.value),
          className: "max-w-md"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: hubFilter, onValueChange: (v) => setHubFilter(v), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-44", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All hubs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "pg", children: "Property Genius" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sh", children: "Supply Hub" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 w-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Owner ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", children: "Properties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", children: "Beds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", children: "Vacant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Quick" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        filtered.map((o) => {
          const isOpen = expanded.has(o.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border hover:bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => toggle(o.id),
                  className: "p-1 rounded hover:bg-muted",
                  "aria-label": "Expand",
                  children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-mono text-[11px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "hover:underline",
                  onClick: () => copy(o.id, "Owner ID copied"),
                  children: o.id
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-medium", children: o.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-mono text-[11px]", children: o.phone || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", children: o.properties.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", children: o.totalBeds }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-success", children: o.vacantBeds }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                o.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      className: "inline-flex h-7 w-7 items-center justify-center rounded-md border border-border hover:bg-muted",
                      href: `tel:${o.phone}`,
                      "aria-label": "Call",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      className: "inline-flex h-7 w-7 items-center justify-center rounded-md border border-border hover:bg-muted",
                      href: `https://wa.me/${o.phone.replace(/\D/g, "")}`,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "WhatsApp",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "inline-flex h-7 w-7 items-center justify-center rounded-md border border-border hover:bg-muted",
                    onClick: () => copy(
                      `Owner ${o.id} · ${o.name} · ${o.properties.length} properties · ${o.vacantBeds} vacant beds`,
                      "Card copied"
                    ),
                    "aria-label": "Copy card",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5" })
                  }
                )
              ] }) })
            ] }, o.id),
            isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 8, className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: o.properties.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-lg border border-border bg-card p-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-sm", children: [
                        p.pgName,
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                          "· ",
                          p.area
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground font-mono", children: [
                        p.pgId,
                        " · hub:",
                        p.hub
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        className: "text-[11px] underline text-accent",
                        onClick: () => copy(p.pgId, "Property ID copied"),
                        children: "copy PG ID"
                      }
                    )
                  ] }),
                  p.rooms.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "No room configs available for this property." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-[11px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", children: "Room ID" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", children: "Type" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", children: "Beds" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", children: "Rent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", children: "Status" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", children: "Vacating" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", children: " " })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: p.rooms.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(RoomRow, { room: r, onCopy: copy }, r.id)) })
                  ] }) })
                ]
              },
              p.pgId
            )) }) }) })
          ] });
        }),
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 8, className: "p-6 text-center text-muted-foreground", children: "No owners match those filters." }) })
      ] })
    ] }) })
  ] });
  function Stat({ label, value, accent }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card px-3 py-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `font-display text-base font-semibold tabular-nums ${accent ? "text-success" : ""}`,
          children: value
        }
      )
    ] });
  }
}
function RoomRow({
  room,
  onCopy
}) {
  const [rent, setRent] = reactExports.useState(String(room.rent));
  const [beds, setBeds] = reactExports.useState(String(room.beds));
  const [status, setStatus] = reactExports.useState(room.status);
  const [vacating, setVacating] = reactExports.useState(room.vacatingDate ?? "");
  const dirty = Number(rent) !== room.rent || Number(beds) !== room.beds || status !== room.status || (vacating || "") !== (room.vacatingDate ?? "");
  const save = () => {
    patchRoom(room.id, {
      rent: Number(rent) || 0,
      beds: Number(beds) || 0,
      status,
      vacatingDate: status === "vacating" ? vacating || void 0 : void 0
    });
    toast({ title: "Room updated", description: room.id });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border align-middle", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2 font-mono", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "hover:underline",
        onClick: () => onCopy(room.id, "Room ID copied"),
        children: room.id
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2 capitalize", children: room.type }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: beds,
        onChange: (e) => setBeds(e.target.value.replace(/\D/g, "")),
        className: "h-7 w-16"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: rent,
        onChange: (e) => setRent(e.target.value.replace(/\D/g, "")),
        className: "h-7 w-24"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: status, onValueChange: (v) => setStatus(v), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 w-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacant", children: "Vacant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacating", children: "Vacating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "occupied", children: "Occupied" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "blocked", children: "Blocked" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "date",
        value: vacating,
        disabled: status !== "vacating",
        onChange: (e) => setVacating(e.target.value),
        className: "h-7 w-36"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] ${STATUS_TONE[room.status]}`, children: room.status }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: dirty ? "default" : "outline",
          className: "h-7 text-[11px]",
          onClick: save,
          disabled: !dirty,
          children: "Save"
        }
      )
    ] }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerRegistry, {}) });
export {
  SplitComponent as component
};
