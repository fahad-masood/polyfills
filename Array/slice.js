// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// slice Polyfill implementation, I have named it as "customSlice":

Array.prototype.customSlice = function (start = 0, end = this.length) {
  let resultArray = [];
  let count = 0;

  // Convert negative start to positive index
  if (start < 0) {
    start = this.length + start;
  }

  // Convert negative end to positive index
  if (end < 0) {
    end = this.length + end;
  }

  // Ensure start and end are within bounds
  start = Math.max(start, 0);
  end = Math.min(end, this.length);

  // If start is greater than or equal to the length of the array, return an empty array
  if (start >= this.length) {
    return resultArray;
  }

  // If start is greater than or equal to end, return an empty array
  if (start >= end) {
    return resultArray;
  }

  // Loop through the array from start to end and push elements to resultArray
  for (let i = start; i < end; i++) {
    resultArray[count] = this[i];
    count++;
  }

  // Return the resulting array
  return resultArray;
};

const array1 = [1, 2, 3, 4, 5];

const slicedArray = array1.customSlice(1, 3);

console.log(slicedArray);
// Expected output: Array [2, 3]

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.customSlice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.customSlice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.customSlice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.customSlice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.customSlice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.customSlice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
