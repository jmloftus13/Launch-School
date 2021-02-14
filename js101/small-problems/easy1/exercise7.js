/*PEDAC
small problems Easy 1 #7 Short Long Short
Problem: 
-input: 2 strings
-output: a string
-identify rules/requirements:  
  --write a function
  -- determine longest of the 2 strings
  --return a concatenated string

-clarifying questions: 


Examples/Test Cases:
- 3 test cases provided
- what if strings are empty
- 

Data Structure:
- function
- string length
  
Algorithm:
- strings input provided in function call
- compare string lengths
- return a nwe concatenated array
*/

function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    console.log(str1.concat(str2, str1));
  }//end if
  else {
    //console.log(str1);
    //console.log(str2);
    console.log(str2.concat(str1, str2));
  }//end else
}//end function

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"