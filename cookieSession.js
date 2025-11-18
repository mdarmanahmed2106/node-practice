var session = require('cookie-session');
var express = require('express');
var obj = express();

obj.use(session({
    name: 'session1',
    keys: ['secret-key'],
    maxAge: 5 * 60 * 1000
}))

obj.get('/set-session', (req, res) => {
    req.session.user = 'JohnDoe';
    req.session.city = 'xyz';
    res.send('Session has been set <a href="/get-session">Get Session</a>')
        });

obj.get('/get-session', (req, res) => {
    var user = req.session.user;
    var city = req.session.city;
    res.send('Session retrieved: User = ' + user + ', City = ' + city + ' <a href="/delete-session">Delete Session</a>');
});
obj.get('/delete-session', (req, res) => {
    req.session = null;
    res.send('Session has been deleted <a hreaf="/set-session">Get Session</a>');
});
var port = 8080;
obj.listen(port, () => console.log(`Server listening on http://localhost:${port}`));

