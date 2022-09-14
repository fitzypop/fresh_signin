import { HandlerContext } from "$fresh/server.ts";

export interface Thing {
  other: Record<string, unknown>
}

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const body = {
    "username": "fitzypop",
    "userid": 1,
  }
  return new Response(JSON.stringify(body));
};
