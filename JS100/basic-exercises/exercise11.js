//exercise 11 Style Guide
/* 
following the MDN guidelines found here: <br>
https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript <br>
and from the intro JS book here: <br>
https://launchschool.com/books/javascript/read/preparations#stylishjavascript <br>
<p> 
the variable chocolate should be in double quotes "chocolate"
the variables defined on lines 1 & 2 should be in camel case without underscores
the variables as called on lines 4, 7 & 10 should be camel case as a result of the change in name
The opening brace on line 5 should be at the end of line 4
Change line 10 to use and template literal ecased in backtics for the expression ${iceCreamDensity}

*/

let iceCreamTaste = "chocolate"
let iceCreamDensity = 10

while(iceCreamDensity > 0) {
    console.log('Drip...');
    iceCreamDensity -= 1;
}

console.log(`The ${iceCreamTaste} ice cream melted.`);