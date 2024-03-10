"use strict";

// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeroes, which returns the number of zeroes in the array.

// Time Complexity : O(log n)

// Idea from countUniqueValues.js
function countZeroes(arr1) {
  // add whatever parameters you deem necessary - good luck!
  if (arr1.length === 0) return 0;

  let m = 0;

  for (let i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] === 0) {
      m++;
    }
  }

  // return 0 if nothing m never increment, else m+1 since m starts from 0
  return m === 0 ? 0 : m + 1;
}

countZeroes([1, 1, 1, 1, 0, 0]); // 2
countZeroes([1, 0, 0, 0, 0]); // 4
countZeroes([0, 0, 0]); // 3
countZeroes([1, 1, 1, 1]); // 0
