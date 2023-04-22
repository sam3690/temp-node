const {readFile, writeFile} = require('fs').promises
const {readFileSync, writeFileSync} = require('fs')

const start = async() => {
    try{
    console.log('Entering text in files.....');
    writeFile('./first.txt',
     'This is the first text file')
    writeFile('./second.txt',
     'This is the second text file')
        if (true){
        console.log('Done!');
        console.log('Here are the text from both files:');
        readFileSync('./first.txt','utf8')
         .Then(data =>{
            console.log(data);
         })
        readFile('./second.txt','utf8')
         .Then(data => {
            console.log(data);
         })    
        }
    } catch(err){
        console.log(err);
    }
}
start();