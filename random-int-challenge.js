//Author: Olumoroti Anibaba

var readline = require("readline-sync");
var randomInt = require("random-int");
let result;

console.log("###################################################################");
console.log("Welcome to Mo's Dice Roller 2018!");
let diceRoll = parseInt(readline.question("Press return to roll a six sided die, or type in an integer more than 1 to roll an n-sided die."));

if(diceRoll > 1){
  result = randomInt(1, diceRoll);
}

else if (diceRoll === 1 || diceRoll < 1){
  console.log("Please follow directions next time.");
}


else{
  result = randomInt(1, 6);
}


console.log("You rolled a " + result + "!");
console.log("Thanks for using my program. Credits for original program go to myself with assitance from others. ™Google.")
console.log("###################################################################");
