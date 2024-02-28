"use strict"


// const someConstant = 3;
// console.log(someConstant);

// PRIMITIVE DATA TYPES
// String
// A string is used to store a text value. It is a sequence of characters. There are different
// ways to declare a string:
// • Double quotes
// • Single quotes
// • Backticks: special template strings in which you can use variables directly

// So for example, the following will result
// in an error, because the string will be ended at the second single quote within let's:
// let funActivity = 'Let's learn JavaScript'; 
// let funActivity = "Let's learn JavaScript";

// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(message);

// Escape characters
// let str = "Hello, what's your name? Is it \"Mike\"?";
// console.log(str);
// let str2 = 'Hello, what\'s your name? Is it "Mike"?';
// console.log(str2);

// The escape character has even more purposes. You can use it to create a line break
// with \n, or to include a backslash character in the text with \\:

// let str3 = "New \nline.";
// let str4 = "I'm containing a backslash: \\!";
// console.log(str3);
// console.log(str4);

// Number
// The number data type is used to represent, well, numbers

// let intNr = 1;
// let decNr = 1.5;
// let expNr = 1.4e15;
// let octNr = 0o10; //decimal version would be 8
// let hexNr = 0x3E8; //decimal version would be 1000
// let binNr = 0b101; //decimal version would be 5

// integers are numbers, like these ones:
// let intNr2 = 3434;
// let bigNr = 90071992547409920n;
// let result = bigNr + intNr2;
// console.log(result);


// let intNr3 = -111;
// console.log(intNr2);
// console.log(intNr3);

// And the floating points are numbers as well, like this one:
// let decNr2 = 45.78;
// console.log(decNr2);

// And binary numbers are of the number data type as well, for example, this one:
// let binNr2 = 0b100; //decimal version would be 4
// console.log(binNr2);


// BigInt
// The limits of the number data type are between 253-1 and -(253-1). In case you were to
// need a bigger (or smaller) number, BigInt comes into play. A BigInt data type can be
// recognized by the postfix n:

// let bigNr = 90071992547409920n;
// console.log(bigNr);


// We cannot mix BigInt with the Number data type to perform operations
// you can only operate on BigInt with other BigInts.

// Boolean
// The Boolean data type can hold two values: true and false


// let objectIsDeleted = false;
// console.log(objectIsDeleted);

// let lightIsOn = true;
// console.log(lightIsOn);

// Symbol
// Symbol can be used when it is
// important that variables are not equal, even though their value and type are the same

// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);

// let str5 = Symbol("JavaScript is fun!");
// let str4 =Symbol("JavaScript is fun!");
// console.log("These two strings are the same:", str5 === str4);

// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);

// Undefined
// let unassigned;
// console.log(unassigned);

// let unassingned;
// console.log(unassingned);


// null
// null is a special value for saying that a variable is empty or has an unknown
// value. This is case sensitive. You should use lowercase for null

// let empty = null;
// console.log(empty);

// To solve the issue we encountered with setting a variable as undefined, note that if
// you set it to null, you will not have the same problem. This is one of the reasons it is
// better to assign null to a variable when you want to say it is empty and unknown at
// first:
// let terribleThingToDo = undefined;
// let lastName;
// console.log("Same undefined:", lastName === terribleThingToDo);
// let betterOption = null;
// console.log("Same null:", lastName === betterOption);


// Working out the type of a variable
// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;
// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("unknown", typeof unknown);


// Converting data types

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 * nr2);

// let nrToStr = 6;
// console.log(nrToStr, typeof nrToStr);
// nrToStr = String(nrToStr);
// console.log(nrToStr, typeof nrToStr);

// let strToNr = "12";
// console.log(strToNr, typeof strToNr);
// strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr);

// let strToBool = "";
// console.log(strToBool, typeof strToBool);
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);

// let nullToNumr = null;
// nullToNumr = Number(nullToNumr);
// console.log("null",nullToNumr, typeof nullToNumr);



// let names = "precious";
// names = Number(names);
// console.log(names);


// let nr2 = 2;
// let nr3 = "2";
// console.log(nr2 + nr3);



// let str1 = 'Laurence';
// str1 = String(str1);
// console.log(str1, typeof str1);


// let str2 = "Svekis";
// str2 = String(str2);
// console.log(str2, typeof str2);


// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;

// let str1 = 'Laurence';
// console.log(typeof str1);

// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000


// Arithmetic operators

// Addition
// Addition in JavaScript is very simple, we have seen it already. We use + for this
// operation:

// let nr1 = 12;
// let nr2 = 14;
// console.log(nr1 + nr2);


// However, this operator can also come in very handy for concatenating strings. Note
// the added space after "Hello" to ensure the end result contains space characters:

// let str1 = "Hello ";
// let str2 = "addition";
// console.log(str1 + str2);


// Practice exercise 2.2

// let names = "Precious";
// let age = 23;
// let codeInJavaScript = true;

// console.log("Hello, my name is "  +  names  +  "I am"  +  age +   "Years old I can code in Javascript?"  +  codeInJavaScript);


// Subtraction
// Subtraction works as we would expect it as well. We use - for this operation. What
// do you think gets stored in the variable in this second example?
// let nr1 = 20;
// let nr2 = 4;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 - nr2;
// let result2 = str1 - nr3;
// console.log(result1, result2);


// // Multiplication
// let nr1 = 15;
// let nr2 = 10;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 * nr2;
// let result2 = str1 * nr3;
// console.log(result1, result2);

// Division
// Another straightforward operator is division. We can divide two numbers with the /
// character:
// let nr1 = 30;
// let nr2 = 5;
// let result1 = nr1 / nr2;
// console.log(result1);

// Exponentiation
// Exponentiation means raising a certain base number to the power of the exponent,
// for example, xy.This can be read as x to the power of y. It means that we will
// multiply x by itself y number of times. Here is an example of how to do this in
// // JavaScript—we use ** for this operator:
// let nr18 = 2;
// let nr22 = 3;
// let result1 = nr18 ** nr22;
// console.log(result1);

// Modulus
// This is one that often requires a little explanation. Modulus is the operation in which
// you determine how much is left after dividing a number by another number in its
// entirety. The amount of times the number can fit in the other number does not matter
// here

// let nr1 = 10;
// let nr2 = 3;
// let result1 = nr1 % nr2;
// console.log(`${nr1} % ${nr2} = ${result1}`);

// let nr3 = 8;
// let nr4 = 2;
// let result2 = nr3 % nr4;
// console.log(`${nr3} % ${nr4} = ${result2}`);

// let nr5 = 15;
// let nr6 = 4;
// let result3 = nr5 % nr6;
// console.log(`${nr5} % ${nr6} = ${result3}`);


// Chapter project
// Miles-to-kilometers converter
// Create a variable that contains a value in miles, convert it to kilometers, and log the
// value in kilometers in the following format: 

// let myDistanceMiles = 130;
// let myDistanceKM = myDistanceMiles * 1.60934;
// console.log("The distance of " + myDistanceMiles + " miles is equal to
// " + myDistanceKM + " kilometers");


// let singleString = 'Hi there!';
// console.log(singleString);


// let nr1 = 4;
// console.log(nr1 --);
// console.log(nr1);


// console.log(5 + 6);
// console.log(5 / 7);
// console.log(5 / 7 %6);


// let a = "Hello";
// a = "world";
// console.log(a);

// let a = "world";
// let b = `Hello ${a}!`;
// console.log(b);

// console.log(3 + 4 * 2 / 8);

// irstNum = 5;
// let secondNum = 10;
// firstNum++;
// secondNum--;
// let total = ++firstNum + secondNum;
// console.log(total);
// let total2 = 500 + 100 / 5 + total--;
// console.log(total2);

// let firstNum = 5;
// let secondNum = 10;
// firstNum ++;
// secondNum--;
// let total = ++ firstNum + secondNum;
// console.log(total);
// let total2 = 500 + 100 / 5 + total--;
// console.log(total2);
// console.log(total2);


