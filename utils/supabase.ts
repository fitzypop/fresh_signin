import { createClient } from "supabase";
import { config } from "https://deno.land/std@0.155.0/dotenv/mod.ts";

// HACK: Deno Deploy automagically adds env variables
// HACK: But local deno does not, so we need to use std/dotenv
// HACK: DON"T USE deno.land/x/dotenv <- Deno Deploy does not support full file system api
const env = await config();
if (!env) {
  console.log("empty env", env);
}
const url = env.PUBLIC_SUPABASE_URL || Deno.env.get("PUBLIC_SUPABASE_URL") ||
  "";
const key = env.PUBLIC_SUPABASE_API_KEY ||
  Deno.env.get("PUBLIC_SUPABASE_API_KEY") || "";

const supabase = createClient(url, key, { autoRefreshToken: true });
export default supabase;
