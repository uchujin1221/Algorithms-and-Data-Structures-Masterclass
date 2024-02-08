"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }
    const currentTail = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = currentTail.prev;
      currentTail.prev.next = null;
      currentTail.prev = null;
    }
    this.length--;

    return currentTail;
  }

  shift() {
    if (this.head === null) {
      return undefined;
    }
    const currentHead = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = currentHead.next;
      currentHead.next.prev = null;
      currentHead.next = null;
    }
    this.length--;

    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    if (idx <= Math.floor(this.length / 2)) {
      // console.log(`Start from head`);
      let current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
      return current;
    } else {
      // console.log(`Start from tail`);
      let current = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        current = current.prev;
      }
      return current;
    }
  }

  set(idx, val) {
    const targetNode = this.get(idx);
    if (targetNode !== null) {
      targetNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) {
      return false;
    }
    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      const prevNode = this.get(idx - 1);
      // for newNode
      newNode.prev = prevNode;
      newNode.next = prevNode.next;
      // for prevNode and newNode.next
      newNode.next.prev = newNode;
      prevNode.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }
    if (idx === this.length - 1) {
      return this.pop();
    }
    if (idx === 0) {
      return this.shift();
    }
    const targetNode = this.get(idx);

    targetNode.prev.next = targetNode.next;
    targetNode.next.prev = targetNode.prev;

    targetNode.next = targetNode.prev = null;

    this.length--;
    return targetNode;
  }

  reverse() {
    if (this.head === null) {
      return undefined;
    }

    let current = this.head;
    let next = null;
    let prev = null;

    // swap head and tail
    this.head = this.tail;
    this.tail = current;

    while (1) {
      next = current.next;
      current.next = prev;
      current.prev = next; // new for doubly linked list

      // console.log(prev, current, next);

      prev = current;
      current = next;

      // end loop when next node is the head -
      if (this.head === next) {
        // console.log(`Reaching head node (done) : ${this.head.val}`);
        current.next = prev;
        current.prev = null; // new for doubly linked list
        break;
      }
    }
    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(10);
doublyLinkedList.push(15);
doublyLinkedList.push(20);
doublyLinkedList.push(25);
doublyLinkedList.push(30);
doublyLinkedList.push(35);
doublyLinkedList.push("LAST ITEM");

// doublyLinkedList.pop();
// doublyLinkedList.pop();
// doublyLinkedList.pop();
// doublyLinkedList.pop();

// doublyLinkedList.shift();
// doublyLinkedList.shift();

// doublyLinkedList.unshift(5);

// console.log(doublyLinkedList.get(2));
// console.log(doublyLinkedList.get(3));
// console.log(doublyLinkedList.get(-1));
// console.log(doublyLinkedList.set(1, "NEW"));
// console.log(doublyLinkedList.set(-1, "NEW"));

// console.log(doublyLinkedList.insert(8, "newly insert"));

// console.log(doublyLinkedList.remove(0));
// console.log(doublyLinkedList.remove(5));
// console.log(doublyLinkedList.remove(1));

doublyLinkedList.reverse();

console.log(doublyLinkedList);
