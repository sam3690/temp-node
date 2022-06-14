const http = require('http')


// const server = http.createServer((req, res) =>{
//     res.end('Welcome')
// })

// Using Event emitter API
const server = http.createServer()

// Emits requrest event
// subscribes to it / listen for it / respond to it
server.on('request',(req,res)=>{
    res.end('Welcome')
})

server.listen(5000)