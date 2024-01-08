"use strict";

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(inputStr) {
  // add whatever parameters you deem necessary - good luck!

  // base case
  if (inputStr.length === 0) return "";

  return reverse(inputStr.slice(1)) + inputStr[0];
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
