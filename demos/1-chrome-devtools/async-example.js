async function doSomeAsyncStuff() {
  const file1 = await readFile()
  const file2 = await readFile()
}

async function readFile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('test')
    }, 2000)
  })
}

doSomeAsyncStuff()
