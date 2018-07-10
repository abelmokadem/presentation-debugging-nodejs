```bash
# Installation
npm install -g llnode

# Remove core dumps to cleanup
rm -rf /cores/*

# Run so that core dump takes place
ulimit -c unlimited

# Run script to dump core
node --abort-on-uncaught-exception core-dump-example.js

# Startup lldb
lldb `which node` -c /cores/<tab>

# Always load llnode plugin
echo "plugin load /Users/ash/.nvm/versions/node/v8.10.0/lib/node_modules/llnode/llnode.dylib" > ~/.lldbinit


(lldb) jsstack

(lldb) v8 inspect <address>
```
