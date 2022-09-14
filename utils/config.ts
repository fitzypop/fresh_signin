import "https://deno.land/x/dotenv@v3.2.0/mod.ts";

const DENO_ENV = Deno.env.get("DENO_ENV") || "development"
export default DENO_ENV;
