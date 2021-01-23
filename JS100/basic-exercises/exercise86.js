console.clear;
/* exercise 86 Calculate Cat Age
Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:
The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years.
*/ 

function catAge(personAge) {

  switch (personAge) {
    case 0:
      return 0;
      break;
    case 1:
      return 15;
      break;
    case 2:
       return 24;
       break; 
   default:
      return 24 + (personAge -2) *4;
   } //end switch

} //end function

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32
console.log(catAge(10));