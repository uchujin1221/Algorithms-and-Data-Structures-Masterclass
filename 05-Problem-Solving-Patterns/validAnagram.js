"use strict";

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
