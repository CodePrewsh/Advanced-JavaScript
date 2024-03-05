"use strict";

// Object-oriented programming
// Classes and objects

// an example of an object:
// let dog = {
//   dogName: "JavaScript",
//   weight: 2.4,
//   color: "brown",
//   breed: "chihuahua",
// };
// console.log(dog);

// class ClassName {
//   constructor(prop1, prop2) {
//     this.prop1 = prop1;
//     this.prop2 = prop2;
//   }
// }
// console.log(ClassName);

// let obj = new ClassName("arg1", "arg2");
// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
//    let dog = new Dog("leo", 30, "brown", "labrador");
// console.log(obj);

// class Dog {
//   constructor(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//   }
// }
// let dog = new Dog("JavaScript", 2.4, "brown", "leo");
// console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");

// // // Classes
// // classes are essentially blueprints for object creation

// // Constructors
// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//    }

//    let p = new Person("precious", "van Putten");
//    console.log("Hi", p.firstname);

//    let p = new Person("Maaike");
//    console.log("Hi", p.firstname, p.lastname);
//    Classes

// Practice exercise 7.1

// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//    }
//    let person1 = new Person("Precious", "Bhembe");
//    let person2 = new Person("Thandeka", "Bhembe");
//    console.log("hello " + person1.firstname);
//    console.log("hello " + person2.firstname);

//    Methods
// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hi there! I'm", this.firstname);
//   }
// }
// let p = new Person("Maaike", "van Putten");
// p.greet();

// class Person {
//  constructor(firstname, lastname) {
//  this.firstname = firstname;
//  this.lastname = lastname;
//  }
//  greet() {
//  console.log("Hi there!");
//  }
//  compliment(name, object) {
//  return "That's a wonderful " + object + ", " + name;
//  }
// }
// let compliment = p.compliment("Harry", "hat");
// console.log(compliment);

// Practice exercise 7.2

// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//     fullname(){
//     return this.firstname + " " + this.lastname;
//     }
//    }
//    let person1 = new Person("Precious", "BHembe");
//    let person2 = new Person("Thandeka", "Bhembe");
//    console.log(person1.fullname());
//    console.log(person2.fullname());

// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//    }
//    let p = new Person("Maaike", "van Putten");
// console.log("Hi", p.firstname);

// how to add properties that aren't accessible from outside. We prefix them with a # symbol:
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//         }
//        }
//        let p = new Person("Maria", "Saga");
// console.log(p.firstname);

// // Getters and setters
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//     this.#firstname = firstname;
//     this.#lastname = lastname;
//     }
//     get firstname() {
//     return this.#firstname;
//     }
//     set firstname(firstname) {
//     this.#firstname = firstname;
//     }
//     get lastname() {
//     return this.#lastname;
//     }
//     set lastname(lastname) {
//     this.#lastname = lastname;
//     }
//    }
//    let p = new Person("Maria", "Saga");
// console.log(p.firstname);
// console.log(p.firstname = "Adnane");

// set firstname(firstname) {
//     if(firstname.startsWith("M")){
//     this.#firstname = firstname;
//     } else {
//     this.#firstname = "M" + firstname;
//     }
//     }

// Inheritance

// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//     this.color = color;
//     this.currentSpeed = currentSpeed;
//  this.maxSpeed = maxSpeed;
//  }
//  move() {
//  console.log("moving at", this.currentSpeed);
//  }
//  accelerate(amount) {
//  this.currentSpeed += amount;
//  }
// }

// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//     super(color, currentSpeed, maxSpeed);
//     this.fuel = fuel;
//     }
//     doWheelie() {
//     console.log("Driving on one wheel!");
//     }
//    }
//    let motor = new Motorcycle("Black", 0, 250, "gasoline");
//    console.log(motor.color);
//    motor.accelerate(50);
// motor.move();

// Prototypes
// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hi there!");
//   }
// }
// Person.prototype.introduce = function () {
//   console.log("Hi, I'm", this.firstname);
// };
// Person.prototype.favoriteColor = "green";
// let p = new Person("Maria", "Saga");
// console.log(p.favoriteColor);
// p.introduce();

// // Practice exercise 7.3
// class Animal {
//   constructor(species, sounds) {
//     this.species = species;
//     this.sounds = sounds;
//   }
//   speak() {
//     console.log(this.species + " " + this.sounds);
//   }
// }
// Animal.prototype.eat = function () {
//   return this.species + " is eating";
// };
// let cat = new Animal("cat", "meow");
// let dog = new Animal("dog", "bark");
// cat.speak();
// console.log(dog.eat());
// console.log(dog);

// //    Chapter projects   Employee tracking app
// class Employee {
//   constructor(first, last, years) {
//     this.first = first;
//     this.last = last;
//     this.years = years;
//   }
// }
// const person1 = new Employee("Sky", "bhembe", 10);
// const person2 = new Employee("prewsh", "bhembe", 5);
// const workers = [person1, person2];
// Employee.prototype.details = function () {
//   return (
//     this.first + " " + this.last + " has worked here " + this.years + " years"
//   );
// };
// workers.forEach((person) => {
//   console.log(person.details());
// });

// //    Menu items price calculator
// class Menu {
//     #offer1 = 10;
//     #offer2 = 20;
//     constructor(val1, val2) {
//     this.val1 = val1;
//     this.val2 = val2;
//     }
//     calTotal(){
//     return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
//     }
//     get total(){
//     return this.calTotal();
//     }
//    }
//    const val1 = new Menu(2,0);
// const val2 = new Menu(1,3);
// const val3 = new Menu(3,2);
// console.log(val1.total);
// console.log(val2.total);
// console.log(val3.total);
