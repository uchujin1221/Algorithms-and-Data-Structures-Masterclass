"use struct";

function pivot(arr, start = 0, end = arr.length - 1) {
  let index = start;
  // console.log(`pivot start : ${arr} : ${start} : ${end}`);
  for (let i = start + 1; i <= end; i++) {
    if (arr[start] > arr[i]) {
      index++;
      [arr[index], arr[i]] = [arr[i], arr[index]];
      // console.log(arr);
    }
  }
  [arr[index], arr[start]] = [arr[start], arr[index]];
  console.log(`pivot result : ${arr}`);
  return index;
}

// console.log(pivot([6, 4, 8, 5, 9, 1]));
// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  console.log(`quickSort : ${left} : ${right}`);
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
