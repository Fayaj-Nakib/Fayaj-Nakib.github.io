/**
 * Portfolio Admin Server
 * Run with: npm run admin
 * Then open: http://localhost:3001
 */

const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const PORT = 3001
const DATA_DIR = path.join(__dirname, '..', 'data')
const ADMIN_HTML = path.join(__dirname, 'admin.html')
const VALID_SECTIONS = ['projects', 'skills', 'experience', 'education', 'certifications']

function send(res, status, contentType, body) {
  res.writeHead(status, {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  res.end(body)
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true)
  const pathname = parsed.pathname

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return send(res, 204, 'text/plain', '')
  }

  // Serve admin HTML page
  if (pathname === '/' || pathname === '/admin') {
    try {
      const html = fs.readFileSync(ADMIN_HTML, 'utf-8')
      return send(res, 200, 'text/html; charset=utf-8', html)
    } catch {
      return send(res, 500, 'text/plain', 'admin.html not found')
    }
  }

  // API routes: /api/:section
  if (pathname.startsWith('/api/')) {
    const section = pathname.split('/')[2]

    if (!VALID_SECTIONS.includes(section)) {
      return send(res, 400, 'application/json', JSON.stringify({ error: 'Invalid section' }))
    }

    const filePath = path.join(DATA_DIR, `${section}.json`)

    // GET — read data file
    if (req.method === 'GET') {
      try {
        const data = fs.readFileSync(filePath, 'utf-8')
        return send(res, 200, 'application/json', data)
      } catch {
        return send(res, 404, 'application/json', JSON.stringify({ error: 'File not found' }))
      }
    }

    // POST — write data file
    if (req.method === 'POST') {
      let body = ''
      req.on('data', chunk => { body += chunk })
      req.on('end', () => {
        try {
          // Validate JSON before writing
          const parsed = JSON.parse(body)
          const pretty = JSON.stringify(parsed, null, 2)
          fs.writeFileSync(filePath, pretty + '\n')
          console.log(`  Saved: data/${section}.json`)
          return send(res, 200, 'application/json', JSON.stringify({ success: true }))
        } catch (e) {
          return send(res, 400, 'application/json', JSON.stringify({ error: e.message }))
        }
      })
      return
    }

    return send(res, 405, 'application/json', JSON.stringify({ error: 'Method not allowed' }))
  }

  return send(res, 404, 'text/plain', 'Not found')
})

server.listen(PORT, () => {
  console.log('\n  Portfolio Admin Panel')
  console.log('  ─────────────────────────────────')
  console.log(`  Running at: http://localhost:${PORT}`)
  console.log('  Press Ctrl+C to stop\n')
})
