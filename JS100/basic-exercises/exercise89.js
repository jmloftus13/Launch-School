console.clear;
/* exercise 89 Arrow Function (Part 2)
The function initGame below returns an object. Refactor it using arrow function syntax.
*/ 

let initGame = () => ({
  level: 1, 
  score: 0
});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

/*
The most important part to note is the parentheses around the object that we return.
the JavaScript engine does not interpret a statement starting with a brace as an 
object literal, but as a block statement. So if you want to force it to treat the
 statement as an object literal, you need to make sure that the statement doesn't 
 start with a brace. The easiest way to do this, without changing the meaning or
  behavior of the statement, is by adding parentheses.
 */