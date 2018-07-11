```bash
# Spin up server
node server.js

# Get server pid
`ps | grep node`

# Start tracing
jstrace -p <server-pid> watcher.js

# Make a request to the server
curl http://127.0.0.1:3000
```
