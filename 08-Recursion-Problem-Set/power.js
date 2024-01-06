"use strict";

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
