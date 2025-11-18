const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log(`Middleware 2: Method = ${req.method}, URL = ${req.url}`);
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 3: route");
    next();
});

app.get('/', (req, res) => {
    res.send(`
        <h2>Registration Form</h2>
        <form action="/submit" method="post">
            <label>Name:</label>
            <input type="text" name="name" required />
            <label>Email:</label>
            <input type="email" name="email" required />
            <button type="submit">Submit</button>
        </form>
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
