//enhance the greeter.js program written in chap 3
console.clear();


let getName = function() { 
  let rlSync = require('readline-sync');
  
  let getFirstName = function() {
    let firstName = rlSync.question('What is your first name?');
    console.log(`Good morning, ${firstName}`);
  };

  let getLastName = function() {
    let lastName = rlSync.question('What is your last name?');
    console.log(`Good morning, ${lastName}!`);
  };
  
};
getName();
//console.log(`Good morning, ${firstName} ${lastName}!`);
