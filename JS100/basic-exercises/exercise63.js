console.clear;
//exercise 63 All CAPS
/* 
Take the string 'confetti floating everywhere' and transform it to upper case.
*/

let string = 'confetti floating everywhere'
string.toUpperCase();
console.log(string);
/* Our solution leverages the String.prototype.toUpperCase() method. 
This method returns a new string, with the calling string's characters converted to uppercase. 
To see that this method returns a new string rather than mutating the original one, log string to the console after line 3.*/