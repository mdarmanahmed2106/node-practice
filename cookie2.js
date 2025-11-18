var express = require('express');
var cookieParser = require('cookie-parser');
var obj = express();
obj.use(cookieParser()); // Middleware to parse cookies
obj.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

obj.get('/', (req, res) => {// Cookie valid for 1 minute
    res.sendFile(__dirname + '/cookie.html');
});
obj.post('/set-cookie', (req, res) => {
    const theme2=req.body.theme1;
    res.cookie('theme', theme2);
    res.send(`Cookie 'theme' has been set to '${theme2} <a href="/get-cookie">Get a cookie</a>'`);
});
obj.get('/get-cookie', (req, res) => {
    const theme = req.cookies.theme;
    res.send(`Cookie 'theme' value is: '${theme} <a href="/delete-cookie">Delete Cookie</a>'`);
});
obj.get('/delete-cookie', (req, res) => {
    res.clearCookie('theme');
    res.send("Cookie 'theme' has been deleted");
});

obj.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
