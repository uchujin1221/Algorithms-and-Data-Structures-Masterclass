"use strict";

// Compare to find the small numnber and swap, repaet until the end of array

// Benefit over bubble sort : less swaps in selection sort

// Time complexity is O(n^2)

function selectionSort(arr, comparator) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    // setup min position as current element
    let min = i;
    // console.log(arr[min]);
    for (let j = i + 1; j < arr.length; j++) {
      // update min if compare value is smaller

      if (typeof comparator !== "function") {
        // provide a default
        if (arr[j] < arr[min]) {
          min = j;
          //   console.log(`Min now is : ${min}, ${arr[min]}`);
        }
      } else {
        // console.log(`comparator : ${comparator(arr[j],arr[min])}`)
        if (comparator(arr[j], arr[min]) < 0) {
          min = j;
        }
      }
    }
    // console.log(arr);
    // swap if min is updated
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
      // console.log(arr);
    }
  }
  return arr;
}

// console.log(selectionSort([6, 3, 1, 8, 9, 14, 2, 11]));
console.log(selectionSort([-6, 11, 2, 15, -1, 6, 8, 9]));

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

console.log(selectionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

console.log(selectionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
