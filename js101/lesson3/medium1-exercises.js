//Q1

  /*
Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

/* PEDAC

Problem
input: none
output: string

explicit requirements
output the string "The Flintstones Rock!" 10 timeseach time with an additional space in front of it.

Constraints
-it has to be a string

Examples
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...

Data structures
string

Algorithm
Potential methods/code
padStart()
repeat()

High level overview
output the string to the console first time, 
on the second output add a space to the front
third output add 2 spaces
4th output add 3 paces up to 10

*/
//my code
let string = "The Flintstones Rock!";

for ( i = 1; i <=10; i++) {
  console.log(string.padStart(string.length + i, ' ').repeat(1));
}
//ls solution
for (let padding = 1; padding <= 10; padding++) {
    console.log(" ".repeat(padding) + "The Flinstones Rock!");
  }

  //Q2
  /*
Start with this string, return a new string that swaps the case of all letters
let munstersDescription = "The Munsters are creepy and spooky.";

/* PEDAC

Problem
input: none
output: string

explicit requirements
return a new string
swap the case of all the letters

Constraints
-it has to be a string

Examples
`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

Data structures
string


Algorithm
toUpperCase
toLowerCase
loop of some type
use split to an array

High level overview
loop over each character in the stringevaluate if it is uppe ro lowercase and swap to other case.
if its lowerscase convert to upper else convertto upper

*/
//my code
let munstersDescription = "The Munsters are creepy and spooky.";
munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

//Q3
/* Q3

PEDAC

Problem
input: 
output: numbers

explicit requirements
adjust the loop in the function to hand 0 or a negative number

Constraints
use the function provided

Examples
see below

Questions
factoring
The quickest way to find the factors of a number is to divide it by the smallest prime number (bigger than 1) that goes into it evenly with no remainder. Continue this process with each number you get, until you reach 1.
prime numbers have only 2 factor (1 & themselves) ex.2, 3, 5, 7, 11,

Data structures


Algorithm
Potential methods/code


High level overview
modify the code in the function loop to handle 0 or neg number

Alan wrote the following function, which was intended to return all of the factors of number:
Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.
*/
//my code

function factors(number) {
    let divisor = number;
    let factors = [];
    while (divisor !== 0){ 
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
      divisor -= 1;
    } 
    return factors;
  }
  
  factors(-10);

//Q4
  /*Alyssa was asked to write an implementation of a rolling buffer. 
  You can add and remove elements from a rolling buffer. 
  However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.
  She wrote two implementations of the code for adding elements to the buffer. 
  In presenting the code to her team leader, she said "Take your pick. 
  Do you prefer push() or concat() for modifying the buffer?".
  Is there a difference between these implementations, 
  other than the method she used to add an element to the buffer?*/

  function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
    buffer.push(newElement);
    if (buffer.length > maxBufferSize) {
      buffer.shift();
    }
    return buffer;
  }
  
  function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
    buffer = buffer.concat(newElement);
    if (buffer.length > maxBufferSize) {
      buffer.shift();
    }
    return buffer;
  }
/*
exercise is about the diff between push & concat. Push mutates while concat does not.
ideally want to limit side effects within functions. for that reason concat would
be the better choice.

  LS
  Yes, there is a difference. While both methods have the same return value, 
  the first implementation mutates the argument represented by buffer. 
  That is, the caller will see that the array is different when the function returns. 
  The rollingBuffer2 implementation doesn't mutate the argument specified by the 
  value of buffer. */

//Q5
 //What will the following two lines of code output?

 console.log(0.3 + 0.6);
 console.log(0.3 + 0.6 === 0.9);

/* If you thought that the outputs would be 0.9 and true, respectively, you were wrong. 
JavaScript uses floating point numbers for all numeric operations. 
Most floating point representations used on computers lack a certain amount of 
precision, and that can yield unexpected results like these. */

//Q6
//What do you think the following code will output?
//How can you reliably test if a value is NaN?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

//The output is false. NaN -- not a number -- is a special numeric value that indicates 
//that an operation that was intended to return a number failed. JavaScript doesn't 
//let you use == and === to determine whether a value is NaN.

//Bonus Answer:

//To test whether the value is NaN, we use the Number.isNaN() method:

console.log(Number.isNaN(nanArray[0])); // true
/*


//Q7
What is the output of the following code?
come back and write this out, talk about pass by value
answer is not modified due to pass by vale
*/

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

  /* Question 8
One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:
*/

let munstersBasic = {
  Herman: {},
  Lily: {}
}

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}


/*
After writing this function, he typed the following code:
*/

messWithDemographics(munsters);
/*
Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?
*/

let munstersArray = 
[{age: 32, gender: 'male'},{age: 30, gender: 'female'}, {age: 402, gender: 'male'},{age: 10, gender: 'male'}, {age: 23, gender: 'female'}];

let munsters = {
  Herman: { age: 74, gender: "other" },
  Lily: { age: 72, gender: "other" },
  Grandpa: { age: 444, gender: "other" },
  Eddie: { age: 52, gender: "other" },
  Marilyn: { age: 65, gender: "other" }
};

//Q9
//What does the following code output?

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

//output is "paper"
/* ls explanation
The outermost call determines the result of comparing rps(rps("rock", "paper"), rps("rock", "scissors")) 
against rock. That means that we must evaluate the two separate calls, rps("rock", "paper") 
and rps("rock", "scissors"), and combine them by calling rps on their results. Those innermost expressions 
return "paper" and "rock", respectively. Calling rps on those two values returns "paper", which, 
when evaluated against "rock", returns "paper" */

//Q10
//Consider these two simple functions:
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
// What will the following function invocation return?
bar(foo());

/*
function call on line 9 passes into the function 'bar' the result of function 'foo'.
foo is passed no function so it uses the default parameter 'no' defined on line 1
foo returns 'yes' and this 'yes' is passed into the function 'bar'
*note that foo function always returns 'yes'
lines 6 is a ternary operator that code states if the parameter 'yes' === 'no' return 'yes' if that statement is true and return 'no' if that staement is false.
the statement is false as 'yes' was passed into function 'boo'
this will return 'no'
*/
