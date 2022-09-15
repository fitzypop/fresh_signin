import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { base_url } from "../utils/config.ts";
import supaClient from "../utils/supabase.ts";
// import supaClient from "@/utils/supabase.ts";

// export interface MiddleState {
//   data?: Record<string, unknown>;
// }

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext,
) {
  // console.log("request url", req.url);
  // console.debug(supaClient.auth);
  // const url = new URL(req.url);
  // const signin = new URL("signin", base_url);
  // const signup = new URL("singup", base_url);
  // if (
  //   url.pathname !== signup.toString() || url.pathname !== signin.toString()
  // ) {
  const session = supaClient.auth.session();
  console.log(session);
  //   if (!session) {
  //     return Response.redirect(new URL(base_url));
  //   }
  // }
  return await ctx.next();
}
