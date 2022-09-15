import { MiddlewareHandlerContext } from "$fresh/server.ts";
import supaClient from "@/utils/supabase.ts";

interface State {
  data?: Record<string, unknown>;
}
export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  console.log("request url", req.url);
  return await ctx.next();
}
