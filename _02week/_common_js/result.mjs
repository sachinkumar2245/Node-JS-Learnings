//1. common js module older version
// const arithmeticModule = require('./arithmetic.js') 

//call sum function

// const result =arithmeticModule.sum(12,12) 
// console.log(result);


// es6 module
import * as arithmeticModule from './arithmetic.mjs'

console.log(arithmeticModule.multiply(arithmeticModule.num, 3));
// console.log(arithmeticModule.num);


