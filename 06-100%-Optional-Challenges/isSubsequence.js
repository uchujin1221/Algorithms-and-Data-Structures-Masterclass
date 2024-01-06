"use strict";

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
