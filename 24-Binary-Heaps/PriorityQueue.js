"use strict";

// Time Complexity : Insertion and Removal O(log n), Search O(n)

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// It is a MinBinaryHeap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // Pseudocode
  // 1 - Push the value into the values property on the heap
  // 2 - Bubble Up :
  // 2.1 - Create a variable called index which is the length of the values property - 1
  // 2.2 - Create a variable called parentIndex which is the floor of (index-1)/2
  // 2.3 - Keep looping as long as the priority at the parentIndex is larger than the priority at the child index (break when <=>)
  // 2.3.1 - Swap the value of the values element at the parentIndex with the value of the element property at the child index
  // 2.3.2 - Set the index to be the parentIndex, and start over!
  bubbleUp(values) {
    let index = values.length - 1;

    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (
        index === 0 ||
        values[parentIndex].priority <= values[index].priority
      ) {
        break;
      } else {
        // console.log(
        //   `SWAP : Parent Index ${parentIndex} : [${values[parentIndex].value}, ${values[parentIndex].priority}], Child Index ${index} = [${values[index].value}, ${values[index].priority}]`
        // );
        let temp = values[parentIndex];
        values[parentIndex] = values[index];
        values[index] = temp;
        index = parentIndex;
      }
    }
  }

  // function insert in MaxBinaryHeap
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp(this.values);
  }

  // Pseudocode
  // 1 - Swap the first value in the values property with the last one
  // 2 - Pop from the values property, so you can return the value at the end
  // 3 - Have the new root "sink down" to the correct spot
  // 3.1 - Your parent index starts at 0 (the root)
  // 3.2 - Find the index of the left child : 2*index+1 (Make sure it is not out of bounds)
  // 3.3 - Find the index of the right child : 2*index+2 (Make sure it is not out of bounds)
  // 3.4 - If the left or the right child priority is smaller than the element -> swap.
  //       If both left and right children are smaller, swap with the smallest child
  // 3.5 - The child index you swapped to now becomes the new parent index
  // 3.6 - Keep looping and swapping until neither child is smaller than the element
  // 3.7 - Return the old root

  // function extractMax in MaxBinaryHeap
  dequeue() {
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
        if (this.values[leftIndex].priority < current.priority) {
          swap = leftIndex;
        }
      }

      // Ensure index is not out of bounds
      if (rightIndex < this.values.length) {
        // current starts at 0 : sink down
        if (
          (swap === null &&
            this.values[rightIndex].priority < current.priority) ||
          (swap !== null &&
            this.values[rightIndex].priority < this.values[leftIndex].priority)
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

const priQ = new PriorityQueue();
priQ.enqueue(99, 5);
priQ.enqueue(70, 1);
priQ.enqueue(65, 4);
priQ.enqueue(44, 2);
priQ.enqueue(45, 3);
console.log(priQ.values);

// console.log(priQ.dequeue());
// console.log(priQ.dequeue());
// console.log(priQ.dequeue());
// console.log(priQ.dequeue());
// console.log(priQ.dequeue());
// console.log(priQ.dequeue());
