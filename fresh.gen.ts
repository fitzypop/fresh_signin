// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_middleware.ts";
import * as $2 from "./routes/api/auth.ts";
import * as $3 from "./routes/api/login.ts";
import * as $4 from "./routes/dash.tsx";
import * as $5 from "./routes/hello/[name].tsx";
import * as $6 from "./routes/index.tsx";
import * as $7 from "./routes/signin.tsx";
import * as $8 from "./routes/signup.tsx";
import * as $$0 from "./islands/AuthForm.tsx";
import * as $$1 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_middleware.ts": $1,
    "./routes/api/auth.ts": $2,
    "./routes/api/login.ts": $3,
    "./routes/dash.tsx": $4,
    "./routes/hello/[name].tsx": $5,
    "./routes/index.tsx": $6,
    "./routes/signin.tsx": $7,
    "./routes/signup.tsx": $8,
  },
  islands: {
    "./islands/AuthForm.tsx": $$0,
    "./islands/Counter.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
