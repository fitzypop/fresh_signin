import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import Navbar from "@/components/Navbar.tsx";

type LayoutProps = {
  header?: string;
  children?: ComponentChildren;
};

export default function PageLayout({ header, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Supa Fresh</title>
      </Head>
      <div class="w-full h-full">
        <Navbar />
        <main class="w-screen h-screen bg-white">
          <div class="p-8 mx-auto max-w-screen-md text-black">
            {header
              ? (
                <>
                  <h1 class="mb-2">
                    {header}
                  </h1>
                  <hr class="mb-2" />
                </>
              )
              : <></>}
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
