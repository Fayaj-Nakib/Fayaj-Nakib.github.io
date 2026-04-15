/**
 * Portfolio Admin Server
 * Run with: npm run admin
 * Then open: http://localhost:3001
 */

const http = require('http')
const fs   = require('fs')
const path = require('path')
const url  = require('url')

const PORT         = 3001
const DATA_DIR     = path.join(__dirname, '..', 'data')
const PUBLIC_DIR   = path.join(__dirname, '..', 'public')
const ADMIN_HTML   = path.join(__dirname, 'admin.html')
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

// ── Simple multipart/form-data parser (no npm deps) ──
function bufIndexOf(haystack, needle, start = 0) {
  outer: for (let i = start; i <= haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) continue outer
    }
    return i
  }
  return -1
}

function parseMultipart(body, boundary) {
  const sep      = Buffer.from('\r\n--' + boundary)
  const hdrEnd   = Buffer.from('\r\n\r\n')
  const results  = []

  // Find first boundary
  const firstBoundary = Buffer.from('--' + boundary)
  let pos = bufIndexOf(body, firstBoundary, 0)
  if (pos === -1) return results
  pos += firstBoundary.length + 2 // skip past first boundary + \r\n

  while (pos < body.length) {
    const nextBound = bufIndexOf(body, sep, pos)
    if (nextBound === -1) break

    const part       = body.slice(pos, nextBound)
    const hdrEndIdx  = bufIndexOf(part, hdrEnd, 0)
    if (hdrEndIdx === -1) { pos = nextBound + sep.length + 2; continue }

    const headers  = part.slice(0, hdrEndIdx).toString('utf8')
    const content  = part.slice(hdrEndIdx + 4)

    const nameMatch     = headers.match(/name="([^"]*)"/)
    const filenameMatch = headers.match(/filename="([^"]*)"/)

    results.push({
      name:     nameMatch     ? nameMatch[1]     : '',
      filename: filenameMatch ? filenameMatch[1] : null,
      content,
    })

    pos = nextBound + sep.length + 2 // skip sep + \r\n
    // Check for end boundary (--)
    if (pos + 2 <= body.length && body[pos - 2] === 45 && body[pos - 1] === 45) break
  }

  return results
}

const server = http.createServer((req, res) => {
  const parsed   = url.parse(req.url, true)
  const pathname = parsed.pathname

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return send(res, 204, 'text/plain', '')
  }

  // ── Serve admin HTML ──
  if (pathname === '/' || pathname === '/admin') {
    try {
      const html = fs.readFileSync(ADMIN_HTML, 'utf-8')
      return send(res, 200, 'text/html; charset=utf-8', html)
    } catch {
      return send(res, 500, 'text/plain', 'admin.html not found')
    }
  }

  // ── File upload: POST /api/upload ──
  if (pathname === '/api/upload' && req.method === 'POST') {
    const chunks = []
    req.on('data', chunk => chunks.push(chunk))
    req.on('end', () => {
      try {
        const body        = Buffer.concat(chunks)
        const contentType = req.headers['content-type'] || ''
        const boundaryMatch = contentType.match(/boundary=([^\s;]+)/)
        if (!boundaryMatch) {
          return send(res, 400, 'application/json', JSON.stringify({ error: 'No boundary in Content-Type' }))
        }
        const boundary = boundaryMatch[1]
        const parts    = parseMultipart(body, boundary)
        const filePart = parts.find(p => p.filename)

        if (!filePart) {
          return send(res, 400, 'application/json', JSON.stringify({ error: 'No file found in upload' }))
        }

        // Sanitize filename: keep extension, strip path traversal
        const safeName = path.basename(filePart.filename).replace(/[^a-zA-Z0-9 ._-]/g, '_')
        const destPath = path.join(PUBLIC_DIR, safeName)
        fs.writeFileSync(destPath, filePart.content)

        const publicPath = '/' + safeName
        console.log(`  Uploaded: public/${safeName}`)
        return send(res, 200, 'application/json', JSON.stringify({ success: true, path: publicPath }))
      } catch (e) {
        console.error('Upload error:', e.message)
        return send(res, 500, 'application/json', JSON.stringify({ error: e.message }))
      }
    })
    return
  }

  // ── Data API: /api/:section ──
  if (pathname.startsWith('/api/')) {
    const section = pathname.split('/')[2]

    if (!VALID_SECTIONS.includes(section)) {
      return send(res, 400, 'application/json', JSON.stringify({ error: 'Invalid section' }))
    }

    const filePath = path.join(DATA_DIR, `${section}.json`)

    if (req.method === 'GET') {
      try {
        const data = fs.readFileSync(filePath, 'utf-8')
        return send(res, 200, 'application/json', data)
      } catch {
        return send(res, 404, 'application/json', JSON.stringify({ error: 'File not found' }))
      }
    }

    if (req.method === 'POST') {
      let body = ''
      req.on('data', chunk => { body += chunk })
      req.on('end', () => {
        try {
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

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n  ✗ Port ${PORT} is already in use.`)
    console.error(`  Either another admin server is running, or kill it with:`)
    console.error(`  PowerShell: Stop-Process -Id (Get-NetTCPConnection -LocalPort ${PORT} -State Listen).OwningProcess -Force\n`)
    process.exit(1)
  } else {
    throw err
  }
})

server.listen(PORT, () => {
  const adminUrl = `http://localhost:${PORT}`
  console.log('\n  Portfolio Admin Panel')
  console.log('  ─────────────────────────────────')
  console.log(`  Open this URL in your browser:`)
  console.log(`  → ${adminUrl}`)
  console.log('\n  ⚠️  Do NOT open admin.html directly as a file.')
  console.log('  Press Ctrl+C to stop\n')

  // Auto-open in default browser
  const { exec } = require('child_process')
  const cmd = process.platform === 'win32'  ? `start ${adminUrl}`
            : process.platform === 'darwin' ? `open ${adminUrl}`
            : `xdg-open ${adminUrl}`
  exec(cmd)
})
