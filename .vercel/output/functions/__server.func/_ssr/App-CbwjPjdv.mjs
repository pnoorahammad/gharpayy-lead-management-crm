import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { R as Router$1, S as Switch, a as Route, u as useLocation, b as useParams, L as Link, c as useRoute } from "../_libs/wouter.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider, u as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { aT as Toaster, q as cn$1, U as Label$1 } from "./router-Brs45mHz.mjs";
import { P as Provider, a as Portal$1, C as Content2$1 } from "../_libs/radix-ui__react-tooltip.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as create, p as persist, a as createJSONStorage } from "../_libs/zustand.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { u as useForm, F as FormProvider, C as Controller, b as useFormContext } from "../_libs/react-hook-form.mjs";
import { a } from "../_libs/hookform__resolvers.mjs";
import { t as toast$1 } from "../_libs/sonner.mjs";
import { R as Root2, f as Value, T as Trigger, I as Icon, P as Portal, C as Content2, V as Viewport, b as Item, c as ItemIndicator, d as ItemText, S as ScrollUpButton, a as ScrollDownButton, L as Label$2, e as Separator } from "../_libs/radix-ui__react-select.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import { b as PERSONAS$2, P as PERSONA_BY_ID } from "./personas-DYCrD02E.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { bC as ArrowLeft, W as Wallet, E as Trophy, _ as Star, y as Target, q as ChevronRight, ba as Award, Z as Zap, F as Flame, k as CircleCheck, r as MessageCircle, j as Copy, bm as Share2, p as Bell, O as MapPin, x as Calendar, a7 as LogOut, bg as ChevronLeft, D as ArrowUpRight, s as Clock, T as TrendingUp, $ as Search, c0 as SlidersHorizontal, B as Building2, S as Sparkles, bB as CalendarCheck, b as Check, N as MessageSquare, d as Users, e as Crown, c1 as Hash, aQ as CheckCheck, c2 as BellOff, c3 as Calculator, A as ArrowRight, aA as ExternalLink, c4 as Gift, a8 as Lock, aK as Swords, t as Plus, c5 as GitBranch, bO as CircleX, c6 as ChartNoAxesColumn, c7 as MousePointer, c8 as ToggleRight, c9 as ToggleLeft, bV as BedDouble, v as TrendingDown, au as CalendarDays, ao as Trash2, am as Download, aR as RefreshCw, X, ca as Printer, bW as ArrowUpDown, C as ChevronDown, cb as List, cc as Grid3x3, g as TriangleAlert, P as Phone, aW as Wrench, an as PenLine, aq as Mail, I as IndianRupee, f as Activity, cd as FilePenLine, i as FileText, a9 as Save, bb as FolderOpen, ad as Layers, bt as DoorOpen, ab as House, w as Shield, ce as Headset, b6 as UserCheck, Y as Funnel, K as Send, c as User, av as CircleAlert, cf as CirclePlus, cg as SwitchCamera, ch as Magnet, ci as Receipt, n as Map$1, b1 as Utensils, cj as Wind, b0 as Wifi, l as ShieldCheck, bJ as Video, aJ as LayoutDashboard, G as Gauge, ck as UserCog, aL as Settings$1, aM as Command, aj as Circle, cl as CreditCard, R as Radio, o as ChartColumn, cm as Compass, af as ShieldAlert, a3 as GraduationCap, a4 as Briefcase, ak as Handshake, a as ChevronUp, bh as Eye, U as UserPlus } from "../_libs/lucide-react.mjs";
import { f as format } from "../_libs/date-fns.mjs";
import { R as ResponsiveContainer, A as AreaChart, T as Tooltip, c as Area, P as PieChart, b as Pie, C as Cell$1, X as XAxis, B as BarChart, a as Bar$1 } from "../_libs/recharts.mjs";
import { o as objectType, s as stringType, e as enumType } from "../_libs/zod.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/regexparam.mjs";
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
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const TooltipProvider = Provider;
const TooltipContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2$1,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = Content2$1.displayName;
const json = (data, init) => Response.json(data, init);
const now$1 = () => (/* @__PURE__ */ new Date()).toISOString();
const inHours = (h) => new Date(Date.now() + h * 36e5).toISOString();
const names = ["Koramangala", "HSR Layout", "Bellandur", "Indiranagar", "Marathahalli", "Whitefield"];
const read = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
    localStorage.setItem(key, JSON.stringify(fallback));
  } catch {
  }
  return fallback;
};
const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
  }
};
function installReferralMockApi() {
  if (typeof window === "undefined" || window.__gharpayyMockApiInstalled) return;
  window.__gharpayyMockApiInstalled = true;
  const originalFetch = window.fetch.bind(window);
  window.fetch = async (input, init) => {
    const url = new URL(typeof input === "string" ? input : input instanceof URL ? input.href : input.url, window.location.origin);
    if (!url.pathname.startsWith("/api/")) return originalFetch(input, init);
    const path = url.pathname;
    const method = (init?.method || "GET").toUpperCase();
    const body = init?.body ? JSON.parse(String(init.body)) : {};
    if (path.startsWith("/api/visits")) {
      const fallback = [{ id: 1, propertyId: 2, propertyName: "HSR Comfort PG", visitorName: "Sneha", visitorPhone: "9876543210", scheduledAt: inHours(26), status: "SCHEDULED", notes: "Prefers single sharing" }];
      const visits = read("gharpayy_visits_v1", fallback);
      if (method === "POST") {
        const visit = { id: Date.now(), status: "SCHEDULED", ...body };
        write("gharpayy_visits_v1", [visit, ...visits]);
        return json(visit);
      }
      if (method === "PATCH") {
        const id = Number(path.split("/").pop());
        const next = visits.map((v) => v.id === id ? { ...v, ...body } : v);
        write("gharpayy_visits_v1", next);
        return json({ ok: true });
      }
      return json(visits);
    }
    if (path.includes("/streaks/")) {
      if (path.endsWith("/checkin")) return json({ newStreak: 7, xpAwarded: 35, bonusAwarded: 100 });
      return json({ streak: { currentStreak: 6, longestStreak: 12, totalCheckins: 24, lastCheckinDate: null, lastXpAwarded: 25 }, recentLogs: [0, 1, 2, 4, 5].map((d) => ({ checkinDate: new Date(Date.now() - d * 864e5).toISOString().slice(0, 10), xpAwarded: 20 + d, streakDay: 6 - d })) });
    }
    if (path === "/api/squad-battles") {
      const fallback = [{ id: 1, challengerTeamId: 1, challengerTeamName: "Koramangala Kings", defenderTeamId: 2, defenderTeamName: "HSR Hustlers", status: "ACTIVE", challengerScore: 12, defenderScore: 9, winnerTeamId: null, prizeXp: 500, prizeCash: 0, metric: "referrals", endsAt: inHours(18) }];
      const battles = read("gharpayy_battles_v1", fallback);
      if (method === "POST") {
        const battle = { id: Date.now(), challengerTeamName: "Your Squad", defenderTeamName: "Expert Desk", challengerScore: 0, defenderScore: 0, status: "ACTIVE", endsAt: inHours(body.durationHours || 24), prizeCash: 0, ...body };
        write("gharpayy_battles_v1", [battle, ...battles]);
        return json(battle);
      }
      return json(battles);
    }
    if (path.includes("/chain/")) return json({ root: { id: 1, name: "You", referralCode: "GHAR-YOU1", xp: 480, totalEarned: 8450, level: "HUSTLER" }, stats: { totalNodes: 14, bookedNodes: 4, pendingNodes: 6, totalChainEarnings: 8450, conversionRate: 29 }, directReferrals: [1, 2, 3, 4].map((i) => ({ id: i, name: ["Sneha", "Ravi", "Pooja", "Karthik"][i - 1], status: ["BOOKED", "VERIFIED", "PENDING", "BOOKED"][i - 1], earned: i % 2 ? 500 : 50, area: names[i], joinedAt: new Date(Date.now() - i * 864e5).toISOString() })) });
    if (path.includes("/influencer/")) return json(null);
    if (path.includes("/corporate/")) return json(null);
    if (path.includes("/broker/")) return json(null);
    if (path === "/api/flash-deals") return json([1, 2, 3].map((i) => ({ id: i, propertyId: i, propertyName: `${names[i]} Fast Move-in PG`, area: names[i], originalRent: 12e3 + i * 800, dealRent: 9800 + i * 650, bonusMultiplier: 2 + i, bonusAmount: (2 + i) * 500, spotsTotal: 8, spotsTaken: 2 + i, expiresAt: inHours(5 + i), discount: 12 + i * 3 })));
    if (path.includes("/lucky-draw/")) return path.endsWith("/spin") ? json({ prize: "₹50", prizeIndex: 3, message: "You won ₹50", draw: { prize: "₹50", spinDate: now$1() } }) : json({ canSpin: true, recentWins: [{ prize: "100 XP", spinDate: now$1() }] });
    if (path.includes("/activity/")) return json([1, 2, 3, 4, 5].map((i) => ({ id: i, type: ["REFERRAL_SUBMITTED", "LEAD_VERIFIED", "BOOKING_CONFIRMED", "CHECKIN", "PAYOUT"][i - 1], icon: ["🏠", "✅", "💰", "🔥", "🏦"][i - 1], label: ["Lead submitted", "Lead verified", "Booking confirmed", "Daily check-in", "Payout processed"][i - 1], amount: i === 2 ? 50 : i === 3 ? 500 : null, xp: i < 4 ? 20 * i : 10, createdAt: new Date(Date.now() - i * 36e5).toISOString() })));
    return json({ ok: true });
  };
}
const Card = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
function NotFound() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen w-full flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md mx-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex mb-4 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-8 w-8 text-red-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "404 Page Not Found" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-gray-600", children: "Did you forget to add the page to the router?" })
  ] }) }) });
}
const useAppStore = create()(
  persist(
    (set) => ({
      persona: null,
      setPersona: (persona) => set({ persona }),
      referrer: null,
      setReferrer: (referrer) => set({ referrer, persona: referrer.persona }),
      logout: () => set({ referrer: null, persona: null }),
      isAdminAuthenticated: false,
      setAdminAuthenticated: (status) => set({ isAdminAuthenticated: status })
    }),
    {
      name: "gharpayy_state",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        persona: state.persona,
        referrer: state.referrer
        // We persist isAdminAuthenticated just to make it easier, though standard says sessionStorage. Let's use sessionStorage for admin via another store or just handle it here.
      })
    }
  )
);
const useAdminStore = create()(
  persist(
    (set) => ({
      isAdminAuthenticated: false,
      setAdminAuthenticated: (status) => set({ isAdminAuthenticated: status })
    }),
    {
      name: "gharpayy_admin",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2",
  {
    variants: {
      variant: {
        default: (
          // @replit: no hover, and add primary border
          "bg-primary text-primary-foreground border border-primary-border"
        ),
        destructive: "bg-destructive text-destructive-foreground shadow-sm border-destructive-border",
        outline: (
          // @replit Shows the background color of whatever card / sidebar / accent background it is inside of.
          // Inherits the current text color. Uses shadow-xs. no shadow on active
          // No hover state
          " border [border-color:var(--button-outline)] shadow-xs active:shadow-none "
        ),
        secondary: (
          // @replit border, no hover, no shadow, secondary border.
          "border bg-secondary text-secondary-foreground border border-secondary-border "
        ),
        // @replit no hover, transparent border
        ghost: "border border-transparent",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        // @replit changed sizes
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const PERSONAS$1 = [
  {
    id: "GUARD",
    title: "Daily Worker",
    subtitle: "Simple, bold, make extra cash.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-8 h-8" }),
    color: "bg-zinc-900 border-zinc-700 text-white",
    activeColor: "ring-2 ring-primary border-primary bg-zinc-800 shadow-[0_0_30px_rgba(249,115,22,0.4)]",
    emoji: "🛡️",
    tag: "Easy Start"
  },
  {
    id: "STUDENT",
    title: "College Student",
    subtitle: "Help friends find homes, earn rewards.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-8 h-8" }),
    color: "bg-orange-50 border-orange-100 text-orange-950",
    activeColor: "ring-2 ring-primary border-primary bg-orange-100 shadow-xl shadow-orange-500/20",
    emoji: "🎓",
    tag: "Most Popular"
  },
  {
    id: "EARNER",
    title: "Side Hustler",
    subtitle: "Track every lead, max your income.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-8 h-8" }),
    color: "bg-white border-slate-200 text-slate-900",
    activeColor: "ring-2 ring-primary border-primary bg-white shadow-2xl",
    emoji: "💼",
    tag: "Best ROI"
  },
  {
    id: "PG_MANAGER",
    title: "Property Manager",
    subtitle: "List PGs & flats, fill rooms fast.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-8 h-8" }),
    color: "bg-blue-50 border-blue-100 text-blue-950",
    activeColor: "ring-2 ring-blue-500 border-blue-400 bg-blue-100 shadow-xl shadow-blue-500/20",
    emoji: "🏠",
    tag: "Property Owner"
  },
  {
    id: "BROKER",
    title: "Broker / Agent",
    subtitle: "Professional pipeline, max commission.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "w-8 h-8" }),
    color: "bg-slate-800 border-slate-700 text-white",
    activeColor: "ring-2 ring-green-400 border-green-400 bg-slate-900 shadow-xl shadow-green-500/20",
    emoji: "🤝",
    tag: "High Earners"
  },
  {
    id: "INFLUENCER",
    title: "Influencer",
    subtitle: "Share links, earn on every home booking.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-8 h-8" }),
    color: "bg-purple-50 border-purple-100 text-purple-950",
    activeColor: "ring-2 ring-purple-500 border-purple-400 bg-purple-100 shadow-xl shadow-purple-500/20",
    emoji: "📱",
    tag: "Content Creator"
  },
  {
    id: "CORPORATE_HR",
    title: "Corporate HR",
    subtitle: "House new hires · PGs, flats & more.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8" }),
    color: "bg-indigo-50 border-indigo-100 text-indigo-950",
    activeColor: "ring-2 ring-indigo-500 border-indigo-400 bg-indigo-100 shadow-xl shadow-indigo-500/20",
    emoji: "🏢",
    tag: "Enterprise"
  }
];
const labelMap = {
  GUARD: "Daily Worker",
  STUDENT: "Student",
  EARNER: "Hustler",
  PG_MANAGER: "Property Manager",
  BROKER: "Broker",
  INFLUENCER: "Influencer",
  CORPORATE_HR: "Corporate HR"
};
function PersonaSelector() {
  const { setPersona } = useAppStore();
  const [, setLocation] = useLocation();
  const [selected, setSelected] = reactExports.useState(null);
  const handleContinue = () => {
    if (selected) {
      setPersona(selected);
      setLocation("/register");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: -15 }, animate: { opacity: 1, y: 0 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "🏘️" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black font-display text-orange-600 leading-none", children: "Gharpayy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500 uppercase tracking-widest leading-none", children: "Homes" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-black font-display tracking-tight text-slate-900 mb-3", children: "Who are you?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-slate-600 max-w-xl mx-auto", children: "Gharpayy Homes transforms based on your role · PGs, flats & houses for everyone in Bangalore." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mt-4 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full", children: "₹50 per verification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full", children: "₹500 per booking" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full font-bold", children: "7 unique experiences" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-3", children: PERSONAS$1.slice(0, 4).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.07 + 0.1 },
        onClick: () => setSelected(p.id),
        className: `
                relative cursor-pointer rounded-2xl p-5 border-2 transition-all duration-300
                ${selected === p.id ? `${p.activeColor} scale-105` : `${p.color} hover:-translate-y-1 hover:shadow-md`}
              `,
        children: [
          p.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2.5 right-2.5 text-[9px] font-black px-1.5 py-0.5 rounded-full bg-primary/10 text-primary uppercase tracking-wide", children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-colors
                ${selected === p.id ? "bg-primary text-white" : "bg-black/5 text-current"}`, children: p.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold font-display mb-1 leading-tight", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-70 font-medium leading-snug", children: p.subtitle }),
          selected === p.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scale: 0 },
              animate: { scale: 1 },
              className: "absolute top-2.5 left-2.5 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold",
              children: "✓"
            }
          )
        ]
      },
      p.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-8", children: PERSONAS$1.slice(4).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: (i + 4) * 0.07 + 0.1 },
        onClick: () => setSelected(p.id),
        className: `
                relative cursor-pointer rounded-2xl p-5 border-2 transition-all duration-300
                ${selected === p.id ? `${p.activeColor} scale-105` : `${p.color} hover:-translate-y-1 hover:shadow-md`}
              `,
        children: [
          p.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2.5 right-2.5 text-[9px] font-black px-1.5 py-0.5 rounded-full bg-primary/10 text-primary uppercase tracking-wide", children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-colors
                ${selected === p.id ? "bg-primary text-white" : "bg-black/5 text-current"}`, children: p.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold font-display mb-1 leading-tight", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-70 font-medium leading-snug", children: p.subtitle }),
          selected === p.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scale: 0 },
              animate: { scale: 1 },
              className: "absolute top-2.5 left-2.5 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold",
              children: "✓"
            }
          )
        ]
      },
      p.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 }, className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "lg",
          className: "w-full md:w-auto md:min-w-[360px] h-14 text-lg font-bold shadow-xl shadow-primary/20",
          disabled: !selected,
          onClick: handleContinue,
          children: selected ? `Continue as ${labelMap[selected]} ${PERSONAS$1.find((p) => p.id === selected)?.emoji}` : "Select your role above"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/refer", className: "text-sm font-medium text-muted-foreground hover:text-primary transition-colors", children: "Just want to refer someone? Skip registration →" })
    ] })
  ] }) });
}
function IndexPage() {
  const { persona, referrer } = useAppStore();
  const [, setLocation] = useLocation();
  reactExports.useEffect(() => {
    if (persona && referrer) {
      setLocation("/home");
    } else if (persona && !referrer) {
      setLocation("/register");
    }
  }, [persona, referrer, setLocation]);
  if (!persona || !referrer) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PersonaSelector, {});
  }
  return null;
}
const ReferrerProfilePersona = {
  EARNER: "EARNER",
  STUDENT: "STUDENT",
  GUARD: "GUARD",
  PG_MANAGER: "PG_MANAGER",
  BROKER: "BROKER",
  INFLUENCER: "INFLUENCER",
  CORPORATE_HR: "CORPORATE_HR"
};
const ReferrerProfileLevel = {
  BEGINNER: "BEGINNER",
  EXPLORER: "EXPLORER",
  HUSTLER: "HUSTLER",
  PRO: "PRO",
  LEGEND: "LEGEND"
};
const AddLeadNoteBodyType = {
  NOTE: "NOTE"
};
const now = () => (/* @__PURE__ */ new Date()).toISOString();
const r = (n) => Math.floor(Math.random() * n);
function useAsyncMock(value, delay = 200) {
  return { data: value, isLoading: false, isError: false, error: null, refetch: async () => ({ data: value }) };
}
function makeMutation(impl) {
  const [isPending, setPending] = reactExports.useState(false);
  const [data, setData] = reactExports.useState(void 0);
  const [isSuccess, setSuccess] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const mutateAsync = async (args) => {
    setPending(true);
    try {
      const res = impl ? await impl(args) : { success: true };
      setData(res);
      setSuccess(true);
      return res;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setPending(false);
    }
  };
  const mutate = (args, opts) => {
    mutateAsync(args).then((d) => opts?.onSuccess?.(d)).catch((e) => opts?.onError?.(e));
  };
  return { mutate, mutateAsync, isPending, isSuccess, isError: !!error, error, data, reset: () => {
    setData(void 0);
    setSuccess(false);
    setError(null);
  } };
}
function useMutationMock(impl) {
  return makeMutation(impl);
}
function mockReferrer(id = 1) {
  return {
    id,
    name: "You",
    phone: "+91 90000 00000",
    referralCode: "GHAR-YOU1",
    persona: ReferrerProfilePersona.EARNER,
    totalEarned: 8450,
    pendingEarnings: 1250,
    paidEarnings: 7200,
    xp: 480,
    level: ReferrerProfileLevel.HUSTLER,
    totalReferrals: 14,
    verifiedReferrals: 9,
    bookedReferrals: 4,
    streak: 6,
    teamId: null,
    teamName: null,
    upiId: null,
    createdAt: now()
  };
}
const NAMES = ["Aarav", "Pooja", "Ravi", "Sneha", "Karthik", "Megha", "Vikram", "Anita", "Lokesh", "Shankar", "Priya", "Rohit", "Divya", "Manish", "Neha"];
const PERSONAS = Object.values(ReferrerProfilePersona);
const LEVELS = Object.values(ReferrerProfileLevel);
const AREAS = ["Koramangala", "HSR Layout", "Bellandur", "Marathahalli", "Whitefield", "Indiranagar", "BTM Layout", "Hebbal", "Electronic City", "Jayanagar"];
function mockLeaderboard(limit = 50) {
  return Array.from({ length: limit }).map((_, i) => ({
    rank: i + 1,
    referrerId: i + 1,
    name: `${NAMES[i % NAMES.length]} ${String.fromCharCode(65 + i % 26)}.`,
    persona: PERSONAS[i % PERSONAS.length],
    level: LEVELS[Math.min(LEVELS.length - 1, Math.floor((limit - i) / 10))],
    xp: Math.max(50, (limit - i) * 60 + r(40)),
    totalEarned: Math.max(500, (limit - i) * 350 + r(200)),
    bookedReferrals: Math.max(0, Math.floor((limit - i) / 3)),
    streak: r(15),
    teamName: i % 4 === 0 ? "Bangalore Hustlers" : null
  }));
}
function mockProperty(id) {
  const area = AREAS[id % AREAS.length];
  const rent = 8e3 + id % 6 * 1500;
  const rating = 3.5 + id % 5 * 0.3;
  const reviews = 5 + id % 30;
  return {
    id,
    name: `${area} Comfort PG ${id}`,
    area,
    address: `${id} Main Rd, ${area}`,
    landmark: `Near ${area} Metro`,
    nearbyMetro: `${area} Metro`,
    pincode: "560000",
    gender: ["MALE", "FEMALE", "ANY"][id % 3],
    rent,
    monthlyRent: rent,
    deposit: 15e3 + id % 4 * 5e3,
    totalRooms: 20 + id % 10,
    availableRooms: 1 + id % 8,
    amenities: ["WiFi", "Meals", "Laundry", "AC", "CCTV"].slice(0, 3 + id % 3),
    images: [],
    rating,
    avgRating: rating,
    reviewCount: reviews,
    totalReviews: reviews,
    isVerified: id % 3 !== 0,
    referralBonus: id % 4 * 250,
    description: `Comfortable, well-maintained PG in the heart of ${area}. Walking distance to metro, tech parks and food spots.`,
    availability: "AVAILABLE",
    managerId: 1,
    managerName: "Rohan",
    managerPhone: "+91 90000 00001",
    createdAt: now(),
    updatedAt: now()
  };
}
const ALL_PROPERTIES = Array.from({ length: 24 }).map((_, i) => mockProperty(i + 1));
function mockArea(name, idx) {
  return {
    name,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
    propertyCount: 8 + idx,
    avgRent: 9e3 + idx * 800,
    minRent: 6e3,
    maxRent: 18e3,
    availableRooms: 3 + idx,
    leadCount: 12 + idx * 4
  };
}
function mockTeam(id) {
  return {
    id,
    name: ["Bangalore Hustlers", "Koramangala Crew", "ORR Champions", "Whitefield Warriors"][id % 4],
    description: "Top-performing referral team in Bengaluru.",
    captainId: 1,
    captainName: "Aarav S.",
    inviteCode: `JOIN-${id}${r(900) + 100}`,
    memberCount: 8 + r(20),
    totalXp: 2e3 + r(8e3),
    totalEarned: 25e3 + r(8e4),
    totalBookings: 12 + r(40),
    createdAt: now()
  };
}
function mockChallenge(id) {
  return {
    id,
    type: ["DAILY", "WEEKLY", "MONTHLY", "SPECIAL"][id % 4],
    title: ["Refer 1 today", "Verify 3 this week", "Hit 5 bookings", "Streak of 7"][id % 4],
    description: "Push your hustle and rack up XP.",
    xpReward: 50 + id * 25,
    cashReward: id % 2 ? 100 : 0,
    target: 1 + id % 5,
    progress: r(2 + id % 5),
    completed: false,
    expiresAt: new Date(Date.now() + 864e5 * (1 + id)).toISOString()
  };
}
function mockNotification(id) {
  return {
    id,
    type: ["LEAD_VERIFIED", "PAYOUT", "BADGE", "CHALLENGE", "SYSTEM"][id % 5],
    title: ["Lead verified!", "Payout sent", "New badge", "Challenge ready", "Welcome!"][id % 5],
    message: "You're on a roll. Keep it up.",
    read: id > 2,
    createdAt: new Date(Date.now() - id * 36e5).toISOString()
  };
}
function mockReferral(id) {
  return {
    id,
    referralId: `REF-${1e3 + id}`,
    referrerId: 1,
    referrerName: "You",
    leadName: NAMES[id % NAMES.length],
    leadPhone: `+91 9${String(1e8 + id * 17).slice(0, 9)}`,
    moveInTimeline: ["IMMEDIATE", "WITHIN_WEEK", "WITHIN_MONTH", "EXPLORING"][id % 4],
    area: AREAS[id % AREAS.length],
    status: ["NEW", "CONTACTED", "VERIFIED", "MATCHED", "VISIT", "BOOKED", "CLOSED", "LOST"][id % 8],
    source: "DIRECT",
    isDuplicate: false,
    xpEarned: 10 + id * 5,
    createdAt: new Date(Date.now() - id * 864e5).toISOString(),
    updatedAt: now()
  };
}
const GHARPAYY_AGENTS = [
  { id: 1, name: "Aditi · HSR Expert", phone: "+91 90000 11111", activeLeads: 8, totalClosed: 42 },
  { id: 2, name: "Rahul · Koramangala Expert", phone: "+91 90000 22222", activeLeads: 11, totalClosed: 37 },
  { id: 3, name: "Meera · PG Desk", phone: "+91 90000 33333", activeLeads: 6, totalClosed: 29 },
  { id: 4, name: "Imran · Flats Desk", phone: "+91 90000 44444", activeLeads: 5, totalClosed: 31 }
];
const LEADS_KEY = "gharpayy_referral_leads_v2";
const NOTES_KEY = "gharpayy_referral_notes_v2";
function canStore() {
  return typeof window !== "undefined" && !!window.localStorage;
}
function toLead(ref) {
  const agent = GHARPAYY_AGENTS.find((a2) => a2.id === ref.assignedAgentId);
  let zoneId = ref.zoneId || null;
  let tier = ref.tier || null;
  try {
    if (!zoneId && ref.area) {
      const { zoneForArea: zoneForArea2 } = require("@/lib/gharpayy-zones");
      zoneId = zoneForArea2(String(ref.area).toLowerCase().replace(/\s+/g, "-"))?.slug || null;
    }
    if (!tier) {
      const { tierForRent, tierForBudget } = require("@/lib/pricing-tiers");
      if (ref.monthlyRent) tier = tierForRent(ref.monthlyRent).id;
      else if (ref.budget) tier = tierForBudget(ref.budget);
      else tier = "CLASSICS";
    }
  } catch {
  }
  return {
    ...ref,
    leadPhone: ref.leadPhone || "+91 90000 00000",
    moveInTimeline: ref.moveInTimeline || "WITHIN_WEEK",
    area: ref.area ?? null,
    status: ref.status || "NEW",
    source: ref.source || ref.propertyType || "REFER_AND_EARN",
    referrerName: ref.referrerName ?? "You",
    assignedAgentName: ref.assignedAgentName ?? agent?.name ?? null,
    captainId: ref.captainId ?? null,
    captainName: ref.captainName ?? null,
    personaId: ref.personaId ?? null,
    propertyType: ref.propertyType ?? null,
    sourceContext: ref.sourceContext ?? null,
    zoneId,
    tier,
    channel: ref.channel || "wa-share",
    referrerCode: ref.referrerCode || "GHAR-YOU1",
    isDuplicate: !!ref.isDuplicate,
    createdAt: ref.createdAt || now(),
    updatedAt: ref.updatedAt || now()
  };
}
function seedLeads() {
  return Array.from({ length: 18 }).map((_, i) => {
    const lead = toLead(mockReferral(i + 1));
    lead.assignedAgentName = i % 3 === 0 ? GHARPAYY_AGENTS[i % GHARPAYY_AGENTS.length].name : null;
    lead.assignedAgentId = i % 3 === 0 ? GHARPAYY_AGENTS[i % GHARPAYY_AGENTS.length].id : null;
    return lead;
  });
}
function getStoredLeads() {
  if (!canStore()) return seedLeads();
  try {
    const raw = localStorage.getItem(LEADS_KEY);
    if (raw) return JSON.parse(raw).map(toLead);
    const seeded = seedLeads();
    localStorage.setItem(LEADS_KEY, JSON.stringify(seeded));
    return seeded;
  } catch {
    return seedLeads();
  }
}
function saveLeads(leads) {
  if (!canStore()) return;
  localStorage.setItem(LEADS_KEY, JSON.stringify(leads.map(toLead)));
}
function getNotes() {
  if (!canStore()) return {};
  try {
    return JSON.parse(localStorage.getItem(NOTES_KEY) || "{}");
  } catch {
    return {};
  }
}
function saveNotes(notes) {
  if (!canStore()) return;
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}
function upsertLead(next) {
  const leads = getStoredLeads();
  const idx = leads.findIndex((l) => l.id === next.id || l.referralId === next.referralId);
  if (idx >= 0) leads[idx] = toLead({ ...leads[idx], ...next, updatedAt: now() });
  else leads.unshift(toLead(next));
  saveLeads(leads);
  return toLead(idx >= 0 ? leads[idx] : next);
}
function getLeadNotes(leadId) {
  const notes = getNotes()[String(leadId)];
  if (notes?.length) return notes;
  return [{ id: 1, leadId, note: "Lead captured from Refer & Earn and ready for assignment.", type: "NOTE", createdByName: "System", createdAt: now() }];
}
function addLeadNote(leadId, note, type, agentName = "Admin User") {
  const all = getNotes();
  const list = all[String(leadId)] || getLeadNotes(leadId);
  const entry = { id: Date.now(), leadId, note, type, createdByName: agentName, createdAt: now() };
  all[String(leadId)] = [entry, ...list];
  saveNotes(all);
  return entry;
}
function useGetReferrerDashboard(_id) {
  const referrer = mockReferrer();
  const dashboard = {
    referrer,
    badges: [
      { id: "first-home", name: "First Home", description: "First referral submitted", icon: "🏠", earnedAt: now() },
      { id: "money", name: "Money Maker", description: "First ₹500 earned", icon: "💰", earnedAt: now() }
    ],
    nextLevelXp: 700,
    currentLevelXp: 300,
    recentActivity: Array.from({ length: 6 }).map((_, i) => ({
      id: i + 1,
      type: ["REFERRAL_SUBMITTED", "LEAD_VERIFIED", "LEAD_BOOKED", "BADGE_EARNED"][i % 4],
      description: ["Submitted a lead for HSR", "Lead Sneha verified", "Booking confirmed in Koramangala", "Earned Money Maker badge"][i % 4],
      amount: i % 3 === 0 ? 250 : null,
      xpGained: 20 + i * 5,
      createdAt: new Date(Date.now() - i * 36e5).toISOString()
    })),
    rank: 7,
    teamRank: 3,
    unreadNotifications: 2,
    activeChallenges: 4
  };
  return useAsyncMock(dashboard);
}
function useGetReferrerEarningsChart(_id) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const data = months.map((m, i) => ({
    month: m,
    year: 2025,
    earned: 800 + i * 600 + r(400),
    referrals: 2 + i,
    bookings: i
  }));
  return useAsyncMock(data);
}
function useGetReferrerReferrals(_id) {
  return useAsyncMock(getStoredLeads().filter((lead) => !lead.referrerId || lead.referrerId === _id).slice(0, 20));
}
function useGetReferrerByCode(code) {
  const ref = mockReferrer();
  ref.referralCode = code || ref.referralCode;
  return useAsyncMock({ referrer: ref, badges: [], rank: 7 });
}
function useRegisterReferrer() {
  return useMutationMock(({ data }) => {
    const ref = mockReferrer();
    ref.name = data.name;
    ref.phone = data.phone;
    ref.persona = data.persona;
    ref.referralCode = `${(data.name || "GHAR").slice(0, 4).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    return ref;
  });
}
function useSubmitReferral() {
  return useMutationMock((args) => {
    const id = Date.now();
    const inData = args.data || {};
    let expert = null;
    let captainName = null;
    try {
      const { CAPTAIN_BY_ID: CAPTAIN_BY_ID2, captainForArea: captainForArea2, captainForPersona: captainForPersona2 } = require("@/lib/captains");
      expert = inData.captainId && CAPTAIN_BY_ID2[inData.captainId] || (inData.personaId ? captainForPersona2(inData.personaId) : null) || (inData.area ? captainForArea2(inData.area) : null) || null;
      captainName = expert?.name || null;
    } catch {
    }
    const legacyAgent = GHARPAYY_AGENTS[(inData.area || "").length % GHARPAYY_AGENTS.length];
    const ref = toLead({
      ...mockReferral(id % 9e3),
      id,
      referralId: `GHAR-${String(id).slice(-6)}`,
      leadName: inData.leadName,
      leadPhone: inData.leadPhone,
      area: inData.area || null,
      moveInTimeline: inData.moveInTimeline,
      status: "NEW",
      source: "REFER_AND_EARN",
      propertyType: inData.propertyType || "PG",
      personaId: inData.personaId || null,
      captainId: inData.captainId || expert?.id || null,
      captainName,
      sourceContext: inData.sourceContext || null,
      referrerId: inData.referrerId || 1,
      referrerName: inData.referrerName || "Referral user",
      referrerPhone: inData.referrerPhone || null,
      assignedAgentId: legacyAgent.id,
      assignedAgentName: captainName ? `${captainName} · expert` : legacyAgent.name
    });
    const saved = upsertLead(ref);
    addLeadNote(
      saved.id,
      captainName ? `Routed to ${captainName} via ${inData.sourceContext || "super-app"}.` : `Assigned automatically to ${legacyAgent.name}.`,
      "STATUS_CHANGE",
      "Routing Bot"
    );
    return { ...saved, referral: saved, referralId: saved.referralId, leadName: saved.leadName };
  });
}
function useCalculateEarnings(input) {
  const refs = input?.referrals ?? input?.referralsPerMonth ?? 10;
  const verifyRate = input?.verifyRate ?? 0.7;
  const bookRate = input?.bookRate ?? 0.3;
  const verified = Math.round(refs * verifyRate);
  const booked = Math.round(verified * bookRate);
  const totalEarnings = verified * 50 + booked * 500;
  const monthlyProjection = totalEarnings * 4;
  const annual = monthlyProjection * 12;
  const xp = verified * 10 + booked * 50;
  const estimatedLevel = monthlyProjection > 2e4 ? "LEGEND" : monthlyProjection > 8e3 ? "PRO" : monthlyProjection > 3e3 ? "HUSTLER" : monthlyProjection > 800 ? "EXPLORER" : "BEGINNER";
  const data = { totalEarnings, monthlyProjection, annual, verified, booked, verifiedCount: verified, bookedCount: booked, monthly: totalEarnings, xp, estimatedLevel };
  return { data, isLoading: false, isError: false, error: null, refetch: async () => ({ data }) };
}
function useGetLeaderboard(opts) {
  return useAsyncMock(mockLeaderboard(opts?.limit));
}
function useGetAreas() {
  return useAsyncMock(AREAS.map((a2, i) => mockArea(a2, i)));
}
function useGetProperties(filters) {
  let list = ALL_PROPERTIES;
  if (filters?.area) list = list.filter((p) => p.area === filters.area);
  if (filters?.gender) list = list.filter((p) => p.gender === filters.gender);
  if (filters?.maxPrice) list = list.filter((p) => (p.monthlyRent ?? p.rent) <= filters.maxPrice);
  const res = { properties: list, total: list.length };
  return useAsyncMock(res);
}
function useGetProperty(id) {
  const numId = Number(id || 1);
  const p = ALL_PROPERTIES.find((x) => x.id === numId) || ALL_PROPERTIES[0];
  const detail = {
    property: p,
    reviews: Array.from({ length: 4 }).map((_, i) => ({
      id: i + 1,
      propertyId: p.id,
      reviewerName: NAMES[i % NAMES.length],
      userName: NAMES[i % NAMES.length],
      rating: 4 + i % 2,
      comment: "Clean place, helpful staff. Good food.",
      stayDuration: i % 2 ? "3 months" : "6 months",
      createdAt: new Date(Date.now() - i * 864e5).toISOString()
    })),
    nearbyProperties: ALL_PROPERTIES.filter((x) => x.id !== p.id && x.area === p.area).slice(0, 4)
  };
  return useAsyncMock(detail);
}
function useAddPropertyReview() {
  return useMutationMock(() => ({ success: true }));
}
function useCreateProperty() {
  return useMutationMock(({ data }) => ({ ...mockProperty(ALL_PROPERTIES.length + 1), ...data }));
}
function useGetManagerProperties(_id) {
  return useAsyncMock(ALL_PROPERTIES.slice(0, 4));
}
function useUpdatePropertyAvailability() {
  return useMutationMock();
}
function useGetTeams() {
  return useAsyncMock(Array.from({ length: 6 }).map((_, i) => mockTeam(i + 1)));
}
function useGetTeamLeaderboard(opts) {
  const teams = Array.from({ length: opts?.limit }).map((_, i) => {
    const t = mockTeam(i + 1);
    const e = {
      rank: i + 1,
      teamId: t.id,
      teamName: t.name,
      totalXp: t.totalXp,
      totalEarned: t.totalEarned,
      memberCount: t.memberCount,
      totalBookings: t.totalBookings
    };
    return e;
  });
  return useAsyncMock(teams);
}
function useGetTeam(id) {
  const t = mockTeam(Number(id || 1));
  const detail = {
    ...t,
    members: Array.from({ length: 8 }).map((_, i) => ({
      referrerId: i + 2,
      name: `${NAMES[i % NAMES.length]} ${String.fromCharCode(65 + i)}.`,
      persona: PERSONAS[i % PERSONAS.length],
      level: LEVELS[i % LEVELS.length],
      xp: 200 + i * 80,
      contributedXp: 100 + i * 40,
      bookedReferrals: i,
      joinedAt: now()
    }))
  };
  return useAsyncMock(detail);
}
function useCreateTeam() {
  return useMutationMock(({ data }) => ({
    ...mockTeam(99),
    name: data.name,
    description: data.description
  }));
}
function useJoinTeam() {
  return useMutationMock(() => ({ success: true, team: mockTeam(1) }));
}
function useGetChallenges(_id) {
  return useAsyncMock(Array.from({ length: 6 }).map((_, i) => mockChallenge(i + 1)));
}
function useCompleteChallenge() {
  return useMutationMock(() => ({ success: true, xpEarned: 100 }));
}
function useGetNotifications(_id) {
  return useAsyncMock(Array.from({ length: 6 }).map((_, i) => mockNotification(i + 1)));
}
function useMarkNotificationRead() {
  return useMutationMock();
}
function useMarkAllNotificationsRead() {
  return useMutationMock();
}
function useGetPayoutMethod(_id) {
  const pm = null;
  return useAsyncMock(pm);
}
function useSetPayoutMethod() {
  return useMutationMock(({ data }) => ({
    id: 1,
    type: data.type,
    upiId: data.upiId ?? null,
    accountName: data.accountName ?? null,
    accountNumber: data.accountNumber ?? null,
    ifscCode: data.ifscCode ?? null,
    isVerified: true,
    createdAt: now()
  }));
}
const AdminGetLeadsStatus = {
  NEW: "NEW",
  CONTACTED: "CONTACTED",
  VERIFIED: "VERIFIED",
  MATCHED: "MATCHED",
  VISIT: "VISIT",
  BOOKED: "BOOKED",
  CLOSED: "CLOSED",
  LOST: "LOST"
};
function useAdminGetAnalytics() {
  const leads = getStoredLeads();
  const count = (status) => leads.filter((l) => l.status === status).length;
  const bookedLeads = count("BOOKED") + count("CLOSED");
  const verifiedLeads = count("VERIFIED") + count("MATCHED") + count("VISIT") + bookedLeads;
  const totalLeads = leads.length || 1;
  const summary = {
    totalLeads: leads.length,
    verifiedLeads,
    bookedLeads,
    lostLeads: count("LOST"),
    conversionRate: Math.round(bookedLeads / totalLeads * 100),
    totalPayoutLiability: verifiedLeads * 50 + bookedLeads * 500,
    totalRevenue: bookedLeads * 2e3,
    totalReferrers: 412,
    activeReferrers: 184,
    totalProperties: ALL_PROPERTIES.length,
    leadsByStatus: Object.values(AdminGetLeadsStatus).map((s) => ({ status: s, count: count(s) })),
    leadsBySource: ["REFER_AND_EARN", "DIRECT", "PG_DETAIL"].map((s) => ({ source: s, count: leads.filter((l) => l.source === s).length })),
    recentLeads: leads.slice(0, 6),
    topEarners: mockLeaderboard(5)
  };
  return useAsyncMock(summary);
}
function useAdminGetLeads(_filter) {
  let leads = getStoredLeads();
  if (_filter?.status) leads = leads.filter((l) => l.status === _filter.status);
  const allNotes = getNotes();
  const hydrated = leads.map((l) => ({
    ...l,
    notes: allNotes[String(l.id)] || []
  }));
  const res = { leads: hydrated, total: hydrated.length, offset: 0, limit: hydrated.length };
  return useAsyncMock(res);
}
function useAdminGetLead(id) {
  const lead = getStoredLeads().find((l) => l.id === Number(id)) || toLead(mockReferral(Number(id || 1)));
  const detail = {
    ...lead,
    notes: getLeadNotes(lead.id),
    timeline: [
      { status: "NEW", timestamp: lead.createdAt, note: "Lead submitted through Refer & Earn." },
      ...lead.assignedAgentName ? [{ status: "ASSIGNED", timestamp: lead.updatedAt, note: `Assigned to ${lead.assignedAgentName}` }] : []
    ]
  };
  return useAsyncMock(detail);
}
function getAdminGetLeadQueryKey(id) {
  return ["admin", "lead", id];
}
function useAdminUpdateLeadStatus() {
  return useMutationMock((args) => {
    const leadId = args.leadId ?? args.id;
    const incoming = args.data || {};
    const leads = getStoredLeads();
    const current = leads.find((l) => l.id === Number(leadId)) || toLead(mockReferral(Number(leadId || 1)));
    const agent = incoming.assignedAgentId ? GHARPAYY_AGENTS.find((a2) => a2.id === Number(incoming.assignedAgentId)) : void 0;
    let captainName = current.captainName ?? null;
    if (incoming.captainId) {
      try {
        const { CAPTAIN_BY_ID: CAPTAIN_BY_ID2 } = require("@/lib/captains");
        captainName = CAPTAIN_BY_ID2[incoming.captainId]?.name ?? null;
      } catch {
      }
    }
    const updated = upsertLead({
      ...current,
      status: incoming.status || current.status,
      assignedAgentId: incoming.assignedAgentId ?? current.assignedAgentId ?? null,
      assignedAgentName: agent?.name ?? (captainName ? `${captainName} · expert` : current.assignedAgentName ?? null),
      captainId: incoming.captainId ?? current.captainId ?? null,
      captainName: captainName ?? current.captainName ?? null,
      updatedAt: now()
    });
    if (incoming.note || incoming.status || incoming.captainId) {
      const text = incoming.note || (incoming.captainId ? `Reassigned to ${captainName || incoming.captainId}.` : `Status changed to ${updated.status}.`);
      addLeadNote(updated.id, text, "STATUS_CHANGE", "Admin User");
    }
    return updated;
  });
}
function useAdminAutoRoute() {
  return useMutationMock(() => {
    let routed = 0;
    let helpers = {};
    try {
      helpers = require("@/lib/captains");
    } catch {
    }
    const leads = getStoredLeads();
    for (const l of leads) {
      if (l.captainId) continue;
      const expert = l.personaId && helpers.captainForPersona ? helpers.captainForPersona(l.personaId) : l.area && helpers.captainForArea ? helpers.captainForArea(l.area) : null;
      if (!expert) continue;
      upsertLead({
        ...l,
        captainId: expert.id,
        captainName: expert.name,
        assignedAgentName: `${expert.name} · expert`,
        updatedAt: now()
      });
      addLeadNote(l.id, `Auto-routed to ${expert.name}.`, "STATUS_CHANGE", "Routing Bot");
      routed++;
    }
    return { count: routed };
  });
}
function useAdminAddLeadNote() {
  return useMutationMock((args) => addLeadNote(args.leadId ?? args.id, args.data?.note || "Note added", args.data?.type || "NOTE", args.data?.agentName || "Admin User"));
}
function useAdminGetPayouts(_filter) {
  return useAsyncMock(Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    referrerId: i + 1,
    referrerName: `${NAMES[i % NAMES.length]} ${String.fromCharCode(65 + i)}.`,
    amount: 250 + i * 100,
    status: i < 3 ? "PENDING" : i < 6 ? "APPROVED" : "PAID",
    method: i % 2 ? "UPI" : "BANK",
    createdAt: new Date(Date.now() - i * 864e5).toISOString()
  })));
}
function getAdminGetPayoutsQueryKey() {
  return ["admin", "payouts"];
}
function useAdminApprovePayout() {
  return useMutationMock();
}
function useAdminMarkPayoutPaid() {
  return useMutationMock();
}
function useAdminGetProperties(_filter) {
  return useAsyncMock(ALL_PROPERTIES);
}
function useAdminVerifyProperty() {
  return useMutationMock();
}
const Form = FormProvider;
const FormFieldContext = reactExports.createContext(null);
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Controller, { ...props }) });
};
const useFormField = () => {
  const fieldContext = reactExports.useContext(FormFieldContext);
  const itemContext = reactExports.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>");
  }
  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
const FormItemContext = reactExports.createContext(null);
const FormItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const id = reactExports.useId();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn$1("space-y-2", className), ...props }) });
  }
);
FormItem.displayName = "FormItem";
const FormLabel = reactExports.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Label$1,
    {
      ref,
      className: cn$1(error && "text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
});
FormLabel.displayName = "FormLabel";
const FormControl = reactExports.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Slot,
    {
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
});
FormControl.displayName = "FormControl";
const FormDescription = reactExports.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn$1("text-[0.8rem] text-muted-foreground", className),
      ...props
    }
  );
});
FormDescription.displayName = "FormDescription";
const FormMessage = reactExports.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      ref,
      id: formMessageId,
      className: cn$1("text-[0.8rem] font-medium text-destructive", className),
      ...props,
      children: body
    }
  );
});
FormMessage.displayName = "FormMessage";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const formSchema$1 = objectType({
  name: stringType().min(2, "Name must be at least 2 characters"),
  phone: stringType().regex(/^[0-9]{10}$/, "Must be a valid 10-digit Indian phone number")
});
function RegisterPage() {
  const [, setLocation] = useLocation();
  const { persona, setReferrer } = useAppStore();
  const registerReferrer = useRegisterReferrer();
  const form = useForm({
    resolver: a(formSchema$1),
    defaultValues: {
      name: "",
      phone: ""
    }
  });
  if (!persona) {
    setLocation("/");
    return null;
  }
  const onSubmit = (values) => {
    registerReferrer.mutate({
      data: {
        name: values.name,
        phone: values.phone,
        persona
      }
    }, {
      onSuccess: (data) => {
        setReferrer(data);
        toast$1.success("Registration successful!");
        setLocation("/home");
      },
      onError: (error) => {
        toast$1.error(error.message || "Registration failed. Please try again.");
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-secondary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      className: "w-full max-w-md bg-card border border-border shadow-xl rounded-2xl overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-border/50 bg-primary/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setLocation("/"),
              className: "flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-1" }),
                "Back to selection"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display text-foreground", children: "Complete your profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1", children: [
            "Setting up your account as a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: persona }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "name",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Full Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Enter your full name", ...field, className: "h-12" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FormField,
            {
              control: form.control,
              name: "phone",
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Phone Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-3 text-muted-foreground", children: "+91" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "9876543210", ...field, className: "h-12 pl-10", maxLength: 10 })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              className: "w-full h-12 text-lg font-bold",
              disabled: registerReferrer.isPending,
              children: registerReferrer.isPending ? "Creating account..." : "Start Earning"
            }
          )
        ] }) }) })
      ]
    }
  ) });
}
const ROLES = [
  { id: "GUARD", emoji: "🛡️", label: "Daily Worker", bg: "bg-zinc-800 text-white", ring: "ring-zinc-500" },
  { id: "STUDENT", emoji: "🎓", label: "Student", bg: "bg-orange-50 text-orange-900", ring: "ring-orange-400" },
  { id: "EARNER", emoji: "💼", label: "Side Hustler", bg: "bg-slate-50 text-slate-900", ring: "ring-slate-400" },
  { id: "PG_MANAGER", emoji: "🏠", label: "PG Manager", bg: "bg-blue-50 text-blue-900", ring: "ring-blue-400" },
  { id: "BROKER", emoji: "🤝", label: "Broker", bg: "bg-slate-800 text-white", ring: "ring-green-400" },
  { id: "INFLUENCER", emoji: "📱", label: "Influencer", bg: "bg-purple-50 text-purple-900", ring: "ring-purple-400" },
  { id: "CORPORATE_HR", emoji: "🏢", label: "Corporate HR", bg: "bg-indigo-50 text-indigo-900", ring: "ring-indigo-400" }
];
const PERSONA_HOME = {
  GUARD: "/home",
  STUDENT: "/home",
  EARNER: "/home",
  PG_MANAGER: "/manager",
  BROKER: "/broker",
  INFLUENCER: "/influencer",
  CORPORATE_HR: "/corporate"
};
function RoleSwitcher() {
  const [open, setOpen] = reactExports.useState(false);
  const { persona, setPersona } = useAppStore();
  const [, setLocation] = useLocation();
  const handleSwitch = (id) => {
    setPersona(id);
    setOpen(false);
    setTimeout(() => setLocation(PERSONA_HOME[id] ?? "/home"), 100);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setOpen(true),
        className: "fixed bottom-24 right-4 z-40 md:bottom-6 w-12 h-12 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-700 transition-colors border-2 border-white/10",
        title: "Switch Role",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchCamera, { className: "w-5 h-5" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => setOpen(false),
          className: "fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", stiffness: 300, damping: 30 },
          className: "fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl p-5 shadow-2xl max-h-[85vh] overflow-y-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-black font-display text-slate-900", children: "Switch Role" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: "Test any experience instantly" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), className: "w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-slate-600" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: ROLES.map((role) => {
              const isActive = persona === role.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => handleSwitch(role.id),
                  className: `
                        relative flex items-center gap-3 p-3.5 rounded-2xl border-2 text-left transition-all
                        ${isActive ? `ring-2 ${role.ring} border-transparent ${role.bg} shadow-md` : `${role.bg} border-transparent hover:border-slate-200 hover:shadow-sm`}
                      `,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: role.emoji }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm leading-tight", children: role.label }),
                    isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-white" }) })
                  ]
                },
                role.id
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-slate-400 mt-5", children: "Switching role changes your dashboard experience" })
          ]
        }
      )
    ] }) })
  ] });
}
function Layout({ children }) {
  const [location, setLocation] = useLocation();
  const { persona, logout } = useAppStore();
  const handleLogout = () => {
    logout();
    setLocation("/");
  };
  const isGuard = persona === "GUARD";
  const isStudent = persona === "STUDENT";
  const isEarner = persona === "EARNER";
  const isManager = persona === "PG_MANAGER";
  const isBroker = persona === "BROKER";
  const isInfluencer = persona === "INFLUENCER";
  const isCorporate = persona === "CORPORATE_HR";
  const themeClass = cn({
    "bg-zinc-900 text-white min-h-screen": isGuard,
    "bg-[#FDF8F5] text-slate-900 min-h-screen": isStudent,
    "bg-[#F0F4FF] text-slate-900 min-h-screen": isManager,
    "bg-[#FBFBFC] text-slate-900 min-h-screen": isEarner || !persona,
    "bg-slate-900 text-white min-h-screen": isBroker,
    "bg-purple-50 text-purple-950 min-h-screen": isInfluencer,
    "bg-indigo-50 text-indigo-950 min-h-screen": isCorporate
  });
  if (!persona) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[100dvh] bg-[#FBFBFC] w-full", children });
  }
  const navItems = isManager ? [
    { href: "/manager", icon: ChartNoAxesColumn, label: "Dashboard" },
    { href: "/manager/properties", icon: Building2, label: "Properties" },
    { href: "/pg", icon: MapPin, label: "Browse" },
    { href: "/refer", icon: CirclePlus, label: "Add Lead" },
    { href: "/me", icon: User, label: "Profile" }
  ] : isBroker ? [
    { href: "/broker", icon: ChartNoAxesColumn, label: "Dashboard" },
    { href: "/refer", icon: CirclePlus, label: "New Lead" },
    { href: "/pg", icon: Building2, label: "Homes" },
    { href: "/flash", icon: Zap, label: "Flash Deals" },
    { href: "/me", icon: User, label: "Profile" }
  ] : isInfluencer ? [
    { href: "/influencer", icon: Share2, label: "Creator Hub" },
    { href: "/refer", icon: CirclePlus, label: "Refer" },
    { href: "/chain", icon: GitBranch, label: "My Chain" },
    { href: "/leaderboard", icon: Trophy, label: "Rankings" },
    { href: "/me", icon: User, label: "Profile" }
  ] : isCorporate ? [
    { href: "/corporate", icon: ChartNoAxesColumn, label: "HR Hub" },
    { href: "/refer", icon: CirclePlus, label: "Add Employee" },
    { href: "/pg", icon: Building2, label: "Find Homes" },
    { href: "/areas", icon: MapPin, label: "Areas" },
    { href: "/me", icon: User, label: "Profile" }
  ] : [
    { href: "/home", icon: House, label: "Home" },
    { href: "/refer", icon: CirclePlus, label: "Refer" },
    { href: "/pg", icon: Building2, label: "Homes" },
    { href: "/leaderboard", icon: Trophy, label: "Rankings" },
    { href: "/me", icon: User, label: "Me" }
  ];
  const extraNavBase = [
    { href: "/challenges", icon: Target, label: "Challenges" },
    { href: "/teams", icon: Users, label: "Teams" },
    { href: "/squad-battles", icon: Zap, label: "Battles" },
    { href: "/streak", icon: Flame, label: "Streak" },
    { href: "/lucky-draw", icon: Target, label: "Lucky Draw" },
    { href: "/flash", icon: Zap, label: "Flash Deals" },
    { href: "/earnings", icon: TrendingUp, label: "Earnings" },
    { href: "/visits", icon: Calendar, label: "Visits" },
    { href: "/chain", icon: GitBranch, label: "My Chain" },
    { href: "/activity", icon: Activity, label: "Activity" },
    { href: "/calculator", icon: Calculator, label: "Calculator" },
    { href: "/notifications", icon: Bell, label: "Notifications" },
    { href: "/areas", icon: MapPin, label: "Areas" }
  ];
  const mobileNav = navItems.slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("min-h-[100dvh] w-full flex flex-col pb-16 md:pb-0 md:flex-row", themeClass), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden md:flex flex-col w-64 border-r border-border/10 bg-card/50 backdrop-blur shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏘️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-black font-display text-primary leading-none", children: "Gharpayy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none", children: "Homes" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold px-2 py-0.5 bg-primary/10 text-primary rounded-full", children: persona }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex-1 px-4 space-y-1 overflow-y-auto", children: [
        navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          NavItem,
          {
            href: item.href,
            icon: item.icon,
            label: item.label,
            active: location === item.href || location.startsWith(item.href + "/"),
            isGuard: isGuard || isBroker
          },
          item.href
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 pb-2 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60", children: "More" }) }),
        extraNavBase.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          NavItem,
          {
            href: item.href,
            icon: item.icon,
            label: item.label,
            active: location === item.href,
            isGuard: isGuard || isBroker
          },
          item.href
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-border/10 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
            },
            className: "flex items-center gap-3 px-4 py-2 w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md",
            title: "Switch Role",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchCamera, { className: "w-4 h-4" }),
              "Switch Role"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleLogout,
            className: "flex items-center gap-3 px-4 py-2 w-full text-left text-sm font-medium text-muted-foreground hover:text-destructive transition-colors rounded-md",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-5 h-5" }),
              "Log out"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 w-full max-w-5xl mx-auto overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
        "md:hidden flex items-center justify-between px-4 py-3 sticky top-0 z-10 border-b",
        isGuard || isBroker ? "bg-zinc-900/90 border-zinc-700/30 backdrop-blur" : "bg-background/90 border-border/10 backdrop-blur"
      ), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "🏘️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-base font-black font-display leading-none", isGuard || isBroker ? "text-orange-400" : "text-primary"), children: "Gharpayy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[9px] font-bold ml-1 opacity-60 uppercase tracking-widest", isGuard || isBroker ? "text-white" : "text-foreground"), children: "Homes" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/streak", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: cn("w-5 h-5", isGuard || isBroker ? "text-orange-400" : "text-orange-500") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/notifications", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: cn("w-5 h-5", isGuard || isBroker ? "text-zinc-400" : "text-muted-foreground") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleLogout, title: "Log out", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: cn("w-5 h-5", isGuard || isBroker ? "text-zinc-400 hover:text-red-400" : "text-muted-foreground hover:text-destructive") }) })
        ] })
      ] }),
      children
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background border-t border-border/10 flex items-center justify-around px-2 z-50", children: mobileNav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      MobileNavItem,
      {
        href: item.href,
        icon: item.icon,
        label: item.label,
        active: location === item.href || item.href !== "/" && location.startsWith(item.href)
      },
      item.href
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RoleSwitcher, {})
  ] });
}
function NavItem({ href, icon: Icon2, label, active, isGuard }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href, className: cn(
    "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
    active ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted text-muted-foreground",
    isGuard && "text-base font-bold"
  ), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-4 h-4" }),
    label
  ] });
}
function MobileNavItem({ href, icon: Icon2, label, active }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href, className: cn(
    "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
  ), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-5 h-5", strokeWidth: active ? 2.5 : 2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium", children: label })
  ] });
}
const LEVEL_NAMES = {
  GUARD: {
    [ReferrerProfileLevel.BEGINNER]: "Naya Banda",
    [ReferrerProfileLevel.EXPLORER]: "Regular",
    [ReferrerProfileLevel.HUSTLER]: "Senior",
    [ReferrerProfileLevel.PRO]: "Expert",
    [ReferrerProfileLevel.LEGEND]: "Boss"
  },
  STUDENT: {
    [ReferrerProfileLevel.BEGINNER]: "Fresher",
    [ReferrerProfileLevel.EXPLORER]: "Intern",
    [ReferrerProfileLevel.HUSTLER]: "Campus Pro",
    [ReferrerProfileLevel.PRO]: "Alumni",
    [ReferrerProfileLevel.LEGEND]: "Legend"
  },
  EARNER: {
    [ReferrerProfileLevel.BEGINNER]: "Trainee",
    [ReferrerProfileLevel.EXPLORER]: "Agent",
    [ReferrerProfileLevel.HUSTLER]: "Senior Agent",
    [ReferrerProfileLevel.PRO]: "Pro Agent",
    [ReferrerProfileLevel.LEGEND]: "Elite Closer"
  },
  BROKER: {
    [ReferrerProfileLevel.BEGINNER]: "Junior Broker",
    [ReferrerProfileLevel.EXPLORER]: "Broker",
    [ReferrerProfileLevel.HUSTLER]: "Senior Broker",
    [ReferrerProfileLevel.PRO]: "Master Broker",
    [ReferrerProfileLevel.LEGEND]: "Elite Broker"
  },
  INFLUENCER: {
    [ReferrerProfileLevel.BEGINNER]: "Nano Creator",
    [ReferrerProfileLevel.EXPLORER]: "Micro Creator",
    [ReferrerProfileLevel.HUSTLER]: "Creator",
    [ReferrerProfileLevel.PRO]: "Top Creator",
    [ReferrerProfileLevel.LEGEND]: "Creator Legend"
  },
  CORPORATE_HR: {
    [ReferrerProfileLevel.BEGINNER]: "HR Associate",
    [ReferrerProfileLevel.EXPLORER]: "HR Executive",
    [ReferrerProfileLevel.HUSTLER]: "HR Manager",
    [ReferrerProfileLevel.PRO]: "HR Director",
    [ReferrerProfileLevel.LEGEND]: "CHRO"
  },
  PG_MANAGER: {
    [ReferrerProfileLevel.BEGINNER]: "New Manager",
    [ReferrerProfileLevel.EXPLORER]: "Active Manager",
    [ReferrerProfileLevel.HUSTLER]: "Pro Manager",
    [ReferrerProfileLevel.PRO]: "Top Manager",
    [ReferrerProfileLevel.LEGEND]: "Elite Manager"
  }
};
const BADGE_ICONS = {
  "First Home": "🏠",
  "Money Maker": "💰",
  "On Fire": "🔥",
  "Speed Closer": "⚡",
  "Top Earner": "👑",
  "Sharpshooter": "🎯",
  "Team Expert": "🏆",
  "Streak King": "🌊",
  "Influencer": "📱",
  "Corporate Pro": "🏢"
};
const PERSONA_QUOTES = {
  GUARD: [
    "Har referral ek naya mauka hai. Bhej do! 🔥",
    "Mehnat ka phal meetha hota hai. Aaj bhi ek refer karo.",
    "Tu hi apna boss hai. Aur paisa tere haath mein hai. 💰",
    "Chhota kadam, bada faida. Bas ek call kar.",
    "Kal ka kal dekha jayega · aaj refer karo!"
  ],
  STUDENT: [
    "Your side hustle can pay your next semester's fees! 🎓",
    "One referral = Netflix + Spotify + Swiggy for a month.",
    "Your network is your net worth. Share your link today!",
    "Turn your WhatsApp into a wallet. Refer a friend now.",
    "Every PG booking is one step closer to financial freedom. 🚀"
  ],
  EARNER: [
    "Pipeline full = wallet full. Keep pushing leads. 📈",
    "Your next ₹500 is just one booking away.",
    "Top earners don't wait for leads · they create them.",
    "Consistency beats talent. Keep the referrals flowing.",
    "Every verified lead is compounding interest on your hustle. 💼"
  ],
  PG_MANAGER: [
    "A full room is a happy room. List your vacancies today. 🏠",
    "Your PG is someone's first home in the city · make it great.",
    "Verified listings get 3x more leads. Keep yours updated.",
    "Every empty room is a missed opportunity. Fill it fast.",
    "Great property + great referrals = zero vacancy. 🏡"
  ],
  BROKER: [
    "Your reputation is built one placement at a time. 🤝",
    "Top brokers close 3x more by following up faster.",
    "Every area you know is a market you own.",
    "Data beats gut. Track your pipeline daily.",
    "Commission is just the beginning · relationships last forever. 💼"
  ],
  INFLUENCER: [
    "Your audience trusts you. Turn that trust into income. 📱",
    "Every post is a potential ₹500. Share your link today.",
    "Authentic content converts. Be real, earn real.",
    "Your followers are looking for a PG · help them find one.",
    "One story, one reel, one link · one booking. 🎥"
  ],
  CORPORATE_HR: [
    "Happy employees start with a great home. Help them settle in. 🏢",
    "Housing support = 40% better employee retention.",
    "Every hire you house is a problem you've solved for good.",
    "New city, new job, new home · you can make all three happen.",
    "The best onboarding starts before Day 1. Find them a home. 🤝"
  ]
};
function getDailyQuote(persona) {
  const quotes = PERSONA_QUOTES[persona] ?? PERSONA_QUOTES.EARNER;
  const dayOfYear = Math.floor(Date.now() / (1e3 * 60 * 60 * 24));
  return quotes[dayOfYear % quotes.length];
}
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-primary/10", className),
      ...props
    }
  );
}
const badgeVariants = cva(
  // @replit
  // Whitespace-nowrap: Badges should never wrap.
  "whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate ",
  {
    variants: {
      variant: {
        default: (
          // @replit shadow-xs instead of shadow, no hover because we use hover-elevate
          "border-transparent bg-primary text-primary-foreground shadow-xs"
        ),
        secondary: (
          // @replit no hover because we use hover-elevate
          "border-transparent bg-secondary text-secondary-foreground"
        ),
        destructive: (
          // @replit shadow-xs instead of shadow, no hover because we use hover-elevate
          "border-transparent bg-destructive text-destructive-foreground shadow-xs"
        ),
        // @replit shadow-xs" - use badge outline variable
        outline: "text-foreground border [border-color:var(--badge-outline)]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
function HomePage() {
  const { persona, referrer } = useAppStore();
  const [, setLocation] = useLocation();
  if (!persona) {
    setLocation("/");
    return null;
  }
  if (!referrer) {
    setLocation("/register");
    return null;
  }
  if (persona === "PG_MANAGER") {
    setLocation("/manager");
    return null;
  }
  if (persona === "BROKER") {
    setLocation("/broker");
    return null;
  }
  if (persona === "INFLUENCER") {
    setLocation("/influencer");
    return null;
  }
  if (persona === "CORPORATE_HR") {
    setLocation("/corporate");
    return null;
  }
  const { data: dashboard } = useGetReferrerDashboard(referrer.id);
  const quote = getDailyQuote(persona);
  if (!dashboard) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full rounded-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full rounded-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full rounded-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full rounded-xl" })
      ] })
    ] }) });
  }
  const levelName = LEVEL_NAMES[persona]?.[dashboard.referrer.level] || dashboard.referrer.level;
  const progressPercent = Math.min(100, Math.max(
    0,
    (dashboard.referrer.xp - dashboard.currentLevelXp) / (dashboard.nextLevelXp - dashboard.currentLevelXp) * 100
  ));
  const quickActions = [
    { label: "Refer Now", icon: "💸", href: "/refer" },
    { label: "Streak", icon: "🔥", href: "/streak" },
    { label: "Leaderboard", icon: "🏆", href: "/leaderboard" },
    { label: "Earnings", icon: "💰", href: "/earnings" },
    { label: "Lucky Draw", icon: "🎰", href: "/lucky-draw" },
    { label: "My Chain", icon: "🔗", href: "/chain" }
  ];
  if (persona === "GUARD") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -8 },
          animate: { opacity: 1, y: 0 },
          className: "bg-orange-500/10 border border-orange-500/20 rounded-2xl px-4 py-3 flex items-start gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl shrink-0", children: "💬" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-300 font-bold text-sm leading-snug", children: quote })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          className: "bg-zinc-800 rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-zinc-700 relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-4 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-32 h-32 text-green-500" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400 font-bold mb-1", children: "TOTAL KAMAI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl font-black text-green-400 tracking-tighter mb-4", children: [
              "₹",
              dashboard.referrer.totalEarned
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-zinc-900/50 p-4 rounded-xl border border-zinc-700/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-lg font-black text-xl", children: dashboard.rank }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-zinc-400 font-bold uppercase", children: "Rank" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white leading-none", children: "Top Referrer" })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: quickActions.map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation(a2.href),
          className: "bg-zinc-800 border border-zinc-700 rounded-2xl p-3 flex flex-col items-center gap-1.5 hover:bg-zinc-700 active:scale-95 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: a2.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-zinc-400 uppercase tracking-wide", children: a2.label })
          ]
        },
        a2.href
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation("/refer"),
          className: "w-full bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white rounded-3xl p-6 flex flex-col items-center justify-center gap-3 shadow-[0_10px_0_rgba(194,65,12,1)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "💰" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-black uppercase tracking-wide", children: "Naya Refer Karo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-200 text-sm", children: "PG · Flat · Ghar · Sab kuch" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-zinc-800 rounded-3xl p-6 border border-zinc-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400 font-bold text-sm", children: "LEVEL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black text-white", children: levelName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-400 font-bold", children: [
            dashboard.referrer.xp,
            " XP"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-zinc-900 rounded-full overflow-hidden border border-zinc-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { width: 0 },
            animate: { width: `${progressPercent}%` },
            transition: { type: "spring", stiffness: 50, damping: 15 },
            className: "h-full bg-orange-500 rounded-full"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-zinc-500 mt-2 text-right font-medium", children: [
          dashboard.nextLevelXp - dashboard.referrer.xp,
          " XP to go"
        ] })
      ] })
    ] }) });
  }
  if (persona === "STUDENT") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 },
          className: "bg-orange-50 border border-orange-100 rounded-2xl px-4 py-3 flex items-start gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl shrink-0", children: "✨" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-orange-800 font-semibold text-sm leading-snug italic", children: [
              '"',
              quote,
              '"'
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold font-display text-slate-800", children: [
            "Hi, ",
            dashboard.referrer.name.split(" ")[0],
            " 👋"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-600 font-medium", children: "Help a friend find a home, earn together!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 border border-orange-200 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-6 h-6" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "bg-white rounded-3xl p-6 shadow-xl shadow-orange-100/50 border border-orange-100 relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-slate-500 mb-1", children: "Your Wallet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl font-black text-slate-800 tracking-tight", children: [
                  "₹",
                  dashboard.referrer.totalEarned
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-slate-500 mb-1", children: "Campus Rank" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl font-black text-orange-500 tracking-tight", children: [
                  "#",
                  dashboard.rank
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-orange-50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm font-medium mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-700 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-yellow-400 fill-yellow-400" }),
                  levelName
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-600", children: [
                  dashboard.referrer.xp,
                  " / ",
                  dashboard.nextLevelXp,
                  " XP"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-slate-100 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: { width: `${progressPercent}%` },
                  transition: { type: "spring", stiffness: 40 },
                  className: "h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                }
              ) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: quickActions.slice(1).map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation(a2.href),
          className: "bg-white border border-slate-100 rounded-2xl p-3 flex flex-col items-center gap-1 shadow-sm hover:shadow-md active:scale-95 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: a2.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-slate-500", children: a2.label })
          ]
        },
        a2.href
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation("/refer"),
          className: "w-full bg-slate-900 hover:bg-slate-800 transition-colors text-white rounded-2xl p-4 flex items-center justify-between shadow-lg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg leading-tight", children: "Refer a Friend" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm", children: "PGs, Flats & Houses · Earn ₹500" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-6 h-6 text-white/50" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold font-display text-slate-800 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5 text-orange-500" }),
          "Recent Activity"
        ] }),
        dashboard.recentActivity.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: dashboard.recentActivity.slice(0, 3).map((activity) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 mt-2 rounded-full bg-orange-400 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-slate-800", children: activity.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500", children: [
              new Date(activity.createdAt).toLocaleDateString(),
              activity.amount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-green-600 font-medium", children: [
                "+₹",
                activity.amount
              ] }),
              activity.xpGained && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-orange-500 font-medium", children: [
                "+",
                activity.xpGained,
                " XP"
              ] })
            ] })
          ] })
        ] }, activity.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 text-center py-4", children: "No activity yet. Start referring!" })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-start gap-3 shadow-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-orange-500 shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-600 text-sm font-medium italic leading-snug", children: [
            '"',
            quote,
            '"'
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display tracking-tight text-slate-900", children: "Earnings Command" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground font-medium", children: [
          "Welcome back, ",
          dashboard.referrer.name
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-white px-3 py-1 font-mono text-xs", children: dashboard.referrer.referralCode })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1", children: "Total Paid" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-slate-900", children: [
          "₹",
          dashboard.referrer.paidEarnings
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.05 }, className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-1 bg-orange-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1", children: "Pending" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-orange-600", children: [
          "₹",
          dashboard.referrer.pendingEarnings
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1", children: "Conversion" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-slate-900", children: [
          dashboard.referrer.totalReferrals ? Math.round(dashboard.referrer.bookedReferrals / dashboard.referrer.totalReferrals * 100) : 0,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 }, className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1", children: "Streak" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-slate-900 flex items-center gap-1", children: [
          dashboard.referrer.streak,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5 text-red-500" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-2", children: quickActions.map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setLocation(a2.href),
        className: "bg-white border border-slate-200 rounded-xl p-3 flex flex-col items-center gap-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: a2.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-slate-500 text-center leading-tight", children: a2.label })
        ]
      },
      a2.href
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-slate-900 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-orange-500" }),
            "Pipeline"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLocation("/activity"), className: "text-xs text-orange-500 font-bold", children: "View All →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
          { label: "Total Referrals", value: dashboard.referrer.totalReferrals, pct: 100, color: "bg-slate-800" },
          { label: "Verified Leads", value: dashboard.referrer.verifiedReferrals, pct: dashboard.referrer.totalReferrals ? dashboard.referrer.verifiedReferrals / dashboard.referrer.totalReferrals * 100 : 0, color: "bg-orange-400" },
          { label: "Bookings", value: dashboard.referrer.bookedReferrals, pct: dashboard.referrer.totalReferrals ? dashboard.referrer.bookedReferrals / dashboard.referrer.totalReferrals * 100 : 0, color: "bg-green-500" }
        ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-slate-600", children: row.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-900", children: row.value })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-slate-100 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${row.color} rounded-full`, style: { width: `${row.pct}%` } }) })
        ] }, row.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-slate-900 flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-orange-500 fill-orange-500" }),
            levelName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-500 mb-6", children: [
            "Rank #",
            dashboard.rank,
            " · Gharpayy Homes"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex justify-between items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-black text-slate-900", children: [
              dashboard.referrer.xp,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-slate-500 font-medium", children: "XP" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-orange-600", children: [
              dashboard.nextLevelXp,
              " XP required"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-slate-100 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { width: 0 },
              animate: { width: `${progressPercent}%` },
              transition: { type: "spring", stiffness: 40 },
              className: "h-full bg-orange-500 rounded-full"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setLocation("/refer"),
            className: "mt-6 w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold transition-colors",
            children: "Add New Lead →"
          }
        )
      ] })
    ] })
  ] }) });
}
const Select$1 = Root2;
const SelectValue = Value;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = Trigger.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Content2,
  {
    ref,
    className: cn(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = Content2.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label$2,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = Label$2.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
    ]
  }
));
SelectItem.displayName = Item.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = Separator.displayName;
function PageHeader({ title, subtitle, backHref, right, dark }) {
  const [, setLocation] = useLocation();
  const handleBack = () => {
    if (backHref) {
      setLocation(backHref);
    } else {
      window.history.back();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
    "flex items-center gap-3 p-4 border-b sticky top-0 z-20 backdrop-blur",
    dark ? "bg-zinc-900/90 border-zinc-700/50 text-white" : "bg-background/90 border-border/40 text-foreground"
  ), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handleBack,
        className: cn(
          "w-9 h-9 flex items-center justify-center rounded-xl transition-colors shrink-0",
          dark ? "bg-white/10 hover:bg-white/20" : "bg-muted hover:bg-muted/80"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: cn("font-black font-display text-lg leading-tight truncate", dark ? "text-white" : "text-foreground"), children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-xs font-medium truncate", dark ? "text-white/60" : "text-muted-foreground"), children: subtitle })
    ] }),
    right && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: right })
  ] });
}
function readReferContext(params) {
  const area = params.get("area") || params.get("zone") || null;
  const expert = params.get("expert") || params.get("captain") || null;
  const persona = params.get("persona") || null;
  const propertyType = params.get("type") || params.get("propertyType") || null;
  const source = params.get("source") || (area ? `area:${area}` : persona ? `persona:${persona}` : "super-app:home");
  return { area, expert, persona, propertyType, source };
}
const CAPTAINS = [
  { id: "aditi-hsr", name: "Aditi Rao", initial: "A", title: "HSR · Bellandur expert", phone: "919000011111", responseSla: "Replies in 12 min", hubs: ["HSR Layout", "Bellandur", "Sarjapur Road"], quote: "I sell commute truth before room photos.", active: 14, closed: 68 },
  { id: "rahul-koramangala", name: "Rahul Nair", initial: "R", title: "Koramangala closer", phone: "919000022222", responseSla: "Replies in 9 min", hubs: ["Koramangala", "BTM Layout", "Jayanagar"], quote: "Students need clarity, founders need speed.", active: 18, closed: 91 },
  { id: "meera-indiranagar", name: "Meera Iyer", initial: "M", title: "Indiranagar · premium desk", phone: "919000033333", responseSla: "Replies in 15 min", hubs: ["Indiranagar", "Domlur", "Ulsoor"], quote: "Premium renters buy neighbourhood confidence.", active: 9, closed: 54 },
  { id: "imran-whitefield", name: "Imran Khan", initial: "I", title: "Whitefield move-in desk", phone: "919000044444", responseSla: "Replies in 18 min", hubs: ["Whitefield", "Marathahalli", "Brookefield"], quote: "IT corridor leads close when routes are real.", active: 12, closed: 63 },
  { id: "neha-north", name: "Neha Verma", initial: "N", title: "North Bengaluru atlas", phone: "919000055555", responseSla: "Replies in 20 min", hubs: ["Hebbal", "Manyata", "Yelahanka"], quote: "Families and freshers both want proof.", active: 7, closed: 41 }
];
const CAPTAIN_BY_ID = Object.fromEntries(CAPTAINS.map((captain) => [captain.id, captain]));
function norm(value) {
  return String(value ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
function captainForArea(area) {
  const key = norm(area);
  if (/koramangala|btm|jayanagar|christ/.test(key)) return CAPTAIN_BY_ID["rahul-koramangala"];
  if (/indiranagar|domlur|ulsoor|mg-road/.test(key)) return CAPTAIN_BY_ID["meera-indiranagar"];
  if (/whitefield|marathahalli|brookefield|itpl/.test(key)) return CAPTAIN_BY_ID["imran-whitefield"];
  if (/hebbal|manyata|yelahanka|north/.test(key)) return CAPTAIN_BY_ID["neha-north"];
  return CAPTAIN_BY_ID["aditi-hsr"];
}
function captainForPersona(persona) {
  const key = norm(persona);
  if (/founder|premium|nri/.test(key)) return CAPTAIN_BY_ID["meera-indiranagar"];
  if (/student|campus|christ|guard/.test(key)) return CAPTAIN_BY_ID["rahul-koramangala"];
  if (/techie|orr|it|whitefield/.test(key)) return CAPTAIN_BY_ID["imran-whitefield"];
  if (/family|north/.test(key)) return CAPTAIN_BY_ID["neha-north"];
  return CAPTAIN_BY_ID["aditi-hsr"];
}
function captainWaLink(expert, text = `Hi ${expert.name}, I need help with a Gharpayy lead.`) {
  return `https://wa.me/${expert.phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}
const PROPERTY_TYPES = [
  { value: "PG", label: "🏠 PG / Hostel", desc: "Paying Guest accommodation" },
  { value: "1BHK", label: "🏢 1BHK Flat", desc: "1 bedroom flat / apartment" },
  { value: "2BHK", label: "🏘️ 2BHK Flat", desc: "2 bedroom flat / apartment" },
  { value: "3BHK", label: "🏗️ 3BHK+ Flat", desc: "3 or more bedrooms" },
  { value: "HOUSE", label: "🏡 Independent House", desc: "Villa or independent home" },
  { value: "STUDIO", label: "🛏️ Studio / 1RK", desc: "Single room with attached bath" }
];
const formSchema = objectType({
  leadName: stringType().min(2, "Name must be at least 2 characters"),
  leadPhone: stringType().regex(/^[0-9]{10}$/, "Must be a valid 10-digit Indian phone number"),
  propertyType: stringType().default("PG"),
  moveInTimeline: enumType(["IMMEDIATE", "WITHIN_WEEK", "WITHIN_MONTH", "EXPLORING"]),
  area: stringType().optional(),
  referralCode: stringType().optional()
});
function ReferPage() {
  const [, setLocation] = useLocation();
  const { persona, referrer } = useAppStore();
  const submitReferral = useSubmitReferral();
  const [successData, setSuccessData] = reactExports.useState(null);
  const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const refCodeFromUrl = searchParams.get("ref");
  const ctx = readReferContext(searchParams);
  const ctxCaptain = ctx.expert && CAPTAIN_BY_ID[ctx.expert] || (ctx.persona ? captainForPersona(ctx.persona) : null) || (ctx.area ? captainForArea(ctx.area) : null) || captainForArea(null);
  const initialType = ctx.propertyType || "PG";
  const [selectedType, setSelectedType] = reactExports.useState(initialType);
  const form = useForm({
    resolver: a(formSchema),
    defaultValues: {
      leadName: "",
      leadPhone: "",
      propertyType: initialType,
      moveInTimeline: "WITHIN_WEEK",
      area: ctx.area || "",
      referralCode: refCodeFromUrl || ""
    }
  });
  const onSubmit = (values) => {
    submitReferral.mutate({
      data: {
        leadName: values.leadName,
        leadPhone: values.leadPhone,
        moveInTimeline: values.moveInTimeline,
        area: values.area,
        referrerId: referrer?.id,
        referrerPhone: referrer?.phone,
        referrerName: referrer?.name,
        referralCode: values.referralCode || void 0,
        propertyType: selectedType,
        captainId: ctxCaptain.id,
        personaId: ctx.persona,
        sourceContext: ctx.source
      }
    }, {
      onSuccess: (data) => {
        setSuccessData({ id: data.referralId, name: data.leadName, expert: ctxCaptain });
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ["#F97316", "#1FA968", "#FFFFFF"] });
      },
      onError: (error) => {
        toast$1.error(error.message || "Failed to submit referral");
      }
    });
  };
  const copyLink = () => {
    if (referrer) {
      const link = `${window.location.origin}/refer?ref=${referrer.referralCode}`;
      navigator.clipboard.writeText(link);
      toast$1.success("Link copied to clipboard!");
    }
  };
  const shareWhatsApp = () => {
    if (referrer) {
      const link = `${window.location.origin}/refer?ref=${referrer.referralCode}`;
      const text = `Hey! Looking for a PG, flat or house in Bangalore? Use my Gharpayy Homes link: ${link}`;
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    }
  };
  if (successData) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-[80vh] p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        className: "w-full max-w-md bg-card p-8 rounded-3xl border border-border shadow-xl text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-green-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-black font-display text-foreground mb-2", children: "Referral Sent! 🎉" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-6", children: [
            "We'll contact ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: successData.name }),
            " shortly to help them find their perfect home."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 p-4 rounded-xl border border-border/50 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1", children: "Referral ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-mono font-bold tracking-tight text-primary", children: successData.id })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-4 mb-6 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-widest text-orange-700 font-bold mb-2", children: "Lead routed to" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-black", children: successData.expert.initial }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground text-base", children: successData.expert.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: successData.expert.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-orange-700 font-semibold mt-0.5", children: successData.expert.responseSla })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: captainWaLink(successData.expert, `Hey ${successData.expert.name}, I just sent you ${successData.name} (${successData.id}). Please take care.`),
                target: "_blank",
                rel: "noreferrer",
                className: "mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                  " WhatsApp ",
                  successData.expert.name,
                  " now"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-8 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold mt-0.5", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: "Earn ₹50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "When lead is verified" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold mt-0.5", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: "Earn ₹500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "When they move in to their new home" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setSuccessData(null), className: "w-full h-12 text-lg font-bold", children: "Refer Another Person" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setLocation("/home"), className: "w-full h-12", children: "← Back to Dashboard" })
          ] })
        ]
      }
    ) }) });
  }
  if (persona === "GUARD") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Paisa Kamao", subtitle: "PG · Flat · Ghar · Sab kuch refer karo", backHref: "/home", dark: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 max-w-md mx-auto mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zinc-400 font-bold mb-3 text-sm uppercase tracking-wide", children: "Kya dhundh raha hai?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: PROPERTY_TYPES.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setSelectedType(pt.value);
                form.setValue("propertyType", pt.value);
              },
              className: `py-2 px-1 rounded-xl text-xs font-bold transition-all ${selectedType === pt.value ? "bg-orange-500 text-white" : "bg-zinc-800 text-zinc-400 border border-zinc-700"}`,
              children: pt.label
            },
            pt.value
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { control: form.control, name: "leadName", render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-lg text-zinc-300", children: "Naam" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Bande ka naam", ...field, className: "h-16 text-lg rounded-2xl border-2 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { control: form.control, name: "leadPhone", render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { className: "text-lg text-zinc-300", children: "Mobile Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "9876543210", ...field, className: "h-16 text-xl tracking-widest font-bold rounded-2xl border-2 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500", maxLength: 10, type: "tel" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            className: "w-full h-16 text-2xl font-black rounded-full bg-green-500 hover:bg-green-600 text-white shadow-[0_8px_0_rgb(22,163,74)] active:translate-y-2 active:shadow-none transition-all",
            disabled: submitReferral.isPending,
            children: submitReferral.isPending ? "Ruko..." : "BHEJ DO 🚀"
          }
        )
      ] }) }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Send a friend to the right expert", subtitle: "We know Bengaluru. Your friend gets the truth · you get ₹500 on move-in.", backHref: "/home" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-2xl mx-auto", children: [
      (ctx.area || ctx.persona || ctx.expert) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 rounded-2xl border border-orange-200 bg-orange-50/70 p-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-black", children: ctxCaptain.initial }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-foreground leading-tight", children: [
            "Goes straight to ",
            ctxCaptain.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground truncate", children: [
            ctx.area ? `From ${ctx.area} insights` : ctx.persona ? `Matched via ${ctx.persona}` : ctxCaptain.title,
            " · ",
            ctxCaptain.responseSla
          ] })
        ] })
      ] }),
      referrer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: "Your Gharpayy Homes Link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Share · PGs, flats & houses all covered" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "flex-1 sm:flex-none gap-2 border-primary/20 hover:bg-primary/10", onClick: copyLink, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
            " Copy"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "flex-1 sm:flex-none gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white", onClick: shareWhatsApp, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" }),
            " WhatsApp"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border shadow-sm rounded-2xl p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Form, { ...form, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-3", children: "What are they looking for? *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-2", children: PROPERTY_TYPES.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                setSelectedType(pt.value);
                form.setValue("propertyType", pt.value);
              },
              className: `py-3 px-3 rounded-xl text-left transition-all border-2 ${selectedType === pt.value ? "border-primary bg-primary/5" : "border-border bg-background hover:border-primary/30"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm", children: pt.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: pt.desc })
              ]
            },
            pt.value
          )) })
        ] }),
        !referrer && !refCodeFromUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-muted rounded-xl mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "You are not logged in. Enter a referral code if you have one." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { control: form.control, name: "referralCode", render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(FormItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Enter referral code (optional)", ...field, className: "h-12 font-mono uppercase" }) }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { control: form.control, name: "leadName", render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Friend's Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "John Doe", ...field, className: "h-12" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { control: form.control, name: "leadPhone", render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Friend's Phone *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "9876543210", ...field, className: "h-12", maxLength: 10, type: "tel" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { control: form.control, name: "moveInTimeline", render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Move-in Timeline *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select$1, { onValueChange: field.onChange, defaultValue: field.value, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select timeline" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "IMMEDIATE", children: "🔥 Immediate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "WITHIN_WEEK", children: "📅 Within a week" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "WITHIN_MONTH", children: "🗓️ Within a month" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "EXPLORING", children: "🔍 Just exploring" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { control: form.control, name: "area", render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormLabel, { children: "Preferred Area (Optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "e.g. Koramangala, HSR, Indiranagar", ...field, className: "h-12" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FormMessage, {})
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full h-14 text-lg font-bold", disabled: submitReferral.isPending, children: submitReferral.isPending ? "Submitting..." : `Submit Referral · ${PROPERTY_TYPES.find((p) => p.value === selectedType)?.label ?? "🏠 PG"}` })
      ] }) }) })
    ] })
  ] });
}
function toast(input) {
  if (typeof input === "string") return toast$1(input);
  const { title, description, variant } = input;
  const message = title ?? description ?? "";
  if (variant === "destructive") return toast$1.error(message, { description: title ? description : void 0 });
  return toast$1(message, { description: title ? description : void 0 });
}
function useToast() {
  return { toast, toasts: [], dismiss: () => {
  } };
}
const uid$3 = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const K$4 = (n) => `bookos_${n}_v1`;
const load$4 = (k) => {
  if (typeof localStorage === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(k) || "[]");
  } catch {
    return [];
  }
};
const save$4 = (k, d) => {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(k, JSON.stringify(d));
};
const listeners$3 = /* @__PURE__ */ new Set();
const subscribe$3 = (fn) => {
  listeners$3.add(fn);
  return () => listeners$3.delete(fn);
};
const notify$3 = () => listeners$3.forEach((f) => f());
function makeDB$2(name) {
  const key = K$4(name);
  return {
    key,
    all() {
      return load$4(key);
    },
    get(id) {
      return load$4(key).find((x) => x.id === id);
    },
    create(data) {
      const all = load$4(key);
      const row = { id: uid$3(), ...data };
      all.unshift(row);
      save$4(key, all);
      notify$3();
      return row;
    },
    update(id, patch) {
      const all = load$4(key);
      const i = all.findIndex((x) => x.id === id);
      if (i === -1) return null;
      all[i] = { ...all[i], ...patch };
      save$4(key, all);
      notify$3();
      return all[i];
    },
    del(id) {
      save$4(key, load$4(key).filter((x) => x.id !== id));
      notify$3();
    },
    replace(rows) {
      save$4(key, rows);
      notify$3();
    }
  };
}
const BookingsDB = makeDB$2("bookings");
const RentsDB = makeDB$2("rents");
const QuotationsDB = makeDB$2("quotations");
const TenantsDB = makeDB$2("tenants");
const PropertiesDB = makeDB$2("properties");
const PaymentsDB = makeDB$2("payments");
const ExpensesDB = makeDB$2("expenses");
const MaintenanceDB = makeDB$2("maintenance");
const StaffDB = makeDB$2("staff");
const DocumentsDB = makeDB$2("documents");
const NotificationsDB = makeDB$2("notifications");
const ActivityDB = makeDB$2("activity");
const SETTINGS_KEY = K$4("settings_obj");
const Settings = {
  get() {
    if (typeof localStorage === "undefined") return defaultSettings();
    try {
      return { ...defaultSettings(), ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}") };
    } catch {
      return defaultSettings();
    }
  },
  set(patch) {
    const cur = Settings.get();
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...cur, ...patch }));
    notify$3();
  }
};
function defaultSettings() {
  return {
    brand: "Gharpayy",
    upiId: "gharpayy@upi",
    adminPhone: "+919876543210",
    offerWindowMins: 15,
    currency: "INR"
  };
}
const TPL_KEY = K$4("templates_obj");
const Templates = {
  get() {
    if (typeof localStorage === "undefined") return defaultTemplates();
    try {
      return { ...defaultTemplates(), ...JSON.parse(localStorage.getItem(TPL_KEY) || "{}") };
    } catch {
      return defaultTemplates();
    }
  },
  set(patch) {
    localStorage.setItem(TPL_KEY, JSON.stringify({ ...Templates.get(), ...patch }));
    notify$3();
  }
};
function defaultTemplates() {
  return {
    offer: "Hi {name}! Locked an exclusive offer for {property} room {room}: ₹{offer}/mo (was ₹{rent}). Pay ₹{token} token via UPI to confirm. Expires in {mins} min.",
    reminder: "{name}, your offer for {property} expires in {mins} min. Pay token to lock it.",
    paid: "Thanks {name}! Token of ₹{token} received. Welcome to {property}. Move-in: {movein}.",
    overdue: "Hi {name}, rent of ₹{amount} for {month} is overdue. Please pay at the earliest."
  };
}
function useStore(getter) {
  const [v, setV] = reactExports.useState(getter);
  reactExports.useEffect(() => {
    setV(getter());
    subscribe$3(() => setV(getter()));
    return () => {
    };
  }, []);
  return v;
}
const Workflow = {
  approveBooking(id, windowMins) {
    const mins = windowMins ?? Settings.get().offerWindowMins;
    const b = BookingsDB.update(id, {
      status: "approved",
      offerExpiresAt: new Date(Date.now() + mins * 6e4).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    if (b) {
      ActivityDB.create({ action: "approved", entity: "booking", entityId: id, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
      NotificationsDB.create({ title: `Offer live for ${b.tenantName}`, body: `${b.propertyName} · ₹${b.discountedRent} · ${mins}m timer`, kind: "info", read: false, createdAt: (/* @__PURE__ */ new Date()).toISOString(), link: `/manager/bookos/bookings/${id}` });
    }
    return b;
  },
  markPaid(id, ref) {
    const b = BookingsDB.update(id, { status: "paid", paidRef: ref || null, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
    if (!b) return null;
    TenantsDB.create({
      name: b.tenantName,
      phone: b.tenantPhone,
      propertyName: b.propertyName,
      roomNumber: b.roomNumber || void 0,
      moveInDate: b.moveInDate || void 0,
      rent: b.discountedRent,
      deposit: b.deposit,
      status: "active",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    const month = (b.moveInDate || (/* @__PURE__ */ new Date()).toISOString()).slice(0, 7);
    RentsDB.create({
      bookingId: b.id,
      tenantName: b.tenantName,
      propertyName: b.propertyName,
      month,
      amount: b.discountedRent,
      status: "pending",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    PaymentsDB.create({
      bookingId: b.id,
      tenantName: b.tenantName,
      amount: b.tokenAmount,
      method: "UPI",
      ref,
      type: "token",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    ActivityDB.create({ action: "paid", entity: "booking", entityId: id, meta: { amount: b.tokenAmount }, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
    NotificationsDB.create({ title: `✓ ${b.tenantName} paid token`, body: `${b.propertyName} · ₹${b.tokenAmount}`, kind: "success", read: false, createdAt: (/* @__PURE__ */ new Date()).toISOString(), link: `/manager/bookos/bookings/${id}` });
    return b;
  },
  cancelBooking(id) {
    const b = BookingsDB.update(id, { status: "cancelled", updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
    if (b) ActivityDB.create({ action: "cancelled", entity: "booking", entityId: id, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
    return b;
  },
  syncExpiry() {
    const all = BookingsDB.all();
    const now2 = Date.now();
    let dirty = false;
    all.forEach((b) => {
      if (b.status === "approved" && b.offerExpiresAt && +new Date(b.offerExpiresAt) <= now2) {
        b.status = "expired";
        b.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
        dirty = true;
      }
    });
    if (dirty) {
      BookingsDB.replace(all);
    }
  },
  syncRentOverdue() {
    const all = RentsDB.all();
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const cutoffMonth = today.toISOString().slice(0, 7);
    let dirty = false;
    all.forEach((r2) => {
      if (r2.status === "pending" && r2.month < cutoffMonth) {
        r2.status = "overdue";
        dirty = true;
      }
    });
    if (dirty) RentsDB.replace(all);
  },
  convertQuoteToBooking(qid) {
    const q = QuotationsDB.get(qid);
    if (!q) return null;
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    const b = BookingsDB.create({
      tenantName: q.tenantName,
      tenantPhone: q.tenantPhone,
      propertyName: q.propertyName,
      roomNumber: q.roomNumber || null,
      moveInDate: null,
      actualRent: q.rent,
      discountedRent: q.offerRent || q.rent,
      deposit: q.deposit,
      maintenanceFee: q.maintenance,
      maintenanceType: "One-Time",
      tokenAmount: q.tokenAmount,
      stayDurationMonths: 11,
      noticePeriodMonths: 1,
      status: "pending",
      createdAt: now2,
      updatedAt: now2
    });
    QuotationsDB.update(qid, { status: "converted" });
    ActivityDB.create({ action: "converted", entity: "quotation", entityId: qid, meta: { bookingId: b.id }, createdAt: now2 });
    return b;
  }
};
function bookingStats() {
  const all = BookingsDB.all();
  return {
    total: all.length,
    pending: all.filter((b) => b.status === "pending").length,
    approved: all.filter((b) => b.status === "approved").length,
    paid: all.filter((b) => b.status === "paid").length,
    expired: all.filter((b) => b.status === "expired").length,
    tokenRevenue: all.filter((b) => b.status === "paid").reduce((s, b) => s + b.tokenAmount, 0),
    avgTicket: all.length ? Math.round(all.reduce((s, b) => s + b.discountedRent, 0) / all.length) : 0,
    conversion: all.length ? Math.round(all.filter((b) => b.status === "paid").length / all.length * 100) : 0
  };
}
function rentStats() {
  const all = RentsDB.all();
  return {
    collected: all.filter((r2) => r2.status === "paid").reduce((s, r2) => s + r2.amount, 0),
    pending: all.filter((r2) => r2.status === "pending").reduce((s, r2) => s + r2.amount, 0),
    overdue: all.filter((r2) => r2.status === "overdue").reduce((s, r2) => s + r2.amount, 0),
    mrr: all.filter((r2) => r2.status !== "overdue").reduce((s, r2) => s + r2.amount, 0)
  };
}
const K$3 = "bookos_leads_v1";
const EK = "bookos_events_v1";
const listeners$2 = /* @__PURE__ */ new Set();
const notify$2 = () => listeners$2.forEach((f) => f());
const subscribe$2 = (fn) => {
  listeners$2.add(fn);
  return () => listeners$2.delete(fn);
};
const uid$2 = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const load$3 = (k) => {
  try {
    return JSON.parse(localStorage.getItem(k) || "[]");
  } catch {
    return [];
  }
};
const save$3 = (k, v) => localStorage.setItem(k, JSON.stringify(v));
function scoreFor(action) {
  return {
    view: 5,
    wa_click: 25,
    call_click: 30,
    save: 15,
    compare: 15,
    quote_request: 55,
    visit_request: 70,
    booking_request: 90,
    brochure: 20
  }[action] || 10;
}
function stageFor(action) {
  if (action === "booking_request") return "booked";
  if (action === "visit_request") return "visit";
  if (action === "quote_request") return "quoted";
  if (["wa_click", "call_click", "save"].includes(action)) return "qualified";
  return "new";
}
const LeadsDB = {
  all() {
    if (typeof localStorage === "undefined") return [];
    return load$3(K$3);
  },
  get(id) {
    return this.all().find((l) => l.id === id);
  },
  create(input) {
    const all = this.all();
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    const action = input.action || "view";
    const row = {
      id: uid$2(),
      source: input.source || "direct",
      area: input.area,
      propertyId: input.propertyId,
      propertyName: input.propertyName,
      roomNumber: input.roomNumber,
      action,
      name: input.name,
      phone: input.phone,
      email: input.email,
      moveInDate: input.moveInDate,
      notes: input.notes,
      stage: input.stage || stageFor(action),
      score: input.score ?? scoreFor(action),
      createdAt: now2,
      updatedAt: now2
    };
    all.unshift(row);
    save$3(K$3, all);
    notify$2();
    return row;
  },
  update(id, patch) {
    const all = this.all();
    const i = all.findIndex((l) => l.id === id);
    if (i === -1) return null;
    all[i] = { ...all[i], ...patch, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
    save$3(K$3, all);
    notify$2();
    return all[i];
  },
  del(id) {
    save$3(K$3, this.all().filter((l) => l.id !== id));
    notify$2();
  },
  replace(rows) {
    save$3(K$3, rows);
    notify$2();
  }
};
const EventsDB = {
  all() {
    if (typeof localStorage === "undefined") return [];
    return load$3(EK);
  },
  create(e) {
    if (typeof localStorage === "undefined") return;
    const all = this.all();
    const row = {
      id: uid$2(),
      action: e.action || "view",
      area: e.area,
      propertyId: e.propertyId,
      propertyName: e.propertyName,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    all.unshift(row);
    save$3(EK, all.slice(0, 2e3));
    notify$2();
  },
  replace(rows) {
    save$3(EK, rows);
    notify$2();
  }
};
function track(action, meta = {}) {
  if (typeof localStorage === "undefined") return;
  EventsDB.create({ action, area: meta.area, propertyId: meta.propertyId, propertyName: meta.propertyName });
  const highIntent = ["quote_request", "visit_request", "booking_request", "brochure", "wa_click", "call_click"];
  if (highIntent.includes(action) || meta.phone) {
    LeadsDB.create({ ...meta, action });
  }
}
function funnelByArea() {
  const ev = EventsDB.all();
  const leads = LeadsDB.all();
  const map = {};
  ev.forEach((e) => {
    if (!e.area) return;
    map[e.area] ||= { views: 0, enquiries: 0, quotes: 0, visits: 0, bookings: 0 };
    if (e.action === "view") map[e.area].views++;
    if (["wa_click", "call_click", "save"].includes(e.action)) map[e.area].enquiries++;
    if (e.action === "quote_request") map[e.area].quotes++;
    if (e.action === "visit_request") map[e.area].visits++;
    if (e.action === "booking_request") map[e.area].bookings++;
  });
  leads.forEach((l) => {
    if (!l.area) return;
    map[l.area] ||= { views: 0, enquiries: 0, quotes: 0, visits: 0, bookings: 0 };
    if (l.stage === "booked") map[l.area].bookings++;
  });
  return Object.entries(map).map(([area, v]) => ({ area, ...v })).sort((a2, b) => b.views + b.bookings * 10 - (a2.views + a2.bookings * 10));
}
function leadStats() {
  const all = LeadsDB.all();
  const by = { new: 0, qualified: 0, quoted: 0, visit: 0, booked: 0, lost: 0 };
  all.forEach((l) => {
    by[l.stage]++;
  });
  return { total: all.length, ...by, avgScore: all.length ? Math.round(all.reduce((s, l) => s + l.score, 0) / all.length) : 0 };
}
function useLeadsStore(getter) {
  const [v, setV] = reactExports.useState(getter);
  reactExports.useEffect(() => {
    setV(getter());
    subscribe$2(() => setV(getter()));
    return () => {
    };
  }, []);
  return v;
}
const fmt = (n) => "₹" + new Intl.NumberFormat("en-IN").format(Math.round(n || 0));
const fmtShort = (n) => {
  const v = Math.abs(n);
  if (v >= 1e7) return "₹" + (n / 1e7).toFixed(1) + "Cr";
  if (v >= 1e5) return "₹" + (n / 1e5).toFixed(1) + "L";
  if (v >= 1e3) return "₹" + (n / 1e3).toFixed(1) + "K";
  return fmt(n);
};
const timeAgo$3 = (iso) => {
  if (!iso) return "—";
  const d = Date.now() - +new Date(iso);
  if (d < 6e4) return "just now";
  if (d < 36e5) return Math.floor(d / 6e4) + "m ago";
  if (d < 864e5) return Math.floor(d / 36e5) + "h ago";
  return Math.floor(d / 864e5) + "d ago";
};
const countdown = (iso) => {
  if (!iso) return null;
  const ms = +new Date(iso) - Date.now();
  if (ms <= 0) return "expired";
  const m = Math.floor(ms / 6e4);
  const s = Math.floor(ms % 6e4 / 1e3);
  return `${m}:${s.toString().padStart(2, "0")}`;
};
const waLink = (phone, text) => `https://wa.me/${(phone || "").replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
const upiUrl = (upiId, name, amount, note) => `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
const qrUrl = (data) => `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(data)}&bgcolor=ffffff&color=080808&margin=10`;
const copyText = (t) => {
  if (typeof navigator !== "undefined" && navigator.clipboard) navigator.clipboard.writeText(t).catch(() => {
  });
};
const csv = (rows) => {
  if (!rows.length) return "";
  const keys = Object.keys(rows[0]);
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  return [keys.join(","), ...rows.map((r2) => keys.map((k) => esc(r2[k])).join(","))].join("\n");
};
const downloadFile = (name, content, mime = "text/csv") => {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a2 = document.createElement("a");
  a2.href = url;
  a2.download = name;
  a2.click();
  setTimeout(() => URL.revokeObjectURL(url), 1e3);
};
const fillTemplate = (tpl, vars) => tpl.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
function ProfilePage() {
  const { persona, referrer, logout } = useAppStore();
  const [, setLocation] = useLocation();
  const handleLogout = () => {
    logout();
    setLocation("/");
  };
  const { toast: toast2 } = useToast();
  const [copied, setCopied] = reactExports.useState(false);
  if (!persona) {
    setLocation("/");
    return null;
  }
  if (!referrer) {
    setLocation("/register");
    return null;
  }
  const { data: dashboard } = useGetReferrerDashboard(referrer.id);
  const { data: referrals } = useGetReferrerReferrals(referrer.id);
  const referralLink = `${window.location.origin}/profile/${referrer.referralCode}`;
  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast2({ title: "Profile link copied!", description: "Share it to refer people to PGs" });
    setTimeout(() => setCopied(false), 2e3);
  };
  if (!dashboard) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 w-full rounded-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 w-full rounded-2xl" })
    ] }) });
  }
  const levelName = LEVEL_NAMES[persona]?.[dashboard.referrer.level] || dashboard.referrer.level;
  const progressPercent = Math.min(100, Math.max(
    0,
    (dashboard.referrer.xp - dashboard.currentLevelXp) / (dashboard.nextLevelXp - dashboard.currentLevelXp) * 100
  ));
  const earnedBadgeIds = dashboard.badges.map((b) => b.name);
  const getStatusColor2 = (status) => {
    switch (status) {
      case "BOOKED":
        return "bg-green-100 text-green-700 border-green-200";
      case "VERIFIED":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "LOST":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-orange-100 text-orange-700 border-orange-200";
    }
  };
  const getStatusIcon = (status) => {
    switch (status) {
      case "BOOKED":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 mr-1" });
      case "LOST":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3 h-3 mr-1" });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-6 max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left bg-card p-6 rounded-3xl border border-border shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl font-bold font-display shadow-inner shrink-0", children: dashboard.referrer.name.charAt(0).toUpperCase() }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black font-display text-foreground mb-1", children: dashboard.referrer.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground font-medium mb-1", children: [
          dashboard.referrer.phone,
          " · ",
          persona
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs bg-muted px-2 py-1 rounded-md text-slate-600", children: [
            "REF: ",
            referrer.referralCode
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCopyLink, className: "flex items-center gap-1 text-xs text-primary hover:underline font-medium", children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
            " Copied!"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3" }),
            " Copy profile link"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center md:justify-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted px-4 py-2 rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1", children: "Rank" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-black text-foreground", children: [
              "#",
              dashboard.rank
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted px-4 py-2 rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1", children: "Level" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-black text-primary", children: levelName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted px-4 py-2 rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1", children: "Total Earned" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-black text-green-600", children: [
              "₹",
              dashboard.referrer.totalEarned
            ] })
          ] })
        ] })
      ] })
    ] }),
    persona === "PG_MANAGER" && /* @__PURE__ */ jsxRuntimeExports.jsx(OperatorHub, { setLocation }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation("/payout-setup"),
          className: "flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl hover:border-orange-200 hover:shadow-sm transition-all text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-800 text-sm", children: "Payout Setup" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Add UPI / Bank" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation("/challenges"),
          className: "flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl hover:border-orange-200 hover:shadow-sm transition-all text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-800 text-sm", children: "Challenges" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Earn XP & bonuses" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation("/teams"),
          className: "flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl hover:border-orange-200 hover:shadow-sm transition-all text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-800 text-sm", children: "My Squad" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Join or create a team" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation("/notifications"),
          className: "flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl hover:border-orange-200 hover:shadow-sm transition-all text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-800 text-sm", children: "Notifications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Payouts & updates" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-1", children: "Level Progress" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            dashboard.referrer.xp,
            " / ",
            dashboard.nextLevelXp,
            " XP"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-primary", children: [
          dashboard.nextLevelXp - dashboard.referrer.xp,
          " XP to go"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-muted rounded-full overflow-hidden border border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { width: 0 },
          animate: { width: `${progressPercent}%` },
          transition: { type: "spring", stiffness: 50, damping: 15 },
          className: "h-full bg-primary rounded-full relative overflow-hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/20 w-full h-full skew-x-12 animate-[shimmer_2s_infinite]" })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display text-foreground", children: "Badges Collection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-6 gap-4", children: Object.entries(BADGE_ICONS).map(([name, icon], i) => {
        const isEarned = earnedBadgeIds.includes(name);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.05 },
            className: `
                    flex flex-col items-center p-3 rounded-xl border text-center transition-all
                    ${isEarned ? "bg-primary/5 border-primary/20 hover:bg-primary/10 shadow-sm" : "bg-muted/50 border-transparent opacity-50 grayscale"}
                  `,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl mb-2", children: icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-tight text-foreground leading-tight", children: name }),
              isEarned && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground mt-1", children: "Earned" })
            ]
          },
          name
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display text-foreground", children: "My Referrals" }),
      referrals && referrals.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: referrals.map((ref, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: i * 0.05 },
          className: "bg-card border border-border p-4 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs font-bold text-muted-foreground", children: ref.referralId }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] font-bold px-2 py-0.5 border ${getStatusColor2(ref.status)}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center", children: [
                  getStatusIcon(ref.status),
                  ref.status
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-foreground text-lg", children: ref.leadName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
                  " ",
                  ref.area || "Any area"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                  " ",
                  format(new Date(ref.createdAt), "MMM d, yyyy")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex sm:flex-col items-center sm:items-end justify-between bg-muted/50 sm:bg-transparent p-3 sm:p-0 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest sm:mb-1", children: "XP Earned" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black text-primary text-xl", children: [
                "+",
                ref.xpEarned
              ] })
            ] })
          ]
        },
        ref.id
      )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 bg-card border border-border rounded-2xl border-dashed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "You haven't made any referrals yet." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setLocation("/refer"),
            className: "bg-primary text-primary-foreground font-bold px-6 py-2 rounded-full hover:bg-primary/90 transition-colors",
            children: "Refer Someone Now"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: handleLogout,
        className: "w-full flex items-center justify-center gap-2 py-3 rounded-2xl border border-red-200 text-red-500 bg-red-50 hover:bg-red-100 font-semibold transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
          "Log out"
        ]
      }
    ) })
  ] }) });
}
function OperatorHub({ setLocation }) {
  const bookings = useStore(() => BookingsDB.all());
  const rents = useStore(() => RentsDB.all());
  const notifs = useStore(() => NotificationsDB.all());
  const leads = useLeadsStore(() => LeadsDB.all());
  const s = bookingStats();
  const r2 = rentStats();
  const newLeads = leads.filter((l) => l.stage === "new").length;
  const liveOffers = bookings.filter((b) => b.status === "approved").length;
  const overdue = rents.filter((x) => x.status === "overdue").length;
  const unread = notifs.filter((n) => !n.read).length;
  const tiles = [
    { to: "/manager/bookos/command", label: "Command", icon: Crown, accent: true, val: `₹${Math.round(s.tokenRevenue / 1e3)}k`, sub: "today’s pulse" },
    { to: "/manager/bookos/leads", label: "Leads", icon: Magnet, val: newLeads, sub: "new in pipeline" },
    { to: "/manager/bookos/bookings", label: "Bookings", icon: Calendar, val: s.pending, sub: `${liveOffers} live offers` },
    { to: "/manager/bookos/rents", label: "Rents", icon: Receipt, val: overdue, sub: `${fmtShort(r2.collected)} collected` },
    { to: "/manager/bookos/inventory", label: "Inventory", icon: Layers, val: "—", sub: "rooms · floors · beds" },
    { to: "/manager/bookos/map", label: "Live map", icon: Map$1, val: "—", sub: "occupancy grid" },
    { to: "/manager/bookos/maintenance", label: "Maintenance", icon: Wrench, val: "—", sub: "open tickets" },
    { to: "/manager/bookos/analytics", label: "Analytics", icon: ChartNoAxesColumn, val: s.conversion + "%", sub: "conversion" },
    { to: "/manager/bookos/notifications", label: "Inbox", icon: Bell, val: unread, sub: "unread" },
    { to: "/owner", label: "Owner view", icon: Building2, val: "→", sub: "read-only portfolio" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30 p-5 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.2em] text-amber-700", children: "OPERATOR HUB" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl text-slate-900", style: { letterSpacing: "-0.01em" }, children: "Run your portfolio" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation("/manager/bookos/command"),
          className: "inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm",
          children: [
            "Open command ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5", children: tiles.map((t) => {
      const Icon2 = t.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation(t.to),
          className: `text-left rounded-2xl border p-3 transition-all hover:shadow-md hover:-translate-y-0.5 ${t.accent ? "border-amber-300 bg-gradient-to-br from-amber-100 to-amber-50" : "border-slate-200 bg-white"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: `w-4 h-4 ${t.accent ? "text-amber-700" : "text-slate-500"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-base font-bold ${t.accent ? "text-amber-800" : "text-slate-900"}`, children: t.val })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold uppercase tracking-wider text-slate-700", children: t.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 truncate", children: t.sub })
          ]
        },
        t.to
      );
    }) })
  ] });
}
function LeaderboardPage() {
  const { persona, referrer } = useAppStore();
  const [, setLocation] = useLocation();
  if (!persona || !referrer) {
    setLocation("/");
    return null;
  }
  const { data: leaderboard } = useGetLeaderboard({ limit: 50 });
  if (!leaderboard) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full rounded-2xl mb-8" }),
      [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full rounded-xl" }, i))
    ] }) });
  }
  const isGuard = persona === "GUARD";
  const isStudent = persona === "STUDENT";
  const isEarner = persona === "EARNER";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
      "mb-8 p-8 rounded-3xl text-center relative overflow-hidden",
      isGuard ? "bg-zinc-900 border border-zinc-800" : isStudent ? "bg-orange-50 border border-orange-100" : "bg-slate-900 border border-slate-800"
    ), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: cn(
        "w-24 h-24 mx-auto mb-4 opacity-20 absolute -top-4 -right-4",
        isGuard ? "text-green-500" : isStudent ? "text-orange-500" : "text-white"
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: cn(
        "text-4xl md:text-5xl font-black font-display tracking-tight mb-2 relative z-10",
        isGuard ? "text-white" : isStudent ? "text-orange-950" : "text-white"
      ), children: isGuard ? "Top Kamaal Wale" : isStudent ? "Campus Leaderboard" : "Top Performers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn(
        "font-medium relative z-10",
        isGuard ? "text-zinc-400" : isStudent ? "text-orange-700" : "text-slate-400"
      ), children: isGuard ? "Sabse zyada refer karne wale boss log" : isStudent ? "See who's helping the most friends find homes" : "Ranked by XP and total successful bookings" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: leaderboard.map((entry, index) => {
      const isMe = entry.referrerId === referrer.id;
      const levelName = LEVEL_NAMES[entry.persona]?.[entry.level] || entry.level;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.05 },
          className: cn(
            "flex items-center gap-4 p-4 rounded-2xl border transition-all",
            isMe ? isGuard ? "bg-green-500/10 border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.1)]" : isStudent ? "bg-white border-orange-300 shadow-md shadow-orange-500/10 ring-2 ring-orange-500" : "bg-primary/5 border-primary/30 shadow-sm ring-1 ring-primary/50" : "bg-card border-border hover:border-primary/30"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
              "w-12 h-12 shrink-0 flex items-center justify-center rounded-xl font-black text-xl",
              index === 0 ? "bg-yellow-400 text-yellow-900 shadow-inner" : index === 1 ? "bg-slate-300 text-slate-800 shadow-inner" : index === 2 ? "bg-amber-600 text-amber-100 shadow-inner" : "bg-muted text-muted-foreground"
            ), children: index < 3 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-6 h-6" }) : `#${entry.rank}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground text-lg truncate", children: [
                entry.name,
                " ",
                isMe && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full ml-2", children: "YOU" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-primary", children: levelName }),
                entry.streak > 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-red-500 font-bold text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3 fill-red-500" }),
                  " ",
                  entry.streak
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("hidden sm:block text-left", !isEarner && "sm:hidden"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-bold uppercase", children: "Bookings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-black text-foreground flex items-center gap-1 justify-end", children: [
                  entry.bookedReferrals,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-3 h-3 text-green-500" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-bold uppercase mb-0.5", children: "Total XP" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-xl text-foreground tabular-nums tracking-tight", children: entry.xp.toLocaleString() })
              ] })
            ] })
          ]
        },
        entry.referrerId
      );
    }) })
  ] }) });
}
function LeadModal({
  open,
  onClose,
  mode,
  propertyName,
  propertyId,
  area,
  roomNumber,
  rent = 15e3
}) {
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [moveInDate, setMoveInDate] = reactExports.useState("");
  const [notes, setNotes] = reactExports.useState("");
  const [done, setDone] = reactExports.useState(false);
  if (!open) return null;
  const labels = {
    booking: { title: "Request booking", cta: "Send booking request", action: "booking_request" },
    quote: { title: "Get quotation", cta: "Request quotation", action: "quote_request" },
    visit: { title: "Schedule visit", cta: "Book a visit", action: "visit_request" }
  };
  const l = labels[mode];
  const submit = () => {
    if (!name || !phone) return;
    const meta = { name, phone, moveInDate, notes, source: "detail", propertyId, propertyName, area, roomNumber };
    track(l.action, meta);
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    if (mode === "booking") {
      const b = BookingsDB.create({
        tenantName: name,
        tenantPhone: phone,
        propertyName: propertyName || "—",
        roomNumber: roomNumber || null,
        moveInDate: moveInDate || null,
        actualRent: rent,
        discountedRent: rent,
        deposit: rent * 2,
        maintenanceFee: 1500,
        maintenanceType: "One-Time",
        tokenAmount: 2e3,
        stayDurationMonths: 11,
        noticePeriodMonths: 1,
        status: "pending",
        notes,
        createdAt: now2,
        updatedAt: now2
      });
      ActivityDB.create({ action: "lead_to_booking", entity: "booking", entityId: b.id, createdAt: now2 });
    } else if (mode === "quote") {
      const q = QuotationsDB.create({
        serial: "Q-" + Date.now().toString().slice(-5),
        tenantName: name,
        tenantPhone: phone,
        propertyName: propertyName || "—",
        roomNumber: roomNumber || "",
        rent,
        deposit: rent * 2,
        maintenance: 1500,
        tokenAmount: 2e3,
        offerRent: rent,
        notes,
        status: "draft",
        createdAt: now2
      });
      ActivityDB.create({ action: "lead_to_quote", entity: "quotation", entityId: q.id, createdAt: now2 });
    }
    NotificationsDB.create({
      title: `New ${mode} request — ${name}`,
      body: `${propertyName || "—"} ${roomNumber ? "· Room " + roomNumber : ""} · ${phone}`,
      kind: "info",
      read: false,
      createdAt: now2,
      link: mode === "booking" ? "/manager/bookos/bookings" : mode === "quote" ? "/manager/bookos/quotations" : "/manager/bookos/leads"
    });
    setDone(true);
    setTimeout(() => {
      onClose();
      setDone(false);
      setName("");
      setPhone("");
      setMoveInDate("");
      setNotes("");
    }, 1500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl w-full max-w-md shadow-2xl border border-amber-200", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-slate-100 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-amber-700", children: "GHARPAYY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl text-slate-900", children: l.title }),
        propertyName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500 mt-0.5", children: [
          propertyName,
          roomNumber ? ` · Room ${roomNumber}` : ""
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-1 rounded hover:bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-slate-500" }) })
    ] }),
    done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-7 h-7 text-emerald-600" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg text-slate-900", children: "Got it!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-500 mt-1", children: "Our manager will reach out shortly." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "Your name", className: "w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "Phone (WhatsApp)", className: "w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: moveInDate, onChange: (e) => setMoveInDate(e.target.value), placeholder: "Preferred move-in", className: "w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: notes, onChange: (e) => setNotes(e.target.value), placeholder: "Anything we should know?", rows: 2, className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: submit,
          disabled: !name || !phone,
          className: "w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-sm disabled:opacity-50",
          children: l.cta
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 text-center", children: "Goes straight to the manager dashboard" })
    ] })
  ] }) });
}
const AMENITY_ICONS$1 = {
  wifi: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-3 h-3" }),
  ac: /* @__PURE__ */ jsxRuntimeExports.jsx(Wind, { className: "w-3 h-3" }),
  food: /* @__PURE__ */ jsxRuntimeExports.jsx(Utensils, { className: "w-3 h-3" }),
  security: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3 h-3" })
};
const BANGALORE_AREAS$1 = ["Koramangala", "HSR Layout", "Indiranagar", "Marathahalli", "Electronic City", "Whitefield", "BTM Layout", "Bellandur"];
const GENDER_LABELS$1 = { MALE: "Boys", FEMALE: "Girls", ANY: "Co-ed" };
function PgBrowsePage() {
  const [, setLocation] = useLocation();
  const [search, setSearch] = reactExports.useState("");
  const [selectedArea, setSelectedArea] = reactExports.useState();
  const [gender, setGender] = reactExports.useState();
  const [maxPrice, setMaxPrice] = reactExports.useState();
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const [modal, setModal] = reactExports.useState(null);
  reactExports.useEffect(() => {
    track("view", { source: "listings" });
  }, []);
  const { data } = useGetProperties({
    area: selectedArea,
    gender,
    maxPrice
  });
  const properties = (data?.properties || []).filter(
    (p) => !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.area.toLowerCase().includes(search.toLowerCase())
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black font-display text-slate-900", children: "Browse PGs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm mt-1", children: "Find verified PGs across Bangalore" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "pl-9",
              placeholder: "Search by name or area...",
              value: search,
              onChange: (e) => setSearch(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setShowFilters(!showFilters),
            className: "flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4" }),
              "Filter"
            ]
          }
        )
      ] }),
      showFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "bg-white border border-slate-100 rounded-xl p-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider mb-2", children: "Gender" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["", "MALE", "FEMALE", "ANY"].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setGender(g || void 0),
              className: `px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${gender === (g || void 0) ? "bg-primary text-white border-primary" : "bg-white text-slate-600 border-slate-200"}`,
              children: g === "" ? "All" : GENDER_LABELS$1[g]
            },
            g
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider mb-2", children: "Max Rent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: [void 0, 7e3, 1e4, 15e3, 2e4].map((price) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setMaxPrice(price),
              className: `px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${maxPrice === price ? "bg-primary text-white border-primary" : "bg-white text-slate-600 border-slate-200"}`,
              children: price ? `≤₹${price.toLocaleString()}` : "Any"
            },
            price ?? "all"
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 overflow-x-auto pb-2 no-scrollbar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSelectedArea(void 0),
            className: `px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap border transition-all ${!selectedArea ? "bg-primary text-white border-primary" : "bg-white text-slate-600 border-slate-200"}`,
            children: "All Areas"
          }
        ),
        BANGALORE_AREAS$1.map((area) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSelectedArea(area === selectedArea ? void 0 : area),
            className: `px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap border transition-all ${selectedArea === area ? "bg-primary text-white border-primary" : "bg-white text-slate-600 border-slate-200"}`,
            children: area
          },
          area
        ))
      ] }),
      properties.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-12 h-12 text-slate-300 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium", children: "No PGs found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Try adjusting your filters" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-500 font-medium", children: [
          properties.length,
          " PGs found"
        ] }),
        properties.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.04 },
            onClick: () => {
              track("view", { source: "listings", area: p.area, propertyId: p.id, propertyName: p.name });
              setLocation(`/pg/${p.id}`);
            },
            className: "bg-white border border-slate-100 rounded-2xl p-4 cursor-pointer hover:shadow-md hover:border-orange-100 transition-all group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-slate-900 text-lg", children: p.name }),
                    p.isVerified && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-green-600 border-green-200 bg-green-50 text-[10px] px-1.5", children: "Verified" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] px-1.5 ${p.availability === "AVAILABLE" ? "text-green-600 border-green-200 bg-green-50" : "text-red-500 border-red-200 bg-red-50"}`, children: p.availability === "AVAILABLE" ? `${p.availableRooms} rooms` : "FULL" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-slate-500 text-sm mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.area }),
                    p.nearbyMetro && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-400", children: [
                      "· 🚇 ",
                      p.nearbyMetro
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-black text-slate-900", children: [
                      "₹",
                      p.monthlyRent.toLocaleString(),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-slate-500", children: "/mo" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-400", children: "·" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-500", children: GENDER_LABELS$1[p.gender] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right flex flex-col items-end gap-2", children: [
                  p.avgRating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-yellow-50 border border-yellow-100 rounded-lg px-2 py-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 text-yellow-500 fill-yellow-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-slate-700", children: p.avgRating.toFixed(1) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-slate-400", children: [
                      "(",
                      p.totalReviews,
                      ")"
                    ] })
                  ] }),
                  p.referralBonus > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-orange-500 text-white text-[10px]", children: [
                    "+₹",
                    p.referralBonus,
                    " bonus"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" })
                ] })
              ] }),
              p.amenities && p.amenities.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 mt-3 flex-wrap", children: p.amenities.slice(0, 4).map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded-full text-[11px] text-slate-600 font-medium", children: [
                AMENITY_ICONS$1[a2.toLowerCase()] || "·",
                " ",
                a2
              ] }, a2)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3", onClick: (e) => e.stopPropagation(), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      track("booking_request", { source: "listings", area: p.area, propertyId: p.id, propertyName: p.name });
                      setModal({ mode: "booking", area: p.area, propertyId: p.id, propertyName: p.name, rent: p.monthlyRent });
                    },
                    className: "flex-1 inline-flex items-center justify-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3" }),
                      " Book"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => {
                      track("quote_request", { source: "listings", area: p.area, propertyId: p.id, propertyName: p.name });
                      setModal({ mode: "quote", area: p.area, propertyId: p.id, propertyName: p.name, rent: p.monthlyRent });
                    },
                    className: "flex-1 inline-flex items-center justify-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-amber-300 text-amber-800",
                    children: "Quote"
                  }
                )
              ] })
            ]
          },
          p.id
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeadModal, { open: !!modal, onClose: () => setModal(null), ...modal || {} })
  ] });
}
const Textarea = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
const AMENITY_ICONS = {
  wifi: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-4 h-4" }),
  ac: /* @__PURE__ */ jsxRuntimeExports.jsx(Wind, { className: "w-4 h-4" }),
  food: /* @__PURE__ */ jsxRuntimeExports.jsx(Utensils, { className: "w-4 h-4" }),
  security: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" })
};
const GENDER_LABELS = { MALE: "Boys Only", FEMALE: "Girls Only", ANY: "Co-ed (All genders)" };
function PgDetailPage() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const { referrer } = useAppStore();
  const { toast: toast2 } = useToast();
  const [copied, setCopied] = reactExports.useState(false);
  const [showReviewForm, setShowReviewForm] = reactExports.useState(false);
  const [reviewName, setReviewName] = reactExports.useState("");
  const [reviewRating, setReviewRating] = reactExports.useState(5);
  const [reviewComment, setReviewComment] = reactExports.useState("");
  const [modal, setModal] = reactExports.useState(null);
  const { data, refetch } = useGetProperty(Number(params.id));
  const addReview = useAddPropertyReview();
  reactExports.useEffect(() => {
    if (data?.property) track("view", { source: "detail", area: data.property.area, propertyId: data.property.id, propertyName: data.property.name });
  }, [data?.property?.id]);
  if (!data) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-12 h-12 text-slate-300 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500", children: "PG not found" })
    ] }) });
  }
  const { property, reviews, nearbyProperties } = data;
  const shareLink = `${window.location.origin}/pg/${property.id}${referrer ? `?ref=${referrer.referralCode}` : ""}`;
  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareLink);
    setCopied(true);
    toast2({ title: "Link copied!", description: "Share it with friends looking for PG" });
    setTimeout(() => setCopied(false), 2e3);
  };
  const handleShareWhatsApp = () => {
    const msg = `🏠 Found this great PG in ${property.area}!

*${property.name}*
📍 ${property.address}
💰 ₹${property.monthlyRent.toLocaleString()}/month

Check it out: ${shareLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
  };
  const handleSubmitReview = async () => {
    if (!reviewName || !reviewComment) return;
    try {
      await addReview.mutateAsync({ propertyId: Number(params.id), data: { reviewerName: reviewName, rating: reviewRating, comment: reviewComment, tags: [] } });
      toast2({ title: "Review submitted!", description: "Thank you for your feedback" });
      setShowReviewForm(false);
      setReviewName("");
      setReviewComment("");
      setReviewRating(5);
      refetch();
    } catch {
      toast2({ title: "Failed to submit review", variant: "destructive" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-6 max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLocation("/pg"), className: "flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
        " Back to listings"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-slate-100 to-blue-50 h-40 flex items-center justify-center relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-20 h-20 text-slate-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 flex gap-2", children: [
            property.isVerified && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-500 text-white", children: "✓ Verified" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: property.availability === "AVAILABLE" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700", children: property.availability === "AVAILABLE" ? `${property.availableRooms} rooms available` : "FULL" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black font-display text-slate-900", children: property.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-slate-500 text-sm mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: property.address })
              ] }),
              property.nearbyMetro && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-slate-400 mt-0.5", children: [
                "🚇 ",
                property.nearbyMetro
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-black text-slate-900", children: [
                "₹",
                property.monthlyRent.toLocaleString(),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-normal text-slate-500", children: "/mo" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-slate-500", children: [
                "Deposit: ₹",
                property.deposit.toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-600", children: GENDER_LABELS[property.gender] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-3 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-600", children: [
              property.totalRooms,
              " total rooms"
            ] }),
            property.avgRating && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 px-3 py-1 bg-yellow-50 border border-yellow-100 rounded-full text-sm font-bold text-slate-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 text-yellow-500 fill-yellow-500" }),
              property.avgRating.toFixed(1),
              " (",
              property.totalReviews,
              " reviews)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  track("booking_request", { source: "detail", area: property.area, propertyId: property.id, propertyName: property.name });
                  setModal({ mode: "booking", area: property.area, propertyId: property.id, propertyName: property.name, rent: property.monthlyRent });
                },
                className: "flex-1 min-w-[140px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm shadow",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
                  " Request booking"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  track("quote_request", { source: "detail", area: property.area, propertyId: property.id, propertyName: property.name });
                  setModal({ mode: "quote", area: property.area, propertyId: property.id, propertyName: property.name, rent: property.monthlyRent });
                },
                className: "flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-amber-300 bg-white text-amber-800 font-semibold text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                  " Get quote"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  track("visit_request", { source: "detail", area: property.area, propertyId: property.id, propertyName: property.name });
                  setModal({ mode: "visit", area: property.area, propertyId: property.id, propertyName: property.name, rent: property.monthlyRent });
                },
                className: "flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "w-4 h-4" }),
                  " Visit"
                ]
              }
            )
          ] }),
          property.referralBonus > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 bg-orange-50 border border-orange-100 rounded-xl p-3 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "💰" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-orange-800 text-sm", children: [
                "+₹",
                property.referralBonus,
                " Referral Bonus"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-600 text-xs", children: "Earn extra on top of standard ₹500 for successful bookings here" })
            ] })
          ] })
        ] })
      ] }),
      property.description && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-slate-900 mb-2", children: "About this PG" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 text-sm leading-relaxed", children: property.description })
      ] }),
      property.amenities && property.amenities.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-slate-900 mb-4", children: "Amenities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: property.amenities.map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: AMENITY_ICONS[a2.toLowerCase()] || "✓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-slate-700", children: a2 })
        ] }, a2)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-100 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-orange-900 mb-1", children: [
          "Refer this PG, earn ₹",
          500 + (property.referralBonus || 0)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-700 text-sm mb-4", children: "Know someone looking for a PG? Share your link and earn when they move in." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { readOnly: true, value: shareLink, className: "flex-1 px-3 py-2 bg-white border border-orange-200 rounded-lg text-sm text-slate-600 truncate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleCopy, className: "flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-bold transition-colors", children: [
            copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
            copied ? "Copied!" : "Copy"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleShareWhatsApp, className: "mt-3 w-full flex items-center justify-center gap-2 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" }),
          " Share on WhatsApp"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-slate-900", children: [
            "Reviews (",
            reviews.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowReviewForm(!showReviewForm), className: "flex items-center gap-2 text-sm font-medium text-primary hover:underline", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4" }),
            " Write review"
          ] })
        ] }),
        showReviewForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, className: "mb-6 bg-slate-50 rounded-xl p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Your name", value: reviewName, onChange: (e) => setReviewName(e.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setReviewRating(s), className: `text-2xl transition-all ${s <= reviewRating ? "text-yellow-400" : "text-slate-200"}`, children: "★" }, s)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Share your experience...", value: reviewComment, onChange: (e) => setReviewComment(e.target.value), rows: 3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSubmitReview, disabled: addReview.isPending, className: "w-full", children: addReview.isPending ? "Submitting..." : "Submit Review" })
        ] }),
        reviews.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm text-center py-6", children: "No reviews yet. Be the first!" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: reviews.slice(0, 5).map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-slate-50 pb-4 last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-slate-800", children: r2.reviewerName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${i < r2.rating ? "text-yellow-400" : "text-slate-200"}`, children: "★" }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600", children: r2.comment }),
          r2.stayDuration && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-400 mt-1", children: [
            "Stayed: ",
            r2.stayDuration
          ] })
        ] }, r2.id)) })
      ] }),
      nearbyProperties.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-slate-900 mb-3", children: [
          "Nearby PGs in ",
          property.area
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: nearbyProperties.slice(0, 4).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onClick: () => setLocation(`/pg/${p.id}`),
            className: "bg-white border border-slate-100 rounded-xl p-4 cursor-pointer hover:border-orange-200 transition-all",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-800", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-500", children: [
                  "₹",
                  p.monthlyRent.toLocaleString(),
                  "/mo"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: p.availability === "AVAILABLE" ? "text-green-600 border-green-200" : "text-red-500 border-red-200", children: p.availability === "AVAILABLE" ? "Available" : "Full" })
            ] })
          },
          p.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeadModal, { open: !!modal, onClose: () => setModal(null), ...modal || {} })
  ] });
}
function TeamsPage() {
  const [, setLocation] = useLocation();
  const { referrer } = useAppStore();
  const { toast: toast2 } = useToast();
  const [tab, setTab] = reactExports.useState("browse");
  const [teamName, setTeamName] = reactExports.useState("");
  const [teamDesc, setTeamDesc] = reactExports.useState("");
  const [joinCode, setJoinCode] = reactExports.useState("");
  const [joiningId, setJoiningId] = reactExports.useState(null);
  const { data: teams, refetch } = useGetTeams();
  const { data: leaderboard } = useGetTeamLeaderboard({ limit: 10 });
  const createTeam = useCreateTeam();
  const joinTeam = useJoinTeam();
  const handleCreate = async () => {
    if (!teamName || !referrer) return;
    try {
      const team = await createTeam.mutateAsync({ data: { name: teamName, description: teamDesc, captainId: referrer.id } });
      toast2({ title: "Team created!", description: `Your team "${teamName}" is live. Share the invite code.` });
      setTeamName("");
      setTeamDesc("");
      refetch();
      setTab("browse");
    } catch (e) {
      toast2({ title: "Failed to create team", variant: "destructive" });
    }
  };
  const handleJoin = async (teamId, inviteCode) => {
    if (!referrer) return;
    setJoiningId(teamId);
    try {
      await joinTeam.mutateAsync({ teamId, data: { referrerId: referrer.id, inviteCode } });
      toast2({ title: "Joined team!", description: "You're now part of the team 🎉" });
      refetch();
    } catch {
      toast2({ title: "Failed to join", variant: "destructive" });
    } finally {
      setJoiningId(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-black font-display text-slate-900 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-primary" }),
        " Teams"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm mt-1", children: "Join a squad, climb together, earn more" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 bg-slate-100 p-1 rounded-xl", children: ["browse", "leaderboard", "create"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setTab(t),
        className: `flex-1 py-2 rounded-lg text-sm font-bold capitalize transition-all ${tab === t ? "bg-white shadow-sm text-slate-900" : "text-slate-500"}`,
        children: t === "create" ? "Create" : t === "leaderboard" ? "🏆 Rankings" : "Browse"
      },
      t
    )) }),
    tab === "browse" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: (teams || []).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-12 h-12 text-slate-300 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium", children: "No teams yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm", children: "Be the first to create one!" })
    ] }) : (teams || []).map((team, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.05 },
        className: "bg-white border border-slate-100 rounded-2xl p-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-slate-900 text-lg", children: team.name }),
                referrer && team.captainId === referrer.id && /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-4 h-4 text-yellow-500" })
              ] }),
              team.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm mb-2", children: team.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5" }),
                  " ",
                  team.memberCount,
                  " members"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-3.5 h-3.5 text-yellow-500" }),
                  " ",
                  team.totalXp,
                  " XP"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-green-700", children: [
                  "₹",
                  team.totalEarned.toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 items-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setLocation(`/teams/${team.id}`),
                  className: "text-sm text-primary font-medium hover:underline flex items-center gap-1",
                  children: [
                    "View ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                  ]
                }
              ),
              referrer && team.captainId !== referrer.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleJoin(team.id, team.inviteCode),
                  disabled: joiningId === team.id,
                  className: "px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-bold hover:bg-orange-600 transition-colors disabled:opacity-50",
                  children: joiningId === team.id ? "..." : "Join"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "w-3.5 h-3.5 text-slate-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-slate-500", children: "Invite code: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-bold text-slate-700", children: team.inviteCode })
          ] })
        ]
      },
      team.id
    )) }),
    tab === "leaderboard" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: (leaderboard || []).map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: i * 0.05 },
        className: "bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shrink-0 ${i === 0 ? "bg-yellow-100 text-yellow-700" : i === 1 ? "bg-slate-100 text-slate-700" : i === 2 ? "bg-orange-100 text-orange-700" : "bg-slate-50 text-slate-500"}`, children: i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${entry.rank}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-900", children: entry.teamName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-sm text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                entry.memberCount,
                " members"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                entry.totalBookings,
                " bookings"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-black text-primary", children: [
              entry.totalXp,
              " XP"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-green-600", children: [
              "₹",
              entry.totalEarned.toLocaleString()
            ] })
          ] })
        ]
      },
      entry.teamId
    )) }),
    tab === "create" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-slate-900 text-lg", children: "Create a Team" }),
      !referrer ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-500 text-sm", children: [
        "Please ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/register", className: "text-primary underline", children: "register" }),
        " to create a team."
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Team name (e.g. 'HSR Hustlers')", value: teamName, onChange: (e) => setTeamName(e.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Description (optional)", value: teamDesc, onChange: (e) => setTeamDesc(e.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleCreate, disabled: !teamName || createTeam.isPending, className: "w-full", children: createTeam.isPending ? "Creating..." : "Create Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 text-center", children: "You'll be the expert. Invite others with the generated code." })
      ] })
    ] })
  ] }) });
}
const LEVEL_COLORS = {
  BEGINNER: "bg-slate-100 text-slate-600",
  EXPLORER: "bg-blue-100 text-blue-700",
  HUSTLER: "bg-orange-100 text-orange-700",
  PRO: "bg-purple-100 text-purple-700",
  LEGEND: "bg-yellow-100 text-yellow-700"
};
const PERSONA_EMOJIS = {
  GUARD: "🛡️",
  STUDENT: "🎓",
  EARNER: "💼",
  PG_MANAGER: "🏠"
};
function TeamDetailPage() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const { data } = useGetTeam(Number(params.id));
  if (!data) return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-center text-slate-500", children: "Team not found" }) });
  const { team, members } = data;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-6 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLocation("/teams"), className: "flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
      " Back to Teams"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        className: "bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-3xl p-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black font-display text-slate-900 mb-1", children: team.name }),
          team.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 mb-4", children: team.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-xl p-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500 uppercase", children: "Members" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-slate-900", children: team.memberCount })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-xl p-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500 uppercase", children: "Total XP" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-primary", children: team.totalXp })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/70 rounded-xl p-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500 uppercase", children: "Earned" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-green-600", children: [
                "₹",
                team.totalEarned.toLocaleString()
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-primary" }),
        " Members (",
        members.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: members.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: i * 0.05 },
          className: "flex items-center gap-3 p-3 bg-slate-50 rounded-xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl border border-slate-100", children: PERSONA_EMOJIS[member.persona] || "👤" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-900", children: member.name }),
                member.isCaptain && /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3.5 h-3.5 text-yellow-500" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold px-2 py-0.5 rounded-full ${LEVEL_COLORS[member.level]}`, children: member.level }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-slate-400", children: [
                  member.xp,
                  " XP"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-primary", children: [
                "+",
                member.contribution,
                " XP"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400", children: "contributed" })
            ] })
          ]
        },
        member.referrerId
      )) })
    ] })
  ] }) });
}
const TYPE_COLORS = {
  DAILY: "bg-blue-100 text-blue-700",
  WEEKLY: "bg-purple-100 text-purple-700",
  MILESTONE: "bg-yellow-100 text-yellow-700",
  SPECIAL: "bg-red-100 text-red-700"
};
function ChallengesPage() {
  const { referrer } = useAppStore();
  const { toast: toast2 } = useToast();
  const { data: challenges, refetch } = useGetChallenges({ referrerId: referrer?.id });
  const complete = useCompleteChallenge();
  const handleComplete = async (challengeId) => {
    if (!referrer) return;
    try {
      const result = await complete.mutateAsync({ challengeId, data: { referrerId: referrer.id } });
      toast2({
        title: `+${result.xpEarned} XP earned! 🎉`,
        description: result.bonusEarned > 0 ? `Also got ₹${result.bonusEarned} bonus!` : "Challenge complete!"
      });
      refetch();
    } catch (e) {
      if (e.response?.status === 409) {
        toast2({ title: "Already completed", description: "You've already done this challenge" });
      } else {
        toast2({ title: "Failed to complete", variant: "destructive" });
      }
    }
  };
  const active = (challenges || []).filter((c) => !c.isCompleted);
  const completed = (challenges || []).filter((c) => c.isCompleted);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-black font-display text-slate-900 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-6 h-6 text-primary" }),
        " Challenges"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm mt-1", children: "Complete challenges, earn XP and bonus rewards" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-xl p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 font-medium", children: "Active" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-primary", children: active.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-xl p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 font-medium", children: "Completed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-green-600", children: completed.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-xl p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 font-medium", children: "Total XP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-slate-800", children: completed.reduce((s, c) => s + c.xpReward, 0) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      active.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-slate-900", children: "Active Challenges" }),
        active.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.05 },
            className: "bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl shrink-0", children: c.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-slate-900", children: c.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] px-1.5 ${TYPE_COLORS[c.type]}`, children: c.type })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm mb-3", children: c.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-sm font-bold text-primary", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5" }),
                    " +",
                    c.xpReward,
                    " XP"
                  ] }),
                  c.bonusAmount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-green-600", children: [
                    "+₹",
                    c.bonusAmount
                  ] }),
                  c.expiresAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-slate-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                    " Expires ",
                    new Date(c.expiresAt).toLocaleDateString()
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleComplete(c.id),
                  disabled: complete.isPending || !referrer,
                  className: "px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:bg-orange-600 transition-colors disabled:opacity-50 shrink-0",
                  children: complete.isPending ? "..." : "Complete"
                }
              )
            ] })
          },
          c.id
        ))
      ] }),
      completed.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-slate-900 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-green-500" }),
          " Completed (",
          completed.length,
          ")"
        ] }),
        completed.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-50/50 border border-green-100 rounded-2xl p-5 opacity-80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: c.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-slate-700", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm", children: c.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-6 h-6 text-green-500 shrink-0" })
        ] }) }, c.id))
      ] }),
      (challenges || []).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-12 h-12 text-slate-300 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium", children: "No challenges available" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm mt-1", children: "Check back soon for new challenges!" })
      ] })
    ] })
  ] }) });
}
const TYPE_CONFIG = {
  LEAD_VERIFIED: { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "w-4 h-4" }), color: "bg-green-100 text-green-600" },
  LEAD_BOOKED: { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-4 h-4" }), color: "bg-green-100 text-green-600" },
  PAYOUT_APPROVED: { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-4 h-4" }), color: "bg-orange-100 text-orange-600" },
  PAYOUT_PAID: { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-4 h-4" }), color: "bg-green-100 text-green-700" },
  LEVEL_UP: { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4" }), color: "bg-yellow-100 text-yellow-600" },
  BADGE_EARNED: { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4" }), color: "bg-purple-100 text-purple-600" },
  CHALLENGE_COMPLETED: { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4" }), color: "bg-blue-100 text-blue-600" },
  TEAM_INVITE: { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }), color: "bg-indigo-100 text-indigo-600" },
  PROPERTY_VERIFIED: { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4" }), color: "bg-teal-100 text-teal-600" },
  OVERFLOW_LEAD: { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4" }), color: "bg-slate-100 text-slate-600" }
};
function timeAgo$2(date) {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1e3);
  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}
function NotificationsPage() {
  const { referrer } = useAppStore();
  const { toast: toast2 } = useToast();
  const { data: notifications, refetch } = useGetNotifications(
    referrer?.id ?? 0
  );
  const markAll = useMarkAllNotificationsRead();
  const markOne = useMarkNotificationRead();
  const unread = (notifications || []).filter((n) => !n.isRead);
  const handleMarkAll = async () => {
    if (!referrer) return;
    await markAll.mutateAsync({ referrerId: referrer.id });
    refetch();
    toast2({ title: "All notifications cleared" });
  };
  const handleMarkOne = async (id) => {
    await markOne.mutateAsync({ notificationId: id });
    refetch();
  };
  if (!referrer) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-12 h-12 text-slate-300 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium", children: "Please register to see notifications" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-black font-display text-slate-900 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-6 h-6 text-primary" }),
          " Notifications"
        ] }),
        unread.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-orange-600 font-medium mt-1", children: [
          unread.length,
          " unread"
        ] })
      ] }),
      unread.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleMarkAll, className: "flex items-center gap-2 text-sm text-slate-500 hover:text-primary font-medium transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "w-4 h-4" }),
        " Mark all read"
      ] })
    ] }),
    (notifications || []).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BellOff, { className: "w-12 h-12 text-slate-300 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium", children: "No notifications yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm", children: "We'll notify you about payouts, level-ups, and more" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: (notifications || []).map((n, i) => {
      const config = TYPE_CONFIG[n.type] || TYPE_CONFIG.OVERFLOW_LEAD;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 5 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.03 },
          onClick: () => !n.isRead && handleMarkOne(n.id),
          className: cn(
            "flex gap-4 p-4 rounded-2xl border transition-all cursor-pointer hover:shadow-sm",
            n.isRead ? "bg-white border-slate-100 opacity-70" : "bg-white border-orange-100 shadow-sm"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${config.color}`, children: config.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-900 text-sm", children: n.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm leading-snug", children: n.message }),
              n.amount && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-green-600 font-bold text-sm mt-1", children: [
                "+₹",
                n.amount
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-xs mt-1", children: timeAgo$2(n.createdAt) })
            ] }),
            !n.isRead && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 bg-primary rounded-full mt-1.5 shrink-0" })
          ]
        },
        n.id
      );
    }) })
  ] }) });
}
const LEVEL_INFO = [
  { level: "BEGINNER", label: "Beginner", minXp: 0, color: "bg-slate-200 text-slate-700" },
  { level: "EXPLORER", label: "Explorer", minXp: 100, color: "bg-blue-100 text-blue-700" },
  { level: "HUSTLER", label: "Hustler", minXp: 300, color: "bg-orange-100 text-orange-700" },
  { level: "PRO", label: "Pro", minXp: 700, color: "bg-purple-100 text-purple-700" },
  { level: "LEGEND", label: "Legend", minXp: 1500, color: "bg-yellow-100 text-yellow-700" }
];
function CalculatorPage() {
  const [referrals, setReferrals] = reactExports.useState(10);
  const [verifyRate, setVerifyRate] = reactExports.useState(70);
  const [bookRate, setBookRate] = reactExports.useState(30);
  const { data } = useCalculateEarnings({
    referrals,
    verifyRate: verifyRate / 100,
    bookRate: bookRate / 100
  });
  const levelInfo = data ? LEVEL_INFO.find((l) => l.level === data.estimatedLevel) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-6 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-black font-display text-slate-900 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-6 h-6 text-primary" }),
        " Earnings Calculator"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm mt-1", children: "See how much you could earn referring people to PGs in Bangalore" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-bold text-slate-800", children: "Referrals per week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-black text-primary", children: referrals })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 1,
            max: 50,
            value: referrals,
            onChange: (e) => setReferrals(Number(e.target.value)),
            className: "w-full accent-orange-500"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-slate-400 mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "50" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-bold text-slate-800", children: "Verification rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-black text-green-600", children: [
            verifyRate,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 10,
            max: 100,
            step: 5,
            value: verifyRate,
            onChange: (e) => setVerifyRate(Number(e.target.value)),
            className: "w-full accent-green-500"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-1", children: "% of your referrals that get verified (avg: 65%)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-bold text-slate-800", children: "Booking rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-black text-blue-600", children: [
            bookRate,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 5,
            max: 80,
            step: 5,
            value: bookRate,
            onChange: (e) => setBookRate(Number(e.target.value)),
            className: "w-full accent-blue-500"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-1", children: "% that actually move in (avg: 25%)" })
      ] })
    ] }),
    data && true && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-100 rounded-2xl p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-green-600 uppercase tracking-wider mb-2", children: "Weekly Earnings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl font-black text-green-700", children: [
            "₹",
            data.totalEarnings.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-600 mt-1", children: [
            data.verifiedCount,
            " verified · ",
            data.bookedCount,
            " booked"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-100 rounded-2xl p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-orange-600 uppercase tracking-wider mb-2", children: "Monthly Projection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl font-black text-orange-700", children: [
            "₹",
            data.monthlyProjection.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-orange-600 mt-1", children: [
            "4 weeks × ₹",
            data.totalEarnings.toLocaleString()
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-slate-900 mb-4", children: "Breakdown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-600 text-sm", children: [
              "Verification bonus (₹50 × ",
              data.verifiedCount,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-800", children: [
              "₹",
              data.verificationEarnings
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-600 text-sm", children: [
              "Booking bonus (₹500 × ",
              data.bookedCount,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-slate-800", children: [
              "₹",
              data.bookingEarnings
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-slate-100" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-800", children: "Total weekly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black text-primary", children: [
              "₹",
              data.totalEarnings
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-slate-900 mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-primary" }),
          " XP & Level"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-black text-slate-800", children: [
              data.xpEarned,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-medium text-slate-500", children: "XP" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 mt-1", children: "per week at this rate" })
          ] }),
          levelInfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `px-4 py-2 rounded-xl ${levelInfo.color} font-bold text-sm`, children: [
            "🏆 ",
            levelInfo.label
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 text-white rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-green-400" }),
          " Annual earnings"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-5xl font-black text-green-400", children: [
          "₹",
          (data.monthlyProjection * 12).toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm mt-2", children: "Assuming consistent weekly performance" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-500 rounded-2xl p-5 text-white text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg mb-2", children: "Ready to start earning?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-orange-100 mb-4", children: "Join thousands earning from PG referrals in Bangalore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/register", className: "block bg-white text-orange-600 font-bold py-3 rounded-xl hover:bg-orange-50 transition-colors", children: "Register Now →" })
      ] })
    ] }, `${referrals}-${verifyRate}-${bookRate}`)
  ] }) });
}
const AREA_EMOJIS = {
  koramangala: "☕",
  "hsr-layout": "🚀",
  indiranagar: "🍺",
  marathahalli: "💻",
  "electronic-city": "🏭",
  whitefield: "🌳",
  "btm-layout": "🎓",
  bellandur: "🌊",
  hebbal: "✈️",
  yelahanka: "🏡"
};
const AREA_COLORS = [
  "from-orange-50 to-orange-100 border-orange-200",
  "from-blue-50 to-blue-100 border-blue-200",
  "from-purple-50 to-purple-100 border-purple-200",
  "from-green-50 to-green-100 border-green-200",
  "from-yellow-50 to-yellow-100 border-yellow-200",
  "from-pink-50 to-pink-100 border-pink-200"
];
function AreasPage() {
  const { data: areas } = useGetAreas();
  const [, setLocation] = useLocation();
  const [modal, setModal] = reactExports.useState(null);
  reactExports.useEffect(() => {
    track("view", { source: "areas" });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black font-display text-slate-900", children: "Explore Areas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm mt-1", children: "Bangalore's top PG locations ranked by demand" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: (areas || []).map((area, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.05 },
          onClick: () => {
            track("view", { source: "areas", area: area.name });
            setLocation(`/pg?area=${encodeURIComponent(area.name)}`);
          },
          className: `bg-gradient-to-br ${AREA_COLORS[i % AREA_COLORS.length]} border rounded-2xl p-5 cursor-pointer hover:shadow-md transition-all group relative`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: AREA_EMOJIS[area.slug] || "📍" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-slate-900 text-lg leading-tight", children: area.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-xs", children: area.description })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 rounded-lg p-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 font-medium", children: "Available" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-800", children: area.availablePGs })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 rounded-lg p-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 font-medium", children: "Avg Rent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-black text-slate-800", children: [
                  "₹",
                  (area.avgRent / 1e3).toFixed(0),
                  "k"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/60 rounded-lg p-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 font-medium", children: "Demand" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3 text-green-600" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-800 text-sm", children: area.popularityScore })
                ] })
              ] })
            ] }),
            area.metroNearby && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500 mt-2 flex items-center gap-1", children: [
              "🚇 ",
              area.metroNearby
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  track("quote_request", { source: "areas", area: area.name });
                  setModal({ mode: "quote", area: area.name });
                },
                className: "mt-3 inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
                  " Get quotation"
                ]
              }
            )
          ]
        },
        area.slug
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeadModal, { open: !!modal, onClose: () => setModal(null), mode: modal?.mode, area: modal?.area })
  ] });
}
function ManagerDashPage() {
  const { referrer, persona } = useAppStore();
  const [, setLocation] = useLocation();
  reactExports.useEffect(() => {
    if (!referrer) {
      setLocation("/register");
      return;
    }
    if (persona !== "PG_MANAGER") {
      setLocation("/home");
      return;
    }
    setLocation("/manager/bookos/command");
  }, [referrer, persona, setLocation]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-gradient-to-br from-slate-50 via-amber-50/40 to-slate-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.3em] text-amber-700", children: "GHARPAYY" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-2xl text-slate-900 mt-1", children: "Opening your command center…" })
  ] }) });
}
function ManagerPropertiesPage() {
  const { referrer } = useAppStore();
  const [, setLocation] = useLocation();
  const { toast: toast2 } = useToast();
  const { data: properties, refetch } = useGetManagerProperties(referrer?.id ?? 0);
  const toggleAvailability = useUpdatePropertyAvailability();
  const handleToggle = async (propertyId, current) => {
    const newAvail = current === "AVAILABLE" ? "FULL" : "AVAILABLE";
    try {
      await toggleAvailability.mutateAsync({ propertyId, data: { availability: newAvail } });
      toast2({ title: `Marked as ${newAvail}`, description: newAvail === "FULL" ? "Leads will now be routed to nearby PGs" : "You're open for new tenants" });
      refetch();
    } catch {
      toast2({ title: "Failed to update", variant: "destructive" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black font-display text-slate-900", children: "My Properties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-500 text-sm", children: [
          (properties || []).length,
          " PGs listed"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation("/manager/properties/new"),
          className: "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:bg-orange-600 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            " Add PG"
          ]
        }
      )
    ] }),
    !properties || properties.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-16 h-16 text-slate-300 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-slate-700 mb-2", children: "No properties listed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mb-6", children: "Add your PG to get leads from the Gharpayy network" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setLocation("/manager/properties/new"),
          className: "px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-orange-600 transition-colors",
          children: "+ List your PG"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: properties.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.05 },
        className: "bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-slate-900 text-lg", children: p.name }),
                p.isVerified && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-green-600 border-green-200 text-[10px]", children: "✓ Verified" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-slate-500 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.address })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-end gap-2", children: p.avgRating && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-yellow-50 border border-yellow-100 rounded-lg px-2 py-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 text-yellow-500 fill-yellow-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: p.avgRating.toFixed(1) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 rounded-lg p-2.5 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 font-medium", children: "Rent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-black text-slate-800", children: [
                "₹",
                p.monthlyRent.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 rounded-lg p-2.5 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 font-medium", children: "Total Rooms" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-800", children: p.totalRooms })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 rounded-lg p-2.5 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 font-medium", children: "Available" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-black ${p.availableRooms > 0 ? "text-green-600" : "text-red-500"}`, children: p.availableRooms })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-3 py-1.5 rounded-lg text-sm font-bold ${p.availability === "AVAILABLE" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`, children: p.availability }),
              p.availability === "FULL" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400", children: "Leads routed to nearby PGs" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setLocation(`/manager/properties/${p.id}/rooms`),
                className: "flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-bold hover:bg-primary/20 transition-colors",
                children: "Manage rooms →"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleToggle(p.id, p.availability),
                className: "flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors",
                children: p.availability === "AVAILABLE" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRight, { className: "w-4 h-4 text-green-500" }),
                  " Mark Full"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleLeft, { className: "w-4 h-4 text-red-500" }),
                  " Mark Available"
                ] })
              }
            )
          ] })
        ]
      },
      p.id
    )) })
  ] }) });
}
const AMENITY_OPTIONS = ["WiFi", "AC", "Food", "Security", "Parking", "Laundry", "TV", "Gym", "Power Backup", "Water 24/7", "CCTV", "Housekeeping"];
const BANGALORE_AREAS = ["Koramangala", "HSR Layout", "Indiranagar", "Marathahalli", "Electronic City", "Whitefield", "BTM Layout", "Bellandur", "Hebbal", "Yelahanka", "JP Nagar", "Banashankari", "Rajajinagar", "Malleshwaram"];
function ManagerAddPropertyPage() {
  const { referrer } = useAppStore();
  const [, setLocation] = useLocation();
  const { toast: toast2 } = useToast();
  const [name, setName] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [address, setAddress] = reactExports.useState("");
  const [area, setArea] = reactExports.useState("");
  const [pincode, setPincode] = reactExports.useState("");
  const [rent, setRent] = reactExports.useState("");
  const [deposit, setDeposit] = reactExports.useState("");
  const [gender, setGender] = reactExports.useState("ANY");
  const [totalRooms, setTotalRooms] = reactExports.useState("");
  const [availableRooms, setAvailableRooms] = reactExports.useState("");
  const [selectedAmenities, setSelectedAmenities] = reactExports.useState([]);
  const [metro, setMetro] = reactExports.useState("");
  const [landmark, setLandmark] = reactExports.useState("");
  const [referralBonus, setReferralBonus] = reactExports.useState("");
  const createProperty = useCreateProperty();
  const toggleAmenity = (a2) => {
    setSelectedAmenities((prev) => prev.includes(a2) ? prev.filter((x) => x !== a2) : [...prev, a2]);
  };
  const handleSubmit = async () => {
    if (!referrer || !name || !address || !area || !rent) {
      toast2({ title: "Fill all required fields", variant: "destructive" });
      return;
    }
    try {
      await createProperty.mutateAsync({
        data: {
          managerId: referrer.id,
          name,
          description,
          address,
          area,
          pincode,
          monthlyRent: Number(rent),
          deposit: Number(deposit || 0),
          gender,
          totalRooms: Number(totalRooms || 1),
          availableRooms: Number(availableRooms || totalRooms || 1),
          amenities: selectedAmenities,
          nearbyMetro: metro || void 0,
          nearbyLandmark: landmark || void 0,
          referralBonus: Number(referralBonus || 0)
        }
      });
      toast2({ title: "PG listed! 🎉", description: "Your property is now visible to the network" });
      setLocation("/manager/properties");
    } catch {
      toast2({ title: "Failed to create property", variant: "destructive" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-6 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLocation("/manager/properties"), className: "flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
      " Back to Properties"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-black font-display text-slate-900 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-6 h-6 text-primary" }),
        " List Your PG"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm mt-1", children: "Add your property to get leads from across the network" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-5 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-slate-900", children: "Basic Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-bold text-slate-700 mb-1", children: "PG Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "e.g. Sunrise PG Koramangala", value: name, onChange: (e) => setName(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-bold text-slate-700 mb-1", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Describe your PG, amenities, rules...", value: description, onChange: (e) => setDescription(e.target.value), rows: 3 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-bold text-slate-700 mb-1", children: "Full Address *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "House no, street, landmark...", value: address, onChange: (e) => setAddress(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-bold text-slate-700 mb-1", children: "Area *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: area,
                  onChange: (e) => setArea(e.target.value),
                  className: "w-full h-10 px-3 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select area" }),
                    BANGALORE_AREAS.map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a2, children: a2 }, a2))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-bold text-slate-700 mb-1", children: "Pincode" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "560001", value: pincode, onChange: (e) => setPincode(e.target.value), maxLength: 6 })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-5 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-slate-900", children: "Pricing & Rooms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-bold text-slate-700 mb-1", children: "Monthly Rent (₹) *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", placeholder: "8000", value: rent, onChange: (e) => setRent(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-bold text-slate-700 mb-1", children: "Security Deposit (₹)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", placeholder: "16000", value: deposit, onChange: (e) => setDeposit(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-bold text-slate-700 mb-1", children: "Total Rooms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", placeholder: "10", value: totalRooms, onChange: (e) => setTotalRooms(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-bold text-slate-700 mb-1", children: "Available Rooms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", placeholder: "3", value: availableRooms, onChange: (e) => setAvailableRooms(e.target.value) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-bold text-slate-700 mb-2", children: "Gender" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["MALE", "FEMALE", "ANY"].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setGender(g),
              className: `flex-1 py-2 rounded-lg text-sm font-bold border-2 transition-all ${gender === g ? "bg-primary text-white border-primary" : "bg-white text-slate-600 border-slate-200"}`,
              children: g === "MALE" ? "👨 Boys" : g === "FEMALE" ? "👩 Girls" : "🤝 Co-ed"
            },
            g
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-slate-900 mb-4", children: "Amenities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: AMENITY_OPTIONS.map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => toggleAmenity(a2),
            className: `px-3 py-1.5 rounded-full text-sm font-medium border-2 transition-all ${selectedAmenities.includes(a2) ? "bg-primary text-white border-primary" : "bg-white text-slate-600 border-slate-200"}`,
            children: a2
          },
          a2
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-5 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-slate-900", children: "Nearby Landmarks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-bold text-slate-700 mb-1", children: "Nearest Metro Station" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "e.g. Marathahalli Metro", value: metro, onChange: (e) => setMetro(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-bold text-slate-700 mb-1", children: "Landmark / Nearby Area" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "e.g. Near Forum Mall", value: landmark, onChange: (e) => setLandmark(e.target.value) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-100 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-orange-900 mb-2", children: "Extra Referral Bonus (Optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-700 text-sm mb-3", children: "Offer extra cash on top of the standard ₹500 to attract more referrers to your PG." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-600 font-medium", children: "₹" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              placeholder: "0",
              value: referralBonus,
              onChange: (e) => setReferralBonus(e.target.value),
              className: "max-w-32"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-500", children: "extra bonus per booking" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSubmit, disabled: createProperty.isPending, className: "w-full h-12 text-base font-bold", children: createProperty.isPending ? "Listing..." : "List My PG 🏠" })
    ] })
  ] }) });
}
const STATUS_META = {
  vacant: { label: "Vacant now", cls: "bg-emerald-100 text-emerald-700 border-emerald-200", dot: "bg-emerald-500" },
  vacating: { label: "Vacating", cls: "bg-amber-100 text-amber-700 border-amber-200", dot: "bg-amber-500" },
  occupied: { label: "Occupied", cls: "bg-slate-100 text-slate-600 border-slate-200", dot: "bg-slate-400" },
  blocked: { label: "Blocked", cls: "bg-rose-100 text-rose-600 border-rose-200", dot: "bg-rose-500" }
};
const ACTION_META = {
  pitch: { label: "Pitched to lead", icon: MessageSquare, cls: "text-sky-600 bg-sky-50" },
  virtual_tour: { label: "Virtual tour", icon: Video, cls: "text-violet-600 bg-violet-50" },
  visit_scheduled: { label: "Visit scheduled", icon: CalendarDays, cls: "text-amber-600 bg-amber-50" },
  visit_done: { label: "Visit completed", icon: CircleCheck, cls: "text-emerald-600 bg-emerald-50" },
  prebooked: { label: "Pre-booked", icon: ShieldCheck, cls: "text-primary bg-primary/10" },
  confirm: { label: "Owner confirmed", icon: CircleCheck, cls: "text-slate-600 bg-slate-50" },
  rent_changed: { label: "Rent updated", icon: IndianRupee, cls: "text-orange-600 bg-orange-50" }
};
const K$2 = {
  rooms: (pid) => `gp_rooms_${pid}`,
  visits: (pid) => `gp_visits_${pid}`,
  acts: (pid) => `gp_actions_${pid}`
};
function load$2(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function save$2(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}
function hoursSince(iso) {
  if (!iso) return Infinity;
  return (Date.now() - new Date(iso).getTime()) / 36e5;
}
function isStale(room) {
  return hoursSince(room.lastConfirmedAt) > 24;
}
function isSoftLocked(room) {
  return room.softLockUntil ? new Date(room.softLockUntil).getTime() > Date.now() : false;
}
function fmtINR(n) {
  return `₹${(n || 0).toLocaleString("en-IN")}`;
}
function timeAgo$1(iso) {
  const h = hoursSince(iso);
  if (h < 1) return `${Math.max(1, Math.round(h * 60))}m ago`;
  if (h < 24) return `${Math.round(h)}h ago`;
  return `${Math.round(h / 24)}d ago`;
}
function ManagerRoomsPage() {
  const { id } = useParams();
  const pid = String(id);
  const [, setLocation] = useLocation();
  const { toast: toast2 } = useToast();
  const { referrer } = useAppStore();
  const { data: properties } = useGetManagerProperties(referrer?.id ?? 0);
  const property = reactExports.useMemo(() => (properties || []).find((p) => String(p.id) === pid), [properties, pid]);
  const [rooms, setRooms] = reactExports.useState([]);
  const [visits, setVisits] = reactExports.useState([]);
  const [actions, setActions] = reactExports.useState([]);
  const [tab, setTab] = reactExports.useState("inventory");
  const [draft, setDraft] = reactExports.useState({ status: "vacant", beds: 1, actualRent: 0, expectedRent: 0, roomNumber: "" });
  const [visitDraft, setVisitDraft] = reactExports.useState({});
  const [showAdd, setShowAdd] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!pid) return;
    let r2 = load$2(K$2.rooms(pid), []);
    if (r2.length === 0) r2 = seedRooms();
    setRooms(r2);
    setVisits(load$2(K$2.visits(pid), []));
    setActions(load$2(K$2.acts(pid), []));
  }, [pid]);
  reactExports.useEffect(() => {
    if (pid) save$2(K$2.rooms(pid), rooms);
  }, [pid, rooms]);
  reactExports.useEffect(() => {
    if (pid) save$2(K$2.visits(pid), visits);
  }, [pid, visits]);
  reactExports.useEffect(() => {
    if (pid) save$2(K$2.acts(pid), actions);
  }, [pid, actions]);
  const kpis = reactExports.useMemo(() => {
    const sellable = rooms.filter((r2) => (r2.status === "vacant" || r2.status === "vacating") && !isStale(r2)).length;
    const locked = rooms.filter(isStale).length;
    const occupiedBeds = rooms.filter((r2) => r2.status === "occupied").reduce((s, r2) => s + r2.beds, 0);
    const totalBeds = rooms.reduce((s, r2) => s + r2.beds, 0) || 1;
    const occupancy = Math.round(occupiedBeds / totalBeds * 100);
    const revenueAtRisk = rooms.filter((r2) => r2.status === "vacant" || r2.status === "vacating").reduce((s, r2) => s + (r2.expectedRent || 0), 0);
    const visitsThisWeek = visits.filter((v) => hoursSince(v.scheduledAt) > -24 * 7 && hoursSince(v.scheduledAt) < 24 * 7).length;
    const compliance = Math.round((rooms.length - locked) / Math.max(rooms.length, 1) * 100);
    return { sellable, locked, occupancy, revenueAtRisk, visitsThisWeek, compliance };
  }, [rooms, visits]);
  const logAction = (roomId, type, note) => {
    setActions((a2) => [{ id: crypto.randomUUID(), roomId, type, at: (/* @__PURE__ */ new Date()).toISOString(), by: referrer?.name || "Owner", note }, ...a2].slice(0, 200));
  };
  const addRoom = () => {
    if (!draft.roomNumber) {
      toast2({ title: "Room number required", variant: "destructive" });
      return;
    }
    const newRoom = {
      id: crypto.randomUUID(),
      roomNumber: String(draft.roomNumber),
      beds: Number(draft.beds || 1),
      status: draft.status || "vacant",
      vacantDate: draft.vacantDate,
      actualRent: Number(draft.actualRent || 0),
      expectedRent: Number(draft.expectedRent || draft.actualRent || 0),
      floorRent: draft.floorRent ? Number(draft.floorRent) : void 0,
      lastConfirmedAt: (/* @__PURE__ */ new Date()).toISOString(),
      demandScore: 40 + Math.floor(Math.random() * 50)
    };
    setRooms((r2) => [newRoom, ...r2]);
    logAction(newRoom.id, "confirm", "Room added");
    setDraft({ status: "vacant", beds: 1, actualRent: 0, expectedRent: 0, roomNumber: "" });
    setShowAdd(false);
    toast2({ title: "Room added" });
  };
  const update = (rid, patch) => {
    setRooms((rs) => rs.map((r2) => r2.id === rid ? { ...r2, ...patch } : r2));
  };
  const confirmRoom = (rid) => {
    update(rid, { lastConfirmedAt: (/* @__PURE__ */ new Date()).toISOString() });
    logAction(rid, "confirm");
  };
  const confirmAll = () => {
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    setRooms((rs) => rs.map((r2) => ({ ...r2, lastConfirmedAt: now2 })));
    rooms.forEach((r2) => isStale(r2) && logAction(r2.id, "confirm", "Bulk confirm"));
    toast2({ title: "All rooms confirmed for 24h", description: "Inventory is now open for the Gharpayy team." });
  };
  const setStatus = (rid, s) => {
    update(rid, { status: s, lastConfirmedAt: (/* @__PURE__ */ new Date()).toISOString() });
    logAction(rid, "confirm", `Status → ${STATUS_META[s].label}`);
  };
  const remove = (rid) => {
    setRooms((rs) => rs.filter((r2) => r2.id !== rid));
    setVisits((vs) => vs.filter((v) => v.roomId !== rid));
  };
  const shareRoom = (room) => {
    if (isStale(room)) {
      toast2({ title: "Confirm room first", description: "Stale rooms can't be referred.", variant: "destructive" });
      return;
    }
    const pname = property?.name || "the PG";
    const area = property?.area || "";
    const text = `Hi! Room *${room.roomNumber}* at *${pname}*${area ? ` (${area})` : ""} — ${room.beds} bed, ${STATUS_META[room.status].label}${room.vacantDate ? ` from ${room.vacantDate}` : ""}. Rent ${fmtINR(room.expectedRent)}/mo. Interested? I can schedule a visit.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    logAction(room.id, "pitch", "WhatsApp share");
    update(room.id, { softLockUntil: new Date(Date.now() + 6 * 36e5).toISOString() });
  };
  const scheduleVisit = (roomId) => {
    if (!visitDraft.customerName || !visitDraft.scheduledAt) {
      toast2({ title: "Name & time required", variant: "destructive" });
      return;
    }
    const room = rooms.find((r2) => r2.id === roomId);
    if (!room) return;
    if (isStale(room)) {
      toast2({ title: "Confirm room first" });
      return;
    }
    const v = {
      id: crypto.randomUUID(),
      roomId,
      customerName: String(visitDraft.customerName),
      customerPhone: visitDraft.customerPhone,
      scheduledAt: String(visitDraft.scheduledAt),
      type: visitDraft.type || "physical",
      status: "scheduled",
      notes: visitDraft.notes
    };
    setVisits((vs) => [v, ...vs]);
    update(roomId, { softLockUntil: new Date(new Date(v.scheduledAt).getTime() + 24 * 36e5).toISOString() });
    logAction(roomId, v.type === "virtual" ? "virtual_tour" : "visit_scheduled", `${v.customerName} @ ${new Date(v.scheduledAt).toLocaleString()}`);
    setVisitDraft({});
    toast2({ title: "Visit scheduled", description: "Room is soft-locked until visit + 24h." });
  };
  const markVisit = (id2, status) => {
    setVisits((vs) => vs.map((v2) => v2.id === id2 ? { ...v2, status } : v2));
    const v = visits.find((x) => x.id === id2);
    if (v && status === "done") logAction(v.roomId, "visit_done", v.customerName);
  };
  if (!property) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLocation("/manager/properties"), className: "flex items-center gap-2 text-slate-500 text-sm mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
        " Back"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500", children: "Property not found." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-5 max-w-5xl mx-auto pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLocation("/manager/properties"), className: "flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-xs font-medium mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" }),
          " Back to Properties"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl md:text-3xl font-black font-display text-slate-900 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-7 h-7 text-primary" }),
          " ",
          property.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-500 text-sm mt-1 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5" }),
          " ",
          property.area,
          " · Inventory OS"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setShowAdd(true), className: "shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-1" }),
        " Add room"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DailyRitual, { locked: kpis.locked, total: rooms.length, compliance: kpis.compliance, onConfirmAll: confirmAll }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi$1, { label: "Occupancy", value: `${kpis.occupancy}%`, icon: Users, tone: "slate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi$1, { label: "Sellable now", value: kpis.sellable, icon: Zap, tone: "emerald" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi$1, { label: "Auto-locked", value: kpis.locked, icon: Lock, tone: "rose" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi$1, { label: "Revenue at risk", value: fmtINR(kpis.revenueAtRisk), icon: TrendingDown, tone: "amber", small: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi$1, { label: "Visits this wk", value: kpis.visitsThisWeek, icon: CalendarDays, tone: "violet" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 border-b border-slate-200", children: ["inventory", "visits", "ledger", "pricing"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setTab(t),
        className: `px-4 py-2.5 text-sm font-bold capitalize border-b-2 transition-colors ${tab === t ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-slate-800"}`,
        children: t === "ledger" ? "Effort ledger" : t
      },
      t
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showAdd && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        className: "bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-slate-900", children: "Add a room" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowAdd(false), className: "text-slate-400 hover:text-slate-700 text-sm", children: "Cancel" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field$4, { label: "Room number *", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "201", value: draft.roomNumber || "", onChange: (e) => setDraft({ ...draft, roomNumber: e.target.value }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field$4, { label: "Beds", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 1, value: draft.beds || 1, onChange: (e) => setDraft({ ...draft, beds: Number(e.target.value) }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field$4, { label: "Status", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                value: draft.status,
                onChange: (e) => setDraft({ ...draft, status: e.target.value }),
                className: "w-full h-9 px-3 border border-input rounded-md bg-background text-sm",
                children: Object.keys(STATUS_META).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: STATUS_META[s].label }, s))
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field$4, { label: "Actual rent (₹)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.actualRent || "", onChange: (e) => setDraft({ ...draft, actualRent: Number(e.target.value) }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field$4, { label: "Expected rent (₹)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.expectedRent || "", onChange: (e) => setDraft({ ...draft, expectedRent: Number(e.target.value) }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field$4, { label: "Floor rent (private)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.floorRent || "", onChange: (e) => setDraft({ ...draft, floorRent: Number(e.target.value) }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field$4, { label: "Vacant from", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: draft.vacantDate || "", onChange: (e) => setDraft({ ...draft, vacantDate: e.target.value }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: addRoom, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-1" }),
            " Add room"
          ] })
        ]
      }
    ) }),
    tab === "inventory" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      InventoryTab,
      {
        rooms,
        visits,
        onConfirm: confirmRoom,
        onStatus: setStatus,
        onShare: shareRoom,
        onRemove: remove,
        onScheduleVisit: scheduleVisit,
        visitDraft,
        setVisitDraft
      }
    ),
    tab === "visits" && /* @__PURE__ */ jsxRuntimeExports.jsx(VisitsTab, { visits, rooms, onMark: markVisit }),
    tab === "ledger" && /* @__PURE__ */ jsxRuntimeExports.jsx(LedgerTab, { actions, rooms }),
    tab === "pricing" && /* @__PURE__ */ jsxRuntimeExports.jsx(PricingTab, { rooms, onApply: (rid, rent) => {
      update(rid, { expectedRent: rent });
      logAction(rid, "rent_changed", `→ ${fmtINR(rent)}`);
    } })
  ] }) });
}
function Field$4({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-slate-600 mb-1", children: label }),
    children
  ] });
}
function DailyRitual({ locked, total, compliance, onConfirmAll }) {
  if (total === 0) return null;
  const hasLocked = locked > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-2xl p-4 border ${hasLocked ? "bg-amber-50 border-amber-200" : "bg-emerald-50 border-emerald-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      hasLocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-amber-600 mt-0.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-emerald-600 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-bold text-sm ${hasLocked ? "text-amber-900" : "text-emerald-900"}`, children: hasLocked ? `${locked} of ${total} rooms need today's confirmation` : "All rooms confirmed today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-xs mt-0.5 ${hasLocked ? "text-amber-700" : "text-emerald-700"}`, children: [
          "Compliance score · ",
          compliance,
          "%. Unconfirmed rooms are auto-locked from referrals to prevent ghost selling."
        ] })
      ] })
    ] }),
    hasLocked && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: onConfirmAll, className: "bg-white border-amber-300 text-amber-800 hover:bg-amber-100", children: "Confirm all unchanged" })
  ] }) });
}
function Kpi$1({ label, value, icon: Icon2, tone, small }) {
  const tones = {
    slate: "bg-white border-slate-100 text-slate-900",
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-700",
    rose: "bg-rose-50 border-rose-100 text-rose-700",
    amber: "bg-amber-50 border-amber-100 text-amber-700",
    violet: "bg-violet-50 border-violet-100 text-violet-700"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-xl p-3 ${tones[tone]}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wide font-bold opacity-70", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-3.5 h-3.5 opacity-60" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-black mt-1 ${small ? "text-base" : "text-xl"}`, children: value })
  ] });
}
function InventoryTab({ rooms, visits, onConfirm, onStatus, onShare, onRemove, onScheduleVisit, visitDraft, setVisitDraft }) {
  const [openVisitFor, setOpenVisitFor] = reactExports.useState(null);
  if (rooms.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-14 bg-white border border-dashed border-slate-200 rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "w-10 h-10 text-slate-300 mx-auto mb-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm", children: "No rooms yet. Add your first room to start tracking." })
    ] });
  }
  const grouped = { vacant: [], vacating: [], occupied: [], blocked: [] };
  rooms.forEach((r2) => grouped[r2.status].push(r2));
  const order = ["vacant", "vacating", "occupied", "blocked"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: order.map((s) => grouped[s].length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2 h-2 rounded-full ${STATUS_META[s].dot}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-bold uppercase tracking-wide text-slate-500", children: [
        STATUS_META[s].label,
        " · ",
        grouped[s].length
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: grouped[s].map((room) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      RoomCard,
      {
        room,
        visits: visits.filter((v) => v.roomId === room.id && v.status === "scheduled"),
        onConfirm: () => onConfirm(room.id),
        onStatus: (s2) => onStatus(room.id, s2),
        onShare: () => onShare(room),
        onRemove: () => onRemove(room.id),
        openVisit: openVisitFor === room.id,
        setOpenVisit: (b) => setOpenVisitFor(b ? room.id : null),
        onScheduleVisit: () => {
          onScheduleVisit(room.id);
          setOpenVisitFor(null);
        },
        visitDraft,
        setVisitDraft
      },
      room.id
    )) })
  ] }, s)) });
}
function RoomCard({ room, visits, onConfirm, onStatus, onShare, onRemove, openVisit, setOpenVisit, onScheduleVisit, visitDraft, setVisitDraft }) {
  const stale = isStale(room);
  const locked = isSoftLocked(room);
  const rentDelta = room.expectedRent - room.actualRent;
  const trendUp = rentDelta > 0;
  const demand = room.demandScore ?? 50;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { layout: true, className: "bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-md transition-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-black text-slate-900 text-lg", children: [
            "Room ",
            room.roomNumber
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] ${STATUS_META[room.status].cls}`, children: STATUS_META[room.status].label }),
          stale && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] bg-rose-50 text-rose-600 border-rose-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3 mr-1" }),
            " Locked"
          ] }),
          locked && !stale && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] bg-sky-50 text-sky-700 border-sky-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
            " Soft-lock"
          ] }),
          demand > 75 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] bg-orange-50 text-orange-700 border-orange-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3 mr-1" }),
            " Hot"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            room.beds,
            " bed"
          ] }),
          room.vacantDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3 h-3" }),
            " ",
            room.vacantDate
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-3 h-3" }),
            fmtINR(room.expectedRent).replace("₹", ""),
            "/mo",
            rentDelta !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `ml-1 inline-flex items-center gap-0.5 text-[10px] font-bold ${trendUp ? "text-emerald-600" : "text-rose-600"}`, children: [
              trendUp ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-3 h-3" }),
              trendUp ? "+" : "",
              fmtINR(rentDelta)
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onRemove, className: "text-slate-300 hover:text-rose-500 p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] font-bold text-slate-500 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Demand index" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          demand,
          "/100"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-slate-100 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${demand > 75 ? "bg-orange-500" : demand > 50 ? "bg-amber-400" : "bg-slate-300"}`, style: { width: `${demand}%` } }) })
    ] }),
    visits.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 bg-amber-50 border border-amber-100 rounded-lg p-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase text-amber-700 mb-1", children: "Upcoming visits" }),
      visits.slice(0, 2).map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-amber-900 flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
        " ",
        v.customerName,
        " · ",
        new Date(v.scheduledAt).toLocaleString([], { dateStyle: "short", timeStyle: "short" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] bg-white border-amber-200 ml-auto", children: v.type })
      ] }, v.id))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 mt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: room.status,
          onChange: (e) => onStatus(e.target.value),
          className: "h-8 px-2 border border-slate-200 rounded-md bg-white text-xs font-medium",
          children: Object.keys(STATUS_META).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: STATUS_META[s].label }, s))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: onConfirm, className: "h-8 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 mr-1" }),
        " Confirm"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => setOpenVisit(!openVisit), disabled: stale || room.status === "occupied" || room.status === "blocked", className: "h-8 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3.5 h-3.5 mr-1" }),
        " Visit"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: onShare, disabled: stale || room.status === "occupied" || room.status === "blocked", className: "h-8 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-3.5 h-3.5 mr-1" }),
        " Refer"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: openVisit && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "mt-3 overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-slate-700", children: [
            "Schedule a visit · Room ",
            room.roomNumber
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Customer name", value: visitDraft.customerName || "", onChange: (e) => setVisitDraft({ ...visitDraft, customerName: e.target.value }), className: "h-9 text-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Phone (optional)", value: visitDraft.customerPhone || "", onChange: (e) => setVisitDraft({ ...visitDraft, customerPhone: e.target.value }), className: "h-9 text-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "datetime-local", value: visitDraft.scheduledAt || "", onChange: (e) => setVisitDraft({ ...visitDraft, scheduledAt: e.target.value }), className: "h-9 text-xs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: visitDraft.type || "physical",
                onChange: (e) => setVisitDraft({ ...visitDraft, type: e.target.value }),
                className: "h-9 px-2 border border-slate-200 rounded-md bg-white text-xs",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "physical", children: "Physical visit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "virtual", children: "Virtual tour" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: onScheduleVisit, className: "w-full h-8 text-xs", children: "Lock room & schedule" })
        ] })
      }
    ) })
  ] });
}
function VisitsTab({ visits, rooms, onMark }) {
  if (visits.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { icon: CalendarDays, text: "No visits yet. Schedule one from any room." });
  }
  const sorted = [...visits].sort((a2, b) => new Date(b.scheduledAt).getTime() - new Date(a2.scheduledAt).getTime());
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: sorted.map((v) => {
    const room = rooms.find((r2) => r2.id === v.roomId);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-900 text-sm", children: v.customerName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: v.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] ${v.status === "scheduled" ? "bg-amber-50 text-amber-700 border-amber-200" : v.status === "done" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : v.status === "no_show" ? "bg-rose-50 text-rose-700 border-rose-200" : "bg-slate-50 text-slate-600 border-slate-200"}`, children: v.status.replace("_", " ") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500 mt-0.5", children: [
          "Room ",
          room?.roomNumber || "?",
          " · ",
          new Date(v.scheduledAt).toLocaleString(),
          " ",
          v.customerPhone && `· ${v.customerPhone}`
        ] })
      ] }),
      v.status === "scheduled" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => onMark(v.id, "done"), className: "h-8 text-xs", children: "Mark done" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => onMark(v.id, "no_show"), className: "h-8 text-xs", children: "No-show" })
      ] })
    ] }, v.id);
  }) });
}
function LedgerTab({ actions, rooms }) {
  if (actions.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { icon: Activity, text: "Effort ledger is empty. Every pitch, tour, visit and confirmation will appear here." });
  }
  const counts = actions.reduce((acc, a2) => {
    acc[a2.type] = (acc[a2.type] || 0) + 1;
    return acc;
  }, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2.5", children: Object.keys(ACTION_META).slice(0, 4).map((t) => {
      const M = ACTION_META[t];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-xl p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-7 h-7 rounded-lg grid place-items-center ${M.cls}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(M.icon, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase text-slate-500", children: M.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-lg text-slate-900 mt-1", children: counts[t] || 0 })
      ] }, t);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100", children: actions.slice(0, 50).map((a2) => {
      const M = ACTION_META[a2.type];
      const room = rooms.find((r2) => r2.id === a2.roomId);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded-lg grid place-items-center shrink-0 ${M.cls}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(M.icon, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-900", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: M.label }),
            " ",
            room && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-500", children: [
              "· Room ",
              room.roomNumber
            ] })
          ] }),
          a2.note && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mt-0.5", children: a2.note })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 shrink-0", children: timeAgo$1(a2.at) })
      ] }, a2.id);
    }) })
  ] });
}
function PricingTab({ rooms, onApply }) {
  const open = rooms.filter((r2) => r2.status === "vacant" || r2.status === "vacating");
  if (open.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { icon: Sparkles, text: "No vacant/vacating rooms. Pricing assistant activates when rooms open up." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-violet-50 border border-violet-200 rounded-2xl p-4 flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-violet-600 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-violet-900 text-sm", children: "Dynamic pricing suggestions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-violet-700 mt-0.5", children: "Based on demand index, vacancy days and your floor rent. One click applies." })
      ] })
    ] }),
    open.map((r2) => {
      const demand = r2.demandScore ?? 50;
      const factor = demand > 75 ? 1.05 : demand > 50 ? 1 : demand > 35 ? 0.95 : 0.92;
      let suggest = Math.round((r2.expectedRent || r2.actualRent) * factor / 100) * 100;
      if (r2.floorRent && suggest < r2.floorRent) suggest = r2.floorRent;
      const diff = suggest - r2.expectedRent;
      const dir = diff > 0 ? "up" : diff < 0 ? "down" : "flat";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-slate-900 text-sm", children: [
            "Room ",
            r2.roomNumber
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500", children: [
            "Current ask ",
            fmtINR(r2.expectedRent),
            " · demand ",
            demand,
            "/100",
            r2.floorRent ? ` · floor ${fmtINR(r2.floorRent)}` : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-xs font-bold flex items-center gap-1 ${dir === "up" ? "text-emerald-600" : dir === "down" ? "text-rose-600" : "text-slate-500"}`, children: [
            dir === "up" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5" }) : dir === "down" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-3.5 h-3.5" }) : null,
            "Suggest ",
            fmtINR(suggest)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", disabled: diff === 0, onClick: () => onApply(r2.id, suggest), className: "h-8 text-xs", children: "Apply" })
        ] })
      ] }, r2.id);
    })
  ] });
}
function Empty({ icon: Icon2, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-14 bg-white border border-dashed border-slate-200 rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-10 h-10 text-slate-300 mx-auto mb-2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm", children: text })
  ] });
}
function seedRooms() {
  const now2 = /* @__PURE__ */ new Date();
  const iso = (d) => d.toISOString();
  return [
    { id: crypto.randomUUID(), roomNumber: "101", beds: 1, status: "vacant", actualRent: 12e3, expectedRent: 13500, floorRent: 11e3, vacantDate: iso(now2).slice(0, 10), lastConfirmedAt: iso(now2), demandScore: 82 },
    { id: crypto.randomUUID(), roomNumber: "102", beds: 2, status: "vacating", actualRent: 15e3, expectedRent: 16e3, vacantDate: iso(new Date(now2.getTime() + 5 * 864e5)).slice(0, 10), lastConfirmedAt: iso(new Date(now2.getTime() - 30 * 36e5)), demandScore: 64 },
    { id: crypto.randomUUID(), roomNumber: "201", beds: 1, status: "occupied", actualRent: 11500, expectedRent: 12500, lastConfirmedAt: iso(now2), demandScore: 48 },
    { id: crypto.randomUUID(), roomNumber: "202", beds: 1, status: "vacant", actualRent: 9500, expectedRent: 10500, floorRent: 9e3, vacantDate: iso(now2).slice(0, 10), lastConfirmedAt: iso(now2), demandScore: 33 },
    { id: crypto.randomUUID(), roomNumber: "301", beds: 3, status: "blocked", actualRent: 22e3, expectedRent: 24e3, lastConfirmedAt: iso(now2), demandScore: 55 }
  ];
}
function PayoutSetupPage() {
  const { referrer } = useAppStore();
  const { toast: toast2 } = useToast();
  const [, setLocation] = useLocation();
  const [payoutType, setPayoutType] = reactExports.useState("UPI");
  const [upiId, setUpiId] = reactExports.useState("");
  const [accountNumber, setAccountNumber] = reactExports.useState("");
  const [ifscCode, setIfscCode] = reactExports.useState("");
  const [accountName, setAccountName] = reactExports.useState("");
  const { data: existing, refetch } = useGetPayoutMethod(referrer?.id ?? 0);
  const setMethod = useSetPayoutMethod();
  const handleSubmit = async () => {
    if (!referrer) return;
    if (payoutType === "UPI" && !upiId) {
      toast2({ title: "Enter your UPI ID", variant: "destructive" });
      return;
    }
    if (payoutType === "BANK" && (!accountNumber || !ifscCode || !accountName)) {
      toast2({ title: "Fill all bank details", variant: "destructive" });
      return;
    }
    try {
      await setMethod.mutateAsync({
        referrerId: referrer.id,
        data: { type: payoutType, upiId: payoutType === "UPI" ? upiId : void 0, accountNumber: payoutType === "BANK" ? accountNumber : void 0, ifscCode: payoutType === "BANK" ? ifscCode : void 0, accountName: payoutType === "BANK" ? accountName : void 0 }
      });
      toast2({ title: "Payout method saved! 🎉", description: "We'll use this for your next payout." });
      refetch();
    } catch {
      toast2({ title: "Failed to save", variant: "destructive" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-6 max-w-lg mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLocation("/me"), className: "flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
      " Back to Profile"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-black font-display text-slate-900 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-6 h-6 text-primary" }),
        " Payout Setup"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-sm mt-1", children: "Add your UPI or bank account to receive payouts instantly" })
    ] }),
    existing && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-green-600 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-green-800 text-sm", children: "Payout method saved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-600 text-sm", children: existing.type === "UPI" ? `UPI: ${existing.upiId}` : `Bank: ${existing.accountName}` })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-6 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["UPI", "BANK"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setPayoutType(t),
          className: `flex-1 py-3 rounded-xl font-bold text-sm border-2 transition-all ${payoutType === t ? "bg-primary text-white border-primary" : "bg-white text-slate-600 border-slate-200"}`,
          children: t === "UPI" ? "📱 UPI" : "🏦 Bank Account"
        },
        t
      )) }),
      payoutType === "UPI" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-bold text-slate-700", children: "UPI ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "yourname@upi", value: upiId, onChange: (e) => setUpiId(e.target.value), className: "text-lg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400", children: "e.g. 9876543210@paytm, yourname@gpay, name@ybl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mt-2", children: ["@paytm", "@gpay", "@ybl", "@okaxis", "@upi", "@ibl"].map((suffix) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setUpiId((prev) => prev.replace(/@.*$/, "") + suffix),
            className: "px-2 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono hover:bg-slate-100 transition-colors",
            children: suffix
          },
          suffix
        )) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Account holder name", value: accountName, onChange: (e) => setAccountName(e.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Account number", value: accountNumber, onChange: (e) => setAccountNumber(e.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "IFSC Code (e.g. SBIN0001234)", value: ifscCode, onChange: (e) => setIfscCode(e.target.value.toUpperCase()) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSubmit, disabled: setMethod.isPending || !referrer, className: "w-full h-12 text-base font-bold", children: setMethod.isPending ? "Saving..." : "Save Payout Method" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-slate-800 text-sm", children: "Payout Schedule" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-sm text-slate-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "• ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹50" }),
          " paid within 48h of lead verification"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "• ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹500" }),
          " paid within 48h of successful booking"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Minimum payout threshold: ₹100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• All payouts are processed Mon–Fri" })
      ] })
    ] })
  ] }) });
}
const PERSONA_LABELS = {
  GUARD: { emoji: "🛡️", label: "Daily Worker", color: "text-zinc-700", bg: "from-zinc-800 to-zinc-900" },
  STUDENT: { emoji: "🎓", label: "College Student", color: "text-orange-700", bg: "from-orange-400 to-orange-600" },
  EARNER: { emoji: "💼", label: "Side Hustler", color: "text-blue-700", bg: "from-blue-500 to-blue-700" },
  PG_MANAGER: { emoji: "🏠", label: "PG Manager", color: "text-teal-700", bg: "from-teal-500 to-teal-700" },
  BROKER: { emoji: "🤝", label: "Broker / Agent", color: "text-slate-700", bg: "from-slate-700 to-slate-900" },
  INFLUENCER: { emoji: "📱", label: "Influencer", color: "text-purple-700", bg: "from-purple-500 to-purple-700" },
  CORPORATE_HR: { emoji: "🏢", label: "Corporate HR", color: "text-indigo-700", bg: "from-indigo-500 to-indigo-700" }
};
const LEVEL_BADGE = {
  BEGINNER: "🌱 Beginner",
  EXPLORER: "🔍 Explorer",
  HUSTLER: "🔥 Hustler",
  PRO: "⭐ Pro",
  LEGEND: "👑 Legend"
};
function PublicProfilePage() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const { toast: toast2 } = useToast();
  const [copied, setCopied] = reactExports.useState(false);
  const { data: referrer } = useGetReferrerByCode(params.code);
  const referralLink = `${window.location.origin}/refer?ref=${params.code}`;
  const joinLink = `${window.location.origin}/`;
  const personaInfo = PERSONA_LABELS[referrer?.persona ?? "EARNER"] ?? PERSONA_LABELS.EARNER;
  const whatsappMsg = encodeURIComponent(
    `Hey! I found a great PG in Bangalore through Gharpayy 🏠

Looking for a PG? Use my referral link and I'll help you find the perfect spot:
${referralLink}

-${referrer?.name ?? ""}`
  );
  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast2({ title: "Referral link copied!", description: "Share it with anyone looking for a PG" });
    setTimeout(() => setCopied(false), 2e3);
  };
  const handleNativeShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: `Find a PG through ${referrer?.name ?? "me"} on Gharpayy`,
        text: `Looking for a PG in Bangalore? ${referrer?.name ?? "I"} can help you find verified PGs!

Earn ₹500 on booking via my referral link:`,
        url: referralLink
      });
    } else {
      handleCopy();
    }
  };
  if (!referrer) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[100dvh] bg-[#FBFBFC] flex flex-col items-center justify-center p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-4", children: "🏠" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black font-display text-slate-800 mb-2", children: "Profile not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mb-6", children: "This referral code doesn't exist." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLocation("/"), className: "px-6 py-3 bg-orange-500 text-white font-bold rounded-full", children: "Go to Gharpayy →" })
    ] });
  }
  const conversionRate = referrer.totalReferrals > 0 ? Math.round(referrer.bookedReferrals / referrer.totalReferrals * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[100dvh] bg-[#FBFBFC]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-gradient-to-br ${personaInfo.bg} text-white px-6 pt-12 pb-20 relative overflow-hidden`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute w-32 h-32 rounded-full bg-white",
          style: { top: `${i * 37 % 100}%`, left: `${i * 53 % 100}%`, transform: "translate(-50%,-50%)" }
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center max-w-sm mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-5xl mx-auto mb-4 shadow-xl border-4 border-white/30", children: personaInfo.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black font-display", children: referrer.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/80 mt-1 font-medium", children: [
          personaInfo.label,
          " on Gharpayy"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mt-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-bold", children: LEVEL_BADGE[referrer.level] ?? referrer.level }),
          referrer.teamName && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3 h-3" }),
            " ",
            referrer.teamName
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 -mt-10 max-w-sm mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "bg-white rounded-3xl shadow-xl border border-slate-100 p-5 grid grid-cols-3 gap-3 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-slate-900", children: referrer.totalReferrals }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5", children: "Referrals" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-x border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-green-600", children: referrer.bookedReferrals }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5", children: "Bookings" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-orange-500", children: referrer.xp }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-0.5", children: "XP" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-6 pb-12 max-w-sm mx-auto space-y-5", children: [
      conversionRate > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.1 },
          className: "flex items-center gap-3 bg-green-50 border border-green-100 rounded-2xl p-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "✅" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-green-800 text-sm", children: [
                conversionRate,
                "% booking success rate"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-green-600 text-xs", children: [
                referrer.verifiedReferrals,
                " leads verified · ",
                referrer.bookedReferrals,
                " booked"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.15 },
          className: "bg-orange-50 border border-orange-100 rounded-2xl p-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🏠" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-black text-orange-900 text-lg leading-tight", children: "Looking for a PG in Bangalore?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-orange-700 text-sm mt-1", children: [
                  referrer.name.split(" ")[0],
                  " will help you find verified, affordable PGs in top areas · Koramangala, HSR, Indiranagar & more."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-orange-600 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-orange-400 text-orange-400" }),
              "Verified listings only",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5 text-orange-400" }),
              "Fast matching"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: referralLink,
          className: "flex items-center justify-center gap-3 w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg rounded-2xl shadow-lg shadow-orange-200 transition-all active:scale-95",
          children: [
            "Book via ",
            referrer.name.split(" ")[0],
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.25 },
          className: "grid grid-cols-3 gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `https://wa.me/?text=${whatsappMsg}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex flex-col items-center gap-1.5 py-3 bg-green-500 text-white rounded-2xl font-bold text-xs hover:bg-green-600 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }),
                  "WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleNativeShare,
                className: "flex flex-col items-center gap-1.5 py-3 bg-blue-500 text-white rounded-2xl font-bold text-xs hover:bg-blue-600 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-5 h-5" }),
                  "Share"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleCopy,
                className: "flex flex-col items-center gap-1.5 py-3 bg-slate-700 text-white rounded-2xl font-bold text-xs hover:bg-slate-800 transition-colors",
                children: [
                  copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-5 h-5" }),
                  copied ? "Copied!" : "Copy Link"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4 text-slate-400 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-500 truncate flex-1", children: referralLink }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCopy, className: "text-orange-500 text-xs font-bold shrink-0", children: copied ? "✓" : "Copy" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-slate-200" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 font-medium", children: "also on Gharpayy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-slate-200" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className: "bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-3xl p-6 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl mb-2", children: "💰" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-black text-xl mb-1", children: "Earn ₹500 per booking" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-300 text-sm mb-4", children: [
              "Know someone looking for a PG? Refer them and earn big. Join ",
              referrer.name.split(" ")[0],
              " on Gharpayy."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: joinLink,
                className: "inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors text-sm",
                children: [
                  "Start Earning Too ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-slate-400", children: [
        "Powered by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-orange-500", children: "Gharpayy" }),
        " · PG Referral Platform, Bangalore"
      ] })
    ] })
  ] });
}
function StreakPage() {
  const { referrer } = useAppStore();
  const [, setLocation] = useLocation();
  const { toast: toast2 } = useToast();
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [spinning, setSpinning] = reactExports.useState(false);
  const [showFireworks, setShowFireworks] = reactExports.useState(false);
  const BASE = "/".replace(/\/$/, "");
  reactExports.useEffect(() => {
    if (!referrer) {
      setLocation("/");
      return;
    }
    fetch(`${BASE}/api/streaks/${referrer.id}`).then((r2) => r2.json()).then(setData).finally(() => setLoading(false));
  }, [referrer]);
  const checkedInToday = data?.streak.lastCheckinDate === (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const handleCheckin = async () => {
    if (!referrer || spinning || checkedInToday) return;
    setSpinning(true);
    try {
      const res = await fetch(`${BASE}/api/streaks/${referrer.id}/checkin`, { method: "POST" });
      const json2 = await res.json();
      if (res.ok) {
        setShowFireworks(true);
        setTimeout(() => setShowFireworks(false), 2500);
        toast2({ title: `🔥 Day ${json2.newStreak} streak!`, description: `+${json2.xpAwarded} XP earned${json2.bonusAwarded ? ` + ₹${json2.bonusAwarded} bonus` : ""}` });
        const updated = await fetch(`${BASE}/api/streaks/${referrer.id}`).then((r2) => r2.json());
        setData(updated);
      } else {
        toast2({ title: json2.message || "Already checked in today!" });
      }
    } finally {
      setSpinning(false);
    }
  };
  const MILESTONES = [
    { days: 3, reward: "+30 XP", icon: "🔥" },
    { days: 7, reward: "+₹100", icon: "💰" },
    { days: 14, reward: "+200 XP", icon: "⚡" },
    { days: 30, reward: "+₹500", icon: "👑" }
  ];
  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(Date.now() - i * 864e5).toISOString().slice(0, 10);
    const log = data?.recentLogs.find((l) => l.checkinDate === d);
    return { date: d, checked: !!log, xp: log?.xpAwarded || 0, day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(d).getDay()] };
  }).reverse();
  if (!referrer) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Daily Streak", subtitle: "Check in every day to keep your streak alive 🔥" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-2xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Check in every day to earn XP and bonus rewards" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "relative bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white text-center overflow-hidden shadow-2xl",
          initial: { scale: 0.95, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "absolute w-8 h-8", style: { left: `${i * 23 % 90}%`, top: `${i * 17 % 80}%` } }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showFireworks && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 0, opacity: 1 },
                animate: { scale: 3, opacity: 0 },
                exit: {},
                transition: { duration: 1.5 },
                className: "absolute inset-0 flex items-center justify-center",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl", children: "🎉" })
              }
            ) }),
            loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 animate-pulse" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { scale: 0.5, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  className: "text-8xl font-black mb-2 leading-none",
                  children: data?.streak.currentStreak || 0
                },
                data?.streak.currentStreak
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-xl font-bold mb-1", children: "Day Streak" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/60 text-sm", children: [
                "Longest: ",
                data?.streak.longestStreak || 0,
                " days • Total check-ins: ",
                data?.streak.totalCheckins || 0
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          onClick: handleCheckin,
          disabled: checkedInToday || spinning || loading,
          whileTap: { scale: 0.97 },
          className: `w-full py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all shadow-lg
            ${checkedInToday ? "bg-green-100 text-green-700 border-2 border-green-200 cursor-default" : "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-200"}`,
          children: checkedInToday ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-7 h-7" }),
            " Checked in today!"
          ] }) : spinning ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: { rotate: 360 }, transition: { repeat: Infinity, duration: 0.8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-7 h-7" }) }),
            " Checking in..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-7 h-7" }),
            " Check In Now (+",
            Math.min((data?.streak.currentStreak || 0) * 2 + 5, 55),
            " XP)"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-primary" }),
          " This Week"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1.5", children: last7.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase", children: d.day }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { delay: i * 0.05 },
              className: `w-full aspect-square rounded-xl flex items-center justify-center text-lg font-bold
                    ${d.checked ? "bg-orange-500 text-white shadow-md shadow-orange-200" : "bg-muted text-muted-foreground"}`,
              children: d.checked ? "🔥" : "·"
            }
          ),
          d.checked && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-orange-500 font-bold", children: [
            "+",
            d.xp
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-4 h-4 text-primary" }),
          " Streak Milestones"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: MILESTONES.map((m) => {
          const achieved = (data?.streak.longestStreak || 0) >= m.days;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-2xl border-2 flex items-center gap-3 transition-all
                  ${achieved ? "border-orange-300 bg-orange-50" : "border-border bg-card"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: m.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-sm", children: [
                m.days,
                "-Day Streak"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-bold ${achieved ? "text-orange-600" : "text-muted-foreground"}`, children: m.reward })
            ] }),
            achieved ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-orange-500 ml-auto" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-muted-foreground ml-auto" })
          ] }, m.days);
        }) })
      ] })
    ] })
  ] });
}
const SEGMENTS$1 = [
  { label: "50 XP", color: "#f97316", emoji: "⚡" },
  { label: "₹25", color: "#3b82f6", emoji: "💰" },
  { label: "100 XP", color: "#22c55e", emoji: "🔥" },
  { label: "₹50", color: "#a855f7", emoji: "💎" },
  { label: "200 XP", color: "#f59e0b", emoji: "⭐" },
  { label: "₹100", color: "#ef4444", emoji: "👑" },
  { label: "500 XP", color: "#06b6d4", emoji: "🚀" },
  { label: "₹25", color: "#84cc16", emoji: "💸" }
];
function LuckyDrawPage() {
  const { referrer } = useAppStore();
  const [, setLocation] = useLocation();
  const { toast: toast2 } = useToast();
  const [canSpin, setCanSpin] = reactExports.useState(false);
  const [spinning, setSpinning] = reactExports.useState(false);
  const [rotation, setRotation] = reactExports.useState(0);
  const [winner, setWinner] = reactExports.useState(null);
  const [recentWins, setRecentWins] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const BASE = "/".replace(/\/$/, "");
  reactExports.useEffect(() => {
    if (!referrer) {
      setLocation("/");
      return;
    }
    fetch(`${BASE}/api/lucky-draw/${referrer.id}`).then((r2) => r2.json()).then((d) => {
      setCanSpin(d.canSpin);
      setRecentWins(d.recentWins || []);
    }).finally(() => setLoading(false));
  }, [referrer]);
  const handleSpin = async () => {
    if (!referrer || !canSpin || spinning) return;
    setSpinning(true);
    setWinner(null);
    try {
      const res = await fetch(`${BASE}/api/lucky-draw/${referrer.id}/spin`, { method: "POST" });
      const json2 = await res.json();
      if (res.ok) {
        const segmentAngle = 360 / SEGMENTS$1.length;
        const winningIndex = json2.prizeIndex ?? 0;
        const targetAngle = 360 * 8 + (SEGMENTS$1.length - winningIndex) * segmentAngle - segmentAngle / 2;
        setRotation((prev) => prev + targetAngle);
        setTimeout(() => {
          setWinner(json2);
          setCanSpin(false);
          setRecentWins((prev) => [json2.draw, ...prev.slice(0, 4)]);
          toast2({ title: `🎉 ${json2.message}`, description: "Your prize has been credited!" });
          setSpinning(false);
        }, 4e3);
      } else {
        toast2({ title: json2.message || "Already spun today!" });
        setSpinning(false);
      }
    } catch {
      setSpinning(false);
    }
  };
  if (!referrer) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Lucky Draw", subtitle: "Spin once daily · win XP or cash bonus! 🎰" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-lg mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 z-10 w-0 h-0", style: {
          borderLeft: "12px solid transparent",
          borderRight: "12px solid transparent",
          borderTop: "24px solid #f97316",
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-72 h-72", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              animate: { rotate: rotation },
              transition: { duration: 4, ease: [0.2, 0.8, 0.4, 1] },
              className: "w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl",
              style: { background: "conic-gradient(" + SEGMENTS$1.map((s, i) => `${s.color} ${i * (360 / SEGMENTS$1.length)}deg ${(i + 1) * (360 / SEGMENTS$1.length)}deg`).join(", ") + ")" },
              children: SEGMENTS$1.map((s, i) => {
                const angle = (i + 0.5) * (360 / SEGMENTS$1.length);
                const rad = (angle - 90) * Math.PI / 180;
                const r2 = 100;
                const x = 50 + r2 * Math.cos(rad) * 0.6;
                const y = 50 + r2 * Math.sin(rad) * 0.6;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "absolute text-white font-black text-xs text-center leading-tight",
                    style: { left: `${x}%`, top: `${y}%`, transform: `translate(-50%, -50%) rotate(${angle}deg)`, width: "60px" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: s.emoji }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: s.label })
                    ]
                  },
                  i
                );
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleSpin,
              disabled: !canSpin || spinning || loading,
              className: `w-20 h-20 rounded-full border-4 border-white font-black text-sm shadow-xl flex flex-col items-center justify-center transition-all
                  ${canSpin && !spinning ? "bg-orange-500 hover:bg-orange-600 text-white scale-100 hover:scale-105" : "bg-slate-300 text-slate-500 cursor-not-allowed"}`,
              children: spinning ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: { rotate: 360 }, transition: { repeat: Infinity, duration: 0.5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-6 h-6" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                "✨",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "SPIN"
              ] })
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Loading..." }) : canSpin ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-green-600 font-bold text-lg flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-5 h-5" }),
        " Spin available! Tap the wheel."
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-slate-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-700", children: "Come back tomorrow!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: "1 free spin per day" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: winner && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { scale: 0.5, opacity: 0, y: 20 },
          animate: { scale: 1, opacity: 1, y: 0 },
          exit: { scale: 0.5, opacity: 0 },
          className: "bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white text-center shadow-xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl mb-2", children: "🎉" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black", children: winner.prize }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 mt-1", children: "Prize credited to your account!" })
          ]
        }
      ) }),
      recentWins.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Recent Wins" }),
        recentWins.slice(0, 5).map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: w.prize }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: new Date(w.spinDate).toLocaleDateString() })
        ] }, i))
      ] })
    ] })
  ] });
}
function SquadBattlesPage() {
  const { referrer } = useAppStore();
  const [, setLocation] = useLocation();
  const { toast: toast2 } = useToast();
  const [battles, setBattles] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [creating, setCreating] = reactExports.useState(false);
  const [showCreate, setShowCreate] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({ challengerTeamId: 1, defenderTeamId: 2, metric: "referrals", prizeXp: 500, durationHours: 24 });
  const BASE = "/".replace(/\/$/, "");
  reactExports.useEffect(() => {
    if (!referrer) {
      setLocation("/");
      return;
    }
    fetch(`${BASE}/api/squad-battles`).then((r2) => r2.json()).then((d) => setBattles(Array.isArray(d) ? d : [])).finally(() => setLoading(false));
  }, [referrer]);
  const MOCK_BATTLES = [
    { id: 1, challengerTeamId: 1, challengerTeamName: "Koramangala Kings", defenderTeamId: 2, defenderTeamName: "HSR Hustlers", status: "ACTIVE", challengerScore: 12, defenderScore: 9, winnerTeamId: null, prizeXp: 500, prizeCash: 0, metric: "referrals", endsAt: new Date(Date.now() + 18 * 36e5).toISOString() },
    { id: 2, challengerTeamId: 2, challengerTeamName: "HSR Hustlers", defenderTeamId: 3, defenderTeamName: "Student Brigade", status: "ACTIVE", challengerScore: 5, defenderScore: 7, winnerTeamId: null, prizeXp: 300, prizeCash: 0, metric: "bookings", endsAt: new Date(Date.now() + 6 * 36e5).toISOString() },
    { id: 3, challengerTeamId: 3, challengerTeamName: "Student Brigade", defenderTeamId: 1, defenderTeamName: "Koramangala Kings", status: "COMPLETED", challengerScore: 4, defenderScore: 8, winnerTeamId: 1, prizeXp: 200, prizeCash: 0, metric: "referrals", endsAt: new Date(Date.now() - 2 * 36e5).toISOString() }
  ];
  const allBattles = battles.length > 0 ? battles : MOCK_BATTLES;
  const handleCreateBattle = async () => {
    setCreating(true);
    try {
      const res = await fetch(`${BASE}/api/squad-battles`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        const battle = await res.json();
        setBattles((prev) => [battle, ...prev]);
        setShowCreate(false);
        toast2({ title: "⚔️ Battle Started!", description: "Challenge has been sent to the opposing team!" });
      }
    } finally {
      setCreating(false);
    }
  };
  const timeLeft = (endsAt) => {
    const diff = new Date(endsAt).getTime() - Date.now();
    if (diff <= 0) return "Ended";
    const h = Math.floor(diff / 36e5);
    const m = Math.floor(diff % 36e5 / 6e4);
    return `${h}h ${m}m`;
  };
  if (!referrer) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Squad Battles", subtitle: "Challenge other teams · winner takes all XP & cash" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-3xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black font-display flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Swords, { className: "w-8 h-8 text-primary" }),
            " Squad Battles"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Teams compete head-to-head for XP glory" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setShowCreate(!showCreate),
            className: "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              " New Battle"
            ]
          }
        )
      ] }),
      showCreate && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          className: "bg-card border border-border rounded-2xl p-5 space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "⚔️ Challenge a Team" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block", children: "Your Team" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "w-full px-3 py-2 border border-border rounded-lg text-sm bg-background",
                    value: form.challengerTeamId,
                    onChange: (e) => setForm((f) => ({ ...f, challengerTeamId: Number(e.target.value) })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1, children: "Koramangala Kings" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 2, children: "HSR Hustlers" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 3, children: "Student Brigade" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block", children: "Opponent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "w-full px-3 py-2 border border-border rounded-lg text-sm bg-background",
                    value: form.defenderTeamId,
                    onChange: (e) => setForm((f) => ({ ...f, defenderTeamId: Number(e.target.value) })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 2, children: "HSR Hustlers" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1, children: "Koramangala Kings" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 3, children: "Student Brigade" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block", children: "Battle Metric" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "w-full px-3 py-2 border border-border rounded-lg text-sm bg-background",
                    value: form.metric,
                    onChange: (e) => setForm((f) => ({ ...f, metric: e.target.value })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "referrals", children: "Total Referrals" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bookings", children: "Successful Bookings" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "xp", children: "XP Earned" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block", children: "Duration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "w-full px-3 py-2 border border-border rounded-lg text-sm bg-background",
                    value: form.durationHours,
                    onChange: (e) => setForm((f) => ({ ...f, durationHours: Number(e.target.value) })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 12, children: "12 Hours" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 24, children: "24 Hours" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 48, children: "48 Hours" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 168, children: "1 Week" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleCreateBattle,
                disabled: creating,
                className: "w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-50",
                children: creating ? "Starting..." : "⚔️ Start Battle!"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-bold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-primary" }),
          " Live Battles"
        ] }),
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-pulse space-y-3", children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32 bg-muted rounded-2xl" }, i)) }) : allBattles.filter((b) => b.status === "ACTIVE").map((battle, i) => {
          const total = battle.challengerScore + battle.defenderScore || 1;
          const cPct = Math.round(battle.challengerScore / total * 100);
          const dPct = 100 - cPct;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: i * 0.1 },
              className: "bg-card border border-border rounded-2xl p-5 shadow-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-bold uppercase", children: "Live" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground capitalize", children: battle.metric })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                    " ",
                    timeLeft(battle.endsAt)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-sm text-foreground", children: battle.challengerTeamName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-black text-primary", children: battle.challengerScore })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-muted-foreground", children: "VS" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-sm text-foreground", children: battle.defenderTeamName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-black text-slate-600", children: battle.defenderScore })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-3 bg-slate-100 rounded-full overflow-hidden flex", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { width: 0 },
                      animate: { width: `${cPct}%` },
                      className: "h-full bg-primary rounded-l-full"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { width: 0 },
                      animate: { width: `${dPct}%` },
                      className: "h-full bg-slate-400 rounded-r-full"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-2 text-xs text-muted-foreground font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    cPct,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-600 font-bold flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-3 h-3" }),
                    " ",
                    battle.prizeXp,
                    " XP prize"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    dPct,
                    "%"
                  ] })
                ] })
              ]
            },
            battle.id
          );
        })
      ] }),
      allBattles.filter((b) => b.status === "COMPLETED").length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-foreground", children: "Recent Results" }),
        allBattles.filter((b) => b.status === "COMPLETED").map((battle) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-sm", children: [
              battle.challengerTeamName,
              " vs ",
              battle.defenderTeamName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
              battle.challengerScore,
              " – ",
              battle.defenderScore
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-orange-600", children: [
              "🏆 ",
              battle.winnerTeamId === battle.challengerTeamId ? battle.challengerTeamName : battle.defenderTeamName,
              " wins"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "+",
              battle.prizeXp,
              " XP"
            ] })
          ] })
        ] }, battle.id))
      ] })
    ] })
  ] });
}
function CountdownTimer({ expiresAt }) {
  const [timeLeft, setTimeLeft] = reactExports.useState("");
  reactExports.useEffect(() => {
    const update = () => {
      const diff = new Date(expiresAt).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft("EXPIRED");
        return;
      }
      const h = Math.floor(diff / 36e5);
      const m = Math.floor(diff % 36e5 / 6e4);
      const s = Math.floor(diff % 6e4 / 1e3);
      setTimeLeft(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`);
    };
    update();
    const t = setInterval(update, 1e3);
    return () => clearInterval(t);
  }, [expiresAt]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-black", children: timeLeft });
}
function FlashDealsPage() {
  const { referrer } = useAppStore();
  const [, setLocation] = useLocation();
  const [deals, setDeals] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const BASE = "/".replace(/\/$/, "");
  reactExports.useEffect(() => {
    if (!referrer) {
      setLocation("/");
      return;
    }
    fetch(`${BASE}/api/flash-deals`).then((r2) => r2.json()).then((d) => setDeals(Array.isArray(d) ? d : [])).finally(() => setLoading(false));
  }, [referrer]);
  if (!referrer) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Flash Deals", subtitle: "Limited-time bonus commissions on select homes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-3xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl p-6 text-white overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "absolute w-6 h-6", style: { left: `${i * 15}%`, top: `${i * 23 % 80}%` } }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse", children: "⚡ Flash Deals" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black font-display", children: "Limited-Time PG Deals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 mt-1", children: "Exclusive discounts + 2-4x referral bonus. Today only!" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-red-50 border border-red-200 rounded-xl px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5 text-red-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-red-700", children: [
            deals.length,
            " active deals right now"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 text-sm font-medium", children: "Hurry up!" })
      ] }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 bg-muted rounded-2xl animate-pulse" }, i)) }) : deals.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-3", children: "😴" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-600", children: "No flash deals right now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 mt-1", children: "Check back soon · new deals drop daily!" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: deals.map((deal, i) => {
        const spotsLeft = deal.spotsTotal - deal.spotsTaken;
        const fillPct = deal.spotsTaken / deal.spotsTotal * 100;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.08 },
            className: "bg-card border-2 border-orange-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer",
            onClick: () => setLocation(`/pg/${deal.propertyId}`),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
                  deal.discount,
                  "% OFF + ",
                  deal.bonusMultiplier,
                  "x referral bonus"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/20 border border-white/30`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CountdownTimer, { expiresAt: deal.expiresAt })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-black text-foreground text-lg", children: deal.propertyName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
                      " ",
                      deal.area
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-muted-foreground" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-black text-green-600", children: [
                    "₹",
                    deal.dealRent.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg text-muted-foreground line-through", children: [
                    "₹",
                    deal.originalRent.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "/month" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-orange-50 border border-orange-100 rounded-xl p-3 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-orange-700", children: [
                  "🎁 Your referral bonus: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg", children: [
                    "₹",
                    deal.bonusAmount
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal text-orange-600", children: [
                    " (normally ₹",
                    Math.round(deal.bonusAmount / deal.bonusMultiplier),
                    ")"
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-medium mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: spotsLeft <= 2 ? "text-red-600 font-bold" : "text-muted-foreground", children: spotsLeft <= 2 ? `⚠️ Only ${spotsLeft} spot${spotsLeft !== 1 ? "s" : ""} left!` : `${spotsLeft} spots remaining` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                      deal.spotsTaken,
                      "/",
                      deal.spotsTotal
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-slate-100 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { width: 0 },
                      animate: { width: `${fillPct}%` },
                      transition: { delay: i * 0.1 + 0.3, type: "spring" },
                      className: `h-full rounded-full ${fillPct > 75 ? "bg-red-500" : fillPct > 50 ? "bg-orange-500" : "bg-green-500"}`
                    }
                  ) })
                ] })
              ] })
            ]
          },
          deal.id
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground pb-2", children: "Flash deals refresh daily at 8 AM" })
    ] })
  ] });
}
function ChainPage() {
  const { referrer } = useAppStore();
  const [, setLocation] = useLocation();
  const { toast: toast2 } = useToast();
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const BASE = "/".replace(/\/$/, "");
  reactExports.useEffect(() => {
    if (!referrer) {
      setLocation("/");
      return;
    }
    fetch(`${BASE}/api/chain/${referrer.id}`).then((r2) => r2.json()).then(setData).finally(() => setLoading(false));
  }, [referrer]);
  const statusColor = (s) => ({
    BOOKED: "bg-green-100 text-green-700 border-green-200",
    VERIFIED: "bg-blue-100 text-blue-700 border-blue-200",
    PENDING: "bg-orange-100 text-orange-700 border-orange-200"
  })[s] || "bg-slate-100 text-slate-600";
  const statusIcon = (s) => ({ BOOKED: "🏠", VERIFIED: "✅", PENDING: "⏳" })[s] || "·";
  const handleShare = async () => {
    if (!referrer) return;
    const link = `${window.location.origin}/profile/${referrer.referralCode}`;
    await navigator.clipboard.writeText(link);
    toast2({ title: "Referral link copied!", description: "Share it to grow your chain" });
  };
  if (!referrer) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Referral Chain", subtitle: "Your network tree · everyone you've brought in" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-3xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black font-display flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "w-8 h-8 text-primary" }),
            " Referral Chain"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Your referral network and conversion tree" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleShare,
            className: "flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl text-sm font-bold hover:bg-primary/20 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" }),
              " Share"
            ]
          }
        )
      ] }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 bg-muted rounded-2xl animate-pulse" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-black text-foreground", children: data?.stats.totalNodes || 0 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium mt-1", children: "Total Referred" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-black text-green-600", children: data?.stats.bookedNodes || 0 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium mt-1", children: "Booked" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-black text-primary", children: [
            data?.stats.conversionRate || 0,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium mt-1", children: "Conversion" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-orange-700 uppercase tracking-wide", children: "Total Chain Earnings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl font-black text-orange-600 mt-1", children: [
              "₹",
              data?.stats.totalChainEarnings?.toLocaleString() || 0
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: "💰" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-orange-600 mt-3", children: "₹50 per verification + ₹500 per booking" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary text-white rounded-2xl p-4 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-black", children: data?.root.name.charAt(0) || referrer.name.charAt(0) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-lg", children: data?.root.name || referrer.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/70 text-sm", children: [
              "You · ",
              data?.root.level || "BEGINNER",
              " · ",
              data?.root.xp || 0,
              " XP"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-black text-xl", children: [
              "₹",
              data?.root.totalEarned?.toLocaleString() || 0
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xs", children: "Total earned" })
          ] })
        ] }),
        (data?.directReferrals.length || 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 h-6 bg-primary/30" }) })
      ] }),
      (data?.directReferrals.length || 0) === 0 && !loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 bg-card border border-border rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-3", children: "🌱" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-600", children: "Your chain is empty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 mt-1", children: "Start referring people to grow your network" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleShare,
            className: "mt-4 px-6 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors text-sm",
            children: "Share Your Link"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-sm uppercase tracking-wide text-muted-foreground", children: "Your Direct Referrals" }),
        (data?.directReferrals || []).map((person, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -15 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: i * 0.07 },
            className: "bg-card border border-border rounded-xl p-4 flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-muted rounded-full flex items-center justify-center font-black text-slate-600", children: person.name.charAt(0) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground truncate", children: person.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  person.area,
                  " · ",
                  new Date(person.joinedAt).toLocaleDateString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                person.earned > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-green-600", children: [
                  "+₹",
                  person.earned
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs px-2 py-0.5 rounded-full border font-bold ${statusColor(person.status)}`, children: [
                  statusIcon(person.status),
                  " ",
                  person.status
                ] })
              ] })
            ]
          },
          person.id
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-muted-foreground mb-2", children: "Your Referral Link" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-muted rounded-xl px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-mono text-foreground flex-1 truncate", children: [
            window.location.origin,
            "/profile/",
            referrer.referralCode
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleShare, className: "flex items-center gap-1 text-primary text-xs font-bold hover:underline shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3" }),
            " Copy"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function ActivityPage() {
  const { referrer } = useAppStore();
  const [, setLocation] = useLocation();
  const [activities, setActivities] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [filter, setFilter] = reactExports.useState("ALL");
  const BASE = "/".replace(/\/$/, "");
  reactExports.useEffect(() => {
    if (!referrer) {
      setLocation("/");
      return;
    }
    fetch(`${BASE}/api/activity/${referrer.id}`).then((r2) => r2.json()).then((d) => setActivities(Array.isArray(d) ? d : [])).finally(() => setLoading(false));
  }, [referrer]);
  const FILTERS = ["ALL", "EARNINGS", "XP", "REFERRALS", "CHECK-INS"];
  const filtered = activities.filter((a2) => {
    if (filter === "ALL") return true;
    if (filter === "EARNINGS") return a2.amount && a2.amount > 0;
    if (filter === "XP") return a2.xp && a2.xp > 0;
    if (filter === "REFERRALS") return ["REFERRAL_SUBMITTED", "LEAD_VERIFIED", "BOOKING_CONFIRMED"].includes(a2.type);
    if (filter === "CHECK-INS") return a2.type === "CHECKIN";
    return true;
  });
  const groupByDate = (items) => {
    const groups = {};
    items.forEach((a2) => {
      const d = new Date(a2.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" });
      if (!groups[d]) groups[d] = [];
      groups[d].push(a2);
    });
    return groups;
  };
  const grouped = groupByDate(filtered);
  const totalEarned = activities.filter((a2) => a2.amount).reduce((s, a2) => s + (a2.amount || 0), 0);
  const totalXp = activities.filter((a2) => a2.xp).reduce((s, a2) => s + (a2.xp || 0), 0);
  if (!referrer) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Activity Feed", subtitle: "Your complete earnings and XP history" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-2xl mx-auto space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-100 rounded-2xl p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-green-600", children: [
            "₹",
            totalEarned
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-700 font-medium mt-1", children: "Total from activity" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-100 rounded-2xl p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-orange-600", children: [
            totalXp,
            " XP"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-orange-700 font-medium mt-1", children: "XP this period" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-1 scrollbar-hide", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setFilter(f),
          className: `shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all
                ${filter === f ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
          children: f
        },
        f
      )) }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 bg-muted rounded-xl animate-pulse" }, i)) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-3", children: "📊" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-600", children: "No activity yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 mt-1", children: "Start referring to see your activity here" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: Object.entries(grouped).map(([date, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2", children: date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: items.map((a2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -10 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: i * 0.03 },
            className: "flex items-center gap-3 bg-card border border-border rounded-xl p-3 hover:shadow-sm transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-muted rounded-xl flex items-center justify-center text-xl shrink-0", children: a2.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-foreground", children: a2.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: new Date(a2.createdAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                a2.amount && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-black text-green-600 text-sm", children: [
                  "+₹",
                  a2.amount
                ] }),
                a2.xp && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-orange-500 text-xs", children: [
                  "+",
                  a2.xp,
                  " XP"
                ] })
              ] })
            ]
          },
          a2.id
        )) })
      ] }, date)) })
    ] })
  ] });
}
function VisitsPage() {
  const { referrer } = useAppStore();
  const [, setLocation] = useLocation();
  const { toast: toast2 } = useToast();
  const [visits, setVisits] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    propertyId: 1,
    propertyName: "Sunrise PG Koramangala",
    visitorName: "",
    visitorPhone: "",
    scheduledAt: "",
    notes: ""
  });
  const BASE = "/".replace(/\/$/, "");
  reactExports.useEffect(() => {
    if (!referrer) {
      setLocation("/");
      return;
    }
    fetch(`${BASE}/api/visits/${referrer.id}`).then((r2) => r2.json()).then((d) => setVisits(Array.isArray(d) ? d : [])).finally(() => setLoading(false));
  }, [referrer]);
  const handleBook = async () => {
    if (!referrer || !form.visitorName || !form.scheduledAt) return;
    setSubmitting(true);
    try {
      const res = await fetch(`${BASE}/api/visits`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, referrerId: referrer.id })
      });
      if (res.ok) {
        const visit = await res.json();
        setVisits((prev) => [visit, ...prev]);
        setShowForm(false);
        toast2({ title: "✅ Visit Scheduled!", description: `Visit booked for ${new Date(form.scheduledAt).toLocaleDateString()}` });
        setForm({ propertyId: 1, propertyName: "Sunrise PG Koramangala", visitorName: "", visitorPhone: "", scheduledAt: "", notes: "" });
      }
    } finally {
      setSubmitting(false);
    }
  };
  const handleCancel = async (visitId) => {
    await fetch(`${BASE}/api/visits/${visitId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "CANCELLED" })
    });
    setVisits((prev) => prev.map((v) => v.id === visitId ? { ...v, status: "CANCELLED" } : v));
    toast2({ title: "Visit cancelled" });
  };
  const statusColor = (s) => ({
    SCHEDULED: "bg-blue-100 text-blue-700 border-blue-200",
    CONFIRMED: "bg-green-100 text-green-700 border-green-200",
    COMPLETED: "bg-slate-100 text-slate-600 border-slate-200",
    CANCELLED: "bg-red-100 text-red-700 border-red-200"
  })[s] || "bg-muted text-muted-foreground border-border";
  const PROPERTIES = [
    { id: 1, name: "Sunrise PG Koramangala", area: "Koramangala" },
    { id: 2, name: "Green Valley PG HSR", area: "HSR Layout" },
    { id: 3, name: "Tech Hub PG Marathahalli", area: "Marathahalli" },
    { id: 5, name: "Student Corner BTM", area: "BTM Layout" },
    { id: 7, name: "Cozy Nest Electronic City", area: "Electronic City" },
    { id: 8, name: "Sky View PG Bellandur", area: "Bellandur" }
  ];
  if (!referrer) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Site Visits", subtitle: "Schedule and track property visits for your leads" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-2xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black font-display flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-8 h-8 text-primary" }),
            " Site Visits"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Schedule PG site visits for your referrals" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setShowForm(!showForm),
            className: "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              " Book Visit"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -10, height: 0 },
          animate: { opacity: 1, y: 0, height: "auto" },
          exit: { opacity: 0, y: -10, height: 0 },
          className: "bg-card border border-border rounded-2xl p-5 space-y-4 overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "📅 Schedule a Visit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block", children: "Select PG" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "select",
                  {
                    className: "w-full px-3 py-2 border border-border rounded-xl text-sm bg-background focus:ring-2 focus:ring-primary/20 outline-none",
                    value: form.propertyId,
                    onChange: (e) => {
                      const p = PROPERTIES.find((p2) => p2.id === Number(e.target.value));
                      setForm((f) => ({ ...f, propertyId: Number(e.target.value), propertyName: p?.name || "" }));
                    },
                    children: PROPERTIES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.name }, p.id))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block", children: "Visitor Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    placeholder: "Name of visitor",
                    value: form.visitorName,
                    onChange: (e) => setForm((f) => ({ ...f, visitorName: e.target.value })),
                    className: "w-full px-3 py-2 border border-border rounded-xl text-sm bg-background focus:ring-2 focus:ring-primary/20 outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    placeholder: "10-digit number",
                    value: form.visitorPhone,
                    onChange: (e) => setForm((f) => ({ ...f, visitorPhone: e.target.value })),
                    className: "w-full px-3 py-2 border border-border rounded-xl text-sm bg-background focus:ring-2 focus:ring-primary/20 outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block", children: "Date & Time" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "datetime-local",
                    value: form.scheduledAt,
                    min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 16),
                    onChange: (e) => setForm((f) => ({ ...f, scheduledAt: e.target.value })),
                    className: "w-full px-3 py-2 border border-border rounded-xl text-sm bg-background focus:ring-2 focus:ring-primary/20 outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block", children: "Notes (optional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    placeholder: "Any special requests...",
                    value: form.notes,
                    onChange: (e) => setForm((f) => ({ ...f, notes: e.target.value })),
                    className: "w-full px-3 py-2 border border-border rounded-xl text-sm bg-background focus:ring-2 focus:ring-primary/20 outline-none"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleBook,
                disabled: !form.visitorName || !form.scheduledAt || submitting,
                className: "w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-50",
                children: submitting ? "Booking..." : "📅 Confirm Visit"
              }
            )
          ]
        }
      ) }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 bg-muted rounded-2xl animate-pulse" }, i)) }) : visits.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 bg-card border border-border rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl mb-4", children: "🏠" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: "No visits scheduled" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Book a PG site visit for your referrals" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: visits.map((visit, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.06 },
          className: "bg-card border border-border rounded-2xl p-4 space-y-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-foreground", children: visit.propertyName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    visit.visitorName,
                    " · ",
                    visit.visitorPhone
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-0.5 rounded-full border font-bold ${statusColor(visit.status)}`, children: visit.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-xl px-3 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 shrink-0" }),
              new Date(visit.scheduledAt).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })
            ] }),
            visit.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic px-1", children: visit.notes }),
            visit.status === "SCHEDULED" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleCancel(visit.id),
                className: "text-xs text-red-600 hover:text-red-700 font-bold flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3 h-3" }),
                  " Cancel visit"
                ]
              }
            )
          ]
        },
        visit.id
      )) })
    ] })
  ] });
}
function EarningsPage() {
  const { referrer } = useAppStore();
  const [, setLocation] = useLocation();
  if (!referrer) {
    setLocation("/");
    return null;
  }
  const { data: dashboard } = useGetReferrerDashboard(referrer.id);
  const { data: chart } = useGetReferrerEarningsChart(referrer.id);
  if (!dashboard) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full rounded-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 rounded-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 rounded-xl" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full rounded-2xl" })
    ] }) });
  }
  const maxEarned = chart ? Math.max(...chart.map((d) => d.earned), 1) : 1;
  const totalFromChart = chart?.reduce((s, d) => s + d.earned, 0) || 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "My Earnings", subtitle: "Paid, pending & lifetime income from referrals" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-3xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Full breakdown of all your income" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-3xl p-6 shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 font-bold uppercase text-xs tracking-wider mb-2", children: "Total Lifetime Earnings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-6xl font-black tracking-tight", children: [
          "₹",
          dashboard.referrer.totalEarned.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 mt-5 pt-4 border-t border-white/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs mb-1", children: "Paid Out" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-black text-green-200", children: [
              "₹",
              dashboard.referrer.paidEarnings.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs mb-1", children: "Pending" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl font-black text-yellow-200", children: [
              "₹",
              dashboard.referrer.pendingEarnings.toLocaleString()
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-blue-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase", children: "Verification Bonus" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-foreground", children: [
            "₹",
            (dashboard.referrer.verifiedReferrals * 50).toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
            dashboard.referrer.verifiedReferrals,
            " leads × ₹50"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4 text-green-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase", children: "Booking Bonus" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-foreground", children: [
            "₹",
            (dashboard.referrer.bookedReferrals * 500).toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
            dashboard.referrer.bookedReferrals,
            " bookings × ₹500"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-orange-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase", children: "Pending Payout" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-orange-600", children: [
            "₹",
            dashboard.referrer.pendingEarnings.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Processing within 48h" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase", children: "Conversion Rate" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-foreground", children: [
            dashboard.referrer.totalReferrals ? Math.round(dashboard.referrer.bookedReferrals / dashboard.referrer.totalReferrals * 100) : 0,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Leads → bookings" })
        ] })
      ] }),
      chart && chart.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-primary" }),
            " Monthly Earnings"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-primary", children: [
            "₹",
            totalFromChart.toLocaleString(),
            " total"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-2 h-36", children: chart.map((d, i) => {
          const pct = d.earned / maxEarned * 100;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-bold text-primary", children: [
              "₹",
              (d.earned / 1e3).toFixed(1),
              "k"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full relative flex items-end justify-center", style: { height: "96px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0 },
                animate: { height: `${pct}%` },
                transition: { delay: i * 0.07, type: "spring", stiffness: 60 },
                className: "w-full bg-primary rounded-t-lg min-h-1 relative overflow-hidden",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/10 w-1/2 h-full skew-x-12" })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-medium", children: d.month }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] text-muted-foreground", children: [
              d.referrals,
              "R"
            ] })
          ] }, d.month);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-100 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-blue-800 mb-3", children: "💳 Payout Schedule" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-700", children: "Verification bonus (₹50)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-blue-800", children: "Within 48h of verification" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-700", children: "Booking bonus (₹500)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-blue-800", children: "Within 48h of move-in" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-700", children: "Minimum payout" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-blue-800", children: "₹100" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-700", children: "Processing days" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-blue-800", children: "Monday – Friday" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setLocation("/payout-setup"),
            className: "mt-4 w-full py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm",
            children: "Manage Payout Method →"
          }
        )
      ] })
    ] })
  ] });
}
function BrokerDashboard() {
  const { referrer, persona } = useAppStore();
  const [, setLocation] = useLocation();
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const BASE = "/".replace(/\/$/, "");
  reactExports.useEffect(() => {
    if (!referrer) {
      setLocation("/");
      return;
    }
    if (persona !== "BROKER") {
      setLocation("/home");
      return;
    }
    fetch(`${BASE}/api/broker/${referrer.id}/dashboard`).then((r2) => r2.json()).then(setData).finally(() => setLoading(false));
  }, [referrer, persona]);
  if (!referrer || persona !== "BROKER") return null;
  const MOCK = {
    referrer: { name: referrer.name },
    totalLeads: referrer.totalReferrals || 24,
    verified: referrer.verifiedReferrals || 18,
    booked: referrer.bookedReferrals || 7,
    conversionRate: 29,
    projectedMonthly: referrer.totalEarned || 4400,
    totalEarned: referrer.totalEarned || 5200,
    pendingEarnings: referrer.pendingEarnings || 1200,
    pipeline: [
      { stage: "Prospects", count: 6, color: "#94a3b8" },
      { stage: "Contacted", count: 11, color: "#f97316" },
      { stage: "Verified", count: 18, color: "#3b82f6" },
      { stage: "Booked", count: 7, color: "#22c55e" }
    ],
    areas: [
      { area: "Koramangala", leads: 9, bookings: 3 },
      { area: "HSR Layout", leads: 6, bookings: 2 },
      { area: "Indiranagar", leads: 5, bookings: 1 },
      { area: "Marathahalli", leads: 4, bookings: 1 }
    ],
    commissionRate: 8
  };
  const d = data || MOCK;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-4xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black font-display", children: "Broker Command" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
          "Professional pipeline · ",
          d.commissionRate,
          "% commission rate"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation("/refer"),
          className: "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 text-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            " New Lead"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
      { label: "Total Leads", value: d.totalLeads, color: "text-foreground", sub: "All time" },
      { label: "Verified", value: d.verified, color: "text-blue-600", sub: `${d.totalLeads ? Math.round(d.verified / d.totalLeads * 100) : 0}% rate` },
      { label: "Booked", value: d.booked, color: "text-green-600", sub: `${d.conversionRate}% close rate` },
      { label: "Commission", value: `₹${d.totalEarned.toLocaleString()}`, color: "text-primary", sub: "Total earned" }
    ].map((k, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.07 },
        className: "bg-card border border-border rounded-2xl p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wide", children: k.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-black mt-1 ${k.color}`, children: k.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: k.sub })
        ]
      },
      k.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-4 text-white/70 uppercase text-xs tracking-wider", children: "Earnings Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs mb-1", children: "Total Earned" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-black text-green-400", children: [
            "₹",
            d.totalEarned.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs mb-1", children: "Pending" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-black text-orange-400", children: [
            "₹",
            d.pendingEarnings.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs mb-1", children: "Proj. Monthly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-black text-blue-400", children: [
            "₹",
            d.projectedMonthly.toLocaleString()
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4 text-primary" }),
        " Sales Pipeline"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: d.pipeline.map((stage, i) => {
        const maxCount = Math.max(...d.pipeline.map((s) => s.count));
        const pct = maxCount ? stage.count / maxCount * 100 : 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: stage.stage }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: stage.color }, className: "font-black", children: stage.count })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { width: 0 },
              animate: { width: `${pct}%` },
              transition: { delay: i * 0.1, type: "spring" },
              className: "h-full rounded-full",
              style: { backgroundColor: stage.color }
            }
          ) })
        ] }, stage.stage);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-primary" }),
        " Performance by Area"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: d.areas.map((area) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-muted/50 rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-foreground", children: area.area }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            area.leads,
            " leads · ",
            area.bookings,
            " bookings"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-black text-sm text-primary", children: [
            "₹",
            (area.bookings * 500).toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            area.leads ? Math.round(area.bookings / area.leads * 100) : 0,
            "% CVR"
          ] })
        ] })
      ] }, area.area)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
      { label: "Browse PGs", sub: "Find new inventory", icon: "🏠", href: "/pg" },
      { label: "Leaderboard", sub: "Your broker rank", icon: "🏆", href: "/leaderboard" },
      { label: "Flash Deals", sub: "High bonus PGs", icon: "⚡", href: "/flash" },
      { label: "Calculator", sub: "Project earnings", icon: "🧮", href: "/calculator" }
    ].map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setLocation(a2.href),
        className: "flex items-center gap-3 p-4 bg-card border border-border rounded-2xl hover:border-primary/30 hover:shadow-sm transition-all text-left",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: a2.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-foreground", children: a2.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: a2.sub })
          ] })
        ]
      },
      a2.label
    )) })
  ] }) });
}
function InfluencerDashboard() {
  const { referrer, persona } = useAppStore();
  const [, setLocation] = useLocation();
  const { toast: toast2 } = useToast();
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const BASE = "/".replace(/\/$/, "");
  reactExports.useEffect(() => {
    if (!referrer) {
      setLocation("/");
      return;
    }
    if (persona !== "INFLUENCER") {
      setLocation("/home");
      return;
    }
    fetch(`${BASE}/api/influencer/${referrer.id}/stats`).then((r2) => r2.json()).then(setData).finally(() => setLoading(false));
  }, [referrer, persona]);
  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    toast2({ title: "Copied!", description: "Share this link with your audience" });
  };
  if (!referrer || persona !== "INFLUENCER") return null;
  const MOCK = {
    followerCount: 5200,
    totalClicks: referrer.totalReferrals * 18,
    conversionRate: referrer.totalReferrals ? Math.round(referrer.bookedReferrals / referrer.totalReferrals * 100) : 0,
    clickThroughRate: 12,
    totalEarned: referrer.totalEarned,
    pendingEarnings: referrer.pendingEarnings,
    referralLink: `${window.location.origin}/profile/${referrer.referralCode}`,
    socialHandle: `@${referrer.name.toLowerCase().replace(/\s/g, "_")}`,
    contentPerformance: [
      { platform: "Instagram", clicks: Math.floor(referrer.totalReferrals * 8), conversions: Math.floor(referrer.bookedReferrals * 0.4), followers: 2800 },
      { platform: "WhatsApp", clicks: Math.floor(referrer.totalReferrals * 6), conversions: Math.floor(referrer.bookedReferrals * 0.45), followers: 1600 },
      { platform: "Telegram", clicks: Math.floor(referrer.totalReferrals * 4), conversions: Math.floor(referrer.bookedReferrals * 0.15), followers: 800 }
    ],
    weeklyData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => ({
      day,
      clicks: Math.floor(Math.random() * 60 + 20),
      conversions: Math.floor(Math.random() * 4 + 1)
    }))
  };
  const d = data || MOCK;
  const CAPTIONS = [
    `🏠 Looking for PG in Bangalore? I found some amazing options! Use my link and save on your deposit. Verified, affordable, perfect for students & IT folks.

${d.referralLink}

#BangalorePG #FlatHunting #Gharpayy`,
    `🔥 My friends are earning ₹500 per move-in with Gharpayy! Join me · refer your contacts to PGs and get paid instantly.

${d.referralLink}

#SideHustle #EarnOnline #Bangalore`,
    `✅ Just got ₹500 credited! Thanks to @Gharpayy's referral program. Super easy · just share your link and earn when anyone books a PG.

${d.referralLink}`
  ];
  const [captionIdx, setCaptionIdx] = reactExports.useState(0);
  const platformIcon = (p) => ({ Instagram: "📸", WhatsApp: "💬", Telegram: "✈️" })[p] || "📱";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-4xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black font-display", children: "Creator Hub" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
        d.socialHandle,
        " · ",
        d.followerCount?.toLocaleString(),
        " followers"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
      { label: "Total Clicks", value: d.totalClicks?.toLocaleString(), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MousePointer, { className: "w-4 h-4" }), color: "text-blue-600" },
      { label: "Conversions", value: referrer.bookedReferrals || 0, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }), color: "text-green-600" },
      { label: "CTR", value: `${d.clickThroughRate}%`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }), color: "text-orange-600" },
      { label: "Earned", value: `₹${d.totalEarned?.toLocaleString()}`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" }), color: "text-primary" }
    ].map((k, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.07 },
        className: "bg-card border border-border rounded-2xl p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1 ${k.color} mb-2`, children: [
            k.icon,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase", children: k.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-black ${k.color}`, children: k.value })
        ]
      },
      k.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-5 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xs font-bold uppercase tracking-wide mb-2", children: "Your Unique Referral Link" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex-1 font-mono text-sm truncate", children: d.referralLink }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleCopy(d.referralLink), className: "shrink-0 p-1 hover:bg-white/10 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xs", children: "Earn ₹50 on verification + ₹500 on every booking via your link" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-4", children: "Platform Performance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: d.contentPerformance?.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-muted rounded-xl flex items-center justify-center text-xl", children: platformIcon(p.platform) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: p.platform }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              p.followers?.toLocaleString(),
              " followers"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { width: 0 },
              animate: { width: `${Math.min(p.clicks / Math.max(...d.contentPerformance.map((x) => x.clicks)) * 100, 100)}%` },
              className: "h-full bg-primary rounded-full"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              p.clicks,
              " clicks"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-600 font-bold", children: [
              p.conversions,
              " bookings"
            ] })
          ] })
        ] })
      ] }, p.platform)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-4", children: "Weekly Clicks" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1.5 h-24", children: d.weeklyData?.map((w, i) => {
        const max = Math.max(...d.weeklyData.map((x) => x.clicks));
        const pct = max ? w.clicks / max * 100 : 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { height: 0 },
              animate: { height: `${pct}%` },
              transition: { delay: i * 0.05, type: "spring" },
              className: "w-full bg-primary rounded-t-md min-h-1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground font-medium", children: w.day })
        ] }, w.day);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Ready-to-Post Captions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: CAPTIONS.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setCaptionIdx(i),
            className: `w-2 h-2 rounded-full transition-all ${captionIdx === i ? "bg-primary" : "bg-muted-foreground/30"}`
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted rounded-xl p-4 text-sm text-foreground whitespace-pre-wrap font-mono leading-relaxed", children: CAPTIONS[captionIdx] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => handleCopy(CAPTIONS[captionIdx]),
          className: "mt-3 w-full py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
            " Copy Caption"
          ]
        }
      )
    ] })
  ] }) });
}
function CorporateDashboard() {
  const { referrer, persona } = useAppStore();
  const [, setLocation] = useLocation();
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const BASE = "/".replace(/\/$/, "");
  reactExports.useEffect(() => {
    if (!referrer) {
      setLocation("/");
      return;
    }
    if (persona !== "CORPORATE_HR") {
      setLocation("/home");
      return;
    }
    fetch(`${BASE}/api/corporate/${referrer.id}/dashboard`).then((r2) => r2.json()).then(setData).finally(() => setLoading(false));
  }, [referrer, persona]);
  if (!referrer || persona !== "CORPORATE_HR") return null;
  const MOCK = {
    company: "TechCorp India Pvt Ltd",
    totalEmployees: referrer.totalReferrals || 18,
    housed: referrer.bookedReferrals || 11,
    verified: referrer.verifiedReferrals || 15,
    pending: 4,
    housingRate: 61,
    totalEarned: referrer.totalEarned,
    pendingEarnings: referrer.pendingEarnings,
    savingsVsIndividual: (referrer.bookedReferrals || 11) * 1500,
    departments: [
      { dept: "Engineering", employees: 7, housed: 5 },
      { dept: "Sales", employees: 4, housed: 3 },
      { dept: "Design", employees: 4, housed: 2 },
      { dept: "Operations", employees: 3, housed: 1 }
    ],
    preferredAreas: [
      { area: "Koramangala", count: 4, avgRent: 12e3, pgsAvailable: 45 },
      { area: "HSR Layout", count: 3, avgRent: 11e3, pgsAvailable: 38 },
      { area: "Marathahalli", count: 2, avgRent: 9500, pgsAvailable: 75 },
      { area: "Whitefield", count: 2, avgRent: 1e4, pgsAvailable: 42 }
    ],
    recentHires: [
      { id: 1, name: "Priya Sharma", department: "Engineering", status: "HOUSED", area: "Koramangala", joiningDate: new Date(Date.now() - 7 * 864e5).toISOString() },
      { id: 2, name: "Ravi Kumar", department: "Sales", status: "SEARCHING", area: "HSR Layout", joiningDate: new Date(Date.now() - 3 * 864e5).toISOString() },
      { id: 3, name: "Neha Verma", department: "Design", status: "HOUSED", area: "Indiranagar", joiningDate: new Date(Date.now() - 14 * 864e5).toISOString() },
      { id: 4, name: "Amit Singh", department: "Engineering", status: "HOUSED", area: "Marathahalli", joiningDate: new Date(Date.now() - 21 * 864e5).toISOString() }
    ]
  };
  const d = data || MOCK;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 max-w-4xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black font-display", children: "HR Housing Hub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4" }),
          " ",
          d.company
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation("/refer"),
          className: "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 text-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            " Add Employee"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs uppercase tracking-wide", children: "Total Employees" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-black mt-1", children: d.totalEmployees })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs uppercase tracking-wide", children: "Housed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-black mt-1 text-green-300", children: d.housed })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs uppercase tracking-wide", children: "Searching" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-black mt-1 text-yellow-300", children: d.pending })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs uppercase tracking-wide", children: "Housing Rate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl font-black mt-1 text-blue-200", children: [
          d.housingRate,
          "%"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Housing Progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-primary", children: [
          d.housed,
          "/",
          d.totalEmployees,
          " employees housed"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { width: 0 },
          animate: { width: `${d.housingRate}%` },
          transition: { type: "spring", stiffness: 50 },
          className: "h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
        d.pending,
        " employees still searching for housing"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-50 border border-green-200 rounded-2xl p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-700 text-sm font-bold uppercase tracking-wide", children: "Company Savings vs. Individual Booking" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl font-black text-green-600 mt-1", children: [
          "₹",
          d.savingsVsIndividual?.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-600/70 text-xs mt-1", children: "Bulk referral discounts + faster placement" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-12 h-12 text-green-400" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-4", children: "By Department" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: d.departments.map((dept) => {
          const pct = dept.employees ? dept.housed / dept.employees * 100 : 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: dept.dept }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                dept.housed,
                "/",
                dept.employees
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: 0 },
                animate: { width: `${pct}%` },
                className: `h-full rounded-full ${pct >= 75 ? "bg-green-500" : pct >= 50 ? "bg-blue-500" : "bg-orange-500"}`
              }
            ) })
          ] }, dept.dept);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-primary" }),
          " Top Areas"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: d.preferredAreas.map((area) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-2 bg-muted/50 rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-foreground", children: area.area }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              area.pgsAvailable,
              " PGs available"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-black text-sm text-primary", children: [
              area.count,
              " employees"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "₹",
              area.avgRent.toLocaleString(),
              "/mo avg"
            ] })
          ] })
        ] }, area.area)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Recent Hires" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLocation("/refer"), className: "text-xs text-primary font-bold hover:underline", children: "+ Refer new hire" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: d.recentHires.map((hire) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-black text-sm", children: hire.name.charAt(0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-foreground truncate", children: hire.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            hire.department,
            " · ",
            hire.area
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: hire.status === "HOUSED" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-bold flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
          " Housed"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full font-bold flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
          " Searching"
        ] }) })
      ] }, hire.id)) })
    ] })
  ] }) });
}
function AdminLogin() {
  const [, setLocation] = useLocation();
  const { isAdminAuthenticated, setAdminAuthenticated } = useAdminStore();
  const [pin, setPin] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (isAdminAuthenticated) {
      setLocation("/admin/dashboard");
    }
  }, [isAdminAuthenticated, setLocation]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === "0000") {
      setAdminAuthenticated(true);
      toast$1.success("Access granted");
      setLocation("/admin/dashboard");
    } else {
      toast$1.error("Invalid PIN");
      setPin("");
    }
  };
  if (isAdminAuthenticated) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-slate-900 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      className: "w-full max-w-sm bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-6 mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-8 h-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold font-display text-white text-center mb-2", children: "Admin Access" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-center text-sm mb-8", children: "Enter the secure PIN to access the management dashboard." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "password",
              maxLength: 4,
              placeholder: "••••",
              value: pin,
              onChange: (e) => setPin(e.target.value),
              className: "text-center text-3xl tracking-[1em] font-mono h-16 bg-slate-900 border-slate-700 text-white placeholder:text-slate-600 focus-visible:ring-primary focus-visible:border-primary",
              autoFocus: true
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full h-12 text-lg font-bold", disabled: pin.length !== 4, children: "Unlock" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLocation("/"), className: "text-sm text-slate-500 hover:text-slate-300", children: "Return to App" }) })
      ]
    }
  ) });
}
const svgHero = (label, from, to) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="900" height="520" fill="url(#g)"/><circle cx="735" cy="90" r="150" fill="rgba(255,255,255,.18)"/><circle cx="130" cy="410" r="190" fill="rgba(0,0,0,.16)"/><path d="M70 365c115-80 205-108 340-92 148 17 257-3 420-108v220H70z" fill="rgba(255,255,255,.18)"/><text x="58" y="96" font-family="Arial, sans-serif" font-size="54" font-weight="800" fill="white">${label}</text><text x="62" y="145" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="rgba(255,255,255,.78)">Gharpayy verified zone</text></svg>`)}`;
const GHARPAYY_ZONES = [
  { slug: "hsr-bellandur", name: "HSR · Bellandur", display: "HSR", tagline: "ORR tech corridor without commute lies", offer: "Fastest verified PG tours", amenity: "Metro, parks, startups and food streets", landmarks: ["HSR BDA", "Bellandur", "Sarjapur Road"], areaSlugs: ["hsr-layout", "hsr", "bellandur", "sarjapur-road"], captainId: CAPTAINS[0].id, color: "#F97316", lat: 12.9116, lng: 77.6389, heroImage: svgHero("HSR", "#f97316", "#0f172a") },
  { slug: "koramangala-btm", name: "Koramangala · BTM", display: "Koramangala", tagline: "Campus, founders and nightlife inventory", offer: "Zero broker pressure", amenity: "Christ, Forum, startup lanes", landmarks: ["Forum", "Christ", "BTM"], areaSlugs: ["koramangala", "btm-layout", "jayanagar"], captainId: CAPTAINS[1].id, color: "#EC4899", lat: 12.9352, lng: 77.6245, heroImage: svgHero("Koramangala", "#ec4899", "#111827") },
  { slug: "indiranagar-domlur", name: "Indiranagar · Domlur", display: "Indiranagar", tagline: "Premium rooms with neighbourhood proof", offer: "Premium shortlist in 20 min", amenity: "Metro, cafés and CBD access", landmarks: ["100 ft Road", "Domlur", "Ulsoor"], areaSlugs: ["indiranagar", "domlur", "ulsoor", "mg-road"], captainId: CAPTAINS[2].id, color: "#8B5CF6", lat: 12.9784, lng: 77.6408, heroImage: svgHero("Indiranagar", "#8b5cf6", "#020617") },
  { slug: "whitefield-marathahalli", name: "Whitefield · Marathahalli", display: "Whitefield", tagline: "ITPL move-ins mapped to office gates", offer: "Office-route verified", amenity: "ITPL, metro, Brookefield", landmarks: ["ITPL", "Brookefield", "Marathahalli"], areaSlugs: ["whitefield", "marathahalli", "brookefield", "itpl"], captainId: CAPTAINS[3].id, color: "#06B6D4", lat: 12.9698, lng: 77.75, heroImage: svgHero("Whitefield", "#06b6d4", "#0f172a") },
  { slug: "north-hebbal", name: "Hebbal · Manyata", display: "North", tagline: "North Bengaluru stays for teams and families", offer: "Family-safe inventory", amenity: "Manyata, airport road, lake belt", landmarks: ["Hebbal", "Manyata", "Airport Road"], areaSlugs: ["hebbal", "manyata", "yelahanka", "north-bengaluru"], captainId: CAPTAINS[4].id, color: "#22C55E", lat: 13.0358, lng: 77.597, heroImage: svgHero("North BLR", "#22c55e", "#111827") }
];
const ZONE_BY_SLUG = Object.fromEntries(GHARPAYY_ZONES.map((zone) => [zone.slug, zone]));
function zoneForArea(area) {
  const slug = String(area ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return GHARPAYY_ZONES.find((zone) => zone.areaSlugs.some((areaSlug) => slug.includes(areaSlug) || areaSlug.includes(slug))) ?? null;
}
function zoneForLead(lead) {
  if (lead?.zoneId && ZONE_BY_SLUG[lead.zoneId]) return ZONE_BY_SLUG[lead.zoneId];
  return zoneForArea(lead?.area) ?? GHARPAYY_ZONES[0];
}
function AdminLayout({ children, title }) {
  const [location] = useLocation();
  const { setAdminAuthenticated } = useAdminStore();
  const { data: leadsRes } = useAdminGetLeads();
  const leads = leadsRes?.leads || [];
  const handleLogout = () => setAdminAuthenticated(false);
  const navItems = [
    { href: "/admin/dashboard", icon: LayoutDashboard, label: "Overview" },
    { href: "/admin/zones", icon: MapPin, label: "Zones" },
    { href: "/admin/map", icon: Map$1, label: "Live Map" },
    { href: "/admin/leads", icon: Users, label: "Leads" },
    { href: "/admin/properties", icon: Building2, label: "Properties" },
    { href: "/admin/experts", icon: Headset, label: "Experts" },
    { href: "/admin/payouts", icon: CreditCard, label: "Payouts" },
    { href: "/admin/earners", icon: Trophy, label: "Earners" },
    { href: "/admin/channels", icon: Radio, label: "Channels" },
    { href: "/admin/analytics", icon: ChartColumn, label: "Analytics" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-950 flex flex-col md:flex-row font-sans text-slate-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden md:flex flex-col w-60 bg-slate-900 text-white border-r border-slate-800 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 border-b border-slate-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-lg font-bold font-display text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center text-sm font-black", children: "G" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "leading-tight", children: [
          "Gharpayy",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] font-medium text-slate-400 uppercase tracking-wider", children: "Ops Cockpit" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 p-3 space-y-0.5 overflow-y-auto", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          href: item.href,
          className: cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
            location === item.href || location.startsWith(item.href + "/") ? "bg-orange-500/20 text-orange-400" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-4 h-4" }),
            item.label
          ]
        },
        item.href
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-t border-slate-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: "/home", className: "flex items-center gap-3 px-3 py-2 text-xs text-slate-500 hover:text-slate-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
          " Switch to earner app"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleLogout, className: "flex items-center gap-3 px-3 py-2 w-full text-left text-xs text-slate-500 hover:text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-3.5 h-3.5" }),
          " Exit Admin"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "md:hidden bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-base font-bold font-display flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center text-xs font-black", children: "G" }),
          "Ops Cockpit"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleLogout, className: "p-1.5 text-slate-400 hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "md:hidden bg-slate-900 border-b border-slate-800 flex overflow-x-auto sticky top-[57px] z-20", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          href: item.href,
          className: cn(
            "shrink-0 min-w-[68px] flex flex-col items-center justify-center gap-1 px-3 py-2 text-[10px] font-bold border-b-2 transition-colors",
            location === item.href || location.startsWith(item.href + "/") ? "border-orange-500 text-orange-400 bg-orange-500/10" : "border-transparent text-slate-400 hover:text-slate-200"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-4 h-4" }),
            item.label.split(" ")[0]
          ]
        },
        item.href
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ZoneChipsBar, { leads }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 overflow-y-auto p-4 md:p-6 bg-slate-950", children })
    ] })
  ] });
}
function ZoneChipsBar({ leads }) {
  const [, setLocation] = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900/60 border-b border-slate-800 px-4 md:px-6 py-2.5 flex items-center gap-2 overflow-x-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-slate-500 tracking-widest mr-1 shrink-0", children: "Zones" }),
    GHARPAYY_ZONES.map((z2) => {
      const matched = leads.filter((l) => zoneForLead(l)?.slug === z2.slug);
      const open = matched.filter((l) => !["BOOKED", "CLOSED", "LOST"].includes(l.status)).length;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLocation(`/admin/zone/${z2.slug}`),
          className: "shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/60 hover:bg-slate-700 border border-slate-700/60 text-xs font-bold text-slate-200 transition",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full", style: { background: z2.color } }),
            z2.display,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-slate-400", children: open })
          ]
        },
        z2.slug
      );
    })
  ] });
}
const PRICING_TIERS = [
  { id: "STARTER", name: "Starter", range: "₹6k–₹9k", min: 0, max: 9e3, emoji: "🌱", color: "#22C55E", tagline: "Budget beds with fast move-in." },
  { id: "CLASSICS", name: "Classics", range: "₹9k–₹13k", min: 9001, max: 13e3, emoji: "🏠", color: "#F97316", tagline: "The reliable PG sweet spot." },
  { id: "COMFORT", name: "Comfort", range: "₹13k–₹18k", min: 13001, max: 18e3, emoji: "🛋️", color: "#3B82F6", tagline: "Better rooms, food and commute." },
  { id: "PREMIUM", name: "Premium", range: "₹18k–₹28k", min: 18001, max: 28e3, emoji: "✨", color: "#A855F7", tagline: "Founder and tech-lead grade stays." },
  { id: "SIGNATURE", name: "Signature", range: "₹28k+", min: 28001, max: Number.MAX_SAFE_INTEGER, emoji: "👑", color: "#EAB308", tagline: "Private inventory and concierge close." }
];
const TIER_BY_ID = Object.fromEntries(PRICING_TIERS.map((tier) => [tier.id, tier]));
const EARN_RULES = [
  { id: "whatsapp-circle", emoji: "💬", title: "WhatsApp circle", blurb: "Share verified rooms in friend and alumni groups.", difficulty: "Easy", timePerWeek: "2h", bestZone: "HSR", payoutOnLead: 50, payoutOnTour: 150, payoutOnBooking: 500, howTo: ["Pick one zone", "Send the short verified-room copy", "Forward warm replies to the expert"], topEarner: { name: "Pooja S.", monthly: 18500 } },
  { id: "campus-captain", emoji: "🎓", title: "Campus captain", blurb: "Help students find safe PGs near college clusters.", difficulty: "Medium", timePerWeek: "4h", bestZone: "Koramangala", payoutOnLead: 60, payoutOnTour: 175, payoutOnBooking: 650, howTo: ["Post in student groups", "Collect budget and move-in date", "Book one verified tour slot"], topEarner: { name: "Ravi K.", monthly: 26400 } },
  { id: "office-slack", emoji: "🏢", title: "Office Slack drops", blurb: "Route relocating teammates to commute-safe stays.", difficulty: "Easy", timePerWeek: "1h", bestZone: "Whitefield", payoutOnLead: 75, payoutOnTour: 200, payoutOnBooking: 700, howTo: ["Share the office-route line", "Ask for office gate and budget", "Let the zone expert shortlist"], topEarner: { name: "Megha R.", monthly: 31200 } },
  { id: "society-scout", emoji: "🏘️", title: "Society scout", blurb: "Spot vacancies and owner leads inside societies.", difficulty: "Hard", timePerWeek: "5h", bestZone: "North", payoutOnLead: 100, payoutOnTour: 250, payoutOnBooking: 900, howTo: ["Capture property details", "Verify owner contact", "Share room photos and rent truth"], topEarner: { name: "Imran A.", monthly: 42e3 } },
  { id: "broker-ally", emoji: "🤝", title: "Broker ally", blurb: "Send overflow inventory and renters to Gharpayy.", difficulty: "Medium", timePerWeek: "3h", bestZone: "Indiranagar", payoutOnLead: 80, payoutOnTour: 225, payoutOnBooking: 800, howTo: ["Forward overflow requirements", "Tag area and urgency", "Track close and payout from admin"], topEarner: { name: "Neha V.", monthly: 36800 } },
  { id: "hr-relocation", emoji: "🧳", title: "HR relocation", blurb: "Help new joiners move near work without broker chaos.", difficulty: "Medium", timePerWeek: "2h", bestZone: "Whitefield", payoutOnLead: 90, payoutOnTour: 250, payoutOnBooking: 850, howTo: ["Share joining cohort list", "Collect budget bands", "Schedule batch tours"], topEarner: { name: "Anita H.", monthly: 50500 } },
  { id: "creator-reels", emoji: "🎥", title: "Creator reels", blurb: "Turn verified rooms and area truth into short videos.", difficulty: "Hard", timePerWeek: "6h", bestZone: "Koramangala", payoutOnLead: 70, payoutOnTour: 175, payoutOnBooking: 750, howTo: ["Shoot one room truth reel", "Add area and rent CTA", "Send DMs to referral form"], topEarner: { name: "Karthik M.", monthly: 64e3 } },
  { id: "parent-network", emoji: "👨‍👩‍👧", title: "Parent network", blurb: "Reassure parents with safe, documented PG options.", difficulty: "Easy", timePerWeek: "2h", bestZone: "North", payoutOnLead: 60, payoutOnTour: 175, payoutOnBooking: 650, howTo: ["Share safety-first copy", "Collect guardian concerns", "Connect to expert on WhatsApp"], topEarner: { name: "Deepa K.", monthly: 21800 } },
  { id: "nri-returnee", emoji: "✈️", title: "NRI returnee desk", blurb: "Premium handholding for people landing in Bengaluru.", difficulty: "Hard", timePerWeek: "4h", bestZone: "Indiranagar", payoutOnLead: 125, payoutOnTour: 300, payoutOnBooking: 1100, howTo: ["Share concierge copy", "Ask landing date and office area", "Route to premium expert"], topEarner: { name: "Sara P.", monthly: 47200 } },
  { id: "owner-intro", emoji: "🔑", title: "Owner intro", blurb: "Introduce owners with real supply; earn when rooms move.", difficulty: "Hard", timePerWeek: "3h", bestZone: "HSR", payoutOnLead: 150, payoutOnTour: 0, payoutOnBooking: 1200, howTo: ["Capture owner and building", "Add room count and rent", "Let BookOS turn inventory live"], topEarner: { name: "Rohan I.", monthly: 58600 } }
];
const EARN_BY_ID = Object.fromEntries(EARN_RULES.map((rule) => [rule.id, rule]));
function expectedMonthlyEarning(rule, leadsPerMonth = 8) {
  const tourRate = rule.difficulty === "Hard" ? 0.42 : rule.difficulty === "Medium" ? 0.5 : 0.58;
  const bookingRate = rule.difficulty === "Hard" ? 0.2 : rule.difficulty === "Medium" ? 0.24 : 0.28;
  return Math.round(leadsPerMonth * rule.payoutOnLead + leadsPerMonth * tourRate * rule.payoutOnTour + leadsPerMonth * bookingRate * rule.payoutOnBooking);
}
const closed = /* @__PURE__ */ new Set(["BOOKED", "CLOSED"]);
const dead = /* @__PURE__ */ new Set(["BOOKED", "CLOSED", "LOST"]);
const stages = ["NEW", "CONTACTED", "VERIFIED", "MATCHED", "VISIT", "BOOKED"];
function ts(value) {
  const n = new Date(String(value ?? Date.now())).getTime();
  return Number.isFinite(n) ? n : Date.now();
}
function getSlaBreaches(leads, hours = 24) {
  const cutoff = Date.now() - hours * 3600 * 1e3;
  return (leads || []).filter((lead) => !dead.has(lead.status) && ts(lead.updatedAt || lead.createdAt) < cutoff && !(lead.notes || []).length);
}
function getAvgFirstResponseHours(leads) {
  const values = (leads || []).map((lead) => {
    const firstNote = [...lead.notes || []].sort((a2, b) => ts(a2.createdAt) - ts(b.createdAt))[0];
    if (!firstNote) return null;
    return Math.max(0, (ts(firstNote.createdAt) - ts(lead.createdAt)) / 36e5);
  }).filter((value) => typeof value === "number" && Number.isFinite(value));
  if (!values.length) return null;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length * 10) / 10;
}
function getFunnelStages(leads) {
  const counts = stages.map((stage) => ({ stage, count: (leads || []).filter((lead) => lead.status === stage || stage === "BOOKED" && closed.has(lead.status)).length }));
  const drops = counts.map((row, index) => ({ ...row, dropPct: index === 0 ? 0 : Math.max(0, Math.round((counts[index - 1].count - row.count) / Math.max(1, counts[index - 1].count) * 100)) }));
  const worst = Math.max(0, ...drops.map((row) => row.dropPct));
  return drops.map((row) => ({ ...row, isLeak: row.dropPct === worst && worst > 0 }));
}
function getZoneStats(leads) {
  return GHARPAYY_ZONES.map((zone) => {
    const matched = (leads || []).filter((lead) => zoneForLead(lead)?.slug === zone.slug);
    const booked = matched.filter((lead) => closed.has(lead.status)).length;
    const open = matched.filter((lead) => !dead.has(lead.status)).length;
    const conversion = matched.length ? Math.round(booked / matched.length * 100) : 0;
    return {
      ...zone,
      total: matched.length,
      open,
      booked,
      conversion,
      occupancy: Math.min(98, 58 + booked * 5 + open * 2),
      avgFirstReplyH: getAvgFirstResponseHours(matched)
    };
  });
}
function getTierMix(leads) {
  const total = Math.max(1, (leads || []).length);
  return PRICING_TIERS.map((tier) => {
    const count = (leads || []).filter((lead) => (lead.tier || "CLASSICS") === tier.id).length;
    return { ...tier, count, pct: Math.round(count / total * 100) };
  });
}
function getChannelROI(leads) {
  return EARN_RULES.slice(0, 6).map((rule, index) => {
    const matching = (leads || []).filter((lead, leadIndex) => (lead.channel || lead.sourceContext || "").includes(rule.id) || leadIndex % 6 === index);
    const bookings = matching.filter((lead) => closed.has(lead.status)).length;
    return { id: rule.id, emoji: rule.emoji, name: rule.title, leads: matching.length, conversion: matching.length ? Math.round(bookings / matching.length * 100) : 0, revenue: bookings * 2e3 };
  }).sort((a2, b) => b.revenue - a2.revenue || b.leads - a2.leads);
}
function getRecentActivity(leads, limit = 12) {
  const rows = (leads || []).flatMap((lead) => [
    { leadId: lead.id, leadName: lead.leadName || `Lead #${lead.id}`, ts: ts(lead.createdAt), kind: "created", text: `created in ${lead.area || "Bengaluru"}` },
    ...lead.assignedAgentName ? [{ leadId: lead.id, leadName: lead.leadName || `Lead #${lead.id}`, ts: ts(lead.updatedAt), kind: "assign", text: `assigned to ${lead.assignedAgentName}` }] : [],
    ...(lead.notes || []).map((note) => ({ leadId: lead.id, leadName: lead.leadName || `Lead #${lead.id}`, ts: ts(note.createdAt), kind: "status", text: note.note || "note added" }))
  ]);
  return rows.sort((a2, b) => b.ts - a2.ts).slice(0, limit);
}
function getEarnerStats(leads) {
  const groups = /* @__PURE__ */ new Map();
  for (const lead of leads || []) {
    const code = lead.referrerCode || lead.referralCode || "GHAR-YOU1";
    const row = groups.get(code) || { code, name: lead.referrerName || "Gharpayy earner", leads: 0, bookings: 0, earned: 0 };
    row.leads += 1;
    if (closed.has(lead.status)) row.bookings += 1;
    row.earned = row.leads * 50 + row.bookings * 500;
    groups.set(code, row);
  }
  return Array.from(groups.values()).sort((a2, b) => b.earned - a2.earned || b.leads - a2.leads);
}
const DEFAULT_FILTERS = {
  persona: "ALL",
  area: "ALL",
  expert: "ALL",
  range: "all"
};
function FilterBar({
  leads,
  value,
  onChange
}) {
  const areas = reactExports.useMemo(() => {
    const set2 = /* @__PURE__ */ new Set();
    for (const l of leads || []) if (l.area) set2.add(l.area);
    return Array.from(set2).sort();
  }, [leads]);
  const set = (k) => (v) => onChange({ ...value, [k]: v });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-3 md:p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: value.persona,
          onChange: (e) => set("persona")(e.target.value),
          className: "h-10 rounded-lg border border-slate-200 bg-white text-sm px-2 font-medium text-slate-700",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ALL", children: "All personas" }),
            PERSONAS$2.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: p.id, children: [
              p.emoji,
              " ",
              p.title
            ] }, p.id))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: value.area,
          onChange: (e) => set("area")(e.target.value),
          className: "h-10 rounded-lg border border-slate-200 bg-white text-sm px-2 font-medium text-slate-700",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ALL", children: "All areas" }),
            areas.map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a2, children: a2 }, a2))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: value.expert,
          onChange: (e) => set("expert")(e.target.value),
          className: "h-10 rounded-lg border border-slate-200 bg-white text-sm px-2 font-medium text-slate-700 col-span-2 md:col-span-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ALL", children: "All experts" }),
            CAPTAINS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: c.id, children: [
              c.name,
              " · ",
              c.title
            ] }, c.id))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
      ["today", "7d", "30d", "all"].map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => set("range")(r2),
          className: `px-3 py-1.5 rounded-full text-xs font-bold transition ${value.range === r2 ? "bg-orange-500 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`,
          children: r2 === "today" ? "Today" : r2 === "all" ? "All time" : r2
        },
        r2
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => onChange(DEFAULT_FILTERS),
          className: "px-3 py-1.5 rounded-full text-xs font-semibold text-slate-500 hover:text-slate-900 ml-auto",
          children: "Reset"
        }
      )
    ] })
  ] });
}
function applyAdminFilters(leads, f) {
  let out = leads || [];
  if (f.persona !== "ALL") out = out.filter((l) => l.personaId === f.persona);
  if (f.area !== "ALL") out = out.filter((l) => l.area === f.area);
  if (f.expert !== "ALL") out = out.filter((l) => l.captainId === f.expert || (l.assignedAgentName || "").includes(f.expert));
  if (f.range !== "all") {
    const cutoff = Date.now() - (f.range === "today" ? 24 : f.range === "7d" ? 7 * 24 : 30 * 24) * 3600 * 1e3;
    out = out.filter((l) => new Date(l.createdAt).getTime() >= cutoff);
  }
  return out;
}
function KpiCard({
  title,
  value,
  hint,
  icon: Icon2,
  tone = "slate"
}) {
  const toneMap = {
    slate: { bg: "bg-slate-50", fg: "text-slate-600" },
    blue: { bg: "bg-blue-50", fg: "text-blue-600" },
    amber: { bg: "bg-amber-50", fg: "text-amber-600" },
    green: { bg: "bg-green-50", fg: "text-green-600" },
    orange: { bg: "bg-orange-50", fg: "text-orange-600" },
    red: { bg: "bg-red-50", fg: "text-red-600" },
    primary: { bg: "bg-primary/10", fg: "text-primary" }
  };
  const t = toneMap[tone] || toneMap.slate;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 md:p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3", children: [
    Icon2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2.5 rounded-xl ${t.bg} shrink-0`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: `w-5 h-5 ${t.fg}` }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold text-slate-500 uppercase tracking-wider truncate", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl md:text-[28px] font-black text-slate-900 leading-tight tracking-tight mt-0.5", children: value }),
      hint && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-500 mt-0.5 truncate", children: hint })
    ] })
  ] });
}
function FunnelCard({ leads, title = "Lead funnel" }) {
  const stages2 = getFunnelStages(leads);
  const max = Math.max(1, ...stages2.map((s) => s.count));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base md:text-lg font-bold text-slate-900", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-widest text-slate-500", children: "drop-off between stages" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: stages2.map((s, i) => {
      const pct = Math.max(4, Math.round(s.count / max * 100));
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-700", children: s.stage }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-slate-900", children: s.count })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full bg-slate-100 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `h-full rounded-full ${s.isLeak ? "bg-red-500" : "bg-orange-500"}`,
            style: { width: `${pct}%` }
          }
        ) }),
        i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1 text-[11px] mt-1 ${s.isLeak ? "text-red-600 font-bold" : "text-slate-500"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-3 h-3" }),
          s.dropPct,
          "% drop ",
          s.isLeak && "· biggest leak"
        ] })
      ] }, s.stage);
    }) })
  ] });
}
const SOURCE_LABEL = {
  "area:koramangala": "Area · Koramangala",
  "area:hsr-layout": "Area · HSR Layout",
  "area:bellandur": "Area · Bellandur",
  "area:sarjapur-road": "Area · Sarjapur Road",
  "area:indiranagar": "Area · Indiranagar",
  "area:whitefield": "Area · Whitefield",
  "persona:founder-koramangala": "Persona · Founder",
  "persona:techie-orr": "Persona · ORR Techie",
  "persona:student-christ": "Persona · Christ student",
  "persona:nri-returnee": "Persona · NRI returnee",
  "quiz": "Persona quiz",
  "super-app:home": "Super app home",
  "home": "Insights home",
  "header": "Header CTA"
};
function pretty(src) {
  if (SOURCE_LABEL[src]) return SOURCE_LABEL[src];
  if (src.startsWith("area:")) return `Area · ${src.slice(5)}`;
  if (src.startsWith("persona:")) return `Persona · ${src.slice(8)}`;
  return src;
}
function SourceAttribution({ leads }) {
  const [, setLocation] = useLocation();
  const groups = {};
  for (const l of leads || []) {
    const k = l.sourceContext || "(direct)";
    groups[k] = (groups[k] || 0) + 1;
  }
  const rows = Object.entries(groups).map(([k, count]) => ({ k, label: pretty(k), count })).sort((a2, b) => b.count - a2.count).slice(0, 8);
  const max = Math.max(1, ...rows.map((r2) => r2.count));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-blue-50 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-5 h-5 text-blue-600" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base md:text-lg font-bold text-slate-900", children: "Where leads came from" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Tap a row to filter the inbox." })
      ] })
    ] }),
    rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 italic", children: "No source data yet · submit a referral from any Insights page." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: rows.map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setLocation(`/admin/leads?source=${encodeURIComponent(r2.k)}`),
        className: "w-full text-left group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-slate-700 truncate group-hover:text-orange-600", children: r2.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-slate-900 ml-2", children: r2.count })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-slate-100 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-blue-500 group-hover:bg-orange-500 transition-colors", style: { width: `${r2.count / max * 100}%` } }) })
        ]
      },
      r2.k
    )) })
  ] });
}
function SlaAlerts({ leads }) {
  const [, setLocation] = useLocation();
  const breaches = getSlaBreaches(leads, 24);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-5 md:p-6 rounded-xl border border-red-200 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-red-50 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-red-600" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base md:text-lg font-bold text-slate-900", children: [
          "SLA alerts ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600", children: breaches.length > 0 ? `· ${breaches.length}` : "" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Open leads with no expert follow-up in 24h." })
      ] })
    ] }),
    breaches.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg p-3 font-semibold", children: "🎯 All caught up. Every open lead is within SLA." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-slate-100", children: breaches.slice(0, 6).map((l) => {
      const expert = l.captainId && CAPTAIN_BY_ID[l.captainId] || captainForArea(l.area);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-3 flex flex-col sm:flex-row sm:items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setLocation(`/admin/leads/${l.id}`),
            className: "flex-1 text-left min-w-0 hover:underline",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-sm text-slate-900 truncate", children: [
                l.leadName,
                " · ",
                l.status
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-slate-500 truncate", children: [
                l.area || "no area",
                " · ",
                l.captainName || expert.name,
                " · created ",
                Math.round((Date.now() - new Date(l.createdAt).getTime()) / 36e5),
                "h ago"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: captainWaLink(expert, `Hey ${expert.name}, lead "${l.leadName}" (${l.referralId}) has been waiting 24h+. Please reach out today.`),
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold shrink-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" }),
              " Nudge"
            ]
          }
        )
      ] }, l.id);
    }) })
  ] });
}
function timeAgo(ts2) {
  const s = Math.max(1, Math.floor((Date.now() - ts2) / 1e3));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}
function ActivityFeed({ leads, limit = 12 }) {
  const [, setLocation] = useLocation();
  const rows = getRecentActivity(leads, limit);
  const iconFor = (k) => k === "created" ? Plus : k === "status" ? PenLine : k === "assign" ? UserPlus : Clock;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-emerald-50 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-5 h-5 text-emerald-600" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base md:text-lg font-bold text-slate-900", children: "Activity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500", children: [
          "Last ",
          limit,
          " events across all leads."
        ] })
      ] })
    ] }),
    rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 italic", children: "No activity yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-slate-100", children: rows.map((r2, i) => {
      const Icon2 = iconFor(r2.kind);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "py-2.5 flex items-start gap-3 cursor-pointer hover:bg-slate-50 -mx-2 px-2 rounded",
          onClick: () => setLocation(`/admin/leads/${r2.leadId}`),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-4 h-4 text-slate-400 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-800 truncate", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: r2.leadName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-500", children: [
                " · ",
                r2.text
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-slate-400 shrink-0 mt-0.5", children: [
              timeAgo(r2.ts),
              " ago"
            ] })
          ]
        },
        `${r2.leadId}-${r2.ts}-${i}`
      );
    }) })
  ] });
}
function TierMix({ leads }) {
  const mix = reactExports.useMemo(() => getTierMix(leads), [leads]);
  const max = Math.max(1, ...mix.map((m) => m.count));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-4 h-4 text-orange-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-white", children: "Pricing tier mix" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-500 ml-auto", children: "where revenue lives" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: mix.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-200", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-slate-400", children: [
          m.count,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-600", children: [
            "· ",
            m.pct,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-slate-800 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: { width: `${Math.max(2, m.count / max * 100)}%`, background: m.color } }) })
    ] }, m.id)) })
  ] });
}
function ChannelMix({ leads }) {
  const data = reactExports.useMemo(() => getChannelROI(leads), [leads]);
  const max = Math.max(1, ...data.map((d) => d.leads));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "w-4 h-4 text-orange-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-white", children: "Channels · what actually works" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: data.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg w-6 shrink-0 text-center", children: d.emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-200 truncate", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-slate-400 shrink-0", children: [
            d.leads,
            " leads · ",
            d.conversion,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-slate-800 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-gradient-to-r from-orange-500 to-pink-500", style: { width: `${d.leads / max * 100}%` } }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-black text-green-400", children: [
          "₹",
          (d.revenue / 1e3).toFixed(1),
          "k"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-500 uppercase", children: "revenue" })
      ] })
    ] }, d.id)) })
  ] });
}
function ZoneHero({ leads }) {
  const stats = reactExports.useMemo(() => {
    const s = getZoneStats(leads);
    const byId = Object.fromEntries(s.map((x) => [x.slug, x]));
    return GHARPAYY_ZONES.map((z2) => ({ z: z2, s: byId[z2.slug] || { open: 0, booked: 0, conversion: 0, occupancy: 0, total: 0, avgFirstReplyH: null } }));
  }, [leads]);
  const totalOpen = stats.reduce((a2, b) => a2 + (b.s.open || 0), 0);
  const totalBooked = stats.reduce((a2, b) => a2 + (b.s.booked || 0), 0);
  const hottest = [...stats].sort((a2, b) => (b.s.open || 0) - (a2.s.open || 0))[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.25),transparent_60%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-5 md:p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3 h-3" }),
            " Gharpayy · Bengaluru · 5 hero zones"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl md:text-3xl font-black text-white mt-1.5 leading-tight", children: "The 5 zones we win in. Every day. Every lead." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-400 mt-1", children: [
            "Hero copy + offers from ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-200 font-bold", children: "gharpayy.com" }),
            ". Numbers from your NMS app · live."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat$2, { label: "Open", value: totalOpen, tone: "text-blue-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat$2, { label: "Booked", value: totalBooked, tone: "text-emerald-400" }),
          hottest && /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: `/admin/zone/${hottest.z.slug}`, className: "hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-black", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5" }),
            " Hottest: ",
            hottest.z.display,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3", children: stats.map(({ z: z2, s }) => {
        const expert = CAPTAIN_BY_ID[z2.captainId];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            href: `/admin/zone/${z2.slug}`,
            className: "group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-orange-500 transition shadow-lg hover:shadow-orange-500/20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-28 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: z2.heroImage, alt: z2.display, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-110 transition duration-700" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-md bg-orange-500 text-[9px] font-black text-white tracking-wider", children: z2.offer.split(" ").slice(0, 4).join(" ") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-1.5 left-2 right-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] font-black uppercase tracking-[0.15em] text-white/90 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-2.5 h-2.5" }),
                    " ",
                    z2.name
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-white truncate leading-tight mt-0.5", children: z2.tagline })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-500 truncate", children: z2.amenity }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1 mt-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { value: s.open, label: "Open", tone: "text-blue-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { value: s.booked, label: "Won", tone: "text-emerald-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { value: `${s.conversion || 0}%`, label: "Conv", tone: "text-orange-400" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2 pt-2 border-t border-slate-800", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full text-white text-[9px] font-black flex items-center justify-center shrink-0", style: { background: z2.color }, children: expert?.initial || "G" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-slate-300 truncate", children: expert?.name?.split(" ")[0] || "Expert" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-0.5 transition" })
                ] })
              ] })
            ]
          },
          z2.slug
        );
      }) })
    ] })
  ] });
}
function Stat$2({ label, value, tone }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-black leading-none ${tone}`, children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-widest text-slate-500 mt-0.5", children: label })
  ] });
}
function Mini({ value, label, tone }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-black leading-none ${tone}`, children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] uppercase tracking-wider text-slate-600 mt-0.5", children: label })
  ] });
}
function AdminPitch({ eyebrow, title, pitch }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-slate-800 bg-slate-900/60 p-4 mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest font-bold text-orange-400", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base md:text-lg font-bold text-white mt-0.5", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-3 grid md:grid-cols-3 gap-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[10px] uppercase font-bold tracking-widest text-slate-500", children: "Why" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-slate-200 leading-snug", children: pitch.why })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[10px] uppercase font-bold tracking-widest text-slate-500", children: "How" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-slate-200 leading-snug", children: pitch.how })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[10px] uppercase font-bold tracking-widest text-slate-500", children: "What next" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-slate-200 leading-snug", children: pitch.next })
      ] })
    ] })
  ] });
}
function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { isAdminAuthenticated } = useAdminStore();
  reactExports.useEffect(() => {
    if (!isAdminAuthenticated) {
      setLocation("/admin");
    }
  }, [isAdminAuthenticated, setLocation]);
  const { data: analytics } = useAdminGetAnalytics();
  const { data: leadsRes } = useAdminGetLeads();
  const allLeads = leadsRes?.leads || [];
  const autoRoute = useAdminAutoRoute();
  const [filters, setFilters] = reactExports.useState(DEFAULT_FILTERS);
  const filteredLeads = reactExports.useMemo(() => applyAdminFilters(allLeads, filters), [allLeads, filters]);
  const slaCount = reactExports.useMemo(() => getSlaBreaches(filteredLeads, 24).length, [filteredLeads]);
  const avgFirstResp = reactExports.useMemo(() => getAvgFirstResponseHours(filteredLeads), [filteredLeads]);
  const todayCount = reactExports.useMemo(() => {
    const cutoff = Date.now() - 24 * 3600 * 1e3;
    return filteredLeads.filter((l) => new Date(l.createdAt).getTime() >= cutoff).length;
  }, [filteredLeads]);
  const unassignedCount = reactExports.useMemo(() => allLeads.filter((l) => !l.captainId).length, [allLeads]);
  const captainWorkload = reactExports.useMemo(() => {
    return CAPTAINS.map((c) => {
      const matched = filteredLeads.filter(
        (l) => l.captainId && l.captainId === c.id || l.assignedAgentName && l.assignedAgentName.toLowerCase().includes(c.name.toLowerCase())
      );
      const open = matched.filter((l) => !["BOOKED", "CLOSED", "LOST"].includes(l.status)).length;
      const closed2 = matched.filter((l) => ["BOOKED", "CLOSED"].includes(l.status)).length;
      const breaches = getSlaBreaches(matched, 24).length;
      return { expert: c, open, closed: closed2, total: matched.length, breaches };
    }).sort((a2, b) => b.open - a2.open);
  }, [filteredLeads]);
  const activeCaptains = captainWorkload.filter((c) => c.open > 0).length;
  if (!isAdminAuthenticated) return null;
  if (!analytics) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-48" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 rounded-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 rounded-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 rounded-xl" })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AdminPitch,
      {
        eyebrow: "Overview · Gharpayy ops",
        title: "The whole NMS pipeline through a Gharpayy lens",
        pitch: {
          why: "Every lead, expert and rupee maps to one of the 5 hero zones from gharpayy.com.",
          how: "Filter, auto-route, and watch SLA. Real NMS data · Gharpayy pitch on top.",
          next: "Clear unassigned, then open the zone with the highest open count below."
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ZoneHero, { leads: filteredLeads }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-orange-400 font-black", children: "Today's cockpit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl md:text-2xl font-black text-white", children: [
          todayCount,
          " new leads · ",
          unassignedCount,
          " need a expert"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 mt-0.5", children: "Filter, route, follow up. The whole NMS pipeline in one screen." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => autoRoute.mutate(void 0, {
            onSuccess: (r2) => toast$1.success(`Auto-routed ${r2?.count ?? 0} unassigned leads`)
          }),
          disabled: autoRoute.isPending || unassignedCount === 0,
          className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-sm font-black shrink-0 shadow-lg shadow-orange-500/30",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
            autoRoute.isPending ? "Routing…" : `Auto-route ${unassignedCount} unassigned`
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FilterBar, { leads: allLeads, value: filters, onChange: setFilters }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Today's leads", value: todayCount, icon: Calendar, tone: "orange" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Avg first reply", value: avgFirstResp != null ? `${avgFirstResp}h` : "-", icon: Clock, tone: "blue", hint: "Time to first expert note" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "SLA breaches", value: slaCount, icon: TriangleAlert, tone: slaCount > 0 ? "red" : "green", hint: ">24h with no follow-up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { title: "Active experts", value: `${activeCaptains}/${CAPTAINS.length}`, icon: Headset, tone: "primary", hint: "With ≥1 open lead" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DarkMetric, { title: "Total leads", value: analytics.totalLeads, icon: Users, tone: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DarkMetric, { title: "Verified", value: analytics.verifiedLeads, icon: UserCheck, tone: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DarkMetric, { title: "Booked PGs", value: analytics.bookedLeads, icon: House, tone: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DarkMetric, { title: "Conversion", value: `${Math.round(analytics.conversionRate)}%`, icon: Target, tone: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 p-5 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-emerald-500/15 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-4 h-4 text-emerald-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-white uppercase tracking-wider", children: "Money flow" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Money, { label: "Revenue generated", value: analytics.totalRevenue, tone: "text-white", sub: "₹2,000 per booking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Money, { label: "Payout liability", value: analytics.totalPayoutLiability, tone: "text-orange-400", sub: "Promised to referrers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Money, { label: "Net platform profit", value: analytics.totalRevenue - analytics.totalPayoutLiability, tone: "text-emerald-400", sub: "Revenue − payouts" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 p-5 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-blue-500/15 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-blue-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-white uppercase tracking-wider", children: "Pipeline" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: analytics.leadsByStatus.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 shrink-0 text-[11px] font-bold text-slate-400 uppercase tracking-wider", children: s.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2.5 bg-slate-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${getStatusColor(s.status)}`, style: { width: `${Math.max(4, s.count / Math.max(1, analytics.totalLeads) * 100)}%` } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 text-right text-sm font-black text-white", children: s.count })
        ] }, s.status)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FunnelCard, { leads: filteredLeads }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SourceAttribution, { leads: filteredLeads })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TierMix, { leads: filteredLeads }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChannelMix, { leads: filteredLeads })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SlaAlerts, { leads: filteredLeads }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityFeed, { leads: filteredLeads, limit: 12 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 p-5 rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-orange-500/15 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Headset, { className: "w-4 h-4 text-orange-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-white uppercase tracking-wider", children: "Expert workload" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-500 uppercase tracking-widest", children: "Live · routed by persona + zone" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:hidden gap-2", children: captainWorkload.map(({ expert, open, closed: closed2, total }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-800 bg-slate-950 rounded-xl p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm", children: expert.initial }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-white truncate", children: expert.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-500 truncate", children: expert.title })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-center text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-500/10 rounded-lg py-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-blue-400 text-base", children: open }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: "Open" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-500/10 rounded-lg py-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-emerald-400 text-base", children: closed2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: "Closed" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-800 rounded-lg py-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-slate-200 text-base", children: total }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: "Total" })
          ] })
        ] })
      ] }, expert.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-[10px] uppercase tracking-widest text-slate-500 border-b border-slate-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Expert" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Desk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4 text-right", children: "Open" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4 text-right", children: "Closed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4 text-right", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 text-right", children: "SLA" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: captainWorkload.map(({ expert, open, closed: closed2, total }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-800 last:border-0 hover:bg-slate-800/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-xs", children: expert.initial }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-100", children: expert.name })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-4 text-slate-400", children: expert.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-4 text-right font-black text-blue-400", children: open }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-4 text-right font-black text-emerald-400", children: closed2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-4 text-right font-black text-slate-100", children: total }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-right text-xs text-slate-500", children: expert.responseSla })
        ] }, expert.id)) })
      ] }) })
    ] })
  ] }) });
}
function DarkMetric({ title, value, icon: Icon2, tone, bg, border }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-slate-900 border ${border} p-4 rounded-2xl flex items-start gap-3`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2.5 rounded-xl ${bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: `w-5 h-5 ${tone}` }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black tracking-tight text-white", children: value })
    ] })
  ] });
}
function Money({ label, value, tone, sub }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-slate-500 mb-0.5 uppercase tracking-widest", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-2xl font-black ${tone}`, children: [
      "₹",
      Number(value || 0).toLocaleString()
    ] }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-600 mt-0.5", children: sub })
  ] });
}
function getStatusColor(status) {
  switch (status) {
    case "NEW":
      return "bg-blue-400";
    case "CONTACTED":
      return "bg-indigo-400";
    case "VERIFIED":
      return "bg-amber-400";
    case "MATCHED":
      return "bg-purple-400";
    case "VISIT":
      return "bg-pink-400";
    case "BOOKED":
      return "bg-green-500";
    case "CLOSED":
      return "bg-emerald-600";
    case "LOST":
      return "bg-red-500";
    default:
      return "bg-slate-400";
  }
}
const Table = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
function AdminLeads() {
  const [, setLocation] = useLocation();
  const { isAdminAuthenticated } = useAdminStore();
  const [statusFilter, setStatusFilter] = reactExports.useState("ALL");
  const [search, setSearch] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (!isAdminAuthenticated) {
      setLocation("/admin");
    }
  }, [isAdminAuthenticated, setLocation]);
  const { data: response } = useAdminGetLeads({
    status: statusFilter === "ALL" ? void 0 : statusFilter
  });
  if (!isAdminAuthenticated) return null;
  const filteredLeads = response?.leads?.filter(
    (lead) => lead.leadName.toLowerCase().includes(search.toLowerCase()) || lead.leadPhone.includes(search) || lead.referralId.toLowerCase().includes(search.toLowerCase())
  ) || [];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold font-display text-slate-900", children: "Leads Pipeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mt-1", children: "Manage and update status for all referred leads." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search by name, phone, or ID...",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "pl-10"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full sm:w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select$1, { value: statusFilter, onValueChange: (val) => setStatusFilter(val), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-4 h-4 text-slate-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filter Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ALL", children: "All Statuses" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "NEW", children: "New" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "CONTACTED", children: "Contacted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "VERIFIED", children: "Verified" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "VISIT", children: "Scheduled Visit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "BOOKED", children: "Booked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "CLOSED", children: "Closed Won" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "LOST", children: "Lost" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:hidden", children: filteredLeads.map((lead) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLocation(`/admin/leads/${lead.id}`), className: "bg-white rounded-xl border border-slate-200 p-4 text-left shadow-sm space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-slate-900 truncate", children: lead.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: lead.leadPhone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: lead.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-lg bg-slate-50 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          lead.referralId
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-lg bg-orange-50 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Owner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          lead.assignedAgentName || "Unassigned"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-lg bg-slate-50 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          lead.area || "Any"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-lg bg-slate-50 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Timeline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          lead.moveInTimeline.replace("_", " ")
        ] })
      ] })
    ] }, lead.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { className: "bg-slate-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-[100px]", children: "ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Lead Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Referrer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Owner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Timeline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Date Added" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredLeads.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 8, className: "text-center py-12 text-slate-500", children: "No leads found matching your criteria." }) }) : filteredLeads.map((lead) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-slate-50 cursor-pointer transition-colors", onClick: () => setLocation(`/admin/leads/${lead.id}`), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs font-bold text-slate-500", children: lead.referralId }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-900", children: lead.leadName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-500", children: lead.leadPhone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: lead.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-slate-600", children: lead.referrerName || "Unknown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-slate-600", children: lead.assignedAgentName || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 font-bold", children: "Unassigned" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-slate-600", children: lead.moveInTimeline.replace("_", " ") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-slate-500", children: format(new Date(lead.createdAt), "MMM d, yyyy") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" }) }) })
        ] }, lead.id)) })
      ] }) }),
      response && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-slate-200 bg-slate-50 text-sm text-slate-500 flex justify-between items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Showing ",
        filteredLeads.length,
        " of ",
        response.total,
        " leads"
      ] }) })
    ] })
  ] }) });
}
function StatusBadge({ status }) {
  let color = "bg-slate-100 text-slate-700 border-slate-200";
  switch (status) {
    case "NEW":
      color = "bg-blue-100 text-blue-700 border-blue-200";
      break;
    case "CONTACTED":
      color = "bg-indigo-100 text-indigo-700 border-indigo-200";
      break;
    case "VERIFIED":
      color = "bg-amber-100 text-amber-800 border-amber-200";
      break;
    case "MATCHED":
      color = "bg-purple-100 text-purple-700 border-purple-200";
      break;
    case "VISIT":
      color = "bg-pink-100 text-pink-700 border-pink-200";
      break;
    case "BOOKED":
      color = "bg-green-100 text-green-800 border-green-200 shadow-sm";
      break;
    case "CLOSED":
      color = "bg-emerald-100 text-emerald-800 border-emerald-200";
      break;
    case "LOST":
      color = "bg-red-100 text-red-700 border-red-200";
      break;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `font-bold text-[10px] uppercase tracking-wider ${color}`, children: status });
}
function AdminLeadDetail() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const { isAdminAuthenticated } = useAdminStore();
  const queryClient2 = useQueryClient();
  const [newStatus, setNewStatus] = reactExports.useState("");
  const [assignedAgentId, setAssignedAgentId] = reactExports.useState("");
  const [statusNote, setStatusNote] = reactExports.useState("");
  const [newNote, setNewNote] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (!isAdminAuthenticated) {
      setLocation("/admin");
    }
  }, [isAdminAuthenticated, setLocation]);
  const leadId = parseInt(id || "0", 10);
  const { data: lead } = useAdminGetLead(leadId);
  const updateStatus = useAdminUpdateLeadStatus();
  const addNote = useAdminAddLeadNote();
  reactExports.useEffect(() => {
    if (lead && newStatus === "") {
      setNewStatus(lead.status);
      setAssignedAgentId(lead.assignedAgentId ? String(lead.assignedAgentId) : "");
    }
  }, [lead, newStatus]);
  if (!isAdminAuthenticated || !id) return null;
  const handleUpdateStatus = () => {
    if (!newStatus || newStatus === lead?.status && (!assignedAgentId || Number(assignedAgentId) === lead?.assignedAgentId)) return;
    updateStatus.mutate({
      leadId,
      data: {
        status: newStatus,
        assignedAgentId: assignedAgentId ? Number(assignedAgentId) : void 0,
        note: statusNote || void 0
      }
    }, {
      onSuccess: () => {
        toast$1.success(`Status updated to ${newStatus}`);
        setStatusNote("");
        queryClient2.invalidateQueries({ queryKey: getAdminGetLeadQueryKey(leadId) });
      },
      onError: (err) => toast$1.error(err.message || "Failed to update status")
    });
  };
  const handleAddNote = () => {
    if (!newNote.trim()) return;
    addNote.mutate({
      leadId,
      data: {
        note: newNote,
        type: AddLeadNoteBodyType.NOTE,
        agentName: "Admin User"
      }
    }, {
      onSuccess: () => {
        toast$1.success("Note added");
        setNewNote("");
        queryClient2.invalidateQueries({ queryKey: getAdminGetLeadQueryKey(leadId) });
      },
      onError: (err) => toast$1.error(err.message || "Failed to add note")
    });
  };
  if (!lead) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-32" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 rounded-xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-96 rounded-xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-[500px] rounded-xl" })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setLocation("/admin/leads"),
        className: "flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-1" }),
          "Back to Pipeline"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold font-display text-slate-900", children: lead.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: lead.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-500 font-mono text-sm", children: [
          "ID: ",
          lead.referralId,
          " • Added ",
          format(new Date(lead.createdAt), "MMM d, yyyy")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold", children: lead.referrerName ? lead.referrerName.charAt(0).toUpperCase() : "?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500 uppercase", children: "Referred By" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-900", children: lead.referrerName || "Anonymous" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-slate-100 bg-slate-50 font-bold text-slate-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4" }),
            "Update Lead Status"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full sm:w-1/3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-2", children: "New Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select$1, { value: newStatus, onValueChange: (v) => setNewStatus(v), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "NEW", children: "New" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "CONTACTED", children: "Contacted" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "VERIFIED", children: "Verified (Pays ₹50)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "VISIT", children: "Scheduled Visit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "BOOKED", children: "Booked (Pays ₹500)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "CLOSED", children: "Closed Won" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "LOST", children: "Lost" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700 block mb-2", children: "Status Note (Optional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "Reason for status change...",
                      value: statusNote,
                      onChange: (e) => setStatusNote(e.target.value)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      onClick: handleUpdateStatus,
                      disabled: newStatus === lead.status || updateStatus.isPending,
                      className: "shrink-0",
                      children: updateStatus.isPending ? "Updating..." : "Update"
                    }
                  )
                ] })
              ] })
            ] }),
            newStatus === "VERIFIED" && lead.status !== "VERIFIED" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-amber-600 bg-amber-50 p-2 rounded border border-amber-100", children: "⚠️ Changing to VERIFIED will generate a ₹50 payout for the referrer." }),
            newStatus === "BOOKED" && lead.status !== "BOOKED" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-green-600 bg-green-50 p-2 rounded border border-green-100", children: "💰 Changing to BOOKED will generate a ₹500 payout for the referrer." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-slate-100 bg-slate-50 font-bold text-slate-800 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
            "Internal Notes & Timeline"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  placeholder: "Add an internal note or call log...",
                  className: "resize-none h-20",
                  value: newNote,
                  onChange: (e) => setNewNote(e.target.value)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "h-20 w-20 shrink-0 flex flex-col items-center justify-center gap-1",
                  onClick: handleAddNote,
                  disabled: addNote.isPending || !newNote.trim(),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Add" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200", children: [
              lead.notes.map((note) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10", children: note.type === "STATUS_CHANGE" ? /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-900 text-sm", children: note.createdByName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("time", { className: "text-xs text-slate-500", children: format(new Date(note.createdAt), "MMM d, h:mm a") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-700", children: note.note })
                ] })
              ] }, note.id)),
              lead.notes.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-slate-500 italic relative z-10 bg-white border border-dashed border-slate-200 rounded-xl", children: "No notes yet. Add the first one above." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-orange-200 shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-orange-100 bg-orange-50 font-bold text-orange-900 flex items-center gap-2", children: "Lead Owner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600", children: "Route this lead to the right Gharpayy expert for calling, matching and visit scheduling." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select$1, { value: assignedAgentId, onValueChange: setAssignedAgentId, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Assign expert" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: GHARPAYY_AGENTS.map((agent) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: String(agent.id), children: [
                agent.name,
                " · ",
                agent.activeLeads,
                " active"
              ] }, agent.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleUpdateStatus, className: "w-full", disabled: updateStatus.isPending || !assignedAgentId && newStatus === lead.status, children: updateStatus.isPending ? "Saving..." : "Save assignment" }),
            lead.assignedAgentName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-green-700 bg-green-50 border border-green-100 rounded-lg p-2", children: [
              "Currently assigned to ",
              lead.assignedAgentName
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-slate-100 bg-slate-50 font-bold text-slate-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4" }),
            "Contact Info"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500 uppercase mb-1", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-slate-900 text-lg flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-slate-400" }),
                lead.leadPhone
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500 uppercase mb-1", children: "Move-in Timeline" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-slate-900 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-slate-400" }),
                lead.moveInTimeline.replace("_", " ")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500 uppercase mb-1", children: "Preferred Area" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-slate-900 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-slate-400" }),
                lead.area || "No preference"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 rounded-xl shadow-sm overflow-hidden text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-slate-800 bg-slate-950 font-bold flex items-center gap-2", children: "Referrer Info" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-4", children: lead.referrerId ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500 uppercase mb-1", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: lead.referrerName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500 uppercase mb-1", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: lead.referrerPhone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "w-full mt-2 bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:text-white", children: "View Referrer Profile" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-4 text-slate-400", children: "This lead was submitted anonymously." }) })
        ] })
      ] })
    ] })
  ] }) });
}
function AdminPayouts() {
  const [, setLocation] = useLocation();
  const { isAdminAuthenticated } = useAdminStore();
  const queryClient2 = useQueryClient();
  const [filter, setFilter] = reactExports.useState("PENDING");
  reactExports.useEffect(() => {
    if (!isAdminAuthenticated) {
      setLocation("/admin");
    }
  }, [isAdminAuthenticated, setLocation]);
  const { data: payouts } = useAdminGetPayouts();
  const approvePayout = useAdminApprovePayout();
  const markPaid = useAdminMarkPayoutPaid();
  if (!isAdminAuthenticated) return null;
  const handleApprove = (id) => {
    approvePayout.mutate({ payoutId: id }, {
      onSuccess: () => {
        toast$1.success("Payout approved");
        queryClient2.invalidateQueries({ queryKey: getAdminGetPayoutsQueryKey() });
      },
      onError: (err) => toast$1.error(err.message || "Failed to approve")
    });
  };
  const handleMarkPaid = (id) => {
    markPaid.mutate({ payoutId: id }, {
      onSuccess: () => {
        toast$1.success("Payout marked as paid");
        queryClient2.invalidateQueries({ queryKey: getAdminGetPayoutsQueryKey() });
      },
      onError: (err) => toast$1.error(err.message || "Failed to mark paid")
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold font-display text-slate-900", children: "Payout Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mt-1", children: "Review and process referrer rewards." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 p-1 bg-slate-100 rounded-lg w-full max-w-md", children: ["PENDING", "APPROVED", "PAID"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setFilter(f),
        className: `flex-1 py-2 text-sm font-bold rounded-md transition-all ${filter === f ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`,
        children: f
      },
      f
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { className: "bg-slate-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Referrer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Lead Context" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Date Generated" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: !payouts || payouts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 6, className: "text-center py-12 text-slate-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-12 h-12 text-slate-200 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "No ",
          filter.toLowerCase(),
          " payouts found."
        ] })
      ] }) }) }) : payouts.map((payout) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-900", children: payout.referrerName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-500 font-mono", children: payout.referrerPhone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-slate-700", children: payout.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500 font-mono", children: payout.referralId })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-black text-green-600", children: [
          "₹",
          payout.amount
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] uppercase font-bold ${payout.type === "BOOKING_BONUS" ? "bg-purple-50 text-purple-700 border-purple-200" : "bg-blue-50 text-blue-700 border-blue-200"}`, children: payout.type.replace("_", " ") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-slate-500", children: format(new Date(payout.createdAt), "MMM d, yyyy") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-right", children: [
          payout.status === "PENDING" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "bg-primary hover:bg-primary/90 text-white",
              onClick: () => handleApprove(payout.id),
              disabled: approvePayout.isPending,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 mr-1" }),
                " Approve"
              ]
            }
          ),
          payout.status === "APPROVED" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "bg-green-600 hover:bg-green-700 text-white",
              onClick: () => handleMarkPaid(payout.id),
              disabled: markPaid.isPending,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 mr-1" }),
                " Mark Paid"
              ]
            }
          ),
          payout.status === "PAID" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end text-green-600 font-bold text-sm gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
            " Paid"
          ] })
        ] })
      ] }, payout.id)) })
    ] }) }) })
  ] }) });
}
function AdminProperties() {
  const { isAdminAuthenticated } = useAdminStore();
  const [, setLocation] = useLocation();
  const { toast: toast2 } = useToast();
  if (!isAdminAuthenticated) {
    setLocation("/admin");
    return null;
  }
  const { data: properties, refetch } = useAdminGetProperties();
  const verifyProperty = useAdminVerifyProperty();
  const handleVerify = async (id) => {
    try {
      await verifyProperty.mutateAsync({ propertyId: id });
      toast2({ title: "Property verified!", description: "It will now show the verified badge" });
      refetch();
    } catch {
      toast2({ title: "Failed to verify", variant: "destructive" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { title: "PG Listings", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black font-display text-white", children: "PG Listings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-400 text-sm", children: [
        (properties || []).length,
        " properties in the network"
      ] })
    ] }) }),
    (properties || []).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-12 h-12 text-slate-600 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400", children: "No properties listed yet" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: (properties || []).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.04 },
        className: "bg-slate-800/50 border border-slate-700 rounded-2xl p-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white text-lg", children: p.name }),
                p.isVerified ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-500/20 text-green-400 border-green-500/30 text-[10px]", children: "✓ Verified" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-yellow-400 border-yellow-500/30 text-[10px]", children: "Pending" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] ${p.availability === "AVAILABLE" ? "text-green-400 border-green-500/30" : "text-red-400 border-red-500/30"}`, children: p.availability })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-slate-400 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  p.area,
                  " · ",
                  p.address
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-black text-white text-xl", children: [
                "₹",
                p.monthlyRent.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-400 text-sm", children: [
                p.availableRooms,
                "/",
                p.totalRooms,
                " rooms"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-slate-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.gender }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                p.totalReviews,
                " reviews"
              ] }),
              p.avgRating && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 text-yellow-500 fill-yellow-500" }),
                  p.avgRating.toFixed(1)
                ] })
              ] }),
              p.referralBonus > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-400", children: [
                  "+₹",
                  p.referralBonus,
                  " referral bonus"
                ] })
              ] })
            ] }),
            !p.isVerified && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleVerify(p.id),
                className: "flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg text-sm font-bold hover:bg-green-500/30 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                  " Verify"
                ]
              }
            )
          ] })
        ]
      },
      p.id
    )) })
  ] }) });
}
function ZoneCard({ stat }) {
  const expert = CAPTAIN_BY_ID[stat.captainId];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      href: `/admin/zone/${stat.slug}`,
      className: "group block rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-orange-500/50 transition shadow-lg",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-32 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: stat.heroImage,
              alt: stat.display,
              loading: "lazy",
              className: "w-full h-full object-cover group-hover:scale-105 transition duration-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur text-[10px] font-bold text-white", children: [
            stat.occupancy,
            "% full"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2 left-3 right-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-white/80", children: stat.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-white truncate", children: stat.tagline })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1.5 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-blue-500/10 py-1.5 border border-blue-500/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-black text-blue-400 leading-none", children: stat.open }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-slate-500 tracking-wider mt-0.5", children: "Open" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-green-500/10 py-1.5 border border-green-500/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-black text-green-400 leading-none", children: stat.booked }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-slate-500 tracking-wider mt-0.5", children: "Booked" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-orange-500/10 py-1.5 border border-orange-500/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-black text-orange-400 leading-none", children: [
                stat.conversion,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-slate-500 tracking-wider mt-0.5", children: "Conv" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1 border-t border-slate-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-black", children: expert?.initial || "G" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-slate-200", children: expert?.name || "Expert" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: stat.avgFirstReplyH ? `${stat.avgFirstReplyH}h reply` : "-" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-slate-500 group-hover:text-orange-400 transition" })
          ] })
        ] })
      ]
    }
  );
}
function ZoneGrid({ leads }) {
  const stats = reactExports.useMemo(() => getZoneStats(leads), [leads]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-orange-400", children: "Gharpayy 5 zones" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg md:text-xl font-bold text-white", children: "Zone performance · live" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-500", children: "Hero copy from gharpayy.com" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ZoneCard, { stat: s }, s.slug)) })
  ] });
}
function AdminZones() {
  const [, setLocation] = useLocation();
  const { isAdminAuthenticated } = useAdminStore();
  reactExports.useEffect(() => {
    if (!isAdminAuthenticated) setLocation("/admin");
  }, [isAdminAuthenticated, setLocation]);
  const { data } = useAdminGetLeads();
  const leads = data?.leads || [];
  if (!isAdminAuthenticated) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-orange-400 font-bold", children: "5 hero zones" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl md:text-3xl font-black text-white", children: "Gharpayy zones · operations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400 mt-1 max-w-2xl", children: "Same five zones a real Gharpayy customer sees on the homepage. Click any zone to open the expert workload, lead pipeline, properties and the live map for that zone." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ZoneGrid, { leads }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-white mb-3", children: "Pricing tiers · the real Gharpayy ladder" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3", children: PRICING_TIERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl p-3 border border-slate-800 bg-slate-950/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl", children: t.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-white mt-1", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400 font-mono", children: t.range }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-500 mt-1.5 leading-snug", children: t.tagline })
      ] }, t.id)) })
    ] })
  ] }) });
}
function AdminZoneDetail() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute("/admin/zone/:slug");
  const slug = params?.slug || "";
  const zone = ZONE_BY_SLUG[slug];
  const { isAdminAuthenticated } = useAdminStore();
  reactExports.useEffect(() => {
    if (!isAdminAuthenticated) setLocation("/admin");
  }, [isAdminAuthenticated, setLocation]);
  const { data: leadsRes } = useAdminGetLeads();
  const { data: propertiesRes } = useAdminGetProperties();
  useAdminUpdateLeadStatus();
  const leads = leadsRes?.leads || [];
  const allProps = propertiesRes || [];
  const matchedLeads = reactExports.useMemo(() => leads.filter((l) => zoneForLead(l)?.slug === slug), [leads, slug]);
  const matchedProps = reactExports.useMemo(
    () => allProps.filter((p) => zone?.areaSlugs?.includes(String(p.area || "").toLowerCase().replace(/\s+/g, "-"))),
    [allProps, zone, slug]
  );
  if (!isAdminAuthenticated || !zone) return null;
  const expert = CAPTAIN_BY_ID[zone.captainId];
  const open = matchedLeads.filter((l) => !["BOOKED", "CLOSED", "LOST"].includes(l.status)).length;
  const booked = matchedLeads.filter((l) => ["BOOKED", "CLOSED"].includes(l.status)).length;
  const breaches = getSlaBreaches(matchedLeads, 24).length;
  const avgReply = getAvgFirstResponseHours(matchedLeads);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLocation("/admin/zones"), className: "text-xs text-slate-400 hover:text-white inline-flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3 h-3" }),
      " All zones"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 md:h-56 rounded-2xl overflow-hidden border border-slate-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: zone.heroImage, alt: zone.display, className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/60 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-5 md:p-7 flex flex-col justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-orange-300 font-bold", children: "Gharpayy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-black text-white", children: zone.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/80 mt-1", children: zone.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-white/60 mt-2 flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
          " ",
          zone.landmarks.join(" · "),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-300", children: [
            "| ",
            zone.amenity
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Open leads", value: open, hint: "not yet booked / lost", tone: "blue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Booked", value: booked, hint: "closed wins", tone: "green" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "SLA breaches", value: breaches, hint: ">24h no follow-up", tone: breaches > 0 ? "red" : "slate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Avg reply", value: avgReply ? `${avgReply}h` : "-", hint: "time to first note", tone: "orange" })
    ] }),
    expert && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center gap-4 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 text-white flex items-center justify-center text-xl font-black shrink-0", children: expert.initial }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-black text-white", children: [
          expert.name,
          " · ",
          expert.title
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-400", children: [
          expert.responseSla,
          " · ",
          expert.closed,
          " closed · ",
          expert.active,
          " active"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500 italic mt-1", children: [
          '"',
          expert.quote,
          '"'
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: captainWaLink(expert, `Hi ${expert.name}, checking in on ${zone.display} pipeline.`),
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-green-500 text-white text-xs font-bold hover:bg-green-600",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" }),
            " WhatsApp expert"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-bold text-white", children: [
          "Leads in ",
          zone.display,
          " (",
          matchedLeads.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLocation(`/admin/leads?zone=${slug}`), className: "text-xs text-orange-400 hover:underline", children: "Open in pipeline →" })
      ] }),
      matchedLeads.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 italic", children: "No leads yet for this zone." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-slate-800", children: matchedLeads.slice(0, 12).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-2.5 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-slate-100 truncate", children: l.leadName || `Lead #${l.id}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-slate-500 truncate", children: [
            l.tier && TIER_BY_ID[l.tier]?.name || "Classics",
            " · ",
            l.personaId || "-",
            " · ",
            l.area || "-"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-slate-800 text-[10px] font-bold text-slate-300", children: l.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setLocation(`/admin/leads/${l.id}`),
            className: "text-[11px] font-bold text-orange-400 hover:underline shrink-0",
            children: "Open"
          }
        )
      ] }, l.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-bold text-white flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-orange-400" }),
          " Properties in ",
          zone.display,
          " (",
          matchedProps.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLocation("/admin/properties"), className: "text-xs text-orange-400 hover:underline", children: "All properties →" })
      ] }),
      matchedProps.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 italic", children: "No properties listed yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: matchedProps.slice(0, 6).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-slate-800 rounded-lg p-3 flex items-start justify-between gap-2 bg-slate-950/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-sm text-white truncate flex items-center gap-1.5", children: [
            p.name,
            p.isVerified && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-green-400" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-slate-500 truncate", children: [
            p.area,
            " · ",
            p.gender,
            " · ",
            p.availableRooms,
            "/",
            p.totalRooms,
            " free"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-black text-orange-400", children: [
            "₹",
            (p.monthlyRent / 1e3).toFixed(0),
            "k"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-500", children: [
            p.totalReviews,
            " reviews"
          ] })
        ] })
      ] }, p.id)) })
    ] })
  ] }) });
}
function Kpi({ label, value, hint, tone }) {
  const map = {
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    green: "text-green-400 bg-green-500/10 border-green-500/20",
    red: "text-red-400 bg-red-500/10 border-red-500/20",
    orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    slate: "text-slate-300 bg-slate-800/40 border-slate-700"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl p-4 border ${map[tone] || map.slate}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest font-bold opacity-80", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black mt-0.5", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] opacity-60 mt-0.5", children: hint })
  ] });
}
const STATUS_COLOR$1 = {
  NEW: "#3B82F6",
  CONTACTED: "#6366F1",
  VERIFIED: "#F59E0B",
  MATCHED: "#A855F7",
  VISIT: "#EC4899",
  BOOKED: "#10B981",
  CLOSED: "#059669",
  LOST: "#EF4444"
};
const TILES = {
  dark: { url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png", attribution: "&copy; OSM · CARTO", label: "Dark" },
  voyager: { url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png", attribution: "&copy; OSM · CARTO", label: "Streets" },
  satellite: { url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", attribution: "&copy; Esri", label: "Satellite" }
};
function AdminMap() {
  const [, setLocation] = useLocation();
  const { isAdminAuthenticated } = useAdminStore();
  reactExports.useEffect(() => {
    if (!isAdminAuthenticated) setLocation("/admin");
  }, [isAdminAuthenticated, setLocation]);
  const { data } = useAdminGetLeads();
  const leads = data?.leads || [];
  const [zoneFilter, setZoneFilter] = reactExports.useState("ALL");
  const [statusFilter, setStatusFilter] = reactExports.useState("ALL");
  const [tile, setTile] = reactExports.useState("dark");
  const [layers, setLayers] = reactExports.useState({ leads: true, zones: true, hot: true });
  const [active, setActive] = reactExports.useState(null);
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  const filtered = reactExports.useMemo(() => leads.filter((l) => {
    if (zoneFilter !== "ALL" && zoneForLead(l)?.slug !== zoneFilter) return false;
    if (statusFilter !== "ALL" && l.status !== statusFilter) return false;
    return true;
  }), [leads, zoneFilter, statusFilter]);
  const pins = reactExports.useMemo(() => filtered.map((l, i) => {
    const z2 = zoneForLead(l) || GHARPAYY_ZONES[i % GHARPAYY_ZONES.length];
    const hash = (typeof l.id === "number" ? l.id : i) % 64;
    const dx = (hash % 8 - 4) * 5e-3;
    const dy = (Math.floor(hash / 8) - 4) * 5e-3;
    return { lead: l, lat: z2.lat + dy, lng: z2.lng + dx, color: STATUS_COLOR$1[l.status] || "#94A3B8", zone: z2 };
  }), [filtered]);
  const zoneAggs = reactExports.useMemo(() => {
    return GHARPAYY_ZONES.map((z2) => {
      const zLeads = leads.filter((l) => zoneForLead(l)?.slug === z2.slug);
      const open = zLeads.filter((l) => !["BOOKED", "CLOSED", "LOST"].includes(l.status)).length;
      const booked = zLeads.filter((l) => ["BOOKED", "CLOSED"].includes(l.status)).length;
      return { zone: z2, open, booked, total: zLeads.length };
    });
  }, [leads]);
  if (!isAdminAuthenticated) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AdminPitch,
      {
        eyebrow: "Live map · Gharpayy ops",
        title: "The whole city, one screen",
        pitch: {
          why: "5 hero zones from gharpayy.com, drawn on the map you already trust.",
          how: "Every lead pin + zone heat ring. Click any pin → call · WhatsApp · open lead.",
          next: "Hover the hottest zone, then reassign breached leads to the on-duty expert."
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden", style: { height: "min(78vh, 720px)" }, children: [
        mounted ? /* @__PURE__ */ jsxRuntimeExports.jsx(LeafletMap, { pins, zoneAggs, tile, layers, onPin: setActive }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center text-slate-500 text-sm", children: "Loading map…" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 right-3 z-[400] flex items-center gap-2 flex-wrap pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-auto bg-black/80 backdrop-blur border border-slate-700 rounded-xl p-1.5 flex items-center gap-1", children: Object.keys(TILES).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setTile(k),
              className: `px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider transition ${tile === k ? "bg-orange-500 text-white" : "text-slate-400 hover:text-white"}`,
              children: TILES[k].label
            },
            k
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto bg-black/80 backdrop-blur border border-slate-700 rounded-xl px-2 py-1 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3 h-3 text-slate-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { on: layers.leads, onClick: () => setLayers((s) => ({ ...s, leads: !s.leads })), label: "Leads" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { on: layers.zones, onClick: () => setLayers((s) => ({ ...s, zones: !s.zones })), label: "Zones" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { on: layers.hot, onClick: () => setLayers((s) => ({ ...s, hot: !s.hot })), label: "Heat" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto ml-auto bg-orange-500 text-white rounded-xl px-3 py-1.5 text-xs font-black flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5" }),
            " ",
            pins.length,
            " live pins"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 z-[400] bg-black/80 backdrop-blur border border-slate-700 rounded-xl p-2 text-[10px] text-white pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black uppercase tracking-widest mb-1 text-slate-400", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-3 gap-y-0.5", children: Object.entries(STATUS_COLOR$1).slice(0, 8).map(([s, c]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full", style: { background: c } }),
            " ",
            s
          ] }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-black uppercase tracking-widest text-orange-400", children: "Filter" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: zoneFilter, onChange: (e) => setZoneFilter(e.target.value), className: "w-full bg-slate-800 text-slate-100 text-xs font-bold rounded-lg px-2 py-2 border border-slate-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ALL", children: "All 5 zones" }),
            GHARPAYY_ZONES.map((z2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: z2.slug, children: z2.display }, z2.slug))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: statusFilter, onChange: (e) => setStatusFilter(e.target.value), className: "w-full bg-slate-800 text-slate-100 text-xs font-bold rounded-lg px-2 py-2 border border-slate-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ALL", children: "Any status" }),
            Object.keys(STATUS_COLOR$1).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-black uppercase tracking-widest text-orange-400 mb-2", children: "Zone heat (click to focus)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: zoneAggs.sort((a2, b) => b.open - a2.open).map(({ zone, open, booked, total }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setZoneFilter(zone.slug),
              className: `w-full text-left flex items-center gap-2 p-2 rounded-lg border transition ${zoneFilter === zone.slug ? "border-orange-500 bg-orange-500/10" : "border-slate-800 hover:border-slate-600 bg-slate-950"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full shrink-0", style: { background: zone.color } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-white truncate", children: zone.display }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 truncate", children: zone.tagline })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black text-blue-400 leading-none", children: open }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-slate-500 tracking-wider", children: "open" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0 ml-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black text-emerald-400 leading-none", children: booked }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-slate-500 tracking-wider", children: "won" })
                ] })
              ]
            },
            zone.slug
          )) })
        ] })
      ] })
    ] }),
    active && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[1000] flex items-end md:items-center justify-center bg-black/70", onClick: () => setActive(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-700 rounded-t-2xl md:rounded-2xl w-full md:max-w-md p-5 m-0 md:m-4 space-y-3", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase font-black text-orange-400 tracking-widest", children: active.zone.display }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-black text-white truncate", children: active.lead.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-400 truncate", children: [
            active.lead.area,
            " · ",
            active.lead.personaId || "-",
            " · ",
            active.lead.tier && TIER_BY_ID[active.lead.tier]?.name || "Classics"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(null), className: "p-1 text-slate-400 hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-bold text-white", style: { background: STATUS_COLOR$1[active.lead.status] }, children: active.lead.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-slate-500", children: new Date(active.lead.createdAt).toLocaleDateString() })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${active.lead.leadPhone}`, className: "px-2 py-2.5 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-black text-center inline-flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
          " Call"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${(active.lead.leadPhone || "").replace(/\D/g, "")}`, target: "_blank", rel: "noreferrer", className: "px-2 py-2.5 rounded-lg bg-green-500/20 text-green-400 text-xs font-black text-center inline-flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3 h-3" }),
          " WhatsApp"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLocation(`/admin/leads/${active.lead.id}`), className: "px-2 py-2.5 rounded-lg bg-orange-500/20 text-orange-400 text-xs font-black inline-flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
          " Open"
        ] })
      ] })
    ] }) })
  ] }) });
}
function Toggle({ on, onClick, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: `px-2 py-0.5 rounded-md transition ${on ? "bg-orange-500 text-white" : "text-slate-500 hover:text-slate-200"}`, children: label });
}
function LeafletMap({ pins, zoneAggs, tile, layers, onPin }) {
  const [RL, setRL] = reactExports.useState(null);
  const [L, setL] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let alive = true;
    Promise.all([import("../_libs/react-leaflet.mjs"), import("../_libs/leaflet.mjs").then(function(n) {
      return n.l;
    }), Promise.resolve({})]).then(([rl, leaflet]) => {
      if (alive) {
        setRL(rl);
        setL(leaflet.default || leaflet);
      }
    });
    return () => {
      alive = false;
    };
  }, []);
  if (!RL || !L) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center text-slate-500 text-sm", children: "Loading Bengaluru…" });
  const { MapContainer, TileLayer, CircleMarker, Circle: Circle2, Tooltip: Tooltip2, Popup, LayerGroup, useMap } = RL;
  const tileCfg = TILES[tile];
  const maxOpen = Math.max(1, ...zoneAggs.map((z2) => z2.open || 0));
  function Sizer() {
    const map = useMap();
    reactExports.useEffect(() => {
      const t = setTimeout(() => map.invalidateSize(), 80);
      return () => clearTimeout(t);
    }, [map]);
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(MapContainer, { center: [12.97, 77.64], zoom: 11, style: { height: "100%", width: "100%", background: "#0f172a" }, preferCanvas: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sizer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TileLayer, { url: tileCfg.url, attribution: tileCfg.attribution }),
    layers.zones && /* @__PURE__ */ jsxRuntimeExports.jsx(LayerGroup, { children: zoneAggs.map(({ zone, open, booked, total }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Circle2,
      {
        center: [zone.lat, zone.lng],
        radius: 1700,
        pathOptions: { color: zone.color, weight: 2, fillColor: zone.color, fillOpacity: 0.08 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip2, { permanent: true, direction: "center", className: "!bg-transparent !border-0 !shadow-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "rgba(0,0,0,0.78)", border: `1px solid ${zone.color}`, borderRadius: 12, padding: "4px 8px", color: "#fff", fontSize: 10, fontWeight: 900, letterSpacing: 1, textTransform: "uppercase" }, children: zone.display }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Popup, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { minWidth: 180 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 10, fontWeight: 900, color: zone.color, letterSpacing: 2 }, children: zone.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 800, fontSize: 14, marginBottom: 4 }, children: zone.tagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 11, color: "#475569" }, children: zone.amenity }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 6 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 11 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: open }),
                " open"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 11 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: booked }),
                " won"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 11 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: total }),
                " total"
              ] })
            ] })
          ] }) })
        ]
      },
      zone.slug
    )) }),
    layers.hot && /* @__PURE__ */ jsxRuntimeExports.jsx(LayerGroup, { children: zoneAggs.map(({ zone, open }) => {
      const r2 = 600 + open / maxOpen * 2400;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Circle2,
        {
          center: [zone.lat, zone.lng],
          radius: r2,
          pathOptions: { stroke: false, fillColor: "#FB923C", fillOpacity: 0.12 + open / maxOpen * 0.18 }
        },
        zone.slug + "-heat"
      );
    }) }),
    layers.leads && /* @__PURE__ */ jsxRuntimeExports.jsx(LayerGroup, { children: pins.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      CircleMarker,
      {
        center: [p.lat, p.lng],
        radius: 6,
        pathOptions: { color: "#fff", weight: 1.5, fillColor: p.color, fillOpacity: 0.95 },
        eventHandlers: { click: () => onPin(p) },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip2, { children: [
          p.lead.leadName,
          " · ",
          p.lead.status
        ] })
      },
      (p.lead.id || "") + "-" + i
    )) })
  ] });
}
function AdminCaptains() {
  const [, setLocation] = useLocation();
  const { isAdminAuthenticated } = useAdminStore();
  reactExports.useEffect(() => {
    if (!isAdminAuthenticated) setLocation("/admin");
  }, [isAdminAuthenticated, setLocation]);
  const { data } = useAdminGetLeads();
  const leads = data?.leads || [];
  const rows = reactExports.useMemo(() => CAPTAINS.map((c) => {
    const matched = leads.filter(
      (l) => l.captainId && l.captainId === c.id || l.assignedAgentName && l.assignedAgentName.toLowerCase().includes(c.name.toLowerCase())
    );
    const open = matched.filter((l) => !["BOOKED", "CLOSED", "LOST"].includes(l.status)).length;
    const booked = matched.filter((l) => ["BOOKED", "CLOSED"].includes(l.status)).length;
    const breaches = getSlaBreaches(matched, 24).length;
    const reply = getAvgFirstResponseHours(matched);
    const winRate = matched.length ? Math.round(booked / matched.length * 100) : 0;
    return { expert: c, open, booked, breaches, reply, total: matched.length, winRate };
  }), [leads]);
  if (!isAdminAuthenticated) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AdminPitch,
      {
        eyebrow: "Experts · Gharpayy field team",
        title: "Are your zone experts okay?",
        pitch: {
          why: "Every Gharpayy lead lives or dies by the zone expert behind it.",
          how: "SLA, win rate, workload, payout owed · one row per expert.",
          next: "Open the lowest win-rate expert and reassign their breached leads."
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: rows.map(({ expert, open, booked, breaches, reply, total, winRate }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 text-white flex items-center justify-center text-lg font-black", children: expert.initial }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-white", children: expert.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 truncate", children: expert.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: expert.responseSla })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: captainWaLink(expert, `Hi ${expert.name}, quick check-in.`), target: "_blank", rel: "noreferrer", className: "p-2 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: open, label: "Open", tone: "blue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: booked, label: "Booked", tone: "green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: `${winRate}%`, label: "Win", tone: "orange" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: breaches, label: "SLA", tone: breaches > 0 ? "red" : "slate" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-slate-500 italic border-t border-slate-800 pt-2", children: [
        '"',
        expert.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] text-slate-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Hubs: ",
          expert.hubs.slice(0, 3).join(", "),
          expert.hubs.length > 3 ? "…" : ""
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Reply avg: ",
          reply ? `${reply}h` : "-"
        ] })
      ] })
    ] }, expert.id)) })
  ] }) });
}
function Cell({ value, label, tone }) {
  const map = {
    blue: "bg-blue-500/10 text-blue-400",
    green: "bg-green-500/10 text-green-400",
    orange: "bg-orange-500/10 text-orange-400",
    red: "bg-red-500/10 text-red-400",
    slate: "bg-slate-800 text-slate-300"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg py-2 ${map[tone]}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-black leading-none", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider opacity-70 mt-0.5", children: label })
  ] });
}
function AdminEarners() {
  const [, setLocation] = useLocation();
  const { isAdminAuthenticated } = useAdminStore();
  reactExports.useEffect(() => {
    if (!isAdminAuthenticated) setLocation("/admin");
  }, [isAdminAuthenticated, setLocation]);
  const { data } = useAdminGetLeads();
  const leads = data?.leads || [];
  const rows = reactExports.useMemo(() => getEarnerStats(leads), [leads]);
  if (!isAdminAuthenticated) return null;
  const total = rows.reduce((s, r2) => s + r2.earned, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AdminPitch,
      {
        eyebrow: "Earners · Gharpayy referral engine",
        title: "Real people making money with Gharpayy",
        pitch: {
          why: "Showing earnings is the loudest reason new users join Gharpayy.",
          how: "Track earned ₹, conversions and streak · promote top earners to Society Expert.",
          next: "Click the row above the line and DM them a Society Expert offer."
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat$1, { label: "Active earners", value: rows.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat$1, { label: "₹ paid out", value: `₹${(total / 1e3).toFixed(1)}k` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat$1, { label: "Top earner", value: rows[0]?.name || "-" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-slate-900 border border-slate-800 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-slate-950/40 text-[10px] uppercase tracking-wider text-slate-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-left", children: "#" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-left", children: "Earner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-right", children: "Leads" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-right", children: "Bookings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-right", children: "Earned" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-right", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-800", children: rows.map((r2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-800/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-slate-500 font-mono", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-white", children: r2.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 font-mono", children: r2.code })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right text-blue-400 font-bold", children: r2.leads }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right text-green-400 font-bold", children: r2.bookings }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right text-orange-400 font-black", children: [
          "₹",
          r2.earned.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: i < 3 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-[10px] font-bold text-orange-400 hover:underline inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3 h-3" }),
          " Promote"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-600", children: "-" }) })
      ] }, r2.code)) })
    ] }) })
  ] }) });
}
function Stat$1({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest font-bold text-slate-500", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-black text-white mt-1 truncate", children: value })
  ] });
}
function AdminChannels() {
  const [, setLocation] = useLocation();
  const { isAdminAuthenticated } = useAdminStore();
  reactExports.useEffect(() => {
    if (!isAdminAuthenticated) setLocation("/admin");
  }, [isAdminAuthenticated, setLocation]);
  const { data } = useAdminGetLeads();
  const leads = data?.leads || [];
  if (!isAdminAuthenticated) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AdminPitch,
      {
        eyebrow: "Channels · Gharpayy acquisition",
        title: "What to scale, what to kill",
        pitch: {
          why: "Gharpayy grows when WhatsApp + Slack + Campus + HR all run together.",
          how: "10 ways to earn · each one a channel with its own ₹ and conversion.",
          next: "Double down on the top-3 by ₹ this week, pause the bottom-2."
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChannelMix, { leads }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", children: EARN_RULES.map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: r2.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-white text-sm", children: r2.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400", children: r2.blurb }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1 pt-2 border-t border-slate-800 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-blue-400", children: [
            "₹",
            r2.payoutOnLead
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-500 uppercase", children: "Lead" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-orange-400", children: [
            "₹",
            r2.payoutOnTour
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-500 uppercase", children: "Tour" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-green-400", children: [
            "₹",
            r2.payoutOnBooking
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-500 uppercase", children: "Booking" })
        ] })
      ] }),
      r2.topEarner && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-500 italic pt-1", children: [
        "Top: ",
        r2.topEarner.name,
        " · ₹",
        r2.topEarner.monthly.toLocaleString(),
        "/mo"
      ] })
    ] }, r2.id)) })
  ] }) });
}
const DIFF_TONE = {
  Easy: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Medium: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Hard: "bg-rose-500/15 text-rose-300 border-rose-500/30"
};
function EarnHubPage() {
  EARN_RULES.reduce((s, r2) => s + (r2.topEarner?.monthly || 0), 0);
  const sumOfPotential = EARN_RULES.reduce((s, r2) => s + expectedMonthlyEarning(r2, 8), 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-950 text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-slate-800", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.35),transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-6xl mx-auto px-4 md:px-8 pt-8 md:pt-14 pb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/home", className: "text-xs text-slate-400 hover:text-white", children: "← Back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-orange-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
          " Make money with Gharpayy"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-3xl md:text-5xl font-black leading-tight", children: "10 ways to earn from real Bengaluru rentals." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-base text-slate-300 max-w-2xl", children: "Pick a channel that matches your network. Each one ships with copy, posters, scripts and a Gharpayy Expert who actually closes the deal. Cash out weekly via UPI." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-2 md:grid-cols-4 gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Wallet, label: "Top earner this month", value: `₹${Math.round(64e3).toLocaleString()}`, tone: "text-emerald-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: TrendingUp, label: "Combined potential", value: `₹${sumOfPotential.toLocaleString()}/mo`, tone: "text-orange-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Trophy, label: "Active earners", value: "218 this week", tone: "text-blue-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Flame, label: "Paid in last 7 days", value: "₹4.7L", tone: "text-rose-300" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-10 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-orange-400 font-black", children: "The 10 ways" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl md:text-2xl font-black", children: "Pick one. Start today." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-500 hidden md:block", children: "Each card → playbook → WhatsApp link." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", children: EARN_RULES.map((r2, i) => {
          const monthly = expectedMonthlyEarning(r2, 8);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              href: `/earn/${r2.id}`,
              className: "group relative bg-slate-900 border border-slate-800 hover:border-orange-500/50 rounded-2xl p-5 transition shadow-lg hover:shadow-orange-500/10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 text-[10px] font-mono text-slate-600", children: [
                  "#",
                  String(i + 1).padStart(2, "0")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: r2.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-black text-white text-base leading-tight", children: r2.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] text-slate-400 leading-snug", children: r2.blurb }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-1.5 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-1.5 py-0.5 rounded-md text-[9px] font-black border ${DIFF_TONE[r2.difficulty]}`, children: r2.difficulty }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded-md text-[9px] font-black bg-slate-800 text-slate-300", children: [
                    "⏱ ",
                    r2.timePerWeek
                  ] }),
                  r2.bestZone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded-md text-[9px] font-black bg-orange-500/15 text-orange-300 border border-orange-500/30", children: [
                    "📍 ",
                    r2.bestZone
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-slate-800 flex items-end justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-widest text-slate-500", children: "Realistic / month" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-black text-orange-400 leading-none mt-0.5", children: [
                      "₹",
                      monthly.toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-widest text-slate-500", children: "Top earner" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-bold text-emerald-300 leading-none mt-0.5", children: [
                      "₹",
                      r2.topEarner?.monthly.toLocaleString()
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-500 leading-none mt-0.5", children: r2.topEarner?.name })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between text-[11px] font-bold text-slate-300 group-hover:text-orange-400 transition", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Open playbook" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition" })
                ] })
              ]
            },
            r2.id
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: "🤝" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-orange-400 font-black", children: "Why this works" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-white", children: "People earn here because Gharpayy ships real homes." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400 mt-1", children: "Every payout below is from a verified booking in one of our 5 zones. Renters don't pay more · owners pay Gharpayy, and Gharpayy shares with the friend who introduced you. That's it." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 md:grid-cols-5 gap-2", children: GHARPAYY_ZONES.map((z2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-slate-950/60 border border-slate-800 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full", style: { background: z2.color } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-black uppercase tracking-widest text-slate-300 truncate", children: z2.display })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 mt-1 truncate", children: z2.tagline })
        ] }, z2.slug)) })
      ] })
    ] })
  ] });
}
function Stat({ icon: Icon2, label, value, tone }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900/70 border border-slate-800 rounded-xl p-3 backdrop-blur", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[9px] uppercase tracking-widest text-slate-400 font-black", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-3 h-3" }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-1 text-lg font-black ${tone}`, children: value })
  ] });
}
function EarnPlaybookPage() {
  const [, params] = useRoute("/earn/:channel");
  const rule = EARN_BY_ID[params?.channel || ""];
  const [persona, setPersona] = reactExports.useState(PERSONAS$2[0]);
  const [zone, setZone] = reactExports.useState(GHARPAYY_ZONES[0]);
  if (!rule) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-white", children: "Channel not found." });
  const message = encodeURIComponent(
    `Hey! I'm sharing Gharpayy · direct-to-owner ${persona.title.toLowerCase()} stays in ${zone.display} (${zone.tagline}). Expert replies in minutes. Want me to intro? · code GHAR-YOU1`
  );
  const wa = `https://api.whatsapp.com/send?text=${message}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-slate-950 text-white p-4 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: "/earn", className: "text-xs text-slate-400 hover:text-white inline-flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3 h-3" }),
      " All channels"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-500/20 to-pink-500/10 border border-orange-500/30 rounded-2xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: rule.emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl md:text-3xl font-black mt-2", children: rule.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-300 mt-2", children: rule.blurb }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mt-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/30 rounded-lg py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-black text-blue-400", children: [
            "₹",
            rule.payoutOnLead
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-400 uppercase", children: "Per lead" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/30 rounded-lg py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-black text-orange-400", children: [
            "₹",
            rule.payoutOnTour
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-400 uppercase", children: "Per tour" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/30 rounded-lg py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-black text-green-400", children: [
            "₹",
            rule.payoutOnBooking
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-400 uppercase", children: "Per booking" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-xs text-orange-300 font-bold", children: [
        "~₹",
        expectedMonthlyEarning(rule, 8).toLocaleString(),
        "/month at 8 leads/mo"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "How to earn (3 steps)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-2 text-sm text-slate-300 list-decimal list-inside", children: rule.howTo.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: s }, s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Personalize your share" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: persona.id,
            onChange: (e) => setPersona(PERSONAS$2.find((p) => p.id === e.target.value)),
            className: "bg-slate-800 border border-slate-700 text-sm rounded-lg px-2 py-2",
            children: PERSONAS$2.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: p.id, children: [
              p.emoji,
              " ",
              p.title
            ] }, p.id))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: zone.slug,
            onChange: (e) => setZone(GHARPAYY_ZONES.find((z2) => z2.slug === e.target.value)),
            className: "bg-slate-800 border border-slate-700 text-sm rounded-lg px-2 py-2",
            children: GHARPAYY_ZONES.map((z2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: z2.slug, children: z2.display }, z2.slug))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-300", children: decodeURIComponent(message) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: wa,
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-black text-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
            " Share on WhatsApp"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: `/persona-kit/${persona.id}`, className: "block text-center text-xs text-orange-400 hover:underline", children: "Open full persona kit (opener · follow-up · objections) →" })
    ] }),
    rule.topEarner && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm text-slate-400 italic", children: [
      "🏆 Top earner this month: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: rule.topEarner.name }),
      " · ₹",
      rule.topEarner.monthly.toLocaleString()
    ] })
  ] }) });
}
function PersonaKitPage() {
  const [, params] = useRoute("/persona-kit/:id");
  const persona = PERSONA_BY_ID[params?.id || ""];
  if (!persona) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-white", children: "Persona not found." });
  const opener = persona.whatsappOpener;
  const followUp = `Quick check · did you get a chance to chat with the expert about ${persona.bestAreas[0]}? Happy to send 2 more options if helpful.`;
  const objection = `If they say "but brokers ask 1 month deposit" → reply: "Gharpayy caps deposit at 2 months and the expert handles paperwork. Send me the building name, I'll get you the verified rate."`;
  const voiceNote = `Hi, I'm sharing this from my friend who just moved to ${persona.bestAreas[0]} via Gharpayy. ${persona.storyQuote} · talk to the expert, no pressure.`;
  const copy = (s) => navigator.clipboard.writeText(s);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-slate-950 text-white p-4 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: "/earn", className: "text-xs text-slate-400 hover:text-white inline-flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3 h-3" }),
      " Earn hub"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: persona.emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-black", children: [
        persona.title,
        " · outreach kit"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400 mt-1", children: persona.short }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500 italic mt-1", children: [
        '"',
        persona.storyQuote,
        '"'
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KitCard, { title: "WhatsApp opener", body: opener, onCopy: copy }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KitCard, { title: "Follow-up (day 2)", body: followUp, onCopy: copy }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KitCard, { title: "Objection handler", body: objection, onCopy: copy }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KitCard, { title: "Voice-note script", body: voiceNote, onCopy: copy }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-orange-400 uppercase tracking-wider", children: "Best areas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-300 mt-1", children: persona.bestAreas.slice(0, 5).join(" · ") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-orange-400 uppercase tracking-wider mt-3", children: "Budget" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-slate-300 mt-1", children: [
        "₹",
        persona.budget[0].toLocaleString(),
        " – ₹",
        persona.budget[1].toLocaleString()
      ] })
    ] })
  ] }) });
}
function KitCard({ title, body, onCopy }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 border border-slate-800 rounded-xl p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-orange-400 uppercase tracking-wider", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onCopy(body), className: "text-[11px] text-slate-400 hover:text-white inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3" }),
        " Copy"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-200 leading-relaxed", children: body }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: `https://api.whatsapp.com/send?text=${encodeURIComponent(body)}`,
        target: "_blank",
        rel: "noreferrer",
        className: "inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-[11px] font-bold",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3 h-3" }),
          " Send on WhatsApp"
        ]
      }
    )
  ] });
}
const uid$1 = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const K$1 = (n) => `bookos_${n}_v1`;
const listeners$1 = /* @__PURE__ */ new Set();
const notify$1 = () => listeners$1.forEach((f) => f());
const subscribe$1 = (fn) => {
  listeners$1.add(fn);
  return () => listeners$1.delete(fn);
};
const load$1 = (k) => {
  if (typeof localStorage === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(k) || "[]");
  } catch {
    return [];
  }
};
const save$1 = (k, d) => {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(k, JSON.stringify(d));
};
function makeDB$1(name) {
  const key = K$1(name);
  return {
    key,
    all() {
      return load$1(key);
    },
    get(id) {
      return load$1(key).find((x) => x.id === id);
    },
    where(fn) {
      return load$1(key).filter(fn);
    },
    create(data) {
      const all = load$1(key);
      const row = { id: uid$1(), ...data };
      all.unshift(row);
      save$1(key, all);
      notify$1();
      return row;
    },
    update(id, patch) {
      const all = load$1(key);
      const i = all.findIndex((x) => x.id === id);
      if (i === -1) return null;
      all[i] = { ...all[i], ...patch };
      save$1(key, all);
      notify$1();
      return all[i];
    },
    del(id) {
      save$1(key, load$1(key).filter((x) => x.id !== id));
      notify$1();
    },
    replace(rows) {
      save$1(key, rows);
      notify$1();
    }
  };
}
const FloorsDB = makeDB$1("floors");
const RoomsXDB = makeDB$1("roomsx");
const BedsDB = makeDB$1("beds");
const FURNITURE = ["Bed", "Mattress", "Wardrobe", "Study Table", "Chair", "Mirror", "Shoe Rack", "Curtains", "Bedside Table"];
const UTILITIES = ["Fan", "AC", "Geyser", "Refrigerator", "Microwave", "Induction", "RO Water", "TV"];
const AMENITIES = ["Attached Bathroom", "Balcony", "Window", "Sunlight", "Cross Ventilation", "Pet Friendly"];
function readinessScore(r2) {
  let s = 0;
  s += { available: 35, reserved: 20, quoted: 25, booked: 15, occupied: 0, notice: 10 }[r2.commercialStatus] ?? 0;
  s += { ready: 40, cleaning: 20, maintenance: 0, inspection_pending: 25, audit_pending: 25 }[r2.operationalStatus] ?? 0;
  s += { none: 25, movein_today: 15, movein_scheduled: 20, checkout_today: 10, checkout_tomorrow: 15 }[r2.turnaround] ?? 0;
  return Math.min(100, s);
}
function readyToSell(r2) {
  return ["available", "quoted"].includes(r2.commercialStatus) && r2.operationalStatus === "ready";
}
const ROOM_STATUS_COLOR = {
  available: "bg-emerald-500",
  reserved: "bg-amber-400",
  quoted: "bg-blue-400",
  booked: "bg-violet-500",
  occupied: "bg-rose-500",
  notice: "bg-orange-500"
};
const ROOM_STATUS_LABEL = {
  available: "Vacant",
  reserved: "Reserved",
  quoted: "Quoted",
  booked: "Booked",
  occupied: "Occupied",
  notice: "On notice"
};
function useInventoryStore(getter) {
  const [v, setV] = reactExports.useState(getter);
  reactExports.useEffect(() => {
    setV(getter());
    subscribe$1(() => setV(getter()));
    return () => {
    };
  }, []);
  return v;
}
function propertyHealth(p, rooms, rents, maint) {
  const total = rooms.length || 1;
  const occ = rooms.filter((r2) => ["occupied", "booked"].includes(r2.commercialStatus)).length / total;
  const collected = rents.filter((r2) => r2.propertyName === p.name && r2.status === "paid").length;
  const totalRents = Math.max(1, rents.filter((r2) => r2.propertyName === p.name).length);
  const collection = collected / totalRents;
  const openMaint = maint.filter((m) => m.propertyName === p.name && m.status !== "done").length;
  const maintScore = Math.max(0, 1 - openMaint / 10);
  return Math.round(occ * 25 + collection * 25 + maintScore * 15 + 0.8 * 15 + 0.7 * 10 + collection * 10);
}
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const K = (n) => `bookos_${n}_v1`;
const listeners = /* @__PURE__ */ new Set();
const notify = () => listeners.forEach((f) => f());
const subscribe = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};
const load = (k) => {
  if (typeof localStorage === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(k) || "[]");
  } catch {
    return [];
  }
};
const save = (k, d) => {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(k, JSON.stringify(d));
};
function makeDB(name) {
  const key = K(name);
  return {
    key,
    all() {
      return load(key);
    },
    get(id) {
      return load(key).find((x) => x.id === id);
    },
    where(fn) {
      return load(key).filter(fn);
    },
    create(data) {
      const all = load(key);
      const row = { id: uid(), ...data };
      all.unshift(row);
      save(key, all);
      notify();
      return row;
    },
    update(id, patch) {
      const all = load(key);
      const i = all.findIndex((x) => x.id === id);
      if (i === -1) return null;
      all[i] = { ...all[i], ...patch };
      save(key, all);
      notify();
      return all[i];
    },
    del(id) {
      save(key, load(key).filter((x) => x.id !== id));
      notify();
    },
    replace(rows) {
      save(key, rows);
      notify();
    }
  };
}
const VisitsDB = makeDB("visits");
const RoomEventsDB = makeDB("room_events");
const logRoom = (roomId, kind, title, detail, meta) => RoomEventsDB.create({ roomId, kind, title, detail, meta, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
const RoomBookingsDB = makeDB("room_bookings");
const USP = {
  size: ["Extra Large", "Large", "Medium", "Compact", "Small"],
  ventilation: ["Excellent", "Good", "Average", "Poor", "None"],
  window: ["Corner Window", "Full Window", "Large Window", "Medium Window", "Small Window", "No Window"],
  sunlight: ["Full Day", "Morning", "Evening", "Limited"],
  view: ["Balcony", "Garden", "Open", "Road", "Internal"],
  washroom: ["Attached", "Semi-attached", "Common"],
  noise: ["Silent", "Low", "Medium", "High"],
  position: ["Corner", "End Corridor", "Independent", "Near Lift", "Near Terrace"],
  furniture: ["Premium", "Standard", "Newly Installed"]
};
const READINESS_REASONS = {
  available: ["Ready now", "Ready today evening", "Ready tomorrow", "Ready after cleaning"],
  occupied: ["Tenant leaving today", "Tenant leaving this week", "Tenant leaving next month", "Renewal expected"],
  maintenance: ["Plumbing", "Electrical", "Furniture", "Painting", "Appliance issue"],
  cleaning: ["Standard cleaning", "Deep cleaning", "Sanitization"],
  inspection_pending: ["Operations check", "Owner approval"],
  notice: ["Notice served", "Awaiting handover"]
};
function computeSuggestedPrice(opts) {
  const base = opts.base || 0;
  const floorPrem = (opts.floor ?? 1) >= 2 ? (opts.floor - 1) * 250 : 0;
  const sizeMap = { "Extra Large": 1500, Large: 1e3, Medium: 500, Compact: 200, Small: 0 };
  const windowMap = { "Corner Window": 600, "Full Window": 500, "Large Window": 400, "Medium Window": 200, "Small Window": 100, "No Window": -500 };
  const ventMap = { Excellent: 400, Good: 200, Average: 0, Poor: -200, None: -500 };
  const washMap = { Attached: 1e3, "Semi-attached": 400, Common: 0 };
  const viewMap = { Balcony: 700, Garden: 500, Open: 300, Road: -100, Internal: 0 };
  const u = opts.usp || {};
  const breakdown = {
    base,
    floorPrem,
    size: sizeMap[u.size] || 0,
    window: windowMap[u.window] || 0,
    ventilation: ventMap[u.ventilation] || 0,
    washroom: washMap[u.washroom] || 0,
    view: viewMap[u.view] || 0,
    demand: Math.round((opts.demand || 0) * base * 0.05)
  };
  const total = Object.values(breakdown).reduce((s, v) => s + v, 0);
  return { suggested: Math.max(0, Math.round(total / 100) * 100), breakdown };
}
function generateMoveInPack(args) {
  const { booking, room, property } = args;
  const set = Settings.get();
  const addr = property?.address || `${property?.name}, ${property?.area}`;
  const maps = `https://maps.google.com/?q=${encodeURIComponent(addr || property?.name || "")}`;
  const lines = [
    `🏠 *${property?.name || booking?.propertyName}*`,
    `Booking confirmed for ${booking?.tenantName || ""}`,
    ``,
    `📍 Address: ${addr}`,
    `🗺 Maps: ${maps}`,
    ``,
    `🚪 Room: ${room?.roomNumber || booking?.roomNumber || "—"}`,
    `🛏 Sharing: ${room?.sharing || "—"}`,
    `📅 Move-in: ${booking?.moveInDate || "TBD"}`,
    ``,
    `💰 Rent: ₹${(booking?.discountedRent || room?.rent || 0).toLocaleString("en-IN")}/mo`,
    `🔒 Deposit: ₹${(booking?.deposit || 0).toLocaleString("en-IN")}`,
    `🎟 Token: ₹${(booking?.tokenAmount || 0).toLocaleString("en-IN")} ${booking?.paidRef ? "(paid · " + booking.paidRef + ")" : "(pending)"}`,
    ``,
    `👤 Property Manager: ${property?.ownerName || "—"}`,
    `📞 Manager #: ${property?.ownerPhone || set.adminPhone}`,
    `📞 24×7 Support: ${set.adminPhone}`,
    ``,
    `✅ Check-in: ${booking?.moveInDate || "TBD"} after 12 noon`,
    `📜 House rules + WiFi shared on move-in`,
    ``,
    `— Team ${set.brand}`
  ];
  const text = lines.join("\n");
  return {
    text,
    maps,
    waUrl: waLink(booking?.tenantPhone || "", text),
    address: addr,
    managerPhone: property?.ownerPhone || set.adminPhone
  };
}
const Ops = {
  setReadiness(roomId, patch) {
    const r2 = RoomsXDB.update(roomId, { ...patch, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
    if (r2) {
      logRoom(roomId, "readiness", "Readiness updated", `${patch.commercialStatus || r2.commercialStatus} · ${patch.operationalStatus || r2.operationalStatus}${patch.reason ? " · " + patch.reason : ""}`);
    }
    return r2;
  },
  updateUSP(roomId, usp) {
    const r2 = RoomsXDB.update(roomId, { usp, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
    if (r2) logRoom(roomId, "usp", "Selling points updated", Object.entries(usp).map(([k, v]) => `${k}: ${v}`).join(" · "));
    return r2;
  },
  updatePricing(roomId, rent, breakdown) {
    const r2 = RoomsXDB.update(roomId, { rent, priceBreakdown: breakdown, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
    if (r2) logRoom(roomId, "price", "Rent updated", `₹${rent.toLocaleString("en-IN")}`);
    return r2;
  },
  scheduleVisit(v) {
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    const visit = VisitsDB.create({
      ...v,
      status: "scheduled",
      probability: 60,
      createdAt: now2,
      updatedAt: now2
    });
    if (v.roomId) {
      const r2 = RoomsXDB.get(v.roomId);
      if (r2 && r2.commercialStatus === "available") RoomsXDB.update(v.roomId, { commercialStatus: "reserved", updatedAt: now2 });
      logRoom(v.roomId, "visit", `Visit scheduled · ${v.customerName}`, `${v.date} ${v.time} · ${v.customerPhone}`);
    }
    NotificationsDB.create({ title: `Visit scheduled · ${v.customerName}`, body: `${v.propertyName} · ${v.date} ${v.time}`, kind: "info", read: false, createdAt: now2, link: "/manager/bookos/visits" });
    return visit;
  },
  updateVisit(id, patch) {
    return VisitsDB.update(id, { ...patch, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  },
  createRoomBooking(args) {
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    const room = RoomsXDB.get(args.roomId);
    const prop = room ? PropertiesDB.all().find((p) => p.id === room.propertyId) : null;
    const rb = RoomBookingsDB.create({
      roomId: args.roomId,
      bedId: args.bedId,
      customerName: args.customerName,
      customerPhone: args.customerPhone,
      rent: args.rent,
      deposit: args.deposit,
      token: args.token,
      moveInDate: args.moveInDate,
      status: "token_pending",
      collected: { token: false, deposit: false, firstRent: false, agreement: false, kyc: false },
      createdAt: now2,
      updatedAt: now2
    });
    const b = BookingsDB.create({
      tenantName: args.customerName,
      tenantPhone: args.customerPhone,
      propertyName: prop?.name || "—",
      roomNumber: room?.roomNumber || null,
      moveInDate: args.moveInDate || null,
      actualRent: args.rent,
      discountedRent: args.rent,
      deposit: args.deposit,
      maintenanceFee: 0,
      maintenanceType: "One-Time",
      tokenAmount: args.token,
      stayDurationMonths: 11,
      noticePeriodMonths: 1,
      status: "pending",
      createdAt: now2,
      updatedAt: now2
    });
    RoomBookingsDB.update(rb.id, { bookingId: b.id });
    if (room) {
      RoomsXDB.update(room.id, { commercialStatus: "booked", updatedAt: now2 });
      logRoom(room.id, "booking", `Booking created · ${args.customerName}`, `₹${args.rent.toLocaleString()}/mo · token ₹${args.token.toLocaleString()}`);
    }
    NotificationsDB.create({ title: `Booking created · ${args.customerName}`, body: `${prop?.name} ${room?.roomNumber || ""} · ₹${args.token.toLocaleString()} token`, kind: "success", read: false, createdAt: now2, link: `/manager/bookos/bookings/${b.id}` });
    return { booking: b, roomBooking: rb };
  },
  collect(rbId, kind, amount, method = "UPI", ref) {
    const rb = RoomBookingsDB.get(rbId);
    if (!rb) return null;
    const collected = { ...rb.collected, [kind]: true };
    RoomBookingsDB.update(rbId, { collected });
    if (amount && (kind === "token" || kind === "deposit" || kind === "firstRent")) {
      PaymentsDB.create({ bookingId: rb.bookingId, tenantName: rb.customerName, amount, method, ref, type: kind === "firstRent" ? "rent" : kind, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
    }
    logRoom(rb.roomId, "payment", `${kind} collected`, amount ? `₹${amount.toLocaleString()}${ref ? " · " + ref : ""}` : void 0);
    return RoomBookingsDB.get(rbId);
  },
  approveMoveIn(rbId) {
    const rb = RoomBookingsDB.get(rbId);
    if (!rb) return null;
    const all = Object.values(rb.collected);
    if (!all.every(Boolean)) {
      alert("Complete the move-in checklist first");
      return null;
    }
    const room = RoomsXDB.get(rb.roomId);
    const prop = room ? PropertiesDB.all().find((p) => p.id === room.propertyId) : null;
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    RoomBookingsDB.update(rbId, { status: "movein_done" });
    RoomsXDB.update(rb.roomId, { commercialStatus: "occupied", updatedAt: now2 });
    TenantsDB.create({
      name: rb.customerName,
      phone: rb.customerPhone,
      propertyName: prop?.name || "—",
      roomNumber: room?.roomNumber,
      moveInDate: rb.moveInDate || now2.slice(0, 10),
      rent: rb.rent,
      deposit: rb.deposit,
      status: "active",
      createdAt: now2
    });
    const month = (rb.moveInDate || now2).slice(0, 7);
    RentsDB.create({ bookingId: rb.bookingId, tenantName: rb.customerName, propertyName: prop?.name || "—", month, amount: rb.rent, status: "paid", paidAt: now2, createdAt: now2 });
    logRoom(rb.roomId, "movein", `Move-in approved · ${rb.customerName}`, prop?.name);
    NotificationsDB.create({ title: `✓ Move-in: ${rb.customerName}`, body: `${prop?.name} ${room?.roomNumber}`, kind: "success", read: false, createdAt: now2, link: "/manager/bookos/movein" });
    return rb;
  }
};
function useOps(getter) {
  const [v, setV] = reactExports.useState(getter);
  reactExports.useEffect(() => {
    setV(getter());
    subscribe(() => setV(getter()));
    return () => {
    };
  }, []);
  return v;
}
const SEED_KEY = "bookos_seeded_v3";
const OPS_SEED_KEY = "bookos_ops_seeded_v1";
function seedIfEmpty() {
  if (typeof localStorage === "undefined") return;
  if (localStorage.getItem(SEED_KEY)) return;
  localStorage.setItem(SEED_KEY, "1");
  const now2 = Date.now();
  const iso = (offsetH = 0) => new Date(now2 - offsetH * 36e5).toISOString();
  const month = (m) => {
    const d = /* @__PURE__ */ new Date();
    d.setMonth(d.getMonth() - m);
    return d.toISOString().slice(0, 7);
  };
  const props = [
    { name: "Gharpayy Koramangala", area: "Koramangala", totalRooms: 24, occupiedRooms: 19, rentRange: "₹12K–₹22K", ownerName: "Ramesh", ownerPhone: "+919000000001" },
    { name: "Gharpayy HSR", area: "HSR Layout", totalRooms: 18, occupiedRooms: 15, rentRange: "₹13K–₹24K", ownerName: "Lakshmi", ownerPhone: "+919000000002" },
    { name: "Gharpayy Indiranagar", area: "Indiranagar", totalRooms: 16, occupiedRooms: 11, rentRange: "₹15K–₹28K", ownerName: "Anil", ownerPhone: "+919000000003" }
  ];
  const created = props.map((p) => PropertiesDB.create({ ...p, createdAt: iso(48) }));
  const commercials = ["available", "occupied", "occupied", "available", "quoted", "occupied", "notice", "reserved"];
  const operationals = ["ready", "ready", "ready", "cleaning", "ready", "maintenance", "ready", "ready"];
  const turnarounds = ["none", "none", "checkout_today", "none", "movein_today", "none", "checkout_tomorrow", "none"];
  created.forEach((p, pi) => {
    const floorCount = 3 + pi;
    for (let fn = 1; fn <= floorCount; fn++) {
      const f = FloorsDB.create({ propertyId: p.id, number: fn, createdAt: iso(48) });
      const roomsPerFloor = 4 + pi % 2;
      for (let rn = 1; rn <= roomsPerFloor; rn++) {
        const idx = fn * rn % commercials.length;
        const sharing = rn % 3 + 1;
        const rent = 1e4 + sharing * 4e3 + pi * 2e3;
        const room = RoomsXDB.create({
          propertyId: p.id,
          floorId: f.id,
          roomNumber: `${fn}0${rn}`,
          type: rn % 2 === 0 ? "Deluxe" : "Standard",
          gender: "any",
          sharing,
          rent,
          deposit: rent * 2,
          carpetArea: 100 + sharing * 40,
          ceilingHeight: 10,
          windows: 1 + rn % 2,
          furniture: ["Bed", "Mattress", "Wardrobe", "Study Table", "Chair"],
          utilities: rn % 2 === 0 ? ["Fan", "AC", "Geyser"] : ["Fan", "Geyser"],
          amenities: ["Attached Bathroom", "Window", ...rn % 3 === 0 ? ["Balcony"] : []],
          electrical: { usbPorts: 2 + rn % 3, sockets: 4, internetPoints: 1, smartSwitches: rn % 4 === 0 },
          commercialStatus: commercials[idx],
          operationalStatus: operationals[idx],
          turnaround: turnarounds[idx],
          createdAt: iso(48),
          updatedAt: iso(48)
        });
        for (let bi = 0; bi < sharing; bi++) {
          BedsDB.create({
            roomId: room.id,
            label: `Bed ${String.fromCharCode(65 + bi)}`,
            status: room.commercialStatus === "occupied" ? "occupied" : "vacant",
            createdAt: iso(48)
          });
        }
      }
    }
  });
  [
    { name: "Priya R", phone: "+919876500001", role: "Sales", active: true },
    { name: "Karan S", phone: "+919876500002", role: "Operations", active: true },
    { name: "Ankit M", phone: "+919876500003", role: "Maintenance", active: true }
  ].forEach((s) => StaffDB.create({ ...s, createdAt: iso(72) }));
  const bookings = [
    { tenantName: "Arjun Mehta", tenantPhone: "+919812345001", propertyName: "Gharpayy Koramangala", roomNumber: "204", actualRent: 18e3, discountedRent: 16500, deposit: 33e3, maintenanceFee: 1500, maintenanceType: "One-Time", tokenAmount: 2e3, stayDurationMonths: 11, noticePeriodMonths: 1, status: "paid", paidRef: "UPI-8821", offerExpiresAt: null, createdAt: iso(72), updatedAt: iso(70) },
    { tenantName: "Neha Kapoor", tenantPhone: "+919812345002", propertyName: "Gharpayy HSR", roomNumber: "112", actualRent: 22e3, discountedRent: 19500, deposit: 39e3, maintenanceFee: 1500, maintenanceType: "Monthly", tokenAmount: 2500, stayDurationMonths: 11, noticePeriodMonths: 1, status: "approved", offerExpiresAt: new Date(now2 + 12 * 6e4).toISOString(), createdAt: iso(2), updatedAt: iso(1) },
    { tenantName: "Vivek Sharma", tenantPhone: "+919812345003", propertyName: "Gharpayy Indiranagar", roomNumber: "301", actualRent: 25e3, discountedRent: 23e3, deposit: 46e3, maintenanceFee: 2e3, maintenanceType: "One-Time", tokenAmount: 3e3, stayDurationMonths: 11, noticePeriodMonths: 1, status: "pending", offerExpiresAt: null, createdAt: iso(1), updatedAt: iso(1) }
  ];
  bookings.forEach((b) => BookingsDB.create(b));
  TenantsDB.create({ name: "Arjun Mehta", phone: "+919812345001", propertyName: "Gharpayy Koramangala", roomNumber: "204", moveInDate: month(2) + "-01", rent: 16500, deposit: 33e3, status: "active", createdAt: iso(72) });
  TenantsDB.create({ name: "Rohit Das", phone: "+919812345010", propertyName: "Gharpayy HSR", roomNumber: "203", moveInDate: month(5) + "-01", rent: 17500, deposit: 35e3, status: "active", createdAt: iso(720) });
  TenantsDB.create({ name: "Megha P", phone: "+919812345011", propertyName: "Gharpayy Indiranagar", roomNumber: "202", moveInDate: month(8) + "-01", rent: 21e3, deposit: 42e3, status: "notice", createdAt: iso(1500) });
  for (let m = 0; m < 3; m++) {
    RentsDB.create({ tenantName: "Arjun Mehta", propertyName: "Gharpayy Koramangala", month: month(m), amount: 16500, status: m === 0 ? "pending" : "paid", paidAt: m === 0 ? null : iso(24 * (m * 30)), createdAt: iso(24) });
    RentsDB.create({ tenantName: "Rohit Das", propertyName: "Gharpayy HSR", month: month(m), amount: 17500, status: "paid", paidAt: iso(24 * (m * 30 + 2)), createdAt: iso(24) });
    RentsDB.create({ tenantName: "Megha P", propertyName: "Gharpayy Indiranagar", month: month(m), amount: 21e3, status: m === 0 ? "overdue" : "paid", paidAt: m === 0 ? null : iso(24 * (m * 30 + 4)), createdAt: iso(24) });
  }
  ["Q-1001", "Q-1002", "Q-1003"].forEach((s, i) => QuotationsDB.create({
    serial: s,
    tenantName: ["Aditya", "Pooja", "Riya"][i],
    tenantPhone: "+91981234600" + i,
    propertyName: props[i].name,
    roomNumber: String(101 + i),
    rent: 18e3 + i * 1e3,
    deposit: 36e3 + i * 2e3,
    maintenance: 1500,
    tokenAmount: 2e3,
    offerRent: 17e3 + i * 1e3,
    status: ["sent", "draft", "accepted"][i],
    createdAt: iso(12 * (i + 1))
  }));
  PaymentsDB.create({ tenantName: "Arjun Mehta", amount: 2e3, method: "UPI", ref: "UPI-8821", type: "token", createdAt: iso(70) });
  PaymentsDB.create({ tenantName: "Rohit Das", amount: 17500, method: "UPI", ref: "UPI-7710", type: "rent", createdAt: iso(48) });
  ExpensesDB.create({ category: "Electricity", vendor: "BESCOM", amount: 28400, propertyName: "Gharpayy Koramangala", date: month(0) + "-05", createdAt: iso(120) });
  ExpensesDB.create({ category: "Cleaning", vendor: "SwachhCo", amount: 12e3, propertyName: "Gharpayy HSR", date: month(0) + "-01", createdAt: iso(96) });
  MaintenanceDB.create({ title: "Geyser not heating", propertyName: "Gharpayy Koramangala", roomNumber: "204", priority: "high", status: "in_progress", assignee: "Ankit M", createdAt: iso(6) });
  MaintenanceDB.create({ title: "WiFi router replacement", propertyName: "Gharpayy HSR", priority: "med", status: "open", createdAt: iso(2) });
  MaintenanceDB.create({ title: "Repaint corridor", propertyName: "Gharpayy Indiranagar", priority: "low", status: "done", cost: 8500, createdAt: iso(200) });
  DocumentsDB.create({ title: "Arjun – Rent Agreement", type: "agreement", tenantName: "Arjun Mehta", propertyName: "Gharpayy Koramangala", createdAt: iso(72) });
  const areas = ["Koramangala", "HSR Layout", "Indiranagar", "Whitefield", "Marathahalli"];
  for (let i = 0; i < 120; i++) {
    EventsDB.create({ action: "view", area: areas[i % areas.length], propertyName: props[i % 3].name });
  }
  ["wa_click", "save", "quote_request", "visit_request", "booking_request"].forEach((a2, i) => {
    for (let j = 0; j < 3 + i; j++) EventsDB.create({ action: a2, area: areas[j % areas.length], propertyName: props[j % 3].name });
  });
  const seedLeads2 = [
    { name: "Tanvi", phone: "+919812345020", area: "Koramangala", propertyName: "Gharpayy Koramangala", action: "booking_request", stage: "booked", source: "detail" },
    { name: "Rahul", phone: "+919812345021", area: "HSR Layout", propertyName: "Gharpayy HSR", action: "visit_request", stage: "visit", source: "detail" },
    { name: "Sneha", phone: "+919812345022", area: "Indiranagar", propertyName: "Gharpayy Indiranagar", action: "quote_request", stage: "quoted", source: "listings" },
    { name: "Karthik", phone: "+919812345023", area: "Whitefield", action: "wa_click", stage: "qualified", source: "areas" },
    { name: "Anonymous", area: "Marathahalli", action: "view", stage: "new", source: "areas" }
  ];
  seedLeads2.forEach((l) => LeadsDB.create(l));
  NotificationsDB.create({ title: "Welcome to Booking OS 3.0", body: "Room twin, visits war room, move-in center & founder tower now live.", kind: "info", read: false, createdAt: iso(0) });
  NotificationsDB.create({ title: "1 rent overdue", body: "Megha P · ₹21,000", kind: "warn", read: false, createdAt: iso(0), link: "/manager/bookos/rents" });
  ActivityDB.create({ action: "seeded_v3", entity: "system", createdAt: iso(0) });
  seedOpsIfEmpty();
}
function seedOpsIfEmpty() {
  if (typeof localStorage === "undefined") return;
  if (localStorage.getItem(OPS_SEED_KEY)) return;
  localStorage.setItem(OPS_SEED_KEY, "1");
  const now2 = Date.now();
  const iso = (offsetH = 0) => new Date(now2 - offsetH * 36e5).toISOString();
  const rooms = RoomsXDB.all();
  const props = PropertiesDB.all();
  const USP_SAMPLES = [
    { size: "Large", window: "Full Window", ventilation: "Excellent", view: "Balcony", washroom: "Attached", noise: "Low", position: "Corner", sunlight: "Morning", furniture: "Premium" },
    { size: "Medium", window: "Large Window", ventilation: "Good", view: "Garden", washroom: "Attached", noise: "Silent", position: "End Corridor", sunlight: "Full Day", furniture: "Standard" },
    { size: "Compact", window: "Medium Window", ventilation: "Average", view: "Internal", washroom: "Common", noise: "Medium", position: "Near Lift", sunlight: "Limited", furniture: "Standard" }
  ];
  rooms.slice(0, 9).forEach((r2, i) => {
    const usp = USP_SAMPLES[i % 3];
    RoomsXDB.update(r2.id, { usp });
    RoomEventsDB.create({ roomId: r2.id, kind: "usp", title: "USP catalogued", detail: `${usp.size} · ${usp.window} · ${usp.washroom}`, createdAt: iso(72 + i) });
    RoomEventsDB.create({ roomId: r2.id, kind: "readiness", title: "Readiness updated", detail: `${r2.commercialStatus} · ${r2.operationalStatus}`, createdAt: iso(48 + i) });
    if (i % 3 === 0) RoomEventsDB.create({ roomId: r2.id, kind: "visit", title: "Visit scheduled", detail: "Demo customer · evening", createdAt: iso(24 + i) });
  });
  const staffNames = ["Priya R", "Karan S", "Ankit M"];
  const samplesV = [
    { idx: 0, name: "Rahul Verma", phone: "+919812345040", h: 4, t: "18:00", status: "scheduled", prob: 75 },
    { idx: 1, name: "Sneha Iyer", phone: "+919812345041", h: 6, t: "16:30", status: "confirmed", prob: 85 },
    { idx: 2, name: "Aman Sinha", phone: "+919812345042", h: 28, t: "11:00", status: "scheduled", prob: 60 },
    { idx: 3, name: "Riya Shah", phone: "+919812345043", h: -2, t: "19:00", status: "completed", prob: 90 },
    { idx: 4, name: "Vikram Roy", phone: "+919812345044", h: -26, t: "17:00", status: "converted", prob: 100 }
  ];
  samplesV.forEach((s, k) => {
    const r2 = rooms[s.idx];
    if (!r2) return;
    const p = props.find((x) => x.id === r2.propertyId);
    const dt = new Date(now2 + (s.h - 24) * 36e5);
    VisitsDB.create({
      propertyId: r2.propertyId,
      propertyName: p?.name || "",
      floorId: r2.floorId,
      roomId: r2.id,
      roomNumber: r2.roomNumber,
      customerName: s.name,
      customerPhone: s.phone,
      date: dt.toISOString().slice(0, 10),
      time: s.t,
      coordinatorName: staffNames[k % 3],
      managerName: staffNames[(k + 1) % 3],
      managerPhone: "+919876500001",
      status: s.status,
      probability: s.prob,
      createdAt: iso(s.h > 0 ? 1 : Math.abs(s.h)),
      updatedAt: iso(1)
    });
  });
  const r0 = rooms[0];
  if (r0) {
    props.find((x) => x.id === r0.propertyId);
    RoomBookingsDB.create({
      roomId: r0.id,
      customerName: "Pooja Nair",
      customerPhone: "+919812345050",
      rent: r0.rent,
      deposit: r0.rent * 2,
      token: 2500,
      moveInDate: new Date(now2 + 5 * 864e5).toISOString().slice(0, 10),
      status: "token_paid",
      collected: { token: true, deposit: false, firstRent: false, agreement: false, kyc: true },
      createdAt: iso(20),
      updatedAt: iso(2)
    });
    RoomEventsDB.create({ roomId: r0.id, kind: "booking", title: "Booking created · Pooja Nair", detail: `₹${r0.rent.toLocaleString()}/mo`, createdAt: iso(20) });
    RoomEventsDB.create({ roomId: r0.id, kind: "payment", title: "token collected", detail: `₹2,500 · UPI-DEMO`, createdAt: iso(18) });
  }
}
const ROUTES = [
  ["Overview", "/manager/bookos"],
  ["New booking", "/manager/bookos/bookings/new"],
  ["New quotation", "/manager/bookos/quotations/new"],
  ["Bookings", "/manager/bookos/bookings"],
  ["Quotations", "/manager/bookos/quotations"],
  ["Tenants", "/manager/bookos/tenants"],
  ["Rents", "/manager/bookos/rents"],
  ["Payments", "/manager/bookos/payments"],
  ["Properties", "/manager/bookos/properties"],
  ["Maintenance", "/manager/bookos/maintenance"],
  ["Expenses", "/manager/bookos/expenses"],
  ["Documents", "/manager/bookos/documents"],
  ["Staff", "/manager/bookos/staff"],
  ["Analytics", "/manager/bookos/analytics"],
  ["Notifications", "/manager/bookos/notifications"],
  ["Admin", "/manager/bookos/admin"],
  ["Settings", "/manager/bookos/settings"]
];
function CommandPalette({ onClose }) {
  const [, setLoc] = useLocation();
  const [q, setQ] = reactExports.useState("");
  const bookings = useStore(() => BookingsDB.all());
  const tenants = useStore(() => TenantsDB.all());
  const quotes = useStore(() => QuotationsDB.all());
  const items = reactExports.useMemo(() => {
    const t = q.toLowerCase();
    const all = [
      ...ROUTES.map(([label, to]) => ({ label, sub: "Go to", to })),
      ...bookings.map((b) => ({ label: `📅 ${b.tenantName}`, sub: `${b.propertyName} · ${b.status}`, to: `/manager/bookos/bookings/${b.id}` })),
      ...tenants.map((x) => ({ label: `👤 ${x.name}`, sub: `${x.propertyName}`, to: `/manager/bookos/tenants/${x.id}` })),
      ...quotes.map((x) => ({ label: `📄 ${x.serial} · ${x.tenantName}`, sub: x.propertyName, to: `/manager/bookos/quotations/${x.id}` }))
    ];
    if (!t) return all.slice(0, 12);
    return all.filter((i) => i.label.toLowerCase().includes(t) || i.sub.toLowerCase().includes(t)).slice(0, 14);
  }, [q, bookings, tenants, quotes]);
  reactExports.useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-start justify-center pt-24 px-4", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-amber-200 overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-slate-100 px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-slate-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          autoFocus: true,
          value: q,
          onChange: (e) => setQ(e.target.value),
          placeholder: "Search bookings, tenants, jump to module…",
          className: "flex-1 outline-none text-sm"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "text-[10px] text-slate-400", children: "esc" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-80 overflow-y-auto", children: [
      items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            setLoc(it.to);
            onClose();
          },
          className: "w-full text-left px-4 py-2.5 hover:bg-amber-50 flex items-center justify-between",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-900", children: it.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: it.sub })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-amber-700", children: "↵" })
          ]
        },
        i
      )),
      !items.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-8 text-center text-sm text-slate-500", children: "No matches" })
    ] })
  ] }) });
}
const NAV$1 = [
  { to: "/manager/bookos", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/manager/bookos/founder", label: "Founder", icon: Gauge },
  { to: "/manager/bookos/command", label: "Command", icon: Crown },
  { to: "/manager/bookos/leads", label: "Leads", icon: Magnet },
  { to: "/manager/bookos/visits", label: "Visits", icon: MapPin },
  { to: "/manager/bookos/movein", label: "Move-in", icon: House },
  { to: "/manager/bookos/areas", label: "Demand", icon: TrendingUp },
  { to: "/manager/bookos/map", label: "Live map", icon: Map$1 },
  { to: "/manager/bookos/inventory", label: "Inventory", icon: Layers },
  { to: "/manager/bookos/bookings", label: "Bookings", icon: Calendar },
  { to: "/manager/bookos/quotations", label: "Quotations", icon: FileText },
  { to: "/manager/bookos/tenants", label: "Tenants", icon: Users },
  { to: "/manager/bookos/payments", label: "Payments", icon: IndianRupee },
  { to: "/manager/bookos/rents", label: "Rents", icon: Receipt },
  { to: "/manager/bookos/properties", label: "Properties", icon: Building2 },
  { to: "/manager/bookos/maintenance", label: "Maintenance", icon: Wrench },
  { to: "/manager/bookos/expenses", label: "Expenses", icon: Wallet },
  { to: "/manager/bookos/documents", label: "Docs", icon: FolderOpen },
  { to: "/manager/bookos/staff", label: "Staff", icon: UserCog },
  { to: "/manager/bookos/analytics", label: "Analytics", icon: ChartNoAxesColumn },
  { to: "/manager/bookos/notifications", label: "Inbox", icon: Bell },
  { to: "/manager/bookos/admin", label: "Admin", icon: Shield },
  { to: "/manager/bookos/settings", label: "Settings", icon: Settings$1 }
];
function BookOSShell({ title, eyebrow, actions, children }) {
  const [loc, setLoc] = useLocation();
  const [paletteOpen, setPaletteOpen] = reactExports.useState(false);
  const notifs = useStore(() => NotificationsDB.all());
  const unread = notifs.filter((n) => !n.read).length;
  reactExports.useEffect(() => {
    seedIfEmpty();
    Workflow.syncExpiry();
    Workflow.syncRentOverdue();
    const t = setInterval(() => {
      Workflow.syncExpiry();
    }, 5e3);
    return () => clearInterval(t);
  }, []);
  reactExports.useEffect(() => {
    const h = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen(true);
      } else if (!e.metaKey && !e.ctrlKey && !e.altKey) {
        const tag = e.target?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        if (e.key === "n") setLoc("/manager/bookos/bookings/new");
        if (e.key === "q") setLoc("/manager/bookos/quotations/new");
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [setLoc]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden lg:flex flex-col w-56 border-r border-amber-200/40 bg-white/70 backdrop-blur sticky top-0 h-screen overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-5 border-b border-amber-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.2em] text-amber-700", children: "GHARPAYY" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl text-slate-900", children: "Booking OS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 py-3 px-2 space-y-0.5", children: NAV$1.map((n) => {
          const active = n.exact ? loc === n.to : loc.startsWith(n.to);
          const Icon2 = n.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              href: n.to,
              className: `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${active ? "bg-gradient-to-r from-amber-100 to-amber-50 text-amber-900 font-semibold" : "text-slate-600 hover:bg-slate-100"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: n.label }),
                n.label === "Inbox" && unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded-full bg-red-500 text-white font-bold", children: unread })
              ]
            },
            n.to
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-t border-amber-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setPaletteOpen(true),
            className: "w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-xs text-slate-500 bg-slate-100 hover:bg-slate-200",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Command, { className: "w-3 h-3" }),
                " Command"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "text-[10px] bg-white border border-slate-200 rounded px-1 py-0.5", children: "⌘K" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-amber-200/40 bg-gradient-to-r from-white via-amber-50/40 to-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-6 lg:px-8 py-5 flex items-end justify-between gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.2em] text-amber-700 mb-1", children: eyebrow }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-2xl sm:text-3xl text-slate-900", style: { letterSpacing: "-0.02em" }, children: title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap", children: actions })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TodayPulse, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden px-3 pb-3 flex gap-1.5 overflow-x-auto scrollbar-hide", children: NAV$1.map((n) => {
            const active = n.exact ? loc === n.to : loc.startsWith(n.to);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                href: n.to,
                className: `shrink-0 text-xs px-3 py-1.5 rounded-full border ${active ? "bg-amber-100 border-amber-300 text-amber-900 font-semibold" : "bg-white border-slate-200 text-slate-600"}`,
                children: n.label
              },
              n.to
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 sm:p-6 lg:p-8", children })
      ] })
    ] }) }),
    paletteOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(CommandPalette, { onClose: () => setPaletteOpen(false) })
  ] });
}
function TodayPulse() {
  const bookings = useStore(() => BookingsDB.all());
  const rents = useStore(() => RentsDB.all());
  const s = useStore(() => bookingStats());
  const r2 = useStore(() => rentStats());
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const newToday = bookings.filter((b) => b.createdAt.slice(0, 10) === today).length;
  const liveOffers = bookings.filter((b) => b.status === "approved").length;
  const overdue = rents.filter((x) => x.status === "overdue").length;
  const items = [
    { k: "Today", v: newToday, hint: "new bookings", tone: "amber" },
    { k: "Live offers", v: liveOffers, hint: "15-min timers", tone: "emerald" },
    { k: "Pending", v: s.pending, hint: "awaiting approve", tone: "amber" },
    { k: "Overdue rent", v: overdue, hint: "auto-flagged", tone: overdue > 0 ? "rose" : "slate" },
    { k: "Collected", v: `₹${Math.round(r2.collected / 1e3)}k`, hint: "this month", tone: "emerald" }
  ];
  const toneCls = {
    amber: "text-amber-700",
    emerald: "text-emerald-700",
    rose: "text-rose-700",
    slate: "text-slate-700"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 sm:px-6 lg:px-8 pb-3 -mt-1 flex gap-2 overflow-x-auto scrollbar-hide", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      href: "/manager/bookos/command",
      className: "shrink-0 rounded-xl border border-amber-200/60 bg-white/80 backdrop-blur px-3 py-1.5 flex items-center gap-2 hover:border-amber-300",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-widest uppercase text-slate-500", children: i.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-bold ${toneCls[i.tone]}`, children: i.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 hidden sm:inline", children: i.hint })
      ]
    },
    i.k
  )) });
}
function KPI({ label, value, sub, accent }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl border bg-white/80 backdrop-blur p-4 ${accent ? "border-amber-300" : "border-slate-200"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-slate-500 uppercase", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-1 text-2xl font-bold ${accent ? "text-amber-700" : "text-slate-900"}`, children: value }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500 mt-0.5", children: sub })
  ] });
}
function StatusChip({ status }) {
  const cls = chipClass(status);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${cls}`, children: status });
}
function chipClass(s) {
  const m = {
    pending: "bg-amber-100 text-amber-800 border-amber-200",
    approved: "bg-emerald-100 text-emerald-800 border-emerald-200",
    paid: "bg-emerald-200 text-emerald-900 border-emerald-300",
    expired: "bg-red-100 text-red-800 border-red-200",
    cancelled: "bg-slate-100 text-slate-600 border-slate-200",
    overdue: "bg-red-100 text-red-800 border-red-200",
    draft: "bg-slate-100 text-slate-700 border-slate-200",
    sent: "bg-blue-100 text-blue-800 border-blue-200",
    accepted: "bg-emerald-100 text-emerald-800 border-emerald-200",
    converted: "bg-amber-200 text-amber-900 border-amber-300",
    active: "bg-emerald-100 text-emerald-800 border-emerald-200",
    notice: "bg-amber-100 text-amber-800 border-amber-200",
    exited: "bg-slate-100 text-slate-600 border-slate-200",
    open: "bg-amber-100 text-amber-800 border-amber-200",
    in_progress: "bg-blue-100 text-blue-800 border-blue-200",
    done: "bg-emerald-100 text-emerald-800 border-emerald-200",
    high: "bg-red-100 text-red-800 border-red-200",
    med: "bg-amber-100 text-amber-800 border-amber-200",
    low: "bg-slate-100 text-slate-600 border-slate-200"
  };
  return m[s] || "bg-slate-100 text-slate-700 border-slate-200";
}
function GoldBtn({ children, ...p }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { ...p, className: `inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm hover:from-amber-600 hover:to-amber-700 ${p.className || ""}`, children });
}
function OutlineBtn({ children, ...p }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { ...p, className: `inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 ${p.className || ""}`, children });
}
function EmptyState({ title, hint, cta }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-dashed border-amber-200 rounded-2xl p-10 text-center bg-white/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-serif text-slate-900", children: title }),
    hint && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-500 mt-1", children: hint }),
    cta && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: cta })
  ] });
}
function BookOSDashboard() {
  const bookings = useStore(() => BookingsDB.all());
  const s = useStore(() => bookingStats());
  const r2 = useStore(() => rentStats());
  reactExports.useEffect(() => {
    Workflow.syncExpiry();
  }, []);
  const spark = reactExports.useMemo(() => {
    const days = 14;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return Array.from({ length: days }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (days - 1 - i));
      const ds = d.toISOString().slice(0, 10);
      const v = bookings.filter((b) => b.createdAt.slice(0, 10) === ds).length;
      return { day: ds.slice(5), v: v + [2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 4, 7, 6, 8][i] };
    });
  }, [bookings]);
  const donut = [
    { name: "Paid", value: s.paid, color: "#10b981" },
    { name: "Live", value: s.approved, color: "#f59e0b" },
    { name: "Pending", value: s.pending, color: "#fbbf24" },
    { name: "Expired", value: s.expired, color: "#ef4444" }
  ].filter((d) => d.value > 0);
  const recent = bookings.slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    BookOSShell,
    {
      eyebrow: "WELCOME BACK",
      title: "One gilded console for every move-in",
      actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/bookings/new", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
          " New booking"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/quotations/new", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
          " Compose quote"
        ] }) })
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Token revenue", value: fmtShort(s.tokenRevenue), sub: `${s.paid} paid · avg ${fmtShort(s.avgTicket)}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Rent collected", value: fmtShort(r2.collected), sub: `Pending ${fmtShort(r2.pending)}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Overdue", value: fmtShort(r2.overdue), sub: "Auto-flagged" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Conversion", value: s.conversion + "%", sub: `${s.total} bookings` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              className: "lg:col-span-2 rounded-2xl border border-amber-200 bg-white/80 p-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-slate-500", children: "BOOKINGS · 14 DAYS" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl text-slate-900 mt-0.5", children: "Pipeline velocity" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-emerald-700 font-semibold flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3" }),
                    " live"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-44", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: spark, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g1", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#f59e0b", stopOpacity: 0.4 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#f59e0b", stopOpacity: 0 })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { fontSize: 12, borderRadius: 8, border: "1px solid #fde68a" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "v", stroke: "#d97706", fill: "url(#g1)", strokeWidth: 2 })
                ] }) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-slate-500", children: "STATUS MIX" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-44", children: donut.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: donut, dataKey: "value", innerRadius: 42, outerRadius: 68, paddingAngle: 2, children: donut.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell$1, { fill: d.color }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { fontSize: 12 } })
            ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-400 flex items-center justify-center h-full", children: "No bookings yet" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 text-[11px] mt-1", children: donut.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full", style: { background: d.color } }),
              " ",
              d.name,
              " ",
              d.value
            ] }, d.name)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-xl text-slate-900 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-amber-600" }),
              " Live offers"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: "/manager/bookos/bookings", className: "text-xs text-amber-700 font-semibold flex items-center gap-1", children: [
              "All ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3 h-3" })
            ] })
          ] }),
          bookings.filter((b) => b.status === "approved").length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-500 py-4", children: "No live offers. Approve a pending booking to start a 15-min timer." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: bookings.filter((b) => b.status === "approved").map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              href: `/manager/bookos/bookings/${b.id}`,
              className: "block rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-3 hover:shadow",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-900 text-sm", children: b.tenantName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono bg-amber-200 text-amber-900 px-2 py-0.5 rounded", children: countdown(b.offerExpiresAt) || "—" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-600 mt-0.5", children: [
                  b.propertyName,
                  " · ",
                  b.roomNumber || "—"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mt-1", children: [
                  "Offer ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-amber-700", children: fmt(b.discountedRent) }),
                  " · token ",
                  fmt(b.tokenAmount)
                ] })
              ]
            },
            b.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 pb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl text-slate-900", children: "Recent bookings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/bookings", className: "text-xs text-amber-700 font-semibold", children: "View all →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-slate-100", children: [
            recent.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                href: `/manager/bookos/bookings/${b.id}`,
                className: "flex items-center justify-between px-5 py-3 hover:bg-amber-50/50",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-slate-900 truncate", children: b.tenantName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500 truncate", children: [
                      b.propertyName,
                      " · ",
                      b.roomNumber || "—",
                      " · ",
                      timeAgo$3(b.createdAt)
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-slate-900", children: fmt(b.discountedRent) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: b.status })
                  ] })
                ]
              },
              b.id
            )),
            !recent.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-8 text-center text-sm text-slate-500", children: "No bookings yet." })
          ] })
        ] })
      ]
    }
  );
}
function BookingsList() {
  const all = useStore(() => BookingsDB.all());
  const s = useStore(() => bookingStats());
  const [filter, setFilter] = reactExports.useState("all");
  const [sel, setSel] = reactExports.useState([]);
  const filtered = filter === "all" ? all : all.filter((b) => b.status === filter);
  const toggle = (id) => setSel((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);
  const bulk = (fn) => {
    sel.forEach(fn);
    setSel([]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    BookOSShell,
    {
      eyebrow: "OPERATIONS",
      title: "Bookings",
      actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => downloadFile("bookings.csv", csv(all)), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
          " CSV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/bookings/new", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
          " New"
        ] }) })
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Total", value: s.total }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Pending", value: s.pending }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Live", value: s.approved }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Paid", value: s.paid }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Conversion", value: s.conversion + "%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5 mb-3", children: [
          ["all", "pending", "approved", "paid", "expired", "cancelled"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setFilter(f),
              className: `text-xs px-3 py-1.5 rounded-full border ${filter === f ? "bg-amber-100 border-amber-300 text-amber-900 font-semibold" : "bg-white border-slate-200 text-slate-600"}`,
              children: [
                f,
                " ",
                f !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-slate-400", children: s[f] ?? "" })
              ]
            },
            f
          )),
          sel.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-slate-500 self-center", children: [
              sel.length,
              " selected"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => bulk((id) => Workflow.approveBooking(id)), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3" }),
              " Approve"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => bulk((id) => BookingsDB.del(id)), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
              " Delete"
            ] })
          ] })
        ] }),
        !filtered.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyState,
          {
            title: "No bookings here",
            hint: "Create a new booking to get started",
            cta: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/bookings/new", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              " New booking"
            ] }) })
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-amber-200 bg-white/80 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-amber-50 text-[10px] uppercase tracking-wider text-slate-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 w-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: "Tenant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left hidden md:table-cell", children: "Property" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right", children: "Offer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right hidden sm:table-cell", children: "Token" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left hidden lg:table-cell", children: "When" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-100", children: filtered.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-amber-50/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: sel.includes(b.id), onChange: () => toggle(b.id) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: `/manager/bookos/bookings/${b.id}`, className: "font-semibold text-slate-900 hover:text-amber-700", children: b.tenantName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500 md:hidden", children: b.propertyName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 hidden md:table-cell text-slate-700", children: [
              b.propertyName,
              " ",
              b.roomNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-400", children: [
                "· ",
                b.roomNumber
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right font-semibold", children: fmt(b.discountedRent) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right hidden sm:table-cell text-slate-600", children: fmt(b.tokenAmount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: b.status }),
              b.status === "approved" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-amber-700", children: countdown(b.offerExpiresAt) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 hidden lg:table-cell text-xs text-slate-500", children: timeAgo$3(b.createdAt) })
          ] }, b.id)) })
        ] }) })
      ]
    }
  );
}
function NewBookingPage() {
  const [, setLoc] = useLocation();
  const set0 = Settings.get();
  const [err, setErr] = reactExports.useState("");
  const [f, setF] = reactExports.useState({
    tenantName: "",
    tenantPhone: "",
    propertyName: "",
    roomNumber: "",
    moveInDate: "",
    actualRent: "",
    discountedRent: "",
    deposit: "",
    maintenanceFee: "",
    maintenanceType: "One-Time",
    tokenAmount: "",
    stayDurationMonths: "11",
    noticePeriodMonths: "1",
    upiId: set0.upiId,
    adminPhone: set0.adminPhone,
    notes: ""
  });
  const upd = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = () => {
    const actual = +f.actualRent || 0;
    const offer = +f.discountedRent || 0;
    if (!f.tenantName || !f.tenantPhone || !f.propertyName || !actual || !offer || !f.deposit || !f.tokenAmount) {
      setErr("Please fill all required (*) fields.");
      return;
    }
    if (offer > actual) {
      setErr("Offer rent cannot exceed standard rent.");
      return;
    }
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    const b = BookingsDB.create({ ...f, actualRent: actual, discountedRent: offer, deposit: +f.deposit, maintenanceFee: +f.maintenanceFee || 0, tokenAmount: +f.tokenAmount, stayDurationMonths: +f.stayDurationMonths, noticePeriodMonths: +f.noticePeriodMonths, status: "pending", offerExpiresAt: null, createdAt: now2, updatedAt: now2 });
    ActivityDB.create({ action: "created", entity: "booking", entityId: b.id, createdAt: now2 });
    setLoc(`/manager/bookos/bookings/${b.id}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    BookOSShell,
    {
      eyebrow: "NEW",
      title: "Create booking",
      actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/bookings", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
        " Back"
      ] }) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl rounded-2xl border border-amber-200 bg-white/80 p-6", children: [
        err && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-sm text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded", children: err }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
          [
            ["tenantName", "Tenant name *"],
            ["tenantPhone", "Phone *"],
            ["propertyName", "Property *"],
            ["roomNumber", "Room number"],
            ["moveInDate", "Move-in date", "date"],
            ["actualRent", "Standard rent ₹ *", "number"],
            ["discountedRent", "Offer rent ₹ *", "number"],
            ["deposit", "Deposit ₹ *", "number"],
            ["maintenanceFee", "Maintenance ₹", "number"],
            ["tokenAmount", "Token ₹ *", "number"],
            ["stayDurationMonths", "Stay (months)", "number"],
            ["noticePeriodMonths", "Notice (months)", "number"],
            ["upiId", "UPI ID"],
            ["adminPhone", "Admin phone"]
          ].map(([k, lbl, type]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs text-slate-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-semibold", children: lbl }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: type || "text",
                value: f[k],
                onChange: upd(k),
                className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:border-amber-400 outline-none"
              }
            )
          ] }, k)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs text-slate-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-semibold", children: "Maintenance type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: f.maintenanceType, onChange: upd("maintenanceType"), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "One-Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Monthly" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block mt-3 text-xs text-slate-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-semibold", children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: f.notes, onChange: upd("notes"), rows: 3, className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2 justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/bookings", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OutlineBtn, { children: "Cancel" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GoldBtn, { onClick: submit, children: "Create booking" })
        ] })
      ] })
    }
  );
}
function BookingDetail() {
  const { id } = useParams();
  const b = useStore(() => BookingsDB.get(id));
  const set0 = Settings.get();
  const tpl = Templates.get();
  const [, force] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => {
      Workflow.syncExpiry();
      force((x) => x + 1);
    }, 1e3);
    return () => clearInterval(t);
  }, []);
  if (!b) return /* @__PURE__ */ jsxRuntimeExports.jsx(BookOSShell, { title: "Booking not found", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/bookings", className: "text-amber-700", children: "← Back" }) });
  const note = `Token for ${b.propertyName} ${b.roomNumber || ""}`;
  const upi = upiUrl(b.upiId || set0.upiId, set0.brand, b.tokenAmount, note);
  const mins = Math.max(0, Math.round((+new Date(b.offerExpiresAt || 0) - Date.now()) / 6e4));
  const waMsg = fillTemplate(tpl.offer, { name: b.tenantName, property: b.propertyName, room: b.roomNumber || "", rent: b.actualRent, offer: b.discountedRent, token: b.tokenAmount, mins: mins || set0.offerWindowMins });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    BookOSShell,
    {
      eyebrow: `BOOKING · ${b.status.toUpperCase()}`,
      title: b.tenantName,
      actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/bookings", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
        " Back"
      ] }) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: b.status }),
                b.status === "approved" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono bg-amber-100 text-amber-900 px-2 py-0.5 rounded", children: countdown(b.offerExpiresAt) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
                b.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: () => Workflow.approveBooking(b.id), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
                  " Approve & start timer"
                ] }),
                b.status === "approved" && /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: () => Workflow.markPaid(b.id, "UPI-" + Date.now().toString(36)), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                  " Mark paid"
                ] }),
                b.status === "expired" && /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => Workflow.approveBooking(b.id), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
                  " Reactivate"
                ] }),
                b.status !== "cancelled" && b.status !== "paid" && /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => Workflow.cancelBooking(b.id), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
                  " Cancel"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Standard", value: fmt(b.actualRent) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Offer", value: fmt(b.discountedRent), sub: `Save ${fmt(b.actualRent - b.discountedRent)}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Token", value: fmt(b.tokenAmount), sub: `Dep ${fmt(b.deposit)}` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-y-1.5 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Property:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: b.propertyName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Room:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: b.roomNumber || "—" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Phone:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: b.tenantPhone })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Move-in:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: b.moveInDate || "—" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Stay:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                  b.stayDurationMonths,
                  "m"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Notice:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                  b.noticePeriodMonths,
                  "m"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Maintenance:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                  fmt(b.maintenanceFee),
                  " (",
                  b.maintenanceType,
                  ")"
                ] })
              ] }),
              b.paidRef && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Paid ref:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: b.paidRef })
              ] })
            ] }),
            b.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm text-slate-600 bg-slate-50 rounded-lg p-2.5", children: b.notes })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-2", children: "WhatsApp offer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { readOnly: true, value: waMsg, rows: 5, className: "w-full text-sm border border-slate-200 rounded-lg p-2.5 bg-slate-50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: waLink(b.tenantPhone, waMsg), target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                " Send on WhatsApp"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => copyText(waMsg), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
                " Copy"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-amber-700", children: "UPI PAY" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-xl text-slate-900 mt-0.5", children: [
            "₹",
            b.tokenAmount.toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500 mb-3", children: b.upiId || set0.upiId }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-white border border-amber-200 p-3 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: qrUrl(upi), alt: "upi", className: "w-44 h-44" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { className: "flex-1", onClick: () => copyText(upi), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3" }),
              " Copy UPI"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: upi, className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoldBtn, { className: "w-full justify-center", children: "Open app" }) })
          ] })
        ] })
      ] })
    }
  );
}
function QuotationsList() {
  const all = useStore(() => QuotationsDB.all());
  const k = (s) => all.filter((q) => q.status === s).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    BookOSShell,
    {
      eyebrow: "QUOTES",
      title: "Quotations",
      actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => downloadFile("quotations.csv", csv(all)), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
          " CSV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/quotations/new", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
          " New quote"
        ] }) })
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Total", value: all.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Draft", value: k("draft") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Sent", value: k("sent") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Accepted", value: k("accepted") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Converted", value: k("converted") })
        ] }),
        !all.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No quotations yet", hint: "Compose your first quote", cta: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/quotations/new", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
          " New"
        ] }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-amber-200 bg-white/80 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-amber-50 text-[10px] uppercase tracking-wider text-slate-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: "Serial" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: "Tenant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left hidden md:table-cell", children: "Property" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right", children: "Rent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-100", children: all.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-amber-50/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono text-xs", children: q.serial }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: `/manager/bookos/quotations/${q.id}`, className: "font-semibold hover:text-amber-700", children: q.tenantName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: timeAgo$3(q.createdAt) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 hidden md:table-cell", children: q.propertyName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right font-semibold", children: fmt(q.offerRent || q.rent) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: q.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right", children: q.status !== "converted" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => Workflow.convertQuoteToBooking(q.id),
                className: "text-xs text-amber-700 font-semibold inline-flex items-center gap-1",
                children: [
                  "Convert ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                ]
              }
            ) })
          ] }, q.id)) })
        ] }) })
      ]
    }
  );
}
function NewQuotation() {
  const [, setLoc] = useLocation();
  const [f, setF] = reactExports.useState({ tenantName: "", tenantPhone: "", propertyName: "", roomNumber: "", rent: "", offerRent: "", deposit: "", maintenance: "", tokenAmount: "", notes: "" });
  const upd = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = () => {
    const serial = "Q-" + Date.now().toString().slice(-5);
    const q = QuotationsDB.create({ serial, ...f, rent: +f.rent || 0, offerRent: +f.offerRent || +f.rent || 0, deposit: +f.deposit || 0, maintenance: +f.maintenance || 0, tokenAmount: +f.tokenAmount || 0, status: "draft", createdAt: (/* @__PURE__ */ new Date()).toISOString() });
    ActivityDB.create({ action: "created", entity: "quotation", entityId: q.id, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
    setLoc(`/manager/bookos/quotations/${q.id}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    BookOSShell,
    {
      eyebrow: "NEW",
      title: "Compose quotation",
      actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/quotations", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
        " Back"
      ] }) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl rounded-2xl border border-amber-200 bg-white/80 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: [["tenantName", "Tenant"], ["tenantPhone", "Phone"], ["propertyName", "Property"], ["roomNumber", "Room"], ["rent", "Standard rent ₹", "number"], ["offerRent", "Offer rent ₹", "number"], ["deposit", "Deposit ₹", "number"], ["maintenance", "Maintenance ₹", "number"], ["tokenAmount", "Token ₹", "number"]].map(([k, lbl, type]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs text-slate-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-semibold", children: lbl }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: type || "text", value: f[k], onChange: upd(k), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" })
        ] }, k)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block mt-3 text-xs text-slate-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-semibold", children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: f.notes, onChange: upd("notes"), rows: 3, className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2 justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/quotations", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OutlineBtn, { children: "Cancel" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GoldBtn, { onClick: submit, children: "Save quote" })
        ] })
      ] })
    }
  );
}
function QuotationDetail() {
  const { id } = useParams();
  const q = useStore(() => QuotationsDB.get(id));
  const set0 = Settings.get();
  if (!q) return /* @__PURE__ */ jsxRuntimeExports.jsx(BookOSShell, { title: "Quote not found", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/quotations", className: "text-amber-700", children: "← Back" }) });
  const msg = "Hi " + q.tenantName + "! Quote for " + q.propertyName + " " + (q.roomNumber || "") + ": Rent ₹" + (q.offerRent || q.rent) + "/mo · Deposit ₹" + q.deposit + " · Token ₹" + q.tokenAmount + " to lock. — " + set0.brand;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    BookOSShell,
    {
      eyebrow: "QUOTE · " + q.serial,
      title: q.tenantName,
      actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/quotations", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
        " Back"
      ] }) }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: q.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              q.status === "draft" && /* @__PURE__ */ jsxRuntimeExports.jsx(OutlineBtn, { onClick: () => QuotationsDB.update(q.id, { status: "sent", sentAt: (/* @__PURE__ */ new Date()).toISOString() }), children: "Mark sent" }),
              q.status !== "converted" && /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: () => {
                const b = Workflow.convertQuoteToBooking(q.id);
                if (b) window.location.assign("/app/manager/bookos/bookings/" + b.id);
              }, children: [
                "Convert ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => window.print(), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4" }),
                " Print"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Standard", value: fmt(q.rent) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Offer", value: fmt(q.offerRent || q.rent) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Token", value: fmt(q.tokenAmount), sub: "Dep " + fmt(q.deposit) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Property:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: q.propertyName }),
              " · room ",
              q.roomNumber || "—"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Phone:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: q.tenantPhone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Maintenance:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: fmt(q.maintenance) })
            ] })
          ] }),
          q.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 bg-slate-50 p-2.5 rounded text-sm text-slate-700", children: q.notes })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-2", children: "Share" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { readOnly: true, value: msg, rows: 6, className: "w-full text-sm border border-slate-200 rounded-lg p-2.5 bg-slate-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: waLink(q.tenantPhone, msg), target: "_blank", rel: "noreferrer", className: "block mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { className: "w-full justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
            " WhatsApp"
          ] }) })
        ] })
      ] })
    }
  );
}
function tenantMetrics(t, rents) {
  const mine = rents.filter((r2) => r2.tenantName === t.name);
  const paid = mine.filter((r2) => r2.status === "paid").length;
  const overdue = mine.filter((r2) => r2.status === "overdue").length;
  const pending = mine.filter((r2) => r2.status === "pending").length;
  const total = mine.length || 1;
  const onTime = Math.round(paid / total * 100);
  const lifetime = mine.filter((r2) => r2.status === "paid").reduce((a2, b) => a2 + b.amount, 0);
  const dues = mine.filter((r2) => r2.status !== "paid").reduce((a2, b) => a2 + b.amount, 0);
  const tenureDays = Math.max(0, Math.floor((Date.now() - +new Date(t.createdAt)) / 864e5));
  let score = 50;
  score += Math.round(onTime * 0.4);
  score -= overdue * 12;
  score -= pending * 4;
  if (t.status === "notice") score -= 15;
  if (t.status === "exited") score = 0;
  score = Math.max(0, Math.min(100, score));
  return { onTime, lifetime, dues, tenureDays, overdue, pending, paid, score };
}
const SEGMENTS = [
  { id: "all", label: "All" },
  { id: "active", label: "Active" },
  { id: "notice", label: "On notice" },
  { id: "exited", label: "Exited" },
  { id: "overdue", label: "Has overdue", tone: "rose" },
  { id: "vip", label: "VIP", tone: "amber" },
  { id: "new", label: "New (≤30d)" }
];
function TenantsList() {
  useLocation();
  const tenants = useStore(() => TenantsDB.all());
  const rents = useStore(() => RentsDB.all());
  const [q, setQ] = reactExports.useState("");
  const [seg, setSeg] = reactExports.useState("all");
  const [view, setView] = reactExports.useState("list");
  const [sortBy, setSortBy] = reactExports.useState("recent");
  const [sel, setSel] = reactExports.useState([]);
  const enriched = reactExports.useMemo(() => tenants.map((t) => ({ ...t, m: tenantMetrics(t, rents) })), [tenants, rents]);
  const filtered = reactExports.useMemo(() => {
    let rows = enriched;
    if (q.trim()) {
      const s = q.toLowerCase();
      rows = rows.filter(
        (t) => t.name.toLowerCase().includes(s) || t.phone.includes(s) || (t.propertyName || "").toLowerCase().includes(s) || (t.roomNumber || "").toLowerCase().includes(s)
      );
    }
    if (seg === "active" || seg === "notice" || seg === "exited") rows = rows.filter((t) => t.status === seg);
    if (seg === "overdue") rows = rows.filter((t) => t.m.overdue > 0);
    if (seg === "vip") rows = rows.filter((t) => t.m.score >= 85 && t.m.lifetime > 5e4);
    if (seg === "new") rows = rows.filter((t) => t.m.tenureDays <= 30);
    const sorters = {
      recent: (a2, b) => +new Date(b.createdAt) - +new Date(a2.createdAt),
      rent: (a2, b) => b.rent - a2.rent,
      score: (a2, b) => b.m.score - a2.m.score,
      dues: (a2, b) => b.m.dues - a2.m.dues,
      name: (a2, b) => a2.name.localeCompare(b.name)
    };
    return [...rows].sort(sorters[sortBy]);
  }, [enriched, q, seg, sortBy]);
  const totals = reactExports.useMemo(() => {
    const active = enriched.filter((t) => t.status === "active");
    const mrr = active.reduce((a2, b) => a2 + (b.rent || 0), 0);
    const avgTenure = enriched.length ? Math.round(enriched.reduce((a2, b) => a2 + b.m.tenureDays, 0) / enriched.length) : 0;
    const atRisk = enriched.filter((t) => t.m.score < 50 && t.status !== "exited").length;
    const ltvSum = enriched.reduce((a2, b) => a2 + b.m.lifetime, 0);
    return { active: active.length, mrr, avgTenure, atRisk, ltvSum };
  }, [enriched]);
  const toggle = (id) => setSel((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);
  const allChecked = filtered.length > 0 && filtered.every((t) => sel.includes(t.id));
  const toggleAll = () => setSel(allChecked ? [] : filtered.map((t) => t.id));
  const bulkRemind = () => {
    if (!sel.length) return;
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    sel.forEach((id) => {
      const t = tenants.find((x) => x.id === id);
      if (!t) return;
      NotificationsDB.create({ title: "Reminder sent", body: `Rent reminder → ${t.name}`, kind: "info", read: false, createdAt: now2 });
      ActivityDB.create({ action: "tenant_reminded", entity: "tenant", entityId: id, meta: { name: t.name }, createdAt: now2 });
    });
    setSel([]);
  };
  const bulkNotice = () => {
    if (!sel.length || !confirm(`Mark ${sel.length} tenant(s) on notice?`)) return;
    sel.forEach((id) => TenantsDB.update(id, { status: "notice" }));
    setSel([]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    BookOSShell,
    {
      eyebrow: "PEOPLE",
      title: "Tenants",
      actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => downloadFile("tenants.csv", csv(filtered.map(({ m, ...t }) => t))), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
          " CSV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/bookings/new", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
          " Onboard tenant"
        ] }) })
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Total", value: enriched.length, sub: `${totals.active} active` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Monthly MRR", value: fmtShort(totals.mrr), sub: "active only" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Avg tenure", value: totals.avgTenure + "d", sub: "all tenants" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "At-risk", value: totals.atRisk, sub: "score < 50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Lifetime value", value: fmtShort(totals.ltvSum), sub: "all collected" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 backdrop-blur p-3 mb-4 flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[200px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-2.5 text-slate-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: q,
                onChange: (e) => setQ(e.target.value),
                placeholder: "Search name, phone, property, room…",
                className: "w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-amber-400"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: sortBy,
                onChange: (e) => setSortBy(e.target.value),
                className: "appearance-none pl-8 pr-8 py-2 rounded-xl border border-slate-200 bg-white text-sm font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "recent", children: "Newest first" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "score", children: "Health score ↓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rent", children: "Rent ↓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "dues", children: "Dues ↓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: "Name A–Z" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "w-4 h-4 absolute left-2.5 top-2.5 text-slate-400 pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3 absolute right-2.5 top-3 text-slate-400 pointer-events-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex rounded-xl border border-slate-200 bg-white overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("list"), className: `px-2.5 py-2 ${view === "list" ? "bg-amber-100 text-amber-800" : "text-slate-500"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("grid"), className: `px-2.5 py-2 ${view === "grid" ? "bg-amber-100 text-amber-800" : "text-slate-500"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { className: "w-4 h-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 overflow-x-auto mb-4 scrollbar-hide", children: SEGMENTS.map((s) => {
          const active = seg === s.id;
          const tone = s.tone === "rose" ? "border-rose-300 text-rose-700 bg-rose-50" : s.tone === "amber" ? "border-amber-300 text-amber-800 bg-amber-50" : "border-slate-200 text-slate-600 bg-white";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSeg(s.id),
              className: `shrink-0 text-xs px-3 py-1.5 rounded-full border transition-all ${active ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-600 font-semibold shadow-sm" : tone + " hover:border-amber-300"}`,
              children: s.label
            },
            s.id
          );
        }) }),
        sel.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 rounded-xl border border-amber-300 bg-gradient-to-r from-amber-50 to-white p-2.5 flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-amber-900 px-2", children: [
            sel.length,
            " selected"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: bulkRemind, className: "text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-amber-200 hover:bg-amber-50 inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-3 h-3" }),
            " Send rent reminder"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: bulkNotice, className: "text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-amber-200 hover:bg-amber-50 inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
            " Mark on notice"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSel([]), className: "ml-auto text-xs text-slate-500 px-2", children: "Clear" })
        ] }),
        !filtered.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          EmptyState,
          {
            title: q || seg !== "all" ? "No matches" : "No tenants yet",
            hint: q || seg !== "all" ? "Try a different filter." : "Tenants are auto-created when a booking is paid."
          }
        ) : view === "list" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-amber-200 bg-white/80 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gradient-to-r from-amber-50 to-white text-[10px] uppercase tracking-wider text-slate-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: allChecked, onChange: toggleAll }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: "Tenant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left hidden md:table-cell", children: "Property" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right", children: "Rent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 hidden lg:table-cell", children: "Health" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right hidden lg:table-cell", children: "LTV" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right hidden md:table-cell", children: "Dues" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 hidden xl:table-cell", children: "Tenure" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-100", children: filtered.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `hover:bg-amber-50/40 transition-colors ${sel.includes(t.id) ? "bg-amber-50/60" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: sel.includes(t.id), onChange: () => toggle(t.id) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: "/manager/bookos/tenants/" + t.id, className: "flex items-center gap-2.5 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 text-amber-900 grid place-items-center text-xs font-bold shrink-0", children: (t.name || "?").charAt(0).toUpperCase() }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold text-slate-900 group-hover:text-amber-700 truncate flex items-center gap-1", children: [
                  t.name,
                  t.m.score >= 85 && t.m.lifetime > 5e4 && /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-amber-400 text-amber-500" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: t.phone })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 hidden md:table-cell text-slate-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate max-w-[180px]", children: t.propertyName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
                "Room ",
                t.roomNumber || "—"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right font-semibold tabular-nums", children: fmt(t.rent) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 hidden lg:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HealthBar, { score: t.m.score }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right hidden lg:table-cell text-slate-700 tabular-nums", children: fmtShort(t.m.lifetime) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right hidden md:table-cell tabular-nums", children: t.m.dues > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-700 font-semibold", children: fmtShort(t.m.dues) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "—" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: t.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 hidden xl:table-cell text-xs text-slate-500", children: [
              t.m.tenureDays,
              "d"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${t.phone}`, onClick: (e) => e.stopPropagation(), className: "p-1.5 rounded-lg hover:bg-slate-100 text-slate-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: waLink(t.phone, `Hi ${t.name}, just a friendly check-in from Gharpayy.`), target: "_blank", rel: "noreferrer", onClick: (e) => e.stopPropagation(), className: "p-1.5 rounded-lg hover:bg-emerald-100 text-emerald-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" }) })
            ] }) })
          ] }, t.id)) })
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: filtered.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            href: "/manager/bookos/tenants/" + t.id,
            className: "rounded-2xl border border-amber-200 bg-white/80 p-4 hover:border-amber-400 hover:shadow-md transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 text-amber-900 grid place-items-center font-bold shrink-0", children: (t.name || "?").charAt(0).toUpperCase() }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold text-slate-900 truncate flex items-center gap-1", children: [
                    t.name,
                    t.m.score >= 85 && t.m.lifetime > 5e4 && /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-amber-400 text-amber-500" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: t.phone })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: t.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-600 mb-2 truncate", children: [
                t.propertyName,
                " · Room ",
                t.roomNumber || "—"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(HealthBar, { score: t.m.score }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mt-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 uppercase tracking-wider", children: "Rent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold", children: fmtShort(t.rent) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 uppercase tracking-wider", children: "LTV" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold", children: fmtShort(t.m.lifetime) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 uppercase tracking-wider", children: "Dues" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-bold ${t.m.dues > 0 ? "text-rose-700" : "text-slate-400"}`, children: t.m.dues > 0 ? fmtShort(t.m.dues) : "—" })
                ] })
              ] })
            ]
          },
          t.id
        )) })
      ]
    }
  );
}
function HealthBar({ score }) {
  const tone = score >= 75 ? "bg-emerald-500" : score >= 50 ? "bg-amber-500" : "bg-rose-500";
  const label = score >= 75 ? "Healthy" : score >= 50 ? "Watch" : "At risk";
  const labelTone = score >= 75 ? "text-emerald-700" : score >= 50 ? "text-amber-700" : "text-rose-700";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden min-w-[60px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${tone} rounded-full transition-all`, style: { width: `${score}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold tabular-nums ${labelTone}`, children: score }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] uppercase tracking-wider hidden xl:inline ${labelTone}`, children: label })
  ] });
}
function metrics(t, rents) {
  const mine = rents.filter((r2) => r2.tenantName === t.name);
  const paid = mine.filter((r2) => r2.status === "paid").length;
  const overdue = mine.filter((r2) => r2.status === "overdue").length;
  const pending = mine.filter((r2) => r2.status === "pending").length;
  const total = mine.length || 1;
  const onTime = Math.round(paid / total * 100);
  const lifetime = mine.filter((r2) => r2.status === "paid").reduce((a2, b) => a2 + b.amount, 0);
  const dues = mine.filter((r2) => r2.status !== "paid").reduce((a2, b) => a2 + b.amount, 0);
  const tenureDays = Math.max(0, Math.floor((Date.now() - +new Date(t.createdAt)) / 864e5));
  const tenureMonths = Math.max(1, Math.round(tenureDays / 30));
  let score = 50 + Math.round(onTime * 0.4) - overdue * 12 - pending * 4;
  if (t.status === "notice") score -= 15;
  if (t.status === "exited") score = 0;
  score = Math.max(0, Math.min(100, score));
  return { onTime, lifetime, dues, tenureDays, tenureMonths, overdue, pending, paid, total: mine.length, score };
}
function TenantDetail() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const t = useStore(() => TenantsDB.get(id));
  const rents = useStore(() => RentsDB.all().filter((r2) => r2.tenantName === (t?.name || "")));
  const bookings = useStore(() => BookingsDB.all().filter((b) => b.tenantName === (t?.name || "")));
  const tickets = useStore(() => MaintenanceDB.all().filter((m2) => m2.roomNumber === (t?.roomNumber || "") && m2.propertyName === (t?.propertyName || "")));
  const activity = useStore(() => ActivityDB.all().filter((a2) => a2.meta?.name === (t?.name || "") || a2.entityId === id).slice(0, 30));
  const [tab, setTab] = reactExports.useState("overview");
  const [editing, setEditing] = reactExports.useState(false);
  const [draft, setDraft] = reactExports.useState(t || {});
  const [note, setNote] = reactExports.useState("");
  if (!t) return /* @__PURE__ */ jsxRuntimeExports.jsx(BookOSShell, { title: "Tenant not found", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/tenants", className: "text-amber-700", children: "← Back to tenants" }) });
  const m = reactExports.useMemo(() => metrics(t, rents), [t, rents]);
  const markRentPaid = (r2) => {
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    RentsDB.update(r2.id, { status: "paid", paidAt: now2, ref: "MANUAL-" + Date.now().toString(36).slice(-6).toUpperCase() });
    PaymentsDB.create({ tenantName: t.name, amount: r2.amount, method: "UPI", type: "rent", createdAt: now2 });
    ActivityDB.create({ action: "rent_paid", entity: "rent", entityId: r2.id, meta: { name: t.name, month: r2.month, amount: r2.amount }, createdAt: now2 });
    NotificationsDB.create({ title: "Rent received", body: `${t.name} · ${r2.month} · ${fmt(r2.amount)}`, kind: "success", read: false, createdAt: now2, link: `/manager/bookos/tenants/${id}` });
  };
  const sendReminder = () => {
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    NotificationsDB.create({ title: "Reminder sent", body: `Rent reminder → ${t.name}`, kind: "info", read: false, createdAt: now2 });
    ActivityDB.create({ action: "tenant_reminded", entity: "tenant", entityId: id, meta: { name: t.name }, createdAt: now2 });
  };
  const changeStatus = (status) => {
    if (!confirm(`Mark ${t.name} as "${status}"?`)) return;
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    TenantsDB.update(id, { status });
    ActivityDB.create({ action: "tenant_status", entity: "tenant", entityId: id, meta: { name: t.name, status }, createdAt: now2 });
    NotificationsDB.create({ title: `Tenant ${status}`, body: t.name, kind: status === "exited" ? "warn" : "info", read: false, createdAt: now2 });
  };
  const raiseTicket = () => {
    const title = prompt("Maintenance issue?");
    if (!title) return;
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    MaintenanceDB.create({ title, propertyName: t.propertyName, roomNumber: t.roomNumber, priority: "med", status: "open", createdAt: now2 });
    ActivityDB.create({ action: "ticket_created", entity: "maintenance", entityId: id, meta: { name: t.name, title }, createdAt: now2 });
  };
  const addNote = () => {
    if (!note.trim()) return;
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    const existing = (t.notes || "").trim();
    const stamped = `[${(/* @__PURE__ */ new Date()).toLocaleString("en-IN", { hour12: false })}] ${note.trim()}`;
    TenantsDB.update(id, { notes: existing ? `${existing}
${stamped}` : stamped });
    ActivityDB.create({ action: "note_added", entity: "tenant", entityId: id, meta: { name: t.name }, createdAt: now2 });
    setNote("");
  };
  const saveEdit = () => {
    TenantsDB.update(id, {
      name: draft.name,
      phone: draft.phone,
      email: draft.email,
      propertyName: draft.propertyName,
      roomNumber: draft.roomNumber,
      rent: Number(draft.rent) || 0,
      deposit: Number(draft.deposit) || 0,
      moveInDate: draft.moveInDate
    });
    setEditing(false);
  };
  const removeTenant = () => {
    if (!confirm(`Permanently delete tenant ${t.name}? This won't delete bookings.`)) return;
    TenantsDB.del(id);
    setLocation("/manager/bookos/tenants");
  };
  const scoreTone = m.score >= 75 ? "from-emerald-500 to-emerald-600 text-white" : m.score >= 50 ? "from-amber-500 to-amber-600 text-white" : "from-rose-500 to-rose-600 text-white";
  const scoreLabel = m.score >= 75 ? "Healthy" : m.score >= 50 ? "Watch" : "At risk";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    BookOSShell,
    {
      eyebrow: "TENANT",
      title: t.name,
      actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${t.phone}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
          " Call"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: waLink(t.phone, `Hi ${t.name},`), target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
          " WhatsApp"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/tenants", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
          " Back"
        ] }) })
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-amber-50/40 p-5 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-amber-900 grid place-items-center text-2xl font-bold shrink-0 shadow-md", children: (t.name || "?").charAt(0).toUpperCase() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[200px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl text-slate-900", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: t.status }),
                m.score >= 85 && m.lifetime > 5e4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 border border-amber-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-amber-700" }),
                  " VIP"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-slate-600 mt-1", children: [
                t.propertyName,
                " · Room ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: t.roomNumber || "—" }),
                " · since ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
                  m.tenureMonths,
                  "mo"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500 mt-0.5", children: [
                t.phone,
                t.email ? ` · ${t.email}` : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl bg-gradient-to-br ${scoreTone} px-5 py-3 text-center shrink-0 shadow-md`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest opacity-90", children: "Health" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold tabular-nums", children: m.score }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider opacity-90", children: scoreLabel })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Monthly rent", value: fmt(t.rent) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Lifetime value", value: fmtShort(m.lifetime), sub: `${m.paid} months paid` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "On-time %", value: m.onTime + "%", sub: `${m.overdue} overdue · ${m.pending} pending` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Outstanding", value: m.dues > 0 ? fmtShort(m.dues) : "—", sub: "dues" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Deposit held", value: fmt(t.deposit), sub: t.moveInDate ? `Since ${t.moveInDate}` : "" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: sendReminder, className: "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border border-amber-200 bg-white hover:bg-amber-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-3.5 h-3.5" }),
            " Send rent reminder"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: raiseTicket, className: "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border border-amber-200 bg-white hover:bg-amber-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-3.5 h-3.5" }),
            " Raise ticket"
          ] }),
          t.status !== "notice" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => changeStatus("notice"), className: "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border border-amber-200 bg-white hover:bg-amber-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5" }),
            " Mark on notice"
          ] }),
          t.status !== "active" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => changeStatus("active"), className: "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
            " Mark active"
          ] }),
          t.status !== "exited" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => changeStatus("exited"), className: "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }),
            " Mark exited"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setEditing(true), className: "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-3.5 h-3.5" }),
            " Edit"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: removeTenant, className: "ml-auto inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border border-rose-200 bg-white text-rose-600 hover:bg-rose-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
            " Delete"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4 border-b border-amber-200 overflow-x-auto scrollbar-hide", children: [
          { id: "overview", label: "Overview" },
          { id: "ledger", label: `Rent ledger (${m.total})` },
          { id: "comms", label: "Notes" },
          { id: "docs", label: "Documents" },
          { id: "activity", label: `Activity (${activity.length})` }
        ].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setTab(x.id),
            className: `shrink-0 text-sm px-4 py-2 -mb-px font-semibold transition-colors ${tab === x.id ? "text-amber-700 border-b-2 border-amber-600" : "text-slate-500 hover:text-slate-700"}`,
            children: x.label
          },
          x.id
        )) }),
        tab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-lg mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-amber-600" }),
                " Snapshot"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field$3, { icon: Phone, label: "Phone", value: t.phone }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field$3, { icon: Mail, label: "Email", value: t.email || "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field$3, { icon: Calendar, label: "Move-in", value: t.moveInDate || "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field$3, { icon: Clock, label: "Tenure", value: `${m.tenureMonths} months (${m.tenureDays}d)` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field$3, { icon: IndianRupee, label: "Monthly rent", value: fmt(t.rent) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field$3, { icon: IndianRupee, label: "Deposit", value: fmt(t.deposit) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-lg mb-2", children: [
                "Linked bookings (",
                bookings.length,
                ")"
              ] }),
              !bookings.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-400 italic", children: "No bookings linked." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: bookings.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: `/manager/bookos/bookings/${b.id}`, className: "flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold text-slate-900", children: [
                    b.propertyName,
                    " · ",
                    b.roomNumber || "—"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
                    timeAgo$3(b.createdAt),
                    " · token ",
                    fmt(b.tokenAmount)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: b.status })
              ] }, b.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-lg mb-2 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Maintenance (",
                  tickets.length,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: raiseTicket, className: "text-xs font-semibold text-amber-700 inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                  " New"
                ] })
              ] }),
              !tickets.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-400 italic", children: "No tickets for this room." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: tickets.map((tk) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-900", children: tk.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: timeAgo$3(tk.createdAt) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: tk.priority }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: tk.status })
                ] })
              ] }, tk.id)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-lg mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-amber-600" }),
                " Lifecycle"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-5 space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1.5 top-1 bottom-1 w-px bg-gradient-to-b from-amber-300 via-amber-200 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineDot, { color: "emerald", title: "Onboarded", sub: t.moveInDate || timeAgo$3(t.createdAt) }),
                m.paid > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineDot, { color: "emerald", title: `${m.paid} rent payments`, sub: fmtShort(m.lifetime) }),
                m.overdue > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineDot, { color: "rose", title: `${m.overdue} overdue month${m.overdue > 1 ? "s" : ""}`, sub: fmtShort(m.dues) + " owed" }),
                t.status === "notice" && /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineDot, { color: "amber", title: "On notice", sub: "exit pending" }),
                t.status === "exited" && /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineDot, { color: "slate", title: "Exited" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-gradient-to-br from-white to-amber-50/50 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-2", children: "Renewal lens" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500 uppercase tracking-wider", children: "Likelihood" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-amber-700 mt-0.5", children: m.score >= 75 ? "High" : m.score >= 50 ? "Medium" : "Low" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-600 mt-2 leading-relaxed", children: m.score >= 75 ? "Strong on-time history. Offer loyalty discount on renewal." : m.score >= 50 ? "Mixed signals. Schedule a check-in this week." : "Risk of churn. Personal call recommended." })
            ] })
          ] })
        ] }),
        tab === "ledger" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-amber-200 bg-white/80 overflow-hidden", children: !rents.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No rent records yet" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-amber-50 text-[10px] uppercase tracking-wider text-slate-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2", children: "Month" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2", children: "Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-2", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2", children: "Paid on" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2", children: "Ref" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-100", children: rents.map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-amber-50/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-semibold", children: r2.month }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-right tabular-nums", children: fmt(r2.amount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: r2.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-slate-500", children: r2.paidAt ? new Date(r2.paidAt).toLocaleDateString("en-IN") : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-mono text-slate-500", children: r2.ref || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-right", children: r2.status !== "paid" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => markRentPaid(r2), className: "text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-700 hover:bg-emerald-200", children: "Mark paid" }) })
          ] }, r2.id)) })
        ] }) }),
        tab === "comms" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: note,
                onChange: (e) => setNote(e.target.value),
                onKeyDown: (e) => e.key === "Enter" && addNote(),
                placeholder: "Add a note — pinned to tenant record…",
                className: "flex-1 px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-amber-400"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: addNote, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              " Add"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-4", children: !t.notes ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-400 italic", children: "No notes yet. Notes capture context like preferences, complaints, payment promises." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-sm whitespace-pre-wrap font-sans text-slate-700 leading-relaxed", children: t.notes }) })
        ] }),
        tab === "docs" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: [
          { name: "Aadhaar / ID proof", icon: FilePenLine },
          { name: "Rental agreement", icon: FileText },
          { name: "Police verification", icon: FilePenLine },
          { name: "Move-in photos", icon: FileText },
          { name: "Deposit receipt", icon: FileText }
        ].map((d) => {
          const Icon2 = d.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-dashed border-amber-200 bg-white/60 p-5 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-6 h-6 mx-auto text-amber-600 mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-slate-800", children: d.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500 mt-1", children: "Not uploaded" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-3 text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200", children: "Upload" })
          ] }, d.name);
        }) }),
        tab === "activity" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-4 space-y-2", children: !activity.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No activity recorded" }) : activity.map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-2 hover:bg-amber-50/40 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-slate-800", children: a2.action.replace(/_/g, " ") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
              a2.meta?.month && `${a2.meta.month} · `,
              a2.meta?.amount && fmt(a2.meta.amount)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-400 shrink-0", children: timeAgo$3(a2.createdAt) })
        ] }, a2.id)) }),
        editing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm grid place-items-center p-4", onClick: () => setEditing(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl border border-amber-200 max-w-lg w-full p-6 shadow-2xl", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl text-slate-900", children: "Edit tenant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(false), className: "text-slate-400 hover:text-slate-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
            ["name", "Name", "text"],
            ["phone", "Phone", "tel"],
            ["email", "Email", "email"],
            ["propertyName", "Property", "text"],
            ["roomNumber", "Room", "text"],
            ["rent", "Rent", "number"],
            ["deposit", "Deposit", "number"],
            ["moveInDate", "Move-in", "date"]
          ].map(([k, lbl, type]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: k === "name" || k === "propertyName" ? "col-span-2" : "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1", children: lbl }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type,
                value: draft[k] ?? "",
                onChange: (e) => setDraft({ ...draft, [k]: e.target.value }),
                className: "w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-amber-400"
              }
            )
          ] }, k)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: saveEdit, className: "flex-1 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
              " Save"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(OutlineBtn, { onClick: () => setEditing(false), children: "Cancel" })
          ] })
        ] }) })
      ]
    }
  );
}
function Field$3({ icon: Icon2, label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-4 h-4 text-amber-600 mt-0.5 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-500", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-800 truncate", children: value })
    ] })
  ] });
}
function TimelineDot({ color, title, sub }) {
  const c = { emerald: "bg-emerald-500", rose: "bg-rose-500", amber: "bg-amber-500", slate: "bg-slate-400" };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -left-[14px] top-1.5 w-2.5 h-2.5 rounded-full ${c[color]} ring-2 ring-white` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-slate-800", children: title }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: sub })
  ] });
}
function PaymentsPage() {
  const all = useStore(() => PaymentsDB.all());
  const [f, setF] = reactExports.useState({ tenantName: "", amount: "", method: "UPI", type: "rent", ref: "" });
  const total = all.reduce((s, p) => s + p.amount, 0);
  const byType = (t) => all.filter((p) => p.type === t).reduce((s, p) => s + p.amount, 0);
  const add = () => {
    if (!f.tenantName || !f.amount) return;
    PaymentsDB.create({ tenantName: f.tenantName, amount: +f.amount, method: f.method, type: f.type, ref: f.ref, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
    setF({ tenantName: "", amount: "", method: "UPI", type: "rent", ref: "" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    BookOSShell,
    {
      eyebrow: "MONEY IN",
      title: "Payments",
      actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => downloadFile("payments.csv", csv(all)), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
        " CSV"
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Total", value: fmtShort(total) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Tokens", value: fmtShort(byType("token")) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Rent", value: fmtShort(byType("rent")) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Deposit", value: fmtShort(byType("deposit")) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 rounded-2xl border border-amber-200 bg-white/80 overflow-hidden", children: !all.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No payments recorded" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-amber-50 text-[10px] uppercase text-slate-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: "Tenant" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Amount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "hidden md:table-cell text-left", children: "Ref" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "When" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-100", children: all.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-semibold", children: p.tenantName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-xs", children: p.type }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-xs", children: p.method }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right px-3 font-semibold", children: fmt(p.amount) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "hidden md:table-cell text-xs text-slate-500", children: p.ref || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-xs text-slate-500 px-3", children: timeAgo$3(p.createdAt) })
            ] }, p.id)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-3", children: "Record payment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Tenant", value: f.tenantName, onChange: (e) => setF({ ...f, tenantName: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Amount", type: "number", value: f.amount, onChange: (e) => setF({ ...f, amount: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: f.type, onChange: (e) => setF({ ...f, type: e.target.value }), className: "px-3 py-2 border border-slate-200 rounded-lg text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rent", children: "Rent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "token", children: "Token" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "deposit", children: "Deposit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: f.method, onChange: (e) => setF({ ...f, method: e.target.value }), className: "px-3 py-2 border border-slate-200 rounded-lg text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "UPI" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Cash" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Bank" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Card" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Reference (optional)", value: f.ref, onChange: (e) => setF({ ...f, ref: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: add, className: "w-full justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                " Record"
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function RentsPage() {
  const all = useStore(() => RentsDB.all());
  const s = useStore(() => rentStats());
  const [filter, setFilter] = reactExports.useState("all");
  const filtered = filter === "all" ? all : all.filter((r2) => r2.status === filter);
  const markPaid = (id) => {
    const r2 = RentsDB.update(id, { status: "paid", paidAt: (/* @__PURE__ */ new Date()).toISOString() });
    if (r2) NotificationsDB.create({ title: "Rent received", body: r2.tenantName + " · " + fmt(r2.amount), kind: "success", read: false, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    BookOSShell,
    {
      eyebrow: "COLLECTION",
      title: "Rents",
      actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => downloadFile("rents.csv", csv(all)), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
        " CSV"
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Collected", value: fmtShort(s.collected) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Pending", value: fmtShort(s.pending) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Overdue", value: fmtShort(s.overdue) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Projected MRR", value: fmtShort(s.mrr) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 mb-3", children: ["all", "pending", "paid", "overdue"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: "text-xs px-3 py-1.5 rounded-full border " + (filter === f ? "bg-amber-100 border-amber-300 text-amber-900 font-semibold" : "bg-white border-slate-200 text-slate-600"), children: f }, f)) }),
        !filtered.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No rent records" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-amber-200 bg-white/80 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-amber-50 text-[10px] uppercase text-slate-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: "Tenant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left hidden md:table-cell", children: "Property" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Month" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", {})
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-100", children: filtered.map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-semibold", children: r2.tenantName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "hidden md:table-cell text-slate-600", children: r2.propertyName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center font-mono text-xs", children: r2.month }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right px-3 font-semibold", children: fmt(r2.amount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: r2.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 text-right", children: r2.status !== "paid" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => markPaid(r2.id), className: "text-xs text-emerald-700 font-semibold inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
              " Paid"
            ] }) })
          ] }, r2.id)) })
        ] }) })
      ]
    }
  );
}
function PropertiesPage() {
  const all = useStore(() => PropertiesDB.all());
  const [f, setF] = reactExports.useState({ name: "", area: "", totalRooms: "", occupiedRooms: "", rentRange: "" });
  const totalRooms = all.reduce((s, p) => s + (p.totalRooms || 0), 0);
  const occ = all.reduce((s, p) => s + (p.occupiedRooms || 0), 0);
  const occRate = totalRooms ? Math.round(occ / totalRooms * 100) : 0;
  const add = () => {
    if (!f.name || !f.area) return;
    PropertiesDB.create({ ...f, totalRooms: +f.totalRooms || 0, occupiedRooms: +f.occupiedRooms || 0, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
    setF({ name: "", area: "", totalRooms: "", occupiedRooms: "", rentRange: "" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BookOSShell, { eyebrow: "ASSETS", title: "Properties", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Properties", value: all.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Total rooms", value: totalRooms }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Occupied", value: occ }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Occupancy", value: occRate + "%" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-3", children: !all.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No properties yet" }) : all.map((p) => {
        const rate = p.totalRooms ? Math.round(p.occupiedRooms / p.totalRooms * 100) : 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-4 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-6 h-6 text-amber-700" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-900", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
              p.area,
              " · ",
              p.totalRooms,
              " rooms · ",
              p.rentRange
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-bold text-amber-700", children: [
              rate,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: "occupied" })
          ] })
        ] }, p.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-3", children: "Add property" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          [["name", "Name"], ["area", "Area"], ["totalRooms", "Total rooms", "number"], ["occupiedRooms", "Occupied", "number"], ["rentRange", "Rent range"]].map(([k, lbl, type]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              placeholder: lbl,
              type: type || "text",
              value: f[k],
              onChange: (e) => setF({ ...f, [k]: e.target.value }),
              className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
            },
            k
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: add, className: "w-full justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            " Add"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function DocsPage() {
  const all = useStore(() => DocumentsDB.all());
  const [f, setF] = reactExports.useState({ title: "", type: "agreement", tenantName: "", propertyName: "", url: "" });
  const add = () => {
    if (!f.title) return;
    DocumentsDB.create({ ...f, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
    setF({ title: "", type: "agreement", tenantName: "", propertyName: "", url: "" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BookOSShell, { eyebrow: "VAULT", title: "Documents", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Total", value: all.length }),
      ["agreement", "id", "invoice"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: t, value: all.filter((d) => d.type === t).length }, t))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-2", children: !all.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No documents" }) : all.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-amber-200 bg-white/80 p-3 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "w-5 h-5 text-amber-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm truncate", children: d.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
            d.type,
            " · ",
            d.tenantName || d.propertyName || "—",
            " · ",
            timeAgo$3(d.createdAt)
          ] })
        ] }),
        d.url && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: d.url, target: "_blank", rel: "noreferrer", className: "text-amber-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }) })
      ] }, d.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-3", children: "Add document" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Title", value: f.title, onChange: (e) => setF({ ...f, title: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: f.type, onChange: (e) => setF({ ...f, type: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "agreement", children: "Agreement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "id", children: "ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "invoice", children: "Invoice" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Tenant", value: f.tenantName, onChange: (e) => setF({ ...f, tenantName: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Property", value: f.propertyName, onChange: (e) => setF({ ...f, propertyName: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "URL (optional)", value: f.url, onChange: (e) => setF({ ...f, url: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: add, className: "w-full justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            " Add"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function ExpensesPage() {
  const all = useStore(() => ExpensesDB.all());
  const [f, setF] = reactExports.useState({ category: "", vendor: "", amount: "", propertyName: "", date: "" });
  const total = all.reduce((s, x) => s + x.amount, 0);
  const add = () => {
    if (!f.category || !f.amount) return;
    ExpensesDB.create({ ...f, amount: +f.amount, date: f.date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), createdAt: (/* @__PURE__ */ new Date()).toISOString() });
    setF({ category: "", vendor: "", amount: "", propertyName: "", date: "" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    BookOSShell,
    {
      eyebrow: "MONEY OUT",
      title: "Expenses",
      actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => downloadFile("expenses.csv", csv(all)), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
        " CSV"
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Total", value: fmtShort(total) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Entries", value: all.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Avg", value: fmtShort(all.length ? total / all.length : 0) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 rounded-2xl border border-amber-200 bg-white/80 overflow-hidden", children: !all.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No expenses" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-amber-50 text-[10px] uppercase text-slate-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left hidden md:table-cell", children: "Vendor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left hidden md:table-cell", children: "Property" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Amount" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-100", children: all.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-semibold", children: x.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "hidden md:table-cell text-slate-600", children: x.vendor || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "hidden md:table-cell text-slate-600", children: x.propertyName || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-xs font-mono", children: x.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right px-3 font-semibold", children: fmt(x.amount) })
            ] }, x.id)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-3", children: "Add expense" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              [["category", "Category"], ["vendor", "Vendor"], ["amount", "Amount", "number"], ["propertyName", "Property"], ["date", "Date", "date"]].map(([k, lbl, type]) => /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: lbl, type: type || "text", value: f[k], onChange: (e) => setF({ ...f, [k]: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }, k)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: add, className: "w-full justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                " Add"
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function MaintenancePage() {
  const all = useStore(() => MaintenanceDB.all());
  const [f, setF] = reactExports.useState({ title: "", propertyName: "", roomNumber: "", priority: "med", assignee: "" });
  const k = (s) => all.filter((m) => m.status === s).length;
  const add = () => {
    if (!f.title || !f.propertyName) return;
    MaintenanceDB.create({ ...f, status: "open", createdAt: (/* @__PURE__ */ new Date()).toISOString() });
    setF({ title: "", propertyName: "", roomNumber: "", priority: "med", assignee: "" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BookOSShell, { eyebrow: "OPS", title: "Maintenance", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Total", value: all.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Open", value: k("open") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "In progress", value: k("in_progress") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Done", value: k("done") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-2", children: !all.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No tickets" }) : all.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-amber-200 bg-white/80 p-3 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: m.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
            m.propertyName,
            " ",
            m.roomNumber && "· " + m.roomNumber,
            " · ",
            m.assignee || "unassigned",
            " · ",
            timeAgo$3(m.createdAt)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: m.priority }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: m.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: m.status, onChange: (e) => MaintenanceDB.update(m.id, { status: e.target.value }), className: "text-xs px-2 py-1 border border-slate-200 rounded", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "open", children: "open" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "in_progress", children: "in_progress" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "done", children: "done" })
        ] })
      ] }, m.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-3", children: "New ticket" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Title", value: f.title, onChange: (e) => setF({ ...f, title: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Property", value: f.propertyName, onChange: (e) => setF({ ...f, propertyName: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Room", value: f.roomNumber, onChange: (e) => setF({ ...f, roomNumber: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: f.priority, onChange: (e) => setF({ ...f, priority: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "low", children: "low" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "med", children: "med" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "high", children: "high" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Assignee", value: f.assignee, onChange: (e) => setF({ ...f, assignee: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: add, className: "w-full justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            " Add"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function StaffPage() {
  const all = useStore(() => StaffDB.all());
  const [f, setF] = reactExports.useState({ name: "", phone: "", role: "Sales" });
  const add = () => {
    if (!f.name) return;
    StaffDB.create({ ...f, active: true, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
    setF({ name: "", phone: "", role: "Sales" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BookOSShell, { eyebrow: "TEAM", title: "Staff", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Total", value: all.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Active", value: all.filter((s) => s.active).length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Inactive", value: all.filter((s) => !s.active).length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-2", children: !all.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No staff" }) : all.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-amber-200 bg-white/80 p-3 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center font-bold text-amber-700", children: s.name[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
            s.role,
            " · ",
            s.phone
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => StaffDB.update(s.id, { active: !s.active }), className: "text-xs px-2 py-1 rounded " + (s.active ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"), children: s.active ? "Active" : "Inactive" })
      ] }, s.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-3", children: "Add member" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Name", value: f.name, onChange: (e) => setF({ ...f, name: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Phone", value: f.phone, onChange: (e) => setF({ ...f, phone: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: f.role, onChange: (e) => setF({ ...f, role: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Sales" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Operations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Maintenance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Admin" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: add, className: "w-full justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            " Add"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function AnalyticsPage() {
  const bookings = useStore(() => BookingsDB.all());
  useStore(() => RentsDB.all());
  const pays = useStore(() => PaymentsDB.all());
  const exps = useStore(() => ExpensesDB.all());
  const s = bookingStats();
  const r2 = rentStats();
  const trend = reactExports.useMemo(() => {
    const days = 30;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return Array.from({ length: days }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (days - 1 - i));
      const ds = d.toISOString().slice(0, 10);
      return { day: ds.slice(5), bookings: bookings.filter((b) => b.createdAt.slice(0, 10) === ds).length + Math.round(Math.random() * 3), revenue: pays.filter((p) => p.createdAt.slice(0, 10) === ds).reduce((a2, p) => a2 + p.amount, 0) };
    });
  }, [bookings, pays]);
  const byProperty = reactExports.useMemo(() => {
    const map = {};
    bookings.forEach((b) => {
      map[b.propertyName] = (map[b.propertyName] || 0) + 1;
    });
    return Object.entries(map).map(([name, count]) => ({ name: name.replace("Gharpayy ", ""), count }));
  }, [bookings]);
  const totalExp = exps.reduce((a2, e) => a2 + e.amount, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BookOSShell, { eyebrow: "INSIGHTS", title: "Analytics", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Token revenue", value: fmtShort(s.tokenRevenue) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Rent collected", value: fmtShort(r2.collected) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Expenses", value: fmtShort(totalExp) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Net", value: fmtShort(s.tokenRevenue + r2.collected - totalExp) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-slate-500 mb-2", children: "REVENUE · 30D" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: trend, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "ga", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#10b981", stopOpacity: 0.4 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#10b981", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "day", tick: { fontSize: 10 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { fontSize: 11 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { dataKey: "revenue", stroke: "#059669", fill: "url(#ga)", strokeWidth: 2 })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-slate-500 mb-2", children: "BOOKINGS BY PROPERTY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: byProperty, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", tick: { fontSize: 10 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { fontSize: 11 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar$1, { dataKey: "count", fill: "#d97706", radius: [6, 6, 0, 0] })
        ] }) }) })
      ] })
    ] })
  ] });
}
function NotifsPage() {
  const all = useStore(() => NotificationsDB.all());
  const unread = all.filter((n) => !n.read).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    BookOSShell,
    {
      eyebrow: "INBOX",
      title: "Notifications",
      actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => all.forEach((n) => !n.read && NotificationsDB.update(n.id, { read: true })), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
        " Mark all read"
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Total", value: all.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Unread", value: unread })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-amber-200 bg-white/80 divide-y divide-slate-100", children: !all.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No notifications" }) : all.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => NotificationsDB.update(n.id, { read: true }), className: "w-full text-left flex items-start gap-3 p-4 " + (n.read ? "opacity-60" : "bg-amber-50/30"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 mt-0.5 " + (n.kind === "danger" || n.kind === "warn" ? "text-amber-600" : "text-slate-500") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: n.title }),
            n.body && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: n.body })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400", children: timeAgo$3(n.createdAt) })
        ] }, n.id)) })
      ]
    }
  );
}
function AdminPage() {
  const acts = useStore(() => ActivityDB.all());
  const b = useStore(() => BookingsDB.all());
  const t = useStore(() => TenantsDB.all());
  const q = useStore(() => QuotationsDB.all());
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BookOSShell, { eyebrow: "CONSOLE", title: "Admin", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Activity", value: acts.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Bookings", value: b.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Tenants", value: t.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Quotes", value: q.length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-3", children: "Live activity" }),
      !acts.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { title: "No activity yet" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 max-h-96 overflow-y-auto", children: acts.slice(0, 80).map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm border-b border-slate-100 py-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded", children: a2.action }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-600", children: a2.entity }),
          " ",
          a2.entityId && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-400 text-xs", children: [
            "· ",
            a2.entityId.slice(0, 8)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400", children: timeAgo$3(a2.createdAt) })
      ] }, a2.id)) })
    ] })
  ] });
}
function SettingsPage() {
  const [s, setS] = reactExports.useState(Settings.get());
  const [t, setT] = reactExports.useState(Templates.get());
  const save2 = () => {
    Settings.set(s);
    Templates.set(t);
    alert("Saved");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BookOSShell, { eyebrow: "CONFIG", title: "Settings", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-3", children: "Brand & payments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [["brand", "Brand"], ["upiId", "UPI ID"], ["adminPhone", "Admin phone"], ["offerWindowMins", "Offer window (min)", "number"]].map(([k, lbl, type]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs text-slate-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-semibold", children: lbl }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: type || "text", value: s[k], onChange: (e) => setS({ ...s, [k]: type === "number" ? +e.target.value : e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" })
        ] }, k)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-3", children: "WhatsApp templates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: ["offer", "reminder", "paid", "overdue"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs text-slate-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 font-semibold uppercase", children: k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: t[k], onChange: (e) => setT({ ...t, [k]: e.target.value }), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" })
        ] }, k)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoldBtn, { onClick: save2, children: "Save" }) })
  ] });
}
const STAGES = [
  { id: "new", label: "New", color: "border-slate-300 bg-slate-50" },
  { id: "qualified", label: "Qualified", color: "border-blue-300 bg-blue-50" },
  { id: "quoted", label: "Quoted", color: "border-amber-300 bg-amber-50" },
  { id: "visit", label: "Visit", color: "border-violet-300 bg-violet-50" },
  { id: "booked", label: "Booked", color: "border-emerald-300 bg-emerald-50" },
  { id: "lost", label: "Lost", color: "border-rose-300 bg-rose-50" }
];
function LeadsPage() {
  const leads = useLeadsStore(() => LeadsDB.all());
  const s = useLeadsStore(() => leadStats());
  const advance = (id, stage) => LeadsDB.update(id, { stage });
  const convertToBooking = (l) => {
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    const b = BookingsDB.create({
      tenantName: l.name || "Unknown",
      tenantPhone: l.phone || "",
      propertyName: l.propertyName || "—",
      roomNumber: l.roomNumber || null,
      moveInDate: l.moveInDate || null,
      actualRent: 15e3,
      discountedRent: 14e3,
      deposit: 28e3,
      maintenanceFee: 1500,
      maintenanceType: "One-Time",
      tokenAmount: 2e3,
      stayDurationMonths: 11,
      noticePeriodMonths: 1,
      status: "pending",
      createdAt: now2,
      updatedAt: now2
    });
    LeadsDB.update(l.id, { stage: "booked" });
    ActivityDB.create({ action: "lead_converted", entity: "lead", entityId: l.id, meta: { bookingId: b.id }, createdAt: now2 });
    NotificationsDB.create({ title: "Lead → Booking", body: `${l.name} · ${l.propertyName || "—"}`, kind: "success", read: false, createdAt: now2, link: `/manager/bookos/bookings/${b.id}` });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    BookOSShell,
    {
      eyebrow: "PIPELINE",
      title: "Leads from your public site",
      actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => {
        if (confirm("Clear all leads?")) LeadsDB.replace([]);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
        " Clear"
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-6 gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Total", value: s.total }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "New", value: s.new }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Qualified", value: s.qualified }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Quoted", value: s.quoted }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Visit", value: s.visit }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Booked", value: s.booked })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-3", children: STAGES.map((st) => {
          const items = leads.filter((l) => l.stage === st.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl border-2 ${st.color} p-3 min-h-[300px]`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-700", children: st.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold bg-white border border-slate-200 rounded-full px-2", children: items.length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              items.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white border border-slate-200 p-2.5 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-900 truncate", children: l.name || "Anon" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-slate-500 truncate", children: [
                  l.propertyName || l.area || "—",
                  l.roomNumber ? ` · #${l.roomNumber}` : ""
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-400 mt-0.5", children: [
                  timeAgo$3(l.createdAt),
                  " · score ",
                  l.score
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 mt-2", children: [
                  l.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${l.phone}`, className: "flex-1 inline-flex items-center justify-center gap-1 py-1 rounded-md bg-slate-100 text-slate-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }) }),
                  l.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://wa.me/${l.phone.replace(/\D/g, "")}`, target: "_blank", rel: "noreferrer", className: "flex-1 inline-flex items-center justify-center gap-1 py-1 rounded-md bg-emerald-100 text-emerald-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3 h-3" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => convertToBooking(l), className: "flex-1 inline-flex items-center justify-center gap-1 py-1 rounded-md bg-amber-100 text-amber-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mt-1", children: STAGES.filter((x) => x.id !== l.stage).slice(0, 3).map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => advance(l.id, x.id), className: "flex-1 text-[9px] py-0.5 rounded border border-slate-200 text-slate-500 hover:bg-slate-50", children: x.label }, x.id)) })
              ] }, l.id)),
              !items.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-400 italic", children: "empty" })
            ] })
          ] }, st.id);
        }) })
      ]
    }
  );
}
function AreasFunnelPage() {
  const rows = useLeadsStore(() => funnelByArea());
  const totalViews = rows.reduce((s, r2) => s + r2.views, 0);
  const totalBookings = rows.reduce((s, r2) => s + r2.bookings, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BookOSShell, { eyebrow: "DEMAND", title: "Area-level conversion funnel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Areas tracked", value: rows.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Total views", value: totalViews }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Bookings", value: totalBookings }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Conv %", value: totalViews ? Math.round(totalBookings / totalViews * 100) + "%" : "0%" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-amber-200 bg-white/80 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-amber-50/60 text-[10px] uppercase tracking-wider text-amber-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3", children: "Area" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3", children: "Views" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3", children: "Enquiries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3", children: "Quotes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3", children: "Visits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3", children: "Bookings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3", children: "Score" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-slate-100", children: [
        rows.map((r2) => {
          const score = r2.views + r2.bookings * 10 + r2.visits * 5;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-amber-50/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-semibold text-slate-900", children: r2.area }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right", children: r2.views }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right", children: r2.enquiries }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-amber-700", children: r2.quotes }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-violet-700", children: r2.visits }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-emerald-700 font-bold", children: r2.bookings }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right font-mono text-xs bg-amber-50/40", children: score })
          ] }, r2.area);
        }),
        !rows.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "p-10 text-center text-sm text-slate-400", children: "No demand events yet. Visit /areas or /pg from the public site." }) })
      ] })
    ] }) })
  ] });
}
const COMM = ["available", "reserved", "quoted", "booked", "occupied", "notice"];
const OPS = ["ready", "cleaning", "maintenance", "inspection_pending", "audit_pending"];
const TURN = ["none", "checkout_today", "checkout_tomorrow", "movein_today", "movein_scheduled"];
function MapPage() {
  const props = useStore(() => PropertiesDB.all());
  const rooms = useInventoryStore(() => RoomsXDB.all());
  const floors = useInventoryStore(() => FloorsDB.all());
  const [selectedProp, setSelectedProp] = reactExports.useState(null);
  const [open, setOpen] = reactExports.useState(null);
  const activeProp = selectedProp || props[0]?.id;
  const propRooms = rooms.filter((r2) => r2.propertyId === activeProp);
  const propFloors = floors.filter((f) => f.propertyId === activeProp).sort((a2, b) => a2.number - b.number);
  const stats = {
    total: propRooms.length,
    occupied: propRooms.filter((r2) => r2.commercialStatus === "occupied").length,
    vacant: propRooms.filter((r2) => r2.commercialStatus === "available").length,
    ready: propRooms.filter((r2) => readyToSell(r2)).length
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BookOSShell, { eyebrow: "LIVE MAP", title: "Occupancy & readiness map", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-3 mb-3", children: props.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setSelectedProp(p.id),
        className: `shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border ${activeProp === p.id ? "bg-amber-100 border-amber-300 text-amber-900" : "bg-white border-slate-200 text-slate-600"}`,
        children: p.name
      },
      p.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Total rooms", value: stats.total }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Occupied", value: stats.occupied }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Vacant", value: stats.vacant }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Sellable now", value: stats.ready })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 mb-4 text-[11px]", children: COMM.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-3 h-3 rounded-full ${ROOM_STATUS_COLOR[c]}` }),
      ROOM_STATUS_LABEL[c]
    ] }, c)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      propFloors.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-dashed border-amber-200 p-10 text-center text-sm text-slate-500", children: [
        "No floors yet. Add some from ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-amber-700 underline", href: "/app/manager/bookos/inventory", children: "Inventory" }),
        "."
      ] }),
      propFloors.map((f) => {
        const fr = propRooms.filter((r2) => r2.floorId === f.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-lg text-slate-900", children: [
              "Floor ",
              f.number,
              f.name ? ` · ${f.name}` : ""
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
              fr.length,
              " rooms"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2", children: [
            fr.map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setOpen(r2),
                className: `group relative aspect-square rounded-lg ${ROOM_STATUS_COLOR[r2.commercialStatus]} text-white text-[11px] font-bold flex flex-col items-center justify-center hover:scale-105 transition`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r2.roomNumber }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] opacity-80", children: [
                    r2.sharing,
                    "p"
                  ] })
                ]
              },
              r2.id
            )),
            !fr.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full text-[11px] text-slate-400 italic", children: "no rooms on this floor" })
          ] })
        ] }, f.id);
      })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4", onClick: () => setOpen(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl w-full max-w-md p-5 shadow-2xl border border-amber-200", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-amber-700", children: "ROOM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-2xl text-slate-900", children: [
            "#",
            open.roomNumber
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[10px] font-bold uppercase px-2 py-1 rounded-full text-white ${ROOM_STATUS_COLOR[open.commercialStatus]}`, children: ROOM_STATUS_LABEL[open.commercialStatus] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500 mb-3", children: [
        "Sharing ",
        open.sharing,
        " · ₹",
        open.rent.toLocaleString(),
        "/mo · Readiness ",
        readinessScore(open),
        "/100"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Commercial", value: open.commercialStatus, options: COMM, onChange: (v) => {
          RoomsXDB.update(open.id, { commercialStatus: v, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
          setOpen({ ...open, commercialStatus: v });
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Operational", value: open.operationalStatus, options: OPS, onChange: (v) => {
          RoomsXDB.update(open.id, { operationalStatus: v, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
          setOpen({ ...open, operationalStatus: v });
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Turnaround", value: open.turnaround, options: TURN, onChange: (v) => {
          RoomsXDB.update(open.id, { turnaround: v, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
          setOpen({ ...open, turnaround: v });
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          RoomsXDB.update(open.id, { operationalStatus: "ready", readyDate: (/* @__PURE__ */ new Date()).toISOString() });
          setOpen({ ...open, operationalStatus: "ready" });
        }, className: "py-2 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-semibold", children: "Ready today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          RoomsXDB.update(open.id, { turnaround: "checkout_today" });
          setOpen({ ...open, turnaround: "checkout_today" });
        }, className: "py-2 rounded-lg bg-orange-100 text-orange-800 text-xs font-semibold", children: "Checkout today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          RoomsXDB.update(open.id, { operationalStatus: "cleaning" });
          setOpen({ ...open, operationalStatus: "cleaning" });
        }, className: "py-2 rounded-lg bg-blue-100 text-blue-800 text-xs font-semibold", children: "Send to cleaning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          RoomsXDB.update(open.id, { operationalStatus: "maintenance" });
          setOpen({ ...open, operationalStatus: "maintenance" });
        }, className: "py-2 rounded-lg bg-rose-100 text-rose-800 text-xs font-semibold", children: "Block: maintenance" })
      ] })
    ] }) })
  ] });
}
function Select({ label, value, options, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-0.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value, onChange: (e) => onChange(e.target.value), className: "w-full px-3 py-2 border border-slate-200 rounded-lg text-sm", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, children: o.replace(/_/g, " ") }, o)) })
  ] });
}
function InventoryPage() {
  const props = useStore(() => PropertiesDB.all());
  const floors = useInventoryStore(() => FloorsDB.all());
  const rooms = useInventoryStore(() => RoomsXDB.all());
  const [activeProp, setActiveProp] = reactExports.useState(null);
  const [activeFloor, setActiveFloor] = reactExports.useState(null);
  const [showRoomForm, setShowRoomForm] = reactExports.useState(false);
  const propId = activeProp || props[0]?.id;
  const propFloors = floors.filter((f) => f.propertyId === propId).sort((a2, b) => a2.number - b.number);
  const floorId = activeFloor || propFloors[0]?.id;
  const propRooms = rooms.filter((r2) => r2.propertyId === propId && (!floorId || r2.floorId === floorId));
  const addFloor = () => {
    const n = prompt("Floor number?", String(propFloors.length + 1));
    if (!n) return;
    FloorsDB.create({ propertyId: propId, number: +n, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    BookOSShell,
    {
      eyebrow: "INVENTORY OS",
      title: "Property · Floor · Room · Bed",
      actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: () => setShowRoomForm(true), disabled: !propId || !floorId, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        " Add room"
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Properties", value: props.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Floors", value: floors.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Rooms", value: rooms.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Beds", value: rooms.reduce((s, r2) => s + (r2.sharing || 0), 0) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 rounded-2xl border border-amber-200 bg-white/80 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500 uppercase px-2 mb-1", children: "Property" }),
            props.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  setActiveProp(p.id);
                  setActiveFloor(null);
                },
                className: `w-full text-left px-3 py-2 rounded-lg text-sm ${propId === p.id ? "bg-amber-100 text-amber-900 font-semibold" : "text-slate-700 hover:bg-slate-50"}`,
                children: p.name
              },
              p.id
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 rounded-2xl border border-amber-200 bg-white/80 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500 uppercase", children: "Floors" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: addFloor, className: "text-xs text-amber-700 font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                " Add"
              ] })
            ] }),
            propFloors.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setActiveFloor(f.id),
                className: `w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between ${floorId === f.id ? "bg-amber-100 text-amber-900 font-semibold" : "text-slate-700 hover:bg-slate-50"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3.5 h-3.5" }),
                    " Floor ",
                    f.number
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
                    e.stopPropagation();
                    if (confirm("Delete floor + its rooms?")) {
                      rooms.filter((r2) => r2.floorId === f.id).forEach((r2) => RoomsXDB.del(r2.id));
                      FloorsDB.del(f.id);
                    }
                  }, className: "text-slate-400 hover:text-rose-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }) })
                ]
              },
              f.id
            )),
            !propFloors.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 px-2 py-3", children: "No floors yet." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 rounded-2xl border border-amber-200 bg-white/80 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-lg text-slate-900 mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DoorOpen, { className: "w-4 h-4 text-amber-600" }),
              " Rooms"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: [
              propRooms.map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: `/manager/bookos/room/${r2.id}`, className: "block rounded-xl border border-slate-200 bg-white p-3 hover:border-amber-300 hover:shadow-sm transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-slate-900", children: [
                      "#",
                      r2.roomNumber
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-500", children: [
                      r2.sharing,
                      "-share · ₹",
                      r2.rent.toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-bold uppercase px-1.5 py-0.5 rounded text-white ${ROOM_STATUS_COLOR[r2.commercialStatus]}`, children: ROOM_STATUS_LABEL[r2.commercialStatus] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 mt-2", children: [
                  (r2.utilities || []).slice(0, 3).map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-100", children: u }, u)),
                  r2.electrical?.usbPorts > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] px-1.5 py-0.5 rounded bg-violet-50 text-violet-800 border border-violet-100", children: [
                    r2.electrical.usbPorts,
                    "× USB"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-amber-700 font-semibold mt-2", children: "Open room →" })
              ] }, r2.id)),
              !propRooms.length && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full text-center text-xs text-slate-400 py-10 border-2 border-dashed border-amber-200 rounded-xl", children: [
                "No rooms — click ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Add room" }),
                "."
              ] })
            ] })
          ] })
        ] }),
        showRoomForm && /* @__PURE__ */ jsxRuntimeExports.jsx(RoomForm, { propertyId: propId, floorId, onClose: () => setShowRoomForm(false) })
      ]
    }
  );
}
function RoomForm({ propertyId, floorId, onClose }) {
  const [f, setF] = reactExports.useState({
    roomNumber: "",
    sharing: "2",
    rent: "15000",
    deposit: "30000",
    type: "Standard",
    gender: "any",
    carpetArea: "120",
    ceilingHeight: "10",
    windows: "1",
    furniture: ["Bed", "Mattress", "Wardrobe", "Study Table"],
    utilities: ["Fan", "Geyser"],
    amenities: ["Attached Bathroom", "Window"],
    usbPorts: "2",
    sockets: "4",
    internetPoints: "1",
    smartSwitches: false,
    commercialStatus: "available",
    operationalStatus: "ready",
    turnaround: "none"
  });
  const toggle = (k, v) => setF((x) => ({ ...x, [k]: x[k].includes(v) ? x[k].filter((y) => y !== v) : [...x[k], v] }));
  const submit = () => {
    if (!f.roomNumber) return alert("Room number required");
    const now2 = (/* @__PURE__ */ new Date()).toISOString();
    const room = RoomsXDB.create({
      propertyId,
      floorId,
      roomNumber: f.roomNumber,
      type: f.type,
      gender: f.gender,
      sharing: +f.sharing,
      carpetArea: +f.carpetArea,
      ceilingHeight: +f.ceilingHeight,
      windows: +f.windows,
      rent: +f.rent,
      deposit: +f.deposit,
      furniture: f.furniture,
      utilities: f.utilities,
      amenities: f.amenities,
      electrical: { usbPorts: +f.usbPorts, sockets: +f.sockets, internetPoints: +f.internetPoints, smartSwitches: f.smartSwitches },
      commercialStatus: f.commercialStatus,
      operationalStatus: f.operationalStatus,
      turnaround: f.turnaround,
      createdAt: now2,
      updatedAt: now2
    });
    for (let i = 0; i < +f.sharing; i++) {
      BedsDB.create({ roomId: room.id, label: `Bed ${String.fromCharCode(65 + i)}`, status: "vacant", createdAt: now2 });
    }
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-slate-900/50 backdrop-blur flex items-center justify-center p-4 overflow-y-auto", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl w-full max-w-3xl shadow-2xl border border-amber-200 my-8", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-slate-100 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-amber-700", children: "INVENTORY OS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl text-slate-900", children: "Add room with 100+ fields" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-slate-500 text-xl", children: "×" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4 max-h-[70vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { title: "Identity", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Room number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: f.roomNumber, onChange: (e) => setF({ ...f, roomNumber: e.target.value }), className: "i" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: f.type, onChange: (e) => setF({ ...f, type: e.target.value }), className: "i", children: ["Standard", "Deluxe", "Premium", "Suite"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: x }, x)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Gender" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: f.gender, onChange: (e) => setF({ ...f, gender: e.target.value }), className: "i", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "any", children: "Any" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "male", children: "Male" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "female", children: "Female" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Sharing capacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: f.sharing, onChange: (e) => setF({ ...f, sharing: e.target.value }), className: "i" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { title: "Dimensions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Carpet area (sqft)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: f.carpetArea, onChange: (e) => setF({ ...f, carpetArea: e.target.value }), className: "i" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Ceiling (ft)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: f.ceilingHeight, onChange: (e) => setF({ ...f, ceilingHeight: e.target.value }), className: "i" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Windows" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: f.windows, onChange: (e) => setF({ ...f, windows: e.target.value }), className: "i" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { title: "Commercials", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Rent (₹/mo)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: f.rent, onChange: (e) => setF({ ...f, rent: e.target.value }), className: "i" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Deposit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: f.deposit, onChange: (e) => setF({ ...f, deposit: e.target.value }), className: "i" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section$1, { title: "Furniture", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chips, { items: FURNITURE, selected: f.furniture, onToggle: (v) => toggle("furniture", v) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section$1, { title: "Utilities", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chips, { items: UTILITIES, selected: f.utilities, onToggle: (v) => toggle("utilities", v) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section$1, { title: "Amenities", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chips, { items: AMENITIES, selected: f.amenities, onToggle: (v) => toggle("amenities", v) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { title: "Electrical", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "USB ports" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: f.usbPorts, onChange: (e) => setF({ ...f, usbPorts: e.target.value }), className: "i" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Power sockets" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: f.sockets, onChange: (e) => setF({ ...f, sockets: e.target.value }), className: "i" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Internet points" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: f.internetPoints, onChange: (e) => setF({ ...f, internetPoints: e.target.value }), className: "i" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Smart switches" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: f.smartSwitches, onChange: (e) => setF({ ...f, smartSwitches: e.target.checked }) }),
            " Enabled"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { title: "Status", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Commercial" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: f.commercialStatus, onChange: (e) => setF({ ...f, commercialStatus: e.target.value }), className: "i", children: ["available", "reserved", "quoted", "booked", "occupied", "notice"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: x }, x)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Operational" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: f.operationalStatus, onChange: (e) => setF({ ...f, operationalStatus: e.target.value }), className: "i", children: ["ready", "cleaning", "maintenance", "inspection_pending", "audit_pending"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: x }, x)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field$2, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Turnaround" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: f.turnaround, onChange: (e) => setF({ ...f, turnaround: e.target.value }), className: "i", children: ["none", "checkout_today", "checkout_tomorrow", "movein_today", "movein_scheduled"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: x }, x)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-slate-100 flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(OutlineBtn, { onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GoldBtn, { onClick: submit, children: "Save room + beds" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.i{width:100%;padding:.5rem .75rem;border:1px solid #e2e8f0;border-radius:.5rem;font-size:.875rem}` })
  ] }) });
}
function Section$1({ title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-amber-700 mb-2", children: title.toUpperCase() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-2", children })
  ] });
}
function Field$2({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children });
}
function Label({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 mb-0.5", children });
}
function Chips({ items, selected, onToggle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full flex flex-wrap gap-1.5", children: items.map((it) => {
    const on = selected.includes(it);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => onToggle(it),
        className: `text-xs px-2.5 py-1 rounded-full border ${on ? "bg-amber-100 border-amber-300 text-amber-900 font-semibold" : "bg-white border-slate-200 text-slate-600"}`,
        children: it
      },
      it
    );
  }) });
}
function CommandPage() {
  const bookings = useStore(() => BookingsDB.all());
  const rents = useStore(() => RentsDB.all());
  const props = useStore(() => PropertiesDB.all());
  const maint = useStore(() => MaintenanceDB.all());
  const rooms = useInventoryStore(() => RoomsXDB.all());
  const leads = useLeadsStore(() => LeadsDB.all());
  const s = useStore(() => bookingStats());
  const r2 = useStore(() => rentStats());
  useLeadsStore(() => leadStats());
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const todayBookings = bookings.filter((b) => b.createdAt.slice(0, 10) === today);
  const todayLeads = leads.filter((l) => l.createdAt.slice(0, 10) === today);
  const atRiskRooms = rooms.filter((r22) => r22.operationalStatus === "maintenance" || r22.commercialStatus === "notice");
  const propHealth = props.map((p) => ({
    ...p,
    score: propertyHealth(p, rooms.filter((rm) => rm.propertyId === p.id), rents, maint)
  })).sort((a2, b) => b.score - a2.score);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BookOSShell, { eyebrow: "EXECUTIVE COMMAND CENTER", title: "Today, on one screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Today · Leads", value: todayLeads.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Today · Bookings", value: todayBookings.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Revenue added today", value: fmtShort(todayBookings.reduce((x, b) => x + b.tokenAmount, 0)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Pipeline value", value: fmtShort(s.avgTicket * s.total) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Occupancy", value: rooms.length ? Math.round(rooms.filter((rm) => rm.commercialStatus === "occupied").length / rooms.length * 100) + "%" : "—" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Collections", value: fmtShort(r2.collected), sub: `Overdue ${fmtShort(r2.overdue)}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "At-risk rooms", value: atRiskRooms.length, sub: "maintenance / on notice" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-lg text-slate-900 mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-emerald-600" }),
          " Property leaderboard"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          propHealth.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono text-slate-400 w-5", children: i + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 truncate font-medium text-slate-800 text-sm", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-bold ${p.score >= 80 ? "text-emerald-700" : p.score >= 60 ? "text-amber-700" : "text-rose-700"}`, children: p.score })
          ] }, p.id)),
          !propHealth.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400 italic", children: "No properties" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-rose-200 bg-rose-50/40 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-lg text-slate-900 mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-rose-600" }),
          " Risk watchlist"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-sm", children: [
          atRiskRooms.slice(0, 8).map((rm) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono px-1.5 py-0.5 rounded bg-rose-100 text-rose-800", children: [
              "#",
              rm.roomNumber
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-700 text-xs", children: [
              rm.operationalStatus,
              " · ",
              rm.commercialStatus
            ] })
          ] }, rm.id)),
          !atRiskRooms.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400 italic", children: "All clear ✨" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid sm:grid-cols-3 gap-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/leads", className: "rounded-xl border border-amber-200 bg-white px-4 py-3 hover:bg-amber-50", children: "Open leads pipeline →" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/map", className: "rounded-xl border border-amber-200 bg-white px-4 py-3 hover:bg-amber-50", children: "View live map →" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/owner", className: "rounded-xl border border-amber-200 bg-white px-4 py-3 hover:bg-amber-50", children: "Switch to owner view →" })
    ] })
  ] });
}
const STATUSES = ["scheduled", "confirmed", "in_progress", "completed", "no_show", "cancelled", "converted"];
const STATUS_COLOR = {
  scheduled: "bg-blue-100 text-blue-800 border-blue-200",
  confirmed: "bg-violet-100 text-violet-800 border-violet-200",
  in_progress: "bg-amber-100 text-amber-800 border-amber-200",
  completed: "bg-emerald-100 text-emerald-800 border-emerald-200",
  no_show: "bg-rose-100 text-rose-800 border-rose-200",
  cancelled: "bg-slate-100 text-slate-600 border-slate-200",
  converted: "bg-amber-200 text-amber-900 border-amber-300"
};
function VisitsWarRoom() {
  const visits = useOps(() => VisitsDB.all());
  const [showForm, setShowForm] = reactExports.useState(false);
  const [filter, setFilter] = reactExports.useState("all");
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 864e5).toISOString().slice(0, 10);
  const todays = visits.filter((v) => v.date === today);
  const tmrws = visits.filter((v) => v.date === tomorrow);
  const live = visits.filter((v) => ["in_progress", "confirmed"].includes(v.status));
  const conv = visits.filter((v) => v.status === "converted").length;
  const probability = visits.length ? Math.round(visits.reduce((s, v) => s + (v.probability || 0), 0) / visits.length) : 0;
  const filtered = filter === "all" ? visits : visits.filter((v) => v.status === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    BookOSShell,
    {
      eyebrow: "VISIT WAR ROOM",
      title: "Schedule & manage every property visit",
      actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: () => setShowForm(true), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
        " Schedule visit"
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Today", value: todays.length, sub: "visits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Tomorrow", value: tmrws.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Live now", value: live.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Converted", value: conv }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Avg probability", value: probability + "%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 mb-3 overflow-x-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Pill, { on: filter === "all", onClick: () => setFilter("all"), children: [
            "All (",
            visits.length,
            ")"
          ] }),
          STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Pill, { on: filter === s, onClick: () => setFilter(s), children: [
            s.replace("_", " "),
            " (",
            visits.filter((v) => v.status === s).length,
            ")"
          ] }, s))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 text-[10px] font-bold uppercase tracking-wider text-slate-500 px-4 py-2 border-b border-slate-100 bg-slate-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3", children: "Customer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3", children: "Property · Room" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: "When" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: "Owner / Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-right", children: "Actions" })
          ] }),
          filtered.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 px-4 py-3 border-b border-slate-100 hover:bg-amber-50/30 items-center text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-900", children: v.customerName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: v.customerPhone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: v.propertyName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
                "Room ",
                v.roomNumber || "—",
                " ",
                v.bedId ? "· " + v.bedId : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: v.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: v.time })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", children: v.coordinatorName || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold uppercase px-1.5 py-0.5 rounded border ${STATUS_COLOR[v.status]}`, children: v.status.replace("_", " ") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 flex items-center justify-end gap-1 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${v.customerPhone}`, className: "p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5 text-slate-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: waLink(v.customerPhone, `Hi ${v.customerName}, confirming your visit to ${v.propertyName} room ${v.roomNumber} on ${v.date} at ${v.time}.`), target: "_blank", rel: "noreferrer", className: "p-1.5 rounded-lg border border-emerald-200 hover:bg-emerald-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5 text-emerald-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: v.status, onChange: (e) => Ops.updateVisit(v.id, { status: e.target.value }), className: "text-xs border border-slate-200 rounded px-1.5 py-1", children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s.replace("_", " ") }, s)) }),
              v.roomId && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: `/manager/bookos/room/${v.roomId}`, className: "text-xs text-amber-700 font-semibold", children: "Room →" })
            ] })
          ] }, v.id)),
          !filtered.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-slate-400", children: "No visits in this view." })
        ] }),
        showForm && /* @__PURE__ */ jsxRuntimeExports.jsx(VisitForm, { onClose: () => setShowForm(false) })
      ]
    }
  );
}
function Pill({ on, children, ...p }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { ...p, className: `shrink-0 text-xs px-3 py-1.5 rounded-full border ${on ? "bg-amber-100 border-amber-300 text-amber-900 font-semibold" : "bg-white border-slate-200 text-slate-600"}`, children });
}
function VisitForm({ onClose, prefill = {} }) {
  const props = PropertiesDB.all();
  const rooms = RoomsXDB.all();
  const floors = FloorsDB.all();
  const staff = StaffDB.all();
  const [f, setF] = reactExports.useState({
    propertyId: prefill.propertyId || props[0]?.id || "",
    floorId: prefill.floorId || "",
    roomId: prefill.roomId || "",
    customerName: prefill.customerName || "",
    customerPhone: prefill.customerPhone || "",
    customerEmail: "",
    date: new Date(Date.now() + 864e5).toISOString().slice(0, 10),
    time: "18:00",
    coordinatorName: staff[0]?.name || "",
    managerName: staff[1]?.name || "",
    managerPhone: staff[1]?.phone || "",
    notes: ""
  });
  const propFloors = floors.filter((x) => x.propertyId === f.propertyId);
  const propRooms = rooms.filter((x) => x.propertyId === f.propertyId && (!f.floorId || x.floorId === f.floorId));
  const submit = () => {
    if (!f.customerName || !f.customerPhone || !f.propertyId) return alert("Customer + Property required");
    const prop = props.find((p) => p.id === f.propertyId);
    const room = rooms.find((r2) => r2.id === f.roomId);
    Ops.scheduleVisit({
      propertyId: f.propertyId,
      propertyName: prop?.name || "",
      floorId: f.floorId || void 0,
      roomId: f.roomId || void 0,
      roomNumber: room?.roomNumber,
      customerName: f.customerName,
      customerPhone: f.customerPhone,
      customerEmail: f.customerEmail || void 0,
      date: f.date,
      time: f.time,
      coordinatorName: f.coordinatorName,
      managerName: f.managerName,
      managerPhone: f.managerPhone,
      notes: f.notes || void 0
    });
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-slate-900/50 backdrop-blur flex items-center justify-center p-4 overflow-y-auto", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-amber-200 my-8", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-slate-100 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-amber-700", children: "VISIT WAR ROOM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl", children: "Schedule a room-level visit" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-slate-500 text-xl", children: "×" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 grid sm:grid-cols-2 gap-3 max-h-[70vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1, { label: "Customer name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "i", value: f.customerName, onChange: (e) => setF({ ...f, customerName: e.target.value }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "i", value: f.customerPhone, onChange: (e) => setF({ ...f, customerPhone: e.target.value }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1, { label: "Email (optional)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "i", value: f.customerEmail, onChange: (e) => setF({ ...f, customerEmail: e.target.value }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1, { label: "Property", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "i", value: f.propertyId, onChange: (e) => setF({ ...f, propertyId: e.target.value, floorId: "", roomId: "" }), children: props.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.name }, p.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1, { label: "Floor", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "i", value: f.floorId, onChange: (e) => setF({ ...f, floorId: e.target.value, roomId: "" }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Any" }),
        propFloors.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: x.id, children: [
          "Floor ",
          x.number
        ] }, x.id))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1, { label: "Room", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "i", value: f.roomId, onChange: (e) => setF({ ...f, roomId: e.target.value }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Any" }),
        propRooms.map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: r2.id, children: [
          "#",
          r2.roomNumber,
          " · ",
          r2.sharing,
          "-share · ₹",
          r2.rent
        ] }, r2.id))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1, { label: "Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: "i", value: f.date, onChange: (e) => setF({ ...f, date: e.target.value }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1, { label: "Time", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "time", className: "i", value: f.time, onChange: (e) => setF({ ...f, time: e.target.value }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1, { label: "Coordinator", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "i", value: f.coordinatorName, onChange: (e) => setF({ ...f, coordinatorName: e.target.value }), children: staff.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s.name }, s.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1, { label: "Property manager", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "i", value: f.managerName, onChange: (e) => setF({ ...f, managerName: e.target.value, managerPhone: staff.find((s) => s.name === e.target.value)?.phone || "" }), children: staff.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s.name }, s.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field$1, { label: "Notes", full: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 2, className: "i", value: f.notes, onChange: (e) => setF({ ...f, notes: e.target.value }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-slate-100 flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(OutlineBtn, { onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: submit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
        " Schedule"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.i{width:100%;padding:.5rem .75rem;border:1px solid #e2e8f0;border-radius:.5rem;font-size:.875rem}` })
  ] }) });
}
function Field$1({ label, children, full }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: full ? "sm:col-span-2" : "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 mb-0.5", children: label }),
    children
  ] });
}
function RoomDetail() {
  const { id } = useParams();
  const room = useInventoryStore(() => RoomsXDB.get(id));
  const events = useOps(() => RoomEventsDB.where((e) => e.roomId === id).sort((a2, b) => +new Date(b.createdAt) - +new Date(a2.createdAt)));
  const visits = useOps(() => VisitsDB.where((v) => v.roomId === id));
  const rbs = useOps(() => RoomBookingsDB.where((rb) => rb.roomId === id));
  const beds = useInventoryStore(() => BedsDB.where((b) => b.roomId === id));
  const floors = useInventoryStore(() => FloorsDB.all());
  const props = useStore(() => PropertiesDB.all());
  const [showVisit, setShowVisit] = reactExports.useState(false);
  const [showBook, setShowBook] = reactExports.useState(false);
  if (!room) return /* @__PURE__ */ jsxRuntimeExports.jsx(BookOSShell, { title: "Room not found", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/inventory", className: "text-amber-700", children: "← Inventory" }) });
  const property = props.find((p) => p.id === room.propertyId);
  const floor = floors.find((f) => f.id === room.floorId);
  const score = readinessScore(room);
  const usp = room.usp || {};
  const pricing = computeSuggestedPrice({ base: 8500, floor: floor?.number || 1, sharing: room.sharing, usp });
  const pack = generateMoveInPack({ room, property });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    BookOSShell,
    {
      eyebrow: `ROOM · ${property?.name || ""} · Floor ${floor?.number || "—"}`,
      title: `Room #${room.roomNumber}`,
      actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/manager/bookos/inventory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
        " Inventory"
      ] }) }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Readiness", value: score + "%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Status", value: ROOM_STATUS_LABEL[room.commercialStatus] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Sharing", value: `${room.sharing}-share` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Rent", value: fmt(room.rent), sub: "current" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Suggested", value: fmt(pricing.suggested), sub: "engine" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ReadinessCard, { room }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(USPCard, { room, usp }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PricingCard, { room, floor, usp }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BedsCard, { room, beds }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Timeline, { events })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-amber-700", children: "QUICK ACTIONS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg text-slate-900 mb-3", children: "Sell this room" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { className: "w-full justify-center", onClick: () => setShowVisit(true), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
                  " Schedule a visit"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { className: "w-full justify-center", onClick: () => setShowBook(true), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
                  " Create booking"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: pack.waUrl, target: "_blank", rel: "noreferrer", className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { className: "w-full justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                  " Send move-in pack"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { className: "w-full justify-center", onClick: () => copyText(pack.text), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
                  " Copy confirmation"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: pack.maps, target: "_blank", rel: "noreferrer", className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { className: "w-full justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
                  " Maps link"
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold tracking-[0.18em] text-amber-700 mb-2", children: [
                "VISITS (",
                visits.length,
                ")"
              ] }),
              visits.slice(0, 4).map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs py-1.5 border-b last:border-0 border-slate-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold", children: [
                  v.customerName,
                  " · ",
                  v.date,
                  " ",
                  v.time
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500", children: v.status })
              ] }, v.id)),
              !visits.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400", children: "No visits yet." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold tracking-[0.18em] text-amber-700 mb-2", children: [
                "BOOKINGS (",
                rbs.length,
                ")"
              ] }),
              rbs.map((rb) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: `/manager/bookos/movein`, className: "block text-xs py-1.5 border-b last:border-0 border-slate-100 hover:bg-amber-50/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold", children: [
                  rb.customerName,
                  " · ",
                  fmt(rb.rent)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500", children: rb.status.replace("_", " ") })
              ] }, rb.id)),
              !rbs.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400", children: "No bookings yet." })
            ] })
          ] })
        ] }),
        showVisit && /* @__PURE__ */ jsxRuntimeExports.jsx(VisitForm, { onClose: () => setShowVisit(false), prefill: { propertyId: room.propertyId, floorId: room.floorId, roomId: room.id } }),
        showBook && /* @__PURE__ */ jsxRuntimeExports.jsx(BookingForm, { room, onClose: () => setShowBook(false) })
      ]
    }
  );
}
function ReadinessCard({ room }) {
  const [r2, setR] = reactExports.useState({
    commercialStatus: room.commercialStatus,
    operationalStatus: room.operationalStatus,
    turnaround: room.turnaround,
    readyDate: room.readyDate || "",
    reason: room.reason || ""
  });
  const reasons = READINESS_REASONS[r2.operationalStatus] || READINESS_REASONS[r2.commercialStatus] || [];
  const save2 = () => Ops.setReadiness(room.id, { ...r2, readyDate: r2.readyDate || null });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-lg flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-amber-600" }),
        " Readiness"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold uppercase px-2 py-0.5 rounded text-white ${ROOM_STATUS_COLOR[room.commercialStatus]}`, children: ROOM_STATUS_LABEL[room.commercialStatus] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sel, { label: "Commercial", value: r2.commercialStatus, options: ["available", "reserved", "quoted", "booked", "occupied", "notice"], onChange: (v) => setR({ ...r2, commercialStatus: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sel, { label: "Operational", value: r2.operationalStatus, options: ["ready", "cleaning", "maintenance", "inspection_pending", "audit_pending"], onChange: (v) => setR({ ...r2, operationalStatus: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sel, { label: "Turnaround", value: r2.turnaround, options: ["none", "checkout_today", "checkout_tomorrow", "movein_today", "movein_scheduled"], onChange: (v) => setR({ ...r2, turnaround: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sel, { label: "Reason", value: r2.reason, options: ["", ...reasons], onChange: (v) => setR({ ...r2, reason: v }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 mb-0.5", children: "Available from" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: r2.readyDate || "", onChange: (e) => setR({ ...r2, readyDate: e.target.value }), className: "w-full px-2 py-1.5 border border-slate-200 rounded text-sm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { className: "w-full justify-center", onClick: save2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
        " Update"
      ] }) })
    ] })
  ] });
}
function USPCard({ room, usp }) {
  const [u, setU] = reactExports.useState({ ...usp });
  const save2 = () => Ops.updateUSP(room.id, u);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg", children: "USP & selling points" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GoldBtn, { onClick: save2, children: "Save USP" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-2", children: Object.entries(USP).map(([k, opts]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Sel, { label: k.charAt(0).toUpperCase() + k.slice(1), value: u[k] || "", options: ["", ...opts], onChange: (v) => setU({ ...u, [k]: v }) }, k)) })
  ] });
}
function PricingCard({ room, floor, usp }) {
  const [base, setBase] = reactExports.useState(8500);
  const [demand, setDemand] = reactExports.useState(0);
  const p = computeSuggestedPrice({ base, floor: floor?.number || 1, sharing: room.sharing, usp, demand });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg", children: "Floor-aware pricing engine" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: () => Ops.updatePricing(room.id, p.suggested, p.breakdown), children: [
        "Apply ₹",
        p.suggested.toLocaleString("en-IN")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-4 gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Base rent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: base, onChange: (e) => setBase(+e.target.value), className: "i" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Floor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: `Floor ${floor?.number || 1}`, disabled: true, className: "i bg-slate-50" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Sharing", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: `${room.sharing}-share`, disabled: true, className: "i bg-slate-50" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Demand (×base 5%)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: demand, onChange: (e) => setDemand(+e.target.value), className: "i" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs space-y-1 bg-slate-50 rounded-lg p-3", children: [
      Object.entries(p.breakdown).map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize text-slate-500", children: k.replace(/([A-Z])/g, " $1") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: v < 0 ? "text-rose-600 font-mono" : "text-slate-700 font-mono", children: [
          v >= 0 ? "+" : "",
          "₹",
          v.toLocaleString("en-IN")
        ] })
      ] }, k)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-slate-200 pt-1 mt-1 flex justify-between font-bold text-amber-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Suggested rent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "₹",
          p.suggested.toLocaleString("en-IN")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.i{width:100%;padding:.4rem .6rem;border:1px solid #e2e8f0;border-radius:.4rem;font-size:.85rem}` })
  ] });
}
function BedsCard({ room, beds }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-lg mb-3", children: [
      "Beds (",
      beds.length,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2", children: beds.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-slate-200 p-2 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: b.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${b.status === "vacant" ? "bg-emerald-100 text-emerald-800" : b.status === "occupied" ? "bg-rose-100 text-rose-800" : "bg-amber-100 text-amber-800"}`, children: b.status })
    ] }, b.id)) })
  ] });
}
function Timeline({ events }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-3", children: "Room timeline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 max-h-80 overflow-y-auto", children: [
      events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start text-sm border-b border-slate-100 pb-2 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${kindColor(e.kind)}`, children: e.kind }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-slate-900", children: e.title }),
          e.detail && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: e.detail })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-400", children: timeAgo$3(e.createdAt) })
      ] }, e.id)),
      !events.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400", children: "No events yet." })
    ] })
  ] });
}
function kindColor(k) {
  return {
    status: "bg-blue-100 text-blue-800",
    readiness: "bg-amber-100 text-amber-800",
    visit: "bg-violet-100 text-violet-800",
    quote: "bg-blue-100 text-blue-800",
    booking: "bg-emerald-100 text-emerald-800",
    payment: "bg-emerald-200 text-emerald-900",
    movein: "bg-amber-200 text-amber-900",
    note: "bg-slate-100 text-slate-700",
    usp: "bg-pink-100 text-pink-800",
    price: "bg-indigo-100 text-indigo-800"
  }[k] || "bg-slate-100 text-slate-700";
}
function Sel({ label, value, options, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 mb-0.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value, onChange: (e) => onChange(e.target.value), className: "w-full px-2 py-1.5 border border-slate-200 rounded text-sm", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, children: o || "—" }, o)) })
  ] });
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 mb-0.5", children: label }),
    children
  ] });
}
function BookingForm({ room, onClose }) {
  const [f, setF] = reactExports.useState({
    customerName: "",
    customerPhone: "",
    rent: room.rent,
    deposit: room.deposit || room.rent * 2,
    token: 2e3,
    moveInDate: new Date(Date.now() + 7 * 864e5).toISOString().slice(0, 10)
  });
  const submit = () => {
    if (!f.customerName || !f.customerPhone) return alert("Customer details required");
    Ops.createRoomBooking({ roomId: room.id, ...f });
    onClose();
    window.location.href = "/app/manager/bookos/movein";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-slate-900/50 backdrop-blur flex items-center justify-center p-4", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-amber-200", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-slate-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-amber-700", children: "CREATE BOOKING" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-xl", children: [
        "Room #",
        room.roomNumber
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Customer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "i", value: f.customerName, onChange: (e) => setF({ ...f, customerName: e.target.value }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "i", value: f.customerPhone, onChange: (e) => setF({ ...f, customerPhone: e.target.value }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Rent/mo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "i", value: f.rent, onChange: (e) => setF({ ...f, rent: +e.target.value }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Deposit", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "i", value: f.deposit, onChange: (e) => setF({ ...f, deposit: +e.target.value }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Token", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "i", value: f.token, onChange: (e) => setF({ ...f, token: +e.target.value }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Move-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: "i", value: f.moveInDate, onChange: (e) => setF({ ...f, moveInDate: e.target.value }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-slate-100 flex justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(OutlineBtn, { onClick: onClose, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GoldBtn, { onClick: submit, children: "Create booking" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.i{width:100%;padding:.5rem .75rem;border:1px solid #e2e8f0;border-radius:.5rem;font-size:.875rem}` })
  ] }) });
}
function MoveInCenter() {
  const rbs = useOps(() => RoomBookingsDB.all());
  const rooms = useOps(() => RoomsXDB.all());
  const props = useStore(() => PropertiesDB.all());
  const pending = rbs.filter((r2) => r2.status !== "movein_done" && r2.status !== "cancelled");
  const done = rbs.filter((r2) => r2.status === "movein_done");
  const collectedAll = rbs.filter((r2) => Object.values(r2.collected).every(Boolean));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BookOSShell, { eyebrow: "MOVE-IN COMMAND CENTER", title: "Bookings → collection → approved move-in", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Open bookings", value: pending.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Ready to approve", value: collectedAll.length - done.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Moved in", value: done.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Total", value: rbs.length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      pending.map((rb) => {
        const room = rooms.find((r2) => r2.id === rb.roomId);
        const prop = props.find((p) => p.id === room?.propertyId);
        const booking = BookingsDB.get(rb.bookingId || "");
        const pack = generateMoveInPack({ booking, room, property: prop });
        const completed = Object.values(rb.collected).filter(Boolean).length;
        const total = Object.keys(rb.collected).length;
        const readyApprove = completed === total;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold tracking-[0.18em] text-amber-700", children: [
                prop?.name,
                " · Floor ",
                room?.floorId ? "—" : "—",
                " · Room #",
                room?.roomNumber
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-xl", children: [
                rb.customerName,
                " · ",
                rb.customerPhone
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
                "Rent ",
                fmt(rb.rent),
                " · Deposit ",
                fmt(rb.deposit),
                " · Token ",
                fmt(rb.token),
                " · Move-in ",
                rb.moveInDate
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-800", children: [
                completed,
                "/",
                total,
                " checklist"
              ] }),
              readyApprove ? /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { onClick: () => Ops.approveMoveIn(rb.id), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-4 h-4" }),
                " Approve move-in"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { disabled: true, className: "opacity-60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-4 h-4" }),
                " Move-in locked"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-5 gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { label: "Token", on: rb.collected.token, onClick: () => Ops.collect(rb.id, "token", rb.token, "UPI", "UPI-" + Date.now().toString(36)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { label: "Deposit", on: rb.collected.deposit, onClick: () => Ops.collect(rb.id, "deposit", rb.deposit, "UPI", "DEP-" + Date.now().toString(36)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { label: "First rent", on: rb.collected.firstRent, onClick: () => Ops.collect(rb.id, "firstRent", rb.rent, "UPI", "RENT-" + Date.now().toString(36)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { label: "Agreement", on: rb.collected.agreement, onClick: () => Ops.collect(rb.id, "agreement") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { label: "KYC", on: rb.collected.kyc, onClick: () => Ops.collect(rb.id, "kyc") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap pt-3 border-t border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: pack.waUrl, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldBtn, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
              " Send move-in pack"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { onClick: () => copyText(pack.text), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
              " Copy slip"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: pack.maps, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(OutlineBtn, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
              " Maps"
            ] }) }),
            room && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: `/manager/bookos/room/${room.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(OutlineBtn, { children: "Room →" }) }),
            booking && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: `/manager/bookos/bookings/${booking.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(OutlineBtn, { children: "Booking →" }) })
          ] })
        ] }, rb.id);
      }),
      !pending.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-2 border-dashed border-amber-200 rounded-2xl p-10 text-center text-slate-400", children: "No pending move-ins." })
    ] }),
    done.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-emerald-700 mb-2", children: "RECENT MOVE-INS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-emerald-200 bg-emerald-50/50 divide-y divide-emerald-100", children: done.slice(0, 6).map((rb) => {
        const room = rooms.find((r2) => r2.id === rb.roomId);
        const prop = props.find((p) => p.id === room?.propertyId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: rb.customerName }),
            " · ",
            prop?.name,
            " #",
            room?.roomNumber
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-emerald-700 font-bold", children: "✓ Moved in" })
        ] }, rb.id);
      }) })
    ] })
  ] });
}
function Checkbox({ label, on, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: `flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm ${on ? "bg-emerald-50 border-emerald-300 text-emerald-900" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`, children: [
    on ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-emerald-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "w-4 h-4 text-slate-400" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: label })
  ] });
}
function FounderTower() {
  const bs = useStore(() => bookingStats());
  const rs = useStore(() => rentStats());
  const bookings = useStore(() => BookingsDB.all());
  const rooms = useInventoryStore(() => RoomsXDB.all());
  const visits = useOps(() => VisitsDB.all());
  const rbs = useOps(() => RoomBookingsDB.all());
  const props = useStore(() => PropertiesDB.all());
  const leads = useLeadsStore(() => LeadsDB.all());
  const maint = useStore(() => MaintenanceDB.all());
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const todays = {
    leads: leads.filter((l) => l.createdAt.slice(0, 10) === today).length,
    visits: visits.filter((v) => v.date === today).length,
    bookings: bookings.filter((b) => b.createdAt.slice(0, 10) === today).length,
    revenue: bookings.filter((b) => b.createdAt.slice(0, 10) === today && b.status === "paid").reduce((s, b) => s + b.tokenAmount, 0)
  };
  const totalBeds = rooms.reduce((s, r2) => s + (r2.sharing || 0), 0);
  const occupied = rooms.filter((r2) => r2.commercialStatus === "occupied").length;
  const occRate = rooms.length ? Math.round(occupied / rooms.length * 100) : 0;
  const readyToSellCount = rooms.filter((r2) => readyToSell(r2)).length;
  const notReady = rooms.filter((r2) => r2.operationalStatus !== "ready" && r2.commercialStatus !== "occupied").length;
  const byProp = props.map((p) => {
    const pRooms = rooms.filter((r2) => r2.propertyId === p.id);
    const pOcc = pRooms.filter((r2) => r2.commercialStatus === "occupied").length;
    const occ = pRooms.length ? Math.round(pOcc / pRooms.length * 100) : 0;
    const rev = bookings.filter((b) => b.propertyName === p.name && b.status === "paid").reduce((s, b) => s + b.discountedRent, 0);
    const pendingMaint = maint.filter((m) => m.propertyName === p.name && m.status !== "done").length;
    return { p, occ, rev, pendingMaint };
  });
  const top = [...byProp].sort((a2, b) => b.rev - a2.rev).slice(0, 5);
  const bottom = [...byProp].sort((a2, b) => a2.occ - b.occ).slice(0, 5);
  const collectionsAtRisk = bookings.filter((b) => b.status === "approved" || b.status === "expired").length;
  const bookingsAtRisk = rbs.filter((rb) => rb.status !== "movein_done" && !rb.collected.token).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BookOSShell, { eyebrow: "FOUNDER CONTROL TOWER", title: "Entire company · one screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Today · Leads", value: todays.leads }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Today · Visits", value: todays.visits }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Today · Bookings", value: todays.bookings }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Today · Revenue", value: fmtShort(todays.revenue) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-4 gap-4 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Inventory", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Total beds", v: totalBeds }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Occupied", v: occupied }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Ready to sell", v: readyToSellCount, tone: "emerald" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Not ready", v: notReady, tone: notReady > 0 ? "rose" : "slate" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Sales", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Leads (all)", v: leads.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Visits scheduled", v: visits.filter((v) => v.status === "scheduled").length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Booked", v: bs.paid }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Conversion", v: bs.conversion + "%", tone: "emerald" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Collections", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Collected", v: fmtShort(rs.collected), tone: "emerald" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Pending", v: fmtShort(rs.pending) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Overdue", v: fmtShort(rs.overdue), tone: rs.overdue > 0 ? "rose" : "slate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "At risk", v: collectionsAtRisk })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Operations", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Open tickets", v: maint.filter((m) => m.status !== "done").length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Move-ins pending", v: rbs.filter((r2) => r2.status !== "movein_done").length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Bookings at risk", v: bookingsAtRisk, tone: bookingsAtRisk > 0 ? "rose" : "slate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Occupancy", v: occRate + "%" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-3", children: "Top properties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[10px] uppercase text-slate-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1", children: "Property" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Occupancy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Revenue" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: top.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5", children: t.p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-center font-mono", children: [
              t.occ,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-bold text-emerald-700", children: fmtShort(t.rev) })
          ] }, t.p.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-rose-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-3 text-rose-800", children: "At-risk properties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[10px] uppercase text-slate-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1", children: "Property" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Occupancy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Open maint" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: bottom.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-slate-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5", children: t.p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-center font-mono", children: [
              t.occ,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right text-rose-700 font-bold", children: t.pendingMaint })
          ] }, t.p.id)) })
        ] })
      ] })
    ] })
  ] });
}
function Section({ title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-amber-700 mb-2", children: title.toUpperCase() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children })
  ] });
}
function Row({ k, v, tone = "slate" }) {
  const c = { emerald: "text-emerald-700", rose: "text-rose-700", slate: "text-slate-900" }[tone];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold ${c}`, children: v })
  ] });
}
const NAV = [
  { to: "/owner", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/owner/revenue", label: "Revenue", icon: IndianRupee },
  { to: "/owner/collections", label: "Collections", icon: Receipt },
  { to: "/owner/maintenance", label: "Maintenance", icon: Wrench },
  { to: "/owner/health", label: "Health", icon: ShieldCheck }
];
function OwnerShell({ title, eyebrow, actions, children }) {
  const [loc] = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/20 to-slate-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-amber-200/40 bg-white/80 backdrop-blur sticky top-0 z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-6 lg:px-8 py-4 flex items-end justify-between gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.2em] text-amber-700", children: eyebrow || "OWNER COMMAND CENTER" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-2xl sm:text-3xl text-slate-900", style: { letterSpacing: "-0.02em" }, children: title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap", children: actions })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "px-4 sm:px-6 lg:px-8 pb-2 flex gap-1.5 overflow-x-auto", children: NAV.map((n) => {
        const Icon2 = n.icon;
        const active = n.exact ? loc === n.to : loc.startsWith(n.to);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            href: n.to,
            className: `shrink-0 flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border ${active ? "bg-amber-100 border-amber-300 text-amber-900 font-semibold" : "bg-white border-slate-200 text-slate-600"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-3.5 h-3.5" }),
              " ",
              n.label
            ]
          },
          n.to
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 sm:p-6 lg:p-8", children })
  ] }) });
}
function OwnerOverview() {
  const props = useStore(() => PropertiesDB.all());
  const rents = useStore(() => RentsDB.all());
  const maint = useStore(() => MaintenanceDB.all());
  const bookings = useStore(() => BookingsDB.all());
  const rooms = useInventoryStore(() => RoomsXDB.all());
  const r2 = useStore(() => rentStats());
  const totalRooms = rooms.length || props.reduce((s, p) => s + (p.totalRooms || 0), 0);
  const occupied = rooms.filter((rm) => rm.commercialStatus === "occupied").length;
  const occRate = totalRooms ? Math.round(occupied / totalRooms * 100) : 0;
  const last30 = Array.from({ length: 30 }, (_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - (29 - i));
    const ds = d.toISOString().slice(0, 10);
    const v = bookings.filter((b) => b.createdAt.slice(0, 10) === ds).reduce((s, b) => s + b.tokenAmount, 0);
    return { day: ds.slice(5), v: v + i * 200 % 1500 };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OwnerShell, { title: "Your portfolio at a glance", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Properties", value: props.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Rooms", value: totalRooms }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Occupancy", value: occRate + "%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "MRR", value: fmtShort(r2.collected + r2.pending) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-slate-500", children: "REVENUE · 30 DAYS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl text-slate-900 mb-2", children: "Daily intake" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: last30, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "og", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#10b981", stopOpacity: 0.4 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#10b981", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { fontSize: 12 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "v", stroke: "#059669", fill: "url(#og)", strokeWidth: 2 })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.18em] text-slate-500", children: "RENT STATUS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { label: "Collected", value: r2.collected, total: r2.collected + r2.pending + r2.overdue, color: "bg-emerald-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { label: "Pending", value: r2.pending, total: r2.collected + r2.pending + r2.overdue, color: "bg-amber-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { label: "Overdue", value: r2.overdue, total: r2.collected + r2.pending + r2.overdue, color: "bg-rose-500" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg text-slate-900 mb-3", children: "Property-wise snapshot" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: props.map((p) => {
        const pr = rooms.filter((rm) => rm.propertyId === p.id);
        const pOcc = pr.filter((rm) => rm.commercialStatus === "occupied").length;
        const open = maint.filter((m) => m.propertyName === p.name && m.status !== "done").length;
        const score = propertyHealth(p, pr, rents, maint);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { href: "/owner/health", className: "flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:bg-amber-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-900", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
              p.area,
              " · ",
              pr.length || p.totalRooms,
              " rooms · ",
              open,
              " open tickets"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-bold text-amber-700", children: [
              pr.length ? Math.round(pOcc / pr.length * 100) : 0,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: "occupancy" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-right pl-3 border-l border-slate-100 ${score >= 80 ? "text-emerald-700" : score >= 60 ? "text-amber-700" : "text-rose-700"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold", children: score }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: "health" })
          ] })
        ] }, p.id);
      }) })
    ] })
  ] });
}
function Bar({ label, value, total, color }) {
  const pct = total ? Math.round(value / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-slate-600 mb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
        fmtShort(value),
        " · ",
        pct,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-slate-100 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${color}`, style: { width: pct + "%" } }) })
  ] });
}
function OwnerRevenue() {
  const props = useStore(() => PropertiesDB.all());
  const rents = useStore(() => RentsDB.all());
  const rooms = useInventoryStore(() => RoomsXDB.all());
  const byProp = props.map((p) => {
    const pr = rents.filter((r2) => r2.propertyName === p.name);
    const collected = pr.filter((r2) => r2.status === "paid").reduce((s, r2) => s + r2.amount, 0);
    const pending = pr.filter((r2) => r2.status !== "paid").reduce((s, r2) => s + r2.amount, 0);
    const myRooms = rooms.filter((rm) => rm.propertyId === p.id);
    const vacant = myRooms.filter((rm) => rm.commercialStatus === "available").length;
    const vacancyCost = vacant * (myRooms[0]?.rent || 15e3);
    return { ...p, collected, pending, vacant, vacancyCost };
  }).sort((a2, b) => b.collected - a2.collected);
  const totalCollected = byProp.reduce((s, p) => s + p.collected, 0);
  const totalVacancyCost = byProp.reduce((s, p) => s + p.vacancyCost, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OwnerShell, { title: "Revenue Control Tower", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Collected", value: fmtShort(totalCollected) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Pending", value: fmtShort(byProp.reduce((s, p) => s + p.pending, 0)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Vacancy cost", value: fmtShort(totalVacancyCost) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Properties", value: byProp.length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-amber-200 bg-white/80 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-amber-50/60 text-[10px] uppercase tracking-wider text-amber-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3", children: "Property" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3", children: "Collected" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3", children: "Pending" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3", children: "Vacant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3", children: "Vacancy cost" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-100", children: byProp.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-amber-50/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 font-semibold text-slate-900", children: [
          p.name,
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 font-normal", children: p.area })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-emerald-700 font-bold", children: fmtShort(p.collected) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-amber-700", children: fmtShort(p.pending) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right", children: p.vacant }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right text-rose-700", children: fmtShort(p.vacancyCost) })
      ] }, p.id)) })
    ] }) })
  ] });
}
const BUCKETS = [
  { label: "0-7 days", max: 7 },
  { label: "8-15 days", max: 15 },
  { label: "16-30 days", max: 30 },
  { label: "30+ days", max: 60 },
  { label: "60+ days", max: 90 },
  { label: "90+ days", max: Infinity }
];
function ageDays(month) {
  const due = /* @__PURE__ */ new Date(month + "-05");
  return Math.floor((Date.now() - +due) / 864e5);
}
function OwnerCollections() {
  const rents = useStore(() => RentsDB.all());
  const overdue = rents.filter((r2) => r2.status !== "paid");
  const buckets = BUCKETS.map((b, i) => {
    const min = i === 0 ? 0 : BUCKETS[i - 1].max;
    return { ...b, items: overdue.filter((r2) => {
      const a2 = ageDays(r2.month);
      return a2 >= min && a2 < b.max;
    }) };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OwnerShell, { title: "Rent Collection War Room", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-6 gap-3 mb-5", children: buckets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: b.label, value: b.items.length, sub: fmtShort(b.items.reduce((s, r2) => s + r2.amount, 0)) }, b.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      buckets.filter((b) => b.items.length).map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2.5 bg-amber-50/60 border-b border-amber-100 font-semibold text-amber-900 text-sm", children: [
          b.label,
          " · ",
          b.items.length,
          " tenants"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-100", children: b.items.map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-amber-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-900", children: r2.tenantName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: r2.propertyName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-xs text-slate-600", children: r2.month }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right font-bold text-rose-700", children: fmtShort(r2.amount) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: r2.status }) })
        ] }, r2.id)) }) })
      ] }, b.label)),
      !overdue.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border-2 border-dashed border-emerald-200 p-10 text-center text-emerald-700 font-semibold", children: "🎉 All rents collected" })
    ] })
  ] });
}
function OwnerMaintenance() {
  const items = useStore(() => MaintenanceDB.all());
  const open = items.filter((m) => m.status !== "done");
  const high = items.filter((m) => m.priority === "high" && m.status !== "done");
  const byCat = {};
  items.forEach((m) => {
    byCat[m.title.split(" ")[0]] = (byCat[m.title.split(" ")[0]] || 0) + 1;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OwnerShell, { title: "Maintenance Operating System", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Open", value: open.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "High priority", value: high.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Done all-time", value: items.filter((m) => m.status === "done").length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Total", value: items.length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2.5 bg-amber-50/60 border-b border-amber-100 font-semibold text-amber-900 text-sm", children: "All tickets" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-slate-100", children: [
        items.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-amber-50/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-900", children: m.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
              m.propertyName,
              " ",
              m.roomNumber ? `· #${m.roomNumber}` : "",
              " · ",
              timeAgo$3(m.createdAt)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: m.priority }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: m.status }) })
        ] }, m.id)),
        !items.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-10 text-center text-slate-400", children: "No tickets." }) })
      ] }) })
    ] })
  ] });
}
function badge(score) {
  if (score >= 85) return { label: "Elite", c: "bg-emerald-100 text-emerald-800 border-emerald-200" };
  if (score >= 70) return { label: "Healthy", c: "bg-amber-100 text-amber-800 border-amber-200" };
  if (score >= 50) return { label: "Watch", c: "bg-orange-100 text-orange-800 border-orange-200" };
  return { label: "At Risk", c: "bg-rose-100 text-rose-800 border-rose-200" };
}
function OwnerHealth() {
  const props = useStore(() => PropertiesDB.all());
  const rents = useStore(() => RentsDB.all());
  const maint = useStore(() => MaintenanceDB.all());
  const rooms = useInventoryStore(() => RoomsXDB.all());
  const scored = props.map((p) => {
    const myRooms = rooms.filter((rm) => rm.propertyId === p.id);
    return { ...p, score: propertyHealth(p, myRooms, rents, maint), myRooms };
  }).sort((a2, b) => b.score - a2.score);
  const avg = scored.length ? Math.round(scored.reduce((s, p) => s + p.score, 0) / scored.length) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OwnerShell, { title: "Property Health Score", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { accent: true, label: "Portfolio score", value: avg + "/100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Elite", value: scored.filter((p) => p.score >= 85).length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Healthy", value: scored.filter((p) => p.score >= 70 && p.score < 85).length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "At-risk", value: scored.filter((p) => p.score < 50).length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-3", children: scored.map((p) => {
      const b = badge(p.score);
      const vacancyRisk = p.myRooms.filter((rm) => rm.commercialStatus === "notice").length;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-amber-200 bg-white/80 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg text-slate-900", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: p.area })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${b.c}`, children: b.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-bold text-amber-700 my-2", children: [
          p.score,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-slate-400 font-normal", children: "/100" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Occupancy", weight: "25%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Collection", weight: "25%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Maintenance", weight: "15%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Reviews", weight: "15%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Response", weight: "10%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Conversion", weight: "10%" })
        ] }),
        vacancyRisk > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-xs text-orange-700 bg-orange-50 border border-orange-200 rounded-lg p-2", children: [
          "⚠️ ",
          vacancyRisk,
          " rooms on notice — vacancy risk next month"
        ] })
      ] }, p.id);
    }) })
  ] });
}
function Metric({ label, weight }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-amber-50/40 border border-amber-100 rounded-md px-2 py-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-500 font-mono", children: weight })
  ] });
}
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 3e4, retry: 1 } }
});
function Router() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Switch, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", component: IndexPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/register", component: RegisterPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/home", component: HomePage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/refer", component: ReferPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/me", component: ProfilePage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/leaderboard", component: LeaderboardPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/payout-setup", component: PayoutSetupPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/earnings", component: EarningsPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/pg", component: PgBrowsePage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/pg/:id", component: PgDetailPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/areas", component: AreasPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/teams", component: TeamsPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/teams/:id", component: TeamDetailPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/challenges", component: ChallengesPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/notifications", component: NotificationsPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/calculator", component: CalculatorPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/profile/:code", component: PublicProfilePage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/streak", component: StreakPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/lucky-draw", component: LuckyDrawPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/squad-battles", component: SquadBattlesPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/flash", component: FlashDealsPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/chain", component: ChainPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/activity", component: ActivityPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/visits", component: VisitsPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/broker", component: BrokerDashboard }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/influencer", component: InfluencerDashboard }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/corporate", component: CorporateDashboard }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager", component: ManagerDashPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/properties", component: ManagerPropertiesPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/properties/new", component: ManagerAddPropertyPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/properties/:id/rooms", component: ManagerRoomsPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos", component: BookOSDashboard }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/bookings", component: BookingsList }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/bookings/new", component: NewBookingPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/bookings/:id", component: BookingDetail }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/quotations", component: QuotationsList }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/quotations/new", component: NewQuotation }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/quotations/:id", component: QuotationDetail }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/tenants", component: TenantsList }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/tenants/:id", component: TenantDetail }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/payments", component: PaymentsPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/rents", component: RentsPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/properties", component: PropertiesPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/documents", component: DocsPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/expenses", component: ExpensesPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/maintenance", component: MaintenancePage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/staff", component: StaffPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/analytics", component: AnalyticsPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/notifications", component: NotifsPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/admin", component: AdminPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/settings", component: SettingsPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/leads", component: LeadsPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/areas", component: AreasFunnelPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/map", component: MapPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/inventory", component: InventoryPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/command", component: CommandPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/founder", component: FounderTower }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/visits", component: VisitsWarRoom }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/movein", component: MoveInCenter }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/manager/bookos/room/:id", component: RoomDetail }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/owner", component: OwnerOverview }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/owner/revenue", component: OwnerRevenue }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/owner/collections", component: OwnerCollections }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/owner/maintenance", component: OwnerMaintenance }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/owner/health", component: OwnerHealth }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin", component: AdminLogin }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin/dashboard", component: AdminDashboard }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin/zones", component: AdminZones }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin/zone/:slug", component: AdminZoneDetail }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin/map", component: AdminMap }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin/leads", component: AdminLeads }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin/leads/:id", component: AdminLeadDetail }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin/payouts", component: AdminPayouts }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin/analytics", component: AdminDashboard }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin/properties", component: AdminProperties }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin/experts", component: AdminCaptains }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin/earners", component: AdminEarners }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin/channels", component: AdminChannels }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/earn", component: EarnHubPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/earn/:channel", component: EarnPlaybookPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/persona-kit/:id", component: PersonaKitPage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { component: NotFound })
  ] });
}
function App() {
  installReferralMockApi();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Router$1, { base: "/app", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Router, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] }) });
}
export {
  App as default
};
