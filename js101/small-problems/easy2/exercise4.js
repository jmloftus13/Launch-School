/*
small-problems easy2 #4 Squaring an Argument
input: integers
output: integer
questions:
--how to handle non-integers

Explicit Requirements 
--write a new function that uses teh multiply function-computes the square of it's argument

examples
data structure  
--function
 
algorithm
--

*/
function multiply(int1, int2){
  return int1 * int2;
}

function square(int3){
  return multiply(int3, int3);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

