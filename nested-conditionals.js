// Author: Olumoroti Anibaba

// 1. Ask the user to type in fruit or veggie.
// If they say fruit, ask them to choose a or b.
// If they say a, print out apple. If they say b, print out banana.
// If they said veggie at the beginning, ask them to choose m or p.
// If they say m, print out mushroom. If they say p, print out pepper.

var readline = require("readline-sync");

let fruggie = readline.question("Type in 'fruit' or 'veggie'. ");

if(fruggie == "fruit"){

  let fruitChoice = readline.question("Choose and enter either a or b. ");

  if(fruitChoice == "a"){
    console.log("Apple");
  }

  else if(fruitChoice == "b"){
    console.log("Bannana");
  }

  else{
    console.log("a or b ONLY, please.");
  }
}

else if(fruggie == "veggie"){

  let vegChoice = readline.question("Choose and enter either m or p. ");

  if(vegChoice == "m"){
    console.log("Mushroom");
  }

  else if(vegChoice == "p"){
    console.log("Pepper");
  }

  else{
    console.log("m or p ONLY, please.");
  }
}

else{
  console.log("fruit or veggie ONLY, please.");
}

// 2. Ask the user to choose square or rectangle.
// Also ask them to choose area or perimeter.
// Tell them the formula depending on what they chose.
// For example, if they said square and perimeter, you could print: 4 * s

// BONUS CHALLENGE
// 3. Pretend you are running a fast food shop.
// Start out with the line let totalCost = 0;
// Ask the user if they want a value meal, or if they will order individual items.
// If they want a value meal, ask if they want the burger ($7) or the chicken ($6).
// Add the amount to totalCost, then tell them how much they owe.
// If they want individual items, ask them (one item at a time)
//     if they want burger ($4), fries ($2), drink ($1), dessert ($2).
// Each time they say yes, add the right amount to the totalCost.
// At the end, tell them how much they owe.
