console.clear;
//exercise 73 Add & Delete
/* 
Remove 'fossil' from the array, then add 'geothermal' to the end of the array.
*/ 

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

console.log(energy);

//remove first element
let first = energy.shift()
console.log(energy);

//add geothermal
let newItem = energy.push('geothermal')
console.log(energy);