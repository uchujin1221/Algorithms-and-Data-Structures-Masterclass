"use strict";

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
