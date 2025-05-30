import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 10000, // Adjust as needed
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  plugins: [react()],
});
