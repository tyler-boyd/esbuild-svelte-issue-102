// svelte.config.js
import sveltePreprocess from "svelte-preprocess";

const production = !process.env.WATCH;

/**
 * This will add autocompletion if you're working with SvelteKit
 *
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  preprocess: sveltePreprocess({
    sourceMap: !production,
    postcss: true,
  }),
  compilerOptions: {
    // enable run-time checks when not in production
    dev: !production,
  },
};

export default config;
