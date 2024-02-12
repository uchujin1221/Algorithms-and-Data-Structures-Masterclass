"use strict";

// Decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly array by merging and sorting

// Time complexity is O(n log n) no matter what !
// Space complexity is O(n)

// Pseudocode (Merge sort helper function)
// 1 - Create an empty array, take a look at the smallest values in each input array
// 2 - While there are still values we haven't looked at ...
// 2.1 - If the value in the 1st array < the value in the 2nd array,
//       push the value in the 1st array into our results (array) and move on to the next value in the 1st array
// 2.2 - If the value in the 1st array > the value in the 2nd array,
//       push the value in the 2nd array into our results (array) and move on to the next value in the 2nd array
// 2.3 - Once exhaust one arra, push in all remaining values from the other array

const merge = (arr1, arr2, comparator) => {
  const resultArr = [];
  let i, j;
  i = j = 0;

  console.log(arr1, arr2);

  // loop until both arrays are processed
  while (!(i === arr1.length && j === arr2.length)) {
    // console.log(arr1[i], arr2[j]);

    // Save remaining elements and finish loop if either i or j reaches the end
    if (i === arr1.length) {
      // console.log(`remaining j = ${j}`);
      return resultArr.concat(arr2.slice(j));
    } else if (j === arr2.length) {
      // console.log(`remaining i = ${i}`);
      return resultArr.concat(arr1.slice(i));
    }

    if (typeof comparator !== "function") {
      // standard logic
      if (arr1[i] <= arr2[j]) {
        resultArr.push(arr1[i]);
        i++;
      } else {
        resultArr.push(arr2[j]);
        j++;
      }
    } else {
      // comparator
      if (comparator(arr1[i], arr2[j]) < 0) {
        resultArr.push(arr1[i]);
        i++;
      } else {
        resultArr.push(arr2[j]);
        j++;
      }
    }
  }

  return resultArr;
};

// console.log(merge([1, 10, 40, 47, 60], [2, 9, 14, 21, 100]));
// console.log(merge([1, 10, 50, 51, 52], [2, 14, 99, 100]));
// console.log(merge([14], [2, 14, 99, 100]));
// console.log(merge([2, 14, 99, 100], [5]));
// console.log(merge([], [2, 14, 99, 100]));
// console.log(merge([1, 10, 50, 51, 52], []));

const arr1 = [1, 3, 4, 5];
const arr2 = [2, 4, 6, 8];
console.log(merge(arr1, arr2)); // [1,2,3,4,4,5,6,8]

const arr3 = [-2, -1, 0, 4, 5, 6];
const arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
// console.log(merge(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

const arr5 = [3, 4, 5];
const arr6 = [1, 2];
// console.log(merge(arr5, arr6)); // [1,2,3,4,5]

const names = ["Bob", "Ethel", "Christine"];
const otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];
function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}
console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]

// Pseudocode (Merge sort function)
// 1 - Break up the array into halves until you have arrays that are empty or have 1 element
// 2 - Once you have smaller sorted arrays,
//     merge thise arrays with other sorted arrays until you are back at full length of the array
// 3 - Once the array has been merged back together. return the merge (and sorted) array

function mergeSort(arr, comparator) {
  console.log(arr);

  // base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);

  if (left === undefined) left = [];
  if (right === undefined) right = [];

  return merge(left, right, comparator);
}

// console.log(mergeSort([5, 8, 6, 2, 9, 1, 4]));
// console.log(mergeSort([-6, 11, 2, 15, -1, 6, 8, 9]));

console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(mergeSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
// console.log(mergeSort([]));

const nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
// console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
console.log(mergeSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

const moarKittyData = [
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
console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
