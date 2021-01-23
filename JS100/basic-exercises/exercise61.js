console.clear;
//exercise 61 What's my value (Part 10)
/* 
What will the following code log to the console and why?
*/

// you cannot modify object name defined with const but can modify object key-value's
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
/*
The fact that const variables cannot be re-assigned does not mean that the value they hold is immutable. As we see in the example above, objects that are assigned to const variables can be mutated.
*/