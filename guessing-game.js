// This game has already been discussed in the notes on the site.
// Do not look back at those notes, that would ruin the learning.
// If you have not yet done so, run npm install random-int in terminal.
// Google "npm random-int" to see how it works.
// We will make a guessing game as follows:
// Set a random number from 1 to 100 to be the answer.
// Ask the user to guess a number.
// If they're wrong, you should ask them to guess again.
// Each time they guess, you should be telling them if their guess was too high or too low.
// Also, you should be tracking how many times they have guessed.
// Then, at the end, when you tell them that they guessed correctly,
// you should mention how many guesses it took them.

let randomInt = require("random-int");
let readline = require("readline-sync");

console.log("$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%");
console.log();


let hardness = parseInt(readline.question("Pick a number, 100 is best, but you can go easier or harder: "));
let number = randomInt(1, hardness);
let guess = parseInt(readline.question("The computer guessed a number between 1 and " + hardness + ". What do you guess it chose? "));
let count = 1;


while (number != guess) {
  if (number > guess) {
    console.log("Sorry, you guessed too low.");

  } else if (number < guess) {
    console.log("Sorry, you guessed too high.");
  }
  count++;
  guess = parseInt(readline.question("Guess Again: "));

}

if (number == guess) {
  console.log("Congrats, you got the number! It took you only " + number + " tries.");
  console.log();
  console.log("$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%");
}