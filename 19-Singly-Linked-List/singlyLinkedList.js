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

  // rotate : This function should rotate all the nodes in the list by some number passed in.
  // For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.

  // Time Complexity: O(N), where N is the length of the list.
  // Space Complexity: O(1)
  rotate(times) {
    if (times < 0) {
      for (let i = 0; i > times; i--) {
        const element = this.pop();
        this.unshift(element.val);
      }
    } else {
      for (let i = 0; i < times; i++) {
        const element = this.shift();
        this.push(element.val);
      }
    }
  }
}

// const newSinglyLinkedList = new SinglyLinkedList();

// newSinglyLinkedList.push("First");
// newSinglyLinkedList.push("Second");
// newSinglyLinkedList.push("Third");
// newSinglyLinkedList.push("Forth");
// newSinglyLinkedList.push("Fifth");
// newSinglyLinkedList.push(6);

// newSinglyLinkedList.pop();
// newSinglyLinkedList.pop();
// newSinglyLinkedList.pop();

// newSinglyLinkedList.shift();
// newSinglyLinkedList.shift();
// newSinglyLinkedList.shift();
// newSinglyLinkedList.shift();

// newSinglyLinkedList.unshift("Test-1");
// newSinglyLinkedList.unshift("Test-2");

// console.log(newSinglyLinkedList.get(3));
// console.log(newSinglyLinkedList.set(2, "Hello World"));

// newSinglyLinkedList.insert(0, "NEW");
// newSinglyLinkedList.insert(6, "MORE");
// newSinglyLinkedList.insert(2, "newly insert");

// console.log(newSinglyLinkedList.remove(0));
// console.log(newSinglyLinkedList.remove(5));
// console.log(newSinglyLinkedList.remove(-1));
// console.log(newSinglyLinkedList.remove(4));
// console.log(newSinglyLinkedList.remove(3));
// console.log(newSinglyLinkedList.remove(2));
// console.log(newSinglyLinkedList.remove(1));
// console.log(newSinglyLinkedList.remove(0));

// newSinglyLinkedList.reverse();

// console.log(newSinglyLinkedList);

// ----------

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;

// singlyLinkedList.rotate(3);
singlyLinkedList.rotate(-1);
// singlyLinkedList.rotate(1000);

console.log(singlyLinkedList);

// console.log(singlyLinkedList.head.val); // 20
// console.log(singlyLinkedList.head.next.val); // 25
// console.log(singlyLinkedList.head.next.next.val); // 5
// console.log(singlyLinkedList.head.next.next.next.val); // 10
// console.log(singlyLinkedList.head.next.next.next.next.val); // 15
// console.log(singlyLinkedList.tail.val); // 15
// console.log(singlyLinkedList.tail.next); // null

//     var singlyLinkedList = new SinglyLinkedList;
//     singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
//     singlyLinkedList.head.val; // 5
//     singlyLinkedList.tail.val; // 25;

//     singlyLinkedList.rotate(-1);
//     singlyLinkedList.head.val; // 25
//     singlyLinkedList.head.next.val; // 5
//     singlyLinkedList.head.next.next.val; // 10
//     singlyLinkedList.head.next.next.next.val; // 15
//     singlyLinkedList.head.next.next.next.next.val; // 20
//     singlyLinkedList.tail.val; // 20
//     singlyLinkedList.tail.next // null

//     var singlyLinkedList = new SinglyLinkedList;
//     singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
//     singlyLinkedList.head.val; // 5
//     singlyLinkedList.tail.val; // 25;

//     singlyLinkedList.rotate(1000);
//     singlyLinkedList.head.val; // 5
//     singlyLinkedList.head.next.val; // 10
//     singlyLinkedList.head.next.next.val; // 15
//     singlyLinkedList.head.next.next.next.val; // 20
//     singlyLinkedList.head.next.next.next.next.val; // 25
//     singlyLinkedList.tail.val; // 25
//     singlyLinkedList.tail.next // null
