import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from 'svelte-adapter-bun';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  // compilerOptions: {
  //   runes: true,
  // },
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    alias: {
      '$assets/*': 'src/assets/*',
      '$components/*': 'src/components/*',
      '$config/*': 'src/config/*',
      '$constants/*': 'src/constants/*',
      '$contexts/*': 'src/contexts/*',
      '$enums/*': 'src/enums/*',
      '$features/*': 'src/features/*',
      '$hooks/*': 'src/hooks/*',
      '$interfaces/*': 'src/interfaces/*',
      $lib: 'src/lib',
      '$lib/*': 'src/lib/*',
      '$providers/*': 'src/providers/*',
      '$repository/*': 'src/repository/*',
      '$routes/*': 'src/routes/*',
      '$stores/*': 'src/stores/*',
      '$test/*': 'src/test/*',
      '$types/*': 'src/types/*',
      '$utils/*': 'src/utils/*',
    },
    prerender: {
      entries: ['/(protected)/cats', '/(protected)/birds'],
    },
  },
};

export default config;
