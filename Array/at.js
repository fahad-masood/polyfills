// The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

// at Polyfill implementation, I have named it as "customAt":

const arr = [1, 2, 3, 4, 5];

Array.prototype.customAt = function (n) {
  // Get the length of array
  let length = this.length;

  // If n is positive then the index would be n and if n is negative, the index would be n+length
  // Eg: If we want to find the value at -1(last index) and the array length is 5 so n+length would be -1+5 = 4(Last index of array having length 5).
  let actualIndex = n >= 0 && n < length ? n : n + length;

  // If the index is found, it will return the value and undefined if the index isn't valid.
  return this[actualIndex];
};

console.log(arr.customAt(4)); //5
