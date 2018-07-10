//Author: Olumoroti Anibaba

var readline = require("readline-sync");

console.log("%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%");
console.log("Welcome to Mo's Pythagorean Triplet Checker 2018!");
var a = parseFloat(readline.question("Enter in the length of one leg: "));
var b = parseFloat(readline.question("Enter in the length of the other leg: "));
var c = parseFloat(readline.question("Enter in the length of the hypotenuse: "));

if((a ** 2) + (b ** 2) === (c ** 2)){
  console.log("The numbers " + a + ", " + b + ", and " + c + " are a Pythagorean Triplet. The triangle forms a right angle.");
}

else if((a ** 2) + (b ** 2) > (c ** 2)){
  console.log("The numbers " + a + ", " + b + ", and " + c + " are NOT a Pythagorean Triplet. The triangle forms an acute angle.");
}

else if((a ** 2) + (b ** 2) < (c ** 2)){
  console.log("The numbers " + a + ", " + b + ", and " + c + " are NOT a Pythagorean Triplet. The triangle forms an obtuse angle.");
}

console.log("Thanks for using my program. Credits for original program go to myself with assitance from others. ™Google.");
