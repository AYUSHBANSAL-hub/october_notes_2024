// 2D Arrays!

// Arrays!
let arr1 = [1, 2, 3, 4];
let arr2 = ["ss", "ee", "ee", "rr", "jnerj"]; // All other Data Type or DS

// What is 2D Arrays?
/*
2D Arrays is an array in which all elements in an array
are also arrays.
=> You can think of it as a grid! (rows and columns!); // I will come back here again
*/

let myarr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(myarr1[1]); // I am accessing the first position or the element of myarr1
console.log(myarr1[1], myarr1[2]); //

// Madhuri : Write a program to print 5 and 9 in a single line.

// 5 ->
console.log(myarr1[1][1], myarr1[2][2]);

// 9 ->
console.log(myarr1[2][2]);

// Write a program to print all elements of a 2D Matrix
/*
let myarr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
*/
// console.log(myarr1[0][0]);
// console.log(myarr1[0][1]);
// console.log(myarr1[0][2]);
// console.log(myarr1[1][0]);
// console.log(myarr1[1][1]);
// console.log(myarr1[1][2]);
// console.log(myarr1[2][0]);
// console.log(myarr1[2][1]);
// console.log(myarr1[2][2]);

for (let row = 0; row < myarr1.length; row++) {
  for (let col = 0; col < myarr1[0].length; col++) {
    console.log(myarr1[row][col]);
  }
}

// An array that does not have all nested arrays of the same length is called a jagged array.
let jaggedArray = [
  [1, 2, 4, 3],
  [34, 2, 21212, 32, 23, 32, 234, 3223],
  [23323, 32, 23, 23],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [3, 3, 23, 32, 32, 32, 32, 32],
];

for (let row = 0; row < jaggedArray.length; row++) {
  for (let col = 0; col < jaggedArray[row].length; col++) {
    console.log(jaggedArray[row][col]);
  }
}

// Accessing elements of a 2D Array!
// Modifying element of a 2D Array

let myarr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

myarr2[1][1] = 10;
console.log(myarr2);

// 1. Finding the Dimensions of a 2D Array
// Answer:  The dimensions of a 2D array can be found by
// checking the length of the array and the length of one of its nested-arrays.

let data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let datarows = data.length; // length of the array
let datacols = data[0].length; //the length of one of its nested-arrays.

// Addition of 2 matrices
let matrixA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let matrixB = [
  [9, 1, 7],
  [288, 5, 10],
  [3, 29, 1],
];

let result = [];
// Dynamic creation of a matrix
for (let i = 0; i < matrixA.length; i++) {
  // I added an empty array here
  result.push([]);
  console.log(result);
  for (let j = 0; j < matrixA[0].length; j++) {
    result[i].push(matrixA[i][j] + matrixB[i][j]);
    console.log(result);
  }
}

let matrixC = [
  [9, 10, 71],
  [2, 50, 10],
  [3, 29, 12],
];
console.log("---------");
for(let i=0;i<matrixC.length;i++){
    let row="|";
    for(let j=0;j<matrixC[0].length;j++){
        row+=matrixC[i][j] + "|"
        // console.log(matrixC[i][j]);
    }
    console.log(row);
    console.log("---------");
}
