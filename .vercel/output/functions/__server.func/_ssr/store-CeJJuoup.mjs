import { c as create, p as persist } from "../_libs/zustand.mjs";
const uid = (p) => `${p}-${Math.random().toString(36).slice(2, 8)}`;
const useCRM10x = create()(
  persist(
    (set, get) => ({
      profiles: {},
      objections: [],
      calls: [],
      visits: {},
      commitments: [],
      assignments: [],
      merges: [],
      coachingNotes: [],
      messageOutcomes: [],
      upsertProfile: (p) => set((s) => ({
        profiles: {
          ...s.profiles,
          [p.leadId]: {
            ...s.profiles[p.leadId] ?? { leadId: p.leadId, updatedAt: (/* @__PURE__ */ new Date()).toISOString() },
            ...p,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }
        }
      })),
      addShiftingDate: (leadId, entry) => set((s) => {
        const existing = s.profiles[leadId] ?? { leadId, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
        const history = existing.shiftingHistory ?? [];
        const incomingDate = new Date(entry.shiftingDate).toISOString().slice(0, 10);
        const last = history[0];
        const lastDate = last ? new Date(last.shiftingDate).toISOString().slice(0, 10) : null;
        const lastTs = last ? +new Date(last.ts) : 0;
        if (lastDate === incomingDate && Date.now() - lastTs < 6e4) return {};
        const newEntry = { ...entry, ts: (/* @__PURE__ */ new Date()).toISOString() };
        return {
          profiles: {
            ...s.profiles,
            [leadId]: {
              ...existing,
              preferredMoveInDate: entry.shiftingDate,
              shiftingHistory: [newEntry, ...history],
              updatedAt: (/* @__PURE__ */ new Date()).toISOString()
            }
          }
        };
      }),
      logObjection: (r) => {
        const rec = { ...r, id: uid("obj"), ts: (/* @__PURE__ */ new Date()).toISOString() };
        set((s) => ({ objections: [rec, ...s.objections] }));
        return rec;
      },
      resolveObjection: (id, resolution) => set((s) => ({
        objections: s.objections.map((o) => o.id === id ? { ...o, resolution } : o)
      })),
      logCall: (r) => {
        const rec = { ...r, id: uid("call"), ts: (/* @__PURE__ */ new Date()).toISOString() };
        set((s) => ({ calls: [rec, ...s.calls] }));
        if (r.bestCallTime || r.language) {
          get().upsertProfile({
            leadId: r.leadId,
            ...r.bestCallTime ? { bestCallTime: r.bestCallTime } : {},
            ...r.language ? { language: r.language } : {}
          });
        }
        return rec;
      },
      upsertVisit: (v) => set((s) => ({
        visits: {
          ...s.visits,
          [v.tourId]: {
            ...s.visits[v.tourId] ?? { tourId: v.tourId, leadId: v.leadId },
            ...v,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }
        }
      })),
      addCommitment: (c) => {
        const rec = {
          ...c,
          id: uid("com"),
          ts: (/* @__PURE__ */ new Date()).toISOString(),
          status: "pending"
        };
        set((s) => ({ commitments: [rec, ...s.commitments] }));
        return rec;
      },
      resolveCommitment: (id, status) => set((s) => ({
        commitments: s.commitments.map((c) => c.id === id ? { ...c, status } : c)
      })),
      addAssignment: (a) => {
        const rec = { ...a, id: uid("asn"), ts: (/* @__PURE__ */ new Date()).toISOString() };
        set((s) => ({ assignments: [rec, ...s.assignments] }));
        return rec;
      },
      mergeDuplicates: (m) => {
        const rec = { ...m, id: uid("mrg"), ts: (/* @__PURE__ */ new Date()).toISOString() };
        set((s) => ({ merges: [rec, ...s.merges] }));
        return rec;
      },
      addCoachingNote: (n) => {
        const rec = { ...n, id: uid("cn"), ts: (/* @__PURE__ */ new Date()).toISOString() };
        set((s) => ({ coachingNotes: [rec, ...s.coachingNotes] }));
        return rec;
      },
      logMessageSend: (m) => {
        const rec = {
          ...m,
          id: uid("msg"),
          ts: (/* @__PURE__ */ new Date()).toISOString(),
          replied: false,
          bookedAfter: false
        };
        set((s) => ({ messageOutcomes: [rec, ...s.messageOutcomes] }));
        return rec;
      },
      markMessageReplied: (id) => set((s) => ({
        messageOutcomes: s.messageOutcomes.map((m) => m.id === id ? { ...m, replied: true } : m)
      })),
      markMessageBookedAfter: (leadId, bookingId, bookingTs) => {
        const bookingTime = bookingTs ? +new Date(bookingTs) : Date.now();
        const WINDOW = 14 * 864e5;
        set((s) => ({
          messageOutcomes: s.messageOutcomes.map((m) => {
            if (m.leadId !== leadId) return m;
            if (m.attributedBookingId) return m;
            const sentTs = +new Date(m.ts);
            if (sentTs > bookingTime) return m;
            if (bookingTime - sentTs > WINDOW) return m;
            return { ...m, bookedAfter: true, attributedBookingId: bookingId };
          })
        }));
      },
      // selectors
      unresolvedObjectionFor: (leadId) => {
        const list = get().objections.filter(
          (o) => o.leadId === leadId && o.code !== "none" && o.resolution !== "yes"
        );
        return list[0] ?? null;
      },
      callAttemptsFor: (leadId) => get().calls.filter((c) => c.leadId === leadId).length,
      reassignmentCount: (leadId) => get().assignments.filter((a) => a.leadId === leadId).length
    }),
    {
      name: "gharpayy.crm10x.v1",
      version: 1
    }
  )
);
export {
  useCRM10x as u
};
