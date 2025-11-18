const express = require('express');

const application = express();

application.use((req, res, next) => {
    console.log(`Request method: ${req.method}, URL: ${req.url}`);
    next();
});

application.get('/', (req, res) => {
    res.send('Hello from custom middleware!');
});

application.listen(3000, () => {
    console.log('Server is running on port 3000');
});
