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

  // Breath First Search
  // Pesudocode
  // 1 - Create a queue (an array) and a variable to store the values of the nodes visited
  // 2 - Place the root node in the queue
  // 3 - Loop as long as there is anything in the queue
  // 3.1 - Dequeue a node from the queue and push the value of the node into the variable that stores the node
  // 3.2 - If there is a left property on the node dequeued - add it to the queue
  // 3.3 - If there is a right property on the node dequeued - add it to the queue
  // 4 - Return the variable that stores the value
  bfs() {
    const queue = [];
    const visited = [];

    if (this.root !== null) {
      queue.push(this.root);
    }

    while (queue.length !== 0) {
      const node = queue.shift();
      visited.push(node.value);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    return visited;
  }

  // Depth First Search - PreOrder
  // PseudoCode
  // 1 - Create a variable to store the values of nodes visited
  // 2 - Store the root of the BST in a variable called current
  // 3 - Write a helper function which accepts a node
  // 3.1 - Push the value of the node to the variable that stores the value
  // 3.2 - If the node has a left property, call the helper function with the left property on the node
  // 3.3 - If the node has a right  property, call the helper function with the right property on the node
  // 4 - Invoke the helper function with the current variable
  // 5 - Return the array of values
  dfsPreOrder() {
    const visited = [];
    let current;

    function traverse(node) {
      visited.push(node.value);
      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null) {
        traverse(node.right);
      }
    }

    if (this.root !== null) {
      current = this.root;
      traverse(current);
    }

    return visited;
  }

  // Depth First Search - PostOrder
  // PseudoCode
  // Similar to dfsPreOrder but move visited.push to the bottom of the traverse function
  dfsPostOrder() {
    const visited = [];
    let current;

    function traverse(node) {
      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null) {
        traverse(node.right);
      }
      visited.push(node.value);
    }

    if (this.root !== null) {
      current = this.root;
      traverse(current);
    }

    return visited;
  }

  // Depth First Search - InOrder
  // PseudoCode
  // Similar to dfsPreOrder but move visited.push after traverse left of the node, before traverse right of the node
  dfsInOrder() {
    const visited = [];
    let current;

    function traverse(node) {
      if (node.left !== null) {
        traverse(node.left);
      }
      visited.push(node.value);
      if (node.right !== null) {
        traverse(node.right);
      }
    }

    if (this.root !== null) {
      current = this.root;
      traverse(current);
    }

    return visited;
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
// console.log(bst.insert(10)); // undefined
// console.log(bst.insert(3)); // undefined
console.log(bst);

// console.log(bst.find(10));
// console.log(bst.find(12));
// console.log(bst.find(15));
// console.log(bst.find(13));

console.log(`BFS : ${bst.bfs()}`);
console.log(`DFS - PreOrder : ${bst.dfsPreOrder()}`);
console.log(`DFS - PostOrder : ${bst.dfsPostOrder()}`);
console.log(`DFS - InOrder : ${bst.dfsInOrder()}`);

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

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);
// console.log(binarySearchTree.bfs()); // [(15, 10, 20, 1, 12, 50, 5)];

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);
// console.log(binarySearchTree.dfsPreOrder()); // [15, 10, 1, 5, 12, 20, 50]

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);
// console.log(binarySearchTree.dfsPostOrder()); // [5, 1, 12, 10, 50, 20, 15]

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);
// console.log(binarySearchTree.dfsInOrder()); // [1, 5, 10, 12, 15, 20, 50]
