"use strict";

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

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
