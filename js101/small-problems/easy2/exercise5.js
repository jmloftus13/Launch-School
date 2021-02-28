/*
small-problems easy2 #5 Arithmetic Integer
input: 2 integers
output: strings
questions:
--how to handle non-integers

Explicit Requirements 
--perform 6 diff mathmatical calculation on 2 integers-- add, subtract, multiply, divided, remainder and ** (what is this?)

examples
data structure  
--
 
algorithm
--

*/

let readlineSync = require("readline-sync");

let num1 = readlineSync.question("Enter the first number: ");
let num2 = readlineSync.question("Enter the second number: ");

console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
console.log(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`);
console.log(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`);
console.log(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`);
console.log(`${num1} % ${num2} = ${Number(num1) % Number(num2)}`);
console.log(`${num1} ** ${num2} = ${Number(num1) ** Number(num2)}`);