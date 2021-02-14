/*PEDAC
small problems Easy 1 #11 Ascii STring Value
Problem: 
  -input: string
  -output: integer
  -identify rules/requirements:  
    --use String.prototype.charCodeAt() to determine the ASCII value
   
-clarifying questions: 
    
Examples/Test Cases:
  --
Data Structure
   --function
   --string method
Algorithm:

*/

function asciiValue(string) {
  let sum = 0;
  for(let i=0; i < string.length; i++) { 
    currValue = string.charCodeAt(i);
    sum = sum + currValue;
  }
  console.log(sum);
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0
