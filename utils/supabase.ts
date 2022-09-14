import { createClient } from "supabase";

const url = Deno.env.get("PUBLIC_SUPABASE_URL") || "";
const key = Deno.env.get("PUBLIC_SUPABASE_API_KEY") || "";

const supabase = createClient(url, key, {});
export default supabase;
