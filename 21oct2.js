// An array is a data structure that can hold multiple values at once.
// These values can be of any type, including numbers, strings or even other arrays.
// Arrays in JS are purticularly useful because they allow you to group and manipulate data.

// 1. How to create an array?
// You can create an array using square brackets [] and adding elements separated by a comma.
// basic example of an array with values
let arr1 = [2, 4, 2, 2, 4, 3];

// Empty Array :
let myemptyarr = [];

// 1D Array -> one directional array

// 2. Accessing elements in an array?
// Each element in an arry has an index(position), starts from 0.
// You can simply use the index to access an element.

let fruits = ["apple", "Banana", "Orange", "Kiwi", "papaya"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// An array has 4 elements what is the last index : 3
// An array has n elements what is the last index: n-1

// 3. How to find the length (no. of elements) of an array?
console.log(fruits.length);

// 4. Modifying elements in an array?
// orange=> Cherry

// console.log(fruits[2]);
fruits[2] = "cherry";

// 5. Adding elements in an array

// 1. Way 1: Using index position
// To add elements to an arrya, you can assign a value
// to the next index position that doesn't exist yet.!
let arr2 = ["Apple", "Ball", "Cat"];

arr2[3]="Dog";
console.log(arr2);

arr2[4]="Eagle";
console.log(arr2);

// Way 2: Push method
arr2.push("Fish");
console.log(arr2);