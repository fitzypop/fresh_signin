import { PageProps } from "$fresh/server.ts";
import Page from "@/components/Page.tsx";

import { createClient } from "supabase";
const supabase = createClient(
  "https://xyzcompany.supabase.co",
  "public-anon-key",
  {},
);

console.log("Supabase Instance: ", supabase);

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
