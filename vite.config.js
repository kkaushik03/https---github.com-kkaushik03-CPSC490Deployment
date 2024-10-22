import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import mkcert from "vite-plugin-mkcert";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		process.env.NODE_ENV === 'development' ? mkcert() : null // Use mkcert only in development
	].filter(Boolean),
	kit: {
		adapter: adapter(),  // Use Node adapter for Heroku
	},
	server: {
		https: process.env.NODE_ENV === 'development', // Enable HTTPS only in development
		port: process.env.PORT || 5173,  // Use port 5173 for local, else the port Heroku assigns
		host: '0.0.0.0',  // Bind to all network interfaces (needed for Heroku)
		proxy: {},  // Essential to avoid the "can't use Symbol where you need a string" error
	},
	preprocess: preprocess()
});
