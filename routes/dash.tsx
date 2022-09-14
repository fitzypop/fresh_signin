// User's Dashboard
import Page from "@/components/Page.tsx";

// import supabase from "@/utils/supabase.ts";
// import { HandlerContext, Handlers } from "$fresh/server.ts";

// export const handler: Handlers = {
//   GET(_req: Request, ctx: HandlerContext) {
//     if (!supabase.auth.session()) {
//       return Response.redirect("/");
//     }
//     return ctx.render();
//   },
// };

export default function Dash() {
  return (
    <Page>
      <p>User Dashboard</p>
    </Page>
  );
}
