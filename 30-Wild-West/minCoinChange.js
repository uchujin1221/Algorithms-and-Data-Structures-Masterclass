"use strict";

// Return minimum number of coins added to the amount
// Need to apply to sorted array and start from biggest number
function minCoinChange(coins, amount) {
  // Initialize result
  const result = [];

  // Traverse through all denomination
  for (let i = coins.length - 1; i >= 0; i--) {
    // Find denominations
    while (amount >= coins[i]) {
      amount -= coins[i];
      result.push(coins[i]);
    }
  }

  console.log(result);
  return result;
}

const denominations = [1, 5, 10, 25];
minCoinChange(denominations, 72); // [ 25, 25, 10, 10, 1, 1 ]
