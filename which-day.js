// Author: Olumoroti Anibaba

// Declare a function whichDay that takes two parameters:
// A day of the week, and a number of days from now.
// It should return the day of the week it will be that many days from now.

function whichDay(day, num){
  let dayCheck = 0;
  switch (day) {
    case "Monday":
    dayCheck = 0;
    break;
    case "Tuesday":
    dayCheck = 1;
    break;
    case "Wednesday":
    dayCheck = 2;
    break;
    case "Thursday":
    dayCheck = 3;
    break;
    case "Friday":
    dayCheck = 4;
    break;
    case "Saturday":
    dayCheck = 5;
    break;
    case "Sunday":
    dayCheck = 6;
    break;
    default:
    return "No";

  }

  switch ((dayCheck + num) % 7){
    case 0:
    return "Monday";
    break;
    case 1:
    return "Tuesday";
    break;
    case 2:
    return "Wednesday";
    break;
    case 3:
    return "Thursday";
    break;
    case 4:
    return "Friday";
    break;
    case 5:
    return "Saturday";
    break;
    case 6:
    return "Sunday";
    break;
  }

}


// Tests
console.log(whichDay("Thursday", 4) == "Monday");
console.log(whichDay("Tuesday", 100) == "Thursday");
