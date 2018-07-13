// Author: Olumoroti Anibaba
// 1a. Print out all of the numbers from 1 to 20 (using a loop).



// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }



// 1b. Print out all of the numbers from 20 to 1 (using a loop).



// for (let i = 20; i >= 1; i--) {
//   console.log(i);
// }



// 2. Write a function that takes in a number and prints out all of the factors
// of that number. For example, for 23 it will print 1 and 23. For 24, it will
// print 1, 2, 3, 4, 6, 8, 12, 24. Recall that the factors of a number are all
// the numbers it is divisible by (from 1 up to itself).
// Make sure to test this with several numbers (including some huge ones from fun).



// function factor(num) {
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       console.log(i);
//     }
//   }
// }
//
//
// // factor(24);
// factor(400);



// 3. Print out all of the odd numbers between 300 and 350 (using a loop).



// for (let i = 301; i < 350; i += 2) {
//   console.log(i);
// }



// 4. Write a function that, given a string of any length,
// returns true if it contains at least one space.



// function containsSpace(str) {
//   if (str.length == 0) {
//     return false;
//   }
//   let i = 0;
//   while (i < str.length) {
//     i++;
//     let check = str.charAt(i);
//     if (check == " ") {
//       return true;
//     } else if (check != " " && check == str.charAt(str.length - 1)) {
//       return false;
//     }
//   }
// }
// // Some tests
// console.log(containsSpace("star wars") == true);
// console.log(containsSpace("     ") == true);
// console.log(containsSpace("apple") == false);
// console.log(containsSpace("") == false);



// 5. Given a string of any length, return the total number of times "a" or "A" appears.


// function countAs(str) {
//   let count = 0;
//   let i = 0;
//
//   if (str.length == 0) {
//     return 0;
//   }
//
//   while (i < str.length) {
//     i++;
//     if (str.charAt(i) == "a" || str.charAt(i) == "A") {
//       count++;
//     }
//     if (i == str.length - 1) {
//       return count;
//
//     }
//   }
// }
//
//
// // Some tests
// console.log(countAs("happy") == 1);
// console.log(countAs("lady gaga") == 3);
// console.log(countAs("") == 0);



// 6. Write a function arithmeticSequence that takes in a starting number (start),
// a difference (diff), and a number of terms (numTerms), and prints out the
// first numTerms of the sequence. For example, if the inputs are
// 3 (start), 4 (diff), and 6 (numTerms), then it should print out:
// 3, 7, 11, 15, 19, 23
// Because it starts at 3, each term goes up by 4, and there are 6 terms.

// function arithmeticSequence(start, diff, numTerms) {
//
//   for (let i = 0; i < numTerms; i++) {
//     console.log(start + (diff * i));
//   }
// }








// let i = start;
// for (let i = start; i >= diff * (numTerms - 1); i += diff) {
//   console.log(i);
// }

//   while (i >= diff * (numTerms - 1) ) {
//     console.log(i);
//     i += diff;
//   }
// }



//arithmeticSequence(3, 4, 6);
//arithmeticSequence(4, 5, 4);


// 7. Given a string of any length, return a new string that is a copy of that string in reverse.



// function reverseString(str) {
//   let count;
//   let newStr = "";
//   for (i = 0; i < str.length; i++) {
//     count = (str.length - 1) - i;
//     newStr += str.charAt(count);
//   }
//   return newStr;
//
// }
// // Some tests
// console.log(reverseString("banana") == "ananab");
// console.log(reverseString("Was it a car or a cat I saw?") == "?was I tac a ro rac a ti saW");
// console.log(reverseString("doorag") == "garood");
// console.log(reverseString("a") == "a");
// console.log(reverseString("") == "");



// Bonus - 8. Write a function isPrime that takes a number and checks if it is prime.
// It should return either true or false.
// Recall that a prime number is only divisible by itself and 1.
function isPrime(num) {
  let count = 0;
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count > 0) {
    return false;
  } else {
    return true;
  }
}
// Here are some tests -- add more
console.log(isPrime(89) == true);
console.log(isPrime(91) == false);
console.log(isPrime(89) == true);
console.log(isPrime(91) == false);
console.log(isPrime(7) == true);
console.log(isPrime(14) == false);