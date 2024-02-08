"use strict";

// piece of data - val
// reference to the next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    // console.log(this.newNode.val);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      //   console.log(this.head);
      this.tail.next = this.tail = newNode;
      //   console.log(this.head.next);
    }
    this.length++;
    // console.log(this.head);
    // console.log(this.tail);
    // console.log(this.newNode.next);
    return this;
  }

  pop() {
    let current = this.head;
    let pre = current;

    if (current === null) {
      return undefined;
    }

    while (current.next) {
      pre = current;
      current = current.next;
    }
    // console.log(current.val);
    // console.log(pre.val);

    if (pre !== current) {
      pre.next = null;
      this.tail = pre;
    } else {
      this.head = this.tail = null;
    }
    this.length--;

    // console.log(`--`);
    // console.log(pre.val);
    // console.log(current.val);
    return current;
  }

  shift() {
    const current = this.head;

    if (current === null) {
      return undefined;
    }

    if (current.next !== null) {
      this.head = current.next;
    } else {
      this.head = this.tail = null;
    }
    this.length--;

    return current;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
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

    let current = this.head;
    // console.log(current);
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    // console.log(current);
    return current;
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

    if (idx === this.length) {
      this.push(val);
    } else if (idx === 0) {
      this.unshift(val);
    } else {
      const newNode = new Node(val);
      const prevNode = this.get(idx - 1);
      // this goes first : assign the node after preNode as newNode.next
      newNode.next = prevNode.next;
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

    const preNode = this.get(idx - 1);
    const targetNode = preNode.next;
    preNode.next = targetNode.next;
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

      // console.log(prev, current, next);

      prev = current;
      current = next;

      // end loop when next node is the head -
      if (this.head === next) {
        // console.log(`Reaching head node (done) : ${this.head.val}`);
        current.next = prev;
        break;
      }
    }

    return this;
  }
}

const newSinglyLinkedList = new SinglyLinkedList();

newSinglyLinkedList.push("First");
newSinglyLinkedList.push("Second");
newSinglyLinkedList.push("Third");
newSinglyLinkedList.push("Forth");
newSinglyLinkedList.push("Fifth");
newSinglyLinkedList.push(6);

newSinglyLinkedList.pop();
// newSinglyLinkedList.pop();
// newSinglyLinkedList.pop();

// newSinglyLinkedList.shift();
// newSinglyLinkedList.shift();
// newSinglyLinkedList.shift();
// newSinglyLinkedList.shift();

newSinglyLinkedList.unshift("Test-1");
// newSinglyLinkedList.unshift("Test-2");

// console.log(newSinglyLinkedList.get(3));
console.log(newSinglyLinkedList.set(2, "Hello World"));

newSinglyLinkedList.insert(0, "NEW");
// newSinglyLinkedList.insert(6, "MORE");
newSinglyLinkedList.insert(2, "newly insert");

// console.log(newSinglyLinkedList.remove(0));
// console.log(newSinglyLinkedList.remove(5));
// console.log(newSinglyLinkedList.remove(-1));
console.log(newSinglyLinkedList.remove(4));
// console.log(newSinglyLinkedList.remove(3));
// console.log(newSinglyLinkedList.remove(2));
// console.log(newSinglyLinkedList.remove(1));
// console.log(newSinglyLinkedList.remove(0));

newSinglyLinkedList.reverse();

console.log(newSinglyLinkedList);
