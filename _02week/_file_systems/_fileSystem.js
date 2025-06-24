const { log } = require('console');
const fs = require('fs')
// to read the file content
console.log("Starting to read");

// this is done to store the data
const buffer = fs.readFileSync('data.txt', {encoding: 'utf8'})

console.log(buffer.toString()
)
console.log('This is another operation being performed')

// here we create the file as well as write it

try {
    fs.writeFileSync("reality.txt", 'Name: Sachin, age: 25, position: bhikari')

} catch (error) {
    console.log(error)
}

// append another jhantu data

fs.appendFileSync('reality.txt', 'goat: timewaster');

// delete that personality 
fs.unlinkSync('reality.txt')
