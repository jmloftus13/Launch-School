console.clear();

let array = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

array.forEach(function(row) {
  row.forEach(function(num) {
    if (num % 2 === 0) { 
    console.log(num);
    }
}); //end inner forEach
   console.log("~~~~~~~")
})  //end outer foreach