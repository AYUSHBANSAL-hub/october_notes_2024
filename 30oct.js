// Question 1:
// Given a 2D array, print all its elements. Make a function for it.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function print2darray(arr) {
  for (let outer = 0; outer < matrix.length; outer++) {
    // The rows of the 2d Array
    for (let inner = 0; inner < matrix[0].length; inner++) {
      console.log(arr[outer][inner]);
    }
  }
}
print2darray(matrix);

// Question 2: Given a 2D matrix, print all its elements column-wise.

function print2dcolumnwise(arr) {
  for (let outer = 0; outer < matrix[0].length; outer++) {
    // The cols of the 2d Array
    for (let inner = 0; inner < matrix.length; inner++) {
      console.log(arr[inner][outer]);
    }
  }
}
print2dcolumnwise(matrix);

// Problem 3: Alternate Manner Matrix Traversal
// Problem Statement:
// Traverse the matrix such that the first row is traversed left to right,
// the second row right to left, the third row left to right, and so on.

function alternateMannerTraversal(arr){
    for(let i=0;i<arr.length;i++){
        // Rows
        if(i%2==0){
            // Traverse my row from left to right
            for(let j=0;j<arr[0].length;j++){
                console.log(arr[i][j]);
            }
        }else{
            // Traverse my row from right to left
            for(let j=arr[0].length-1;j>=0;j--){
                console.log(arr[i][j])
            }
        }
    }
}
console.log("-----")
alternateMannerTraversal(matrix);

// Boundary Traversal of Matrix
// Problem Statement:
// Print the boundary elements of a matrix in a clockwise direction.



function boundaryTraversal(matrix){
    // Print Top Row
    for(let i=0;i<matrix[0].length;i++){
        console.log(matrix[0][i]);
    }

    // Print Last Column
    for(let j=1;j<matrix.length;j++){
         console.log(matrix[j][matrix[0].length-1]);
    }

    // Print Bottom Row
    if(matrix.length>1){
        for(let i=matrix[0].length-2;i>=0;i--){
            console.log(matrix[matrix.length-1][i]);
        }
    }

    // Print First Column
    if(matrix[0].length>1){
        for(let j=matrix.length-2;j>=1;j--){
            console.log(matrix[j][0]);
        }
    }
}
console.log("------------");
boundaryTraversal(matrix);


// Alternate Matrix Sum
// Problem Statement:
// Calculate the sum of elements at alternate positions 
// in the matrix, starting from the first element.

function alternateMatrixSum(mat){
    let sum=0;
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            if((i+j)%2==0){
                sum+=mat[i][j];
            }
        }
    }
    console.log(sum);
}
alternateMatrixSum(matrix);


// Problem 8: Given a square matrix, 
// calculate the absolute difference between the 
// sums of its diagonals.


function differencebtwtriangles(mat){
    // Yellow Diagonal
    let yellowsum=0;
    for(let i=0;i<mat.length;i++){
        yellowsum+=mat[i][i];
    }

    // Red Diagonal
    // [2,0], [1,1] , [0,2]
    let reddiagonal=0;
    for(let i=0;i<mat.length;i++){
        reddiagonal+=mat[i][mat.length-i-1];
    }
    console.log(Math.abs(reddiagonal-yellowsum));
}
