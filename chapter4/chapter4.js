"use strict";

// if and if else statements
// if *some condition is true*, then *a certain action will happen*, else *another action will
// happen*

// let rain = true;
// if (rain) {
//   console.log("** Taking my umbrella when I need to go outside **");
// } else {
//   console.log("** I can leave my umbrella at home **");
// }

// let age = 15;
// if (age < 18) {
//   console.log("We're very sorry, but you can't get in under 18");
// } else {
//   console.log("Welcome!");
// }

// let hobby = "dancing";
// if(hobby = "coding"){
//  console.log("** I love coding too! **");
// } else {
//  console.log("** Can you teach me that? **");
// }

// let surname = false;
// console.log(surname);
// if(surname){
//  console.log("It's True");
// }
// if(!surname){
//  console.log("False now");
// }

// else if statements

// let age = 1;
// let cost = 0;
// let message;
// if (age < 3) {
//   cost = 0;
//   message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//   cost = 5;
//   message = "With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//   cost = 10;
//   message = "A regular ticket costs 10 dollars.";
// } else {
//   cost = 7;
//   message = "A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost " + cost);

// let age = prompt("How old are you?");
// age = Number(age);
// let message;
// if(age >= 21){
//  message = "You can enter and drink.";
// }else if(age >= 19){
//  message = "You can enter but not drink.";
// }else{
//  message = "You are not allowed in!";
// }
// console.log(message);

// Conditional ternary operators
// age < 18 ? console.log("denied") : console.log("allowed");

// let id = true;
// let message = (id) ? "Allowed In" : "Denied Entry";
// console.log(message);

// const ids = false;
// const messages = (ids) ? "Allowed In" : "Denied Entry";
// console.log(messages);

//switch statements
// let activity = "Get up";
// if (activity === "Get up") {
//   console.log("It is 6:30AM");
// } else if (activity === "Breakfast") {
//   console.log("It is 7:00AM");
// } else if (activity === "Drive to work") {
//   console.log("It is 8:00AM");
// } else if (activity === "Lunch") {
//   console.log("It is 12.00PM");
// } else if (activity === "Drive home") {
//   console.log("It is 5:00PM");
// } else if (activity === "Dinner") {
//   console.log("It is 6:30PM");
// }

// switch (activity) {
//   case "Get up":
//     console.log("It is 6:30AM");
//     break;
//   case "Breakfast":
//     console.log("It is 7:00AM");
//     break;
//   case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//   case "Lunch":
//     console.log("It is 12:00PM");
//     break;
//   case "Drive home":
//     console.log("It is 5:00PM");
//     break;
//   case "Dinner":
//     console.log("It is 6:30PM");
//     break;
// }

// if (ghj) {
//   // omitted to avoid making this unnecessarily long
// } else {
//   console.log("I cannot determine the current time.");
// }

// switch (activity) {
//   case "Get up":
//     console.log("It is 6:30AM");
//     break;
//   case "Breakfast":
//     console.log("It is 7:00AM");
//     break;
//   case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//   case "Lunch":
//     console.log("It is 12:00PM");
//     break;
//   case "Drive home":
//     console.log("It is 5:00PM");
//     break;
//   case "Dinner":
//     console.log("It is 6:30PM");
//     break;
//   default:
//     console.log("I cannot determine the current time.");
//     break;
// }

// let randomNumber;
// let answer = "Something went wrong";
// let question = prompt("Ask me anything");
// switch (randomNumber) {
//   case 0:
//     answer = "It will work out";
//     break;
//   case 1:
//     answer = "Maybe, maybe not";
//     break;
//   case 2:
//     answer = "Probably not";
//     break;
//   case 3:
//     answer = "Highly likely";
//     break;
//   default:
//     answer = "I don't know about that";
// }
// let output = "You asked me " + question + ". I think that " + answer;
// console.log(output);

// //Combining cases
//  let grade = "A";
// // switch(grade){
// //     case "F":
//     case "D":
//     console.log("You've failed!");
//     break;
//     case "C":
//     case "B":
//     console.log("You've passed!");
//     break;
//     case "A":
//     console.log("Nice!");
//     break;
//     default:
//     console.log("I don't know this grade.");
//    }

//    if(grade === "F" || grade === "D") {
//     console.log("You've failed!");
//    } else if(grade === "C" || grade === "B") {
//     console.log("You've passed!");
//    } else if(grade === "A") {
//     console.log("Nice!");
//    } else {
//     console.log("I don't know this grade.");
//    }

// Practice exercise 4.5

let prize = prompt("Any nmber between 0 and 10");
prize = Number(prize);
let output = "My Selection:";

switch (prize) {
  case 0:
    output += "Gold";
  case 1:
    output += "Coin ";
    break;
  case 2:
    output += "Big ";
  case 3:
    output += "Box of ";
  case 4:
    output += "Silver ";
  case 5:
    output += "Bricks ";
    break;
  default:
    output += "Sorry Try Again";
}
console.log(output);




// Chapter projects
// Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less
// than a dynamic number value in your code. Output the result to the user.

// let val = prompt("What number?");
// val = Number(val);
// let num = 100;
// let message = "nothing";
// if (val > num) {
//  message = val + " was greater than " + num;
// } else if (val === num) {
//     message = val + " was equal to " + num;
// } else {
//  message = val + " is less than " + num;
// }
// console.log(message);
// console.log(message);



// Friend checker game
// Ask the user to enter a name, using the switch statement to return a confirmation
// that the user is a friend if the name selected is known in the case statements. You
// can add a default response that you don't know the person if it's an unknown name.
// Output the result into the console.

