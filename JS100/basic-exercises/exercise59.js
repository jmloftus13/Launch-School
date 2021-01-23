console.clear;
//exercise 59 What's my value (Part 8)
/* 
What will the following code log to the console and why?
*/

// line 11 will print out whatever is passed into the function on line 16
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);
/*
This is another example of variable shadowing: 
The parameter a of myFunction shadows the variable a declared on line 8. 
The a we reference within the function body, on line 11, therefore refers to whatever argument is passed to the function, in our case the value of b, which is then logged.
*/