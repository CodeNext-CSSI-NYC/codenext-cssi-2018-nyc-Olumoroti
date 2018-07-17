// Author: Olumoroti Anibaba

// Read about Yahtzee at https://en.wikipedia.org/wiki/Yahtzee
// It will help if you have a basic idea of how the game works.

let randomInt = require("random-int");
let readline = require("readline-sync");

// 1. Write a function that rolls a single six-sided die and returns the result.
function rollDie() {
  let roll = randomInt(1, 6);
  return roll;
}



// 2. Write a function that rolls five separate dice and returns the result in an array.
// This function should in turn call the function from #1 above.
function rollFiveDice() {
  let rollArray = [];
  for (let i = 0; i < 5; i++) {
    rollArray.push(rollDie());
  }
  return rollArray;
}
// An example return value is [2,3,5,1,2];



// 3. Write a function that takes in an array of five dice rolls and returns an
// object in which the keys are the rolls and the values are the frequency of the rolls.
// So if the array passed in is [2,3,5,1,2], then the return from this function is:
// {2: 2, 3: 1, 5: 1, 1: 1} because two appears twice and 1/3/5 appear once.
function createCounts(arr) {
  let rollFrequency = {};
  for (let i = 0; i < arr.length; i++) {
    let diceRoll = arr[i];
    if (rollFrequency[diceRoll] == undefined) {
      rollFrequency[diceRoll] = 1;
    } else {
      rollFrequency[diceRoll]++;
    }
  }
  return rollFrequency;
}
// You should test out this function by first calling the function in #2,
// storing the result in a variable, then calling this function and passing in that
// variable as the input to this function.

let practiceFiveDiceRoll = rollFiveDice();
//
let practiceFreq = createCounts(practiceFiveDiceRoll);

// Note: I will refer to the object returned by #3 above as a "counter object"
// from here on out. I will be referring to it a lot. A "counter object" has keys
// that are the numbers of the dice, and values that represent how many of the five
// dice rolled that number. So the values should always add up to 5.



// 3b. Write a function isValid that takes in a counter object and checks that the values add up to 5.
// It should return true or false. For example, if you pass in {2: 2, 3: 1, 5: 1, 1: 1}
// it should return true, but {2: 2, 3: 1, 5: 1, 1: 2} should return false.
// Feel free to use this function anywhere else in the code if you'd like.

function isValid(obj) {
  let sum = 0;
  let arr = Object.values(obj);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum == 5) {
    return true;
  } else {
    return false;
  }
}

//console.log(isValid(practiceFreq));

// 4. Write a function that determines whether or not a counter object contains
// a two-of-a-kind. This means that at least one of the counts is 2 or higher.
function hasTwoOfAKind(obj) {
  let arr = Object.values(obj);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 2) {
      return true;
    }
  }
  return false;
}


// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
hasTwoOfAKind({
  1: 3,
  2: 1,
  6: 1
});



// 5. Write a function that determines whether or not a counter object contains
// a three-of-a-kind. This means that one of the counts is 3 or higher.
function hasThreeOfAKind(obj) {
  let arr = Object.values(obj);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3) {
      return true;
    }
  }
  return false;
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
hasThreeOfAKind({
  1: 3,
  2: 1,
  6: 1
});



// 6. Write a function that determines whether or not a counter object contains
// a four-of-a-kind. This means that one of the counts is 4 or higher.
function hasFourOfAKind(obj) {
  let arr = Object.values(obj);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 4) {
      return true;
    }
  }
  return false;

}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
hasFourOfAKind({
  1: 3,
  2: 1,
  6: 1
});
hasFourOfAKind({
  1: 4,
  2: 1,
  6: 1
});

// 7. Write a function that determines whether or not a counter object contains
// a yahtzee (all five are the same). This means that one of the counts is 5.
function hasYahtzee(obj) {
  let arr = Object.values(obj);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      return true;
    }
  }
  return false;


}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
hasYahtzee({
  1: 5
});

// 8. Write a function that determines whether or not a counter object contains
// a full house. This means that one of the counts is 3 and a different one is 2.
function hasFullHouse(obj) {
  let arr = Object.values(obj);
  let check2 = false;
  let check3 = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 2) {
      check2 = true;
    } else if (arr[i] == 3) {
      check3 = true;
    }
  }
  if (check2 == true && check3 == true) {
    return true;
  } else {
    return false;
  }

}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// console.log(hasFullHouse({
//   1: 3,
//   5: 2
// }));



// 9. Write a function that determines whether or not a counter object contains
// a small straight. This means that either all of the values from 1-4 appear at least once,
// or all the values from 2-5 appear at least once, or all the values from 3-6 appear at least once.
function hasSmallStraight(obj) {
  let arr = Object.keys(obj);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != undefined && arr[i + 1] != undefined && arr[i + 2] != undefined && arr[i + 3] != undefined) {
      return true;
    }
  }
  return false;
}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
console.log(hasFullHouse({
  3: 1,
  4: 1,
  5: 2,
  6: 1
}));


// 10. Write a function that determines whether or not a counter object contains
// a large straight. This means that either all of the values from 1-5 appear at least once,
// or all the values from 2-6 appear at least once.
function hasLargeStraight(obj) {

}
// You can test this out by calling #2 and #3 above to create counter objects,
// or you can just create your own and pass them in. For example, you could call
// hasFullHouse({2:1, 3:1, 4:1, 5:1, 6:1}) and make sure it says true.