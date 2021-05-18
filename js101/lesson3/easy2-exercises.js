//JS101 Lesson 3 - Practice Problems: Easy 2
//Q1 Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
let advice = "Few things in life are as important as house training your pet dinosaur important.";
advice.replace('important', 'urgent');

let newAdvice = advice.replace(/important/g, 'urgent');
console.log(newAdvice);

/*Q2 The Array.prototype.reverse method reverses the order of elements in an array, 
and Array.prototype.sort can rearrange the elements in a variety of ways, including 
descending. Both of these methods mutate the original array as shown below. 
Write two distinct ways of reversing the array without mutating the original array. 
Use reverse for the first solution, and sort for the second.*/
//with reverse()
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.slice().reverse();
console.log(numbers);
console.log(newNumbers);
//with sort() and spread syntax
let numbers = [1, 2, 3, 4, 5];
let reverseNumbers = [...numbers];
reverseNumbers.sort((num1, num2) => num2 - num1);
console.log(numbers);
console.log(reverseNumbers);
// Bonus Question: Can you do it using the Array.prototype.forEach() method?
let numbers = [1, 2, 3, 4, 5];
let reverseArray = [];

numbers.forEach(function(num) {
  reverseArray.unshift(num);
});

console.log(numbers);
  console.log(reverseArray);

//Q3 Given a number and an array, determine whether the number is included in the array.
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

//Q4 starting with the below add the beginning string "Four score and " 2 diff ways
let famousWords = "seven years ago...";
let firstPart = 'Four score and ';

console.log(`${firstPart}${famousWords}`)
console.log(firstPart.concat(famousWords));
//below was the official solution, mine is above
console.log("Four score and ".concat(famousWords));

//Q5 Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers);

//Q6 reduce a nested array to a single array
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

flintstones

let newFlintstones = flintstones.flat();
newFlintstones

//solution using foreach()
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let newFlintstones = [];
flintstones.forEach(elem => {
  newFlintstones = newFlintstones.concat(elem);
});
console.log(newFlintstones);


//Q7 Create an array from this object that contains only two elements: Barney's name and Barney's number:
/* problem Easy 2 Q7
Create an array from this object that contains only two elements: Barney's name and Barney's number:
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

PEDAC
Problem
input: object
output: array


explicit requirements
 1. iterate over the object
 2. output key-value pair containing Barney;s name & Barney's number
Constraints
 1. output must be an array
Examples
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// output ['Barney', 2]

Data structures
1. objects
2. object manipulation
3. arrays
4. array manipulation

Algorithm

Potential methods/code
To work with Object
 1. Object.entries   (to create an array from the object)
To work with array
 1. indexOf to locate the index position Barney and 2
 2. find() to locate Barney and 2 
 3. Splice to remove that part of the array
 4. or Slice after locating the index
 5. shallowCopy
 6. map()

 High level overview
 convert the object to an array and then return just ['Barney", 2']

 specifics
 convert object to array using Object.entries()
 iterate over the array elements looking for ['Barney", 2']
 copy out the element with ['Barney", 2']
*/
//my code
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let newArray = Object.entries(flintstones);

console.log(newArray.slice(2, 3));

//LS solution
Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

//Q8
/* problem Easy 2 Q8
How would you check whether the objects assigned to variables numbers and table below are arrays?

PEDAC
Problem
input: array, obkect
output: boolean

explicit requirements
 -check whether object assigned to 2 diff variables are arrays
 -return boolean
Constraints
 -use array method

Examples
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Data structures
1. array2. object

Algorithm
Potential methods/code
1. isArray()

High level overview
 use isArray method on the objects to determine if they are arrays
*/

//my code
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

//Q9
/* problem Easy 2 Q9
How would you check whether the objects assigned to variables numbers and table below are arrays?

PEDAC
Problem
input: string
output: string

explicit requirements
-center a string
Constraints

Examples
"Flintstone Family Members";

Data structures
String

Algorithm
Potential methods/code
-padStart
-padEnd
-Math.Floor function

High level overview
 use a string method to center text
 table width of 40 char - title.length = remainder
 divide remainder by 2
 half of that before title
*/

//my code
let title = "Flintstone Family Members";
let tableWidth = 40;
let padding = Math.floor((tableWidth - title.length)/2);
title.padStart(padding + title.length);
// LS Solution
let padding = Math.floor((40 - title.length) / 2);
title.padStart(padding + title.length);

//Q10
/* problem Easy 2 Q10
Write two one-line expressions to count the number of lower-case t characters in 
each of the following strings:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

PEDAC
Problem
input: string
output: integer

explicit requirements
-write two different ways to sole
-both must be one line expressions
-use arrow syntax

Constraints
-evaluating strings for both

Examples
let statement1 = "The Flintstones Rock!"; //output 1
let statement2 = "Easy come, easy go.";   // output 0

Data structures
Strings

Algorithm
Potential methods/code
for loop with a counter
String.includes()
method chaining
String.search()
regexp
split()

High level overview
use the split() method to create an array and the

*/

//my code
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;