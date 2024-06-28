// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// flat Polyfill implementation, I have named it as "customFlat":

Array.prototype.customFlat = function (depth = 1) {
  // Array to store the flattened elements
  const flattenedArr = [];

  // Check if the called object is an array
  if (!Array.isArray(this)) {
    // Throw an error if the method is called on a non-array object
    throw new Error(`${this}.customFlat is not a function`);
  }

  // Iterate over each element in the array
  for (let i = 0; i < this.length; i++) {
    // If the element is an array and the depth is greater than 0
    if (Array.isArray(this[i]) && depth > 0) {
      // Recursively flatten the array element and decrease the depth by 1
      // Using ... to spread the result in the existing array
      flattenedArr.push(...this[i].customFlat(depth - 1));
    } else {
      // Otherwise, just add the element to the flattened array
      flattenedArr.push(this[i]);
    }
  }

  // Return the flattened array
  return flattenedArr;
};

const arr1 = [0, 1, 2, [3, 4]];
// console.log("Length: ", arr1.length);

console.log(arr1.customFlat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.customFlat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.customFlat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
