// The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

// fill Polyfill implementation, I have named it as "customFill":

Array.prototype.customFill = function (value, start = 0, end = this.length) {
  // Handle negative start
  if (start < 0) {
    start = Math.max(this.length + start, 0);
  }

  // Handle negative end
  if (end < 0) {
    end = Math.max(this.length + end, 0);
  }

  // Ensure end does not exceed array length
  end = Math.min(end, this.length);

  // Fill the array
  for (let i = start; i < end; i++) {
    this[i] = value;
  }

  return this;
};

console.log([1, 2, 3].customFill(4)); // [4, 4, 4]
console.log([1, 2, 3].customFill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].customFill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].customFill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].customFill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].customFill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].customFill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].customFill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).customFill(4)); // [4, 4, 4]
