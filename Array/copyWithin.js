// The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

// For negative numbers, if end is not provided, it will take the value of arr.length as default.

// copyWithin Polyfill implementation, I have named it as "customCopyWithin":

const arr = [0, 1, 2, 3, 4];

Array.prototype.customCopyWithin = function (target, start, end) {
  if (start < 0 && end === undefined) {
    end = this.length;
  }
  if (target < 0) {
    target = target + this.length;
  }
  if (start < 0) {
    start = start + this.length;
  }
  if (end < 0) {
    end = end + this.length;
  }

  if (!end) {
    this[target] = this[start];
  }
  for (let i = start; i < end && target < this.length; i++) {
    this[target] = this[i];
    target++;
  }
  return this;
};

console.log(arr.customCopyWithin(-2, -4));
