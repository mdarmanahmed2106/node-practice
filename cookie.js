const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
app.use(cookieParser());


//set a cookie
app.get('/setcookie',(req,res)=>{
    res.cookie('username','john_doe',{maxAge:60000}); //cookie valid for 1 minute
    res.send("Cookie has been set");
});
//get a cookie
app.get('/getcookie',(req,res)=>{
    res.send(`Username cookie value: ${req.cookies.username}`);
});
//clear a cookie
app.get('/clearcookie',(req,res)=>{
    res.clearCookie('username');
    res.send("Cookie has been cleared");
}
);
 
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
}
);
