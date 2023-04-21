const { result } = require('lodash');

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
        const first = readFileSync('./first.txt',
        'utf8', (err,result) =>{
            if (err) {
                console.log(err);
            }
            console.log(result);
        })
        const second = readFileSync('./second.txt',
        'utf8', (err,result) =>{
            if (err) {
                console.log(err);
            }
            console.log(result);
        })
    
        }
    } catch(err){
        console.log(err);
    }
}
start();