import * as path from "path";
import { statSync } from "fs";
import { env } from 'bun';

const PROJECT_ROOT = import.meta.dir;
const PUBLIC_DIR = path.resolve(PROJECT_ROOT, "public");
const BUILD_DIR = path.resolve(PROJECT_ROOT, "build");

const buildResult = await Bun.build({
  entrypoints: ["./src/index.tsx"],
  outdir: "./build",
});

console.log({ buildResult });

function serveFromDir(config: {
  directory: string;
  path: string;
}): Response | null {
  let basePath = path.join(config.directory, config.path);
  const suffixes = ["", ".html", "index.html"];

  for (const suffix of suffixes) {
    try {
      const pathWithSuffix = path.join(basePath, suffix);
      const stat = statSync(pathWithSuffix);
      if (stat && stat.isFile()) {
        return new Response(Bun.file(pathWithSuffix));
      }
    } catch (err) {}
  }

  return null;
}

const server = Bun.serve({
  development: env.NODE_ENV !== "production",
  fetch(request) {
    let reqPath = new URL(request.url).pathname;
    if (reqPath === "/") {
      reqPath = "/index.html";
    } 

    // check public
    const publicResponse = serveFromDir({
      directory: PUBLIC_DIR,
      path: reqPath,
    });
    if (publicResponse) {
      return publicResponse;
    }

    // check /.build
    const buildResponse = serveFromDir({ 
      directory: BUILD_DIR, 
      path: reqPath 
    });
    if (buildResponse) {
      return buildResponse;
    }

    return new Response("File not found", {
      status: 404,
    });
  },
});

console.log(`Listening on http://localhost:${server.port}`);
