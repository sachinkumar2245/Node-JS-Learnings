// import our module

const { log } = require('console');
const fs = require ('fs')
const path = require('path');



//way to create the file in same directory

const filePath = path.join(__dirname, 'newdata2.txt');





fs.writeFile(filePath, "anonymous txt",(err) =>{
    if(err){
        console.log(err);
        
    }else{
        console.log('File is written');
        
    }
});

fs.appendFile(filePath, "\n another txt", (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log("file is updated");
        
    }
});




//readfile



fs.readFile(filePath, 'utf-8', (err, data) =>{
    if(err){
        log(err);
    }else{
        console.log(data)
    }
})


