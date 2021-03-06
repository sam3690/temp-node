const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// path = './first.txt';

// const getText = (path) => {
//     return new Promise ((resolve,reject)=>{
//         readFile(path,'utf8',(err,data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
// })
// }

// GETTING RESULT

// getText(path)
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

// GETTING CLEANER RESULT WITH SHORT APPROACH
const start = async () =>{
    try {
        const first = await readFile('./first.txt','utf8')    
        const second = await readFile('./second.txt','utf8')    
        await  writeFile('./result-mind-grenade.txt',`THIS IS AWESOME : ${first} ${second}`)
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error)
    }
    
}
start()