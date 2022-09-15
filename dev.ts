#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import { config } from "dotenv";

// Load envs when running locally
// Deno Deploy automagically adds envs
// So this is not necessary in 'Prod'
await config({ export: true });
await dev(import.meta.url, "./main.ts");
