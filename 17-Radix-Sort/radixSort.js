"use strict";

// Radix sort does not perform comparasions beteween numbers, but works on a list of numbers (this implementation with base 10 digits).
// The logic is to group numbers into buckets (0-9, when the numbers are base-10 digits), based on the digits in the array start from the last digit
// After each round of grouping numbers into the bucket, reform the numbers back into an array
// The numbers in the reformed array will be sorted gradually
// The number of times needed for grouping and refroming numbers depends on how many digits a number in the array has

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

// getDigit(8987, 0); // 7
// getDigit(8987, 1); // 8
// getDigit(8987, 2); // 9
// getDigit(8987, 3); // 8
// getDigit(8987, 4); // 0

// returns the number of digits in num
const digitCount = (num) => {
  return Math.abs(num).toString().length;
};

// console.log(digitCount(21388));
// console.log(digitCount(-190));

// console.log(digitCount(1)); // 1
// console.log(digitCount(9)); // 1
// console.log(digitCount(25)); // 2
// console.log(digitCount(314)); // 3
// console.log(digitCount(1234)); // 4
// console.log(digitCount(77777)); // 5

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

// console.log(mostDigits([1, 9, 10, 100, 99])); // 3
// console.log(mostDigits([100, 1010, 1, 500])); // 4
// console.log(mostDigits([0, 100000, 400, 12, 8])); // 6
// console.log(mostDigits([])); // 0

// Pseudocode
// 1 - Define a function that accept list of numbers
// 2 - Figure out how many digits the largest number has
// 3 - Loop from k=0 up to this largest number of digits
// 4 - For each iteration of the loop
// 4.1 - Create buckets for each digit (0-9)
// 4.2 - Place each number in the corresponding bucket based on its kth digit
// 5 - Replace our existing array with values in our buckets, starting with 0 and going up to 9
// 6 - return list at the end

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

console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
console.log(
  radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])
);
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
