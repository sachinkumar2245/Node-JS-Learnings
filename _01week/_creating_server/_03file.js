// sending html as a request

const http = require ('http')
const fs = require ('fs')
const { log } = require('console')
const server = http.createServer((req, res) => {
    const data =fs.readFileSync('req.htm').toString()

    res.end(data)

})

server.listen(3200)
