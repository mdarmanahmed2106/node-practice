const express = require('express');
const app = express();


function checkUser(req, res, next) {
    if (req.query.user === 'admin') {
        next();
    } else {
        res.send("Access Denied");
    }
}

app.get('/dashboard', checkUser, (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <input name="info">
            <button>Submit</button>
        </form>
    `);
});

app.post('/submit', (req, res) => {
    let body = "";

    req.on("data", chunk => {
        body += chunk;
    });

    req.on("end", () => {
        // body looks like "info=VALUE"
        res.send("You entered: " + body);
    });
});

app.listen(3030, () => {
    console.log("Server running at http://localhost:3000");
});