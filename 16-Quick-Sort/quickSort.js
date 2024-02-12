"use struct";

// Works by selecting an element (pivot) and finding the index where the pivot should end up in the sorted array.
// Once pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// Time complexity for best and average is O(n log n), worst is O(n^2)
// Space complexity is O(log n)

// Pesudocode (Quick sort helper function)
// 1 - Set the pivot element (index) with value pass in as start (** totally unsorted array needs the value to set as 0 or else logic not working)
// 2 - Loop through the array from start until the end
// 3 - Compare each element and find out how many elements < than pivot element, and increment index value
// 4 - Swap the element with smaller value to the left during compare
// 5 - After the loop is finished, swap the pivot element with the index element as final step
// 6 - Return the pivot index

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  let index = start;
  console.log(`pivot start : ${arr} : ${start} : ${end}`);
  for (let i = start + 1; i <= end; i++) {
    if (typeof comparator !== "function") {
      if (arr[start] > arr[i]) {
        index++;
        [arr[index], arr[i]] = [arr[i], arr[index]];
        // console.log(arr);
      }
    } else {
      if (comparator(arr[start], arr[i]) > 0) {
        index++;
        [arr[index], arr[i]] = [arr[i], arr[index]];
        // console.log(arr);
      }
    }
  }
  [arr[index], arr[start]] = [arr[start], arr[index]];
  console.log(`pivot result : ${arr} : ${index}`);
  return index;
}

// console.log(pivot([6, 4, 8, 5, 9, 1]));
// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

const arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
const arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
const arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strLength(a, b) {
  return a.length - b.length;
}

// console.log(pivot(arr1)); // 3
// console.log(pivot(arr2)); // 4
// console.log(pivot(arr3, strLength)); // 1

// Pseudocode (Quick sort function)
// 1 - Call the pivot helper on the array
// 2 - When the helper returns to you the updated pivot index,
//     recurisively call the pivot helper on the subarray to the left of that index,
//     and the subarray to the right of that index
// 3 - Your base case occurs when you consider a subarraywith less than 2 elements

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
  console.log(`quickSort : ${left} : ${right}`);
  if (left < right) {
    let pivotIdx = pivot(arr, comparator, left, right);
    quickSort(arr, comparator, left, pivotIdx - 1);
    quickSort(arr, comparator, pivotIdx + 1, right);
  }
  return arr;
}

// console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));

console.log(quickSort([4, 20, 12, 10, 7, 9, 1])); // [4, 7, 9, 10, 12, 20]
// console.log(quickSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(quickSort([1, 2, 3])); // [1, 2, 3]
// console.log(quickSort([]));

const nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
// console.log(quickSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
// console.log(quickSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

const moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  { name: "Heathcliff", age: 45 },
  {
    name: "Blue",
    age: 1,
  },
  { name: "Grumpy", age: 6 },
];
function oldestToYoungest(a, b) {
  return b.age - a.age;
}
console.log(quickSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
