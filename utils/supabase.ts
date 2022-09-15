import { createClient } from "supabase";
import { config } from "https://deno.land/std@0.155.0/dotenv/mod.ts";

const env = await config();
console.log(env);
const url = env.PUBLIC_SUPABASE_URL || "";
const key = env.PUBLIC_SUPABASE_API_KEY || "";

const supabase = createClient(url, key, { autoRefreshToken: true });
export default supabase;
