console.clear;
/* exercise 99 Cloning a Person
Write a function clone that takes an object as argument and returns a shallow copy 
of that argument. Shallow copy means that it returns a new object that has the same
 key/value pairs, but that you don't need to worry about cloning the values as well. 
 The code below demonstrates the expected behaviour.
*/

function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

/* from solution
There are different ways to clone an object. The arguably easiest one is to use the Object.assign method. Note that this method only creates a shallow copy, which means that if you mutate one of the values in person, they will be mutated in clonedPerson as well.
*/