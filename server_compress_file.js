const fs = require('fs');
const http = require('http');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
    // Set headers for gzip compression
    res.setHeader('Content-Encoding', 'gzip');
    res.setHeader('Content-Type', 'text/plain');

    // Create read stream for the file
    const readStream = fs.createReadStream('example.txt');

    // Create gzip transform stream
    const gzip = zlib.createGzip();

    // Pipe: read > compress > response
    readStream.pipe(gzip).pipe(res);

    readStream.on('error', (err) => {
        res.end('Error reading file');
    });
});

server.listen(3001, () => {
    console.log('Server is listening on port 3001');
});
