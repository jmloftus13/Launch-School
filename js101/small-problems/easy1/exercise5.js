/*PEDAC
small problems Easy 1 #5 Tip Calculator
Problem: 
-input: 2 integers as answers to prompts
-output: 2 integers on separate lines
-identify rules/requirements: 
-clarifying questions: 
Examples/Test Cases:
Data Structure:
Algorithm:
*/


let rlSync = require('readline-sync');
let billAmount = Number(rlSync.question("What is the bill? "));
let tipRate = Number(rlSync.question("What is the tip percentage? "));

let gratuity = billAmount * (tipRate/ 100);
let totalBill = billAmount + gratuity;

console.log(`The tip is $${gratuity.toFixed(2)}`);
console.log(`The total is $${totalBill.toFixed(2)}`)