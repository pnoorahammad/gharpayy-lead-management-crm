import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useNavigate, h as useParams, L as Link } from "./_libs/tanstack__react-router.mjs";
import { a8 as PGS, A as AppShell, ah as scarcity$1, aj as personaBadge$1, ai as freshness$1, av as valueScore$1, au as areaMood$1, aw as commuteEstimate$1, ax as findAlternatives$1, ay as budgetStretch$1, az as buildWaCard$1, ak as perDayLabel, aA as telLink$1, aB as waLink$2, aC as seasonalNudge$1, aD as perDay$1, al as personaStyle$1 } from "./_ssr/AppShell-Cp2f_YYK.mjs";
import { u as useApp, q as cn } from "./_ssr/router-kYRMoTX_.mjs";
import "./_libs/sonner.mjs";
import "./_libs/react-dom.mjs";
import { bC as ArrowLeft, bz as BadgeCheck, P as Phone, r as MessageCircle, bD as Coins, F as Flame, O as MapPin, l as ShieldCheck, b1 as Utensils, d as Users, S as Sparkles, x as Calendar, j as Copy } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/isbot.mjs";
import "./_libs/zustand.mjs";
import "./_libs/radix-ui__react-dropdown-menu.mjs";
import "./_libs/radix-ui__primitive.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-menu.mjs";
import "./_libs/radix-ui__react-collection.mjs";
import "./_libs/radix-ui__react-direction.mjs";
import "./_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "./_libs/radix-ui__react-focus-guards.mjs";
import "./_libs/radix-ui__react-focus-scope.mjs";
import "./_libs/radix-ui__react-id.mjs";
import "./_libs/radix-ui__react-popper.mjs";
import "./_libs/floating-ui__react-dom.mjs";
import "./_libs/floating-ui__dom.mjs";
import "./_libs/floating-ui__core.mjs";
import "./_libs/floating-ui__utils.mjs";
import "./_libs/radix-ui__react-arrow.mjs";
import "./_libs/radix-ui__react-use-size.mjs";
import "./_libs/radix-ui__react-portal.mjs";
import "./_libs/radix-ui__react-presence.mjs";
import "./_libs/radix-ui__react-roving-focus.mjs";
import "./_libs/aria-hidden.mjs";
import "./_libs/react-remove-scroll.mjs";
import "tslib";
import "./_libs/react-remove-scroll-bar.mjs";
import "./_libs/react-style-singleton.mjs";
import "./_libs/get-nonce.mjs";
import "./_libs/use-sidecar.mjs";
import "./_libs/use-callback-ref.mjs";
import "./_libs/radix-ui__react-dialog.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
import "./_ssr/store-CeJJuoup.mjs";
import "./_ssr/analytics-Ds6VG4Ib.mjs";
import "./_libs/radix-ui__react-collapsible.mjs";
import "./_libs/cmdk.mjs";
import "./_ssr/personas-DYCrD02E.mjs";
import "./_libs/radix-ui__react-scroll-area.mjs";
import "./_libs/radix-ui__number.mjs";
import "./_libs/date-fns.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/radix-ui__react-tabs.mjs";
import "./_libs/radix-ui__react-select.mjs";
import "./_libs/radix-ui__react-use-previous.mjs";
import "./_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "./_libs/radix-ui__react-label.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const inr = (n) => `₹${n.toLocaleString("en-IN")}`;
function bedLine(pg) {
  const parts = [];
  if (pg.prices.triple) parts.push(`Triple ${inr(pg.prices.triple)}`);
  if (pg.prices.double) parts.push(`Double ${inr(pg.prices.double)}`);
  if (pg.prices.single) parts.push(`Single ${inr(pg.prices.single)}`);
  return parts.join(" · ") || "On call";
}
function buildThreeOptions(pgs, opts) {
  const greet = opts?.leadName ? `Hi ${opts.leadName},` : "Hi,";
  const ctx = opts?.landmark ? ` near ${opts.landmark}` : "";
  const lines = [greet, "", `Here are 3 ${opts?.gender ?? ""} PG options${ctx} curated for you:`, ""];
  pgs.slice(0, 3).forEach((pg, i) => {
    const cheapest = Math.min(...[pg.prices.triple, pg.prices.double, pg.prices.single].filter((x) => x > 0).concat(99999));
    lines.push(`*${i + 1}. ${pg.name}* — ${pg.area}`);
    if (cheapest < 99999) lines.push(`   From ${inr(cheapest)} (₹${perDay$1(cheapest)}/day)`);
    if (pg.usp) lines.push(`   ✨ ${pg.usp.slice(0, 80)}`);
    const lm = pg.nearbyLandmarks?.[0];
    if (lm) lines.push(`   📍 ${lm.w <= 0 ? "<1m" : lm.w + "m"} walk to ${lm.n}`);
    lines.push("");
  });
  lines.push("Reply with a number to lock a visit. — Gharpayy");
  return lines.join("\n");
}
function buildBrochure(pg, opts) {
  const greet = "Hi,";
  const sc = scarcity$1(pg);
  const lines = [
    greet,
    "",
    `*${pg.name}* — ${pg.area}`,
    pg.tier ? `${pg.tier} · ${pg.gender} · IQ ${pg.iq}/100` : "",
    "",
    "*PRICING*",
    bedLine(pg)
  ];
  const cheap = Math.min(...[pg.prices.triple, pg.prices.double, pg.prices.single].filter((x) => x > 0).concat(99999));
  if (cheap < 99999) lines.push(`Effective: ₹${perDay$1(cheap)}/day · everything included`);
  if (sc.hot) lines.push(`⚠️ ${sc.reason}`);
  lines.push("");
  if (pg.usp) {
    lines.push("*WHY THIS PG*", pg.usp, "");
  }
  if (pg.nearbyLandmarks?.length) {
    lines.push("*NEAREST LANDMARKS*");
    pg.nearbyLandmarks.slice(0, 3).forEach((lm) => {
      const dist = lm.d < 1 ? `${Math.round(lm.d * 1e3)}m` : `${lm.d.toFixed(1)}km`;
      lines.push(`• ${lm.n} — ${dist} (${lm.w <= 0 ? "<1" : lm.w} min walk)`);
    });
    lines.push("");
  }
  if (pg.amenities.length) {
    lines.push("*AMENITIES*", pg.amenities.slice(0, 8).join(" · "), "");
  }
  if (pg.foodType || pg.mealsIncluded) lines.push(`🍽 *FOOD:* ${pg.foodType}${pg.mealsIncluded ? " · " + pg.mealsIncluded : ""}`, "");
  if (pg.safety.length) lines.push(`🛡 *SAFETY:* ${pg.safety.join(" · ")}`, "");
  if (pg.deposit) lines.push(`💰 *DEPOSIT:* ${pg.deposit}`);
  if (pg.minStay) lines.push(`📅 *MIN STAY:* ${pg.minStay}`);
  if (pg.manager.phone) lines.push(`📞 Manager: ${pg.manager.phone}`);
  if (pg.mapsLink) lines.push(`🗺 ${pg.mapsLink}`);
  lines.push("", "Want to lock a visit? Reply yes. — Gharpayy");
  return lines.filter(Boolean).join("\n");
}
function buildParentPack(pg, opts) {
  const greet = "Namaste,";
  const lines = [
    greet,
    "",
    `Safety profile — *${pg.name}*, ${pg.area}.`,
    "",
    "🛡 *SAFETY MEASURES*"
  ];
  if (pg.safety.length) {
    pg.safety.forEach((s) => lines.push(`✓ ${s}`));
  } else {
    lines.push("✓ Verified by Gharpayy team");
  }
  lines.push(`✓ All-${pg.gender === "Girls" ? "female" : pg.gender.toLowerCase()} residents`);
  lines.push("✓ No outside male entry policy");
  lines.push("");
  lines.push("🍽 *FOOD & TIMINGS*");
  if (pg.foodType) lines.push(`• Type: ${pg.foodType}`);
  if (pg.mealsIncluded) lines.push(`• Meals: ${pg.mealsIncluded}`);
  lines.push("• Fixed timings: 8:30 AM · 1:00 PM · 8:30 PM");
  lines.push("");
  lines.push("📍 *LOCATION*");
  lines.push(`• ${pg.area}${pg.locality ? `, ${pg.locality}` : ""}`);
  if (pg.mapsLink) lines.push(`• Maps: ${pg.mapsLink}`);
  const hospital = pg.nearbyLandmarks?.find((l) => /hospital|clinic|medical/i.test(l.t));
  if (hospital) lines.push(`• Nearest hospital: ${hospital.n} (${hospital.d}km)`);
  lines.push("");
  if (pg.manager.phone) {
    lines.push("📞 *EMERGENCY CONTACT*");
    lines.push(`• Manager${pg.manager.name ? ` (${pg.manager.name})` : ""}: ${pg.manager.phone}`);
    lines.push("• Available 24/7 for parents");
    lines.push("");
  }
  lines.push("Visit anytime, unannounced. We encourage it.", "— Gharpayy Team");
  return lines.join("\n");
}
function buildReengagement(pg, stage) {
  const fresh = freshness$1(pg);
  const intro = fresh.isFresh && fresh.message ? `Quick update — ${fresh.message.toLowerCase()}` : "Following up on the property you liked";
  switch (stage) {
    case "visited":
      return `Hi! ${intro}

*${pg.name}* — the room you saw is still available, but someone else is visiting tomorrow morning.

Want me to hold it for you with a token today?
— Gharpayy`;
    case "got_price":
      return `Hi! Quick update on *${pg.name}* — ${fresh.changeKind ?? "still available at the same price"}.

${bedLine(pg)}
${fresh.changeKind === "Price drop" ? "(That's the new lowered rate.)" : ""}

Shall I block a visit slot this week?
— Gharpayy`;
    case "browsed":
    default:
      return `Hi! Saw you were exploring ${pg.area}.

*${pg.name}* opened up a room this week — usually full. ${pg.usp ? "\n\n✨ " + pg.usp : ""}

Worth a 10-min visit?
— Gharpayy`;
  }
}
function buildWalkthrough(pg) {
  const lm = pg.nearbyLandmarks?.[0];
  const cheap = Math.min(...[pg.prices.triple, pg.prices.double, pg.prices.single].filter((x) => x > 0).concat(99999));
  return [
    `90-SECOND WALKTHROUGH SCRIPT — ${pg.name}`,
    ``,
    `🎬 OPEN (10s)`,
    `"Welcome — you're standing at ${pg.area}'s ${pg.tier.toLowerCase()} pick.${lm ? ` ${lm.w <= 0 ? "Less than a minute" : lm.w + " min"} walk to ${lm.n} — that alone saves you ₹${perDay$1(3e3)}/day in commute."` : '"'}`,
    ``,
    `✨ WOW MOMENT 1 (15s)`,
    `Show: ${pg.amenities[0] || "The lobby/common area"}.`,
    `Say: "This is what ₹${cheap < 99999 ? perDay$1(cheap) : "X"}/day buys you here. Compare that to renting alone."`,
    ``,
    `✨ WOW MOMENT 2 (15s)`,
    `Show: ${pg.foodType ? "Kitchen/dining — point at hygiene" : "A typical room — open the wardrobe"}.`,
    `Say: "${pg.mealsIncluded ? pg.mealsIncluded + " — never cook again." : "Furnished, ready, walk in with one suitcase."}"`,
    ``,
    `✨ WOW MOMENT 3 (15s)`,
    `Show: ${pg.safety[0] ? "Safety setup — " + pg.safety[0] : "View from the room"}.`,
    `Say: "${pg.safety.length ? "This is what your parents will care about." : "This is the view you'll wake up to."}"`,
    ``,
    `💰 PRICE REVEAL (10s)`,
    `Say slowly: "${bedLine(pg)}. All inclusive. ${cheap < 99999 ? `That's ₹${perDay$1(cheap)}/day.` : ""}"`,
    `Pause for 3 seconds. Don't fill silence.`,
    ``,
    `🎯 CLOSE (10s)`,
    `Ask: "${pg.scripts?.pitch?.closeQuestion || "Should I block this room for you with a small token today?"}"`
  ].join("\n");
}
const OBJECTIONS = [{
  key: "expensive",
  label: "Too expensive"
}, {
  key: "far",
  label: "Too far"
}, {
  key: "no_gym",
  label: "No gym"
}, {
  key: "no_meals",
  label: "No meals"
}, {
  key: "no_ac",
  label: "No AC"
}, {
  key: "wrong_food",
  label: "Wrong food type"
}];
function SupplyHubDetail() {
  const {
    role
  } = useApp();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (role === "owner") navigate({
      to: "/owner/inventory"
    });
  }, [role, navigate]);
  const {
    id
  } = useParams({
    from: "/supply-hub/$id"
  });
  const pg = reactExports.useMemo(() => PGS.find((p) => p.id === id), [id]);
  const [obj, setObj] = reactExports.useState("expensive");
  const [tab, setTab] = reactExports.useState("intel");
  if (role === "owner") return null;
  if (!pg) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-lg", children: "PG not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/supply-hub", className: "mt-3 inline-flex items-center gap-1 text-accent text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to Supply Hub"
      ] })
    ] }) });
  }
  const sc = scarcity$1(pg);
  const persona = personaBadge$1(pg);
  const ps = personaStyle$1(persona);
  const fr = freshness$1(pg);
  const value = valueScore$1(pg);
  const mood = areaMood$1(pg.area);
  const cheap = Math.min(...[pg.prices.triple, pg.prices.double, pg.prices.single].filter((x) => x > 0).concat(99999));
  const nearestKm = pg.nearbyLandmarks?.[0]?.d ?? null;
  const commute = nearestKm !== null ? commuteEstimate$1(nearestKm) : null;
  const alts = findAlternatives$1(pg, obj, PGS);
  const stretch = budgetStretch$1(cheap < 99999 ? cheap : 18e3, PGS, pg.gender);
  const waCard = buildWaCard$1(pg);
  const brochure = buildBrochure(pg);
  const parentPack = buildParentPack(pg);
  const reengage = buildReengagement(pg, "got_price");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/supply-hub", className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Supply Hub"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: [
            pg.area,
            " · ",
            pg.tier,
            " · ",
            pg.gender
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-2xl font-semibold", children: pg.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: pg.locality }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium", ps.color), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-3 w-3" }),
              " ",
              persona
            ] }),
            sc.hot && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md border border-rose-400/40 bg-rose-400/10 text-rose-300 px-2 py-0.5 text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3 w-3" }),
              sc.level
            ] }),
            !sc.hot && sc.level !== "AVAILABLE" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-amber-400/40 bg-amber-400/10 text-amber-300 px-2 py-0.5 text-xs", children: sc.level }),
            fr.isFresh && fr.changeKind && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-md border border-emerald-400/40 bg-emerald-400/10 text-emerald-300 px-2 py-0.5 text-xs", children: [
              fr.changeKind,
              " · ",
              fr.daysAgo,
              "d ago"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-md border border-border bg-muted/30 px-2 py-0.5 text-xs", children: [
              "IQ ",
              pg.iq,
              "/100"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-md border border-border bg-muted/30 px-2 py-0.5 text-xs", children: [
              "Value ",
              value
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs italic text-muted-foreground", children: ps.pitch })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: "Starting" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-semibold", children: cheap < 99999 ? `₹${(cheap / 1e3).toFixed(1)}k` : "—" }),
          cheap < 99999 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            perDayLabel(cheap),
            " · all inclusive"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex justify-end gap-2", children: [
            pg.manager.phone && telLink$1(pg.manager.phone) && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: telLink$1(pg.manager.phone), className: "inline-flex items-center gap-1 rounded-md border border-border px-2 py-1.5 text-xs hover:bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
              " Call"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waLink$2(pg.manager.phone, waCard), target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1 rounded-md bg-accent px-2 py-1.5 text-xs text-accent-foreground hover:opacity-90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3 w-3" }),
              " WhatsApp"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-md border border-dashed border-border/60 bg-muted/20 p-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Scarcity reason:" }),
        " ",
        sc.reason,
        fr.isFresh && fr.message && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Re-engage:" }),
          " ",
          fr.message
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Season:" }),
        " ",
        seasonalNudge$1()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 border-b border-border", children: ["intel", "wa", "scripts", "alternatives"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(t), className: cn("px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors", tab === t ? "border-accent text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"), children: [
      t === "intel" && "Property Intel",
      t === "wa" && "WhatsApp Cards",
      t === "scripts" && "Pitch & Scripts",
      t === "alternatives" && "Alternatives & Stretch"
    ] }, t)) }),
    tab === "intel" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Pricing", icon: Coins, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-sm", children: [
        pg.prices.single > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Single", value: `₹${pg.prices.single.toLocaleString("en-IN")}/mo`, sub: `₹${perDay$1(pg.prices.single)}/day` }),
        pg.prices.double > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Double", value: `₹${pg.prices.double.toLocaleString("en-IN")}/mo`, sub: `₹${perDay$1(pg.prices.double)}/day` }),
        pg.prices.triple > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Triple", value: `₹${pg.prices.triple.toLocaleString("en-IN")}/mo`, sub: `₹${perDay$1(pg.prices.triple)}/day` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Deposit", value: pg.deposit || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Min stay", value: pg.minStay || "—" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Scarcity per bed", icon: Flame, accent: sc.hot, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BedRow, { label: "Single", left: sc.perBed.single }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BedRow, { label: "Double", left: sc.perBed.double }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BedRow, { label: "Triple", left: sc.perBed.triple }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground italic pt-1", children: sc.reason })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Commute reality", icon: MapPin, children: commute ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Distance", value: `${commute.km} km` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Walk", value: `${commute.walkMins} min` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Auto (normal)", value: `${commute.autoMins} min` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Auto (peak)", value: `${commute.peakMins} min` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-accent pt-1", children: commute.oneLiner })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "No coordinates available." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Amenities & Safety", icon: ShieldCheck, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-1 mb-1", children: "Amenities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: pg.amenities.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded border border-border bg-muted/30 px-1.5 py-0.5 text-[11px]", children: a }, a)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-3 mb-1", children: "Safety" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: pg.safety.length ? pg.safety.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 px-1.5 py-0.5 text-[11px]", children: s }, s)) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Not disclosed" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Food & Vibe", icon: Utensils, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Food type", value: pg.foodType || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Meals", value: pg.mealsIncluded || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Cleaning", value: pg.cleaning || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Noise", value: pg.noise || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Vibe", value: pg.vibe || "—" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: `Area mood — ${pg.area}`, icon: Users, children: mood ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Crowd", value: mood.crowd }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Age", value: mood.ageBand }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Nightlife", value: mood.nightlife }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Noise", value: mood.noise }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Weekend", value: mood.weekend }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Top companies", value: mood.topCompanies.slice(0, 4).join(", ") })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "No area intel." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Nearby landmarks", icon: MapPin, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-64 overflow-y-auto pr-1 space-y-1.5 scrollbar-thin", children: pg.nearbyLandmarks.slice(0, 12).map((lm, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: lm.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: lm.t })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: lm.d < 1 ? `${Math.round(lm.d * 1e3)}m` : `${lm.d}km` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: lm.w <= 0 ? "<1 min walk" : `${lm.w} min walk` })
        ] })
      ] }, i)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: `Quality IQ · ${pg.iq}/100`, icon: BadgeCheck, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-64 overflow-y-auto pr-1 space-y-1 scrollbar-thin", children: Object.entries(pg.iqBreakdown).map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("font-mono", v.ok ? "text-emerald-400" : "text-muted-foreground/60"), children: [
          v.earned,
          "/",
          v.max
        ] })
      ] }, k)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Buyer persona", icon: Sparkles, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Archetype", value: pg.persona.archetype }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Age", value: pg.persona.ageRange }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Salary", value: pg.persona.salary }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Companies", value: pg.persona.likelyCompanies }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Decision maker", value: pg.persona.decisionMaker }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Conversion", value: pg.persona.conversionProbability })
        ] }),
        pg.persona.painPoints?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-3 mb-1", children: "Pain points" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-xs list-disc pl-4 space-y-0.5 text-muted-foreground", children: pg.persona.painPoints.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: p }, i)) })
        ] })
      ] })
    ] }),
    tab === "wa" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCard, { title: "WhatsApp card", body: waCard, pgPhone: pg.manager.phone }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCard, { title: "Full brochure", body: brochure, pgPhone: pg.manager.phone }),
      pg.gender === "Girls" && /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCard, { title: "Parent safety pack", body: parentPack, pgPhone: pg.manager.phone }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCard, { title: "Re-engagement (got price)", body: reengage, pgPhone: pg.manager.phone })
    ] }),
    tab === "scripts" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Call 1 — discovery", icon: Phone, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Goal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: pg.scripts.call1.goal })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Opening" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "italic", children: [
            '"',
            pg.scripts.call1.opening,
            '"'
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Hook" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "italic", children: [
            '"',
            pg.scripts.call1.hook,
            '"'
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Close" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "italic", children: [
            '"',
            pg.scripts.call1.close,
            '"'
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Call 2 — objections", icon: MessageCircle, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: pg.scripts.call2.goal }),
        pg.scripts.call2.objections.slice(0, 6).map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-border bg-muted/20 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold text-rose-300", children: [
            '"',
            o.obj,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-1", children: o.resp })
        ] }, i))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Pitch script", icon: Sparkles, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Location", value: pg.scripts.pitch.location }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Lifestyle", value: pg.scripts.pitch.lifestyle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Price close", value: pg.scripts.pitch.priceClose }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Close question", value: pg.scripts.pitch.closeQuestion })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Money script", icon: Coins, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Breakdown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-4 text-xs space-y-0.5", children: pg.scripts.money.breakdown.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: b }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-2", children: "Pay later" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", children: pg.scripts.money.payLater }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-2", children: "Deposit objection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", children: pg.scripts.money.depositObjection })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "90-second walkthrough", icon: Calendar, children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-xs whitespace-pre-wrap font-sans", children: buildWalkthrough(pg) }) })
    ] }),
    tab === "alternatives" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "If lead objects:" }),
          OBJECTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setObj(o.key), className: cn("rounded-md border px-2 py-1 text-xs", obj === o.key ? "border-accent bg-accent/10 text-accent" : "border-border hover:bg-muted"), children: o.label }, o.key))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
          alts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "No alternatives in this area." }),
          alts.map((alt) => /* @__PURE__ */ jsxRuntimeExports.jsx(AltTile, { pg: alt }, alt.id))
        ] }),
        alts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CopyBtn, { label: "Copy 3-options WhatsApp message", text: buildThreeOptions(alts, {
          gender: pg.gender
        }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Budget stretch — what +₹2k / +₹5k unlocks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: stretch.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-lg font-semibold", children: [
            "₹",
            (s.budget / 1e3).toFixed(0),
            "k ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "+ ₹",
              s.perDayDelta,
              "/day"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1 mb-2", children: "Unlocks:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-xs list-disc pl-4 space-y-0.5", children: s.unlocks.map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: u }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-[10px] text-muted-foreground", children: [
            s.pgs.length,
            " options at this tier"
          ] })
        ] }, s.budget)) })
      ] })
    ] })
  ] }) });
}
function Card({
  title,
  icon: Icon,
  children,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-lg border bg-card p-4", accent && "border-accent/40"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: title })
    ] }),
    children
  ] });
}
function Row({
  label,
  value,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-right", children: [
      value,
      sub && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground ml-1", children: [
        "(",
        sub,
        ")"
      ] })
    ] })
  ] });
}
function BedRow({
  label,
  left
}) {
  if (left === null) return /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label, value: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/60", children: "Not offered" }) });
  const tone = left === 0 ? "text-rose-400" : left <= 2 ? "text-amber-300" : "text-emerald-400";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label, value: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: tone, children: left === 0 ? "Full" : `${left} left` }) });
}
function AltTile({
  pg
}) {
  const cheap = Math.min(...[pg.prices.triple, pg.prices.double, pg.prices.single].filter((x) => x > 0).concat(99999));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/supply-hub/$id", params: {
    id: pg.id
  }, className: "block rounded-lg border bg-card p-3 hover:border-accent/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: [
      pg.area,
      " · ",
      pg.tier
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm mt-0.5 truncate", children: pg.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        "IQ ",
        pg.iq
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: cheap < 99999 ? `₹${(cheap / 1e3).toFixed(0)}k` : "—" })
    ] })
  ] });
}
function MessageCard({
  title,
  body,
  pgPhone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyBtn, { label: "Copy", text: body }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waLink$2(pgPhone, body), target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1 rounded-md bg-accent px-2 py-1 text-xs text-accent-foreground hover:opacity-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3 w-3" }),
          " Send"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-xs whitespace-pre-wrap font-sans bg-muted/20 rounded p-3 max-h-96 overflow-y-auto scrollbar-thin", children: body })
  ] });
}
function CopyBtn({
  label,
  text
}) {
  const [copied, setCopied] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }, className: "inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs hover:bg-muted", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3" }),
    " ",
    copied ? "Copied" : label
  ] });
}
export {
  SupplyHubDetail as component
};
