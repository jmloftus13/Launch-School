console.clear;
//exercise 52 What's my value (Part 1)
/* 
What will the following code log to the console and why?
*/

//undefined as greeting hasn't been defined at the point it is called.
console.log(greeting);

var greeting = 'Hello world!';

/*
All variables in JavaScript declared with var are hoisted, meaning they are virtually moved to the beginning of the scope. This means that our code snippet above behaves like the following one:
*/
var greeting;

console.log(greeting);

greeting = 'Hello world!'