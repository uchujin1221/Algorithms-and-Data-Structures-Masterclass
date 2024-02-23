"use strict";

// Time Complexity : Insert, Deletion and Access : O(1)

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // Objective of a GOOD hash function :
  // 1 - Fast (i.e. constant time)
  // 2 - Doesn't cluster outputs at specific indicies, but distributes uninformly
  // 3 - Deterministic (same input yields same output)
  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    console.log(`Hash Key is : ${total}`);
    return total;
  }

  // Pseudocode
  // 1 - Accepts a key and a value
  // 2 - Hashes the key
  // 3 - Stores the key-value pair in the hash table array via "separate-chaining"
  set(key, value) {
    const hashKey = this._hash(key);
    if (this.keyMap[hashKey] === undefined) {
      this.keyMap[hashKey] = new Array();
    }
    this.keyMap[hashKey].push([key, value]);
  }

  // Pseudocode
  // 1 - Accepts a key
  // 2 - Hashes the key
  // 3 - Retrives the key-value pair in the hash table
  // 4 - If the keyisn't found, returned undefined
  get(key) {
    const hashKey = this._hash(key);
    const valueArray = this.keyMap[hashKey];
    return valueArray !== undefined
      ? valueArray.find((element) => element[0] === key)[1]
      : undefined;
  }

  // Loop through the hash table and return an array of keys in the table
  keys() {
    const retVal = new Set();
    this.keyMap.map((subarray) =>
      subarray.map((element) => retVal.add(element[0]))
    );
    return retVal;
  }

  // Loop through the hash table and return an array of values in the table (distict values)
  values() {
    const retVal = new Set();
    this.keyMap.map((subarray) =>
      subarray.map((element) => retVal.add(element[1]))
    );
    return retVal;
  }
}

const ht = new HashTable();

ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("duplicate1", "#DDA0DD");
ht.set("plum", "#DDA0DD--2");
console.log(ht);

console.log(ht.get("olive"));
console.log(ht.get("green"));

console.log(ht.keys());
console.log(ht.values());
