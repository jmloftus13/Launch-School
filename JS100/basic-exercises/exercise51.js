console.clear;
//exercise 51 Internalization 2
/* 
Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:
*/
/* Problem
input: alpahnumeric string
output: string (word with an exclamation")
explicit requirements:
- write a function 
- one argument (locale as a string)
-returns a greeting differing by country
-needs to extract the country code
-need a conditional to get correct greeting (switch)
*/


function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    case 'FR': return 'Salut!';
    case 'CA': return 'Salut!'
    case 'MA': return 'Salut!'
    default: return 'Greetings Friend';
  }
}

function extractLanguage(locale) {
  return locale.slice(0,2);
}

function extractRegion(locale) {
  return locale.split('.')[0]
              .split('_')[1];
}

console.log(localGreet('en_US.UTF-8')); // 'Salut!'
console.log(localGreet('en_GB.UTF-8')); // 'Salut!'
console.log(localGreet('en_AU.UTF-8')); // 'Salut!'

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'