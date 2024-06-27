// The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// findLastIndex Polyfill implementation, I have named it as "customFindLastIndex":

Array.prototype.customFindLastIndex = function (cb, thisArg) {
  // Iterate over each element in the array
  for (let i = this.length - 1; i >= 0; i--) {
    // Check if the callback function returns true for the current element
    // If so, return the index of the current element
    if (cb(this[i], i, this || thisArg)) {
      return i;
    }
  }
  // If no element satisfies the condition, return -1
  return -1;
};

// Array to test the custom findLastIndex method
const arr = [5, 12, 50, 130, 44];

// Callback function to check if an element is greater than 45
const isLargeNumber = (element) => element > 45;

// Use the custom findLastIndex method to find the index of the last element greater than 45
console.log(arr.customFindLastIndex(isLargeNumber)); // 3
