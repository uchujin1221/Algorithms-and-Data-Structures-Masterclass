"use strict";

// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

function binarySearch(arr, num) {
  // add whatever parameters you deem necessary - good luck!

  // Helper recursion method
  const helper = (arrHelper, num, low, high) => {
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    // console.log(`${mid} : ${arrHelper[mid]}`);

    if (arrHelper[mid] === num) {
      return mid;
    } else if (num < arrHelper[mid]) {
      return helper(arrHelper, num, low, mid - 1);
    } else {
      return helper(arrHelper, num, mid + 1, high);
    }
  };

  // arguments : array, search num, array left-most positon, array right-most position
  return helper(arr, num, 0, arr.length - 1);
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
