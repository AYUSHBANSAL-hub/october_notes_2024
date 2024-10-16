// Loops!

// WAY 1:
let num=8;
console.log(`${num} X 1 = ${num*1}`);
console.log(`${num} X 2 = ${num*2}`);
console.log(`${num} X 3 = ${num*3}`);
console.log(`${num} X 4 = ${num*4}`);
console.log(`${num} X 5 = ${num*5}`);
console.log(`${num} X 6 = ${num*6}`);
console.log(`${num} X 7 = ${num*7}`);
console.log(`${num} X 8 = ${num*8}`);
console.log(`${num} X 9 = ${num*9}`);
console.log(`${num} X 10 = ${num*10}`);

console.log("----------------------");

// WAY 2:
for(let i=1;i<=100;i++){
    console.log(`${5} X ${i}= ${5*i}`);
}

// What are loops?
/*
    Loops are control structures that repeat a block of code as long as a specified condition is true. 
    They are essential for automating repetitive tasks, reducing code redundancy, simplifying complex ops.
*/

// Why do we need loops?
// Efficiency
// Scalability!
// Maintability

// Eg 1
// Write a program that prints Hello 10 times


for(let i=0;i<10;i=i+1){
    console.log("hello!");
}

// Increment Decrement Operators
// Questions(10)
// add or subtract 1 from a variable's value.
let num1=10;
// increment operator
// // post increment (i++)
// // Increments the value by 1 but if you are in the same line it returns the same value!
// console.log(num1++); 
// console.log(num1);
// pre increment (++i)
console.log(++num1);

// Question 1: Write a program to print hello world 10 times.
for(let i=0;i<10;i++){
    console.log("Hello World!");
}

// Question 2: Write a program to print first 10 natural numbers!

for(let i=1;i<=10;i++){
    console.log(i);
}

// Question 3
// Write a program to print the sum of the first 10 natural numbers
let sum=0;
for(let i=1;i<=10;i++){
    sum=sum+i;
}
console.log(sum);

//Question 4: Write a program to print all even number from 0 to 100.
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

//Question 5: Write a program to print all even number from 100 to 0.
for(let i=100;i>=0;i--){
    if(i%2==0){
        console.log(i);
    }
}

// Question 6: 
// Write a program to calculate the sum of the first n natural numbers
let n=130;
let sum1=0;
for(let i=1;i<=n;i++){
    sum1=sum1+i;
}
console.log(sum1);

// Question 7:
// Write a program to print the multiplication table of a given number
// upto 10.
let n2=4;
for(let i=1;i<=10;i++){
    console.log(`${n2} X ${i} = ${n2*i}`);
}


// Question 8:
// Write a program to calculate the factorial of a given number using a for loop.

let number=5;
let result=1;

for(let i=1;i<=number;i++){
    result=result*i;
}
console.log(result);

// More Questions on Loops
// While Loop
// Do While Loop
// More Questions While and Do while loops

