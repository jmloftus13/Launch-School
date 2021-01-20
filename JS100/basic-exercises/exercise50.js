console.clear;
//exercise 50 Locale Part 2
/* 
Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:
*/

/*my solution
function extractRegion(string) {
  //at character 3 for 2 characters
  return string.substr(3,2);
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'
*/

/* Problem
input: alpahnumeric string
output: region code, 2 alpha characters
explicit requirements:
1. use a string method
2. a function 
3. one argument (string)
4. extract first two characters after the underscore
5. return the two extracted characters
*/


// official solution
function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

// Examples:
console.log(extractRegion('en_US.UTF-8'));
console.log(extractRegion('en_GB.UTF-8'));
console.log(extractRegion('ko_KR.UTF-16'));
