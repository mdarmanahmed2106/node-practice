const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const data = {
        name: "John Doe",
        age: 30,
        occupation: "Software Developer"
    };
    res.end(JSON.stringify(data));
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})  