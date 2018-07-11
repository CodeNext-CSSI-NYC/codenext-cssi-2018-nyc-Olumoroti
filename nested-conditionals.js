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



let shape = readline.question("Choose either a square (s) or a rectangle (r): ");

let shapeName;

if(shape == "s" || shape == "square"){
  shapeName = "square";
}

else if(shape == "r" || shape == "rectangle"){
  shapeName = "rectangle";
}

else{
  console.log("That's not s, r, square, or rectangle.");
}

let equation = readline.question("Choose either to get the formula for a " + shapeName + "'s area (a) or perimeter (p): ");

if(equation == "a" || equation == "area" && shapeName == "square"){
  console.log("The equation for a square's area is: s^2 (side squared).");
}

else if(equation == "p" || equation == "perimeter" && shapeName == "square"){
  console.log("The equation for a square's perimiter is: 4s (side times four).");
}

else if(equation == "a" || equation == "area" && shapeName == "rectangle"){
  console.log("The equation for a rectangle's area is: lw (length times width).");
}

else if(equation == "p" || equation == "perimeter" && shapeName == "rectangle"){
  console.log("The equation for a rectangle's perimiter is: 2l + 2w (the sum of length times two and width times two).");
}

else{
  console.log("a, p, area, or perimeter ONLY.");
}



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

let totalCost = 0;

let foodChoice = readline.question("Do you want to order a value meal (v), or individual items (i) today? ");

let burger;

let fries;

let dessert;

let drink;

if(foodChoice == "v"){

  let valueChoice = readline.question("Do you want a burger (b) or chicken (c)? ");

  if(valueChoice == "b"){

    totalCost += 7;

    console.log("You owe " + totalCost + " dollars.");

  }

  else if(valueChoice == "c"){

    totalCost += 6;

    console.log("You owe " + totalCost + " dollars.");
  }

  else{

    console.log("That's not on the menu.");

  }
}

else if(foodChoice == "i"){

  burger = readline.question("Do you want a burger? (y or n): ");

  if(burger == "yes" || burger == "y"){

    totalCost+=4;

  }

  else{

    console.log("No burger, okay.");

  }

  fries = readline.question("Do you want fries? (y or n): ");

  if(fries == "yes" || fries == "y"){

    totalCost+=2;

  }

  else{

    console.log("No fries, okay.");

  }

  drink = readline.question("Do you want a drink? (y or n): ");

  if(drink == "yes" || drink == "y"){

    totalCost+=1;

  }

  else{

    console.log("No drink, okay.");

  }

  dessert = readline.question("Do you want a dessert? (y or n): ");

  if(dessert == "yes" || dessert == "y"){

    totalCost+=2;

  }

  else{

    console.log("No dessert, okay.");

  }

  console.log("You owe " + totalCost + " dollars.");

}

else{
  console.log("Okay, nothing today? Goodbye.");
}
