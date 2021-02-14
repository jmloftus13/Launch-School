/*PEDAC
small problems easy 1 #3 Even Numbers
Problem: 
-input: none
-output: even numbers between 1-99 inclusive
-identify rules/requirements: separate line
-clarifying questions: 
Examples/Test Cases:
Data Structure: for loop with an if statement to evaluate the integer
Algorithm:
*/
for (let i=1; i <= 99; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}