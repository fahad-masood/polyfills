// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// find Polyfill implementation, I have named it as "customFind":

Array.prototype.customFind = function (cb, thisArg) {
  // Iterate over each element in the array
  for (let i = 0; i < this.length; i++) {
    // Check if the callback function returns true for the current element
    // If so, return the current element
    if (cb(this[i], i, this || thisArg)) {
      return this[i];
    }
  }
  // If no element satisfies the condition, return undefined
  return undefined;
};

// Array to test the custom find method
const arr = [5, 12, 8, 130, 44];

// Use the custom find method to find the first element greater than 10
const found = arr.customFind((element) => element > 10);

console.log(found); //12
