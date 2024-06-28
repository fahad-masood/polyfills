// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// every Polyfill implementation, I have named it as "customEvery":

Array.prototype.customEvery = function (cb, thisArg) {
  // Iterate over each element in the array
  for (let i = 0; i < this.length; i++) {
    // If the callback returns false for any element, return false
    if (!cb.call(thisArg, this[i], i, this)) {
      return false;
    }
  }
  // If the callback returns true for all elements, return true
  return true;
};

// A sample callback function to check if a value is below a certain threshold
const isBelowThreshold = (currentValue) => currentValue < 40;

// An array to test the customEvery method
const arr = [1, 30, 39, 29, 10, 13];

// Log the result of calling customEvery with the isBelowThreshold callback on the array
console.log(arr.customEvery(isBelowThreshold));
// Expected output: true
