"use strict";

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
//     maxSubarraySum([100,200,300,400], 2) // 700
//     maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
//     maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
//     maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
//     maxSubarraySum([2,3], 3) // null
// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(arr1, num) {
  // add whatever parameters you deem necessary - good luck!
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr1[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr1.length; i++) {
    tempSum = tempSum + arr1[i] - arr1[i - num];
    // console.log(maxSum, tempSum);
    maxSum = Math.max(maxSum, tempSum);
  }
  return isNaN(maxSum) ? null : maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([2, 3], 3)); // null
