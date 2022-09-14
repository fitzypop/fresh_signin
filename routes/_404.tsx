import { UnknownPageProps } from "$fresh/server.ts";
import Page from "@/components/Page.tsx";

export default function Error({ url }: UnknownPageProps) {
  return (
    <Page>
      <p>Error 404: Page Not Found! {url.toString()}</p>
    </Page>
  );
}
