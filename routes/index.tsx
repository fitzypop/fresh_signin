// Splash Screen for site
import Page from "@/components/Page.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Counter from "@/islands/Counter.tsx";
import { supabaseClient } from "@/utils/client.ts";
import { base_url } from "@/utils/config.ts";

// export const handler: Handlers = {
//   async GET(_req: Request, ctx: HandlerContext) {
//     const { user, session, error } = supaClient.auth.api.getUser();
//     if (supaClient.auth.session()) {
//       return Response.redirect(new URL(new URL("dash", base_url)));
//     }
//     return await ctx.render();
//   },
// };

export default function Index(_props: PageProps) {
  return (
    <Page header="Home Page">
      <Counter start={1} />
    </Page>
  );
}
