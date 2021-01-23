console.clear;
/* exercise 98 ...and vice versa
Write code that does the reverse, starting from a nested array of pairs and building an object.
*/

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

const obj = Object.fromEntries(nestedArray);
console.log(obj);

/* alternative solution
let person = {};

for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  person[pair[0]] = pair[1];
}

console.log(person);
// { title: 'Duke', name: 'Nukem', age: 33 }
*/