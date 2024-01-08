"use strict";

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent) {
  // base case
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, --exponent);
}

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16
// console.log(power(3, 3)); // 27
// console.log(power(16, 16)); // 18446744073709552000
