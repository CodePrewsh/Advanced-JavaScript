"use strict";

// Introduction to built-in JavaScript methods

// let s = "Hello";
// console.log(
//  s.concat(" there!")
//  .toUpperCase()
//  .replace("THERE", "you")
//  .concat(" You're amazing!")
// )

// // Global methods
// let x = 7;
// console.log(isNaN(x));

// Decoding and encoding URIs
// decodeUri() and encodeUri()

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

// Encoding with escape() and unescape()
// These are still global methods available to do something similar to encode (escape)
// and decode (unescape). Both methods are strongly discouraged to use and they
// might actually disappear from future JavaScript versions or may not be supported by
// // browsers for good reasons.

// Practice exercise 8.1

// const secretMes1 = "How's%20it%20going%3F";
// const secretMes2 = "How's it going?";
// const decodedComp = decodeURIComponent(secretMes1);
// console.log(decodedComp);
// const encodedComp = encodeURIComponent(secretMes2);
// console.log(encodedComp);
// const uri = "http://www.basescripts.com?=Hello World";
// const encoded = encodeUR

// Parsing numbers
// Making integers with parseInt()

// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, "is", typeof int_int);

// let str_float = "7.6";
// let int_float = parseInt(str_float);
// console.log("Type of", int_float, "is", typeof int_float);

// let str_binary = "0b101";
// let int_binary = parseInt(str_binary);
// console.log("Type of", int_binary, "is", typeof int_binary);

// let str_nan = "hello!";
// let int_nan = parseInt(str_nan);
// console.log("Type of", int_nan, "is", typeof int_nan);

// Making floats with parseFloat()
// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);

// let str_version_nr = "2.3.4";
// let float_version_nr = parseFloat(str_version_nr);
// console.log("Type of", float_version_nr, "is", typeof float_version_nr);

// let str_int = "6";
// let float_int = parseFloat(str_int);
// console.log("Type of", float_int, "is", typeof float_int);

// let str_binary = "0b101";
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);
// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

// Executing JavaScript with eval()
// function go(e) {
//     eval(e.value);
//     }
// document.body.style.backgroundColor = "pink";

// Array methods
// Performing a certain action for every item

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//  console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);

// // Filtering an array
// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//  return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// // Checking a condition for all elements
// console.log(arr.every(checkString));

// // Replacing part of an array with another part of the array

// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 4);
// console.log(arr);

// Mapping the values of an array
// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);

// Finding the last occurrence in an array
// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye"));

// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("hi"));

// Practice exercise 8.2

// let arr = [
//   "Lumka",
//   "aphiwe",
//   "thandi",
//   "precious",
//   "prewsh",
//   "Sne",
//   "Mich",
//   "Alphie",
//   "Mike",
//   "Okuhle",
//   "Alice",
// ];
// let arr2 = arr.filter((value, index, array) => {
//   console.log(value, index, array.indexOf(value));
//   return array.indexOf(value) === index;
// });
// console.log(arr2);

// // Practice exercise 8.3

// const myArr = [1,4,5,6];
// const myArr1 = myArr.map(function(ele){
//  return ele * 2;
// });
// console.log(myArr1);
// const myArr2 = myArr.map((ele)=> ele*2);
// console.log(myArr2);

// String methods
// Combining strings

// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(result);

// Converting a string to an array
// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

// // Converting an array to a string
// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);

// Working with index and positions

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("re");
// console.log(index_re);

// let lastIndex_re = poem.lastIndexOf("re");
// console.log(lastIndex_re);

// // An alternative way of searching for a particular substring within a string is to use the search() method:

// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);

// Creating substrings

// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);

// Replacing parts of the string
// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);
// let new_hi2 = hi.replace("not there", "never there");
// console.log(new_hi2);

// let s3 = "hello hello";
// let new_s3 = s3.replace("hello", "oh");
// console.log(new_s3);

// let s4 = "Good Morning Precious";
// let new_s4 = s4.replace("Precious", "Thandeka");
// console.log(new_s4);

// // Uppercase and lowercase
// let low_bye = "bye!";
// let up_bye = low_bye.toUpperCase();
// console.log(up_bye);

// // let caps = "HI HOW ARE YOU?";
// // let fixed_caps = caps.toLowerCase();
// // console.log(fixed_caps);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
// console.log(first_capital);

// The start and end of a string
// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2);

// Practice exercise 8.4

// const val = "thIs will be capiTalized for each word";
// function wordsCaps(str) {
//  str = str.toLowerCase();
//  const tempArr = [];
//  let words = str.split(" ");
//  words.forEach(word => {
//  let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
//  tempArr.push(temp);
//  });
//  return tempArr.join(" ");
// }
// console.log(wordsCaps(val));

// Practice exercise 8.5

// let val = "I love JavaScript";
// val = val.toLowerCase();
// let vowels = ["a","e","i","o","u"];
// vowels.forEach((letter,index) =>{
//  console.log(letter);
//  val = val.replaceAll(letter,index);
// });
// console.log(val);

// Checking if something is (not) a number

// let x = 34;
// console.log(isNaN(x));
// console.log(!isNaN(x));
// let str = "hi";
// console.log(isNaN(str));

// let str1 = "5";
// console.log(isNaN(str1));

// Checking if something is finite
// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));
// console.log(isFinite(10 / 10));

// Checking if something is an integer
// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

// // Specifying a number of decimals
// let x = 1.23456;
// let newX = x.toFixed(3);
// console.log(x, newX);

// Specifying precision
// let x = 1.23456;
// let newX = x.toPrecision(4);
// console.log(newX);

// Math methods
// Finding the highest and lowest number

// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);

// Square root and raising to the power of
// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);
// console.log(result2);

// Turning decimals into integers

// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

// let negativeX = -x;
// let negativeY = -y;
// console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));

// console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

// console.log("X:", x, "becomes", Math.trunc(x));
// console.log("Y:", y, "becomes", Math.trunc(y));

// Exponent and logarithm

// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);
// let log = Math.log(exp);
// console.log("Log:", log);

// Practice exercise 8.6

// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random()*11)); // 0-10
// console.log(Math.floor(Math.random()*10)+1); // 1-10;
// console.log(Math.floor(Math.random()*100)+1); // 1-100;
// function ranNum(min, max) {
//  return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for (let x = 0; x < 100; x++) {
//  console.log(ranNum(1, 100));
// }

// Date methods
// Creating dates

// let currentDateTime = new Date();
// console.log(currentDateTime);

// let now2 = Date.now();
// console.log(now2);

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
// console.log(stringDate);

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);

// // Methods to get and set the elements of a date
// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

// // d.setFullYear(2030);
// // console.log(d);

// // d.setMonth(0);
// // console.log(d);

// // d.setDate(10);
// // console.log(d);

// // d.setHours(10);
// // console.log(d);

// // d.setTime(1622889770682);
// // console.log(d);

// // // Parsing dates

// // let d1 = Date.parse("June 5, 2021");
// // console.log(d1);

// // let d2 = Date.parse("6/5/2021");
// // console.log(d2);

// // Converting a date to a string
// console.log(d.toDateString());
// console.log(d.toLocaleDateString());

// Practice exercise 8.7

// let future = new Date(2024, 3, 5);
// console.log(future);
// const months = ["January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"];
// let day = future.getDate();
// let month = future.getMonth();
// let year = future.getFullYear();
// let myDate = `${months[month-1]} ${day} ${year}`;
// console.log(myDate);

// Chapter projects
// Word scrambler

// let str = "JavaScript";

// function scramble(val) {
//  let max = val.length;
//  let temp = "";
//  for(let i=0;i<max;i++){
//  console.log(val.length);
//  let index = Math.floor(Math.random() * val.length);
//  temp += val[index];
//  console.log(temp);
//  val = val.substr(0, index) + val.substr(index + 1);
//  console.log(val);
//  }
//  return temp;
// }
// console.log(scramble(str));

// Countdown timer
// const endDate = "march 5 2024";
// function countdown() {
//   const total = Date.parse(endDate) - new Date();
//   const days = Math.floor(total / (1000 * 60 * 60 * 24));
//   const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
//   const mins = Math.floor((total / 1000 / 60) % 60);
//   const secs = Math.floor((total / 1000) % 60);
//   return {
//     days,
//     hrs,
//     mins,
//     secs,
//   };
// }
// function update() {
//   const temp = countdown();
//   let output = "";
//   for (const property in temp) {
//     output += `${property}: ${temp[property]} `;
//   }
//   console.log(output);
//   setTimeout(update, 1000);
// }
// update();

// let currentDateTime = new Date();
// console.log(currentDateTime);

// let now2 = Date.now();
// console.log(now2);
// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());
