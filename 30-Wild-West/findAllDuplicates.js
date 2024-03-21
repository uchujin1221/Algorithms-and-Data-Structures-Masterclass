"use strict";

// Given an array of positive integers, some elements appear twice and others appear once.
// Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// Time Complexity - O(n)

// Idea from constructNote.js
function findAllDuplicates(arr) {
  const count = {};
  const retVal = [];

  // store number of occurance into count object
  arr.forEach((key) => {
    if (count[key] !== undefined) {
      count[key]++;
      retVal.push(key);
    } else {
      count[key] = 1;
    }
  });

  //   console.log(count);
  //   console.log(retVal);
  return retVal;
}

findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]); // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]); // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]); // array with 3, 2, and 1
