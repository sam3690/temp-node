// const {writeFileSync} = require('fs')

// for (let i = 0; i < 10000; i++) {
//     writeFileSync('./big.txt', `Hello World! ${i}\n`, { flag : 'a'})
    
// }
const {createReadStream} = require('fs')

const stream = createReadStream('../big.txt', {
    highWaterMark : 90000
})

stream.on('data', (result) =>{
    console.log(result);
})
stream.on('error', (err) => console.log(err))