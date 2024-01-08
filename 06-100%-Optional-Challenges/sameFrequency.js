"use strict";

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:
//     sameFrequency(182,281) // true
//     sameFrequency(34,14) // false
//     sameFrequency(3589578, 5879385) // true
//     sameFrequency(22,222) // false

function sameFrequency(int1, int2) {
  // good luck. Add any arguments you deem necessary.

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  int1
    .toString()
    .split("")
    .forEach((el) =>
      frequencyCounter1[el]
        ? ++frequencyCounter1[el]
        : (frequencyCounter1[el] = 1)
    );
  int2
    .toString()
    .split("")
    .forEach((el) =>
      frequencyCounter2[el]
        ? ++frequencyCounter2[el]
        : (frequencyCounter2[el] = 1)
    );

  for (const key in frequencyCounter1) {
    if (!key in frequencyCounter2) return false;
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }

  return true;
}

console.log(sameFrequency(3589578, 5879385)); // true
