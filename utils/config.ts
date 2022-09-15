import { config } from "dotenv";

// HACK: Deno Deploy automagically adds env variables
// HACK: But local deno does not, so we need to use std/dotenv
// HACK: DON"T USE deno.land/x/dotenv <- Deno Deploy does not support full file system api
const env = await config();
const [url_key, api_key] = ["PUBLIC_SUPABASE_URL", "PUBLIC_SUPABASE_API_KEY"];

export const supabase_url = env[url_key] || Deno.env.get(url_key) || "";
export const supabase_key = env[api_key] || Deno.env.get(api_key) || "";
