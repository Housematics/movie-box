import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@routes": path.resolve(__dirname, "./src/routes/"),
      "@context": path.resolve(__dirname, "./src/context/"),
      "@config": path.resolve(__dirname, "./src/config/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@api": path.resolve(__dirname, "./src/api/"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces/"),
      "@constants": path.resolve(__dirname, "./src/constants/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@services": path.resolve(__dirname, "./src/services/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
    },
  },
});
