import { broadcastDevReady } from "@remix-run/node";
// import { logDevReady } from "@remix-run/cloudflare" // use `logDevReady` if using CloudFlare
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";


const BUILD_DIR = path.join(process.cwd(), "build");
const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => context.env,
});

export function onRequest(context) {
  return handleRequest(context);
}
// ... code setting up your server goes here ...

const port = 3000;
app.listen(port, async () => {
  console.log(`👉 http://localhost:${port}`);
  broadcastDevReady(await import(BUILD_DIR));
});
