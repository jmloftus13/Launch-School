console.clear;
//exercise 55 What's my value (Part 4)
/* 
What will the following code log to the console and why?
*/

//a was declared inside the function block and is available
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

/*
Variables declared in an outer scope can be accessed in any inner scope. In our case, the variable a is declared in the function definition and then accessed in the body of the if statement. For that reason, line 4 logs the value 1 when myFunction is invoked.
*/