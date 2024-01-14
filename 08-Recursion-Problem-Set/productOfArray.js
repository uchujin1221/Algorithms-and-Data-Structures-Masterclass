"use struct";

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// Helper method recursion
// function productOfArray(arr1) {
//   let num = 0;

//   function helper(helperInput) {
//     // base case
//     if (helperInput.length === 0) return 1;

//     return helperInput[0] * productOfArray(helperInput.slice(1));
//   }

//   num = helper(arr1);

//   return num;
// }

// Pure recursion
function productOfArray(arr1) {
  let num = 0;

  // base case
  if (arr1.length === 0) return 1;

  num = arr1[0] * productOfArray(arr1.slice(1));

  return num;
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
