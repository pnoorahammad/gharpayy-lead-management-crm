import { c as create, p as persist } from "../_libs/zustand.mjs";
const MAX_ENTRIES = 5e3;
const useAuditLog = create()(
  persist(
    (set, get) => ({
      entries: [],
      log: (e) => {
        const entry = {
          ...e,
          id: `aud_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          ts: (/* @__PURE__ */ new Date()).toISOString()
        };
        set((s) => ({ entries: [entry, ...s.entries].slice(0, MAX_ENTRIES) }));
        return entry;
      },
      recentFor: (entityType, entityId, limit = 20) => get().entries.filter((e) => e.entityType === entityType && e.entityId === entityId).slice(0, limit),
      recentForActor: (actorId, limit = 20) => get().entries.filter((e) => e.actorId === actorId).slice(0, limit),
      recentAll: (limit = 50) => get().entries.slice(0, limit),
      clear: () => set({ entries: [] })
    }),
    { name: "gharpayy.audit-log.v1" }
  )
);
export {
  useAuditLog as u
};
