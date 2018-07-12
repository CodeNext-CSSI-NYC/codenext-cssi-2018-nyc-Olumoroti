// Author: Olumoroti Anibaba

//Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

 // let hiBye = makeAbba("Hi", "Bye");
 // let yoAlice = makeAbba("Yo", "Alice");
 // let whatUp = makeAbba("What", "Up");

// function makeAbba(a, b) {
//   return a + b + b + a;
// }

// console.log(hiBye, yoAlice, whatUp);




//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

//Examples:
// let hiHello = comboString("Hello", "hi");
// let helloHi = comboString("hi", "Hello");
// let baaa = comboString("aaa", "b");
//
// function comboString(a, b) {
//   if (a.length > b.length) {
//     return b + a + b;
//   } else if (b.length > a.length) {
//     return a + b + a;
//   } else {
//     return "No.";
//   }
// }
// console.log(hiHello, helloHi, baaa);




// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign". If the string's length is less than 2, then simply return the string itself.

// Examples:
let codign = lastTwo("coding");
let ba = lastTwo("ab");
let a = lastTwo("a");

function lastTwo(str) {
  if (str.length >= 2) {
    return str.substring(0, (str.length - 2)) + str.charAt(str.length - 1) +  str.charAt(str.length - 2)
    } else {
    return str;
  }

}

console.log(codign, ba, a);
