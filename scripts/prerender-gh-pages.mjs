// GitHub Pages only serves static files, but this app builds with TanStack
// Start's Nitro pipeline, which renders HTML on demand from a server bundle
// rather than emitting a static index.html. This script runs that already-built
// server bundle once, in-process, to snapshot the rendered page to disk so the
// result can be hosted as a plain static site.
//
// (TanStack Start's own built-in `prerender`/`spa` options and Nitro's
// `github-pages`/`static` presets were tried first, but both currently break
// on this project's Vite 8 + Nitro v3(beta) + Cloudflare-adapter combination —
// this direct approach sidesteps that by reusing the exact server bundle the
// normal `vite build` already produces successfully.)

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const serverEntry = resolve(rootDir, ".output/server/index.mjs");
const publicDir = resolve(rootDir, ".output/public");

if (!existsSync(serverEntry)) {
  console.error(`Server bundle not found at ${serverEntry}. Run "vite build" first.`);
  process.exit(1);
}

const { default: handler } = await import(serverEntry);

async function render(pathname) {
  const request = new Request(`http://localhost${pathname}`);
  const response = await handler.fetch(request, {}, { waitUntil: () => {} });
  if (response.status >= 500) {
    throw new Error(`Rendering ${pathname} failed with status ${response.status}`);
  }
  return response.text();
}

const html = await render("/");
await mkdir(publicDir, { recursive: true });
await writeFile(resolve(publicDir, "index.html"), html);

// GitHub Pages serves 404.html for unmatched paths; since this is a single-page
// site, reuse the same document so deep links / typos still land on the app.
await writeFile(resolve(publicDir, "404.html"), html);

// Prevent GitHub Pages' Jekyll processing from mangling the output (e.g. it
// otherwise ignores files/folders starting with an underscore).
await writeFile(resolve(publicDir, ".nojekyll"), "");

console.log(`Prerendered ${publicDir}/index.html (${(await readFile(resolve(publicDir, "index.html"))).length} bytes)`);
