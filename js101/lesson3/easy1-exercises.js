////JS101 Lesson 3 - Practice Problems: Easy 1
// Q1
let numbers = [1, 2, 3];
numbers[6] = 5;
// this sets the numbers array to 6 elements, index position 0, 1, 2 & 6 have values
// the empty slots 3, 4 & 5 have unset elements
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?
// returns undefined as it is an unset element, it doesn't have any value including undefined

//Q2
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));

//Q3
//Determine whether the following object of people and their age contains an entry for 'Spot':
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
ages.hasOwnProperty('Spot');
// hasOwnProprty() check teh property names 

//Q4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
console.log(munstersDescription.toLowerCase());

//Q5
console.log(false == '0');
console.log(false === '0');
// line 1 is true, the == operator coerces the values to the same type before comparing them
//line 2 is false, the strict equality operator which evaluates for type and value.

//Q6  add additional ages to the munster family object
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
console.log(Object.assign(ages, additionalAges));
//Object assign is the simplest methos to merge two objects.

//Q7
// Determine whether the name Dino appears in the strings below -- check each string separately):
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));
// includes method checks for specified string.

//Q8 How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
console.log(flintstones);

//Q9 add multiple items to the array
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino', 'Hoppy');
flintstones;

//Q10 Return a new version of this sentence that ends just before the word house. 
//Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.slice(0, advice.indexOf('house'));