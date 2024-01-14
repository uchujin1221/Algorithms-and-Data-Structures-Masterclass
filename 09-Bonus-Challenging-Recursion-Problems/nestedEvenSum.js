"use strict";

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

// Helper method recursion
// function nestedEvenSum(inputObj) {
//   let result = 0;

//   function helper(helperinput) {
//     // add whatever parameters you deem necessary - good luck!
//     for (const property in helperinput) {
//       if (typeof helperinput[property] === "object") {
//         helper(helperinput[property]);
//       }

//       if (helperinput[property] % 2 === 0) {
//         result += helperinput[property];
//       }
//     }
//   }
//   helper(inputObj);

//   return result;
// }

// Pure resursion
function nestedEvenSum(inputObj) {
  let result = 0;

  // add whatever parameters you deem necessary - good luck!
  for (const property in inputObj) {
    if (typeof inputObj[property] === "object") {
      result += nestedEvenSum(inputObj[property]);
    }

    if (inputObj[property] % 2 === 0) {
      result += inputObj[property];
    }
  }
  return result;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
