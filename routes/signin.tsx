import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Page from "@/components/Page.tsx";
import supaClient from "@/utils/supabase.ts";
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

export default function Login({ data }: PageProps<LoginProps | null>) {
  return (
    <Page>
      <h1>Login Page</h1>
      <p>
        <a href="/">Home</a> | <a href="/signup">Sign Up</a>
      </p>
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
