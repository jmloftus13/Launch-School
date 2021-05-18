//Easy 2 Q 6
/* PEDAC

Problem
input: string
output: string

explicit requirements
-return the second to last work in a string
-write a function


Constraints
-string will always be 2+ words
-words always non-blank characters


Examples
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

Data structures
-string, array

Algorithm
Potential methods/code
-function

High level overview
function
convert string to array
find the length of the array
get the second to last word in the array
retun that word

Test it
input: "last word"
output: "last"

steps:
  
 convert: ['last', 'word']
 array[0]
 array[0]
 
 array[1]
 array[2]
 array[3]
 array[4]
 
 (array.length - 2)
*/
//my code

function penultimate(string) {
 let words = string.split(' ');
 let index = words.length -2;
 return words[index];
}

console.log(penultimate("last word") === "last")
console.log(penultimate("Launch School is great") === "is")