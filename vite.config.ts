import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/2025",
    server: {
        host: true,
        port: 5173,
        proxy: {
            "/api": {
                target: "https://billett.blindernuka.no",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});
