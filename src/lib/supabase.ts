export const SUPABASE_CONFIG = {
  url: import.meta.env.VITE_SUPABASE_URL || "https://qiluyabnizuwzrbslwzr.supabase.co",
  publishableKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
  jwksUrl: "https://qiluyabnizuwzrbslwzr.supabase.co/auth/v1/.well-known/jwks.json",
};
