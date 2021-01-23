console.clear;
/* exercise 88 Arrow Function (Part 1)
Refactor the function below using arrow syntax. 
console.log should still log the same sentence. I like birds
*/ 

const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template
    .replace('VERB', verb)
    .replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.

/*If the function body contains only one statement, the return keyword can be omitted. Note that it's the number of statements that counts, not the number of lines. 
In our case, we have one statement spreading over several lines. */