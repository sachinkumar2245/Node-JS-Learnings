// import our module

const { log } = require('console');
const fs = require ('fs')
//write file

fs.writeFile('data.txt', "anonymous txt",(err) =>{
    if(err){
        console.log(err);
        
    }else{
        console.log('File is written');
        
    }
});

fs.appendFile('data.txt', "\nanother txt", (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log("file is updated");
        
    }
});




//readfile

fs.readFile('data.txt2', 'utf-8', (err, data) =>{
    if(err){
        log(err);
    }else{
        console.log(data)
    }
})
