const http = require('http')
const helper = require('./helper')

const server = http.createServer((req, res) => {
  if (req.url === '/hello') {
    res.writeHead(200, {})
    res.write('world')
    res.end()
  } else {
    res.writeHead(404, {})
    res.end()
  }

  runHelpers()
})

server.listen(9090, '127.0.0.1', () => {
  console.log('I\'m listening @ 127.0.0.1:9090');
})

function runHelpers() {
  helper.stepOne()
  helper.stepTwo()
  helper.stepThree()
}
