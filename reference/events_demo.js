const EventEmitter = require('events');

//Create class

class MyEmitter extends EventEmitter{}

//init object

const myEmitter = new MyEmitter(); 

//Event listener;
myEmitter.on('event', ()=>{
    console.log('Events Fired')
})

myEmitter.emit('event');