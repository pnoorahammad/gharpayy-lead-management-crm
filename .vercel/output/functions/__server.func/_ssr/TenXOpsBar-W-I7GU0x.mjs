import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { Z as Dialog, _ as DialogTrigger, k as Button, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, B as Badge } from "./router-Brs45mHz.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { T as TrendingUp, p as Bell, f as Activity, bc as Sunrise, Z as Zap, bd as ClipboardCopy } from "../_libs/lucide-react.mjs";
function TenXOpsBar({ role, moved, breach, current, target, targetLabel, top5, stalled }) {
  const [lastRerank, setLastRerank] = reactExports.useState(() => Date.now());
  const [tick, setTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => t + 1);
      setLastRerank(Date.now());
    }, 6e4);
    return () => clearInterval(id);
  }, []);
  const ago = Math.max(0, Math.floor((Date.now() - lastRerank) / 1e3));
  const agoLabel = ago < 60 ? `${ago}s ago` : `${Math.floor(ago / 60)}m ago`;
  const progress = Math.min(100, Math.round(current / Math.max(target, 1) * 100));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/10 via-card to-success/5 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 md:gap-4 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-2.5 w-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-success animate-ping opacity-60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-success" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] uppercase tracking-[0.18em] text-muted-foreground font-semibold", children: [
            role,
            " · live"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-mono", children: [
            "re-rank ",
            agoLabel
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sep, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-md bg-success/15 text-success flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-[0.18em] text-muted-foreground font-semibold", children: "Streak" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-heading font-semibold leading-none", children: [
            moved,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground ml-1", children: "moved" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sep, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative h-9 w-9 rounded-md flex items-center justify-center ${breach > 0 ? "bg-danger/15 text-danger" : "bg-muted text-muted-foreground"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
          breach > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 h-2 w-2 rounded-full bg-danger animate-pulse" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-[0.18em] text-muted-foreground font-semibold", children: "SLA breach" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-base font-heading font-semibold leading-none ${breach > 0 ? "text-danger" : ""}`, children: [
            breach,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground ml-1", children: "items" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sep, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-[160px] flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-md bg-primary/15 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-[0.18em] text-muted-foreground font-semibold", children: targetLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono text-muted-foreground", children: [
              current,
              "/",
              target
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-primary to-success transition-all", style: { width: `${progress}%` } }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "gap-1.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sunrise, { className: "h-3.5 w-3.5" }),
          " Digest"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sunrise, { className: "h-4 w-4 text-primary" }),
            " ",
            role,
            " · today's digest"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Moved", value: moved }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Stalled", value: stalled.length, tone: "danger" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: targetLabel, value: `${current}/${target}`, tone: "primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1", children: "Next 5 actions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-1", children: [
                top5.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-xs text-muted-foreground italic", children: "Queue clear." }),
                top5.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-xs rounded-md border border-border bg-card p-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-5 w-5 rounded-full bg-primary/15 text-primary text-[10px] font-semibold flex items-center justify-center", children: i + 1 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", children: e.title }),
                    e.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground truncate", children: e.subtitle })
                  ] }),
                  e.tag && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px]", children: e.tag })
                ] }, e.id))
              ] })
            ] }),
            stalled.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-danger font-semibold mb-1", children: "Stalled — escalate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: stalled.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-xs rounded-md border border-danger/30 bg-danger/5 p-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3 text-danger" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", children: e.title }),
                  e.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground truncate", children: e.subtitle })
                ] }),
                e.tag && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] border-danger/40 text-danger", children: e.tag })
              ] }, e.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "w-full gap-1.5",
                onClick: () => {
                  const txt = `*${role} digest*
Moved: ${moved}  ·  Stalled: ${stalled.length}  ·  ${targetLabel}: ${current}/${target}

Next 5:
${top5.map((e, i) => `${i + 1}. ${e.title}${e.tag ? ` — ${e.tag}` : ""}`).join("\n") || "Queue clear."}${stalled.length ? `

Escalate:
${stalled.map((e) => `• ${e.title}${e.tag ? ` (${e.tag})` : ""}`).join("\n")}` : ""}`;
                  navigator.clipboard?.writeText(txt);
                  toast.success("Digest copied — paste into WhatsApp");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCopy, { className: "h-3.5 w-3.5" }),
                  " Copy digest for WhatsApp"
                ]
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Sep() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block h-8 w-px bg-border" });
}
function Stat({ label, value, tone = "default" }) {
  const cls = tone === "danger" ? "text-danger" : tone === "primary" ? "text-primary" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border p-2 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xl font-heading font-semibold ${cls}`, children: value })
  ] });
}
export {
  TenXOpsBar as T
};
