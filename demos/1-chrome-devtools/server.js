const http = require('http')
const headers = require('./headers')

const server = http.createServer((req, res) => {
  if (req.url === '/hello') {
    const helloHeaders = headers.generate('/hello')
    res.writeHead(200, helloHeaders)
    res.write('world')
    res.end()
  } else {
    res.writeHead(404, {})
    res.end()
  }
})

server.listen(9090, '127.0.0.1', () => {
  console.log('I\'m listening @ 127.0.0.1:9090');
})
