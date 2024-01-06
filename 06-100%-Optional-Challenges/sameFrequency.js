"use strict";

function sameFrequency(int1, int2) {
  // good luck. Add any arguments you deem necessary.

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  int1
    .toString()
    .split("")
    .forEach((el) =>
      frequencyCounter1[el]
        ? ++frequencyCounter1[el]
        : (frequencyCounter1[el] = 1)
    );
  int2
    .toString()
    .split("")
    .forEach((el) =>
      frequencyCounter2[el]
        ? ++frequencyCounter2[el]
        : (frequencyCounter2[el] = 1)
    );

  for (const key in frequencyCounter1) {
    if (!key in frequencyCounter2) return false;
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }

  return true;
}

console.log(sameFrequency(3589578, 5879385)); // true
