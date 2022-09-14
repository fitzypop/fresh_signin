import { PageProps } from "$fresh/server.ts";
import Page from "@/components/Page.tsx";

export default function Signup(_props: PageProps) {
  return (
    <Page>
      <h1>Sign Up Page</h1>
      <p>
        <a href="/">Home</a> | <a href="/login">Login</a>
      </p>
    </Page>
  );
}
