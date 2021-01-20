//exercise 49
/*
/*Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'
*/



/*
Problem 

input: string of characters alphanumeric + punctuation 
output: The language designation. String.
Explicit Requirements
1. A function 
2. One argument 
3. Extracting the string 
3.1 Extracting the first two characters 
4. Returning the modified string 

Clarifying Questions 
1. What a character set ? 
2. What is the definition of a locale 
3. How do we handle upper case and lower case inputs ? 
4. What happens if there is a space given in the string ? 
5. How do we handle an empty string ? 
6. What happens if two strings are given as input ? 
7. Does there need to be input validation ? 

Model 
1. Manipulation of a string 

Example
Simple paths:

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

Edge Case:
extractLanguage('') // Invalid input, ''
extractLanguage('En_US.UTF-8') // Invalid input ?
extractLangauge('eN_US.UTF-8') 

Failure:

Data Structure 
1. String 
2. String method 

Algorithm 
1. Create variable modStr assign the variable an empty string
1. Loop through the string 
1.1 Starting: index equal to 0 
1.2 Stopping: less than 2
1.3 Increment: by 1 
2. The variable equals the empty string + str[i]
3. Return the variable modStr 

*/

/*
The return statement terminates the function 
After th return keyword is what is made aviable outside the scope of the function. 

String immutable 

*/

function extractLanguage(string) {
  var str = ""; // creating the variable name str 
  for (let i = 0; i <2; i += 1) {
    str += string[i]; // on each iterations we are creating a new variable named str BUT at a completely different memory address than the variable outside the for loop 

  } //end for loop
  return str;
}
// console.log(extractLanguage('en_US.UTF-8'));  // 'en'
// console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
// console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

/* Alternative Solution 
splice 
slice 

slice (start, end index)
splice(start, deletecount, item) 

1. Slice doesn't mutate
2. Splice mutates an array as well as creates a new array. 


String methods 
Slice 

Look up Array methods 
slice and splice.

*/

function extractLanguage(string) {
  return string.slice(0,2);
}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

/*learning Process
Instruction
return keword stops the function
slice method'
string methods in general
*/