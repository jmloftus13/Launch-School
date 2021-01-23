console.clear;
//exercise 54 What's my value (Part 3)
/* 
What will the following code log to the console and why?
*/

//myValue isn't available outside he conditional statement
if (true) {
  let myValue = 20;
}

console.log(myValue);

/*
Variables declared with let are block scoped. This means that when we declare the variable myValue within a block on line 2, that variable is not accessible outside of the block on line 5, and a ReferenceError is raised.
*/
