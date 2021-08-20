const readlineSync = require('readline-sync');
const chalk= require('chalk');
let score = 0;

let userName = readlineSync.question("Please enter your name? : ");
console.log()
console.log("Welcome "+ userName);