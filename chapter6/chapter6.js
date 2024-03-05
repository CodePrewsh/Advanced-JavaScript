"use strict";

// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello", you + "!");
//    }

//    let varContainingFunction = function() {
//     let varInFunction = "I'm in a function.";
//     console.log("hi there!", varInFunction);
//    };


// //    Practice exercise 6.1

  //  function adder(a, b) {
  //   return a + b;
  //   }
  //   const val1 = 10;
  //   const val2 = 20;
  //   console.log(adder(val1, val2));
  //   console.log(adder(20, 30));

//     // Practice exercise 6.2
    // const adj = ["super", "wonderful", "bad", "angry", "careful"];
    // function myFun() {
    //  const question = prompt("What is your name?");
    //  const nameAdj = Math.floor(Math.random() * adj.length);
    //  console.log(adj[nameAdj] + " " + question );
    // }
    // myFun();

//  Practice exercise 6.3

// const val1 = 10;
// const val2 = 5;
// let operat = "-";
// function cal(a, b, op) {
//   if (op == "-") {
//     console.log(a - b);
//   } else {
//     console.log(a + b);
//   }
// }
// cal(val1, val2, operat);

// Special functions and operators
// Arrow functions

// function doingStuff(x) {
//  console.log(x);
// }
// let doingArrowStuff = (x) => console.log(x);
// doingArrowStuff("Great!");

// let sayHi = () => console.log("Hi");
// sayHi("Hi");

// // Spread operator

// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very",
//  "powerful"];

//  console.log(message);

//  function addTwoNumbers(x, y) {
//   console.log(x + y);
//  }
//  let arr = [5, 9];
//  addTwoNumbers(...arr);

//  function someFunction(param1, param2) {
//   console.log(param1, param2);
//  }
//  someFunction("hi", "there!", "How are you?");

//  function someFunction(param1, ...param2) {
//  console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");

// Returning function values

// let result = addTwoNumbers(4, 5);
// console.log(result);
// function addTwoNumbers(x, y) {
//     return x + y;
//    }

//    let resultsArr = [];
// for(let i = 0; i < 10; i ++){
//  let result = addTwoNumbers(i, 2*i);
//  resultsArr.push(result);
// }
// console.log(resultsArr);


// // Practice exercise 6.4
// let emptyArray = [];
// for(let i = 0; i < 10; i++) {
//     let val1 = 5 * i;
//     let val2 = i * i;
//     let res = cal(val1, val2, "+");
//     emptyArray.push(res);
//    }
//    console.log(emptyArray);
//    function cal(a, b, op) {
//     if (op == "-") {
//     return a - b;
//     } else {
//     return a + b;
//     }
//    }


//    Returning with arrow functions
// let addTwoNumbers = (x, y) => x + y;
// let result = addTwoNumbers(12, 15);
// console.log(result);

// Variable scope in functions
// Local variables in function

// function testAvailability(x) {
//     console.log("Available here:", x);
//    }
//    testAvailability("Hi!");
//    console.log("Not available here:", x)

//    function testAvailability() {
//     let y = "Local variable!";
//     console.log("Available here:", y);
//    }
//    testAvailability();
//    console.log("Not available here:", y);

//    function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
//    }
//    let z = testAvailability();
//    console.log("Outside the function:", z);
//    console.log("Not available here:", y);

//    let versus var variables

// function doingStuff() {
//     if (true) {
//     var x = "local";
//     }
//     console.log(x);
//    }
//    doingStuff()

// let x = "local";
//    function doingStuff() {
//     if (true) {
//     let x = "local";
//     }
//     console.log(x);
//    }
//    doingStuff();

// //    const scope
// function doingStuff() {
//     if (true) {
//     const X = "local";
//     }
//     console.log(X);
//    }
//    doingStuff();

//    Global variables
// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);

// function creatingNewScope(x) {
//   console.log("Access to global vars inside function.", globalVar);
// }
// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);

// let x = "global";
// function doingStuff() {
//  let x = "local";
//  console.log(x);
// }
// doingStuff();
// console.log(x);

// let x = "global";
// // function doingStuff(x) {
// //  console.log(x);
// // }
// // doingStuff("param");

// function confuseReader() {
//   x = "Guess my scope...";
//   console.log("Inside the function:", x);
//  }
//  confuseReader();
//  console.log("Outside of function:", x);

//  Immediately invoked function expression
// (function () {
//   console.log("IIFE!");
// })();

// (()=>{
//   console.log("run right away");
//  })()

// Practice exercise 6.5

// let value = 1000;
// let val = "1000";
// (function () {
//  let val = "100";
//  console.log(val);
// })();
// let result = (function () {
//  let val = "Laurence";
//  return val;
// })();
// console.log(result);
// console.log(val);
// (function (val) {
//  console.log(`My name is ${val}`);
// })("Laurence");

// Recursive functions
// function getRecursive(nr) {
//   console.log(nr);
//   getRecursive(--nr);
//  }
//  getRecursive(3);

// //  function getRecursive(nr) {
// //   console.log(nr);
// //   if (nr > 0) {
// //   getRecursive(--nr);
// //   }
// //  }
// //  getRecursive(3);

// // function logRecursive(nr) {
// //   console.log("Started function:", nr);
// //   if (nr > 0) {
// //   logRecursive(nr - 1);
// //   } else {
// //   console.log("done with recursion");
// //   }
// //   console.log("Ended function:", nr);
// //  }
// //  logRecursive(3);

// //  Practice exercise 6.6
// // function calcFactorial(nr) {
// //  console.log(nr);
// //  if (nr === 0) {
// //  return 1;
// //  }
// //  else {
// //  return nr * calcFactorial(--nr);
// //  }
// // }
// // console.log(calcFactorial(4));

// // Nested functions

// function doOuterFunctionStuff(nr) {
//   console.log("Outer function");
//   doInnerFunctionStuff(nr);
//   function doInnerFunctionStuff(x) {
//     console.log(x + 7);
//     console.log("I can access outer variables:", nr);
//   }
// }
// doOuterFunctionStuff(2);

// // Practice exercise 6.7
// let start = 10;
// function loop1(val) {
//   console.log(val);
//   if (val < 1) {
//     return;
//   }
//   return loop1(val - 1);
// }
// loop1(start);
// function loop2(val) {
//   console.log(val);
//   if (val > 0) {
//     val--;
//     return loop2(val);
//   }
//   return;
// }
// loop2(start);

// Anonymous functions
// function doingStuffAnonymously() {
//   console.log("Not so secret though.");
//  }

// let functionVariable = function () {
//   console.log("Not so secret though.");
//  };
//  functionVariable()

//  Practice exercise 6.8
// const test = function(val){
//   console.log(val);
//  }
//  test('hello 1');
//  function test1(val){
//   console.log(val);
//  }
//  test1("hello 2");
 
//  Function callbacks
// function doFlexibleStuff(executeStuff) {
//   executeStuff();
//   console.log("Inside doFlexibleStuffFunction.");
//  }
//  doFlexibleStuff(functionVariable);


// let anotherFunctionVariable = function() {
//   console.log("Another anonymous function implementation.");
//  }
//  let youGotThis = function () {
//   console.log("You're doing really well, keep coding!");
//  };
//  setTimeout(youGotThis, 1000);


//  Chapter projects
// Create a recursive function

// const main = function counter(i) {
//   console.log(i);
//   if (i < 10) {
//   return counter(i + 1);
//   }
//   return;
//  }
//  main(0);

// Set timeout order

// const one = ()=> console.log('one');
// const two = ()=> console.log('two');
// const three = () =>{
//  console.log('three');
//  one();
//  two();
// }
// const four = () =>{
//   console.log('four');
//   setTimeout(one,0);
//   three();
//  }
//  four();