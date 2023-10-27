import { Handlers } from "$fresh/src/server/mod.ts";

export const handler: Handlers = {
  GET() {
    return fetch("https://hft-moneytor.deno.dev");
  },
};
