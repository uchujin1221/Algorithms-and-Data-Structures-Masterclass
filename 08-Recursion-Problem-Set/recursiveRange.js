"uses strict";

function recursiveRange(num) {
  // base case
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(10));

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55
