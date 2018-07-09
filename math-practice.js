//Author: Olumoroti Anibaba
// Under each question, write the code that solves it, and then write your answer in a comment
// For example, if the question is: What's the sum of 79 and 2018 you would write:
console.log(79 + 2018);
// 2097

// Some of the questions will use these variables
const p = 12;
const q = 60;
const r = 25;

console.log("1. Is 91 divisible by 13? The answer should be either true or false");
var checkOne;
checkOne = 91 % 13;
if(checkOne > 0){
  console.log("False");
}
else{
  console.log("True");
}

// false

console.log("2. What is the result when the q divided by r is rounded to the nearest integer?")

var divideTwo;
var divideTwo = q/r;
console.log(Math.round(divideTwo));
// 2


console.log("3. Is the product of p and r greater than q squared? (The answer should be either true or false)");

var productThree = p*r;
var exponentThree = q**2;

if(productThree > exponentThree){
  console.log("True");
}

else{
  console.log("False");
}
//false

console.log("4. What is the remainder when the sum of q and r is divided by p?");

var sumFour;
var remainFour;

sumFour = q + r ;
remainFour = sumFour % p;

console.log(remainFour);
//1

console.log("5. 27 squared is equal to what number raised to the third power?");

var exponentFive = 27**2;
var third = 1/3;

var answerFive = exponentFive**(third);

console.log(Math.round(answerFive));

//9

console.log("6. What is the absolute value of p - q? (Find out how to do absolute value by searching online.)");

var absSix = Math.abs(p - q);

console.log(absSix);

//48

console.log("7. Find another math operation we haven't talked about yet on the MDN (Mozilla Developer Network) and try it out below.");

console.log(Math.random());
