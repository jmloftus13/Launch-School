console.clear();
let rlSync = require('readline-sync');

function multiply() {
  let num1 = rlSync.question('What is the first number? ');
  let num2 = rlSync.question('What is the second number? ');
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

multiply();
