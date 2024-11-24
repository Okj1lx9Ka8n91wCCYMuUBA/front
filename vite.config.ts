import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],

	server: {
		proxy: {
			'/api': {
				target: 'http://45.12.136.78:8000/api/v1',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
	assetsInclude: ['**/docs*'],
})
