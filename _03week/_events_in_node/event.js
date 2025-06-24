//node js is mainly used for event driven operations

const http = require ('http');
const { connected } = require('process');

const server = http.createServer((req, res) =>{
    if(req.method == "POST"){
        let body = ''
        req.on("data", (chunk) => {
            body+= chunk.toString()
        });

        req.on("end", () =>{
            console.log(body);
            res.end('Data is recieved');
        })
    }else{
        res.end('Welcome to node js');
    }
    
});

server.listen(3100);

console.log('Server is listening on 3100');
