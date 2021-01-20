console.clear;
//exercise 33 Yes? No? Part 2 (ternary operator)
/* 
The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed.
Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.

Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.

ternary operator     condition ? runIfTrue : runIfFalse;
*/

let randomNumber = Math.round(Math.random());

let answer = (randomNumber === 1 ? "Yes!" : "No!");
console.log(answer);

/* official solution
let randomNumber = Math.round(Math.random());

console.log(randomNumber ? 'Yes!' : 'No.');
*/