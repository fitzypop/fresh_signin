import { PageProps } from "$fresh/server.ts";
import Page from "@/components/Page.tsx";

export default function Greet(props: PageProps) {
  return (
    <Page>
      <p>
        Url is: {props.url}
        <hr />
        Route is: "{props.route}"
        <hr />
        Hello {props.params.name}
      </p>
    </Page>
  );
}

// This is an example of a "dynamic" route
// i.e. <domain>/hello/joe => Hello Joe
