const http = require('http')
const server = http.createServer((req, res) => {
    function factorial(n) {
        if (n < 0) {
            return 'Factorial is not defined for negative numbers';
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    res.end(`The factorial of 5 is: ${factorial(5)}`);
})

server.listen(3000, () => {
    console.log('Server is running ');
})

