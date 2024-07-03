// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

// reduce Polyfill implementation, I have named it as "customReduce":

Array.prototype.customReduce = function (cb, initialVal) {
  // Initialize the accumulator variable
  let accumulator = initialVal;

  // Iterate over each element of the array
  for (let i = 0; i < this.length; i++) {
    // If the initial value is not provided, use the first element as the initial value
    if (accumulator === undefined && i === 0) {
      accumulator = this[i];
    } else {
      // Apply the callback function to accumulate the results
      accumulator = cb(accumulator, this[i], i, this);
    }
  }

  // Return the accumulated result
  return accumulator;
};

// Examples:

const numbers = [1, 2, 3, 4];

// Use customReduce to sum all numbers in the array
const sum = numbers.customReduce((acc, curr) => acc + curr, 0);

console.log(sum);
// Expected output: 10

// Use customReduce to find the maximum number in the array
const max = numbers.customReduce(
  (acc, curr) => (curr > acc ? curr : acc),
  -Infinity
);

console.log(max);
// Expected output: 4

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.customReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
