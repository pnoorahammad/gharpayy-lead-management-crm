import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useApp, B as Badge, k as Button, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, q as cn, X as Input, A as Textarea } from "./router-kYRMoTX_.mjs";
import { Q as useNotifications } from "./AppShell-Cp2f_YYK.mjs";
import { a as activePersona, b as PERSONAS } from "./personas-DYCrD02E.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { bn as Megaphone, X, aU as UsersRound, p as Bell, at as ListTodo, au as CalendarDays, aq as Mail, K as Send } from "../_libs/lucide-react.mjs";
const ALL_ROLES = ["tcm", "flow-ops", "hr", "owner"];
function HRBroadcastComposer({ defaultOpen = false }) {
  const role = useApp((s) => s.role);
  useApp((s) => s.currentTcmId);
  if (role !== "hr") return null;
  const senderPersona = activePersona("hr", void 0);
  const pushBroadcast = useNotifications((s) => s.pushBroadcast);
  const [open, setOpen] = reactExports.useState(defaultOpen);
  const [mode, setMode] = reactExports.useState("role");
  const [targetRole, setTargetRole] = reactExports.useState("tcm");
  const [targetIds, setTargetIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [channels, setChannels] = reactExports.useState(/* @__PURE__ */ new Set(["in-app", "todo", "email"]));
  const [severity, setSeverity] = reactExports.useState("warn");
  const [title, setTitle] = reactExports.useState("");
  const [body, setBody] = reactExports.useState("");
  const [dueIn, setDueIn] = reactExports.useState("4");
  const peopleByRole = reactExports.useMemo(() => {
    const m = { tcm: [], "flow-ops": [], hr: [], owner: [], admin: [] };
    PERSONAS.forEach((p) => m[p.role].push(p));
    return m;
  }, []);
  const recipients = reactExports.useMemo(() => {
    if (mode === "role") {
      return peopleByRole[targetRole].map((p) => ({ role: p.role, id: p.id, name: p.name }));
    }
    return PERSONAS.filter((p) => targetIds.has(p.id)).map((p) => ({ role: p.role, id: p.id, name: p.name }));
  }, [mode, targetRole, targetIds, peopleByRole]);
  const toggleChannel = (c) => {
    setChannels((prev) => {
      const next = new Set(prev);
      next.has(c) ? next.delete(c) : next.add(c);
      if (next.size === 0) next.add("in-app");
      return next;
    });
  };
  const togglePerson = (id) => {
    setTargetIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };
  const send = () => {
    if (!title.trim() || !body.trim() || recipients.length === 0) {
      toast.error("Add a title, message, and at least one recipient.");
      return;
    }
    const dueAt = channels.has("calendar") || channels.has("todo") ? Date.now() + Number(dueIn || 0) * 3600 * 1e3 : void 0;
    const ids = pushBroadcast({
      senderId: senderPersona.id,
      senderName: senderPersona.name,
      recipients,
      channels: Array.from(channels),
      severity,
      title: title.trim(),
      body: body.trim(),
      dueAt,
      href: "/inbox"
    });
    toast.success(`Broadcast sent to ${recipients.length} recipient${recipients.length === 1 ? "" : "s"}`, {
      description: `${ids.length} entries — ${Array.from(channels).join(" · ")}`
    });
    setTitle("");
    setBody("");
    setOpen(false);
  };
  if (!open) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        className: "w-full flex items-center justify-between rounded-lg border border-dashed border-accent/40 bg-accent/5 px-4 py-3 text-left hover:bg-accent/10 transition",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-sm font-medium text-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-4 w-4" }),
            "Broadcast to the team"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "In-app · Todo · Calendar · Email" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-4 w-4 text-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", children: "HR Broadcast" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "ml-auto text-[10px] font-mono", children: [
        "from ",
        senderPersona.name.split(" ")[0]
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "h-7 w-7 p-0", onClick: () => setOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", children: [
        "Recipients · ",
        recipients.length,
        " selected"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: mode === "role" ? "default" : "outline",
            size: "sm",
            className: "h-7",
            onClick: () => setMode("role"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { className: "h-3 w-3 mr-1" }),
              " Whole role"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: mode === "people" ? "default" : "outline",
            size: "sm",
            className: "h-7",
            onClick: () => setMode("people"),
            children: "Pick people"
          }
        )
      ] }),
      mode === "role" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: targetRole, onValueChange: (v) => setTargetRole(v), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ALL_ROLES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: r, children: [
          labelForRole(r),
          " (",
          peopleByRole[r].length,
          ")"
        ] }, r)) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1 max-h-44 overflow-auto rounded-md border border-border p-2", children: PERSONAS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => togglePerson(p.id),
          className: cn(
            "text-left text-[11px] rounded px-2 py-1 border",
            targetIds.has(p.id) ? "border-accent/40 bg-accent/10 text-accent" : "border-transparent hover:bg-muted"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground truncate", children: [
              labelForRole(p.role),
              " · ",
              p.focus
            ] })
          ]
        },
        p.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", children: "Channels" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: [
        { c: "in-app", icon: Bell, label: "In-app" },
        { c: "todo", icon: ListTodo, label: "Todo" },
        { c: "calendar", icon: CalendarDays, label: "Calendar" },
        { c: "email", icon: Mail, label: "Email (queued)" }
      ].map(({ c, icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => toggleChannel(c),
          className: cn(
            "inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px]",
            channels.has(c) ? "border-accent/40 bg-accent/10 text-accent" : "border-border text-muted-foreground hover:bg-muted"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3" }),
            " ",
            label
          ]
        },
        c
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1", children: "Priority" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: severity, onValueChange: (v) => setSeverity(v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "info", children: "Info" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "success", children: "Success" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "warn", children: "Warning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "urgent", children: "Urgent" })
          ] })
        ] })
      ] }),
      (channels.has("calendar") || channels.has("todo")) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1", children: "Due in (hrs)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            min: 0,
            value: dueIn,
            onChange: (e) => setDueIn(e.target.value),
            className: "h-8 text-xs"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: title,
        onChange: (e) => setTitle(e.target.value),
        placeholder: "Headline · e.g. New post-tour SLA: 60 minutes",
        className: "text-sm"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Textarea,
      {
        value: body,
        onChange: (e) => setBody(e.target.value),
        placeholder: "Spell out the change, the why, and what each person should do.",
        rows: 3,
        className: "text-sm"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
        channels.has("email") && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2", children: "📧 Email queued — backend will send" }),
        channels.has("calendar") && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2", children: "📅 Lands on /calendar" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: send, size: "sm", className: "h-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5 mr-1.5" }),
        "Send to ",
        recipients.length
      ] })
    ] })
  ] });
}
function labelForRole(r) {
  return r === "tcm" ? "TCMs" : r === "flow-ops" ? "Flow Ops" : r === "hr" ? "HR" : "Owners";
}
export {
  HRBroadcastComposer as H
};
