"use strict";

// Time Complexity : Insertion and Removal O(log n), Search O(n)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // Pseudocode
  // 1 - Push the value into the values property on the heap
  // 2 - Bubble Up :
  // 2.1 - Create a variable called index which is the length of the values property - 1
  // 2.2 - Create a variable called parentIndex which is the floor of (index-1)/2
  // 2.3 - Keep looping as long as the values element at the parentIndex is less than the values element at the child index (break when >=)
  // 2.3.1 - Swap the value of the values element at the parentIndex with the value of the element property at the child index
  // 2.3.2 - Set the index to be the parentIndex, and start over!
  bubbleUp(values) {
    let index = values.length - 1;

    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (index === 0 || values[parentIndex] >= values[index]) {
        console.log(
          `Parent Index ${parentIndex} = ${values[parentIndex]}, Child Index ${index} = ${values[index]}`
        );
        break;
      } else {
        let temp = values[parentIndex];
        values[parentIndex] = values[index];
        values[index] = temp;
        index = parentIndex;
      }
    }
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(this.values);
  }

  // Pseudocode
  // 1 - Swap the first value in the values property with the last one
  // 2 - Pop from the values property, so you can return the value at the end
  // 3 - Have the new root "sink down" to the correct spot
  // 3.1 - Your parent index starts at 0 (the root)
  // 3.2 - Find the index of the left child : 2*index+1 (Make sure it is not out of bounds)
  // 3.3 - Find the index of the right child : 2*index+2 (Make sure it is not out of bounds)
  // 3.4 - If the left or the right child is greater than the element -> swap.
  //       If both left and right children are larger, swap with the largest child
  // 3.5 - The child index you swapped to now becomes the new parent index
  // 3.6 - Keep looping and swapping until neither child is larger than the element
  // 3.7 - Return the old root
  extractMax() {
    let parentIndex = 0;
    let oldRoot = this.values[parentIndex];
    this.values[parentIndex] = this.values[this.values.length - 1];
    this.values.pop();

    // console.log(this.values.length, oldRoot);

    while (true) {
      let current = this.values[parentIndex];
      let leftIndex = 2 * parentIndex + 1;
      let rightIndex = 2 * parentIndex + 2;
      let swap = null;

      // console.log(leftIndex, rightIndex, this.values.length);

      // Ensure index is not out of bounds
      if (leftIndex < this.values.length) {
        // current starts at 0 : sink down
        if (this.values[leftIndex] > current) {
          swap = leftIndex;
        }
      }

      // Ensure index is not out of bounds
      if (rightIndex < this.values.length) {
        // current starts at 0 : sink down
        if (
          (swap === null && this.values[rightIndex] > current) ||
          (swap !== null && this.values[rightIndex] > this.values[leftIndex])
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) {
        break;
      }

      this.values[parentIndex] = this.values[swap];
      this.values[swap] = current;
      parentIndex = swap;
    }
    return oldRoot;
  }
}

const mbh = new MaxBinaryHeap();
mbh.insert(99);
mbh.insert(70);
mbh.insert(65);
mbh.insert(44);
mbh.insert(45);
mbh.insert(40);
mbh.insert(53);
mbh.insert(100);
// mbh.insert(15);
// mbh.insert(58);
// mbh.insert(88);
console.log(mbh.values);

console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());
console.log(mbh.extractMax());

// const binaryHeap = new MaxBinaryHeap();
// binaryHeap.insert(1);
// // binaryHeap.values[0]; // 1

// binaryHeap.insert(2);
// // binaryHeap.values[0]; // 2
// // binaryHeap.values; // [2, 1]

// binaryHeap.insert(3);
// // binaryHeap.values[0]; // 3
// // binaryHeap.values; // [3, 1, 2]

// binaryHeap.insert(4);
// // binaryHeap.values[0]; // 4
// // binaryHeap.values; // [4, 3, 2, 1]

// binaryHeap.insert(5);
// // binaryHeap.values[0]; // 5
// // binaryHeap.values; // [5, 4, 2, 1, 3]

// binaryHeap.insert(6);
// // binaryHeap.values[0]; // 6
// // binaryHeap.values; // [6, 4, 5, 1, 3, 2]

// console.log(binaryHeap.values);

// binaryHeap.extractMax();
// binaryHeap.values[0]; // 5

// binaryHeap.values; // [5,4,2,1,3])

// binaryHeap.extractMax();
// binaryHeap.values; // [4,3,2,1])

// binaryHeap.extractMax();
// binaryHeap.values; // [3,1,2])
