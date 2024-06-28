// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// filter Polyfill implementation, I have named it as "customFilter":

// Array of words to filter
const words = ["spray", "elite", "exuberant", "destruction", "present"];

// Custom implementation of the filter method for arrays
Array.prototype.customFilter = function (cb, thisArg) {
  // Array to store the filtered elements
  let resultantArr = [];

  // Iterate over each element in the array
  for (let i = 0; i < this.length; i++) {
    // Check if the element at index i exists in the array (Skipping empty slots)
    if (this.hasOwnProperty(i)) {
      // If the callback function returns true for the element, add it to the resultant array
      if (cb.call(thisArg, this[i], i, this)) {
        resultantArr.push(this[i]);
      }
    }
  }

  // Return the array of filtered elements
  return resultantArr;
};

// Use the custom filter method to filter words with length greater than 6
const result = words.customFilter((word) => word.length > 6);

// Log the result to the console
console.log(result); // ["exuberant", "destruction", "present"]

// If we skip this.hasOwnProperty(i), the following empty slots would not be skipped and treated as undefined
console.log([1, , undefined].customFilter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].customFilter((x) => x !== 2)); // [1, undefined]
