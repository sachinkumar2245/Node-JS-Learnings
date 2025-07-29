//hyper text transfer protocol 
/*

client ---->Request = Server
Server ----> Response = Client

*/

// create a server using node js

//1. import http library/module

/*const http =  require ('http')

//2. create server.

const server = http.createServer((req, res) => {
    //here comest the request.
    res.end("welcome to node js 'sachin' server");
});

server.listen(3100, () => {
    
    console.log('Server is listening on 3100');
    
});





*/

const os = require('os');
console.log(os.platform())

const http = require('http'); // importing the server

const port = 3000;

const server = http.createServer((req, res) =>{

    //set the response http header with http status content type
    res.writeHead(200, 
        {
            'content-type': 'text/plain',
            'X-Powered-By': 'Node.js',
            'cache-control': 'no-cache, no-store, must-revalidate',
            'set-cookie': 'sessionid=abc123; HttpOnly'
        }
    )
    
    //send the response body
    res.end('<h1> Hello, world! </h1>'); //creating the server 
}).listen(port, () =>{
    console.log(`Server is runnign at http://localhost:${port}`)
})

/*
server.listen(port, 'localhost', () =>{
    console.log(`Server is running ar http://localhost:${port}`);
})
*/