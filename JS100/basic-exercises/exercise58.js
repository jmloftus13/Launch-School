console.clear;
//exercise 58 What's my value (Part 7)
/* 
What will the following code log to the console and why?
*/

// will log 1 to console. a is declare with global scope so myFunction can access it.
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();