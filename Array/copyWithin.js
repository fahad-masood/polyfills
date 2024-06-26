// The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

// For negative numbers, if end is not provided, it will take the value of arr.length as default.

// copyWithin Polyfill implementation, I have named it as "customCopyWithin":

const arr = [0, 1, 2, 3, 4];

Array.prototype.customCopyWithin = function (target, start, end) {
  // For negative start value and undefined end, value of end would be equal to array's length
  if (start < 0 && end === undefined) {
    end = this.length;
  }

  // Modify the negative indexes to a positive number
  if (target < 0) {
    target = target + this.length;
  }
  if (start < 0) {
    start = start + this.length;
  }
  if (end < 0) {
    end = end + this.length;
  }

  // If the index is positive, and end is not defined, modify the value of target
  if (!end) {
    this[target] = this[start];
  }

  // Iterate through the loop and check that target must always be less than array's length or it will add extra elements in the array
  for (let i = start; i < end && target < this.length; i++) {
    // Modify the target values from start till end(not inclusive)
    this[target] = this[i];
    target++;
  }

  // Return the array with modifications
  return this;
};

console.log(arr.customCopyWithin(-2, -4));
