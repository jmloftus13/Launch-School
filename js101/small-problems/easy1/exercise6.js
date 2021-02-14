/*PEDAC
small problems Easy 1 #6 Sum or product of consecutive integers
Problem: 
-input: integer and character
-output: string (compute & display)
-identify rules/requirements:  
  --integer must be greater than 0
  --condition logic to either sum or compute product based on character S or p.
  --product is inclusive between 1 and the number entered
-clarifying questions: 
 
Examples/Test Cases:
  --what if a letter other than s or p is entered?


Data Structure:
  -- conditional statement based on whether s or p is selected
  --tabulate results--output to the console
 
 1. String
 2. Numbers 

 -> Arrays ? Not useful
 -> Objects ? Not useful. 

  
Algorithm:

1.1 String interpolation or using template literals

Specific

User input for strings

User input for numbers

Conditional statement based on user input

Evaluation of user input to sum up numbers

Evaluation of user input to create a product of numbers


*/


let rlSync = require('readline-sync');
let integer = Number(rlSync.question("Please enter an integer greater than 0: "));
let action = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

let sum = 0;
let product = 1;

if (action === 's') {
  for (let i=1; i <= integer; i++) {
    sum += i; 
    } 
    console.log(`\nThe sum of the integers between 1 and ${integer} is ${sum}.`);
  } else if (action === 'p') { 
      for (let j=1; j <= integer; j++) {
        product *= j;
      } 
      console.log(`\nThe product of the integers between 1 and ${integer} is ${product}.`);
   }


/*
product = product * j 
product *= j

product = (product = product*j)
*/


/*
Clarifying Questions
1. User input validation required 
1.1 Are trailing 0's allowed ? eg 0000001
1.2 Specifically do we need handle upper and lower cases to the input ? 
1.3 Should restrict ourselves to the alphabet only ?
2. Is there a specific output necessary ?
3. Integer defintion 
4. Product definition
5. Inclusive definition

Examples

Simple Paths


Edge cases
Enter "s" to compute the sum, or "p" to compute the product. ---> S // It outputs the the appropriate string

Please enter an integer greater than 0: -1 // error failure 

Please enter an integer greater than 0: 0 // error failure

Please enter an integer greater than 0: 1

Enter "s" to compute the sum, or "p" to compute the product.  --> Error / repeat user input



Learning points

Egde cases
1) Boundaries ---> the number 1 in this case
2) Emptiness ---> The empty string in this case
                  what if the number isn't given
3) Data Types --> is there user input validation 
4) Repetition --> sss ->
5) Duplication --> 


Number

string

Learning points

1. Using the multiplication assignmen to operater 
eg num *= 5 --> num = num * 5

2. Something multipied 0 is always zero so watch products!
3. Always be pedantic about the output! Including fullstops, newlines and any characters you see 


*/