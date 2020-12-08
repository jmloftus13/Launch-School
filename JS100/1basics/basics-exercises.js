console.clear();
// exercise 1
console.log('\n');
console.log('exercise 1 - string interpolation');
let firstName = 'Jeannine';
let lastName = 'Loftus';
console.log(`my name is ${firstName} ${lastName}`);


//exercise 2
console.log('\n');
console.log('exercise 2');
let number = 4936;
let ones = number % 10;

number = (number - ones) / 10;
let tens = number % 10;

number = (number -tens) /10;
let hundreds = number % 10;

let thousands = (number - hundreds) / 10;

console.log(`thousands is ${thousands}`);
console.log(`hundreds is ${hundreds}`);
console.log(`tens is ${tens}`);
console.log(`ones is ${ones}`);

//exercise 3
console.log('\n');
console.log ('exercise 3 - Data Types');
console.log(typeof 'true');
console.log(typeof false);
console.log(typeof 1.5);
console.log(typeof 2);
console.log(typeof undefined);
console.log(typeof {foo: 'bar'});

//exercise 4
console.log('\n');
console.log('exercise 4 - implicit coercion');
console.log('5' + 10);
console.log("why does '5' + 10 evaluate to 510 instead of 15?");
console.log('this is an example of implicit coercion. if one operand is a string and the other is not JS coerces the non-string to a string');

//exercise 5
console.log('\n');
console.log('exercise 5 - explicit coercion');
console.log(Number('5') + 10);

//exercise 6
console.log('\n');
console.log('exercise 6 - template literals and explicit coercion');
console.log(`The value of '5' + 10 is ${Number('5')+10}`);

//exercise 7
console.log('\n');
console.log('exercise 7 - accessing array element');
let foo = ['a', 'b', 'c'];
console.log(foo.length);
console.log(foo[3]);
console.log('This returns undefined but not an error');

//exercise 8
console.log('\n');
console.log('exercise 8 -  Create an array');
let petNames = ['asta', 'butterscotch', 'pudding', 'neptune','darwin'];
console.log(petNames);

//exercise 9
console.log('\n');
console.log('exercise 9 - Create an object');
  let pets = {
    name: 'asta', animal: 'dog',
    name: 'butterscotch', animal: 'cat',
    name: 'pudding', animal: 'cat',
    name: 'neptune', animal: 'fish',
    name: 'darwin', animal: 'lizard',
    name: 'tiny', animal: 'dog',
    };

//exercise 10
console.log('\n');
console.log('exercise 10 - statement evaluation');
console.log('foo' === 'Foo');
console.log('evaluates to false as upper/lower case matters.');

//exercise 11
console.log('\n');
console.log('exercise 11 - statement evaluation');
console.log(parseInt('3.1415'));
console.log("parseInt('3.1415') evaluates to 3 as parseInt converts a string beginning with an integer to it\'s numeric equivalent");

//exercise 11
console.log('\n');
console.log('exercise 11 - statement evaluation');
console.log(" The statement '12' < '9' evaluates to true since these are strings not numbers and it sees the 1 forst not the 12 and so evaluated to true.");

