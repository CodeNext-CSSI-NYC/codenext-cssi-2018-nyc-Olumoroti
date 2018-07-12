// Author: Olumoroti Anibaba
// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"

var readline = require("readline-sync");

function meow() {
  console.log("Meow");
}

// 1b. Call it three times in a row. Run your code to make sure it works.

meow();
meow();
meow();

// 2a. Write (declare) a function that takes one parameter and prints out the square of that number

function squareCalc(num){
  let square = num**2;
  console.log(square);
}

// 2b. Call it three times with three different parameters. Run your code to make sure it works.

squareCalc(2);
squareCalc(5);
squareCalc(1);

// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.

function biggerNumCheck(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
  } else if (num2 > num1) {
    console.log(num2 + " is greater than " + num2);
  } else {
    console.log(num1 + " is the same as " + num2);
  }
}

// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// Run your code to make sure it works.

biggerNumCheck(4, 5);
biggerNumCheck(5, 2);
biggerNumCheck(4, 4);

// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.

function nameGreet(name) {
  return ("Hello " + name);
}

// 4b. Call the function and store the result in a variable. Then, print out that variable.
// Repeat this three times with different names.

let Mary = nameGreet("Mary");
let Mo = nameGreet("Mo");
let GodHimself = nameGreet("Jebaited");

console.log(Mary);
console.log(Mo);
console.log(GodHimself);

// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.

function averageFind(a, b) {
  return ((a + b)/2);
}

// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?

let aver1 = averageFind(12, 6);
console.log("The average is " + aver1 + ".");

let aver2 = averageFind(5, 7);
console.log("The average is " + aver2 + ".");

let aver3 = averageFind(1, 1);
console.log("The average is " + aver3 + ".");
