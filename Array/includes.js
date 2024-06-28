// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// includes Polyfill implementation, I have named it as "customIncludes":

Array.prototype.customIncludes = function (searchElement, fromIndex = 0) {
  // If fromIndex is greater than or equal to the array length, return false
  if (fromIndex >= this.length) {
    return false;
  }

  // Handle negative fromIndex
  // If fromIndex is negative, start from the end of the array
  // Ensure the starting index is not less than 0
  if (fromIndex < 0) {
    fromIndex = Math.max(this.length + fromIndex, 0);
  }

  // Iterate through the array starting from fromIndex
  for (let i = fromIndex; i < this.length; i++) {
    // Check if the current element matches the searchElement
    // Special case: if both are NaN, consider them equal
    if (
      this[i] === searchElement ||
      (Number.isNaN(searchElement) && Number.isNaN(this[i]))
    ) {
      return true;
    }
  }

  // If no match is found, return false
  return false;
};

const array1 = [1, 2, 3];

console.log(array1.customIncludes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.customIncludes("cat"));
// Expected output: true

console.log(pets.customIncludes("at"));
// Expected output: false

console.log([1, 2, 3].customIncludes(2)); // true
console.log([1, 2, 3].customIncludes(4)); // false
console.log([1, 2, 3].customIncludes(3, 3)); // false
console.log([1, 2, 3].customIncludes(3, -1)); // true
console.log([1, 2, NaN].customIncludes(NaN)); // true
console.log(["1", "2", "3"].customIncludes(3)); // false
