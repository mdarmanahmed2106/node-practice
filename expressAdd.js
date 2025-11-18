const express = require('express');
const app = express();
const port = 3000;

//form to add two nos.
app.get('/', (req, res) => {
    res.send(`
      <form action="/add" method="get">
        <input type="number" name="num1" placeholder="Enter first number" required />
        <input type="number" name="num2" placeholder="Enter second number" required />
        <button type="submit">Add</button>
      </form>
    `);
});

//handle a GET request to add two numbers
app.get('/add', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
}); 