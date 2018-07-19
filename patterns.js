// Author: Olumoroti Anibaba

// You can use nested loops and 2-d arrays to draw patterns
// Here is an example:
// let numRowsCols = 15;
// for (let i = 0; i < numRowsCols; i++) {
//   let row = "";
//   for (let j = 0; j < numRowsCols; j++) {
//     if (i == j) {
//       row += "X";
//     } else {
//       row += "-";
//     }
//   }
//   console.log(row);
// }
// Run this, and make sure you understand exactly why it looks as it does



// 1. Try to make this one. Hint: you will need to compare i and j in order to
// decide when to add * onto the strings that represent each row.

// *
// **
// ***
// ****
// *****
// ******



// let numRowsColsPatternOne = 6;
// let row = "";
//
// for (let i = 0; i <= numRowsColsPatternOne; i++) {
//   for (let j = 0; j <= numRowsColsPatternOne; j++) {
//     if (i == j) {
//       row += "*";
//     }
//   }
//   console.log(row);
// }



// 2. Try to figure out how to draw a "border" pattern:

// XXXXXXXX
// X------X
// X------X
// X------X
// X------X
// X------X
// X------X
// XXXXXXXX



// let numRowsColsPatternTwo = 8;
// for (let i = 0; i < numRowsColsPatternTwo; i++) {
//   let row = "";
//   for (let j = 0; j < numRowsColsPatternTwo; j++) {
//     if (i == 0 || i == numRowsColsPatternTwo - 1 || (j == 0 || j == numRowsColsPatternTwo - 1)) {
//       row += "*";
//     } else {
//       row += "A";
//     }
//   }
//   console.log(row);
// }



// Bonus -- All the ones that follow are surprisingly tricky.

// 3. Hint -- You will need to add spaces to the string up to a certain point,
// and then add stars.
// Hint2 -- You could consider adding the stars first and then
// adding the spaces to the beginning of the string.

//     *
//    **
//   ***
//  ****
// *****



// let numRowsColsPatternThree = 6;
//
//
// for (let i = 0; i <= numRowsColsPatternThree; i++) {
//   let row = "";
//   for (let j = 0; j <= numRowsColsPatternThree; j++) {
//     if (i + j < numRowsColsPatternThree) {
//       row += " ";
//     } else {
//       row += "*";
//     }
//   }
//   console.log(row);
// }



// 4. Here's one that builds on the same idea in the previous pattern:
// *   *
//  * *
//   *
//  * *
// *   *



// let numRowsColsPatternFour = 16;
//
//
// for (let i = 0; i <= numRowsColsPatternFour; i++) {
//   let row = "";
//   for (let j = 0; j <= numRowsColsPatternFour; j++) {
//     if (i + j == numRowsColsPatternFour || i - j == 0) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }




// (For the ones that follow, feel free to use something other than "X" and "-").
// The characters that you draw don't matter, just the pattern they are in.

// HINT: The only way to figure these out is to write down the coordinates of
// the spots that have the X's in them, compare them to the spots that have "-"
// in them, and try to find a pattern you can express in code.



// 5. Try to figure out how to draw a "chessboard" pattern:

// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X



// let numRowsColsPatternFive = 16;
//
// for (let i = 0; i <= numRowsColsPatternFive; i++) {
//   let row = "";
//   for (let j = 0; j <= numRowsColsPatternFive; j++) {
//     if ((i + j) % 2 == 0) {
//       row += "X";
//     } else {
//       row += "-";
//     }
//   }
//   console.log(row);
// }



// These last two are very hard.

// 6. Try to figure out how to draw a "grid" pattern:
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX


// let numRowsColsPatternSix = 14;
//
// for (let i = 0; i <= numRowsColsPatternSix; i++) {
//   let row = "";
//   for (let j = 0; j <= numRowsColsPatternSix; j++) {
//     if (i % 2 == 0 || (i % 2 != 0 && (i + j) % 2 != 0)) {
//       row += "X";
//     } else {
//       row += "-";
//     }
//   }
//   console.log(row);
// }



// 7. A pyramid!
// Hint for this one... try printing stars straight down the middle first.
// How do you know what value will be the "middle"? Once you figure out what the middle is,
// you can add stars to the left and right of it as you go down the rows.
//
//     *
//    ***
//   *****
//  *******
// *********



// let numRowsColsPatternSeven = 14;
//
//
// for (let i = 0; i <= numRowsColsPatternSeven; i++) {
//   let row = "";
//   for (let j = 0; j <= numRowsColsPatternSeven; j++) {
//     if (j == Math.floor(numRowsColsPatternSeven / 2) || j == Math.ceil(numRowsColsPatternSeven / 2)) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }