"use strict";

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Examples:
//     validAnagram('', '') // true
//     validAnagram('aaz', 'zza') // false
//     validAnagram('anagram', 'nagaram') // true
//     validAnagram("rat","car") // false) // false
//     validAnagram('awesome', 'awesom') // false
//     validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
//     validAnagram('qwerty', 'qeywrt') // true
//     validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.
// Time Complexity - O(n)

// Frequency Counter Pattern : O(n)
function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  // console.log(str1, str2);
  if (str1.length !== str2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  str1
    .split("")
    .forEach((el) =>
      frequencyCounter1[el]
        ? (frequencyCounter1[el] += 1)
        : (frequencyCounter1[el] = 1)
    );

  str2
    .split("")
    .forEach((el) =>
      frequencyCounter2[el]
        ? (frequencyCounter2[el] += 1)
        : (frequencyCounter2[el] = 1)
    );

  console.log(frequencyCounter1, frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!key in frequencyCounter2) return false;
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }

  return true;
}

console.log(validAnagram("cinema", "iceman"));
console.log(validAnagram("hello", "iceman"));
