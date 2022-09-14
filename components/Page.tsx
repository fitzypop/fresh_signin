import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

type PageProps = {
  children: ComponentChildren;
};

export default function Page(props: PageProps) {
  return (
    <>
      <Head>
        <title>Fresh Signin App</title>
      </Head>
      <main class="w-screen h-screen bg(oxford)">
        <div class="p-8 mx-auto max-w-screen-md text-white">
          <img
            src="/logo.svg"
            height="100px"
            class="mx-auto"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          {props.children}
        </div>
      </main>
      {
        /* <footer class="bg-oxford">
        <a href="https://fresh.deno.dev">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge-dark.svg"
            alt="Made with Fresh"
          />
        </a>
      </footer> */
      }
    </>
  );
}
