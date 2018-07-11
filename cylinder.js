// Author: Olumoroti Anibaba

var readline = require("readline-sync");

console.log("!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!@!");

console.log("Welcome to Mo's Right Cylinder Calculator 2018!")

let radius = parseFloat(readline.question("Enter the radius of your cylinder: "));

let height = parseFloat(readline.question("Enter the height of your cylinder: "));

let find = readline.question("Type 'v' to find the volume of your cylinder, or 's' to find the surface area.");

if(find === "v" || find === "V" || find === "volume" || find === "vol" || find === "Volume" || find === "VOLUME"){
  let base = Math.PI * (radius ** 2);
}
