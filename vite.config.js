import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                wordle: resolve(__dirname, 'wordle/index.html'),
                connections: resolve(__dirname, 'connections/index.html'),
                crossword: resolve(__dirname, 'crossword/index.html'),
            }
        }
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "connections/src"),
        },
    },
})
