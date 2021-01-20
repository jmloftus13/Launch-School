console.clear;
//exercise 16 What year is this?
/* The MDN page for Date lists two methods to get the year of a date.
What is the difference between the two methods and which one should you use?

//Returns the year (usually 2–3 digits) in the specified date according to local time. Use getFullYear() instead.
*/

let today = new Date();

console.log(today.getYear());      //121
console.log(today.getFullYear());  //2021