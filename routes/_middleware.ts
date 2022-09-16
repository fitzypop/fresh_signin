import { MiddlewareHandlerContext } from "$fresh/server.ts";
import supabaseClient from "@/utils/client.ts";

export async function handler(
  _req: Request,
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
  // const session = supabaseClient.auth.session();
  // console.log(session);
  //   if (!session) {
  //     return Response.redirect(new URL(base_url));
  //   }
  // }
  return await ctx.next();
}
