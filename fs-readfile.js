const {readFile, writeFile} = require('fs').promises
const fs = require('fs');

// const first = readFile('./first.txt', 'utf-8')
// const second = readFile('./second.txt', 'utf-8')
// console.log(first);
// console.log(second);
const start = async() =>{
    // await writeFile('./result-mind-gernade.txt', "THIS IS AWESOME!!");
    const first = fs.promises.readFile('./second.txt', 'utf-8',)
        .then(data => {
            console.log(data);
        })
    // console.log(first);
}
start()
