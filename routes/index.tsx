// Splash Screen for site
import Page from "@/components/Page.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Counter from "@/islands/Counter.tsx";
import supaClient from "@/utils/supabase.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: HandlerContext) {
    // console.log(supabase);
    // if (supaClient.auth.session()) {
    //   return Response.redirect(new URL(`${req.url}dash`));
    // }
    // return ctx.render();
    console.log(req.url);
    console.log(ctx);
    return ctx.render();
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
