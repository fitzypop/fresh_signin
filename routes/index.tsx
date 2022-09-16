// Splash Screen for site
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { supabaseClient } from "@/utils/client.ts";
import { base_url } from "@/utils/config.ts";
import DashPage from "@/components/DashPage.tsx";
import LandingPage from "@/components/LandingPage.tsx";

interface IndexProps {
  user?: Record<string, unknown> | null;
}

// export const handler: Handlers<IndexProps> = {
//   async GET(_req: Request, ctx: HandlerContext<IndexProps>) {
//     return await ctx.render({ user: null });
//   },
// };

export default function Index({ data }: PageProps<IndexProps | null>) {
  return (
    <>
      {data?.user ? <DashPage user={data.user} /> : <LandingPage />}
    </>
  );
}
