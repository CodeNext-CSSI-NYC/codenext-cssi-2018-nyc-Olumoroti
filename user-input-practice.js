//Author: Olumoroti Anibaba

// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)

var readline = require("readline-sync");

var rootOne = readline.question("Give me a number to show you how smart I am, human: ");

console.log("The square root of " + rootOne + " is " + Math.sqrt(rootOne) + ", or about " + Math.round(Math.sqrt(rootOne)) + ".");

// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!

var userName = readline.question("Give me your name, human: ");

var nameNumber = userName.length;

console.log("Your name has " + nameNumber + " letters, you fool.");

// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...

var startWord = readline.question("Give me a word, " + userName + " the Human: ");

console.log(startWord + " starts with the letter " + startWord.charAt(0) + ", you fool.");

// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.

var averageOne = parseFloat(readline.question(userName + " the Human Fool, give me a number: "));

var averageTwo = parseFloat(readline.question(userName + " the Human Fool, give me another number: "));

console.log("The average of " + averageOne + " and " + averageTwo + " is " + ((averageOne + averageTwo)/2) + ", but you wouldn't know that, wouldn't you? Now leave.");
