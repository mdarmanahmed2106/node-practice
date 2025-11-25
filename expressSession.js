var session = require('cookie-session')
var express = require('express')
var obj = new express() 

obj.use(session({
    name:"session", 
    keys:['secret-key'], 
    maxAge:5*60*1000
}))
obj.get('/set-session', (req,res) =>
{
    req.session.user ="abc"
    req.session.city ="xyz"
    res.send(`session set <a href="/get-session">GET SESSION </a>`)
})

obj.get('/get-session', (req, res) =>
{
    var user = req.session.user
    var city = req.session.city
    res.send(`stored session for ${user} and ${city} <a href = "/delete-session">DELETE SESSION </a>`)
})

//delete the session
obj.get('/delete-session', (req,res) =>
{
    req.session = null
    res.send(`session destroyed <a href = '/get-session'>GET SESSION</a>`)
})

//start the server 
obj.listen(3000, () =>
{
    console.log("server running")
})