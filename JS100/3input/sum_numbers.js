console.clear();
let rlSync = require('readline-Sync');

let number1 = Number(rlSync.question('Enter hte first number\n'));
let number2 = Number(rlSync.question('Enter the second number\n'));
let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add up to ${sum}`);
