// Hello World program!
// How to print in a specific language.
// How to print "Hello World" in Js?

// Basic Usage of console.log
console.log("Hello, World");

// "Hello, World" is the message that I wanted to print
// console.log(); // Function that prints the specified message!

// Basic Mathematical Operations!
//  +, -, *, /

console.log(5+5);
console.log(10-3);
console.log(4*20);
console.log(100/11);

// When to use double quotes and when not use double quotes!
// Variables

let a; // declaration
a=10; // Initialisation: Assigning an initial value to the variable!
a=100;//  Assignment
a=33;

let fname; // declaration
fname="Ayush"; // Initialisation
console.log(fname); // Ayush

fname="Nandan"; // assignment
console.log(fname); //Nandan

fname="Shahrukh";
console.log(fname); // Shahrukh


// Data Types!
// 1. Number: Represents a numerical value.
let num1=10;
console.log(num1);
console.log(typeof num1);


// 2. String: Represents text
let myname="Ayush";
let mylastname="Bansal";
console.log(mylastname);
console.log(typeof mylastname);


// 3. Boolean
// Represents true or false;
let isStudent=false;
console.log(isStudent);
console.log(typeof isStudent);


// 4. Null
// Represents intentional absence of a value!

let student_name=null;

//
// 
// 
// is suppose to update the value of student_name="Ayush"
// 
// 
// 
student_name="ayush";
if(student_name==null){
    console.log("Could not get student name");
}else{
    console.log(student_name);
}


// undefined
let b=10; // number
b="Ayush"; // string
b=true; // boolean
b=null; // null 

// Undefined: Represents an uninitialised variabl!
let c; 
console.log(c);


// Big Int;
let nimit=5467890876546789765435678654345n;
console.log(nimit);

// Symbol:
// Represents a unique identifier!

let aa=5;
let bb=2;
console.log(Math.round(aa/bb));

// Non-Primitive Data Types!
//  Array!
// Way 1:
let fruit1="Apple";
let fruit2="Banana";
let fruit3="Orange";

// Way 2:
// array
// An Array represents a list of values!
let fruits=["Apple", "Banana", "Orange","Kiwi"];
console.log(fruits[2]);
console.log(fruits[0]);


// Objects
// Way 1
let first_name="Ayush";
let last_name="Bansal";
let age=10;
let gender="Male";
let isIndian=true;
let hobbies=["Dancing","Travelling","Singing"];

// Way 2: Objects
// An object is a set of key value pairs

let person1={
    first_name:"Ayush",
    last_name: "Bansal",
    age:10,
    gender:"Male",
    isIndian:true,
    hobbies:["Dancing","Travelling","Singing"]
}
let person2={
    first_name:"Rahil",
    last_name: "Rafique",
    age:11,
    gender:"Male",
    isIndian:true,
    hobbies:["Music","Travelling","Singing"]
}

// Operators!
// They are used to perform operations on variables and values!

// 1. Arithmethic Operator: +,-, *,/
console.log(5+5); //Addition
console.log(5-5); //Subtraction
console.log(5*5); //Multiplication
console.log(5/5); //Division
// Remainder operator
console.log(12%3); 


// 2. Comparison Operators
// ==, ===,
console.log(5>10); //false
console.log(50>10); //true
// Is equal to!
// Note: IsEqual to sign check/compare the values only
console.log(10==10); //true
let d=130;
let e=10;
console.log(d==e); //true

let num2=10;
let num3="10";
console.log(num2==num3); //true since values are same

// Is identical (===)
// Note: The isidentical operator checks the value as well as the data type!
console.log(num2===num3); //false since values are same but data type are different!

// Not equal to
console.log(5!=4); //ture

// not identical
console.log(5!=="5"); 


// Operators!!

// Strings
// What are strings?
// Creating Strings:
// single quotes
// double quotes
// backticks

let name1=9; // double quotes
let name2='Rakesh'; // Single Quotes
let name3=`Kartik`; // backticks!


// Backticks!
// We can include variables in the strings when using backticks!
console.log(`My name is ${name3}!`);
// ${} -> Template Literal
// Template literals, enclosed by backticks(``);
// allow embedded expressions. You can utilise ${} sign to insert
// variables and expressions directly within strings.

let fname1="Rahul";
let lname1="Kumar";
let weather="Cloudy";
let message=`Hey, ${fname1} ${lname1}, Nice to meet you! Today's weather is ${weather}`;

console.log(message);

// concatenation of strings
let str1="Accio";
let str2="Job";
console.log(str1+str2);

let name4=9;
console.log(9 + name4)


// Comments!
// Single line comment : //

/*

fjdnkdfj
ndfjknf
jkfdnjkfd
fdjbjfhd

*/