// The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

// findLast Polyfill implementation, I have named it as "customFindLast":

Array.prototype.customFindLast = function (cb, thisArg) {
  // Iterate over each element in the array
  for (let i = this.length - 1; i >= 0; i--) {
    // Check if the callback function returns true for the current element
    // If so, return the current element
    if (cb.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
  // If no element satisfies the condition, return undefined
  return undefined;
};

// Array to test the custom findLast method
const arr = [5, 12, 50, 130, 44];

// Use the custom findLast method to find the last element greater than 45
const found = arr.customFindLast((element) => element > 45);

console.log(found); //130
