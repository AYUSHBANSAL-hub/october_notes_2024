// Nested Loops

// Write a program to print the multiplication tables from 1 to 5 till 10.
for (let table_number = 1; table_number <= 10; table_number++) {
  console.log("Table Number:", table_number);
  for (let i = 1; i <= 10; i++) {
    console.log(`${table_number} X ${i}= ${table_number * i}`);
  }
}

// Question Time:
// 1. Problem: Print a 5x3 Grid of Stars
// Problem Statement: Write a program that prints a 5x3 grid of stars.
// * * *
// * * *
// * * *
// * * *
// * * *

for (let i = 0; i < 2; i++) {
  // Generating row!
  let row = "";
  for (let j = 0; j < 5; j++) {
    // Generating columns of row
    // This block of code adds a star in the row string everytime it's executed.
    row = row + "* ";
  }
  console.log(row);
}

// 2. Problem: Print a Right-Angled Triangle of Stars
// Problem Statement: Write a program that prints a right-angled triangle of stars with 5 rows.
// *
// * *
// * * *
// * * * *
// * * * * *
console.log("------------");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

