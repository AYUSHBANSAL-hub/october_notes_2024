// 7. Accessing the First Element
// Problem Statement: Access the first element of the array
let cities = ["New York", "Los Angeles", "Chicago"];
console.log(cities[0]);

// Accessing the Last Element
// Problem Statement: Access the last element of the array
// let cities = ["New York", "Los Angeles", "Chicago"];.
// Consider that you don't know how many elements exist.

console.log(cities[cities.length - 1]);

// 9. Reverse the array let numbers = [1, 2, 3, 4, 5];
let numbers = [1, 2, 3, 4, 5];
// Arti's Approach
// Mirror the array from between
// First <> last
// second <> Second Last
// Third <> Third last

for (let i = 0; i < numbers.length / 2; i++) {
  let temp = numbers[i];
  let last = numbers[numbers.length - i - 1];
  console.log(`Swapping ${last} and ${temp}`);

  numbers[i] = last;
  numbers[numbers.length - i - 1] = temp;
  console.log(`Step ${i}: `, numbers);
}
console.log(numbers);

// Way 2:
let number2 = [1, 2, 3, 4, 5];
let reversed_num = [];

for (let i = number2.length - 1; i >= 0; i--) {
  reversed_num.push(number2[i]);
  console.log(`Step ${number2.length - i}: `, reversed_num);
}
console.log(reversed_num);

// 11. Finding Maximum Value
// Find the maximum value in the array
// let numbers = [10, 20, 30, 40, 50];
// without using built-in methods.

let num2 = [34, 21, 2312, 4321, 21, 2, 2211];
// We assume that first element is the largest element in the array
let max = num2[0];

for (let i = 1; i < num2.length; i++) {
  if (max < num2[i]) {
    // We have found a new greater value;
    max = num2[i];
  }
}
console.log(max);
// i =1 -> 34
// i=2 -> 34<2312 -> Max =2312
// i=3 -> 2312<4321 -> Max= 4321
// i=4 -> 4321 <21
// i=5 -> 4321<2
// i=6 -> 4321 <2211
// i=7 -> Condition false
// Max= 4321

// for (let i = 1; i < num2.length; i++) {
//   max = Math.max(max, num2[i]);
// }

//  Find the minimum value in the
//  array let numbers = [10, 20, 30, 40, 50];
//  without using built-in methods.

let min = num2[0];

for (let i = 1; i < num2.length; i++) {
  if (min > num2[i]) {
    // We have found a new smaller value;
    min = num2[i];
  }
}
console.log(min);

// Checking for Element Existence
// Check if the element "banana" exists in
// the array

let fruits = ["apple", "banana", "cherry", "banana", "banana"];

for (let i = 0; i < fruits.length; i++) {
  console.log("Banana check iteration :", i);
  if (fruits[i] == "banana") {
    console.log("Exists");
    break;
    // This shall bring the execution out of the loop
  }
}

// Concatenating Arrays
// Concatenate two arrays let arr1 = [1, 2, 3]; and
// let arr2 = [4, 5, 6]; without using built-in methods.
// You need to create a concatenated array.

let concatenatedarray = [];
let arr1 = [1, 2, 3];
for (let i = 0; i < arr1.length; i++) {
  concatenatedarray.push(arr1[i]);
}
console.log(concatenatedarray);
let arr2 = [4, 5, 6];
for (let i = 0; i < arr2.length; i++) {
  concatenatedarray.push(arr2[i]);
}
console.log(concatenatedarray);

// console.log(arr1.concat(arr2));

// 15. Create an array let numbers = [1, 2, 3, 4, 5, 6];
// and filter out the even numbers into a new array
// without using built-in methods.

let evenarr = [];
console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenarr.push(numbers[i]);
  }
}
console.log(evenarr);

// To retrieve Second largest number in the array.

let nums3 = [2, 3, 22, 3, 2, 2, 31, 3, 234, 32, 32323, 232, 322];


// Step 1: Remove Duplicates.
// Step 2: Sort Array
// Step 3: Return Second Element



function secondmax(arr){
    let max = -99999;
    let secondmax=-99999;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            secondmax=max; // updating second max before changing my max value
            max=arr[i]; // Update max
        }else if(arr[i]>secondmax && arr[i]<max){
            // Here I will update second max if arr[i] is less than max
            // but greater than second max
            secondmax=arr[i];
        }
    }
    if(secondmax==-99999){
        return null;
        // If an array has either one element or all elements with same value 
    }else return secondmax;
}
console.log(secondmax(nums3));

// Removing Duplicates from an Array
// Problem Statement: Remove duplicate elements 
// from the array let numbers = [1, 2, 3, 2, 4, 1, 5];

// New method/shortcut or function in js

// Without methods


let mynum=[1, 2, 3, 2, 4, 1, 5];

function removeduplicates(arr){
    let result=[];
    for(let i=0;i<arr.length;i++){
        let ispresent=checkpresent(arr[i],result);
        if(ispresent==false){
            result.push(arr[i]);
        }
    }
    console.log(result);
}

removeduplicates(mynum);


// Write a function that return true if 
// it finds a value in an array or else false;

function checkpresent(val, arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==val){
            return true;
        }
    }
    return false;
}
// .includes methods

// SubArrays!!
// We need to come prepared

