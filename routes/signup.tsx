import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Page from "@/components/Page.tsx";

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext) {
    const resp = await ctx.render();
    return resp;
  },
};
export default function Signup(_props: PageProps) {
  return (
    <Page>
      <h1>Sign Up Page</h1>
      <p>
        <a href="/">Home</a> | <a href="/sigin">Sign In</a>
      </p>
    </Page>
  );
}
