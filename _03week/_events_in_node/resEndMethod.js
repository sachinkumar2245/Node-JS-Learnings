import http from "http";
import fs from 'fs';

const server = http.createServer((req, res) => {
    res.write("This is coming from NODEJS server.");
    
    if (req.url == "/first") {
        console.log(req.url)
       return res.end('This is the first response');
    }

    if(req.url == "/second") {
        console.log(req.url)
        return res.end('This is the second response');
    }
    res.end('This is default response');



})

server.listen(3200, (req, res) => {
    console.log('Server is listening at 3200')
})