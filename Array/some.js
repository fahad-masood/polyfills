// The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// some Polyfill implementation, I have named it as "customSome":

Array.prototype.customSome = function (cb, thisArg) {
  // Iterate through each element of the array
  for (let i = 0; i < this.length; i++) {
    // Call the callback function with the current element, index, and the array
    // If the callback returns true for any element, return true
    if (cb.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  // If none of the elements satisfy the condition, return false
  return false;
};

const array1 = [1, 2, 3, 4, 5];

// Example usage of customSome
const even = array1.customSome(function (element) {
  return element % 2 === 0;
});

console.log(even);
// Expected output: true (because 2 and 4 are even numbers)
