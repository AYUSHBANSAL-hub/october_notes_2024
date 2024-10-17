// Power of a Number
/*
Write a program to calculate the power of a number.
The power of a number is given by base raised to the exponent.
*/

let base=3;
let exponent=5;
let result=1;

while(exponent>0){
    result=result*base;
    exponent--;
}
console.log(result);

// count digits of number

let num1=67893;
/*
// We shall keep dividing the number by 10 with math.floor
// Everytime I divide it I will increase 1 in my counter variable
// When the number becomes 0, I stop and then print the value of counter.
*/
let counter=0;
while(num1>0){
    counter++;
    num1=Math.floor(num1/10);
}
console.log(counter);


// Write a program to print digits of a number!
//  5%3 -> 2
// 7%5 -> 2
// 9%4 -> 1
// 10%3->1 
// 10%5 -> 0
// 142%10->2
// 14%10 ->4
// 1%10  ->1

/*
1. First let's get the ones digit using modulus operator
2. Divide the number by 10 + I will also Math.Floor
3. Print the ones digit
*/

console.log("----------");
// let num2=4532;
// while(num2>0){
//     let onesdigit=num2%10;
//     console.log(onesdigit);
//     num2=Math.floor(num2/10);
// }

// Write a program to find the sum of all digits of a number!
let num2=4532;
let sum=0;
while(num2>0){
    let onesdigit=num2%10;
    sum=sum+onesdigit;
    num2=Math.floor(num2/10);
}
console.log(sum);

// While
// While statement checks the condition first and then decide whether to execute the block of code or not.
while(5>10){
    console.log("yo");
}

// Do while
// USAGE: Guarantees that the loop body is executed atleast once.
do{
    console.log("yo yo")
}while(5>10);

// Problem 6:
// Write a program to calculate the sum of all even numbers from 1 to n using a for loop.

let n=13;
let sum2=0;

for(let i=1;i<=n;i++){
    if(i%2==0){
        sum2=sum2+i;
    }
}
console.log(sum2);

