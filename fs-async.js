const {readFile, writeFile} = require('fs')

console.log('Start!');
readFile('./first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./second.txt','utf8',(err,result)=>{
        if (err) {
            console.log(err);
            return;
        }
        const second = result
        writeFile(
            './result-async.txt',
            `Here is the result : ${first}, ${second}`,
            {flag : 'a'},
            (err,result)=>{
                if (err) {
                    console.log(err);
                    return
                }
                console.log('Done with this task');
            }
        
        )
    })
})
console.log('Starting the next one');