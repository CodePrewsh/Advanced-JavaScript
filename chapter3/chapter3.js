"Use strict";

// Arrays and their properties

// arr1 = new Array("purple", "green", "yellow");
// arr2 = ["black", "orange", "pink"];

// arr3 = new Array(10);
// arr4 = [10];
// arr3 = new Array(10);
// arr4 = [10];

// console.log(arr3);
// console.log(arr4);

// let arr = ["hi there", 5, true];
// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);

// You can change the values of a constant array, but you cannot change
// the array itself. Here is a piece of code to demonstrate:
// const arr = ["hi there"];
// arr[0] = "new value";
// console.log(arr[0]);

// Accessing elements
// cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[2]);
// console.log(cars[-2])

// Overwriting elements
// The elements in an array can be overwritten. This can be done by accessing a certain
// element using the index and assigning a new value:
// cars[0] = "Tesla";
// console.log(cars[0]);

// Built-in length property
// Arrays have a very useful built-in property: length. This will return the number of
// values that the array has:

// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true];
// emptyArray = [];
// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);

//Practice exercise 3.1

// let shoppingList = ["Milk", "Bread", "Apple."];
// console.log("length of shopping List:",shoppingList.length);
// shoppingList[1] = "Bananas";
// console.log(shoppingList);

// Array methods
// Adding and replacing elements

//push method
// favoriteFruits = ["grapefruit", "orange", "lemon"];
// favoriteFruits.push("tangerine"); //add elements
// let lengthOfFavoriteFruits = favoriteFruits.push("lime");
// console.log(favoriteFruits);

// //splice method
// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes);

// concat() method
// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);

// let names = ["precious"];
// let surname = ["Bhembe"];
// let fullDetails = names.concat(surname);
// console.log(fullDetails);

// Deleting elements pop method
// let arr8 = [1, 2, 3, 4];
// arr8.pop();
// arr8.splice(1, 3);
// console.log(arr8);

// let arr9 = [1, 2, 3, 4];
// arr9.shift();

// console.log(arr9);

// Finding elements

// arr8 = [ 2, 6, 7, 8 ];
// let findIndex = arr8.indexOf(6);
// let findIndex2 = arr8.indexOf(10);
// console.log(findIndex, findIndex2);

// arr8 = [ 2, 6, 7, 8 ];
// let findIndex3 = arr8.indexOf(6, 2);
// console.log(findIndex3);

// let animals = ["dog", "horse", "cat", "platypus", "dog"];
// let lastDog = animals.lastIndexOf("dog");
// console.log(lastDog);

//Sorting
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.sort();
// console.log(names);

// Reversing
// let people = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// people.reverse();
// console.log(people);

// Practice exercise 3.2
// let shoppingList = ["Milk","Bread","Apples"];
// shoppingList [1] = "Bananas";
// console.log(shoppingList);
// popped = shoppingList.pop();
// console.log(shoppingList)
// shoppingList.sort();
// console.log(shoppingList);
// let findIndex = shoppingList.indexOf("Milk");
// console.log(findIndex);
// shoppingList [2] = "carrots";
// console.log(shoppingList);
// shoppingList [3]= "Lettucce";
// console.log(shoppingList);

// let newShoppingList = ["Juice","Pop"];
// console.log(newShoppingList);
// let UpDatedshoppingList = shoppingList.concat(newShoppingList);
// console.log(UpDatedshoppingListshoppingList);

// Multidimensional arrays
// So, we can create an array of already existing arrays. This is called a two-dimensional
// array

// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let value1 = arrOfArrays2[0][1];
// let value2 = arrOfArrays2[2][2];
// console.log(arrOfArrays2);

// Practice exercise 3.3
// let values = [
//   [1, 2, 3],
//   [4, 5, 5],
//   [6, 7, 8],
// ];
// // let value = values[0][1];
// // console.log(value);

// // // Objects in JavaScript
// // let arr = [0, 1, 2];
// // console.log(typeof arr);

// // let dog = {
// //   dogName: "JavaScript",
// //   weight: 2.4,
// //   color: "brown",
// //   breed: "chihuahua",
// //   age: 3,
// //   burglarBiter: true,
// // };
// // console.log(dog);

// // Practice exercise 3.4

// let Mycar = {
//     make: "BMW",
//     Model: "235",
//     colour: "Black",
//     ForSale: true,
// };
// variable = (["colour"])
// console.log(Mycar[variable]);

// variable = (["ForSale"])
// console.log(Mycar[variable]);

// Mycar[variable] = "Model";
// console.log(Mycar["Model"]);

// variable = (["ForSale"])
// console.log(Mycar["ForSale"]);

// Objects in objects
// let company = {
//   companyName: "Healthy Candy",
//   activity: "food manufacturing",
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   yearOfEstablishment: 2021,
// };

// company.address.zipcode = "33117";
// company["address"]["number"] = "100";

// console.log(company);

// Arrays in objects
// company = {
//   companyName: "Healthy Candy",
//   activities: [
//     "food manufacturing",
//     "improving kids' health",
//     "manufacturing toys",
//   ],
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   yearOfEstablishment: 2021,
// };
// let activity = company.activities[1];
// console.log(activity);
// console.log(company);

// Objects in arrays
// let addresses = [
//   {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas",
//   },
// ];

// let streetName = addresses[0].street;
// console.log(addresses);
// console.log(streetName);

// Objects in arrays in objects
// company = {
//   companyName: "Healthy Candy",
//   activities: [
//     "food manufacturing",
//     "improving kids' health",
//     "manufacturing toys",
//   ],
//   address: [
//     {
//       street: "2nd street",
//       number: "123",
//       zipcode: "33116",
//       city: "Miami",
//       state: "Florida",
//     },
//     {
//       street: "1st West avenue",
//       number: "5",
//       zipcode: "75001",
//       city: "Addison",
//       state: "Texas",
//     },
//   ],
//   yearOfEstablishment: 2021,
// };

// let streetName = company.address[0].street;
// console.log(streetName);

// Practice exercise 3.5
// let friends = {
//     friends[""]
// }

// Chapter projects
const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];
// console.log(theList);
theList.pop();
theList.shift()
console.log(theList);


 