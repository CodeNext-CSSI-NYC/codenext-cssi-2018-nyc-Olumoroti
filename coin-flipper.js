// Author: Olumoroti Anibaba

var readline = require("readline-sync");
var randomInt = require("random-int");

let result = randomInt(0, 1);

let guess = readline.question("Guess wheter I got heads or tails. (h or t): ");

if (guess == "h" && result < 0.5 || guess == "t" && result >= 0.5){
  console.log("Congrats! You guessed right!");

}

else{
  console.log("Sorry. You guessed wrong.");
}
