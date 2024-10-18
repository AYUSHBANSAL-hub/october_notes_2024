// Write a program that prints an inverted right angles triangles with 5 rows.
// * * * * *
// * * * *
// * * *
// * *
// *

for (let i = 1; i <= 5; i++) {
  // rows
  let row = "";
  for (let j = 1; j <= 6 - i; j++) {
    row += "* ";
  }
  console.log(row);
}

// Write a program to print a pyramid.

console.log("================");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5 - i; j++) {
    row += "  ";
  }
  for (let j = 1; j <= i * 2 - 1; j++) {
    row += "* ";
  }
  console.log(row);
}

// Write a program to print a diamond pattern
// Write a program to print a pyramid.
console.log("================");
// Upper Half
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5 - i; j++) {
    row += "  ";
  }
  for (let j = 1; j <= i * 2 - 1; j++) {
    if (j % 2 == 0) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}
// Lower half!!
for (let i = 1; i <= 4; i++) {
  // Rows
  let row = "";
  // Add spaces
  for (let j = 1; j <= i; j++) {
    row += "  ";
  }
  // Add Stars
  for (let j = 1; j <= (5 - i) * 2 - 1; j++) {
    if (j % 2 == 0) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}

// Write a program that prints an 8*8 checkboard pattern of stars and spaces
for (let i = 1; i <= 8; i++) {
  let row = "";
  for (let j = 1; j <= 8; j++) {
    if ((i + j) % 2 == 0) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}

// Functions

function greet(firstName) {
  console.log("Hello", firstName);
  console.log("nice to meet you!");
  console.log(firstName,",Would you like some coffee?");
}

/* 
    In js, a function is a block of code designed
    to perform a purticular task. 
*/

greet("Ayush");
greet("Nandan");
greet("Kartik");

function add (num1, num2){
    console.log(num1+num2);
}

add(3,2);

function doubleit(num1){
    console.log(num1*2);
}

doubleit(4);

// Calling a function!
// To execute the code inside a function, 
// you need to call the function by using it's name followed by paranthesis

doubleit(5);

// Function with Parameters
// You can pass data into a function using parameters. 
// These parameter act as placeholders for the values that will be passed into the function


// Write a function to calculate the square of a number

function square (num){
    console.log(num*num);
}

square(4);

// Write a function to convert celcius to fahrenheit

function celciusToFahrenheit(celcius){
    console.log((celcius*(9/5))+32);
}
celciusToFahrenheit(0);