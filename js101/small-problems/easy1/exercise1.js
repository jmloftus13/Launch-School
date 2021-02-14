/*PEDAC
small problems easy 1 #1
Isn't it odd?
Problem: Process/Understand the problem
-input: one integer (pos, neg or zero)
-output: boolean data type of true
-identify rules/requirements: argument is always a valid integer
-clarifying questions: 
Examples/Test Cases:
Data Structure: function called isOdd, within function evaluate via if statement
Algorithm:
*/

function isOdd(int) {
  if (int % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true