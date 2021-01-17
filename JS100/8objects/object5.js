console.clear;
/* Create a function that creates and returns a copy of an object. 
The function should take two arguments: the object to copy and an array of the keys that you want to copy. 
Do not mutate the original object.

The function should let you omit the array of keys argument when calling the function. 
If you do omit the argument, the function should copy all of the existing keys from the object.
*/

let sourceObject = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(sourceObject, keys) {
  let newObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return newObject;
  } else {
    return Object.assign(newObject, sourceObject);
  }
}