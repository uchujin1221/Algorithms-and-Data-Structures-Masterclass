"use strict";

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Examples:
//     isSubsequence('hello', 'hello world'); // true
//     isSubsequence('sing', 'sting'); // true
//     isSubsequence('abc', 'abracadabra'); // true
//     isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.

  let k = 0;
  let m = 0;

  while (m < str2.length) {
    // console.log(str1[k], str2[m]);
    if (str1[k] === str2[m]) {
      k++;
    }

    if (k === str1.length) return true;

    m++;
  }

  return false;
}

console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
