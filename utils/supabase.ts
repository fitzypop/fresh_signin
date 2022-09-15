import { createClient, SupabaseClientOptions } from "supabase";
import { supabase_key, supabase_url } from "@/utils/config.ts";

const options: SupabaseClientOptions = {
  autoRefreshToken: true,
};

const supaClient = createClient(supabase_url, supabase_key, options);
export default supaClient;
