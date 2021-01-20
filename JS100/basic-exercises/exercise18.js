console.clear;
//exercise 18 String Concatenation
/* 
Find out how we can join two or more strings together.
The concat() method concatenates the string arguments to the calling string and returns a new string.
*/
const str1 = 'Hello';
const str2 = 'World';
const str3 = 'I love learning';
const str4 = 'javascript';
console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"

console.log(str3 + " " + str4);
//expected output "I love learning javascript"