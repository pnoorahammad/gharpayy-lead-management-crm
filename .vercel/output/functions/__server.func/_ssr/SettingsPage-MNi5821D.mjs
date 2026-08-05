import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { a as useSettings, k as Button, T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent, C as Card, ap as CardContent, U as Label, X as Input, aq as CardHeader, ar as CardTitle, u as useApp, A as Textarea } from "./router-kYRMoTX_.mjs";
import { S as Slider } from "./slider-b3nZWa_t.mjs";
import { S as Switch } from "./switch-3VHV-rP2.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { aw as RotateCcw, S as Sparkles, bj as Settings2, bk as MessageSquareText, y as Target, ay as BellRing, B as Building2, O as MapPin, ao as Trash2, d as Users, t as Plus, bl as Lightbulb } from "../_libs/lucide-react.mjs";
function SettingsPage() {
  const { settings, update, reset, upsertTemplate, removeTemplate } = useSettings();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", children: "CRM Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Matching behavior, drawer behavior, messaging, reminders, scoring, custom fields and targets. Stored locally." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => {
        reset();
        toast.success("Settings reset");
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "mr-1 h-4 w-4" }),
        " Reset all"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: Sparkles, label: "Top matches shown", value: String(settings.matching.topMatchCount), sub: "inside lead drawer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: Settings2, label: "Default lead tab", value: settings.matching.drawerDefaultTab === "best-fit" ? "Best Fit" : "Control", sub: "when no active tour exists" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: MessageSquareText, label: "Templates", value: String(settings.templates.length), sub: "active WhatsApp flows" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: Target, label: "Targets", value: String(settings.targets.length), sub: "custom KPI rules" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "matching", className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid h-auto w-full grid-cols-2 gap-1 md:grid-cols-4 xl:grid-cols-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "matching", children: "Matching & drawer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "zones", children: "Zones & team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "templates", children: "Message templates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "branding", children: "Branding" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "weights", children: "Score weights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "reminders", children: "Reminder timing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "custom", children: "Custom fields & lists" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "targets", children: "Targets & roadmap" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "matching", className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MatchingEditor, { matching: settings.matching, onChange: (v) => update("matching", v) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "matching", className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MatchingEditor, { matching: settings.matching, onChange: (v) => update("matching", v) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "zones", className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZonesEditor, { zones: settings.zones, onChange: (v) => update("zones", v) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "templates", className: "space-y-3", children: [
        settings.templates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TemplateEditor, { t, onSave: upsertTemplate, onDelete: () => removeTemplate(t.id) }, t.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NewTemplate, { onAdd: upsertTemplate })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "branding", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Site name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: settings.siteName, onChange: (e) => update("siteName", e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Signature line" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: settings.signatureLine, onChange: (e) => update("signatureLine", e.target.value) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "weights", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WeightsEditor, { weights: settings.weights, onChange: (w) => update("weights", w) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "reminders", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Pre-tour reminder offsets (minutes before tour, comma-separated)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: settings.reminders.beforeTourMinutes.join(", "),
              onChange: (e) => update("reminders", {
                ...settings.reminders,
                beforeTourMinutes: e.target.value.split(",").map((s) => parseInt(s.trim(), 10)).filter(Number.isFinite)
              })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Post-booking follow-up if no reply (minutes, comma-separated)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: settings.reminders.postBookingFollowupMinutes.join(", "),
              onChange: (e) => update("reminders", {
                ...settings.reminders,
                postBookingFollowupMinutes: e.target.value.split(",").map((s) => parseInt(s.trim(), 10)).filter(Number.isFinite)
              })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "These reminders are surfaced as execution timing in the CRM." })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "custom", className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ListEditor, { title: "Areas", items: settings.customAreas, onChange: (v) => update("customAreas", v), placeholder: "Koramangala" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ListEditor, { title: "Objection tags", items: settings.customObjections, onChange: (v) => update("customObjections", v), placeholder: "Too expensive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ListEditor, { title: "Custom outcomes", items: settings.customOutcomes, onChange: (v) => update("customOutcomes", v), placeholder: "Token paid via UPI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyEditor, { items: settings.customProperties, onChange: (v) => update("customProperties", v) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TcmEditor, { items: settings.customTcms, onChange: (v) => update("customTcms", v) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CustomFieldsEditor, { fields: settings.customFields, onChange: (v) => update("customFields", v) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "targets", className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TargetsEditor, { targets: settings.targets, onChange: (v) => update("targets", v) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RoadmapCard, {})
      ] })
    ] })
  ] });
}
function SummaryCard({
  icon: Icon,
  label,
  value,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex items-start gap-3 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-border bg-muted/40 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-accent" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-semibold", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: sub })
    ] })
  ] }) });
}
function MatchingEditor({ matching, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-[1.2fr_0.8fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Lead drawer behavior" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Best-fit properties shown per lead" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: matching.topMatchCount })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              value: [matching.topMatchCount],
              onValueChange: ([value]) => onChange({ ...matching, topMatchCount: value }),
              min: 3,
              max: 8,
              step: 1
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Default tab when a lead opens and no active tour exists" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: matching.drawerDefaultTab,
              onChange: (e) => onChange({ ...matching, drawerDefaultTab: e.target.value }),
              className: "h-10 w-full rounded-md border border-border bg-background px-3 text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "best-fit", children: "Best Fit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "control", children: "Control" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SwitchRow,
            {
              label: "Auto-expand top property",
              hint: "Open the first match with more details right away.",
              checked: matching.autoExpandTopMatch,
              onCheckedChange: (checked) => onChange({ ...matching, autoExpandTopMatch: checked })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SwitchRow,
            {
              label: "Show score breakdown",
              hint: "Expose area, budget, audience and quality signals.",
              checked: matching.showScoreBreakdown,
              onCheckedChange: (checked) => onChange({ ...matching, showScoreBreakdown: checked })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SwitchRow,
            {
              label: "Show amenities preview",
              hint: "Keep quick amenities visible on collapsed cards.",
              checked: matching.showAmenitiesPreview,
              onCheckedChange: (checked) => onChange({ ...matching, showAmenitiesPreview: checked })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SwitchRow,
            {
              label: "Show manager contact actions",
              hint: "Allow fast manager call and WhatsApp from the drawer.",
              checked: matching.showManagerContacts,
              onCheckedChange: (checked) => onChange({ ...matching, showManagerContacts: checked })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SwitchRow,
            {
              label: "Show maps CTA",
              hint: "Expose property map links directly in Best Fit.",
              checked: matching.showMapsAction,
              onCheckedChange: (checked) => onChange({ ...matching, showMapsAction: checked })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "What this changes live" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mt-0.5 h-4 w-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Lead drawer now opens to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: matching.drawerDefaultTab === "best-fit" ? "Best Fit" : "Control" }),
            " when there is no live tour."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BellRing, { className: "mt-0.5 h-4 w-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            matching.topMatchCount,
            " ranked properties are surfaced per lead for faster pitching."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "mt-0.5 h-4 w-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Expanded property previews can include amenities, maps, manager contacts and score rationale." })
        ] })
      ] })
    ] })
  ] });
}
function SwitchRow({
  label,
  hint,
  checked,
  onCheckedChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 rounded-lg border border-border bg-muted/20 p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: hint })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked, onCheckedChange })
  ] });
}
function TemplateEditor({ t, onSave, onDelete }) {
  const [draft, setDraft] = reactExports.useState(t);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.label, onChange: (e) => setDraft({ ...draft, label: e.target.value }), className: "max-w-xs font-medium" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => {
          onSave(draft);
          toast.success("Saved");
        }, children: "Save" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onDelete, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.scenario, onChange: (e) => setDraft({ ...draft, scenario: e.target.value }), placeholder: "When to send" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: draft.body, onChange: (e) => setDraft({ ...draft, body: e.target.value }), rows: 6, className: "font-mono text-xs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
        "Variables: ",
        "{{leadName}} {{propertyName}} {{area}} {{when}} {{tcmName}} {{tcmPhone}} {{budget}} {{workLocation}} {{mapsLink}} {{etaMinutes}} {{otp}} {{siteName}} {{signature}}"
      ] })
    ] })
  ] });
}
function NewTemplate({ onAdd }) {
  const [draft, setDraft] = reactExports.useState({ id: "", label: "", scenario: "", body: "" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "+ Add new template" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "ID (e.g. weekend_special)", value: draft.id, onChange: (e) => setDraft({ ...draft, id: e.target.value.replace(/\s+/g, "_") }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Label", value: draft.label, onChange: (e) => setDraft({ ...draft, label: e.target.value }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Scenario", value: draft.scenario, onChange: (e) => setDraft({ ...draft, scenario: e.target.value }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Body with {{variables}}", rows: 4, value: draft.body, onChange: (e) => setDraft({ ...draft, body: e.target.value }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => {
      if (!draft.id || !draft.label || !draft.body) return toast.error("ID, label and body required");
      onAdd(draft);
      setDraft({ id: "", label: "", scenario: "", body: "" });
      toast.success("Added");
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
      " Add"
    ] })
  ] }) });
}
function WeightsEditor({ weights, onChange }) {
  const total = Object.values(weights).reduce((s, n) => s + n, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
      "Total weight: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: total }),
      " (recommended ~100)"
    ] }),
    Object.keys(weights).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "capitalize", children: k.replace(/([A-Z])/g, " $1") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: weights[k], onChange: (e) => onChange({ ...weights, [k]: parseInt(e.target.value, 10) || 0 }) })
    ] }, k))
  ] }) });
}
function ListEditor({ title, items, onChange, placeholder }) {
  const [v, setV] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-xs", children: [
      it,
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onChange(items.filter((_, idx) => idx !== i)), className: "hover:text-destructive", children: "×" })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: v, onChange: (e) => setV(e.target.value), placeholder }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => {
        if (v.trim()) {
          onChange([...items, v.trim()]);
          setV("");
        }
      }, children: "Add" })
    ] })
  ] }) });
}
function PropertyEditor({ items, onChange }) {
  const [d, setD] = reactExports.useState({ name: "", area: "", basePrice: 12e3 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "Custom properties" }),
    items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b py-1 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", children: [
        p.name,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "· ",
          p.area,
          " · ₹",
          p.basePrice.toLocaleString("en-IN")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onChange(items.filter((x) => x.id !== p.id)), className: "text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
    ] }, p.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Name", value: d.name, onChange: (e) => setD({ ...d, name: e.target.value }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Area", value: d.area, onChange: (e) => setD({ ...d, area: e.target.value }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", placeholder: "Base price", value: d.basePrice, onChange: (e) => setD({ ...d, basePrice: parseInt(e.target.value, 10) || 0 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => {
      if (!d.name) return;
      onChange([...items, { id: `cp${Date.now()}`, ...d }]);
      setD({ name: "", area: "", basePrice: 12e3 });
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
      " Add property"
    ] })
  ] }) });
}
function TcmEditor({ items, onChange }) {
  const [d, setD] = reactExports.useState({ name: "", phone: "", zoneId: "" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "Custom TCMs / coordinators" }),
    items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b py-1 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", children: [
        p.name,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "· ",
          p.phone,
          " · zone ",
          p.zoneId
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onChange(items.filter((x) => x.id !== p.id)), className: "text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
    ] }, p.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Name", value: d.name, onChange: (e) => setD({ ...d, name: e.target.value }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Phone", value: d.phone, onChange: (e) => setD({ ...d, phone: e.target.value }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Zone id", value: d.zoneId, onChange: (e) => setD({ ...d, zoneId: e.target.value }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => {
      if (!d.name) return;
      onChange([...items, { id: `tcm${Date.now()}`, ...d }]);
      setD({ name: "", phone: "", zoneId: "" });
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
      " Add TCM"
    ] })
  ] }) });
}
function CustomFieldsEditor({ fields, onChange }) {
  const [d, setD] = reactExports.useState({ id: "", label: "", type: "text", appliesTo: "tour" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "Custom fields" }),
    fields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b py-1 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", children: [
        f.label,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "· ",
          f.type,
          " · ",
          f.appliesTo
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onChange(fields.filter((x) => x.id !== f.id)), className: "text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
    ] }, f.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Label", value: d.label, onChange: (e) => setD({ ...d, label: e.target.value }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: d.type, onChange: (e) => setD({ ...d, type: e.target.value }), className: "h-10 rounded border bg-background px-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "text", children: "text" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "number", children: "number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "select", children: "select" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "boolean", children: "boolean" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: d.appliesTo, onChange: (e) => setD({ ...d, appliesTo: e.target.value }), className: "h-10 rounded border bg-background px-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "tour", children: "tour" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "property", children: "property" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "lead", children: "lead" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => {
        if (!d.label) return;
        onChange([...fields, { ...d, id: `f${Date.now()}` }]);
        setD({ id: "", label: "", type: "text", appliesTo: "tour" });
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
        " Add"
      ] })
    ] })
  ] }) });
}
function TargetsEditor({ targets, onChange }) {
  const [d, setD] = reactExports.useState({ id: "", label: "", metric: "tours", scope: "global", value: 100, period: "week" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: "Custom targets" }),
    targets.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b py-1 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", children: [
        t.label,
        ": ",
        t.value,
        " ",
        t.metric,
        "/",
        t.period,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "· scope ",
          t.scope,
          t.scopeId ? ":" + t.scopeId : ""
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onChange(targets.filter((x) => x.id !== t.id)), className: "text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
    ] }, t.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 md:grid-cols-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Label", value: d.label, onChange: (e) => setD({ ...d, label: e.target.value }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: d.metric, onChange: (e) => setD({ ...d, metric: e.target.value }), className: "h-10 rounded border bg-background px-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "tours", children: "tours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "showups", children: "showups" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bookings", children: "bookings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "score", children: "score" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: d.scope, onChange: (e) => setD({ ...d, scope: e.target.value }), className: "h-10 rounded border bg-background px-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "global", children: "global" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "tcm", children: "tcm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "zone", children: "zone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "property", children: "property" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Scope id (optional)", value: d.scopeId ?? "", onChange: (e) => setD({ ...d, scopeId: e.target.value }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: d.value, onChange: (e) => setD({ ...d, value: parseInt(e.target.value, 10) || 0 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: d.period, onChange: (e) => setD({ ...d, period: e.target.value }), className: "h-10 rounded border bg-background px-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "day", children: "day" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "week", children: "week" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "month", children: "month" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => {
      if (!d.label) return;
      onChange([...targets, { ...d, id: `tg${Date.now()}` }]);
      setD({ id: "", label: "", metric: "tours", scope: "global", value: 100, period: "week" });
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
      " Add target"
    ] })
  ] }) });
}
function ZonesEditor({ zones, onChange }) {
  const { tcms } = useApp();
  const [draft, setDraft] = reactExports.useState({ id: "", name: "", city: "Bangalore", flowOpsLeadName: "", flowOpsLeadPhone: "", tcmIds: [] });
  const upsert = (z) => onChange(zones.map((x) => x.id === z.id ? z : x));
  const remove = (id) => onChange(zones.filter((x) => x.id !== id));
  const add = () => {
    const name = draft.name.trim();
    if (!name) return toast.error("Zone name required");
    const id = draft.id.trim() || `z-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    if (zones.some((x) => x.id === id)) return toast.error("Zone id exists");
    onChange([...zones, { ...draft, id, name }]);
    setDraft({ id: "", name: "", city: "Bangalore", flowOpsLeadName: "", flowOpsLeadPhone: "", tcmIds: [] });
    toast.success("Zone added");
  };
  const toggleTcm = (z, tcmId) => {
    const tcmIds = z.tcmIds.includes(tcmId) ? z.tcmIds.filter((x) => x !== tcmId) : [...z.tcmIds, tcmId];
    upsert({ ...z, tcmIds });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 text-accent" }),
        " Org structure — Bangalore zones"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Each zone owns a Flow Ops lead and a roster of TCMs. Routing rule R04 uses this map to auto-assign new leads. Edit a zone or add a new one — changes apply immediately across the CRM." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 lg:grid-cols-2", children: zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: z.name, onChange: (e) => upsert({ ...z, name: e.target.value }), className: "h-8 max-w-[200px] font-medium" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded border border-border bg-muted/30 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground", children: z.city })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => remove(z.id), className: "h-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", children: "Flow Ops lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: z.flowOpsLeadName ?? "", onChange: (e) => upsert({ ...z, flowOpsLeadName: e.target.value }), placeholder: "Name", className: "h-8" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: z.flowOpsLeadPhone ?? "", onChange: (e) => upsert({ ...z, flowOpsLeadPhone: e.target.value }), placeholder: "9000010000", className: "h-8" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px] flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3" }),
          " TCMs in this zone"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap gap-1.5", children: [
          tcms.map((t) => {
            const on = z.tcmIds.includes(t.id);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => toggleTcm(z, t.id),
                className: "rounded-full border px-2 py-0.5 text-[11px] transition " + (on ? "border-accent bg-accent/15 text-accent" : "border-border bg-muted/20 text-muted-foreground hover:border-accent/40"),
                children: t.name
              },
              t.id
            );
          }),
          tcms.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "No TCMs in store yet." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", children: "Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: z.notes ?? "", onChange: (e) => upsert({ ...z, notes: e.target.value }), rows: 2, className: "text-xs" })
      ] })
    ] }) }, z.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "+ Add new zone" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "grid gap-2 p-4 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Zone name (e.g. HSR Layout)", value: draft.name, onChange: (e) => setDraft({ ...draft, name: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "City", value: draft.city, onChange: (e) => setDraft({ ...draft, city: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Flow Ops lead name", value: draft.flowOpsLeadName ?? "", onChange: (e) => setDraft({ ...draft, flowOpsLeadName: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Lead phone", value: draft.flowOpsLeadPhone ?? "", onChange: (e) => setDraft({ ...draft, flowOpsLeadPhone: e.target.value }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: add, className: "md:col-span-4 md:w-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
          " Add zone"
        ] })
      ] })
    ] })
  ] });
}
function RoadmapCard() {
  const items = [
    { title: "Zone P&L dashboard", body: "Per-zone bookings, conversion %, supply utilisation. Compare Koramangala vs Whitefield in one screen." },
    { title: "Flow-Ops daily standup view", body: "Auto-generated 8am brief: open leads, SLA breaches, top-3 hot rooms, TCMs at risk of missing target." },
    { title: "TCM mobile mode", body: "Compact, action-first UI for on-tour TCMs — start tour, capture feedback, request block, all in 3 taps." },
    { title: "Owner-facing pipeline", body: "Show each owner the count of qualified leads currently being pitched into their property — drives compliance." },
    { title: "PDF auto-attach over WhatsApp Cloud API", body: "Replace Drive deep-link with native PDF send via Meta WhatsApp Business API. Per-message audit trail." },
    { title: "Conversion learning loop", body: "Track which Plan A vs Plan B converted and feed back into matcher weights per zone, persona and budget band." },
    { title: "Lead scoring v2 with intent decay", body: "Decay confidence the longer a lead is unattended; auto-revive with Coach scripts at week 1, 2 and 4." },
    { title: "Bulk WhatsApp broadcast guardrails", body: "Throttle, dedupe and template-validate broadcasts so HR can run nudges without burning the customer relationship." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-4 w-4 text-accent" }),
        " What I recommend next"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Plan-of-record for the next iterations. Optimised for your zone-led org (Bangalore zones → Flow Ops lead → TCM roster). Items can be triaged here and converted into work." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "grid gap-2 md:grid-cols-2", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-muted/10 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground", children: it.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: it.body })
    ] }, it.title)) })
  ] });
}
export {
  SettingsPage as S
};
