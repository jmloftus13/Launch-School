console.clear;
//exercise 78 Type
/* 
How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:
*/ 

let input = [1,2,3,4];
let input2 = 'not an array';

function filter(input) {
  // Is input an array?
 return Array.isArray(input);
}

console.log(filter(input));
console.log(filter(input2));