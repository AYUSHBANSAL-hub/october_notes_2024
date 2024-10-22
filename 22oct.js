// Basic looping through an array!

let arr1 = ["a", "b", "c", "d"]; // arr.length=4 , last index=> 3
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);

arr1.push("e"); // arr.length= 5, last index=>4

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// 1. Create an Array: Create an array named pets containing the elements "dog", "cat", and "hamster".

let pets = ["dog", "cat", "hamster"];
console.log(pets);

// 2. What is the output of the following code?
let colors = ["red", "green", "blue"];
console.log(colors[1]);

// 3. Change the second element of the numbers array from 20 to 25.
let nums = [2, 20, 23];
// console.log(nums[1]);
nums[1] = 25;
console.log(nums);

// 4. Add the color "purple" to the colors array.
colors.push("purple");
console.log(colors);

// 5. Write a for loop to print each element in the fruits array.
let row = "";
for (let i = 0; i < colors.length; i++) {
  row += colors[i] + " ";
}
console.log(row);

// Create an array named oddNumbers containing
// the first five odd numbers and write a for
// loop to calculate the sum of these numbers.

let oddnumbers = [1, 2, 3,4, 5,,4,233,423,233,2131,3,1,3,123,21,37, 9];

let sum=0;
for(let i=0;i<oddnumbers.length;i++){
    console.log(oddnumbers[i]);
    sum+=oddnumbers[i];
}
console.log(sum);


let numbers = [1, 2, 3,4, 5,4,233,423,233,2131,3,1,3,123,21,37, 9];
// Write a program to print sum of all even number and sum of all odd numbers.

let oddsum=0;
let evensum=0;

for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        // My number is even
        evensum+=numbers[i];
    }else{
        oddsum+=numbers[i];
    }
}
console.log(`Sum of even numbers: ${evensum}, Sum of Odd number: ${oddsum}`);
