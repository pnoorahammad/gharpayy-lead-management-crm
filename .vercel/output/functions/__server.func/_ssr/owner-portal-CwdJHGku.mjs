import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell } from "./AppShell-Cp2f_YYK.mjs";
import { H as useOwnerSession, I as useOwnerInventory, J as allOwnerAccounts, k as Button, K as pgsForOwnerCode, L as ownerScorecard, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, B as Badge, M as logoutOwner, N as loginAsOwner, Q as getPgInventory, U as Label, X as Input, Y as setPgInventory } from "./router-kYRMoTX_.mjs";
import { S as Switch } from "./switch-3VHV-rP2.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { l as ShieldCheck, B as Building2, a6 as Bed, a7 as LogOut, a8 as Lock, A as ArrowRight, g as TriangleAlert, O as MapPin, I as IndianRupee, H as Play, J as Pause, a9 as Save } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-switch.mjs";
function OwnerPortalPage() {
  const session = useOwnerSession();
  useOwnerInventory();
  const account = reactExports.useMemo(() => session ? allOwnerAccounts().find((a) => a.code === session) : null, [session]);
  if (!session || !account) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-2xl mx-auto text-center space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-10 w-10 text-muted-foreground mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "No owner signed in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Pick an owner account first — every owner can manage their own PGs." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/owner-accounts", children: "Browse owner accounts" }) })
    ] });
  }
  const pgs = pgsForOwnerCode(session);
  const sc = ownerScorecard(session);
  const accounts = allOwnerAccounts();
  const switchOwner = (code) => {
    const next = accounts.find((a) => a.code === code);
    loginAsOwner(code);
    toast.success(`Switched to ${next?.name ?? code}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-5xl mx-auto space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-start justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Owner Portal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-display font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-primary" }),
          " ",
          account.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground mt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: account.code }),
          account.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            " · ",
            account.phone
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: session, onValueChange: switchOwner, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-[210px] text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Switch owner" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: accounts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: a.code, children: a.name }, a.code)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3 w-3" }),
          sc.pgCount,
          " PGs"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "h-3 w-3" }),
          sc.availableBeds,
          " live beds"
        ] }),
        sc.paused > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "destructive", children: [
          sc.paused,
          " paused"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => {
          logoutOwner();
          toast.success("Signed out");
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-3.5 w-3.5 mr-1" }),
          " Sign out"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "h-9 justify-start text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/owner", search: {
        id: void 0,
        tab: void 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 mr-1" }),
        " Owner desk"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "h-9 justify-start text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/owner/rooms", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "h-3.5 w-3.5 mr-1" }),
        " Update rooms"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "h-9 justify-start text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/owner/blocks", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5 mr-1" }),
        " Room blocks"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "h-9 justify-start text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/owner/visits", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 mr-1" }),
        " Visits"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "h-9 justify-start text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/owner-accounts", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5 mr-1" }),
        " All owners"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border bg-muted/30 px-4 py-3 text-xs text-muted-foreground flex items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-do-today mt-0.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Every change here flows live into the Impact Queue. If you pause a PG or set vacant beds to 0, the sales team can’t schedule new tours there until you update again." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      pgs.map((pg) => /* @__PURE__ */ jsxRuntimeExports.jsx(PgInventoryRow, { pg }, pg.id)),
      pgs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-sm text-muted-foreground py-12", children: "No properties mapped to this owner yet." })
    ] })
  ] });
}
function PgInventoryRow({
  pg
}) {
  const inv = getPgInventory(pg.id);
  const [totalBeds, setTotal] = reactExports.useState(inv?.totalBeds ?? 20);
  const [vacantBeds, setVacant] = reactExports.useState(inv?.vacantBeds ?? 5);
  const [blockedBeds, setBlocked] = reactExports.useState(inv?.blockedBeds ?? 0);
  const [blockReason, setBlockReason] = reactExports.useState(inv?.blockReason ?? "");
  const [isLive, setIsLive] = reactExports.useState(inv?.isLive ?? true);
  const [note, setNote] = reactExports.useState(inv?.note ?? "");
  const dirty = !inv || inv.totalBeds !== totalBeds || inv.vacantBeds !== vacantBeds || inv.blockedBeds !== blockedBeds || inv.isLive !== isLive || (inv.blockReason ?? "") !== blockReason || (inv.note ?? "") !== note;
  const free = isLive ? Math.max(0, vacantBeds - blockedBeds) : 0;
  const price = pg.prices?.double || pg.prices?.single || pg.prices?.triple || pg.prices?.min || 0;
  const save = () => {
    setPgInventory(pg.id, {
      totalBeds,
      vacantBeds,
      blockedBeds,
      blockReason,
      isLive,
      note
    });
    toast.success(`${pg.name} updated · ${free} beds live`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border bg-card p-4 space-y-3 ${!isLive ? "opacity-80 border-destructive/40" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate", children: pg.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground flex items-center gap-3 mt-0.5 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
            pg.area
          ] }),
          price > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-3 w-3" }),
            price.toLocaleString("en-IN"),
            "/mo"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: pg.id })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: free > 0 ? "outline" : "destructive", className: "gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "h-3 w-3" }),
          " ",
          free,
          " beds live"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md border px-2 py-1 text-[11px]", children: [
          isLive ? /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3 w-3 text-won" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-3 w-3 text-destructive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: isLive, onCheckedChange: setIsLive }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isLive ? "Live" : "Paused" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Total beds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "h-8 text-xs", value: totalBeds, onChange: (e) => setTotal(Math.max(1, Number(e.target.value) || 0)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Vacant beds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "h-8 text-xs", value: vacantBeds, onChange: (e) => setVacant(Math.max(0, Number(e.target.value) || 0)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3" }),
          " Blocked by me"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "h-8 text-xs", value: blockedBeds, onChange: (e) => setBlocked(Math.max(0, Number(e.target.value) || 0)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Block reason" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "h-8 text-xs", placeholder: "e.g. painting, family use", value: blockReason, onChange: (e) => setBlockReason(e.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Note for the sales team" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "h-8 text-xs", placeholder: "e.g. AC repaired, ready to show after 5pm", value: note, onChange: (e) => setNote(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: inv ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Last updated ",
        new Date(inv.updatedAt).toLocaleString()
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Never updated — sales team is using default estimates." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-8 text-xs gap-1", disabled: !dirty, onClick: save, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-3.5 w-3.5" }),
        " ",
        dirty ? "Save changes" : "Saved"
      ] })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerPortalPage, {}) });
export {
  SplitComponent as component
};
