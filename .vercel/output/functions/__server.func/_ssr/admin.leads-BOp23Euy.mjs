import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AdminShell } from "./AdminShell-C2BUOQ7i.mjs";
import { u as useApp, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, k as Button, X as Input, q as cn } from "./router-kYRMoTX_.mjs";
import { C as CopyChipRail, b as buildLeadCopyBlocks } from "./whatsapp-blocks-ZZI8-Ktg.mjs";
import { u as useAdminRows } from "./use-admin-rows-CJo-34sF.mjs";
import { r as reassignLead, f as forceCloseLead, a as flagIntervention } from "./admin-actions-BWXYqiCE.mjs";
import { d as downloadCsv, a as downloadJson } from "./csv-25pRKrlC.mjs";
import { d as downloadAdminWorkbook, a as downloadAdminPdf } from "./pdf-BEKHV1fL.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { X } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/zustand.mjs";
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
import "./store-CeJJuoup.mjs";
import "./audit-log-BbY99Bzt.mjs";
const defaultAdminFilters = {
  q: "",
  stage: [],
  source: [],
  assignedTo: [],
  zone: [],
  status: [],
  probBucket: [],
  dormant: [],
  sort: "updated:desc"
};
function applyFilters(rows, f) {
  let out = rows;
  if (f.q) {
    const q = f.q.toLowerCase();
    out = out.filter(
      (r) => r.lead.name.toLowerCase().includes(q) || r.lead.phone.includes(q) || r.lead.preferredArea.toLowerCase().includes(q) || (r.tcm?.name ?? "").toLowerCase().includes(q)
    );
  }
  if (f.stage.length) out = out.filter((r) => f.stage.includes(r.lead.stage));
  if (f.source.length) out = out.filter((r) => f.source.includes(r.lead.source));
  if (f.assignedTo.length) out = out.filter((r) => f.assignedTo.includes(r.lead.assignedTcmId));
  if (f.zone.length) out = out.filter((r) => f.zone.includes(r.tcm?.zone ?? ""));
  if (f.status.length) out = out.filter((r) => f.status.includes(r.status));
  if (f.probBucket.length) {
    out = out.filter((r) => {
      const b = r.probability >= 70 ? "hot" : r.probability >= 40 ? "warm" : "cold";
      return f.probBucket.includes(b);
    });
  }
  if (f.hasVisit === true) out = out.filter((r) => r.hasVisit);
  if (f.hasVisit === false) out = out.filter((r) => !r.hasVisit);
  if (f.booked === true) out = out.filter((r) => r.booked);
  if (f.booked === false) out = out.filter((r) => !r.booked);
  if (f.dormant.length) out = out.filter((r) => r.dormantBucket && f.dormant.includes(r.dormantBucket));
  const [field, dir] = f.sort.split(":");
  const mul = dir === "asc" ? 1 : -1;
  out = [...out].sort((a, b) => {
    switch (field) {
      case "name":
        return mul * a.lead.name.localeCompare(b.lead.name);
      case "stage":
        return mul * a.lead.stage.localeCompare(b.lead.stage);
      case "prob":
        return mul * (a.probability - b.probability);
      case "value":
        return mul * (a.expectedValue - b.expectedValue);
      case "updated":
      default:
        return mul * (a.lastTouchTs - b.lastTouchTs);
    }
  });
  return out;
}
const STAGES = ["new", "contacted", "tour-scheduled", "tour-done", "negotiation", "booked", "dropped"];
const STATUSES = ["open", "booked", "lost", "dormant"];
const BUCKETS = ["cold", "warm", "hot"];
function AdminFilterBar({ filters, onChange, tcms, sources = [], stages = STAGES }) {
  const [savedViewName, setSavedViewName] = reactExports.useState("");
  const zones = reactExports.useMemo(() => Array.from(new Set(tcms.map((t) => t.zone))), [tcms]);
  const toggle = (key, value) => {
    const cur = filters[key];
    const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
    onChange({ ...filters, [key]: next });
  };
  const reset = () => onChange(defaultAdminFilters);
  const saveView = () => {
    if (!savedViewName.trim()) return;
    const views = JSON.parse(localStorage.getItem("admin.views") ?? "{}");
    views[savedViewName] = filters;
    localStorage.setItem("admin.views", JSON.stringify(views));
    setSavedViewName("");
  };
  const savedViews = reactExports.useMemo(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(localStorage.getItem("admin.views") ?? "{}");
    } catch {
      return {};
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/60 p-3 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search by name, phone, area, TCM…",
          value: filters.q,
          onChange: (e) => onChange({ ...filters, q: e.target.value }),
          className: "h-8 max-w-xs"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filters.sort, onValueChange: (v) => onChange({ ...filters, sort: v }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-44 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "updated:desc", children: "Last updated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "prob:desc", children: "Probability ↓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "prob:asc", children: "Probability ↑" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "value:desc", children: "Expected ₹ ↓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "name:asc", children: "Name A→Z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "stage:asc", children: "Stage" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: reset, className: "h-8 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3 mr-1" }),
        " Reset"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Save view as…", value: savedViewName, onChange: (e) => setSavedViewName(e.target.value), className: "h-8 w-40 text-xs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: saveView, className: "h-8 text-xs", children: "Save" }),
        Object.keys(savedViews).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (v) => onChange(savedViews[v]), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-32 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Load…" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.keys(savedViews).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: k, children: k }, k)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChipRow, { label: "Stage", values: stages, active: filters.stage, onToggle: (v) => toggle("stage", v) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChipRow, { label: "Status", values: STATUSES, active: filters.status, onToggle: (v) => toggle("status", v) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChipRow, { label: "Probability", values: BUCKETS, active: filters.probBucket, onToggle: (v) => toggle("probBucket", v) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ChipRow,
      {
        label: "TCM",
        values: tcms.map((t) => t.id),
        labels: Object.fromEntries(tcms.map((t) => [t.id, t.name])),
        active: filters.assignedTo,
        onToggle: (v) => toggle("assignedTo", v)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChipRow, { label: "Zone", values: zones, active: filters.zone, onToggle: (v) => toggle("zone", v) }),
    sources.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChipRow, { label: "Source", values: sources, active: filters.source, onToggle: (v) => toggle("source", v) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChipRow, { label: "Dormant", values: ["30d", "60d", "90d"], active: filters.dormant, onToggle: (v) => toggle("dormant", v) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Quick:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: filters.hasVisit === true ? "default" : "outline",
          className: "h-7 text-xs",
          onClick: () => onChange({ ...filters, hasVisit: filters.hasVisit === true ? void 0 : true }),
          children: "Has visit"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: filters.booked === true ? "default" : "outline",
          className: "h-7 text-xs",
          onClick: () => onChange({ ...filters, booked: filters.booked === true ? void 0 : true }),
          children: "Booked"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: filters.booked === false ? "default" : "outline",
          className: "h-7 text-xs",
          onClick: () => onChange({ ...filters, booked: filters.booked === false ? void 0 : false }),
          children: "Not booked"
        }
      )
    ] })
  ] });
}
function ChipRow({
  label,
  values,
  active,
  onToggle,
  labels
}) {
  if (!values.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-muted-foreground w-16", children: label }),
    values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => onToggle(v),
        className: cn(
          "text-[11px] px-2 py-0.5 rounded-full border transition-colors",
          active.includes(v) ? "bg-accent text-accent-foreground border-accent" : "bg-muted/40 text-muted-foreground border-border hover:bg-muted"
        ),
        children: labels?.[v] ?? v
      },
      v
    ))
  ] });
}
function AdminLeads() {
  const rows = useAdminRows();
  const {
    tcms,
    leads
  } = useApp();
  const [filters, setFilters] = reactExports.useState(defaultAdminFilters);
  const [selected, setSelected] = reactExports.useState(/* @__PURE__ */ new Set());
  const [drawer, setDrawer] = reactExports.useState(null);
  const sources = reactExports.useMemo(() => Array.from(new Set(leads.map((l) => l.source))), [leads]);
  const filtered = reactExports.useMemo(() => applyFilters(rows, filters), [rows, filters]);
  const toggle = (id) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };
  const exportRows = (fmt) => {
    const data = filtered.map((r) => ({
      name: r.lead.name,
      phone: r.lead.phone,
      source: r.lead.source,
      stage: r.lead.stage,
      tcm: r.tcm?.name ?? "",
      zone: r.tcm?.zone ?? "",
      area: r.lead.preferredArea,
      budget: r.lead.budget,
      probability: r.probability,
      expectedValue: r.expectedValue,
      status: r.status,
      whyNotClosed: r.whyNotClosed,
      tours: r.tours.length,
      visits: r.visits.length,
      calls: r.calls.length,
      lastObjection: r.lastObjection?.code ?? "",
      lastTouch: new Date(r.lastTouchTs).toISOString()
    }));
    const stamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    if (fmt === "csv") downloadCsv(`admin-leads-${stamp}.csv`, data);
    else if (fmt === "json") downloadJson(`admin-leads-${stamp}.json`, data);
    else if (fmt === "xlsx") downloadAdminWorkbook(`admin-leads-${stamp}.xlsx`, filtered).catch(() => toast.error("XLSX export failed"));
    else if (fmt === "pdf") downloadAdminPdf(`admin-report-${stamp}.pdf`, filtered).catch(() => toast.error("PDF export failed"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminShell, { title: "Master Lead Console", sub: `${filtered.length} of ${rows.length} leads · full control`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdminFilterBar, { filters, onChange: setFilters, tcms, sources }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/60 p-3 flex items-center justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: selected.size > 0 ? `${selected.size} selected` : "Select rows for bulk actions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        selected.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (tcmId) => {
          [...selected].forEach((id) => reassignLead(id, tcmId, "Bulk reassign"));
          setSelected(/* @__PURE__ */ new Set());
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-44 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Bulk reassign to…" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: tcms.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t.id, children: t.name }, t.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => exportRows("csv"), className: "h-8 text-xs", children: "CSV" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => exportRows("xlsx"), className: "h-8 text-xs", children: "XLSX" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => exportRows("pdf"), className: "h-8 text-xs", children: "PDF" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => exportRows("json"), className: "h-8 text-xs", children: "JSON" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto max-h-[60vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 sticky top-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: selected.size === filtered.length && filtered.length > 0, onChange: (e) => setSelected(e.target.checked ? new Set(filtered.map((r) => r.lead.id)) : /* @__PURE__ */ new Set()) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Stage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "TCM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Area" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", children: "Prob" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", children: "Exp ₹" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Why open" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", children: "T/V/C" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border hover:bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: selected.has(r.lead.id), onChange: () => toggle(r.lead.id) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDrawer(r), className: "font-medium hover:underline text-left", children: r.lead.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-mono", children: r.lead.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-muted", children: r.lead.stage }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", children: r.tcm?.name ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 truncate max-w-[120px]", children: r.lead.preferredArea }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right font-mono text-accent", children: [
            r.probability,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right font-mono", children: [
            "₹",
            (r.expectedValue / 1e3).toFixed(0),
            "k"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-[10px]", children: r.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-[10px] text-muted-foreground truncate max-w-[180px]", children: r.whyNotClosed }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right font-mono text-[10px]", children: [
            r.tours.length,
            "/",
            r.visits.length,
            "/",
            r.calls.length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-6 text-[10px]", onClick: () => forceCloseLead(r.lead.id, "won", r.lead.budget), children: "Won" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-6 text-[10px]", onClick: () => forceCloseLead(r.lead.id, "lost", "admin force-close"), children: "Lost" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-6 text-[10px]", onClick: () => {
              const note = prompt("Intervention note?");
              if (note) flagIntervention(r.lead.id, note);
            }, children: "Flag" })
          ] }) })
        ] }, r.lead.id)),
        !filtered.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 11, className: "p-6 text-center text-muted-foreground", children: "No leads match filters." }) })
      ] })
    ] }) }) }),
    drawer && /* @__PURE__ */ jsxRuntimeExports.jsx(LeadDrawer, { row: drawer, rows, onClose: () => setDrawer(null) })
  ] });
}
function LeadDrawer({
  row,
  rows,
  onClose
}) {
  const {
    tcms
  } = useApp();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-black/30", onClick: onClose }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-background border-l border-border overflow-auto p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-display font-semibold", children: row.lead.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground font-mono", children: row.lead.phone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onClose, children: "Close" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Stage", v: row.lead.stage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Probability", v: `${row.probability}%` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Status", v: row.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Expected ₹", v: `₹${row.expectedValue.toLocaleString("en-IN")}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "TCM", v: row.tcm?.name ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Area", v: row.lead.preferredArea }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Tours / Visits", v: `${row.tours.length} / ${row.visits.length}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Calls", v: row.calls.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border p-2 bg-muted/30 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: "Why open" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: row.whyNotClosed })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground mb-1", children: "Reassign TCM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (v) => reassignLead(row.lead.id, v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Pick TCM…" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: tcms.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: t.id, children: [
            t.name,
            " · ",
            t.zone
          ] }, t.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground mb-1", children: "Copy blocks (1-tap WhatsApp)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyChipRail, { blocks: buildLeadCopyBlocks(row, rows) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => forceCloseLead(row.lead.id, "won", row.lead.budget), children: "Force Won" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "destructive", onClick: () => forceCloseLead(row.lead.id, "lost", "admin"), children: "Force Lost" })
      ] }),
      row.objections.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground mb-1", children: "Objection history" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 text-xs", children: row.objections.slice(0, 5).map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o.code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: o.resolution })
        ] }, o.id)) })
      ] })
    ] })
  ] });
}
function Stat({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border p-2 bg-muted/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: v })
  ] });
}
export {
  AdminLeads as component
};
