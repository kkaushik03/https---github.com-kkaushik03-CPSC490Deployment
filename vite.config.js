import mkcert from "vite-plugin-mkcert";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		process.env.NODE_ENV === 'development' ? mkcert() : null  // Use mkcert only in development
	].filter(Boolean),
	server: {
		https: process.env.NODE_ENV === 'development', // Enable HTTPS only in development
		port: process.env.PORT || 5173,
		host: '0.0.0.0'
	}
});