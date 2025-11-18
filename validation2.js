const express = require('express');
const obj=new express();

const log = (req,res,next)=>{
    console.log(`first middleware log`);
    next();
}

obj.use(log);

obj.use((req,res,next)=>{
    console.log(`second middleware log`);
    next();
});


obj.get('/',(req,res)=>{
    res.send('hello from express js');
});

obj.listen(3000,()=>{
    console.log('server running at port 3000');
});
