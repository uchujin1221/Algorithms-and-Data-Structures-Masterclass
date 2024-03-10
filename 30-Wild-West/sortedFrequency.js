"use strict";

// Divide and Conquer - sortedFrequency

// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Time Complexity - O(log n)

function sortedFrequency(arr1, num) {
  // add whatever parameters you deem necessary - good luck!
  if (arr1.length === 0) return -1;

  let m = -1; // pointer to store return value
  arr1.forEach((element) => {
    if (element === num) {
      m++;
    }
  });
  return m !== -1 ? m + 1 : -1;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
