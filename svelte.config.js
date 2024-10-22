import adapter from '@sveltejs/adapter-node'; // Use adapter-node for production
import preprocess from 'svelte-preprocess';

export default {
	kit: {
		adapter: adapter(),  // This is the key line for deploying to Heroku
		target: '#svelte'
	},
	preprocess: preprocess()
};