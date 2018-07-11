const http = require('http')
const bunyan = require('bunyan')
const {performance} = require('perf_hooks');
const logger = bunyan.createLogger({name: "sample"})

const result = []

function Result(url, duration) {
  this.url = url
  this.duration = duration
}

const server = http.createServer((req, res) => {
  const startTime = performance.now()
  logger.info("request-start", req.url)

  setTimeout(() => {
    if (req.url === '/hello') {
      res.writeHead(200, {})
      res.write('world')
      res.end()
    } else {
      res.writeHead(404, {})
      res.end()
    }

    const duration = (performance.now() - startTime).toFixed(0)

    result.push(new Result(req.url, new Date()))

    logger.info("request-end", req.url)
    logger.info("request-time", duration)
  }, 20 * Math.random())
})

server.listen(9090, '127.0.0.1', () => {
  console.log('I\'m listening @ 127.0.0.1:9090');
})
