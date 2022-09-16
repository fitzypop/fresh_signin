import { MiddlewareHandlerContext } from "$fresh/server.ts";
import supabaseClient from "@/utils/client.ts";

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext,
) {
  return await ctx.next();
}
