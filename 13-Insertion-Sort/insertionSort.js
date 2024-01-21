"use strict";

// Keep left part of the arry always sorted

// Good when nearly sorted or new elements adding over time (online sort)

// Time complexity is O(n^2)

function insertionSort(arr, comparator) {
  console.log(arr);

  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    let j = i - 1;
    let swap = false;

    while (j >= 0) {
      if (typeof comparator !== "function") {
        // provide a default
        if (arr[j] < currVal) break;
        console.log(`Need to swap : ${arr[j]},  ${currVal}`);
        if (arr[j] >= currVal) {
          arr[j + 1] = arr[j];
          swap = true;
        }
      } else {
        if (comparator(arr[j], currVal) < 0) break;
        console.log(`Need to comparator swap : ${arr[j]}, ${currVal}`);
        if (comparator(arr[j], currVal) > 0) {
          arr[j + 1] = arr[j];
          swap = true;
        }
      }
      j--;
      console.log(arr);
    }

    // update last compared value only if there was a swap
    if (swap) {
      console.log(
        `Need to update last compare value : ${arr[j + 1]} -> ${currVal}`
      );
      console.log(`BEFORE : ${arr}`);
      arr[j + 1] = currVal;
      console.log(`AFTER : ${arr}`);
    }
  }
  return arr;
}

// console.log(insertionSort([-6, 11, 2, 15, -1, 6, 8, 9]));
// console.log(insertionSort([11, 2, 15, 1]));
// console.log(insertionSort([2, 1, 9, 76, 4]));
// console.log(insertionSort([9, 2, 8, 1]));
// console.log(insertionSort([1, 2, 3, 4, -1]));
// console.log(insertionSort([4, 3, 2, 1]));
console.log(
  insertionSort([
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
    4342, 32,
  ])
);

// --

// Sample Test Case 1
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

// Sample Test Case 2
var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

// console.log(insertionSort(kitties, strComp));
//console.log(insertionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
