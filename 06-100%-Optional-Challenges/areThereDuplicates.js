"use strict";

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Examples:
//     areThereDuplicates(1, 2, 3) // false
//     areThereDuplicates(1, 2, 2) // true
//     areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:
// Time - O(n)
// Space - O(n)
// Bonus:
// Time - O(n log n)
// Space - O(1)

function areThereDuplicates(...inputs) {
  // good luck. (supply any arguments you deem necessary.)
  // the array needs to sort
  const arr1 = inputs.toString().split(",").sort();

  let k = 0;
  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] !== arr1[k]) {
      k++;
      arr1[k] = arr1[i];
    }
  }
  return k + 1 !== arr1.length;
}

// console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates("a", "b", "c", "a"));
