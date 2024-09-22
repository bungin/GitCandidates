import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//https://community.render.com/t/no-open-http-ports-detected/14511/6 source for lines 7-10
// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  server: {
  host: "0.0.0.0",
  port: 8000,
  }
});
