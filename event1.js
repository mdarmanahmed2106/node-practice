var EventEmitter = require('events'); //importing events module
var obj = new EventEmitter(); //object creation

obj.addListener('marketopen',(msg)=>{
    console.log(msg);
});

obj.emit('marketopen','The market is now open');

obj.on('weather',(msg)=>{
    console.log(msg);
});
obj.emit('weather','The weather is sunny today');

obj.once('festival',(msg)=>{
    console.log(msg);
});
obj.emit('festival','Happy Diwali!');
obj.emit('festival','Happy Diwali again!'); //this will not be logged because 'once' is used    

console.log(obj.getMaxListeners()); //default is 10
for(let i=0;i<9;i++){ 
    obj.addListener('weather',()=>{
        console.log(msg);
    })
}
obj.setMaxListeners(15);//increasing the limitd


var fun1=()=>{
    console.log('Today is a good day')
}
var fun2=()=>{
    console.log('Today is a bad day')
}
obj.addListener('marketopen',fun1);
obj.addListener('marketopen',fun2);
obj.emit('The market is now open again');//both fun1 and fun2 will be called

obj.removeListener('marketopen',fun1);
obj.emit('marketopen')
