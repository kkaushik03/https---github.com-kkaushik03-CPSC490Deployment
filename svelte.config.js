import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter(),  // Use adapter-node for deployment on Heroku
	},
	preprocess: preprocess(),  // This ensures svelte-preprocess is used
};