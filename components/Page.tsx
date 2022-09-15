import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import Navbar from "@/components/Navbar.tsx";

type PageProps = {
  header?: string;
  children?: ComponentChildren;
};

export default function Page(props: PageProps) {
  return (
    <>
      <Head>
        <title>Supa Fresh</title>
      </Head>
      <Navbar />
      <main class="w-screen h-screen bg-white">
        <div class="p-8 mx-auto max-w-screen-md text-black">
          {props.header
            ? (
              <>
                <h1 class="mb-2">
                  {props.header}
                </h1>
                <hr class="mb-2" />
              </>
            )
            : <></>}
          {props.children}
        </div>
      </main>
    </>
  );
}
