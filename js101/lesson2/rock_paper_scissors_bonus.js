/* Rock, Paper, Scissors
Problem
  Input string
  Output string
  Rules/Requirements
    Implicit
    -ask user for a selection
    -randomly generated choice for teh computer
    -validate string input
    -has to be string of only rock, paper, scissors
    -need to compare user & computer selections
    Explicit
    -player a chooses rock & compuer chooses scissors player a wins
    -player a chooses paper  & computer chooses rock player a wins
    -player a chooses scissors and player b chooses paper player a wins
    -if both choose same item neither player wins. it is a tie.
    Edge Cases
    -invalid input, non-string, numeric, null
    -upper case letters
      Rock
    - rock
    - User doesn't put any input
    - Spaces --> 'Rock '
    - Non alphanumeric -> '0Rock' -> 'Rock!'
  Mental Model
  -get user input
  -valid that input
  -generate random selection for computer player
  -compare the two selections
  -declare result
  -ask for another game to be played
Example
DataStructure
-strings
-boolean
-array
-Numbers
  -Random
Algorithm
  get user input
  -use readline-sync
  -function that prompts user for input
  -using prompt ask for rock,paper, scissors
  -use question method to store user input
  -assign to variable
  -validate that input
  -generate random selection for computer player
  -compare the two selections
  -declare result
  -ask for another game to be played
Code */

console.clear();
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'r', 'paper', 'p', 'scissors', 's', 'lizard', 'l', 'spock', 'S'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors' || 'lizard') ||
      (choice === 'paper' && computerChoice === 'rock' || 'spock') ||
      (choice === 'scissors' && computerChoice === 'paper' || 'lizard')
      (choice === 'lizard' && computerChoice === 'paper' || 'spock') 
      (choice === 'spock' && computerChoice === 'rock' || 'scissors')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper' || 'spock') ||
             (choice === 'paper' && computerChoice === 'scissors' || 'lizard') ||
             (choice === 'scissors' && computerChoice === 'rock' || 'spock')
             (choice === 'lizard' && computerChoice === 'rock' || 'scissors')
             (choice === 'spock' && computerChoice === 'lizard' || 'paper')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

//program loop
prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock\n');

while (true) {
  prompt(`Choose one:(rock, paper, scissors, lizard or spock) 
    You may enter the word or first letter of your choice 
    (use lowercase 's' for scissors and uppercase 'S' for spock). 
  ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
  console.clear();
}