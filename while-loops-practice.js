// Author: Olumoroti Anibaba
// 1a. Use a while loop to print out numbers from 1 to 10

let randomInt = require("random-int");

let readline = require("readline-sync");

// let numProblemOne = 1;
// while (numProblemOne <= 10) {
//   console.log(numProblemOne);
//   numProblemOne++;
// }



// 1b. Use a while loop to print out numbers from 30 to 15



// let numProblemTwo = 30
// while (numProblemTwo >= 15) {
//   console.log(numProblemTwo);
//   numProblemTwo--;
// }



// 2. Write a program that keeps rolling a die until the roll is a 5. Print out each roll.
// If you haven't yet done so, you should run
// npm install random-int
// and use that to get a random number from 1 to 6.
// Google "npm random-int" for more info.



// let dieRoll = randomInt(1, 6);
//
// while (dieRoll < 5 || dieRoll > 5) {
//   console.log("The computer rolled a " + dieRoll);
//   dieRoll = randomInt(1, 6);
// }




// 3. Write a program that asks the user to guess a secret password.
// Until the user enters the correct password (which is chosen by you in advance),
// the program will keep asking for all eternity. When they finally do enter the
// correct password, exit the loop and print a congratulatory message.

// Hint: Declare userInput outside the loop and initialize it to the value of readline.question("Enter password: ").
// The while loop will check if userInput matches the correct password.
// If not, inside the loop you should print "Sorry! That's incorrect", then
// assign userInput to the value of readline.question("Enter password: ") again.


let userInput = readline.question("Enter Password: ");

let password = "Password";

let checkTries = 3;

if (userInput == password) {
  console.log("Welcome ... ( ͡° ͜ʖ ͡°)");
}

while (userInput != password && checkTries > 0) {
  console.log("Incorrect password");
  checkTries--;
  console.log("Tries Left: " + checkTries);
  userInput = readline.question("Enter Password: ");

}
if (userInput != password && checkTries == 0) {
  console.log("This computer is locked. Please take this L to prove if you are human, robot.");
}


// Bonus: Enhance your program to only allow the user to try entering the correct password three times.
// If they fail three times, the program should kick them out and tell them they are a robot.
// When the user enters the wrong password, the program tells them that they are wrong,
// along with how many attempts they've made so far.