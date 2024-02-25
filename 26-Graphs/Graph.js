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
}

const g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Aspen");

// g.addVertex("New York");
// g.adjacencyList["Tokyo"].push("TEST");
// g.addVertex("Tokyo");

g.addEdge("Tokyo", "Dallas");
g.addEdge("Dallas", "Aspen");

// g.removeEdge("Tokyo", "Dallas");

g.removeVertex("Tokyo");

console.log(g);

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
