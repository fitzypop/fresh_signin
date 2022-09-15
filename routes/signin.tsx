import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Page from "@/components/Page.tsx";
import supaClient from "@/utils/supabase.ts";
import { ApiError } from "supabase";
import { getCredentials } from "@/utils/utils.ts";
import { base_url } from "@/utils/config.ts";
import LoginForm from "@/islands/LoginForm.tsx";

interface LoginProps {
  error?: ApiError;
}

export const handler: Handlers<LoginProps | null> = {
  async GET(req: Request, ctx: HandlerContext<LoginProps>) {
    const { email, password } = getCredentials(req);

    if (email && password) {
      const { error } = await supaClient.auth.signIn({ email, password });
      if (error) {
        console.error(error);
        return await ctx.render({ error });
      } else {
        return Response.redirect(`${base_url}/dash`);
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
      <LoginForm />
    </Page>
  );
}
