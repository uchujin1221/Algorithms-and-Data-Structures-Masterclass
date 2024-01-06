"use strict";

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
