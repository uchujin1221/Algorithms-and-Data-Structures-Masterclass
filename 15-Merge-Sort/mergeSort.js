"use strict";

const merge = (arr1, arr2) => {
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

    // standard logic
    if (arr1[i] <= arr2[j]) {
      resultArr.push(arr1[i]);
      i++;
    } else {
      resultArr.push(arr2[j]);
      j++;
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

function mergeSort(arr) {
  console.log(arr);

  // base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  if (left === undefined) left = [];
  if (right === undefined) right = [];

  return merge(left, right);
}

console.log(mergeSort([5, 8, 6, 2, 9, 1, 4]));
console.log(mergeSort([-6, 11, 2, 15, -1, 6, 8, 9]));
