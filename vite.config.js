import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'lead-endpoint',
      configureServer(server) {
        server.middlewares.use('/api/lead', (req, res, next) => {
          if (req.method !== 'POST') return next()
          let body = ''
          req.on('data', chunk => { body += chunk })
          req.on('end', () => {
            try {
              const payload = JSON.parse(body || '{}')
              const stamp = new Date().toISOString()
              console.log(`[lead ${stamp}]`, payload)
              res.setHeader('Content-Type', 'application/json')
              res.statusCode = 200
              res.end(JSON.stringify({ ok: true, ts: stamp }))
            } catch (e) {
              res.statusCode = 400
              res.end(JSON.stringify({ ok: false, error: 'bad_json' }))
            }
          })
        })
      },
    },
  ],
  server: {
    port: 4500,
    host: true,
  },
})
