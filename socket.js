const express = require('express')
var app = new express() 
var Server = require('socket.io')
var server = app.listen('5003', () =>
{
    console.log("connected to the server")
})
var io = Server(server)
app.get('/', (req, res) =>
{
    res.sendFile(__dirname+ '/client.html')
})

//connection 
io.on('connection', (socket) =>
{
    console.log("user connected")
    socket.on('myname', (name) =>
    {
        io.emit('myname', name)
    })
    socket.on('chatm',(msg) =>
    {
        io.emit('chatm', msg)
    })
})