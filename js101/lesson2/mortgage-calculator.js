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

function isItValid(number) {
  return number.trimStart() === '' || Number(number) <= 0 || Number.isNaN(Number(number));
}

function isItValidApr(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

//body of program
console.log('Monthly Mortgage/Car Payment Calculator');

while (true) {

  //get the inputs and validate
  console.log('What is the total loan amount? ');
  let totalLoanAmount = readline.question();

  while (isItValid(totalLoanAmount)) {
    console.log("Please enter valid whole numbers:");
    totalLoanAmount = readline.question();
  }

  console.log('What is the Annual Percentage Rate (enter 0 if no interest rate): ');
  let apr =  readline.question();

  while (isItValidApr(apr)) {
    console.log("Please enter valid whole numbers (enter 0 if no interest rate):");
    apr = readline.question();
  }

  console.log('What is the duration of the loan in years: ');
  let loanDurationYears =  readline.question();

  while (isItValid(loanDurationYears)) {
    console.log("Please enter valid whole numbers:");
    loanDurationYears = readline.question();
  }


  //calculations
  let monthlyInterestRate = (Number(apr) / 100) / 12;
  let loanDurationMonths = Number(loanDurationYears) * 12;
  let monthlyPayment;

  if (Number(apr) !== 0) {
    monthlyPayment = Number(totalLoanAmount) * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));
    let totalPayment = monthlyPayment * loanDurationMonths;

    console.log(`Your monthly payment will be $${monthlyPayment.toFixed(2)}`);
    console.log(`Your total of ${loanDurationMonths} payments is $${totalPayment.toFixed(2)}`);
    console.log(`Your total interest is $${(totalPayment - totalLoanAmount).toFixed(2)}`);

  } else {
    monthlyPayment = totalLoanAmount / loanDurationMonths;
    console.log(`Your monthly payment will be $${monthlyPayment.toFixed(2)}`);
  }

  console.log('Would you like to perform another operation? (y/n)');
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
  console.clear();
}