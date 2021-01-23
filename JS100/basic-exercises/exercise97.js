console.clear;
/* exercise 97 Convert an object to a nested array
Convert the person object into a nested array nestedPerson, containing the same key-value pairs.
*/ 

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedArray = Object.entries(person);
console.log(nestedArray);

// alternative solution
//console.log(Object.entries(person));