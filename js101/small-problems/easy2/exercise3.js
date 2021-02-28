/*
small-problems easy2 #3 Multiply Two Numbers
input: integers
output: integer
questions:
--how to handle non-integers

Explicit Requirements 
--multipl 2 integers and return teh result
 
examples
data structure  
--function
 
algorithm
--create a function that takes in 2 integers
--multiplies the 2 integers--returns the result

*/

function multiply(int1, int2){
  return int1 * int2;
}

console.log(multiply(5, 3) === 15); // logs true

//also a solution in arrow form
//const multiply = (num1, num2) => num1 * num2;