import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: "src/main.tsx",
                content: "src/content.ts" ,
                popup: 'index.html'
            },
            output: {
                entryFileNames: "[name].js", // output filenames
            }
        }
    }
});