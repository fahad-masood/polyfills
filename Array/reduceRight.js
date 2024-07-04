// The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

// reduceRight Polyfill implementation, I have named it as "customReduceRight":

Array.prototype.customReduceRight = function (cb, initialVal) {
  let accumulator = initialVal;
  let i = this.length - 1;

  // If no initial value is provided, use the last element of the array as the initial accumulator
  if (accumulator === undefined) {
    accumulator = this[i];
    i--; // Start the loop from the second last element
  }

  // Iterate through the array from the current position to the first element
  for (; i >= 0; i--) {
    accumulator = cb(accumulator, this[i], i, this);
  }

  return accumulator;
};

const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array1.customReduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(result);
