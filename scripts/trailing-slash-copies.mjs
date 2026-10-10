// GitHub Pages serves /ai from ai.html but /ai/ only from ai/index.html.
// Links pasted with a trailing slash (LinkedIn, chats) must not 404, so every
// exported page also gets a dir/index.html copy. Canonical tags stay without the slash.
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = "out";
const skip = new Set(["index.html", "404.html"]);

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      if (name !== "_next") walk(path);
      continue;
    }
    if (!name.endsWith(".html") || (dir === outDir && skip.has(name))) continue;
    if (name === "index.html") continue;
    const target = join(dir, name.slice(0, -".html".length), "index.html");
    if (existsSync(target)) continue;
    mkdirSync(join(dir, name.slice(0, -".html".length)), { recursive: true });
    copyFileSync(path, target);
  }
}

walk(outDir);
