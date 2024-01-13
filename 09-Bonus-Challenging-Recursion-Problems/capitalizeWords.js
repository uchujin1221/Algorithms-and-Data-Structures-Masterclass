"use strict";

// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr1) {
  // add whatever parameters you deem necessary - good luck!
  let resultArr = [];

  // base case
  if (arr1.length === 0) return resultArr;

  resultArr.push(arr1[0].toUpperCase());
  resultArr = resultArr.concat(capitalizeWords(arr1.slice(1)));

  return resultArr;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
