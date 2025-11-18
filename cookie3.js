var express = require('express');
var cookieParser = require('cookie-parser');
var obj = express();
var port = 8080;

obj.use(cookieParser());

obj.get('/set-cookie', (req, res) => {
    res.cookie('theme', 'dark');
    res.send('Cookie has been set');
});

obj.get('/get-cookie', (req, res) => {
    var cookiename = req.cookies.theme
    res.send('Cookie retrieved: ' + cookiename);
});

obj.get('/delete-cookie', (req, res) => {
    res.clearCookie('theme');
    res.send('Cookie has been deleted');
});


obj.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
