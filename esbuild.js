import esbuild from "esbuild";
import esbuildSvelte from "esbuild-svelte";
import svelteOptions from "./svelte.config.js";
import { existsSync } from "fs";
import { mkdir } from "fs/promises";

const production = !process.env.WATCH;

// make sure the directory exists before stuff gets put into it
if (!existsSync("./public/build/")) {
  await mkdir("./public/build/");
}

await esbuild.build({
  entryPoints: ["src/main.js"],
  target: ["safari11"],
  bundle: true,
  format: "iife",
  watch: !production,
  minify: production,
  sourcemap: true,
  outdir: "./public/build",
  plugins: [
    esbuildSvelte({
      ...svelteOptions,
      include: /\.svelte$/,
    }),
  ],
  logLevel: "info",
});
