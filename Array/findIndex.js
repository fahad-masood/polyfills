// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// findIndex Polyfill implementation, I have named it as "customFindIndex":

Array.prototype.customFindIndex = function (cb, thisArg) {
  // Iterate over each element in the array
  for (let i = 0; i < this.length; i++) {
    // Check if the callback function returns true for the current element
    // If so, return the index of the current element
    if (cb(this[i], i, this || thisArg)) {
      return i;
    }
  }
  // If no element satisfies the condition, return -1
  return -1;
};

// Array to test the custom findIndex method
const arr = [5, 12, 8, 130, 44];

// Callback function to check if an element is greater than 13
const isLargeNumber = (element) => element > 13;

// Use the custom findIndex method to find the index of the first element greater than 13
console.log(arr.customFindIndex(isLargeNumber)); // 3
