// Author: Olumoroti Anibaba
let objEquals = require("object-equal");
let arrEquals = require("array-equal");
/******************************************************************************
                                   canBalance()

Instructions:
Given a non-empty array, return true if there is a place to split the array so
that the sum of the numbers on one side is equal to the sum of the numbers on
the other side.

Examples:
canBalance([1, 1, 1, 2, 1]) → true
canBalance([2, 1, 1, 2, 1]) → false
canBalance([10, 10]) → true
*******************************************************************************/

function canBalance(nums) {
  for (let i = 1; i < nums.length; i++) {
    let arr1 = nums.slice(0, i);
    let arr2 = nums.slice(i, nums.length);
    let sum1 = 0;
    let sum2 = 0;

    for (let j = 0; j < arr1.length; j++) {
      sum1 += arr1[j];
    }
    for (let h = 0; h < arr2.length; h++) {
      sum2 += arr2[h];
    }
    if (sum1 == sum2) {
      return true;
    }
  }
  return false;
}

// Test this function.
//testCanBalance();

/******************************************************************************
                                    maxSpan()

Instructions:
Consider the leftmost and righmost appearances of some value in an array. We'll
say that the "span" is the number of elements between the two inclusive. A
single value has a span of 1. Returns the largest span found in the given array.

Examples:
maxSpan([1, 2, 1, 1, 3]) → 4
maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6
*******************************************************************************/

function maxSpan(nums) {
  // let tempSpan;
  // let span = 0;
  // for (let check = 0; check < nums.length; check++) {
  //   for (let num = nums.length - 1; nums >= 0; nums--) {
  //     let value = nums[check];
  //     if (value == nums[num]) {
  //       tempSpan = num - check;
  //     }
  //     if (tempSpan >= span) {
  //       span = tempSpan;
  //     }
  //   }
  // }
  // return span;

  let tempSpan = 0;
  let span = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        tempSpan = (j - i) + 1;
      }
      if (tempSpan > span) {
        span = tempSpan;
      }
    }
  }
  return span;
}

// Test this function.
//testMaxSpan();

/******************************************************************************
                                   linearIn()

Instructions:
Given two arrays of numbers sorted in increasing order, outer and inner, return
true if all of the numbers in inner appear in outer. The best solution makes
only a single "linear" pass of both arrays, taking advantage of the fact that
both arrays are already in sorted order.

Examples:
linearIn([1, 2, 4, 6], [2, 4]) → true
linearIn([1, 2, 4, 6], [2, 3, 4]) → false
linearIn([1, 2, 4, 4, 6], [2, 4]) → true
*******************************************************************************/

function linearIn(outer, inner) {

}

// Test this function.
//testLinearIn();



/****************************************************************************
                                    Tests
*****************************************************************************/
function testCanBalance() {
  console.log();
  console.log("canBalance([1, 1, 1, 2, 1]) → true " + canBalance([1, 1, 1, 2, 1]));
  console.log("canBalance([2, 1, 1, 2, 1]) → false " + canBalance([2, 1, 1, 2, 1]));
  console.log("canBalance([10, 10]) → true " + canBalance([10, 10]));
  console.log("canBalance([10, 0, 1, -1, 10]) → true " + canBalance([10, 0, 1, -1, 10]));
  console.log("canBalance([1, 1, 1, 1, 4]) → true " + canBalance([1, 1, 1, 1, 4]));
  console.log("canBalance([2, 1, 1, 1, 4]) → false " + canBalance([2, 1, 1, 1, 4]));
  console.log("canBalance([2, 3, 4, 1, 2]) → false " + canBalance([2, 3, 4, 1, 2]));
  console.log("canBalance([1, 2, 3, 1, 0, 2, 3]) → true " + canBalance([1, 2, 3, 1, 0, 2, 3]));
  console.log("canBalance([1, 2, 3, 1, 0, 1, 3]) → false " + canBalance([1, 2, 3, 1, 0, 1, 3]));
  console.log("canBalance([1]) → false " + canBalance([1]));
  console.log("canBalance([1, 1, 1, 2, 1]) → true " + canBalance([1, 1, 1, 2, 1]));
}

function testMaxSpan() {
  console.log();
  console.log("maxSpan([1, 2, 1, 1, 3]) → 4 " + maxSpan([1, 2, 1, 1, 3]));
  console.log("maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6 " + maxSpan([1, 4, 2, 1, 4, 1, 4]));
  console.log("maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6 " + maxSpan([1, 4, 2, 1, 4, 4, 4]));
  console.log("maxSpan([3, 3, 3]) → 3 " + maxSpan([3, 3, 3]));
  console.log("maxSpan([3, 9, 3]) → 3 " + maxSpan([3, 9, 3]));
  console.log("maxSpan([3, 9, 9]) → 2 " + maxSpan([3, 9, 9]));
  console.log("maxSpan([3, 9]) → 1 " + maxSpan([3, 9]));
  console.log("maxSpan([3, 3]) → 2 " + maxSpan([3, 3]));
  console.log("maxSpan([]) → 0 " + maxSpan([]));
  console.log("maxSpan([1]) → 1 " + maxSpan([1]));
}

function testLinearIn() {
  console.log();
  console.log("linearIn([1, 2, 4, 6], [2, 4]) → true " + linearIn([1, 2, 4, 6], [2, 4]));
  console.log("linearIn([1, 2, 4, 6], [2, 3, 4]) → false " + linearIn([1, 2, 4, 6], [2, 3, 4]));
  console.log("linearIn([1, 2, 4, 4, 6], [2, 4]) → true " + linearIn([1, 2, 4, 4, 6], [2, 4]));
  console.log("linearIn([2, 2, 4, 4, 6, 6], [2, 4]) → true " + linearIn([2, 2, 4, 4, 6, 6], [2, 4]));
  console.log("linearIn([2, 2, 2, 2, 2], [2, 2]) → true " + linearIn([2, 2, 2, 2, 2], [2, 2]));
  console.log("linearIn([2, 2, 2, 2, 2], [2, 4]) → false " + linearIn([2, 2, 2, 2, 2], [2, 4]));
  console.log("linearIn([2, 2, 2, 2, 4], [2, 4]) → true " + linearIn([2, 2, 2, 2, 4], [2, 4]));
  console.log("linearIn([1, 2, 3], [2]) → true " + linearIn([1, 2, 3], [2]));
  console.log("linearIn([1, 2, 3], [-1]) → false " + linearIn([1, 2, 3], [-1]));
  console.log("linearIn([1, 2, 3], []) → true " + linearIn([1, 2, 3], []));
  console.log("linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 0, 3, 12]) → true " + linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 0, 3, 12]));
  console.log("linearIn([-1, 0, 3, 3, 3, 10, 12], [0, 3, 12, 14]) → false " + linearIn([-1, 0, 3, 3, 3, 10, 12], [0, 3, 12, 14]));
  console.log("linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 10, 11]) → false " + linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 10, 11]));
}