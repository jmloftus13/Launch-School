/*
small-problems easy2 #2 Greeting a user
input: string
output: string
questions:
  -how to handle non-string iput?

Explicit Requirements 
  -take in a string of type name or name!
  -output specific strings
 
examples
data structure  
  -string method
  -
 
algorithm
  -write a prompt asking for a name
  -read the characters in the string looking for an exclamation point
  -if the string has an exclamation respond in upper case
    --use string.toUpperCase()
  -if it does not have an exclamation respond simply, Hello "name".
  readline
*/

let readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name? ");

if (name.includes('!') === true) {
  name = name.toUpperCase();
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`)
} else {
  console.log(`Hello ${name}.`)
}