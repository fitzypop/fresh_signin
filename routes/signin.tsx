import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Page from "@/components/Page.tsx";
import { supabaseClient } from "@/utils/client.ts";
import { ApiError } from "supabase";
import { getCredentials } from "@/utils/utils.ts";
import { base_url } from "@/utils/config.ts";
import AuthForm from "@/islands/AuthForm.tsx";

interface LoginProps {
  error?: ApiError;
}

export const handler: Handlers<LoginProps | null> = {
  async GET(req: Request, ctx: HandlerContext<LoginProps>) {
    const { email, password } = getCredentials(req);

    if (email && password) {
      const session = await supaClient.auth.signIn({ email, password });
      console.log(session);
      if (session?.error) {
        return await ctx.render({ error: session.error });
      } else {
        return Response.redirect(new URL("dash", base_url));
      }
    }

    return await ctx.render();
  },
};

export default function SignIn({ data }: PageProps<LoginProps | null>) {
  return (
    <Page header="Sign In Page">
      {data?.error
        ? (
          <div>
            <p>{data.error}</p>
          </div>
        )
        : <></>}
      <AuthForm />
    </Page>
  );
}
