console.clear();
let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your first name?');
let lastName = rlSync.question('What is your last name?');

console.log(`Good morning, ${firstName} ${lastName}!`);