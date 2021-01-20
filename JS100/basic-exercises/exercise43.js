console.clear;
//exercise 43 Cite the Author
/* 
Write a function that logs Brendan Eich's quote 'Always bet on JavaScript.' to the console. What is the return value of the function?
*/

str1 = 'Brendan Eich';
str2 = 'Always bet on JavaScript.';
function cite(str1,str2) {
  console.log(`${str1} said, "${str2}`);
}

cite(str1, str2);