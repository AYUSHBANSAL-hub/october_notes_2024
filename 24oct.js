// What is an Array?
// An array is a data structure in JavaScript used to store a collection
//  of items (elements). Each item in an array is indexed, starting from 0.
// Example:
// let fruits = ["apple", "banana", "cherry"];

// What is a Subarray?
// A subarray is a contiguous portion of an array. For example,
// if we have an array [1, 2, 3, 4], possible subarrays include [1, 2], [2, 3, 4], and [3].

// Creating a Subarray Manually
// To create a subarray, you need to specify the starting and ending indices
//  and extract elements from the main array within these indices.
// Let's create a simple function to extract a subarray from a given array
//  using only the push method.
function croparr(arr, start, end) {
  let croppedarr = [];
  for (let i = start; i <= end; i++) {
    croppedarr.push(arr[i]);
  }
  console.log(croppedarr);
}

let arr1 = ["a", "b", "c", "d"];
function findAllSubarray(arr) {
  for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end++) {
      // console.log(start,end);
    //   croparr(arr, start, end);
    console.log(arr.slice(start,end+1));
    }
  }
}

// Write a function that returns me an subarray from an array I provide.
// Also I will be providing you start index and end index.
// let arr2=[3,432,34,4,33,343,23,32,32,3,212,3];
// function croparr(arr,start,end){
//     let croppedarr=[];
//     for(let i=start;i<=end;i++){
//         croppedarr.push(arr[i]);
//     }
//     console.log(croppedarr);
// }

// croparr(arr2,0,4);


// Write a function that prints all subarrays of an array!
// Done!
function printallSubarrays(arr){
    for(let start=0;start<arr.length;start++){
        // Tell my start position
        for(let end =start;end<arr.length;end++){
            // Tells my end position
            croparr(arr,start,end);
        }
    }
}
printallSubarrays(arr1);

// Given an array of integers, find the subarray with the maximum sum.

// Write a function that returns sum of all elements of an array!
// You will a big array, and you need find the sum from start index ->end index
function sumOfAnArray(arr,start,end){
    let sum=0;
    for(let i=start;i<=end;i++){
        sum+=arr[i];
    }
    return sum;
}

// console.log(sumOfAnArray([1,3,4,2,2],1,4));

// Write a function that prints sum of all subarray
function findsumsubarray(arr){
    for(let start=0;start<arr.length;start++){
        // Tell my start position
        for(let end =start;end<arr.length;end++){
            // Tells my end position
            croparr(arr,start,end);
            console.log(sumOfAnArray(arr,start,end));
        }
    }
}
findsumsubarray([1,2,4,]);


// Find the maximum sum of subarr

function findmaximumsumsubarray(arr){
    let max=-Infinity;
    for(let start=0;start<arr.length;start++){
        // Tell my start position
        for(let end =start;end<arr.length;end++){
            // Tells my end position
            croparr(arr,start,end);
            let subarraysum=sumOfAnArray(arr,start,end);
            if(max<subarraysum){
                max=subarraysum;
            };
        }
    }
    console.log(max);
}
findmaximumsumsubarray([1,2,4]);


// Given an array of integers and a target sum(k), count the number of subarrays that sum to the target value.


function countSubArraywithSum(arr,k){
    let count=0;
    for(let start=0;start<arr.length;start++){
        let sum=0;
        for(let end=start;end<arr.length;end++){
            sum+=arr[end];
            if(sum==k){
                count++;
            }
        }
    }
    return count;
}


// minimum sum subarray

function findmaximumsumsubarray(arr){
    let min=Infinity;
    for(let start=0;start<arr.length;start++){
        // Tell my start position
        for(let end =start;end<arr.length;end++){
            // Tells my end position
            croparr(arr,start,end);
            let subarraysum=sumOfAnArray(arr,start,end);
            if(min>subarraysum){
                min=subarraysum;
            };
        }
    }
    console.log(min);
}
findmaximumsumsubarray([1,2,4]);


// slice method
// The slice method is commonly used to find subarray
// You get all element from start(index) to end index(not included);

let arr3=[2,3,32,213,3421,342,13,1,3,113,13,1,342];

console.log(arr3.slice(0,3));

