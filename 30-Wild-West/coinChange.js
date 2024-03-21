"use strict";

// Write a function called coinChange which accepts two parameters: an array of denominations and a value.
// The function should return the number of ways you can obtain the value from the given collection of denominations.
// You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.

// Resolve by memoization
function coinChange(arr1, val) {
  // Create the ways array to 1 plus the amount to stop overflow
  let ways = new Array(val + 1).fill(0);

  // Set the first way to 1 because its 0 and there is 1 way to make 0 with 0 coins
  ways[0] = 1;

  // For each coins
  for (let i = 0; i < arr1.length; i++) {
    // Add to ways array only if val <= than arr1 value
    console.log(`For coin : ${arr1[i]}`);
    for (let j = 0; j < ways.length; j++) {
      if (arr1[i] <= j) {
        // Update the ways array
        // console.log(
        //   `ways[j]=${ways[j]}, ways[j - Coins[i]]=${
        //     ways[j - arr1[i]]
        //   }, j=${j}, i=${i}`
        // );
        ways[j] += ways[j - arr1[i]];
      }
    }
    console.log(`Ways : ${ways}`);
  }

  // value at ways array is the answer
  return ways[val];
}

const denominations = [1, 5, 10, 25];

// coinChange(denominations, 1) // 1
// coinChange(denominations, 2) // 1
// coinChange(denominations, 5) // 2
console.log(coinChange(denominations, 10)); // 4
// coinChange(denominations, 25) // 13
// coinChange(denominations, 45) // 39
// coinChange(denominations, 100) // 242
// coinChange(denominations, 145) // 622
// coinChange(denominations, 1451) // 425663
// coinChange(denominations, 14511); // 409222339
