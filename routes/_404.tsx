import { UnknownPageProps } from "$fresh/server.ts";
import PageLayout from "@/components/PageLayout.tsx";

export default function Error({ url }: UnknownPageProps) {
  return (
    <PageLayout header="Error">
      <p>Error 404: Page Not Found! {url.toString()}</p>
    </PageLayout>
  );
}
