console.clear;

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
  console.log(integers);

function findIntegers(things) {
  return things.filter(function(element){
    return Number.isInteger(element);
  });
}