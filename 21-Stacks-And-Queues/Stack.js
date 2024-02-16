"use strict";

// LIFO

// Time Complexity for Stack : Insertion, Removal : O(1), Searching, Access : O(n)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Pseudocode
  // 1 - The function should accept a value
  // 2 - Create a new node with that value
  // 3 - If there are no nodes in the stack, set the first and last property to be the newly created node
  // 4 - If there is at least 1 node, create a variable that stores the current 1st property on the stack
  // 5 - Reset the 1st property to be the newly created node
  // 6 - Set the next propertyon the node to be the previously created variable
  // 7 - Increment the size of the stack by 1
  // The following is unshift function in singly linked list
  push(val) {
    const newNode = new Node(val);

    if (this.first === null) {
      this.first = this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;

    return this.size;
  }

  // Pseudocode
  // 1 - If there are no nodes in the stack, return null
  // 2 - Create a temporary variable to store the 1st property on the stack
  // 3 - If there is only 1 node, set the first and last prperty to be null
  // 4 - If there is more than 1 node,set the 1st property to be the next property on the current first
  // 5 - Decrement the size by 1
  // The following is shift function in singly linked list
  pop() {
    const current = this.first;

    if (current === null) {
      return undefined;
    }

    if (current.next !== null) {
      this.first = current.next;
    } else {
      this.first = this.last = null;
    }
    this.size--;

    return current.val;
  }
}

// const stack = new Stack();

// stack.push(10); // 1
// stack.first.value; // 10
// stack.last.value; // 10
// stack.push(100);
// stack.first.value; // 100
// stack.last.value; // 10
// stack.push(1000);
// stack.first.value; // 1000
// stack.last.value; // 10

// console.log(stack);

// const stack = new Stack();

// stack.push(10); // 1
// stack.size; // 1
// stack.push(100); // 2
// stack.size; // 2
// stack.push(1000); // 3
// stack.size; // 3

// console.log(stack);

// const stack = new Stack();

// stack.push(10);
// stack.push(100);
// stack.push(1000);
// var removed = stack.pop();
// removed; // 1000
// stack.size; // 2
// stack.pop();
// stack.pop();
// stack.size; // 0

// console.log(stack);
