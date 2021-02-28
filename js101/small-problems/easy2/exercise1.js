/*
small-problems easy2 #1 Welcome Stranger
input: array, object
output: string
questions:

Explicit Requirements 
  1. create a function with 2 arguments (array & object)
  2. array will contain at least 2 elements
  2.1 When array elements combined it will produce a name 
  3. object will contain 2 keys
  3.1 Object key title
  3.2 Object key occuption 
  4. function retuens a string
  4.1 Using the person's full name and 
      mentions the the persons title 
examples
data structure  
  function
  strings or string methods
  arraymethods
  object methods
algorithm
  create a function that takes in array & object
  join array elements together
  join object and put key/value pair of title & occupation in the string using template literals
  return string
*/

function greetings(array, object) {
  let name = (array.join(' '));
   return(`Hello, ${name}! Nice to have a ${object['title']} ${object['occupation']} around.`)
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

/*
Learning points
breaking down the explicit requirements
the power of the plain english algorithm to lead me through hte problem
array.join method
*/