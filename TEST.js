const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {    
    
    if (req.url === '/') {
        res.end('Welcome to our home page');
        
    }
    else if (req.url === '/about') {
        res.end(`Here is our short history `);
        
    }
    else {
    res.writeHead(200, {'content-type': 'text/html'});
    const html = fs.readFileSync('./err.html');
    res.end(html);
    }
// res.setHeader('Content-type','text/html')
// res.end(`<h1>Oops!</h1>
//      <a> We cant seem to find the page your are looking for</p>
//      <a href="/">Back Home</a>
//     `);
// res.end(`<h1>Oops!</h1>
//     <a> We cant seem to fin d the page your are looking for</p>
//     <a href="/">Back Home</a>
// `)

})

//Working one
// const server = http.createServer((req,res)=>{
//     res.write('Welcome to our home page')
//     res.end()
    
//     })

server.listen(5000)