const express = require('express');
const app = express();
const port = 8080;

// Form to get user details
app.get('/', (req, res) => {
    res.send(`
      <form action="/welcome" method="get">
        <input type="text" name="name" placeholder="Enter your name" required />
        <input type="number" name="age" placeholder="Enter your age" required />
        <input type="text" name="regno" placeholder="Enter registration number" required />
        <button type="submit">Submit</button>
      </form>
    `);
});

// Handle GET request to display welcome message
app.get('/welcome', (req, res) => {
    const name =String (req.query.name);
    const age = Number(req.query.age);
    const regno =Number (req.query.regno);
    res.send(`Welcome ${name}, age ${age}, registration no ${regno}!`);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
