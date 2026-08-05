import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AdminShell } from "./AdminShell-C2BUOQ7i.mjs";
import { u as useAdminRows } from "./use-admin-rows-CJo-34sF.mjs";
import { k as Button } from "./router-kYRMoTX_.mjs";
import { a as downloadJson, d as downloadCsv } from "./csv-25pRKrlC.mjs";
import { d as downloadAdminWorkbook, a as downloadAdminPdf } from "./pdf-BEKHV1fL.mjs";
import { C as CopyChipRail, b as buildLeadCopyBlocks } from "./whatsapp-blocks-ZZI8-Ktg.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./store-CeJJuoup.mjs";
import "../_libs/zustand.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/lucide-react.mjs";
function AdminExports() {
  const rows = useAdminRows();
  const stamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const csv = () => downloadCsv(`admin-leads-${stamp}.csv`, rows.map((r) => ({
    name: r.lead.name,
    phone: r.lead.phone,
    stage: r.lead.stage,
    tcm: r.tcm?.name ?? "",
    probability: r.probability,
    expectedValue: r.expectedValue,
    status: r.status,
    whyNotClosed: r.whyNotClosed,
    lastTouch: new Date(r.lastTouchTs).toISOString()
  })));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminShell, { title: "Export Center", sub: "Single source of truth · always the live filtered set", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "CSV", desc: "Flat sheet — leads + derived stats.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: csv, children: "Download CSV" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "XLSX workbook", desc: "Multi-sheet — Leads · Visits · Objections · People.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => downloadAdminWorkbook(`admin-${stamp}.xlsx`, rows).catch(() => toast.error("XLSX failed")), children: "Download XLSX" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "PDF report", desc: "Branded admin report: KPIs · Why · top closeable.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => downloadAdminPdf(`admin-report-${stamp}.pdf`, rows).catch(() => toast.error("PDF failed")), children: "Download PDF" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "JSON", desc: "Raw structured export for external tooling.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => downloadJson(`admin-${stamp}.json`, rows), children: "Download JSON" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-2", children: "WhatsApp copy blocks" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CopyChipRail, { blocks: rows.length ? buildLeadCopyBlocks(rows[0], rows) : [] })
    ] })
  ] });
}
function Card({
  title,
  desc,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: desc }),
    children
  ] });
}
export {
  AdminExports as component
};
