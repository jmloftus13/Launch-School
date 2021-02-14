/*PEDAC
small problems easy 1 #2 Odd Numbers
Problem: Process/Understand the problem
-input: none
-output: odd numbers between 1-99 inclusive
-identify rules/requirements: each number on a separate line
-clarifying questions: 
Examples/Test Cases:
Data Structure: for loop with an if statement
Algorithm:
*/

for (let i = 1; i <= 99; i++) {
  if (i % 2 !== 0)
   console.log(i);
}