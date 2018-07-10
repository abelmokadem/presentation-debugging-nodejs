const readFile = require('./read-file')

readFile('test.json', (error, output) => {
  if (error) {
    console.error(error)
    // ...
  } else {
    console.log(output)
    // ...
  }
})
