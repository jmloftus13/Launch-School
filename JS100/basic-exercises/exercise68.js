console.clear;
//exercise 68 Blank? Version 1
/* 
Write a function that checks whether a string is empty or not. For example:
*/
/*
function isBlank(string){
  if (string === "" || string === "  ") { 
    console.log('String is blank');
  } else {
    console.log(`Strings is: ${string}`);
  }
}*/

function isBlank(string) {
  return string.length === 0;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true