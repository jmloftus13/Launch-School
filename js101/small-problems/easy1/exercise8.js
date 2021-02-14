/*PEDAC
small problems Easy 1 #8 Leap Years (Part 1)
Problem: 
  -input: integer
  -output: boolean
  -identify rules/requirements:  
  year must be greater than 0
    -leap year is evenly divisible by 4 or 400 but not by 100
-clarifying questions: 
  - handle invalid years or negative numbers?
Examples/Test Cases:
  -provided
Data Structure
  -function with conditional logic
Algorithm:
is a leap year if  evenly divisible by 4
*/

function isLeapYear(year){
if (year % 400 === 0) return true;
if (year % 100 === 0) return false;
return year % 4 === 0;

}//end function

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true