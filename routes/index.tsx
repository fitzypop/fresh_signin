// Splash Screen for site
import Page from "@/components/Page.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Counter from "@/islands/Counter.tsx";
import supaClient from "@/utils/supabase.ts";
import { base_url } from "@/utils/config.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    if (supaClient.auth.session()) {
      return Response.redirect(new URL(`${base_url}/dash`));
    }
    return await ctx.render();
  },
};

export default function Index(_props: PageProps) {
  return (
    <Page>
      <h1>Super Awesome App</h1>
      <p>
        <a href="/signin">Sign In</a> | <a href="/signup">Sign Up</a>
      </p>
      <Counter start={1} />
    </Page>
  );
}
