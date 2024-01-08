"use strict";

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
//     countUniqueValues([1,1,1,1,1,2]) // 2
//     countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
//     countUniqueValues([]) // 0
//     countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)
// Space Complexity - O(n)
// Bonus
// You must do this with constant or O(1) space and O(n) time.

// Multiple pointer pattern : O(n)
function countUniqueValues(arr1) {
  // add whatever parameters you deem necessary - good luck!
  if (arr1.length === 0) return 0;

  let m = 0; // pointer to store return value
  let n = 1; // pointer to store current value
  while (n < arr1.length) {
    if (arr1[m] !== arr1[n]) {
      m++;
      arr1[m] = arr1[n];
    }
    n++;
  }
  return m + 1;
}

console.log(countUniqueValues([1, 2]));
console.log(countUniqueValues([]));
