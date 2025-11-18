const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const port = 8080;

// Form to get user details
app.get('/', (req, res) => {
    res.send(`
      <form action="/validation" method="post">
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder="Enter your name" required />
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="Enter your email" required />
        <label for="pass">Password:</label>
        <input type="password" name="pass" placeholder="Enter your password" required />
        <button type="submit">Submit</button>
      </form>
    `);
});

app.post('/validation', [
    body('email').isEmail().trim().normalizeEmail().withMessage('Invalid email format'),
    body('pass').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('name').trim().isLength({ min: 5 }).notEmpty().withMessage('Name is required')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json(errors);
    }
    else {
        res.send(`validation successful!`);
    }
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
