import { PageProps } from "$fresh/server.ts";
import Page from "@/components/Page.tsx";

export default function Login(_props: PageProps) {
  return (
    <Page>
      <h1>Login Page</h1>
      <p>
        <a href="/">Home</a> | <a href="/signup">Sign Up</a>
      </p>
    </Page>
  );
}
