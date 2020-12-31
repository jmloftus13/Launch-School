console.clear();

/* modified this below
let rlSync = require('readline-sync');

for (index = 0; index <= 0; index +=1) { 
  let age = Number(rlSync.question('What is your age? '));
  console.log(`In 10 years you will be ${age + 10} years old.`);
  console.log(`In 20 years you will be ${age + 20} years old.`);
  console.log(`In 30 years you will be ${age + 30} years old.`);
  console.log(`In 40 years you will be ${age + 40} years old.`);
};
*/

let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age? '));

for (index = 10; index <= 40; index += 10) { 

  console.log(`In 10 years you will be ${age + index} years old.`);

};