"use struct";

function productOfArray(arr1) {
  let num = 0;

  function helper(helperInput) {
    // base case
    if (helperInput.length === 0) return 1;

    return helperInput[0] * productOfArray(helperInput.slice(1));
  }

  num = helper(arr1);

  return num;
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
