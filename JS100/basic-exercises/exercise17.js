console.clear;
//exercise 17 Argument Signatures
/* How many arguments does the Array.prototype.join() method expect? 
What happens if you call it with less or more arguments?
*/

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());        //no parameter/separator provided so it adds a comma between elements
// expected output: "Fire,Air,Water"

console.log(elements.join(''));      //a separator is includes but not a space so no spaces in output
// expected output: "FireAirWater"

console.log(elements.join('-'));      //separator of a line
// expected output: "Fire-Air-Water"