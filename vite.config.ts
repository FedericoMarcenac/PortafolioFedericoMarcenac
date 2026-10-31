import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// base './' permite publicarlo en GitHub Pages sin configurar nada más.
export default defineConfig({ base: './', plugins: [react()] });
