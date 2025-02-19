const http = require('http');

const server = http.createServer((req, res) => {
    let data = '';

    req.on('data', chunk => {
        data += chunk;
    })
    req.on('end', () => {
        res.end('OK');
    });


});


server.listen(3000);