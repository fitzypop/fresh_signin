import { PageProps } from "$fresh/server.ts";
import PageLayout from "@/components/PageLayout.tsx";

export default function Greet(props: PageProps) {
  return (
    <PageLayout>
      <p>
        Url is: {props.url}
        <hr />
        Route is: "{props.route}"
        <hr />
        Hello {props.params.name}
      </p>
    </PageLayout>
  );
}

// This is an example of a "dynamic" route
// i.e. <domain>/hello/joe => Hello Joe
