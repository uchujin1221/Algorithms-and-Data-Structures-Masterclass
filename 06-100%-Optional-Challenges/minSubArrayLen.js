"use strict";

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:
//     minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//     minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
//     minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
//     minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
//     minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
//     minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
//     minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// Time Complexity - O(n)
// Space Complexity - O(1)

function minSubArrayLen(arr1, inputNum) {
  let minNum = 0;
  let tmpNum = 0;
  let curSum = 0;
  let start = 0;
  let end = 0;

  while (end <= arr1.length) {
    if (curSum < inputNum) {
      curSum += +arr1[end];
      tmpNum++;
      end++;
      // console.log(`start -> ${start}, end -> ${end}`)
    }

    if (curSum >= inputNum) {
      // console.log(curSum);
      curSum -= +arr1[start];
      // console.log(tmpNum, minNum);
      if (+minNum === 0) minNum = tmpNum;
      minNum = Math.min(tmpNum, minNum);
      // console.log(tmpNum, minNum);
      tmpNum--;
      start++;

      console.log(minNum, curSum, +arr1[start], start, end);
    }
  }

  // console.log (minNum, curSum, +arr1[start], start, end);

  // return minmal length of contiguous subarray
  // of which the sum is greater than or equal to the pass in integer
  // console.log(minNum);
  return minNum;
}

minSubArrayLen([2, 3, 1, 2, 4, 7], 7); // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
