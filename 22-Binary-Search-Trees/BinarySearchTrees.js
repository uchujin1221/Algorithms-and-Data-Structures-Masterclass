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

  // remove : This function should remove a node from a binary search tree. Your remove function should be able to handle removal of the root node,
  // removal of a node with one child and removal of a node with two children. The function should return the node removed.

  // Pseudocode from Stack Overflow
  // - No children: release the memory hold by the node and set the parent's child link that pointed to it as NULL;
  // - One child: release the memory hold by the node and set the parent's child link that pointed to it as the address of its unique child;
  // - Two children: this is indeed the "complicated" case. Find the rightmost node of the left child (or the leftmost node of the right child),
  //   take its value, remove it (it is "case 1", so it is easy and can be done recursively) and set the current node's value as the one of that node.
  //   This is O(tree_height) = O(n), but it is not a problem (at least in theory) because this would be neverthless the complexity of finding a node.
  remove(value) {
    let node = this.find(value);
    let parentNode = this.findParent(value);
    let side = 0; // 0=left, 1=right;

    // check if node value belongs to left or right of parent
    if (value < parentNode.value) {
      side = 0;
    } else {
      side = 1;
    }

    console.log(
      `node=${node.value}, parentNode=${parentNode.value}, parent side=${
        side === 0 ? "left" : "right"
      }`
    );

    // No children
    if (node.left === null && node.right === null) {
      console.log(`Found node with no children`);
      // set parent point to null
      if (!side) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
      return node;
    }

    // One child
    if (
      (node.left !== null && node.right === null) ||
      (node.right !== null && node.left === null)
    ) {
      console.log("One child node found");
      // re-assign parent to left or right side of the node to be removed
      if (!side) {
        if (node.left !== null) {
          parentNode.left = node.left;
        } else {
          parentNode.left = node.right;
        }
      } else {
        if (node.right !== null) {
          parentNode.right = node.right;
        } else {
          parentNode.right = node.left;
        }
      }
      return node;
    }

    // Two children !
    if (node.left && node.right) {
      console.log("Two childeren node found");
      // 1 - Find rightmost of the node
      let rightMostNode = null;
      let tmpNode = node;
      while (true) {
        if (tmpNode.right !== null) {
          rightMostNode = node.right;
          tmpNode = tmpNode.right;
        } else {
          break;
        }
      }

      // 2 - if rightmost has 2 children ... WOW ...
      if (rightMostNode.left !== null && rightMostNode.right !== null) {
        // 2.1 - Get leftmost of rightmost node
        console.log(`Rightmost node starts at : ${rightMostNode.value}`);
        let tmpNode = rightMostNode.left;
        let returnNode = null;
        while (true) {
          if (tmpNode.left !== null) {
            tmpNode = tmpNode.left;
          } else {
            break;
          }
        }
        console.log(`Leftmost of Rightmost node value = [${tmpNode.value}]`);
        // 2.2 - set node as tmpNode
        node.value = tmpNode.value;
        if (tmpNode.right !== null) {
          // 2.3 - set leftmost of rightmode node value to it's right child value (if exist)
          tmpNode.value = tmpNode.right.value;
          // 2.4 - set right side value of the parent as null
          tmpNode.right = null;
        } else {
          // 2.3 - set leftmost of rightmost value as null
          tmpNode.left = null;
        }
        // console.log(`nod e is ${node.value}`);
        // node value is changed in this case
        return node;
      } else {
        // if rightmost as no children ...

        // parent of right most node
        const rightMostNodeParent = this.findParent(rightMostNode.value);

        console.log(
          `Rightmost of node ${value} is ${rightMostNode.value} with parent as ${rightMostNodeParent.value}`
        );

        // set parent value of right most and right node as null
        rightMostNodeParent.value = rightMostNode.value;
        rightMostNodeParent.right = null;

        console.log(rightMostNode);
        return rightMostNode;
      }
    }
    return undefined;
  }

  findParent(value) {
    let current = this.root;
    let parent = null;
    while (true) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else {
        break;
      }
    }
    return parent;
  }

  // Simply just find 2nd larget value in the tree
  // Return 2nd last value from dfsInOrder result
  findSecondLargest() {
    const arr1 = this.dfsInOrder();
    return arr1[arr1.length - 2];
  }

  // isBalanced - returns true if the BST is balanced, otherwise returns false.
  // A balanced tree is defined as a tree where the depth of all leaf nodes or nodes with single children differ by no more than one.

  // Reuse PostOrder traverse logic
  isBalanced() {
    let visited = [];
    let current;
    let leftCount = 0;
    let rightCount = 0;

    function traverse(node) {
      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null) {
        traverse(node.right);
      }
      visited.push(node.value);
    }

    // Traverse left side of the tree only
    if (this.root.left !== null) {
      current = this.root.left;
      traverse(current);
    }
    leftCount = visited.length;
    // console.log(leftCount);

    // reset visited
    visited = [];

    // Traverse right side of the tree only
    if (this.root.right !== null) {
      current = this.root.right;
      traverse(current);
    }
    rightCount = visited.length;
    // console.log(rightCount);

    return Math.abs(leftCount - rightCount) > 1 ? false : true;
  }
}

// const bst = new BinarySearchTree();
// bst.insert(10);
// bst.insert(15);
// bst.insert(7);
// bst.insert(20);
// bst.insert(5);
// bst.insert(3);
// bst.insert(6);
// bst.insert(18);
// console.log(bst.insert(10)); // undefined
// console.log(bst.insert(3)); // undefined
// console.log(bst);

// console.log(bst.find(10));
// console.log(bst.find(12));
// console.log(bst.find(15));
// console.log(bst.find(13));

// console.log(`BFS : ${bst.bfs()}`);
// console.log(`DFS - PreOrder : ${bst.dfsPreOrder()}`);
// console.log(`DFS - PostOrder : ${bst.dfsPostOrder()}`);
// console.log(`DFS - InOrder : ${bst.dfsInOrder()}`);

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

const binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);
// console.log(binarySearchTree.dfsInOrder()); // [1, 5, 10, 12, 15, 20, 50]
// console.log(binarySearchTree.findSecondLargest());

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);
// console.log(binarySearchTree.remove(50));
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.right.right // null

// binarySearchTree.remove(5);
// binarySearchTree.root.left.left.value // 1
// binarySearchTree.root.left.left.right // null

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50);

// binarySearchTree.remove(1);
// binarySearchTree.root.left.left.value // 5
// binarySearchTree.root.left.left.left // null
// binarySearchTree.root.left.left.right // null

// binarySearchTree.remove(20);
// binarySearchTree.root.right.value // 50
// binarySearchTree.root.right.right // null
// binarySearchTree.root.right.left // null

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12)
//   .insert(1)
//   .insert(5)
//   .insert(50)
//   .insert(60)
//   .insert(30)
//   .insert(25)
//   .insert(23)
//   .insert(24)
//   .insert(70);

// binarySearchTree.remove(10);
// binarySearchTree.root.left.value // 12
// binarySearchTree.root.left.left.value // 1
// binarySearchTree.root.left.left.right.value // 5

// binarySearchTree.remove(50);
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.right.right.value // 60
// binarySearchTree.root.right.right.left.value // 30

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(22)
//   .insert(49)
//   .insert(85)
//   .insert(66)
//   .insert(95)
//   .insert(90)
//   .insert(100)
//   .insert(88)
//   .insert(93)
//   .insert(89);

// binarySearchTree.remove(85);
// binarySearchTree.root.right.right.value // 88
// binarySearchTree.root.right.right.right.left.left.value // 89

// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// console.log(binarySearchTree.isBalanced()); // true
// binarySearchTree.isBalanced(); // true

binarySearchTree.insert(5);
console.log(binarySearchTree.isBalanced()); // true
binarySearchTree.insert(6);
console.log(binarySearchTree.isBalanced()); // true
binarySearchTree.insert(7);
console.log(binarySearchTree.isBalanced()); // false

console.log(binarySearchTree.dfsPostOrder());

console.log(binarySearchTree);
