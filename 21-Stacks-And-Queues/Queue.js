"use strict";

// FIFO

// Time Complexity for Stack : Insertion, Removal : O(1), Searching, Access : O(n)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push method in Singly Linked List
  enqueue(val) {
    const newNode = new Node(val);
    // console.log(this.newNode.val);
    if (this.first === null) {
      this.first = this.last = newNode;
    } else {
      //   console.log(this.head);
      this.last.next = this.last = newNode;
      //   console.log(this.head.next);
    }
    this.size++;
    // console.log(this.head);
    // console.log(this.tail);
    // console.log(this.newNode.next);
    return this.size;
  }

  // shift method in Singly Linked List
  dequeue() {
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

const q = new Queue();
q.enqueue("First");
q.enqueue("Second");
q.enqueue("Third");
q.dequeue();

console.log(q);
