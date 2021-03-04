/*PEDAC
Problem:
-input: integers
-output: string
-identify rules/requirements:
   -ask user for loan amount
   -ask user for APR
   -ask user for loan duration
   -calculate monthly interest rate
   -calculate loan duration in months
   -print payment as dollar & cents

Implicit requirements
 - User validation (while loop)
 - Possible data type validation
 - requie a loan amount great than 0
 - allow for an APR of 0
 - allow for additional calculatins
 - when validating input

-clarifying questions:
   -how to handle the APR rate from user
   -ask for loan duration in months or years

Examples/Test Cases:
  -non numeric, null or empty input
  -boundaries of the numbers?
Test Case
-- $200k over 10 years at 5% s/b $2121.31/month

Data Structure:
think about the functions I want to write first
--functions for user validation (will need 2)
  -- a function to validate APR so that 0 is allowed
  -- a function to validate loan & duration to disallow 0
--function that calculates monthly payment
--output the string with data
--ask if user wants another calculation
--if yes, clear screen before asking for inputs

Algorithm:
-use readline-sync
-ask user for  loan, apr & loan duration
-calculate the monthly interest rate and assign to variable
-convert loan duration if input in years (can hanle with user validation)
-calculate the monthly payment
-output the monthly payment in dollars & cents as $200.50
*/

console.clear();
const readline = require('readline-sync');

// functions defined
function isItValid(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || Number(number) <= 0;
}

function isItValidApr(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function prompt(string) {
  console.log('>',string);
}

function output(monthlyPayment, loanDurationMonths, totalPayment, totalLoanAmount) {
  //better way to justify the output?
  prompt(`Your monthly payment will be: $${monthlyPayment.toFixed(2).padStart(10, " ")}`);
  prompt(`Your total of ${loanDurationMonths} payments is: $${totalPayment.toFixed(2).padStart(11, " ")}`);
  prompt(`Your total interest is: $${(totalPayment - totalLoanAmount).toFixed(2).padStart(17, " ")}`);
}

function calc(apr,totalLoanAmount, loanDurationYears) {
  let monthlyInterestRate = (Number(apr) / 100) / 12;
  let loanDurationMonths = Number(loanDurationYears) * 12;
  let monthlyPayment;
  let nomEquation = Number(totalLoanAmount) * (monthlyInterestRate);
  let denomEquation = 1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths));

  // handle apr rate of 0%
  if (Number(apr) !== 0) {
    monthlyPayment = nomEquation / denomEquation;
    let totalPayment = monthlyPayment * loanDurationMonths;
    output(monthlyPayment, loanDurationMonths, totalPayment, totalLoanAmount);
  } else {
    monthlyPayment = totalLoanAmount / loanDurationMonths;
    prompt(`Your monthly payment will be: $${monthlyPayment.toFixed(2).padStart(5, " ")}`);
  }
}

//program loop
prompt('Monthly Mortgage/Car Payment Calculator');

while (true) {
  //get the inputs and validate
  prompt('What is the total loan amount? ');
  let totalLoanAmount = readline.question();

  while (isItValid(totalLoanAmount)) {
    prompt("Please enter valid whole numbers:");
    totalLoanAmount = readline.question();
  }

  prompt('What is the Annual Percentage Rate (enter 0 if no interest rate): ');
  let apr =  readline.question();

  while (isItValidApr(apr)) {
    prompt("Please enter valid whole numbers (enter 0 if no interest rate):");
    apr = readline.question();
  }

  prompt('What is the duration of the loan in years: ');
  let loanDurationYears =  readline.question();

  while (isItValid(loanDurationYears)) {
    prompt("Please enter valid whole numbers:");
    loanDurationYears = readline.question();
  }

  calc(apr, totalLoanAmount, loanDurationYears);

  prompt('Would you like to perform another operation? (y/n)');
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
  console.clear();
}