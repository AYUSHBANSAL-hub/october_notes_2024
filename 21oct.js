// Functions!

// Calling a Function
// To execute the code inside a function,
// you need to call (or invoke) the function
// by using its name followed by parentheses.
function ayush(fname, lname) {
  console.log("Hello, " + fname + " " + lname);
}

ayush("Rohit", "Singh");

// Returning a value!

function sum(a, b) {
  let result = a + b;
  return result;
}

let a = sum(5, 6);
console.log(a);

// Whatever value I received back from calling the function is printed directly using console.log!
console.log(sum(5, 5));

// Problem 1: Write a Function to Calculate the Square of a Number
// Write a function square that takes a number as an argument and returns its square.

function square(num) {
  return num * num;
}

console.log(square(4)); // console.log(16)
console.log(square(40)); // console.log(1600)
console.log(square(22));

// Problem 2: Write a Function to Convert Celsius to Fahrenheit
// Write a function celsiusToFahrenheit that converts a temperature from
// Celsius to Fahrenheit. The formula to convert Celsius to Fahrenheit is (Celsius * 9/5) + 32.

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Problem 3: Write a Function to Check if a Number is Even or Odd
// Write a function isEven that takes a number as an argument and returns
// true if the number is even and false if the number is odd.

function isEven(num) {
  return num % 2 == 0;
}
console.log(isEven(70));

// Problem 4: Write a Function to Find the Maximum of Two Numbers
// Write a function max that takes two numbers as arguments and returns the larger of the two.

function max(a, b) {
  if (a > b) {
    return a;
  } else return b;
}

// Problem 5: Write a Function to Calculate the Factorial of a Number
// Write a function factorial that takes a non-negative integer as
//  an argument and returns its factorial.
//   The factorial of a number is the product of all
//   positive integers less than or equal to that number.

// 5! = 5 X 4 X 3 X 2 X 1

function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(6));

// Problem 1: Write a Function to Calculate the Area of a Rectangle
// Write a function calculateRectangleArea that takes two arguments,
// length and width, and returns the area of the rectangle.

function calculateRectangleArea(length, width) {
  return length * width;
}

console.log(calculateRectangleArea(2, 3));
console.log(calculateRectangleArea(5, 3));

// Write a Function to Determine if a Number is Positive
// Write a function isPositive that takes a number as an argument
// and returns true if the number is positive, and false otherwise.

function isPositive(n) {
  if (n > 0) {
    console.log("positive");
  } else {
    console.log("non-positive");
  }
}

function ayushb(a,b,c){
    return 10;
}

function pow(base,exp){
    let result=1;
    for(let i=1;i<=exp;i++){
        result=result*base;
    }
    return result;
}

console.log(pow(2,2));

function binarytodecimal(binaryNum){
    let localbinarynum=binaryNum;
    let count=0;
    let result=0;
    while(localbinarynum>0){
        let onesdigit=localbinarynum%10;
        if(onesdigit==1){
            result+=pow(2,count);
        }
        count++;
        localbinarynum=Math.floor(localbinarynum/10);
    }
    console.log(`Decimal value of binary number ${binaryNum} is ${result}`);
}

binarytodecimal(101);


// Arrays-1: Theory Only class
