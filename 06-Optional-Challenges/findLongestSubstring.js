"use strict";

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
//     findLongestSubstring('') // 0
//     findLongestSubstring('rithmschool') // 7
//     findLongestSubstring('thisisawesome') // 6
//     findLongestSubstring('thecatinthehat') // 7
//     findLongestSubstring('bbbbbb') // 1
//     findLongestSubstring('longestsubstring') // 8
//     findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

function findLongestSubstring(inputStr) {
  // add whatever parameters you deem necessary - good luck!

  let maxStr = "";
  let tempStr = "";
  let dupPos = 0;
  let hasDuplicate = 1;

  console.log(inputStr);

  if (inputStr.length === 0) return 0;

  while (hasDuplicate) {
    for (const key of inputStr) {
      if (!tempStr.includes(key)) {
        // add distinct character to tempStr
        tempStr += key;
        hasDuplicate = 0;
      } else {
        // cut the input string from start to after the duplicate character
        dupPos = inputStr.indexOf(key);
        inputStr = inputStr.slice(-(inputStr.length - dupPos - 1));
        hasDuplicate = 1;
        break;
      }
    }

    if (tempStr.length > maxStr.length) {
      maxStr = tempStr;
    }

    console.log(tempStr, maxStr, inputStr, dupPos);
    tempStr = "";
  }

  // console.log(maxStr.length);
  return maxStr.length;
}

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
