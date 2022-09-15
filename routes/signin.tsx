import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Page from "@/components/Page.tsx";
import supaClient from "@/utils/supabase.ts";
import { ApiError } from "supabase";

interface LoginProps {
  error?: ApiError;
}
export const handler: Handlers<LoginProps | null> = {
  async GET(req: Request, ctx: HandlerContext<LoginProps>) {
    const url = new URL(req.url);
    const email = url.searchParams.get("email") || "";
    const password = url.searchParams.get("password") || "";

    if (email && password) {
      const { error } = await supaClient.auth.signIn({ email, password });
      if (error) {
        console.error(error);
        return ctx.render({ error });
      } else {
        return Response.redirect("/dash");
      }
    }

    return ctx.render();
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
      <form>
        <label>Email</label>
        <input
          type="email"
          class="text-black"
          name="email"
          id="email"
          required
        />
        <label>Password</label>
        <input
          type="password"
          class="text-black"
          name="password"
          id="password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </Page>
  );
}
