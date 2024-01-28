"use strict";

// Radix Sort only works for base 10 digits

// Time complexity : O(nk) n = length of array, k = number of digits

// returns the digit in num at the given place value
const getDigit = (num, place) => {
  return Math.abs(num).toString().length - place - 1 >= 0
    ? +Math.abs(num)
        .toString()
        .charAt(Math.abs(num).toString().length - place - 1)
    : 0;
};

// console.log(getDigit(12345, 0));
// console.log(getDigit(12345, 1));
// console.log(getDigit(12345, 2));
// console.log(getDigit(12345, 3));
// console.log(getDigit(12345, 4));
// console.log(getDigit(12345, 5));

// console.log(getDigit(-7323, 2));

// returns the number of digits in a num
const digitCount = (num) => {
  return Math.abs(num).toString().length;
};

// console.log(digitCount(21388));
// console.log(digitCount(-190));

// Given an array of numbers, returns the number of digits in the largest numbers in the list
const mostDigits = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count = Math.max(digitCount(nums[i]), count);
  }
  return count;
};

// console.log(mostDigits([1234, 56, 7]));
// console.log(mostDigits([1, 1, 11111, 11]));
// console.log(mostDigits([12, 34, 56, 78]));

function radixSort(arr) {
  console.log(arr);
  let mostDigitCount = mostDigits(arr);
  for (let k = 0; k < mostDigitCount; k++) {
    // initialize array of arrays as 10 new arrays
    const bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      //   console.log(`Digit ${arr[j]} at place of ${k} = ${getDigit(arr[j], k)}`);
      bucket[getDigit(arr[j], k)].push(arr[j]);
    }
    // console.log(bucket);
    // use spread operator to return a list of numbers but not arrays of numbers, then concat and with re-ordered result
    arr = [].concat(...bucket);
    // console.log(arr);
    // console.log("---");
  }
  return arr;
}

// console.log(radixSort([7, 90, 12345, 125, 3]));
console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
