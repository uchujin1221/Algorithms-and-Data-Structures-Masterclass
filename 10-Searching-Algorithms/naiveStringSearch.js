"use strict";

function naiveStringSearch(longStr, shortStr) {
  let currPos = 0;
  let wordCount = 0;

  while (currPos + shortStr.length <= longStr.length) {
    // set current word from longStr for compare
    let currStr = longStr.substring(currPos, currPos + shortStr.length);
    // increment counter if word found
    if (currStr === shortStr) wordCount++;
    console.log(currPos, currStr);
    // move to next position
    currPos += 1;
  }

  return wordCount;
}

// console.log(naiveStringSearch("hellohell", "ee"));
console.log(naiveStringSearch("lorie loled", "lol"));
