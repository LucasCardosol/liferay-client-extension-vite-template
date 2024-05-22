import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: '/o/vite-template',
  build: {
    outDir: './vite-build',
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        /^(?!@clayui\/css)@clayui.*$/,
      ],
    }
  },
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    svgr({ 
      svgrOptions: {
        // svgr options
      },
    }),
  ]
})