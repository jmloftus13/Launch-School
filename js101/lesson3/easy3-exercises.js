//Practice Problems easy 3
//Q1 Write three different ways to remove all of the elements from the following array:
/* problem Easy 3 Q1
/* 
PEDAC

Problem
input:  array
output: array

explicit requirements
three different methods to removing all elements

Constraints
empty array at end of process
input has to be an array

Examples
let numbers = [1, 2, 3, 4]; =>  numbers[]

Data structures
arrays
array manipulation

Algorithm
Potential methods/code
pop()
shift()
splice()
use looping
forEach method 

High level overview

1. Remove all elements from the array

use pop to remove one at a time

Specifics 
1. Using a while loop 
2. Condition numbers.length is not equal to 0
3. Invoke the pop method on the caller array `numbers`
4. Output the numbers array


*/
//my code
let numbers = [1, 2, 3, 4];

//method 1
while (numbers.length) {
  numbers.pop();
} 
console.log(numbers);

//method 2
numbers.splice(0, numbers.length);
console.log(numbers);

//method 3
numbers.length = 0;
console.log(numbers);

//Q2
//what will the below output?
console.log([1, 2, 3] + [4, 5]);
//output is 1,2,34,5
/*
In some languages you can use + to concatenate two arrays, but not in JavaScript. 
In JavaScript, the + operator first converts the arrays to strings, 
and then concatenates the strings, so the output is the string 1,2,34,5.
*/

//Q3 
// What will this code output?
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1)
/*
The output is hello there since we are dealing with strings. In JavaScript, strings 
are primitive values and are immutable; they can't be changed. That also means that 
JavaScript creates a new copy of the string when assigning a string to a variable. 
Thus, line 2 assigns str2 a new string that happens to be a copy of str1's value. 
Line 3, in turn, assigns str2 to an entirely new string.
*/

//Q4
// What will this code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);



arr1 is 
{first: 42}
{second: "value2"}
3
4
5

arr2 is
{first: 42}
{second: "value2"}
3
4
5

When you mutate the object reference passed you mutate the original object values.
//output [{ first: 42 }, { second: "value2" }, 3, 4, 5];

//Q5
/*The following function unnecessarily uses two return statements to return boolean 
values. Can you rewrite this function so it only has one return statement and does 
not explicitly use either true or false?*/

function isColorValid(color) {
    if (color === "blue" || color === "green") {
      return true;
    } else {
      return false;
    }
  }
//solution 1
function isColorValid(color) {
    return ((color === "blue" || color === "green") ? "Is green/blue" : "not green/blue");
  }

  //solution 2
  function isColorValid(color) {
    while (color === "blue" || color === "green") {
      
    }
    return "not blue-green";
  }
  
  isColorValid("red"); //returns

  //ls solution 1
  function isColorValid(color) {
    return color === "blue" || color === "green";
  }
  //ls solution 2
  const isColorValid = color => color === "blue" || color === "green";
  //ls solution 3
  const isColorValid = color => ["blue", "green"].includes(color);




