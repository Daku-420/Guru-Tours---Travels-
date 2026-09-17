import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main:         'index.html',
        packages:     'packages.html',
        destinations: 'destinations.html',
        'why-us':     'why-us.html',
        reviews:      'reviews.html',
        faqs:         'faqs.html',
        contact:      'contact.html',
      },
    },
  },
})
