"use strict";

function averagePair(arr, avg) {
  // add whatever parameters you deem necessary - good luck!

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let thisAvg = (arr[left] + arr[right]) / 2;
    if (thisAvg === avg) {
      //   return [arr[left], arr[right]];
      return true;
    } else if (thisAvg > avg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([], 4));
