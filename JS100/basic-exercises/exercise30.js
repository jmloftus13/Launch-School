console.clear;
//exercise 30 Do...While
/* 
What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.
*/

//while statement is checked before executing the block
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}


//do...while statement is checked after the block has been executed. So the block in a do...while statement will always be executed at least once even if the condition is not satisfied.
let counter1 = 0;
do {
  console.log('Woooot!');
  counter1 -= 1;
} while (counter1 > 0);