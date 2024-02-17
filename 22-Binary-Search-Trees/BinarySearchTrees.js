"use strict";

// Time complexity (best and average) : Insersertion and Searching is O(log n)

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // there is no root, set newNode as root and return
    if (this.root === null) {
      this.root = newNode;
    } else {
      // assign temp as root to start
      let current = this.root;
      while (true) {
        // return undefined if value already exist
        if (value === current.value) {
          return undefined;
        }
        // compare if the input value is greater than current value
        if (value > current.value) {
          // go to the right if greater
          if (current.right === null) {
            // found new home if right node is null
            current.right = newNode;
            break;
          } else {
            // move on to the next right node
            current = current.right;
          }
        } else {
          // go to the left if smaller
          if (current.left === null) {
            // found new home if left node is null
            current.left = newNode;
            break;
          } else {
            // move on to the next left node
            current = current.left;
          }
        }
      }
    }
    return this;
  }

  find(value) {
    if (this.root !== null) {
      let current = this.root;
      while (true) {
        // found the value
        if (current.value === value) {
          return current;
        } else if (value > current.value) {
          // go to right if value is bigger than current
          if (current.right === null) {
            // break loop if dead end
            break;
          } else {
            // move to next value on the right
            current = current.right;
          }
        } else {
          // go to left if value is smaller than current
          if (current.left === null) {
            // break loop if dead end
            break;
          } else {
            // move to next value on the left
            current = current.left;
          }
        }
      }
    }
    return undefined;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(15);
bst.insert(7);
bst.insert(20);
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(18);
console.log(bst.insert(10)); // undefined
console.log(bst.insert(3)); // undefined
console.log(bst);

console.log(bst.find(10));
console.log(bst.find(12));
console.log(bst.find(15));
console.log(bst.find(13));

// --

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// // binarySearchTree.root.value // 15
// // binarySearchTree.root.right.value // 20
// // binarySearchTree.root.left.right.value // 12
// console.log(binarySearchTree);

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15).insert(20).insert(10).insert(12);
// // binarySearchTree.root.value // 15
// // binarySearchTree.root.right.value // 20
// // binarySearchTree.root.left.right.value // 12
// console.log(binarySearchTree);

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15).insert(20).insert(10).insert(12);
// const foundNode = console.log(binarySearchTree.find(20));
// foundNode.value; // 20
// foundNode.left; // null
// foundNode.right; // null

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15).insert(20).insert(10).insert(12);
// const foundNode = console.log(binarySearchTree.find(120));
// foundNode; // undefined
