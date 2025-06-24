//hyper text transfer protocol 
/*

client ---->Request = Server
Server ----> Response = Client

*/

// create a server using node js

//1. import http library/module

const http =  require ('http')

//2. create server.

const server = http.createServer((req, res) => {
    //here comest the request.
    res.end("welcome to node js 'sachin' server");
});

server.listen(3100, () => {
    
    console.log('Server is listening on 3100');
    
});







