"use strict";

// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(inputObj) {
  // add whatever parameters you deem necessary - good luck!

  // Deep copy  inputObj -> inputObjDC
  let inputObjDC = JSON.parse(JSON.stringify(inputObj));

  // Porcess inputObjDC
  function helper(helperinput) {
    for (const property in helperinput) {
      if (typeof helperinput[property] === "object") {
        helper(helperinput[property]);
      }

      if (typeof helperinput[property] === "number") {
        // console.log(`>> ${helperinput[property]}`);
        helperinput[property] = helperinput[property].toString();
      }
    }
  }
  helper(inputObjDC);

  return inputObjDC;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
