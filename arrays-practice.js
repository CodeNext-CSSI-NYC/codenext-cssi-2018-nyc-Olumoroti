// Author: OLumoroti Anibaba
// 1. Write a function that takes an array of numbers and returns an array that contains
// double each number.
function double(arr) {
  let doubleArr = [];
  for (i = 0; i < arr.length; i++) {
    doubleArr[i] = arr[i] * 2;
  }
  return doubleArr;
}
// Here is one test. Uncomment it when ready and try adding more.
// testEqual(double([3, 2, 5]), [6, 4, 10]);
// testEqual(double([1, 2, 3]), [2, 4, 6]);
// testEqual(double([0, 0, 0]), [0, 0, 0]);
// testEqual(double([-1, -2, 100]), [-2, -4, 200]);



// 2. Write a function that takes an array and returns its second-to-last element.
function secondToLast(arr) {
  return arr[arr.length - 2];

}
// Here is one test. Uncomment it when ready and try adding more.
// console.log(secondToLast([3, 1, 4, 9, 2, 5]) == 2);
// console.log(secondToLast([true, false, true]) == false);
// console.log(secondToLast(["h", "a", "p"]) == "a");


// 3. Write a function that takes an array of numbers and returns an array that
// contains only the smallest and largest values from the array. Hint: sort().
function smallestLargest(arr) {
  let newSort = arr.sort();
  let newArray = [newSort[0], newSort[arr.length - 1]];
  return newArray;

}
// Here is one test. Uncomment it when ready and try adding more.
// testEqual(smallestLargest([3, 7, 2, 5]), [2, 7]);
// testEqual(smallestLargest([4, 4, 4, 5]), [4, 5]);



// 4. Write a function that takes an array and returns a similar array,
// but with the last item moved up to the beginning.
function moveLast(arr) {
  const arrLength = arr.length;
  arr = arr.concat(arr);
  arr.splice(0, arrLength - 2);
  arr.pop();
  return arr;

}

// Here is one test. Uncomment it when ready and try adding more.
//testEqual(moveLast([3, 2, 5, 7]), [7, 3, 2, 5]);



// 5. Write a function that takes an array and returns an array that contains
// the first letter of each element of the passed in array.
// For example, if ["apple", "banana", "pear"] is passed in, it should
// return ["a", "b", "p"]
function firstLetter(arr) {
  let returnFirst = [];
  for (i = 0; i < arr.length; i++) {
    returnFirst += arr[i].charAt(0);
  }
  return returnFirst;
}
// Here is one test. Uncomment it when ready and try adding more.
testEqual(firstLetter(["apple", "banana", "pear"]), ["a", "b", "p"]);
testEqual(firstLetter(["Hello", "Everyone", "Loves", "President"]), ["H", "E", "L", "P"]);




/*
Bonus 1: Write a function that takes a list of strings an prints them, one per line,
in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/


// Bonus 2: Write function that translates a text to Pig Latin.
// We'll say that English is translated to Pig Latin by taking the first letter
// of every word, moving it to the end of the word and adding ‘ay’.
// So “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
// Hint: create an array by using the split() method of Strings. Look it up.\
// Then go through the array and convert each word to pig latin.
function pigLatin(text) {

}






// ==================================================================== //
// This is used in some of the tests above. Don't edit it.
function testEqual(arr1, arr2) {
  if (arr1.length != arr2.length) {
    console.log(false);
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}