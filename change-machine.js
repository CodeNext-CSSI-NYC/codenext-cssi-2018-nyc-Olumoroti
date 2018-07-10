// Author: Olumoroti Anibaba

var readline = require("readline-sync");

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log("Welcome to Mo's Change Calculator 2018!");
let cents = readline.question("Please enter the amount of cents you have: ");

for (i = 0; i < 1; i++) {
  console.log("Computing ...");
  console.log("Checking ...");
  console.log("Eating a sandwitch ...");
  console.log("Going to sleep ...");
  console.log("Done!");
  console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
}

console.log(cents + " cents makes:");

const quarters = Math.floor(cents / 25);
let centRemainder;
centRemainder = Math.floor(cents % 25);

const dimes = Math.floor(centRemainder / 10);
centRemainder = Math.floor(centRemainder % 10);

const nickels = Math.floor(centRemainder / 5);
centRemainder = Math.floor(centRemainder % 5);

const pennies = Math.floor(centRemainder);

console.log(quarters + " quarters,");
console.log(dimes + " dimes,");
console.log(nickels + " nickels,");
console.log("and " + pennies + " pennies.");
console.log("Thanks for using my program. Credits for original program go to myself with assitance from others. ™Google.");
console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
