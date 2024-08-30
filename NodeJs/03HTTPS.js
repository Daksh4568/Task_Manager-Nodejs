// If we want to do anything on the internet , eg sharing any video or data , then we have to follow a certain rules
// These rule are being pre installed in the computer by the operating system that we are using . 

// So HTTP protocol is basically a rule and without following this rule we cant share and receive any data on the internet 


const http = require('http');

const server = http.createServer(function(req , res){
    res.end('Hello World');
})
server.listen(3000);