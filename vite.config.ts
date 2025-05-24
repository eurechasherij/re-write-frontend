import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tsconfigPaths(), tailwindcss()],
    server: {
      allowedHosts: ["as-you-wish-backend.test", ".rematcha.dev"],
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
  };
});
