// Author: Olumoroti Anibaba

// In these exercises, you will write functions, and then write tests that will call your functions.

// Example - Absolute value function
// function absValue(num) {
//   if (num < 0) {
//     return num * -1;
//   } else {
//     return num;
//   }
// }

// Example - Tests of the absolute value function
// If any of these are false, something went wrong
// console.log(absValue(7) == 7);
// console.log(absValue(0) == 0);
// console.log(absValue(-3) == 3);
// console.log(absValue(-2.44) == 2.44);



// 1a. Write an isVowel function that takes one parameter, a letter, and
// returns true if it is a vowel and false if not.

function isVowel(let) {
  if (let == "a" || let == "e" || let == "i" || let == "o" || let == "u") {
    return true;

  } else {
    return false;
  }
}

// 1b. Tests for isVowel. Two examples have been provided. Add at least 3 more.
// console.log(isVowel("a") == true);
// console.log(isVowel("b") == false);
// console.log(isVowel("c") == true);
// console.log(isVowel("e") == false);
// console.log(isVowel("ze") == false);


// 2a. Write a convertTemp function that takes two parameters:
// The first is a temperature, and the second is either "toC" or "toF", which tells
// you whether to covert Fahrenheit to Celsius, or Celsius to Fahrenheit.
// The function should return the converted temperature.

function convertTemp(temp, convert) {
  if (convert == "toC") {
    let result = (temp -= 32) / (9 / 5);
    return result;
  } else if (convert == "toF") {
    let result = ((temp * (9 / 5)) + 32);
    return result;
  } else {
    return undefined;
  }
}

// 2b. Tests for convertTemp. Two examples have been provided. Add at least 3 more.
// console.log(convertTemp(95, "toC") == 35);
// console.log(convertTemp(95, "toF") == 203);
// console.log(convertTemp(95, "toC") == 37);
// console.log(convertTemp(95, "toF") == 209);
// console.log(convertTemp(-22, "toC") == -30);
//



// 3a. Write an isDivisible function that takes two parameters:
// The original number, and the number we want to know if it's divisible by.
// The function should return true or false.

function isDivisible(a, b) {
  if (a % b == 0) {
    return true;
  } else {
    return false;
  }
}

// 3b. Tests for isDivisible. Two examples have been provided. Add at least 3 more.
console.log(isDivisible(15, 3) == true);
console.log(isDivisible(17, 2) == false);
console.log(isDivisible(15, 4) == true);
console.log(isDivisible(18, 2) == false);
console.log(isDivisible(1, 0) == false);
