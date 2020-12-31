console.clear();

function factorial(num) { 
  var result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));