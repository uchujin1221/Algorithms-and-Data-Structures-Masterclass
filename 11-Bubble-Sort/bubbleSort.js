"use strict";

// Bubble swap keeps on comparing and swapping until largest value goes to the end in each round

// Time complexity in general is O(n^2), best case is O(n) when input data is nearly sorted

function bubbleSort(arr, comparator) {
  console.log(arr);

  // noSwaps variable optimize bubble sort by breaking the outer loop if no swap was being done in inner loop
  let noSwaps;
  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j <= i - 1; j++) {
      // console.log(`${arr}, ${arr[j]} : ${arr[j + 1]}`);
      if (typeof comparator !== "function") {
        // provide a default
        if (arr[j] > arr[j + 1]) {
          // General way
          // let temp = arr[j];
          // arr[j] = arr[j + 1];
          // arr[j + 1] = temp;

          // ES2015 version
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          noSwaps = false;
        }
      } else {
        // console.log(`comparator : ${comparator(arr[j], arr[j + 1])}`);
        if (comparator(arr[j], arr[j + 1]) > 0) {
          // ES2015 version
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          noSwaps = false;
        }
      }
    }
    // console.log(`Round ${arr.length - i}`);
    if (noSwaps) break;
  }
  return arr;
}

// console.log(bubbleSort([6, 3, 1, 8, 9, 14, 2, 11]));
// console.log(bubbleSort([11, 2, 5, 6, 8, 9]));
console.log(bubbleSort([11, 2, 15, 6, 8, 9]));

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

console.log(bubbleSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

console.log(bubbleSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
