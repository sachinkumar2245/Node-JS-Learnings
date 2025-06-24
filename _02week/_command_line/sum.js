// import readline 

const { stdout } = require('process');
const readLine = require('readline');

// configure interface ti connect witht he trerminal and command line

const interface = readLine.createInterface({
    input: process.stdin,
    output: stdout
})

// reading values 

interface.question("Enter first number: ", (num1) => {
    interface.question('Enter the second number: ', (num2) => {
        const sum = num1 * num2;
        console.log(sum);
        interface.close()
    })
    //num1, num2



})