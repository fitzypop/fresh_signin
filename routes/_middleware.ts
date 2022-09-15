import { MiddlewareHandlerContext } from "$fresh/server.ts";
import supaClient from "@/utils/supabase.ts";

interface State {
  data?: Record<string, unknown>;
}
export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  return await ctx.next();
}
