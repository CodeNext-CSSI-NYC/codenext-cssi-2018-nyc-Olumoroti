// Author: Olumoroti Anibaba

let readline = require("readline-sync");

let randomInt = require("random-int");

let result;

console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");

console.log();

console.log("Welcome to the Higher or Lower Game 2018!");

let sides = Math.floor(parseInt(readline.question("How many sides do you want the die to have? ")));

let diceRollOne = randomInt(1, sides);

console.log("The computer rolled a " + diceRollOne + ".");

let guess = readline.question("The computer will roll again. Do you think the computer's next roll we be higher (h), lower (l), or the same (s) as the last roll? ");

let diceRollTwo = randomInt(1, sides);

if(diceRollOne > diceRollTwo){

  result = "l";
}

else if(diceRollOne < diceRollTwo){

  result = "h";
}

else if (diceRollOne == diceRollTwo){

  result = "s";
}

console.log("The computer rolled a " + diceRollTwo + ".");

if(result == guess){
  console.log("Congrats, you were right!");
}

else if (result != guess){
  console.log("Oh man, you got it wrong. Better luck next time.");
}

else{
  console.log("That guess did not make sense.");
}

console.log("Thanks for using my program. Credits for original program go to myself with assitance from others. ™Google.");
console.log();
console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
