console.clear;
//exercise 69 Blank? Version 2
/* 
Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace
*/


function isBlank(string) {
  return string.trim().length === 0;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true
/*
The String.prototype.trim() method removes whitespaces from both ends of a string. Once we removed those whitespaces, we can use the same strategy as in the previous exercise.
*/