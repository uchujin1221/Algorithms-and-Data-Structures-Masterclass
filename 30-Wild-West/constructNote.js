"use strict";

// Write a function called constructNote, which accepts two strings, a message and some letters.
// The function should return true if the message can be built with the letters that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)
// Space Complexity: O(N)

function constructNote(message, letters) {
  // console.log(`message=${message}, letters=${letters}`);

  // return false if letters is empty
  if (letters === "") return false;

  const count = {};
  const msgArr = [...message];

  // store number of occurance into count object
  [...letters].forEach((key) => {
    if (count[key] !== undefined) count[key]++;
    else count[key] = 1;
  });

  // decrement object count and return false if count is 0
  for (let i = 0; i < msgArr.length; i++) {
    if (count[msgArr[i]] === 0) return false;
    count[msgArr[i]]--;
  }

  // console.log(count);
  return true;
}

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
console.log(
  constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")
); // true
