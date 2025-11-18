const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            res.end('Error reading file');
        } else {
            res.end(data)
        };
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

