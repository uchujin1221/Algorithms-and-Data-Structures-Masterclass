"use strict";

// Time complexity : O(n)

// Dynamic programming. Top down approach.

// Much faster than fib without memorizing calculated results, but run into problem of "Maximum call stack size exceeded"
function fibMemoization(num, memo = []) {
  if (memo[num] !== undefined) return memo[num];
  if (num <= 2) {
    return 1;
  }
  const res = fibMemoization(num - 1, memo) + fibMemoization(num - 2, memo);
  memo[num] = res;
  return res;
}

console.log(fibMemoization(100));
// console.log(fibMemoization(10000));
