import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

export default defineConfig({
	plugins: [
		vue()
	],
	server: {
		port: 5000,
		host: '0.0.0.0',
		hmr: {
			host: 'localhost',
			port: 80,
		}
	},
	build: {
		chunkSizeWarningLimit: 50,
		manifest: true,
	},
	resolve: {
		alias: {
			"~": resolve(__dirname, "src"),
		},
	},
})