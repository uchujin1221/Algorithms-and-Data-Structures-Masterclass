"use strict";

class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }

  // This function should add the given word starting from the given index to the Trie.
  // It will be recursive and notify the correct child of this Trie to add the word starting from a later index.
  // Consider what the add function should do when it reaches the end of the word as a word does not necessarily end at a leaf.
  // You must mark nodes which are the ends of words so that the words can be reconstructed later.
  addWord(word) {
    let current = this.characters;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      // create new characters object
      if (current[char] === undefined) {
        current[char] = new Trie();
      }
      // set isWord of final character to true
      if (i === word.length - 1) {
        current[char].isWord = true;
      }
      // set current as characters of itself
      current = current[char].characters;
    }
  }

  // Write a function called findWord which accepts a string and returns the characters object for the last character in that word if the string is a word in the Trie,
  // otherwise it returns undefined. Try to solve this without having to find every single word in the Trie. addWord is implement to help you test the function.

  // This function traverse until last character and return
  findWord(word) {
    const char = word[0];
    // console.log(`word=${word}, char=${char}, word.lenght=${word.length}`);
    if (this.characters[char] !== undefined && word.length > 1) {
      return this.characters[char].findWord(word.substring(1));
    } else {
      return this.characters[char];
    }
  }

  // Write a function on the Trie.prototype called getWords which returns an array of all of the words in the Trie.
  getWords() {
    const words = [];

    // helper function to traverse characters of characters
    function search(node, char = "") {
      // console.log(node, char);
      // console.log(Object.keys(node));

      // traverse each character object
      for (const letter in node) {
        // console.log(letter, node[letter], node[letter].isWord);
        // push character to result array if isWord
        if (node[letter].isWord) {
          // console.log(`character end found : ${char.concat(letter)}`);
          words.push(char.concat(letter));
        }
        search(node[letter].characters, char.concat(letter));
      }
    }
    search(this.characters);

    return words.length > 0 ? words : null;
  }

  // Write a function called removeWord which accepts a string and removes the word from the Trie. addWord is implement to help you test the function.
  // Similari logic as getWord
  removeWord(word) {
    let found = 0;

    // helper function to traverse characters of characters
    function search(node, char = "") {
      // console.log(node, char);
      // console.log(Object.keys(node));

      // traverse each character object
      for (const letter in node) {
        // console.log(letter, node[letter], node[letter].isWord);
        // console.log(char.concat(letter));
        if (char.concat(letter) === word) {
          // console.log(node[letter].characters);
          // console.log(
          //   Object.getOwnPropertyNames(node[letter].characters).length
          // );
          // Set isWord to false to remove word from Trie
          node[letter].isWord = false;
          found = 1;
        }

        if (!found) {
          search(node[letter].characters, char.concat(letter));
        }
      }
    }
    search(this.characters);

    // --------------------------------------------------
    // To take care test case : t.characters.a.characters.r; // undefined
    // Created 3 steps process to final cleanup for all child with isWord=false
    // --------------------------------------------------
    let node = this.characters;

    // STEP 1 : find number of charcters object for each letter and store into array
    const numCharctaresObj = [];
    for (let i = 0; i < word.length; i++) {
      // console.log(
      //   word[i],
      //   node[word[i]],
      //   Object.getOwnPropertyNames(node[word[i]].characters).length
      // );

      // keep track of the number of characters objects of the remove word
      numCharctaresObj.push(
        Object.getOwnPropertyNames(node[word[i]].characters).length
      );

      node = node[word[i]].characters;
    }
    // The following shows number of characters objects per letter
    console.log(numCharctaresObj);

    // Need to perform clean up only if array contains characters objects <= 1
    if (numCharctaresObj.includes(0) || numCharctaresObj.includes(1)) {
      console.log(`Word [${word}] needs deep clean`);

      // STEP 2 : locate the character (final) for clean up
      let minimumCharToRemove;
      // Reverse search numCharctaresObj array to get 1st character to clean up
      for (let i = numCharctaresObj.length - 1; i > 0; i--) {
        // valide only if "current letter <= 1" and "current letter <= previous letter"
        if (
          numCharctaresObj[i] <= 1 &&
          numCharctaresObj[i] <= numCharctaresObj[i - 1]
        ) {
          console.log(`Need to clean : ${word[i]} (${i})`);
          minimumCharToRemove = word[i];
        }
        // no further process is need if current letter has more than 1 characters object
        if (numCharctaresObj[i] > 1) break;
      }
      console.log(`Only need to clean : ${minimumCharToRemove}`);

      // STEP 3 : delete the object
      node = this.characters;
      for (let i = 0; i < word.length; i++) {
        // console.log(
        //   word[i],
        //   node[word[i]],
        //   Object.getOwnPropertyNames(node[word[i]].characters).length
        // );

        // find object to delete
        if (minimumCharToRemove === word[i]) {
          console.log(`Delete : ${word[i]}`);
          // console.log(node[word[i]].characters);
          delete node[word[i]];
          break;
        }
        node = node[word[i]].characters;
      }
    }
    // --------------------------------------------------
  }

  // Write a function on the trie class which accepts a string and returns an array of all the possible options in the trie for that string.
  autoComplete(prefix) {
    return this.getWords().filter((element) => element.startsWith(prefix));
  }
}

//     var firstTrie = new Trie();
//     firstTrie.addWord("fun")
//     firstTrie.characters // {f: Trie}
//     !!firstTrie.characters["f"] // true

//     firstTrie.characters.f.characters.u // {u: Trie}
//     !!firstTrie.characters.f.characters.u // true

//     firstTrie.characters.f.characters.u.characters.n.isWord // true
//     !!firstTrie.characters.f.characters.u.characters.n // true
//     !!firstTrie.characters.f.characters.u.characters.n.characters // {}

//     !!firstTrie.characters.f.characters.u.characters.l // true

//     var secondTrie = new Trie();
//     secondTrie.addWord("ha")
//     secondTrie.addWord("hat")
//     secondTrie.addWord("has")
//     secondTrie.addWord("have")
//     secondTrie.addWord("hate")

//     secondTrie.characters.h.characters.a.isWord // true
//     secondTrie.characters.h.characters.a.characters.t.isWord // true
//     secondTrie.characters.h.characters.a.characters.v.isWord // false
//     secondTrie.characters.h.characters.a.characters.v.characters.e.isWord // true
//     secondTrie.characters.h.characters.a.characters.t.characters.e.isWord // true

//     Object.keys(secondTrie.characters.h.characters.a.characters).length // 3

const t = new Trie();
t.addWord("fun");
t.addWord("fast");
t.addWord("fat");
t.addWord("fate");
t.addWord("father");
t.addWord("forget");
t.addWord("awesome");
t.addWord("argue");
// t.addWord("argument");
// console.log(t);

// console.log(t.findWord("taco")); // undefined
// console.log(t.findWord("fat").characters); // {t: Trie}
// console.log(t.findWord("father").characters); // {}
// console.log(t.findWord("father").isWord); // true

// console.log(t.getWords()); // ["fun", "fast", "fat", "fate", "father", "forget", "awesome", "argue"]
// console.log(t.getWords().length); // 8

// t.removeWord("fat");
// console.log(t);
// console.log(t.characters.f.characters.a.characters.t.isWord); // false
// console.log(t.characters.f.characters.a.characters.t.characters.e.isWord); // true
// t.removeWord("argue");
// console.log(t.characters.a.characters.r); // undefined

// console.log(t.getWords());

console.log(t.autoComplete("fa")); // ["fast","fat", "fate", "father"]
console.log(t.autoComplete("a")); // ["awesome", "argue"]
console.log(t.autoComplete("arz")); // []
