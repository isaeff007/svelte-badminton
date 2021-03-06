import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel(),
		// to fix the typescript imports and add custom aliases
		// (s. tsconfig.json too)
		vite: {
			resolve: {
				alias: {
					src: path.resolve('./src'),	
					$data: path.resolve('./src/data')
				}
			}
		}
	}
};

export default config;
