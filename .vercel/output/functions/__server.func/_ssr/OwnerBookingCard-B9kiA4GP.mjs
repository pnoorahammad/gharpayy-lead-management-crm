import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card, B as Badge, k as Button, A as Textarea, Z as Dialog, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, a2 as DialogFooter } from "./router-kYRMoTX_.mjs";
import { S as Separator } from "./separator-l3jUx9ae.mjs";
import { c as create, p as persist } from "../_libs/zustand.mjs";
import { X, c as User, ab as House, I as IndianRupee, au as CalendarDays, S as Sparkles, k as CircleCheck, aj as Circle, aF as ClipboardList, N as MessageSquare, g as TriangleAlert, b8 as History, bm as Share2, bh as Eye } from "../_libs/lucide-react.mjs";
const LIFECYCLE_LABEL = {
  created: "Created",
  shared_with_owner: "Shared with owner",
  viewed_by_owner: "Viewed by owner",
  acknowledged: "Acknowledged",
  room_ready: "Room ready",
  move_in_approved: "Move-in approved",
  completed: "Completed",
  rejected: "Rejected",
  cancelled: "Cancelled"
};
const READINESS_LABEL = {
  cleaning: "Cleaning",
  furniture: "Furniture",
  internet: "Internet",
  electricity: "Electricity",
  water: "Water",
  inspection: "Final Inspection"
};
const uid = () => `obk-${Math.random().toString(36).slice(2, 9)}`;
const now = () => (/* @__PURE__ */ new Date()).toISOString();
const baseReadiness = {
  cleaning: "pending",
  furniture: "pending",
  internet: "pending",
  electricity: "pending",
  water: "pending",
  inspection: "pending"
};
function seedBookings() {
  const t = Date.now();
  const iso = (mins) => new Date(t + mins * 6e4).toISOString();
  return [
    {
      id: uid(),
      status: "shared_with_owner",
      createdAt: iso(-180),
      updatedAt: iso(-30),
      sharedAt: iso(-60),
      customer: {
        name: "Aarav Mehta",
        phone: "+91 98201 22334",
        gender: "male",
        occupation: "working",
        companyOrCollege: "Razorpay",
        emergencyName: "Priya Mehta",
        emergencyPhone: "+91 98765 44322"
      },
      inventory: {
        propertyId: "p-koramangala-1",
        propertyName: "Gharpayy Koramangala 4th Block",
        floor: "2",
        roomNumber: "204",
        bedNumber: "B",
        sharing: "double",
        category: "ac"
      },
      ownerId: "own-1",
      rent: 14500,
      deposit: 29e3,
      payments: [
        { id: uid(), label: "Booking Amount", amount: 5e3, status: "received", receivedAt: iso(-60) },
        { id: uid(), label: "Security Deposit", amount: 29e3, status: "pending" },
        { id: uid(), label: "First Month Rent", amount: 14500, status: "pending" }
      ],
      moveIn: { date: iso(60 * 24 * 4), time: "11:00", stayMonths: 11, lockInMonths: 3, noticeDays: 30 },
      specialRequests: [
        { id: uid(), text: "Lower floor preferred" },
        { id: uid(), text: "Quiet room — works night shifts" }
      ],
      readiness: { ...baseReadiness },
      history: [
        { ts: iso(-180), actor: "sales:Ravi", text: "Booking created" },
        { ts: iso(-60), actor: "system", text: "Shared with owner via WhatsApp" }
      ],
      createdBy: "Ravi"
    },
    {
      id: uid(),
      status: "acknowledged",
      createdAt: iso(-60 * 24),
      updatedAt: iso(-30),
      sharedAt: iso(-60 * 23),
      viewedAt: iso(-60 * 22),
      acknowledgedAt: iso(-60 * 20),
      customer: {
        name: "Sneha Iyer",
        phone: "+91 99000 11223",
        gender: "female",
        occupation: "student",
        companyOrCollege: "Christ University",
        emergencyName: "Ravi Iyer",
        emergencyPhone: "+91 98765 00112"
      },
      inventory: {
        propertyId: "p-indiranagar-1",
        propertyName: "Gharpayy Indiranagar 100ft",
        floor: "3",
        roomNumber: "301",
        bedNumber: "A",
        sharing: "triple",
        category: "non-ac"
      },
      ownerId: "own-2",
      rent: 11e3,
      deposit: 22e3,
      payments: [
        { id: uid(), label: "Booking Amount", amount: 3e3, status: "received", receivedAt: iso(-60 * 23) },
        { id: uid(), label: "Security Deposit", amount: 22e3, status: "received", receivedAt: iso(-60 * 5) },
        { id: uid(), label: "First Month Rent", amount: 11e3, status: "pending" }
      ],
      moveIn: { date: iso(60 * 24 * 2), time: "10:00", stayMonths: 12, lockInMonths: 6, noticeDays: 30 },
      specialRequests: [
        { id: uid(), text: "Veg-only floor preferred" },
        { id: uid(), text: "Attached washroom" }
      ],
      ownerDecision: "approve_with_conditions",
      ownerDecisionAt: iso(-60 * 20),
      ownerConditionNote: "Room ready by tomorrow evening — deep cleaning scheduled",
      readiness: { ...baseReadiness, internet: "ready", electricity: "ready", water: "ready" },
      history: [
        { ts: iso(-60 * 24), actor: "sales:Aisha", text: "Booking created" },
        { ts: iso(-60 * 23), actor: "system", text: "Shared with owner" },
        { ts: iso(-60 * 22), actor: "owner:Meera", text: "Viewed booking card" },
        { ts: iso(-60 * 20), actor: "owner:Meera", text: "Approved with conditions: cleaning tomorrow" }
      ],
      createdBy: "Aisha"
    },
    {
      id: uid(),
      status: "room_ready",
      createdAt: iso(-60 * 24 * 3),
      updatedAt: iso(-60),
      sharedAt: iso(-60 * 70),
      viewedAt: iso(-60 * 69),
      acknowledgedAt: iso(-60 * 67),
      readyAt: iso(-60 * 2),
      customer: {
        name: "Rohan Kapoor",
        phone: "+91 98888 12345",
        gender: "male",
        occupation: "working",
        companyOrCollege: "Flipkart",
        emergencyName: "Anita Kapoor",
        emergencyPhone: "+91 98111 33445"
      },
      inventory: {
        propertyId: "p-hsr-1",
        propertyName: "Gharpayy HSR Layout Sector 6",
        floor: "1",
        roomNumber: "108",
        bedNumber: "A",
        sharing: "single",
        category: "premium"
      },
      ownerId: "own-3",
      rent: 18500,
      deposit: 37e3,
      payments: [
        { id: uid(), label: "Booking Amount", amount: 5e3, status: "received", receivedAt: iso(-60 * 70) },
        { id: uid(), label: "Security Deposit", amount: 37e3, status: "received", receivedAt: iso(-60 * 12) },
        { id: uid(), label: "First Month Rent", amount: 18500, status: "received", receivedAt: iso(-60 * 5) }
      ],
      moveIn: { date: iso(60 * 24), time: "14:00", stayMonths: 11, lockInMonths: 3, noticeDays: 30 },
      specialRequests: [{ id: uid(), text: "Extra mattress" }, { id: uid(), text: "Early check-in 2 PM" }],
      ownerDecision: "approve",
      ownerDecisionAt: iso(-60 * 67),
      readiness: {
        cleaning: "ready",
        furniture: "ready",
        internet: "ready",
        electricity: "ready",
        water: "ready",
        inspection: "ready"
      },
      readinessNote: "Verified by property manager Sunil",
      history: [
        { ts: iso(-60 * 24 * 3), actor: "sales:Karan", text: "Booking created" },
        { ts: iso(-60 * 70), actor: "system", text: "Shared with owner" },
        { ts: iso(-60 * 67), actor: "owner:Ankit", text: "Approved" },
        { ts: iso(-60 * 2), actor: "owner:Ankit", text: "All readiness checks complete" }
      ],
      createdBy: "Karan"
    }
  ];
}
const useOwnerBookings = create()(
  persist(
    (set, get) => ({
      bookings: seedBookings(),
      createBooking: (input) => {
        const b = {
          ...input,
          id: uid(),
          status: "created",
          createdAt: now(),
          updatedAt: now(),
          readiness: { ...baseReadiness },
          history: [{ ts: now(), actor: `sales:${input.createdBy ?? "ops"}`, text: "Booking created" }]
        };
        set((s) => ({ bookings: [b, ...s.bookings] }));
        return b;
      },
      updateBooking: (id, patch) => set((s) => ({
        bookings: s.bookings.map((b) => b.id === id ? { ...b, ...patch, updatedAt: now() } : b)
      })),
      shareWithOwner: (id, actor = "system") => {
        set((s) => ({
          bookings: s.bookings.map(
            (b) => b.id === id ? {
              ...b,
              status: b.status === "created" ? "shared_with_owner" : b.status,
              sharedAt: b.sharedAt ?? now(),
              updatedAt: now(),
              history: [...b.history, { ts: now(), actor, text: "Shared with owner" }]
            } : b
          )
        }));
      },
      markViewed: (id, actor = "owner") => {
        set((s) => ({
          bookings: s.bookings.map(
            (b) => b.id === id && !b.viewedAt ? {
              ...b,
              status: b.status === "shared_with_owner" ? "viewed_by_owner" : b.status,
              viewedAt: now(),
              updatedAt: now(),
              history: [...b.history, { ts: now(), actor, text: "Viewed booking card" }]
            } : b
          )
        }));
      },
      recordOwnerDecision: (id, decision, note, actor = "owner") => {
        set((s) => ({
          bookings: s.bookings.map((b) => {
            if (b.id !== id) return b;
            const nextStatus = decision === "reject" ? "rejected" : "acknowledged";
            const text = decision === "approve" ? "Approved booking" : decision === "approve_with_conditions" ? `Approved with conditions: ${note ?? ""}` : `Rejected: ${note ?? "no reason"}`;
            return {
              ...b,
              status: nextStatus,
              ownerDecision: decision,
              ownerDecisionAt: now(),
              ownerConditionNote: decision === "approve_with_conditions" ? note : b.ownerConditionNote,
              ownerRejectionReason: decision === "reject" ? note : b.ownerRejectionReason,
              updatedAt: now(),
              history: [...b.history, { ts: now(), actor, text }]
            };
          })
        }));
      },
      setReadiness: (id, key, status, actor = "owner") => set((s) => ({
        bookings: s.bookings.map((b) => {
          if (b.id !== id) return b;
          const readiness = { ...b.readiness, [key]: status };
          const allReady = Object.values(readiness).every((v) => v === "ready");
          return {
            ...b,
            readiness,
            status: allReady && b.status === "acknowledged" ? "room_ready" : b.status,
            readyAt: allReady ? b.readyAt ?? now() : b.readyAt,
            updatedAt: now(),
            history: [
              ...b.history,
              { ts: now(), actor, text: `${READINESS_LABEL[key]} → ${status}` }
            ]
          };
        })
      })),
      markAllReady: (id, actor = "owner") => set((s) => ({
        bookings: s.bookings.map((b) => {
          if (b.id !== id) return b;
          const readiness = {
            cleaning: "ready",
            furniture: "ready",
            internet: "ready",
            electricity: "ready",
            water: "ready",
            inspection: "ready"
          };
          return {
            ...b,
            readiness,
            status: b.status === "acknowledged" ? "room_ready" : b.status,
            readyAt: now(),
            updatedAt: now(),
            history: [...b.history, { ts: now(), actor, text: "Marked all readiness checks complete" }]
          };
        })
      })),
      markPaymentReceived: (id, paymentId, actor = "sales") => set((s) => ({
        bookings: s.bookings.map((b) => {
          if (b.id !== id) return b;
          const payments = b.payments.map(
            (p) => p.id === paymentId ? { ...p, status: "received", receivedAt: now() } : p
          );
          const line = b.payments.find((p) => p.id === paymentId);
          return {
            ...b,
            payments,
            updatedAt: now(),
            history: [
              ...b.history,
              { ts: now(), actor, text: `Payment received: ${line?.label ?? ""} ₹${line?.amount.toLocaleString("en-IN") ?? ""}` }
            ]
          };
        })
      })),
      addPaymentLine: (id, line) => set((s) => ({
        bookings: s.bookings.map(
          (b) => b.id === id ? { ...b, payments: [...b.payments, { ...line, id: uid() }], updatedAt: now() } : b
        )
      })),
      approveMoveIn: (id, actor = "owner") => set((s) => ({
        bookings: s.bookings.map(
          (b) => b.id === id ? {
            ...b,
            status: "move_in_approved",
            moveInApprovedAt: now(),
            updatedAt: now(),
            history: [...b.history, { ts: now(), actor, text: "Move-in approved" }]
          } : b
        )
      })),
      completeBooking: (id, actor = "system") => set((s) => ({
        bookings: s.bookings.map(
          (b) => b.id === id ? {
            ...b,
            status: "completed",
            completedAt: now(),
            updatedAt: now(),
            history: [...b.history, { ts: now(), actor, text: "Customer checked in — booking complete" }]
          } : b
        )
      })),
      cancelBooking: (id, reason, actor = "sales") => set((s) => ({
        bookings: s.bookings.map(
          (b) => b.id === id ? {
            ...b,
            status: "cancelled",
            updatedAt: now(),
            history: [...b.history, { ts: now(), actor, text: `Cancelled: ${reason}` }]
          } : b
        )
      })),
      appendHistory: (id, actor, text) => set((s) => ({
        bookings: s.bookings.map(
          (b) => b.id === id ? { ...b, history: [...b.history, { ts: now(), actor, text }], updatedAt: now() } : b
        )
      }))
    }),
    { name: "gharpayy.owner-bookings.v1" }
  )
);
function computeTotals(b) {
  const expected = b.payments.reduce((s, p) => s + (p.status === "waived" ? 0 : p.amount), 0);
  const received = b.payments.filter((p) => p.status === "received").reduce((s, p) => s + p.amount, 0);
  const pending = expected - received;
  const readinessVals = Object.values(b.readiness);
  const readyCount = readinessVals.filter((v) => v === "ready").length;
  const totalReadiness = readinessVals.length;
  const isFullyReady = readyCount === totalReadiness;
  const isFullyPaid = pending <= 0;
  const canConfirm = b.ownerDecision === "approve" || b.ownerDecision === "approve_with_conditions" ? isFullyReady : false;
  return { expected, received, pending, readyCount, totalReadiness, isFullyReady, isFullyPaid, canConfirm };
}
const READINESS_KEYS = [
  "cleaning",
  "furniture",
  "internet",
  "electricity",
  "water",
  "inspection"
];
const statusTone = {
  created: "bg-muted text-muted-foreground",
  shared_with_owner: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  viewed_by_owner: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300",
  acknowledged: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  room_ready: "bg-teal-500/15 text-teal-700 dark:text-teal-300",
  move_in_approved: "bg-green-600/15 text-green-700 dark:text-green-300",
  completed: "bg-green-700/20 text-green-800 dark:text-green-200",
  rejected: "bg-red-500/15 text-red-700 dark:text-red-300",
  cancelled: "bg-muted text-muted-foreground line-through"
};
function OwnerBookingCard({ booking: b, mode, onClose }) {
  const totals = computeTotals(b);
  const store = useOwnerBookings();
  const [decideOpen, setDecideOpen] = reactExports.useState(false);
  const [decision, setDecision] = reactExports.useState("approve");
  const [decisionNote, setDecisionNote] = reactExports.useState("");
  const [readinessNote, setReadinessNote] = reactExports.useState(b.readinessNote ?? "");
  function applyDecision() {
    store.recordOwnerDecision(b.id, decision, decisionNote);
    setDecideOpen(false);
    setDecisionNote("");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex items-start justify-between gap-3 border-b border-border bg-muted/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-base truncate", children: b.customer.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: b.customer.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `text-[10px] capitalize ${statusTone[b.status]}`, children: LIFECYCLE_LABEL[b.status] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5", children: [
          b.inventory.propertyName,
          " · Floor ",
          b.inventory.floor,
          " · Room ",
          b.inventory.roomNumber,
          " · Bed ",
          b.inventory.bedNumber
        ] })
      ] }),
      onClose && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }), title: "Customer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Gender", value: cap(b.customer.gender) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Occupation", value: cap(b.customer.occupation) }),
        b.customer.companyOrCollege && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Company/College", value: b.customer.companyOrCollege }),
        b.customer.emergencyName && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Emergency", value: `${b.customer.emergencyName} · ${b.customer.emergencyPhone ?? "-"}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-4 w-4" }), title: "Room Allocated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Sharing", value: cap(b.inventory.sharing) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Category", value: cap(b.inventory.category) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Floor / Room", value: `${b.inventory.floor} / ${b.inventory.roomNumber}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Bed", value: b.inventory.bedNumber })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-4 w-4" }), title: "Financials", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Monthly Rent", value: `₹${b.rent.toLocaleString("en-IN")}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Security Deposit", value: `₹${b.deposit.toLocaleString("en-IN")}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Total Expected", value: `₹${totals.expected.toLocaleString("en-IN")}`, strong: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Received", value: `₹${totals.received.toLocaleString("en-IN")}`, tone: "good" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Pending", value: `₹${totals.pending.toLocaleString("en-IN")}`, tone: totals.pending > 0 ? "warn" : "good" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 space-y-1", children: b.payments.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded border border-border bg-card px-2 py-1 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: p.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
              "₹",
              p.amount.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] capitalize ${p.status === "received" ? "border-emerald-500/40 text-emerald-700 dark:text-emerald-300" : p.status === "waived" ? "border-muted text-muted-foreground" : "border-amber-500/40 text-amber-700 dark:text-amber-300"}`, children: p.status }),
            mode === "sales" && p.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-6 px-2 text-[10px]",
                onClick: () => store.markPaymentReceived(b.id, p.id),
                children: "Mark received"
              }
            )
          ] })
        ] }, p.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4" }), title: "Move-In Plan", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Move-in Date", value: new Date(b.moveIn.date).toLocaleDateString() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Time", value: b.moveIn.time }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Expected Stay", value: `${b.moveIn.stayMonths} months` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Lock-in", value: `${b.moveIn.lockInMonths} months` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Notice", value: `${b.moveIn.noticeDays} days` })
      ] }),
      b.specialRequests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }), title: "Customer Expectations", full: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-1 sm:grid-cols-2", children: b.specialRequests.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs flex items-start gap-2 rounded border border-border bg-card px-2 py-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 mt-0.5 text-amber-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r.text })
      ] }, r.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-4 w-4" }), title: `Room Readiness · ${totals.readyCount}/${totals.totalReadiness}`, full: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: READINESS_KEYS.map((k) => {
          const ready = b.readiness[k] === "ready";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              disabled: mode !== "owner",
              onClick: () => store.setReadiness(b.id, k, ready ? "pending" : "ready"),
              className: `flex items-center gap-2 rounded border px-2 py-1.5 text-xs transition ${ready ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" : "border-border bg-card text-muted-foreground"} ${mode === "owner" ? "hover:border-emerald-500/70 cursor-pointer" : "cursor-default"}`,
              children: [
                ready ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-left", children: READINESS_LABEL[k] })
              ]
            },
            k
          );
        }) }),
        mode === "owner" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              rows: 2,
              placeholder: "Notes for sales team (optional)…",
              value: readinessNote,
              onChange: (e) => setReadinessNote(e.target.value),
              onBlur: () => readinessNote !== (b.readinessNote ?? "") && store.updateBooking(b.id, { readinessNote })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => store.markAllReady(b.id), children: "All ready" })
        ] })
      ] }),
      b.ownerDecision && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }), title: "Owner Decision", full: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium capitalize", children: b.ownerDecision.replace(/_/g, " ") }),
        b.ownerConditionNote && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground mt-1", children: b.ownerConditionNote }),
        b.ownerRejectionReason && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-red-600 dark:text-red-400 mt-1", children: [
          "Reason: ",
          b.ownerRejectionReason
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }), title: "Confirmation Gate", full: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gate, { ok: !!b.ownerDecision && b.ownerDecision !== "reject", label: "Owner ack" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gate, { ok: !!b.inventory.roomNumber, label: "Room assigned" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gate, { ok: !!b.moveIn.date, label: "Move-in date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gate, { ok: totals.isFullyReady, label: "Room ready" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[11px] text-muted-foreground", children: "Booking confirms only when all four gates clear." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-3.5 w-3.5" }),
        " Activity (",
        b.history.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-1 text-xs max-h-40 overflow-auto", children: [...b.history].reverse().map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground tabular-nums", children: new Date(h.ts).toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: h.actor }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h.text })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-t border-border bg-muted/20 flex flex-wrap items-center justify-end gap-2", children: [
      mode === "sales" && b.status === "created" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => store.shareWithOwner(b.id), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4 mr-1.5" }),
        " Share with owner"
      ] }),
      mode === "owner" && b.status === "shared_with_owner" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => store.markViewed(b.id), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4 mr-1.5" }),
        " Mark as viewed"
      ] }),
      mode === "owner" && !b.ownerDecision && b.status !== "cancelled" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => setDecideOpen(true), children: "Owner action…" }),
      mode === "owner" && b.ownerDecision !== "reject" && totals.isFullyReady && b.status === "room_ready" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => store.approveMoveIn(b.id), children: "Approve move-in" }),
      mode === "sales" && b.status === "move_in_approved" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => store.completeBooking(b.id), children: "Mark checked in" }),
      mode === "sales" && b.status !== "completed" && b.status !== "cancelled" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => {
        const r = prompt("Cancel reason?");
        if (r) store.cancelBooking(b.id, r);
      }, children: "Cancel" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: decideOpen, onOpenChange: setDecideOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Owner decision" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["approve", "approve_with_conditions", "reject"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setDecision(d),
            className: `text-xs rounded border px-2 py-2 capitalize ${decision === d ? "border-primary bg-primary/10 font-medium" : "border-border"}`,
            children: d.replace(/_/g, " ")
          },
          d
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            rows: 3,
            placeholder: decision === "reject" ? "Reason for rejection (room occupied / under maintenance / wrong assignment)…" : decision === "approve_with_conditions" ? "Condition (e.g. room ready tomorrow, cleaning pending)…" : "Optional note for the sales team…",
            value: decisionNote,
            onChange: (e) => setDecisionNote(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setDecideOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: applyDecision,
            disabled: decision === "reject" && !decisionNote.trim(),
            children: "Submit decision"
          }
        )
      ] })
    ] }) })
  ] });
}
function Section({ icon, title, full, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: full ? "md:col-span-2" : "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-2", children: [
      icon,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children })
  ] });
}
function Row({ label, value, strong, tone }) {
  const toneCls = tone === "good" ? "text-emerald-700 dark:text-emerald-300" : tone === "warn" ? "text-amber-700 dark:text-amber-300" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${strong ? "font-semibold" : ""} ${toneCls}`, children: value })
  ] });
}
function Gate({ ok, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded border px-2 py-1.5 flex items-center gap-2 ${ok ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" : "border-border bg-card text-muted-foreground"}`, children: [
    ok ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-3.5 w-3.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label })
  ] });
}
function cap(s) {
  return s.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
export {
  LIFECYCLE_LABEL as L,
  OwnerBookingCard as O,
  computeTotals as c,
  useOwnerBookings as u
};
