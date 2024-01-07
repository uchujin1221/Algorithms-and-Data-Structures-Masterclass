"use strict";

//　x(n) = x(n−2) + x(n−1)
function fib(num) {
  // add whatever parameters you deem necessary - good luck!
  // base case
  if (num <= 1) {
    console.log(`hey : ${num}`);
    return num;
  }
  console.log(num);
  return fib(num - 2) + fib(num - 1);
}

console.log(fib(6));

// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
