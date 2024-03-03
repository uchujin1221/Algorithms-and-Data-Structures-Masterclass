"use strict";

// Light version of Priority Queue
// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(value, priority) {
//     this.values.push({ value, priority });
//     this.sort();
//   }
//   dequeue() {
//     return this.values.shift();
//   }
//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }

// --------------------------------------------------
// Same PriorityQueue as in 24-Binary Heaps section
// --------------------------------------------------
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

// --------------------------------------------------
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // add a key to the adjacency list with the name of the vertex and set it value to be an empty array
  addVertex(vertex) {
    // avoid duplicate object keys
    if (this.adjacencyList[vertex] === undefined) {
      this.adjacencyList[vertex] = new Array();
    }
  }

  // Push vertex2 into vertex1 arrary of object and vice versa
  // Don't worry about handling errors/invalid vertices
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  // Pseudocode
  // 1 - This function should accept a starting and ending vertex
  // 2 - Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity,
  //     except for the starting vertex which should have a value of 0
  // 3 - After setting a value in the distance object, add each vertex with a priority of Infinity to the priority queue,
  //     except the starting vertex, which should have a priority of 0 because that's where we begin
  // 4 - Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
  // 5 - Start loopong as long as there is anything in the priority queue
  // 5.1 - Dequeue a vertex from the priority queue
  // 5.2 - If that vertex is the same as the ending vertex - we are done !
  // 5.3 - Otherwise loop through each value in the adjacency list at that vertex
  // 5.3.1 - Calculate the distance to that vertex from the starting vertex
  // 5.3.2 - If the distance is less than what is currently stored in our distance object
  // 5.3.2.1 - Update the distances object with new lower distance
  // 5.3.2.2 - Update the previous object to contain that vertex
  // 5.3.2.3 - enqueue the vertex with the totaldistance from the start no
  Dijkstra(startVertex, endVertrx) {
    const q = new PriorityQueue();
    const distances = {};
    const previous = {};
    const retVal = new Array();

    // Setup
    for (const element in this.adjacencyList) {
      element === startVertex
        ? (distances[element] = 0)
        : (distances[element] = Infinity);

      element === startVertex
        ? q.enqueue(element, 0)
        : q.enqueue(element, Infinity);

      previous[element] = null;
    }
    // console.log(distance);
    // console.log(q);
    // console.log(previous);

    // Implementation
    while (q !== undefined) {
      const currentVertex = q.dequeue();

      // Found the endVertex
      if (currentVertex.value === endVertrx) {
        // console.log(distances);
        // console.log(previous);
        // console.log(q); // not much meaningful

        // Start from the end ...
        let current = endVertrx;
        retVal.push(current);

        // Traverse previous object keys to find values and push to result array until startVertex found
        while (true) {
          retVal.push(previous[current]);
          current = previous[current];
          if (current === startVertex) break;
        }

        // reverse the result
        retVal.reverse();
        break;
      }

      // console.log(currentVertex.value);
      this.adjacencyList[currentVertex.value].forEach((element) => {
        const tmpDistance = distances[currentVertex.value] + element.weight;
        if (tmpDistance < distances[element.node]) {
          distances[element.node] = tmpDistance;
          previous[element.node] = currentVertex.value;
          q.enqueue(element.node, tmpDistance);
        }
      });
    }

    console.log(retVal);
    return retVal;
  }
}

const wGraph = new WeightedGraph();

// wGraph.addVertex("A");
// wGraph.addVertex("B");
// wGraph.addVertex("C");

// wGraph.addEdge("A", "B", 9);
// wGraph.addEdge("A", "C", 5);
// wGraph.addEdge("B", "C", 7);
wGraph.addVertex("A");
wGraph.addVertex("B");
wGraph.addVertex("C");
wGraph.addVertex("D");
wGraph.addVertex("E");
wGraph.addVertex("F");

wGraph.addEdge("A", "B", 4);
wGraph.addEdge("A", "C", 2);
wGraph.addEdge("B", "E", 3);
wGraph.addEdge("C", "D", 2);
wGraph.addEdge("C", "F", 4);
wGraph.addEdge("D", "E", 3);
wGraph.addEdge("D", "F", 1);
wGraph.addEdge("E", "F", 1);

// console.log(wGraph);

wGraph.Dijkstra("A", "E"); // ["A", "C", "D", "F", "E"]

// const q = new PriorityQueue();
// q.enqueue("B", 3);
// q.enqueue("C", 5);
// q.enqueue("D", 2);
// q.enqueue("Q", 20);
// q.enqueue("P", 1.5);

// // console.log(q);
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("Z");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("H");
g.addVertex("Q");
g.addVertex("G");

g.addEdge("A", "Z", 7);
g.addEdge("A", "C", 8);
g.addEdge("Z", "Q", 2);
g.addEdge("C", "G", 4);
g.addEdge("D", "Q", 8);
g.addEdge("E", "H", 1);
g.addEdge("H", "Q", 3);
g.addEdge("Q", "C", 6);
g.addEdge("G", "Q", 9);

g.Dijkstra("A", "E"); // ["A", "Z", "Q", "H", "E"]
g.Dijkstra("A", "Q"); // ["A", "Z", "Q"]
g.Dijkstra("A", "G"); // ["A", "C", "G"]
g.Dijkstra("A", "D"); // ["A", "Z", "Q", "D"]
