// Author: Olumoroti Anibaba

let readline = require("readline-sync");

console.log("____________________________________________________________________________________________________");
console.log();
console.log("Welcome to the Coordinate Plane Calculator version 1.0! ")

let x1 = parseFloat(readline.question("Enter the x coordinate of the a point: "));
let y1 = parseFloat(readline.question("Enter the y coordinate of the a point: "));
let x2 = parseFloat(readline.question("Enter the x coordinate of the a point: "));
let y2 = parseFloat(readline.question("Enter the y coordinate of the a point: "));

let question = readline.question("Do you want to find the midpoint (m), length(l), or slope(s) of the line formed by these two points? ");

if(question == "m" || question == "midpoint"){

  let midpointX = (x1 + x2) / 2;

  let midpointY = (y1 + y2) / 2;


}
