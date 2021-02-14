/*PEDAC
small problems Easy 1 #10 Multiples of 3 and 5
Problem: 
  -input: integer
  -output: 
  -identify rules/requirements:  
     -compute the numbers incluse of those given
   
-clarifying questions: 
    --what to do with integers less than 1
Examples/Test Cases:
  --provided
Data Structure
   -function
Algorithm:

*/


function multisum (num) {
  let sum = 0;
  for(let i = 3; i <= num; i++) { 
    if ((i % 3 === 0) || (i % 5 === 0 )) { 
      sum = sum + i;
      }
    }
     return sum;
  }
 


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
