// Splash Screen for site
import Page from "@/components/Page.tsx";
import { PageProps } from "$fresh/server.ts";
import Counter from "@/islands/Counter.tsx";

export default function Home(_props: PageProps) {
  return (
    <Page>
      <h1>Super Awesome App</h1>
      <p>
        <a href="/login">Login</a> | <a href="/signup">Sign Up</a>
      </p>
      <Counter start={1} />
    </Page>
  );
}
