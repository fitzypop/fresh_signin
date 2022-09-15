import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Page from "@/components/Page.tsx";
import { base_url } from "@/utils/config.ts";
import { supabaseClient } from "@/utils/client.ts";
import { getCredentials } from "@/utils/utils.ts";
import AuthForm from "@/islands/AuthForm.tsx";

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext) {
    const { email, password } = getCredentials(req);

    if (email && password) {
      const data = await supabaseClient.auth.signUp({ email, password });
      console.log(data);
      return Response.redirect(`${base_url}/dash`);
    }
    return await ctx.render();
  },
};
export default function SignUp(_props: PageProps) {
  return (
    <Page header="Sign Up Page">
      <AuthForm />
    </Page>
  );
}
