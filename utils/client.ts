import { createClient, SupabaseClientOptions } from "supabase";
import { supabase_key, supabase_url } from "@/utils/config.ts";

const options: SupabaseClientOptions = {
  autoRefreshToken: true,
};

const supabaseClient = createClient(supabase_url, supabase_key, options);
export { supabaseClient };
