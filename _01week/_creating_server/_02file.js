// url is resource locator and multiple different urls locate different resources

const http = require('http')


const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write('Welcome to my application ')
    // we cannot write or specify url after end as soon as we're ending the response we should end the execution of the function also 


    if (req.url == "/product") {

        return res.end('This is product page')

    } else if (req.url == '/user') {

        return res.end('This is User Page')
    }
    
    res.end();
});

server.listen(3100, () => {
    console.log('Server is listening on 3100');

});