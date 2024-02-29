"use strict";

class Graph {
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

  // Push vertex2 into vertex1 arrary and vice versa
  // Don't worry about handling errors/invalid vertices
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // remove vertex from Edges
  // Don't worry about handling errors/invalid vertices
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (element) => element !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (element) => element !== vertex1
    );
  }

  // remove vertex from the array of all verticies, then delete the vertex
  // Don't worry about handling errors/invalid vertices
  removeVertex(vertex) {
    const keys = Object.keys(this.adjacencyList);
    keys.forEach((key) => {
      // console.log(`${key} : ${this.adjacencyList[key]}`);
      if (key === vertex) {
        this.adjacencyList[key].map((element) => {
          this.removeEdge(key, element);
        });
      }
    });
    delete this.adjacencyList[vertex];
  }

  // Pseudocode (Depth First Traversal - Recursive)
  // 1 - The function should accept a starting node
  // 2 - Create a list to store end result, to be returned at the very end
  // 3 - Create an object to store visited vertices
  // 4 - Create a helper function which accepts a vertex
  // 4.1 - The helper function should return early if the vertex is empty
  // 4.2 - The helper function should place the vertex it accepts into the visited object
  //       and push that object into the result array
  // 4.3 - Loop over all of the values in the adjacencyList for that vertex
  // 4.4 - If any of those valueshave not been visited, recursively invoke the helper function with that vertex
  // 5 - Invoke the helper function with the starting vertex
  // 6 - Return the result array
  dfsRecursive(vertex) {
    const retVal = new Array();
    const visited = {};
    const tmpadjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (visited[vertex] === undefined) {
        visited[vertex] = true;
        retVal.push(vertex);
        // console.log(`added : ${vertex}`);
        // console.log(`vertex list : ${tmpadjacencyList[vertex]}`);
        tmpadjacencyList[vertex].map((element) => dfs(element));
      } else {
        // console.log(`visited : ${vertex}`);
        return;
      }
    }
    dfs(vertex);
    return retVal;
  }

  // Pseudocode (Depth First Traversal - Recursive)
  // 1 - The function should accept a starting node
  // 2 - Create a stack to help use keep track of vertices (use a list/array)
  // 3 - Create a list to store end result, to be returned at the very end
  // 4 - Create an object to store visited vertices
  // 5 - Add the staring vertex to the stack, (and mark it visited -> comment out or else logic not work)
  // 6 - While the stack has something in it :
  // 6.1 - Pop the next vertex from the stack
  // 6.2 - If that vertex hasn't been visited yet :
  // 6.2.1 - Mark it as visited
  // 6.2.2 - Add it to the result list
  // 6.2.3 - Push all of it neighbours into the stack
  // 7 - Return the result array
  dfsIterative(vertex) {
    const vStack = new Array();
    const retVal = new Array();
    const visited = {};
    vStack.push(vertex);
    // visited[vertex] = true;

    while (vStack.length) {
      const tmpVertex = vStack.pop();
      // console.log(`tmpVertex : ${tmpVertex}`);
      if (visited[tmpVertex] === undefined) {
        visited[tmpVertex] = true;
        retVal.push(tmpVertex);
        this.adjacencyList[tmpVertex].map((element) => {
          vStack.push(element);
        });
      }
    }
    return retVal;
  }

  // Pseudocode
  // 1 - This function should accept a starting index
  // 2 - Create a queue (you can use an array) and place the starting index in it
  // 3 - Create an array to store to store the nodes visited, to be returned at the end
  // 4 - Create an object to store the nodes visited
  // 5 - Mark the starting index as visited
  // 6 - Loop as long as there is anything in the queue
  // 7 - Remove the first vertex from the queue and push it into the array that stores the nodes visited
  // 8 - Loop over each vertex in the adjacency list for the vertex you are visiting
  // 9 - If it is not inside the object that stores the nodes visited, mark it as visited and enqueue that vertex
  // 10 - Once you have finished looping, return the array of visited nodes
  bfs(vertex) {
    const vQueue = new Array();
    const retVal = new Array();
    const visited = {};
    vQueue.push(vertex);
    // visited[vertex] = true;

    while (vQueue.length) {
      const tmpVertex = vQueue.shift();
      // console.log(`tmpVertex : ${tmpVertex}`);
      if (visited[tmpVertex] === undefined) {
        visited[tmpVertex] = true;
        retVal.push(tmpVertex);
        this.adjacencyList[tmpVertex].map((element) => {
          vQueue.push(element);
        });
      }
    }
    return retVal;
  }
}

const g = new Graph();
// g.addVertex("Tokyo");
// g.addVertex("Dallas");
// g.addVertex("Aspen");

// g.addVertex("New York");
// g.adjacencyList["Tokyo"].push("TEST");
// g.addVertex("Tokyo");

// g.addEdge("Tokyo", "Dallas");
// g.addEdge("Dallas", "Aspen");

// g.removeEdge("Tokyo", "Dallas");

// g.removeVertex("Tokyo");

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// console.log(g);
// A : [B, C]
// B : [A, D]
// C : [A, E]
// D : [B, E, F]
// E : [C, D, F]
// F : [D, E]

// console.log(g.dfsRecursive("A"));
// Should return [A, B, D, E, C, F]

// console.log(g.dfsIterative("A"));
// Should return [A, C, E, F, D, B]

// console.log(g.dfsIterative("A"));

// console.log(g.bfs("A"));

// --

// const graph = new Graph();

// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");

// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "D");

// // graph.removeEdge("B", "A");
// // graph.removeEdge("C", "D");

// graph.removeVertex("C");
// graph.removeVertex("B");

// console.log(graph);

const graph = new Graph();
graph.addVertex("S");
graph.addVertex("P");
graph.addVertex("U");
graph.addVertex("X");
graph.addVertex("Q");
graph.addVertex("Y");
graph.addVertex("V");
graph.addVertex("R");
graph.addVertex("W");
graph.addVertex("T");

graph.addEdge("S", "P");
graph.addEdge("S", "U");

graph.addEdge("P", "X");
graph.addEdge("U", "X");

graph.addEdge("P", "Q");
graph.addEdge("U", "V");

graph.addEdge("X", "Q");
graph.addEdge("X", "Y");
graph.addEdge("X", "V");

graph.addEdge("Q", "R");
graph.addEdge("Y", "R");

graph.addEdge("Y", "W");
graph.addEdge("V", "W");

graph.addEdge("R", "T");
graph.addEdge("W", "T");

// console.log(graph.dfsRecursive("S"));
// console.log(graph.dfsIterative("S"));

/**
 * results:
 *
 * ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"] // recursive version
 * ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"] // iterative (stack) version
 *
 **/

// console.log(graph.bfs("S")); // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]
