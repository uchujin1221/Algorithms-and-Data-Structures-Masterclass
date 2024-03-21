"use strict";

// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n.
// This function should return true if the pair exists or false if it does not.

// Part 1 - solve this with the following requirements:
// Time Complexity Requirement - O(n)
// Space Complexity Requirement - O(n)

// Part 2 - solve this with the following requirements:
// Time Complexity Requirement - O(n log n)
// Space Complexity Requirement - O(1)

function findPair(arr, num) {
  // console.log(arr);

  // object to store visited data.
  const dataHash = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    // console.log(`current = ${current}`);

    // do not increment i and assign j
    let j = i + 1;
    while (j < arr.length) {
      if (dataHash[current + "-" + arr[j]] === undefined) {
        // console.log(`adding : ${current + "-" + arr[j]}`);
        dataHash[current + "-" + arr[j]] = +current - +arr[j];
      }
      j++;
    }
  }

  // forEach cannot break loop and return true and has to execute full loop - doesn't work
  for (const dataValue of Object.values(dataHash)) {
    //   // console.log(`${key}: ${value}`);
    if (Math.abs(dataValue) === Math.abs(num)) return true;
  }

  return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true - WOW !
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true
