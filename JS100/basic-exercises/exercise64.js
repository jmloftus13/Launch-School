console.clear;
//exercise 64 Repeat
/* 
Implement a function repeat that repeats an input string a given number of times, 
as shown in the example below; 
without using the pre-defined string method String.prototype.repeat().
*/

function repeat(num, str) {
  let longString = "";
  for (let i = 0; i < num; i++) { 
    longString += str;
  }
  console.log(longString);
}//end function

repeat(3, 'ha'); // 'hahaha'
repeat(5, 'Hello!');
repeat(0, 'No');