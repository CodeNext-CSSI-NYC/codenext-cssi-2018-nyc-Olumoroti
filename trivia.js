// Author: Olumoroti Anibaba

let readline = require("readline-sync");

let score = 0;

let check = true;

let blj;

let name;

console.log("?????????????????????????????????????????????????????????????????????????????????????????????????");

console.log("Trivia Game Show 2018");

const userName = readline.question("What is your name? ");

console.log("Hello " + userName + ". I want to ask you a few questions.");

console.log(userName + ", what is the capital of the United States? (5 points)");

console.log("A. Washington, DC");

console.log("B. 44.7 B");

console.log("C. Pick this you won't");

const capitalUS = readline.question("(Enter A, B, or C): ")

if (capitalUS == "A" || capitalUS == "C"){
  score+=5;
  console.log("Score: " + score + " points");
  check = true;
}

else{
  check = false;
}

 if(check == true){
  console.log(userName + ", define a BLJ in Super Mario 64. (10 points)");

  console.log("A. Blue Lily Japan");

  console.log("B. Backwards Long Jump");

  console.log("C. Bowser's Liliputian Jargon");

  blj = readline.question("(Enter A, B or C): ")
}

if (check == true && blj == "B"){
  score+=10;
  console.log("Score: " + score + " points");
}

else{
  check = false;
}

if(check == true){
 console.log(userName + ", what is this game's creator's full name? (20 points)");

 console.log("A. Mo");

 console.log("B. Olumoroti");

 console.log("C. Olumoroti Anibaba");

 name = readline.question("(Enter A, B or C): ")
}

if (check == true && name == "C"){
 score+=10;
 console.log("Score: " + score + " points");
 console.log("You won! Yay! Now Leave.");
}

else{
 check = false;
}
