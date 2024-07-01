// The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// lastIndexOf Polyfill implementation, I have named it as "customLastIndexOf":

Array.prototype.customLastIndexOf = function (
  searchElement,
  fromIndex = this.length - 1
) {
  // If fromIndex is negative, calculate the index from the end
  if (fromIndex < 0) {
    fromIndex = this.length + fromIndex;
  }

  // Ensure fromIndex doesn't exceed the array length - 1
  fromIndex = Math.min(fromIndex, this.length - 1);

  // Iterate backwards from fromIndex
  for (let i = fromIndex; i >= 0; i--) {
    // Use strict equality to compare elements
    if (searchElement === this[i]) return i;
  }

  // If element is not found, return -1
  return -1;
};

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.customLastIndexOf("Dodo")); // 3
console.log(animals.customLastIndexOf("Tiger")); // 1

const numbers = [2, 5, 9, 2];
console.log(numbers.customLastIndexOf(2)); // 3
console.log(numbers.customLastIndexOf(7)); // -1
console.log(numbers.customLastIndexOf(2, 3)); // 3
console.log(numbers.customLastIndexOf(2, 2)); // 0
console.log(numbers.customLastIndexOf(2, -2)); // 0
console.log(numbers.customLastIndexOf(2, -1)); // 3
