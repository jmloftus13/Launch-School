console.clear;
/* exercise 92 Add a Property
Below is a simple object representing our dog, Fido. On lines 8 and 9, write code to add properties 'age' and 'favorite food' to the fido object.
*/ 

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age=7;                      //dot notation
fido['favorite food'] = 'steak';  //bracket notation (must use with special characters)
console.log(fido);