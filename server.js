const server = http.createServer((requestAnimationFrame,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.end("hello there this is node js")
}) 

server.listen(3000,()=>{
    console.log() 
})