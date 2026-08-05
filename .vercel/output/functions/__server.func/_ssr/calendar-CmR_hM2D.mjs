import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, G as Sheet, H as SheetContent, J as SheetHeader, M as SheetTitle, O as SheetDescription } from "./AppShell-qrUFATK5.mjs";
import { u as useApp, aA as useCalendar, B as Badge, X as Input, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, az as KIND_META, k as Button, T as Tabs, h as TabsList, j as TabsTrigger, q as cn, Z as Dialog, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, U as Label, A as Textarea, a2 as DialogFooter } from "./router-Brs45mHz.mjs";
import { S as Switch } from "./switch-G7-vbv5u.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { S as Separator } from "./separator-BWKrsKfl.mjs";
import "../_libs/react-dom.mjs";
import { au as CalendarDays, $ as Search, bj as Settings2, t as Plus, bg as ChevronLeft, q as ChevronRight, x as Calendar, O as MapPin, d as Users, aA as ExternalLink, ao as Trash2, bq as Link2, aR as RefreshCw, br as Upload, j as Copy, am as Download } from "../_libs/lucide-react.mjs";
import { f as format, d as addMonths, e as addDays, g as isSameMonth, a as isToday, h as isSameDay, j as startOfWeek, k as startOfMonth, l as endOfWeek, m as endOfMonth } from "../_libs/date-fns.mjs";
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
import "../_libs/radix-ui__react-separator.mjs";
function monthGrid(focus) {
  const start = startOfWeek(startOfMonth(focus), { weekStartsOn: 0 });
  const end = endOfWeek(endOfMonth(focus), { weekStartsOn: 0 });
  const out = [];
  let d = start;
  while (d <= end) {
    out.push(d);
    d = addDays(d, 1);
  }
  return out;
}
function weekDays(focus) {
  const start = startOfWeek(focus, { weekStartsOn: 0 });
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}
function eventsForDay(events, day) {
  return events.filter((e) => isSameDay(new Date(e.start), day) || isWithinSpan(e, day)).sort((a, b) => +new Date(a.start) - +new Date(b.start));
}
function isWithinSpan(e, day) {
  const s = new Date(e.start);
  const en = new Date(e.end);
  return day >= new Date(s.getFullYear(), s.getMonth(), s.getDate()) && day <= en;
}
function navigate(view, focus, dir) {
  if (view === "month") return addMonths(focus, dir);
  if (view === "week") return addDays(focus, 7 * dir);
  return addDays(focus, dir);
}
function headerLabel(view, focus) {
  if (view === "month") return format(focus, "MMMM yyyy");
  if (view === "week") {
    const days = weekDays(focus);
    return `${format(days[0], "MMM d")} – ${format(days[6], "MMM d, yyyy")}`;
  }
  return format(focus, "EEEE, MMMM d, yyyy");
}
const HOURS = Array.from({ length: 24 }, (_, i) => i);
function minutesFromMidnight(iso) {
  const d = new Date(iso);
  return d.getHours() * 60 + d.getMinutes();
}
function durationMinutes(e) {
  return Math.max(15, (+new Date(e.end) - +new Date(e.start)) / 6e4);
}
function toLocalInput(iso) {
  const d = new Date(iso);
  const tz = d.getTimezoneOffset();
  const local = new Date(d.getTime() - tz * 6e4);
  return local.toISOString().slice(0, 16);
}
function fromLocalInput(value) {
  return new Date(value).toISOString();
}
function MonthView({ focus, events, onEventClick, onDayClick, selectedDay }) {
  const days = monthGrid(focus);
  const headers = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full overflow-hidden border rounded-lg bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 border-b bg-muted/40", children: headers.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-2 text-xs font-medium text-muted-foreground text-center", children: h }, h)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 grid-rows-6 flex-1 min-h-0", children: days.map((d) => {
      const inMonth = isSameMonth(d, focus);
      const today = isToday(d);
      const selected = selectedDay && isSameDay(d, selectedDay);
      const dayEvents = eventsForDay(events, d);
      const visible = dayEvents.slice(0, 3);
      const overflow = dayEvents.length - visible.length;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => onDayClick(d),
          className: cn(
            "border-b border-r p-1.5 text-left flex flex-col gap-1 min-h-0 hover:bg-accent/40 transition-colors",
            !inMonth && "bg-muted/20 text-muted-foreground",
            selected && "ring-2 ring-inset ring-primary"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "inline-flex items-center justify-center text-xs font-medium h-6 w-6 rounded-full",
                  today && "bg-primary text-primary-foreground"
                ),
                children: format(d, "d")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5 overflow-hidden", children: [
              visible.map((e) => {
                const m = KIND_META[e.kind];
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    onClick: (ev) => {
                      ev.stopPropagation();
                      onEventClick(e);
                    },
                    className: cn(
                      "truncate rounded px-1.5 py-0.5 text-[11px] cursor-pointer",
                      m.bg,
                      m.text
                    ),
                    title: e.title,
                    children: [
                      !e.allDay && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-70 mr-1", children: format(new Date(e.start), "h:mma").toLowerCase() }),
                      e.title
                    ]
                  },
                  e.id
                );
              }),
              overflow > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground pl-1", children: [
                "+",
                overflow,
                " more"
              ] })
            ] })
          ]
        },
        d.toISOString()
      );
    }) })
  ] });
}
const SLOT_PX = 48;
function TimeGridView({ focus, events, view, onEventClick, onSlotClick }) {
  const days = view === "week" ? weekDays(focus) : [focus];
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = SLOT_PX * 7;
    }
  }, []);
  const now = /* @__PURE__ */ new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 border rounded-lg bg-card overflow-hidden flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid border-b", style: { gridTemplateColumns: `60px repeat(${days.length}, 1fr)` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      days.map((d) => {
        const today = isToday(d);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l px-2 py-2 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase", children: format(d, "EEE") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "mx-auto mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full text-lg font-semibold",
                today && "bg-primary text-primary-foreground"
              ),
              children: format(d, "d")
            }
          )
        ] }, d.toISOString());
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid relative", style: { gridTemplateColumns: `60px repeat(${days.length}, 1fr)` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: HOURS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-[10px] text-muted-foreground text-right pr-2 border-b",
          style: { height: SLOT_PX },
          children: h === 0 ? "" : format(new Date(2024, 0, 1, h), "h a")
        },
        h
      )) }),
      days.map((d) => {
        const dayEvents = eventsForDay(events, d).filter((e) => !e.allDay);
        const showNowLine = isSameDay(d, now);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-l", children: [
          HOURS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "border-b cursor-pointer hover:bg-accent/30",
              style: { height: SLOT_PX },
              onClick: () => {
                const slot = new Date(d);
                slot.setHours(h, 0, 0, 0);
                onSlotClick(slot);
              }
            },
            h
          )),
          showNowLine && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "pointer-events-none absolute left-0 right-0 z-10 flex items-center",
              style: { top: currentMinutes / 60 * SLOT_PX },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-red-500 -ml-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-red-500" })
              ]
            }
          ),
          dayEvents.map((e) => {
            const top = minutesFromMidnight(e.start) / 60 * SLOT_PX;
            const height = Math.max(20, durationMinutes(e) / 60 * SLOT_PX - 2);
            const m = KIND_META[e.kind];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: (ev) => {
                  ev.stopPropagation();
                  onEventClick(e);
                },
                className: cn(
                  "absolute left-1 right-1 rounded-md px-2 py-1 text-left text-xs overflow-hidden border",
                  m.bg,
                  m.text
                ),
                style: { top, height, borderColor: m.color },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", children: e.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "opacity-70 truncate", children: [
                    format(new Date(e.start), "h:mma").toLowerCase(),
                    " – ",
                    format(new Date(e.end), "h:mma").toLowerCase()
                  ] }),
                  e.location && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-70 truncate", children: e.location })
                ]
              },
              e.id
            );
          })
        ] }, d.toISOString());
      })
    ] }) })
  ] });
}
function AgendaView({ events, onEventClick }) {
  const upcoming = events.filter((e) => new Date(e.end) >= new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0))).sort((a, b) => +new Date(a.start) - +new Date(b.start)).slice(0, 50);
  if (upcoming.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center text-sm text-muted-foreground border rounded-lg bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-8 w-8 mx-auto mb-3 opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No upcoming events." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "Press “New event” to add one." })
    ] }) });
  }
  const groups = /* @__PURE__ */ new Map();
  for (const e of upcoming) {
    const k = format(new Date(e.start), "yyyy-MM-dd");
    const arr = groups.get(k) ?? [];
    arr.push(e);
    groups.set(k, arr);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto border rounded-lg bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y", children: Array.from(groups.entries()).map(([key, list]) => {
    const day = /* @__PURE__ */ new Date(key + "T00:00:00");
    const today = isSameDay(day, /* @__PURE__ */ new Date());
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("sticky top-0 bg-card/90 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-wide", today ? "text-primary" : "text-muted-foreground"), children: [
        format(day, "EEEE, MMMM d"),
        today && " · Today"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: list.map((e) => {
        const m = KIND_META[e.kind];
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => onEventClick(e),
            className: "w-full flex items-start gap-3 px-4 py-3 text-left hover:bg-accent/40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 inline-block h-3 w-3 rounded-full flex-shrink-0", style: { background: m.color } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium truncate", children: e.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: e.allDay ? "All day" : `${format(new Date(e.start), "h:mma").toLowerCase()} – ${format(new Date(e.end), "h:mma").toLowerCase()}` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 text-xs text-muted-foreground mt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("rounded px-1.5 py-0.5", m.bg, m.text), children: m.label }),
                  e.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                    e.location
                  ] }),
                  e.attendees && e.attendees.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3" }),
                    e.attendees.length
                  ] }),
                  e.externalSource && e.externalSource !== "local" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-wide", children: e.externalSource })
                ] })
              ] })
            ]
          }
        ) }, e.id);
      }) })
    ] }, key);
  }) }) });
}
const fold = (line) => {
  if (line.length <= 73) return line;
  const chunks = [];
  for (let i = 0; i < line.length; i += 73) chunks.push(line.slice(i, i + 73));
  return chunks.join("\r\n ");
};
const escapeIcsText = (s) => s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
const toIcsDate = (iso, allDay) => {
  const d = new Date(iso);
  if (allDay) {
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, "0");
    const day = String(d.getUTCDate()).padStart(2, "0");
    return `${y}${m}${day}`;
  }
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
};
function eventsToIcs(events, calendarName = "Align Deal Flow") {
  const lines = [];
  lines.push("BEGIN:VCALENDAR");
  lines.push("VERSION:2.0");
  lines.push("PRODID:-//Align Deal Flow//Calendar//EN");
  lines.push("CALSCALE:GREGORIAN");
  lines.push("METHOD:PUBLISH");
  lines.push(`X-WR-CALNAME:${escapeIcsText(calendarName)}`);
  for (const e of events) {
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${e.id}@align-deal-flow`);
    lines.push(`DTSTAMP:${toIcsDate(e.updatedAt, false)}`);
    if (e.allDay) {
      lines.push(`DTSTART;VALUE=DATE:${toIcsDate(e.start, true)}`);
      lines.push(`DTEND;VALUE=DATE:${toIcsDate(e.end, true)}`);
    } else {
      lines.push(`DTSTART:${toIcsDate(e.start, false)}`);
      lines.push(`DTEND:${toIcsDate(e.end, false)}`);
    }
    lines.push(fold(`SUMMARY:${escapeIcsText(e.title)}`));
    if (e.description) lines.push(fold(`DESCRIPTION:${escapeIcsText(e.description)}`));
    if (e.location) lines.push(fold(`LOCATION:${escapeIcsText(e.location)}`));
    if (e.attendees?.length) {
      for (const a of e.attendees) lines.push(fold(`ATTENDEE;CN=${escapeIcsText(a)}:mailto:${a}`));
    }
    lines.push(`CATEGORIES:${e.kind.toUpperCase()}`);
    if (e.rrule) lines.push(`RRULE:${e.rrule}`);
    lines.push("END:VEVENT");
  }
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}
function downloadIcs(filename, content) {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename.endsWith(".ics") ? filename : `${filename}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1e3);
}
const unfold = (text) => text.replace(/\r\n[ \t]/g, "").replace(/\n[ \t]/g, "");
const unescapeIcsText = (s) => s.replace(/\\n/g, "\n").replace(/\\,/g, ",").replace(/\\;/g, ";").replace(/\\\\/g, "\\");
const parseIcsDate = (raw) => {
  const value = raw.includes(":") ? raw.split(":").pop() : raw;
  if (/^\d{8}$/.test(value)) {
    const y = value.slice(0, 4);
    const m2 = value.slice(4, 6);
    const d = value.slice(6, 8);
    return { iso: `${y}-${m2}-${d}T00:00:00.000Z`, allDay: true };
  }
  const m = value.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z)?$/);
  if (!m) return { iso: (/* @__PURE__ */ new Date()).toISOString(), allDay: false };
  const [, Y, Mo, D, H, Mi, S, Z] = m;
  if (Z) return { iso: `${Y}-${Mo}-${D}T${H}:${Mi}:${S}.000Z`, allDay: false };
  const local = new Date(Number(Y), Number(Mo) - 1, Number(D), Number(H), Number(Mi), Number(S));
  return { iso: local.toISOString(), allDay: false };
};
function icsToEvents(text, externalSource = "ics") {
  const unfolded = unfold(text);
  const lines = unfolded.split(/\r?\n/);
  const events = [];
  let current = null;
  let inEvent = false;
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (line === "BEGIN:VEVENT") {
      inEvent = true;
      current = { kind: "meeting", externalSource };
      continue;
    }
    if (line === "END:VEVENT") {
      if (current && current.start && current.end && current.title) {
        const now = (/* @__PURE__ */ new Date()).toISOString();
        events.push({
          id: current.externalId ?? `imp-${Math.random().toString(36).slice(2, 10)}`,
          title: current.title,
          kind: current.kind ?? "meeting",
          start: current.start,
          end: current.end,
          allDay: current.allDay ?? false,
          description: current.description,
          location: current.location,
          attendees: current.attendees,
          externalSource,
          externalId: current.externalId,
          rrule: current.rrule,
          createdAt: now,
          updatedAt: now
        });
      }
      current = null;
      inEvent = false;
      continue;
    }
    if (!inEvent || !current) continue;
    const idx = line.indexOf(":");
    if (idx < 0) continue;
    const head = line.slice(0, idx);
    const value = line.slice(idx + 1);
    const key = head.split(";")[0].toUpperCase();
    switch (key) {
      case "UID":
        current.externalId = value;
        break;
      case "SUMMARY":
        current.title = unescapeIcsText(value);
        break;
      case "DESCRIPTION":
        current.description = unescapeIcsText(value);
        break;
      case "LOCATION":
        current.location = unescapeIcsText(value);
        break;
      case "DTSTART": {
        const p = parseIcsDate(line);
        current.start = p.iso;
        current.allDay = p.allDay;
        break;
      }
      case "DTEND": {
        const p = parseIcsDate(line);
        current.end = p.iso;
        break;
      }
      case "RRULE":
        current.rrule = value;
        break;
      case "CATEGORIES": {
        const v = value.toLowerCase();
        if (v.includes("tour")) current.kind = "tour";
        else if (v.includes("call")) current.kind = "call";
        else if (v.includes("follow")) current.kind = "follow-up";
        else if (v.includes("task")) current.kind = "task";
        else if (v.includes("personal")) current.kind = "personal";
        else current.kind = "meeting";
        break;
      }
      case "ATTENDEE": {
        const email = value.replace(/^mailto:/i, "").trim();
        current.attendees = [...current.attendees ?? [], email];
        break;
      }
    }
  }
  return events;
}
function googleCalendarTemplateUrl(e) {
  const fmt = (iso) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    dates: `${fmt(e.start)}/${fmt(e.end)}`,
    details: e.description ?? "",
    location: e.location ?? ""
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
function outlookCalendarTemplateUrl(e) {
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: e.title,
    startdt: e.start,
    enddt: e.end,
    body: e.description ?? "",
    location: e.location ?? ""
  });
  return `https://outlook.office.com/calendar/0/deeplink/compose?${params.toString()}`;
}
function EventDialog({ open, onOpenChange, eventId, defaultStart }) {
  const { events, addEvent, updateEvent, deleteEvent } = useCalendar();
  const existing = reactExports.useMemo(() => events.find((e) => e.id === eventId), [events, eventId]);
  const [title, setTitle] = reactExports.useState("");
  const [kind, setKind] = reactExports.useState("meeting");
  const [start, setStart] = reactExports.useState("");
  const [end, setEnd] = reactExports.useState("");
  const [allDay, setAllDay] = reactExports.useState(false);
  const [location, setLocation] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [attendees, setAttendees] = reactExports.useState("");
  const [reminder, setReminder] = reactExports.useState("15");
  reactExports.useEffect(() => {
    if (!open) return;
    if (existing) {
      setTitle(existing.title);
      setKind(existing.kind);
      setStart(toLocalInput(existing.start));
      setEnd(toLocalInput(existing.end));
      setAllDay(existing.allDay);
      setLocation(existing.location ?? "");
      setDescription(existing.description ?? "");
      setAttendees((existing.attendees ?? []).join(", "));
      setReminder(String(existing.reminder ?? 15));
    } else {
      const base = defaultStart ?? /* @__PURE__ */ new Date();
      base.setMinutes(0, 0, 0);
      const startD = new Date(base);
      const endD = new Date(base.getTime() + 60 * 60 * 1e3);
      setTitle("");
      setKind("meeting");
      setStart(toLocalInput(startD.toISOString()));
      setEnd(toLocalInput(endD.toISOString()));
      setAllDay(false);
      setLocation("");
      setDescription("");
      setAttendees("");
      setReminder("15");
    }
  }, [open, existing, defaultStart]);
  const save = () => {
    if (!title.trim()) {
      toast.error("Please enter a title.");
      return;
    }
    const payload = {
      title: title.trim(),
      kind,
      start: fromLocalInput(start),
      end: fromLocalInput(end),
      allDay,
      location: location.trim() || void 0,
      description: description.trim() || void 0,
      attendees: attendees.split(",").map((a) => a.trim()).filter(Boolean),
      reminder: Number(reminder)
    };
    if (existing) {
      updateEvent(existing.id, payload);
      toast.success("Event updated.");
    } else {
      addEvent({ ...payload, externalSource: "local" });
      toast.success("Event added to calendar.");
    }
    onOpenChange(false);
  };
  const remove = () => {
    if (!existing) return;
    deleteEvent(existing.id);
    toast.success("Event deleted.");
    onOpenChange(false);
  };
  const previewEvent = {
    title: title || "Untitled",
    start: start ? fromLocalInput(start) : (/* @__PURE__ */ new Date()).toISOString(),
    end: end ? fromLocalInput(end) : new Date(Date.now() + 36e5).toISOString(),
    description,
    location
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
      existing ? "Edit event" : "New event"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ev-title", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "ev-title",
            value: title,
            onChange: (e) => setTitle(e.target.value),
            placeholder: "Add a title",
            autoFocus: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: kind, onValueChange: (v) => setKind(v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.entries(KIND_META).map(([k, m]) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: k, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-block h-2 w-2 rounded-full",
                  style: { background: m.color }
                }
              ),
              m.label
            ] }) }, k)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Reminder" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: reminder, onValueChange: setReminder, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "0", children: "None" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "5", children: "5 minutes before" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "10", children: "10 minutes before" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "15", children: "15 minutes before" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "30", children: "30 minutes before" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "60", children: "1 hour before" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "1440", children: "1 day before" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: allDay, onCheckedChange: setAllDay, id: "ev-allday" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ev-allday", className: "cursor-pointer", children: "All day" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Start" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "datetime-local", value: start, onChange: (e) => setStart(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "End" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "datetime-local", value: end, onChange: (e) => setEnd(e.target.value) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: location,
            onChange: (e) => setLocation(e.target.value),
            placeholder: "Add location or video link"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Attendees (comma-separated emails)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: attendees,
            onChange: (e) => setAttendees(e.target.value),
            placeholder: "alice@example.com, bob@example.com"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: description,
            onChange: (e) => setDescription(e.target.value),
            placeholder: "Add notes, agenda, or context",
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: googleCalendarTemplateUrl(previewEvent),
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs hover:bg-accent",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
              " Add to Google"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: outlookCalendarTemplateUrl(previewEvent),
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs hover:bg-accent",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
              " Add to Outlook"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2 sm:gap-2", children: [
      existing && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", className: "mr-auto text-destructive", onClick: remove, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 mr-1" }),
        " Delete"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => onOpenChange(false), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, children: existing ? "Save" : "Create" })
    ] })
  ] }) });
}
const PROVIDERS = [
  {
    id: "google",
    label: "Google Calendar",
    description: "Two-way sync with your Google account."
  },
  {
    id: "outlook",
    label: "Microsoft Outlook",
    description: "Sync with Outlook 365 calendars."
  },
  {
    id: "ics",
    label: "ICS Feed",
    description: "Subscribe to or import an external ICS calendar."
  }
];
function SyncPanel({ open, onOpenChange }) {
  const {
    events,
    connections,
    setConnection,
    removeConnection,
    importEvents,
    publishedIcsToken,
    rotateIcsToken
  } = useCalendar();
  const fileRef = reactExports.useRef(null);
  const [icsUrl, setIcsUrl] = reactExports.useState("");
  const [icsAccount, setIcsAccount] = reactExports.useState("");
  const subscribeUrl = typeof window !== "undefined" ? `${window.location.origin}/api/ics/${publishedIcsToken}.ics` : `/api/ics/${publishedIcsToken}.ics`;
  const findConn = (p) => connections.find((c) => c.provider === p);
  const exportNow = () => {
    if (events.length === 0) {
      toast.error("Nothing to export yet.");
      return;
    }
    downloadIcs("align-calendar", eventsToIcs(events));
    toast.success(`Exported ${events.length} events.`);
  };
  const onImportFile = async (file) => {
    const text = await file.text();
    const imported = icsToEvents(text, "ics");
    if (imported.length === 0) {
      toast.error("No events found in file.");
      return;
    }
    importEvents(imported);
    toast.success(`Imported ${imported.length} events.`);
  };
  const subscribeToFeed = async () => {
    if (!icsUrl.trim()) {
      toast.error("Please enter an ICS feed URL.");
      return;
    }
    setConnection({
      provider: "ics",
      connected: true,
      account: icsAccount || icsUrl,
      feedUrl: icsUrl,
      direction: "pull",
      lastSyncedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    try {
      const res = await fetch(icsUrl);
      if (res.ok) {
        const text = await res.text();
        const imported = icsToEvents(text, "ics");
        importEvents(imported);
        toast.success(`Subscribed and imported ${imported.length} events.`);
      } else {
        toast.warning("Subscribed, but couldn't fetch feed (CORS or network).");
      }
    } catch {
      toast.warning("Subscribed. The feed will pull on next refresh.");
    }
  };
  const connectOAuth = (provider) => {
    setConnection({
      provider,
      connected: true,
      account: provider === "google" ? "you@gmail.com" : "you@outlook.com",
      direction: "both",
      lastSyncedAt: (/* @__PURE__ */ new Date()).toISOString(),
      selectedCalendars: ["primary"]
    });
    toast.success(`${provider === "google" ? "Google" : "Outlook"} calendar connected.`);
  };
  const copy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "w-full sm:max-w-md overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { children: "Calendar sync" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetDescription, { children: "Keep Align in sync with your other calendars or share your schedule out." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Connections" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: PROVIDERS.map((p) => {
          const conn = findConn(p.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-lg border p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: p.label }),
                  conn?.connected && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: "Connected" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: p.description }),
                conn?.account && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 truncate", children: conn.account }),
                conn?.lastSyncedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: [
                  "Last synced ",
                  new Date(conn.lastSyncedAt).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1.5", children: p.id !== "ics" ? conn?.connected ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => removeConnection(p.id),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5 mr-1" }),
                    " Disconnect"
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => connectOAuth(p.id), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-3.5 w-3.5 mr-1" }),
                " Connect"
              ] }) : null })
            ] }),
            conn?.connected && p.id !== "ics" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    checked: conn.direction === "both" || conn.direction === "push",
                    onCheckedChange: (v) => setConnection({
                      ...conn,
                      direction: v ? conn.direction === "pull" ? "both" : "push" : "pull"
                    })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Push events to ",
                  p.label
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: () => setConnection({ ...conn, lastSyncedAt: (/* @__PURE__ */ new Date()).toISOString() }), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3.5 w-3.5 mr-1" }),
                " Sync now"
              ] })
            ] })
          ] }, p.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Subscribe to an ICS feed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Paste a public webcal/ICS URL from any calendar provider. Events will be imported into Align." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "https://example.com/calendar.ics",
              value: icsUrl,
              onChange: (e) => setIcsUrl(e.target.value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Label (optional)",
              value: icsAccount,
              onChange: (e) => setIcsAccount(e.target.value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: subscribeToFeed, className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-3.5 w-3.5 mr-1" }),
              " Subscribe"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => fileRef.current?.click(), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3.5 w-3.5 mr-1" }),
              " Import .ics"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: fileRef,
                type: "file",
                accept: ".ics,text/calendar",
                className: "hidden",
                onChange: (e) => {
                  const f = e.target.files?.[0];
                  if (f) onImportFile(f);
                  e.currentTarget.value = "";
                }
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Share Align as a calendar feed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Subscribe to this URL from any calendar app to view your Align events." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Subscription URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: subscribeUrl, readOnly: true, className: "font-mono text-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "icon", onClick: () => copy(subscribeUrl), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: exportNow, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5 mr-1" }),
              " Download .ics"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => {
              rotateIcsToken();
              toast.success("URL rotated.");
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3.5 w-3.5 mr-1" }),
              " Rotate URL"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `https://calendar.google.com/calendar/r/settings/addbyurl`,
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center text-xs text-primary hover:underline",
                children: [
                  "Add to Google ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3 ml-1" })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function CalendarPage() {
  const {
    tours,
    followUps,
    leads
  } = useApp();
  const {
    events,
    addEvent
  } = useCalendar();
  const [view, setView] = reactExports.useState("week");
  const [focus, setFocus] = reactExports.useState(/* @__PURE__ */ new Date());
  const [selectedDay, setSelectedDay] = reactExports.useState(/* @__PURE__ */ new Date());
  const [editing, setEditing] = reactExports.useState({
    open: false
  });
  const [syncOpen, setSyncOpen] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("all");
  const crmEvents = reactExports.useMemo(() => {
    const out = [];
    const leadMap = new Map(leads.map((l) => [l.id, l]));
    for (const t of tours) {
      const lead = leadMap.get(t.leadId);
      const start = new Date(t.scheduledAt);
      const end = new Date(start.getTime() + 60 * 60 * 1e3);
      out.push({
        id: `crm-tour-${t.id}`,
        title: lead ? `Tour · ${lead.name}` : "Tour",
        kind: "tour",
        start: start.toISOString(),
        end: end.toISOString(),
        allDay: false,
        leadId: t.leadId,
        tourId: t.id,
        externalSource: "local",
        createdAt: t.createdAt,
        updatedAt: t.updatedAt
      });
    }
    for (const f of followUps.filter((x) => !x.done)) {
      const lead = leadMap.get(f.leadId);
      const start = new Date(f.dueAt);
      const end = new Date(start.getTime() + 30 * 60 * 1e3);
      out.push({
        id: `crm-fu-${f.id}`,
        title: lead ? `Follow-up · ${lead.name}` : "Follow-up",
        kind: "follow-up",
        start: start.toISOString(),
        end: end.toISOString(),
        allDay: false,
        leadId: f.leadId,
        followUpId: f.id,
        description: f.reason,
        externalSource: "local",
        createdAt: start.toISOString(),
        updatedAt: start.toISOString()
      });
    }
    return out;
  }, [tours, followUps, leads]);
  const allEvents = reactExports.useMemo(() => {
    const merged = [...crmEvents, ...events];
    const q = search.trim().toLowerCase();
    return merged.filter((e) => {
      if (filter !== "all" && e.kind !== filter) return false;
      if (!q) return true;
      return e.title.toLowerCase().includes(q) || (e.location ?? "").toLowerCase().includes(q) || (e.description ?? "").toLowerCase().includes(q);
    });
  }, [crmEvents, events, search, filter]);
  reactExports.useEffect(() => {
    const fired = /* @__PURE__ */ new Set();
    const tick = () => {
      const now = Date.now();
      for (const e of events) {
        if (!e.reminder) continue;
        const trigger = +new Date(e.start) - e.reminder * 6e4;
        if (now >= trigger && now < trigger + 6e4 && !fired.has(e.id)) {
          fired.add(e.id);
          if ("Notification" in window && Notification.permission === "granted") {
            new Notification(e.title, {
              body: `In ${e.reminder} min · ${format(new Date(e.start), "p")}`
            });
          }
        }
      }
    };
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission().catch(() => {
      });
    }
    tick();
    const id = window.setInterval(tick, 3e4);
    return () => window.clearInterval(id);
  }, [events]);
  const openEvent = (e) => {
    if (e.id.startsWith("crm-")) return;
    setEditing({
      open: true,
      eventId: e.id
    });
  };
  const openSlot = (start) => {
    setEditing({
      open: true,
      defaultStart: start
    });
  };
  const openDay = (d) => {
    setSelectedDay(d);
    if (view === "month") {
      const slot = new Date(d);
      slot.setHours(9, 0, 0, 0);
    }
  };
  const goToday = () => setFocus(/* @__PURE__ */ new Date());
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-[calc(100vh-3rem)] p-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-semibold", children: "Calendar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "ml-1", children: [
            allEvents.length,
            " events"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search events", className: "pl-8 h-9 w-56" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filter, onValueChange: (v) => setFilter(v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All types" }),
              Object.entries(KIND_META).map(([k, m]) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: k, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: {
                  background: m.color
                } }),
                m.label
              ] }) }, k))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => setSyncOpen(true), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "h-4 w-4 mr-1.5" }),
            " Sync"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setEditing({
            open: true,
            defaultStart: selectedDay ?? /* @__PURE__ */ new Date()
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-1.5" }),
            " New event"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: goToday, children: "Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: () => setFocus(navigate(view, focus, -1)), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: () => setFocus(navigate(view, focus, 1)), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 font-display text-lg", children: headerLabel(view, focus) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: view, onValueChange: (v) => setView(v), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "day", children: "Day" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "week", children: "Week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "month", children: "Month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "agenda", children: "Agenda" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden lg:flex flex-col w-56 border rounded-lg bg-card p-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2", children: "My calendars" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-sm", children: Object.entries(KIND_META).map(([k, m]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-sm", style: {
                background: m.color
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m.label })
            ] }, k)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2", children: "Connected" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectionsList, { onOpen: () => setSyncOpen(true) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tours and follow-ups from your CRM appear here automatically." }) })
        ] }),
        view === "month" && /* @__PURE__ */ jsxRuntimeExports.jsx(MonthView, { focus, events: allEvents, onEventClick: openEvent, onDayClick: openDay, selectedDay }),
        (view === "week" || view === "day") && /* @__PURE__ */ jsxRuntimeExports.jsx(TimeGridView, { focus, events: allEvents, view, onEventClick: openEvent, onSlotClick: openSlot }),
        view === "agenda" && /* @__PURE__ */ jsxRuntimeExports.jsx(AgendaView, { events: allEvents, onEventClick: openEvent })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventDialog, { open: editing.open, onOpenChange: (v) => setEditing((s) => ({
      ...s,
      open: v
    })), eventId: editing.eventId, defaultStart: editing.defaultStart }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SyncPanel, { open: syncOpen, onOpenChange: setSyncOpen })
  ] });
}
function ConnectionsList({
  onOpen
}) {
  const {
    connections
  } = useCalendar();
  if (connections.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onOpen, className: "text-xs text-primary hover:underline", children: "Connect Google, Outlook, or ICS →" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-xs", children: connections.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: c.provider }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground truncate ml-2", children: c.account })
  ] }, c.provider)) });
}
export {
  CalendarPage as component
};
