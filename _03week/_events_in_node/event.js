//node js is mainly used for event driven operations

const http = require ('http');
const { connected } = require('process');

const server = http.createServer((req, res) =>{
    if(req.method == "POST"){ //checking if the request method is POST
        res.writeHead(200, {'Content-Type': 'text/plain'}); //setting the response header to text/plain
        res.write("This is coming from NODEJS server. ");
        let body = ''

        req.on("data", (chunk) => { //data event is used to indicate that data is being received
            body+= chunk.toString()
        });

        req.on("end", () =>{ //end event is used to indicate that all data has been received
            console.log(body);
            res.end('Data is recieved');
        })
    }else{
        res.end('Welcome to node js');
    }
    
});

server.listen(3100, (req, res) => {
    console.log('Server is listening at 3100');
});
