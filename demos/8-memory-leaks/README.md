```
node server.js

DEBUG=http node server.js

node server.js | bunyan

node server.js | bunyan -c 'this.msg.startsWith("request-time")' 

node server.js | bunyan -c 'this.msg.startsWith("request-time")' | awk '{print $7}'

node server.js | bunyan -c 'this.msg.startsWith("request-time")' | awk '{print $7}' | Rscript -e 'summary (as.numeric (readLines ("stdin")))'

node --inspect-brk server.js

autocannon -d 120 127.0.0.1:9090
```
