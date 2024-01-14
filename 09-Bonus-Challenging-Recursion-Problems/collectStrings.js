"use struct";

// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

// Helper method recursion
// function collectStrings(inputObj) {
//   const result = [];

//   function helper(helperinput) {
//     for (const property in helperinput) {
//       if (typeof helperinput[property] === "object") {
//         helper(helperinput[property]);
//       }

//       if (typeof helperinput[property] === "string") {
//         // console.log(`>> ${helperinput[property]}`);
//         result.push(helperinput[property]);
//       }
//     }
//   }
//   helper(inputObj);

//   return result;
// }

// Pure recursion
function collectStrings(inputObj) {
  let result = [];

  for (const property in inputObj) {
    if (typeof inputObj[property] === "object") {
      result = result.concat(collectStrings(inputObj[property]));
    }

    if (typeof inputObj[property] === "string") {
      //   console.log(`>> ${inputObj[property]}`);
      result.push(inputObj[property]);
    }
  }
  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
