const {readFile} = require('fs');

const getText = (path) => {
    return new Promise ((resolve,reject)=>{
        readFile(path,'utf8',(err,data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
})
}

const start = async () =>{
    try {
        const first = await getText('./first.txt')    
        const second = await getText('./second.txt')    
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error)
    }
    
}
start()