import { MiddlewareHandlerContext } from "$fresh/server.ts";
// import supaClient from "@/utils/supabase.ts";

// export interface MiddleState {
//   data?: Record<string, unknown>;
// }

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext,
) {
  // console.log("request url", req.url);
  // console.debug(supaClient.auth);
  return await ctx.next();
}
