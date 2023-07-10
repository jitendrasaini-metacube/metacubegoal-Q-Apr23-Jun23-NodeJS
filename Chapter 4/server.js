const express = require('express');
var EventEmitter = require('events'); 
const app = express();
const port = 3000;

const myEmitter = new EventEmitter();

function fn1() {
    console.log('function 1 occurred!');
}
 
function fn2() {
    console.log('function 2 occurred!');
}

/* Register the events */

myEmitter.on('inEvent', fn1); 
myEmitter.on('inEvent', fn2); 

/*Invoke the emitter event*/
myEmitter.emit('inEvent');

app.listen(port,()=>{
    console.log(`Server is listening on port no ${port}`);
})
