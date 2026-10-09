import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The site is served from the domain root on Netlify (https://<site>.netlify.app/)
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  server: {
    port: 5173,
    // Forward /api requests to the backend in development so the frontend can
    // use same-origin URLs. The backend keeps the database private.
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true
      }
    }
  },
  preview: {
    port: 4173,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true
      }
    }
  }
});
