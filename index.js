const pull = require('pull-stream')
const { readFile } = require('atomically-universal')
const { crc32 } = require('hash-wasm')

console.log(process.argv.slice(2))

pull(
  pull.values(process.argv.slice(2)),
  pull.asyncMap((filename, cb) => {
    readFile(filename)
      .then(async (b) => {
        console.log("filename", filename)
        console.log("length", b.length)
        console.time("hash")
        const h = await crc32(b)
        console.timeEnd("hash")
        console.log("hash", h)
        cb()
      })
  }),
  pull.collect((err) => {
    console.log("done")
  })
)
