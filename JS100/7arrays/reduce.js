let arr = [2, 3, 5, 7]
//arr.reduce((accumulator, element) => accumulator + element, 0)
let accumulator = 0;

//writing the above code in ES5 to understand better
arr.reduce(function (accumulator, element) {
  accumulator + element;
});


arr.reduce((accumulator, element) => accumulator * element, 1)
