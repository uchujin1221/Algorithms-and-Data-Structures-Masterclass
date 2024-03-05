"use strict";

// Time complexity : O(n)

// Dynamic programming. Bottom up approach.

// Much faster than fib without memorizing calculated results, no trouble of "Maximum call stack size exceeded" since it is using a loop
function fibTabulation(num) {
  if (num <= 2) {
    return 1;
  }
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= num; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[num];
}

console.log(fibTabulation(100));
// console.log(fibTabulation(10000));
