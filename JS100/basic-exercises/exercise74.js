console.clear;
//exercise 74 Alphabet
/* 
Split the string alphabet into an array of characters.
*/ 

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

let newArray = alphabet.split('');
for (let i = 0; i < alphabet.length; i++) {
  alphabet[i] = newArray[i];

}
  console.log(newArray);

/*

/* official solution - much simpler

alphabet.split('');
or
Array.from(alphabet);

When String.prototype.split() is used with an empty string as separator, it splits the string it is invoked on between each character. (To be precise, it splits the string between each UTF-16 code unit, which in our case amounts to the same thing.)

An alternative is to use Array.from(); check out its MDN page for details.
*/