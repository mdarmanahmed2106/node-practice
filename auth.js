const express=require('express');
const app=express();

//custom middleware 
function checkUser(req,res,next){
    if(req.query.user==='admin'){
        console.log("Admin user verified");
        next();
    }
    else{
       console.log("Unauthorized user");
       res.status(403).send("Access denied");
    }
}


//apply middleware to specific route
app.get('/dashboard',checkUser,(req,res)=>{
    res.send("Welcome to the admin dashboard");
}   
);


app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});
