import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Page from "@/components/Page.tsx";
import supabase from "@/utils/supabase.ts";

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext) {
    // console.log(await req.formData());
    const url = new URL(req.url);
    const email = url.searchParams.get("email") || "";
    const password = url.searchParams.get("password") || "";

    if (email && password) {
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) {
        return ctx.render({ error });
      }
    }
    return ctx.render();
  },
  POST(req: Request, ctx: HandlerContext) {
    console.log(req);
    console.log("post request", req);
    console.log("post context", ctx);
    return ctx.render();
  },
};

export default function Login() {
  return (
    <Page>
      <h1>Login Page</h1>
      <p>
        <a href="/">Home</a> | <a href="/signup">Sign Up</a>
      </p>
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
