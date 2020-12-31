//enhance the greeter.js program written in chap 3
console.clear();
let rlSync = require('readline-sync');

function getName () { 
    let firstName = rlSync.question('What is your first name? ');
    let lastName = rlSync.question('What is your last name? ');
    console.log(`Good morning, ${firstName} ${lastName}!`);
};

getName();


//create function
//ask for fname
//ask lname
//return fullname as a string with greeting
//input - does the function need a parameter? no
//output - a string