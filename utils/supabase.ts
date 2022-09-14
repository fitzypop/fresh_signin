import { createClient, SupabaseClient } from "supabase";
import envs from "@/utils/envs.ts";

const supabase: SupabaseClient = createClient(
  envs["PUBLIC_SUPABASE_URL"],
  envs["PUBLIC_SUPABASE_API_KEY"],
  {},
);

export default supabase;
