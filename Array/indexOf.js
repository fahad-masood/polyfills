// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

// indexOf Polyfill implementation, I have named it as "customIndexOf":

Array.prototype.customIndexOf = function (searchElement, fromIndex = 0) {
  // If fromIndex is greater than or equal to the array length, return -1
  if (fromIndex >= this.length) {
    return -1;
  }

  // Handle negative fromIndex
  // If fromIndex is negative, start from the end of the array
  // Ensure the starting index is not less than 0
  if (fromIndex < 0) {
    fromIndex = Math.max(this.length + fromIndex, 0);
  }

  // Iterate through the array starting from fromIndex
  for (let i = fromIndex; i < this.length; i++) {
    // If the current element strictly equals the searchElement, return its index
    if (this[i] === searchElement) {
      return i;
    }
  }

  // If the element is not found, return -1
  return -1;
};

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.customIndexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.customIndexOf("bison", 2));
// Expected output: 4

console.log(beasts.customIndexOf("giraffe"));
// Expected output: -1
