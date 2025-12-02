const fs = require('fs');
const data = {id:101,name:"aman"};
 fs.writeFileSync('db.json',JSON.stringify(data));
 console.log("record saved:[id=101,name=aman]");
    fs.unlink("db.json",(err)=>{
        if(err){
            console.log("error deleting file");
        }
        else{
            console.log("record deleted:[id=101,name=aman]");
        }
    });
    
