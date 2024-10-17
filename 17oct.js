// Problem 12: Collatz Conjecture
// Write a program to generate the Collatz sequence for a given number.
//  The Collatz sequence is defined as follows:
//  Start with a number n.
//  If n is even, divide it by 2.
//  If n is odd, multiply it by 3 and add 1.
//  Repeat the process until n becomes 1.

let n1 = 3;

while (n1 != 1) {
  if (n1 % 2 == 0) {
    n1 = n1 / 2;
  } else {
    n1 = n1 * 3 + 1;
  }
  console.log(n1);
}
console.log("done");

// Write a program to calculate the sum of square of first 10 natural nos using for loop.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i * i;
}
console.log(sum);

console.log("-----------------");
// Find the number of charachter in a string.

let char = "a";
let str1 = "ayush bansal is the best instructor in acciojob. I am from dtu";

// Find the length of the string!
console.log(str1.length);
// how to access a purticular charachter in a string?
// let countchar=0;
// // console.log(str1[2]);
// for (let i = 0; i < str1.length; i++) {
//   if (str1[i] == char) {
//     countchar++;
//   }
// }
// console.log(countchar);

// Problem 19: Count Words in a Sentence
// Write a program to count the number of words in a given sentence using a for loop.

let sentence="This is my new class of october";
let count1=0;

// console.log(str1[2]);
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == " ") {
    count1++;
  }
}
console.log(++count1);

// Nested Loops!