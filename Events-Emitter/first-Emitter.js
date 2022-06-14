const  EventEmitter = require('events');

const CustomEmitter = new EventEmitter()

CustomEmitter.on('response',(name,id)=>{
        console.log(`data recieved from user:  ${name}  with id:  ${id}`)
})
CustomEmitter.on('response',()=>{
    console.log(`Some other logic here `);
})



CustomEmitter.emit('response','john',34)