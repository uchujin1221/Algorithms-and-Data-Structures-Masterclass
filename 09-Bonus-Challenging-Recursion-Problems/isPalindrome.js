"use strict";

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(inputStr) {
  // add whatever parameters you deem necessary - good luck!

  let reverseStr = "";

  function helper(helperInput) {
    // base case
    if (helperInput.length === 0) return "";

    return helper(helperInput.slice(1)) + helperInput[0];
  }
  reverseStr = helper(inputStr);

  // console.log(reverseStr);
  return inputStr === reverseStr;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
