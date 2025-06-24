
const http = require('http');


const server = http.createServer((request, resolve) => {
    resolve.end("server is ready how are you ");

});

server.listen(3100, () => {
    
    console.log('Server is listening on 3100');

});