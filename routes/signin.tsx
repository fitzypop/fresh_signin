import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import supabaseClient from "@/utils/client.ts";
import { ApiError } from "supabase";
import { getCredentials } from "@/utils/utils.ts";
import { base_url } from "@/utils/config.ts";
import AuthForm from "@/islands/AuthForm.tsx";
import PageLayout from "@/components/PageLayout.tsx";

interface LoginProps {
  error?: ApiError;
}

export const handler: Handlers<LoginProps> = {
  async GET(req: Request, ctx: HandlerContext<LoginProps>) {
    const { email, password } = getCredentials(req);

    if (email && password) {
      const session = await supabaseClient.auth.signIn({ email, password });
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
    <PageLayout header="Sign In Page">
      {data?.error
        ? (
          <div>
            <p>{data.error}</p>
          </div>
        )
        : <></>}
      <AuthForm />
    </PageLayout>
  );
}
