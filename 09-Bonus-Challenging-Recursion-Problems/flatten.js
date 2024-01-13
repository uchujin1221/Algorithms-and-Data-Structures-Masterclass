"use strict";

function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];

  function helper(helperinput) {
    // base case
    if (helperinput.length === 0) return;

    if (Array.isArray(helperinput[0])) helper(helperinput[0]);
    else newArr.push(helperinput[0]);

    helper(helperinput.slice(1));
  }
  helper(arr);

  return newArr;
}

const resultArr = flatten([2, 3, [4, 5, 6], [[[[[[[1]]]]]]]]);
// const resultArr = flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
//const resultArr = flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
// const resultArr = flatten([[1], [2], [3]]); // [1,2,3]
//const resultArr = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]

console.log(resultArr);
