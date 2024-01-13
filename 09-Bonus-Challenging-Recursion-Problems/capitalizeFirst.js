"use strict";

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr1) {
  // add whatever parameters you deem necessary - good luck!
  let resultArr = [];

  // base case
  if (arr1.length === 0) return resultArr;

  resultArr.push(arr1[0].charAt(0).toUpperCase() + arr1[0].slice(1));
  resultArr = resultArr.concat(capitalizeFirst(arr1.slice(1)));

  return resultArr;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
