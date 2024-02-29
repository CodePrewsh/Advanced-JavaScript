"use stricr";

//while loops

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//   if (someArray[0] === "Louiza") {
//     console.log("Found her!");
//     notFound = false;
//   } else {
//     someArray.shift();
//   }
// }

// Practice exercise 5.1

// const max = 5;
// const ranNumber = Math.floor(Math.random() * max) + 1;
// console.log(ranNumber);
// let correct = false;
// while (!correct) {
//   let guess = prompt("Guess a Number 1 - " + max);
//   guess = Number(guess);
//   if (guess === ranNumber) {
//     correct = true;
//     console.log("You got it " + ranNumber);
//   } else if (guess > ranNumber) {
//     console.log("Too high");
//   } else {
//     console.log("Too Low");
//   }
// }

// let game = 10;
// let ranNumber = Math.floor(Math.random () * game) + 1;
// let correct = false;
// while(!correct) {
//     let guess = prompt("Guess a number 1 -" + ranNumber); {
// guess = Number(guess);
// correct = true;
// console.log("You got it" + game);
//  } else if (guess > ranNumber) {
// console.log("Too high");
// } else {
// console.log("Too low");
// }
//  }

// do while loops

// counter = 0;
// let step = 6;
// do {
//   console.log(counter);
//   counter += step;
// } while (counter <= 100);

// for loops

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//  }

// let arr = [];
// for (let i = 0; i < 100; i++) {
//   arr.push(i);
// }
// console.log(arr);

// let arr1 = [];
// for (let i = 0; i < 100; i = i + 5) {
//   arr1.push(i);
// }

// console.log(arr1);

// // Practice exercise 5.3

// const myWork = [];
// for (let x = 1; x < 10; x++) {
//   let stat = x % 2 ? true : false;
//   let temp = {
//     name: `Lesson ${x}`,
//     status: stat,
//   };
//   myWork.push(temp);
// }
// console.log(myWork);

//Nested loops

// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
//   arrOfArrays.push([]);
//   for (let j = 0; j < 7; j++) {
//     arrOfArrays[i].push(j);
//   }
// }
// console.log(arrOfArrays);

// const myTable = [];
// const rows = 4;
// const cols = 7;
// let counter = 0;
// for (let y = 0; y < rows; y++) {
//   let tempTable = [];
//   for (let x = 0; x < cols; x++) {
//     counter++;
//     tempTable.push(counter);
//   }
//   myTable.push(tempTable);
// }
// console.table(myTable);

// // Loops and arrays

// let namess = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//     names[i] = "Hello "  +  names[i];
//   console.log(names[i]);
// }

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
//  if(names[i].startsWith("M")){
//  delete names[i];
//  continue;
//  }
//  names[i] = "hello " + names[i];
// }
// console.log(names);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++){
//     names.push("Prewsh");
// }
// console.log(names);

// Practice exercise 5.5

// const grid = [];
// const cells = 64;
// let counter = 0;
// let row;
// for (let x = 0; x < cells + 1; x++) {
//   if (counter % 8 == 0) {
//     if (row != undefined) {
//       grid.push(row);
//     }
//     row = [];
//   }
//   counter++;
//   let temp = counter;
//   row.push(temp);
// }
// console.table(grid);

// for of loop

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names){
//  console.log(name);
// }

// let emptyArray = [];
// for (let x = 0; x < 10; x++) {
//     emptyArray.push(x + 1);
// }
// for (let i = 0; i < emptyArray.length; i++) {
//     console.log(emptyArray[i]);
//    }
//    for (let val of emptyArray) {
//     console.log(val);
//    }

//    Loops and objects
//    for in loop

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//    };
//    for (let prop in car){
//     console.log(car[prop]);
//     console.log(prop);
//    }

//    Practice exercise 5.7

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
//    };
//    for (let prop in obj) {
//     console.log(prop, obj[prop]);
//    }
//    const arr = ["a", "b", "c"];
//    for (let w = 0; w < arr.length; w++) {
//     console.log(w, arr[w]);
//    }
//    for (el in arr) {
//     console.log(el, arr[el]);
//    }

//    break and continue

// break

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i === 4) {
//     break;
//     }
//    }

//    let cars = [
//     {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "greeb",
//     },
//     {
//     model: "Picanto",
//     make: "Kia",
//     year: 2020,
//     color: "red",
//     },
//     {
//     model: "Peugeot",
//     make: "208",
//     year: 2021,
//     color: "white",
//     },
//     {
//     model: "Fiat",
//     make: "Punto",
//     year: 2020,
//     color: "black",
//     }
//    ];

//    for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year >= 2020) {
//     if (cars[i].color === "black") {
//     console.log("I have found my new car:", cars[i]);
//     break;
//     }
//     }
//    }

//    continue

// for (let car of cars){
//     if(car.color !== "black"){
//         continue;
//     }
//     if (car.year >= 2020) {
//     console.log("we could get this one:", car);
//     }
//    }

// let i = 1;
// while (i < 50) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
//   i++;
// } this will get you stuck in a nfinet loop

// let i = 1;
// while (i < 50) {
//  i++;
//  if ((i-1) % 2 === 0){
//  continue;
//  }
//  console.log(i-1);
// }

// // can be done this way rather
// for (let i = 1; i < 50; i = i + 2) {
//     console.log(i);
//    }


// //    Practice exercise 5.8
// let output = "";
// let skipThis = 7;
// for (let i = 0; i < 10; i++) {
//  if (i === skipThis) {
//  continue;
//  }
//  output += i;
// }
// console.log(output);

// let output = "";
// let skipThis = 7;
// for (let i = 0; i < 10; i++) {
//  if (i === skipThis) {
//  break;
// //  }
//  output += i;
// }
// console.log(output);


// break, continue, and nested loops

let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
   ];
   
   for (let i = 0; i < groups.length; i++) {
    let matches = 0;
   for (let j = 0; j < groups[i].length; j++) {
    if(groups[i][j].startsWith("M")){
    matches++;
    } else {
    continue;
    }
    if (matches === 2){
    console.log("Found a group with two names starting with an M:");
    console.log(groups[i]);
    break;
    }
    }
   }


   for (let group of groups){
    for (let member of group){
    if (member.startsWith("M")){
    console.log("found one starting with M:", member);

   [ 113 ]
    break;
    }
    }
   }

//    break and continue and labeled blocks

outer:
for (let group of groups) {
 inner:
 for (let member of group) {
 if (member.startsWith("M")) {
 console.log("found one starting with M:", member);
 break outer;
 }
 }
}