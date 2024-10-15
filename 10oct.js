console.log("hello world!");
// Conditionals are statements that perform different actions
// based on whether a condition is true/false
if (50 > 10) {
  console.log("5 is greater");
  console.log(100);
}

// Why is it required?
// They allow you to control the flow of your program by executing a certain code block
// depending on the conditions!

// Types of conditionals:
// 1. If
// The if statement executes a block of code if a specified condition is true!

if (15 > 10) {
  console.log("Yo!");
  // Code to be executed if the condition is true!
}

// example 1:
let age = 8;
if (age >= 18) {
  console.log("you are an adult!");
}

// 2. If-else
// The if-else statement executes one block if a condition is true and
// another of block if the condition is false!

if (true) {
  // This is the code to be executed if the condition is true
} else {
  // This is the code to be executed if the condition is false!
}

// Example 2:
let myage = 13;
if (myage >= 18) {
  console.log("You are an adult.");
  // This is the code to be executed if the condition is true
} else {
  console.log("You are a minor.");
  // This is the code to be executed if the condition is false!
}

// Problem 1: Is the number even or odd?

// let num1=13;

// if(num1%2==0){
//     console.log("The number is even.");
// }else{
//     console.log("The number is odd!");
// }

// Problem 2: Finding the Largest of two Numbers
// Write a program to find the largest of two numbers.

let num1 = 120;
let num2 = 25;

if (num1 > num2) {
  console.log(`${num1} is greater`);
} else {
  console.log(`${num2} is greater`);
}

// Question 5: Check if a character is a vowel or consonant.
// Problem Statement: Write a program to check if a
// given character is a vowel or a consonant.

let char = "a";
char = char.toLowerCase(); // This function converts an uppercase alphabet to lowercase alphabet.
if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
  console.log("it's a vowel!");
} else {
  console.log("It's a consonant.");
}

let chareg1 = "Ayush Bansal";
console.log(chareg1.toLowerCase());
console.log(chareg1.toUpperCase());

// Question 7: Determine if a person can vote.
// Problem Statement: Write a program to check
//  if a person is eligible to vote (age >= 18).

let myage1 = 18;

if (myage1 >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("Not eligible to vote.");
}

// If-else If-else ladder

// The If-else If-else ladder allow us to check multiple conditions one after another.

// if(condition1){
//     // code is to be executed when condition 1 is true.
// }else if(condition2){
//     // code is to be executed when the condition 2 is true
// }else if(condition3){
//     // code is to be executed when the condition 3 is true
// }else{
//     // code is to be executed if none of the conditions are true.
// }

// Write a program to assign grades based on a student's score.

let score = 5;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// Question 4: Find the largest of three numbers.
// Problem Statement: Write a function that finds the largest of three numbers.
// let num1 = 120;
// let num2 = 25;
let num3 = 20;

if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is greatest.");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is greatest.");
} else {
  console.log(num3 + " is greatest");
}

// Question 9: Determine if a number is within a range.
// Problem Statement: Write a program that checks if a
// number is within the range of 10 to 100 (inclusive).

let num4 = 20;

if (num4 > 10 && num4 <= 100) {
  console.log("Within range!");
} else {
  console.log("Out of range");
}

// Question 11: Determine if a number is divisible by 3 and 5.
// Problem Statement: Write a program that
// checks if a given number is divisible by both 3 and 5.

let num5 = 15;

if (num5 % 3 == 0 && num5 % 5 == 0) {
  console.log("Divisible by both 3 and 5");
} else {
  console.log("Not divisible");
}

// Question 14: Check if a number is in the first quadrant of a coordinate system.
// Problem Statement: Write a program that checks if a point (x, y) is
//  in the first quadrant of a Cartesian coordinate system (x > 0 and y > 0).

let x = 10;
let y = -8;

if (x > 0 && y > 0) {
  console.log("First Quadrant");
} else {
  console.log("not in first quadrant");
}

//  given x and y, tell which quadrant it lies in.

if (x > 0 && y > 0) {
  console.log("First quadrant");
} else if (x < 0 && y > 0) {
  console.log("Second quadrant");
} else if (x < 0 && y < 0) {
  console.log("Third quadrant");
} else if (x > 0 && y < 0) {
  console.log("Fourth quadrant");
} else if (y == 0 && x != 0) {
  // X axis
  console.log("X-axis");
} else if (x == 0 && y != 0) {
  // Y Axis
  console.log("Y-axis");
} else {
  // Origin
  console.log("origin");
}

// Third Level
// Tell the position of the point on the entire cartesian plane
