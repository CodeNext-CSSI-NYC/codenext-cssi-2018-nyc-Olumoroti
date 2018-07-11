// Author: Olumoroti Anibaba
// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

var readline = require("readline-sync");

// 1. Ask the user for a number and print whether it is positive or negative or zero.



// const numberGuess = readline.question("Enter in a number: ");
//
// if(numberGuess > 0){
//   console.log("This number is positive.");
// }
//
// else if(numberGuess < 0){
//   console.log("This number is negative.");
// }
//
// else if (numberGuess == 0){
//   console.log("This number is zero.");
// }



// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.



// const numberOne = parseFloat(readline.question("Enter in a number: "));
//
// const numberTwo = parseFloat(readline.question("Enter in another number: "));
//
// const numberThree = parseFloat(readline.question("Enter in another number: "));
//
// if (numberOne >= numberTwo && numberOne >= numberThree){
//   console.log(numberOne + " was the biggest number you entered.");
// }
//
// else if(numberTwo >= numberOne && numberTwo >= numberThree){
//   console.log(numberTwo + " was the biggest number you entered.");
// }
//
// else if (numberThree >= numberOne && numberThree >= numberTwo){
//   console.log(numberThree + " was the biggest number you entered.");
// }



// 3. Ask the user for a number and print whether it is odd or even



// const oddEven = readline.question("Enter in a number: ");
//
// if ((oddEven % 2) == 0){
//   console.log("This number is even.");
// }
//
// else if ((oddEven % 2) == 1){
//   console.log("This number is odd.");
// }
//
// else{
//   console.log("This is a decimal or not a number.");
// }



// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant



// const letter = readline.question("Enter in a letter: ");
//
// if(letter == "a" || letter == "e" || letter == "i" || letter == "i" || letter == "u"){
//   console.log("This letter is a vowel.");
// }
//
// else{
//   console.log("This letter is a consonant.")
// }



// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)



// const leapYear = readline.question("Enter in a year: ");
//
// if(leapYear % 4 == 0 && leapYear % 100 != 0 || leapYear % 4 == 0 && leapYear % 400 == 0){
//   console.log(leapYear + " is a leap year.");
//   }
// else {
//   console.log(leapYear + " is not a leap year.");
// }



// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.



// const citizen = readline.question("Have you been a citizen of the United States for at least 9 years? (put y or n): ");
//
// const age = readline.question("What is your age?");
//
// const NewYork = readline.question("Do you live in the New York state? (put y or n): ");
//
// if(citizen == "y" && age >= 30 && NewYork == "y"){
//   console.log("You can run for senate in NY.");
// }
//
// else{
//   console.log("You cant run for senate in NY.");
// }



// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.



// const date = readline.question("Enter a whole number from 1 to 7: ");
//
// switch(date) {
//   case '1':
//     console.log("Monday");
//     break;
//
//   case '2':
//     console.log("Tuesday");
//     break;
//
//   case '3':
//     console.log("Wednesday");
//     break;
//
//   case '4':
//     console.log("Thursday");
//     break;
//
//   case '5':
//     console.log("Friday");
//     break;
//
//   case '6':
//     console.log("Saturday");
//     break;
//
//   case '7':
//     console.log("Sunday");
//     break;
//
//   default:
//     console.log("This is not a number between 1 and 7.");
//
// }
