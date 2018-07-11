// Author: Olumoroti Anibaba

let readline = require("readline-sync");
let randomInt = require("random-int");

const compNum = randomInt(1, 3);

let compChoice;

if(compNum == 1){
  compChoice = "r";
}

else if (compNum == 2){
  compChoice = "p";
}

else if (compNum == 3){
  compChoice = "s";
}

console.log("*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%");

console.log("Weclome to Mo's Rock Paper Scissors Simulator 2018!");

let userChoice = readline.question("Pick rock, paper, or scissors (r, p, or s): ");

if(compChoice == "r"){
  console.log("The computer picked Rock.");
}

if(compChoice == "p"){
  console.log("The computer picked Paper.");
}

if(compChoice == "s"){
  console.log("The computer picked Scissors.");
}

if(userChoice == "r"){
  console.log("You picked Rock.");
}

if(userChoice == "p"){
  console.log("You picked Paper.");
}

if(userChoice == "s"){
  console.log("You picked Scissors.");
}


if(compChoice == userChoice){
  console.log("You tied with the computer.");
}

else if(compChoice == "r" && userChoice == "s" || compChoice == "p" && userChoice == "r" || compChoice == "s" && userChoice == "p") {

  console.log("You lost. Sorry.");
}

else if(userChoice == "r" && compChoice == "s" || userChoice == "p" && compChoice == "r" || userChoice == "s" && compChoice == "p") {

  console.log("You won! Hooray!");
}


console.log("Thanks for using my program. Credits for original program go to myself with assitance from others. ™Google.");
console.log("*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%*#%");
