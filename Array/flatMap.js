// The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

// flatMap Polyfill implementation, I have named it as "customFlatMap":

Array.prototype.customFlatMap = function (cb, thisArg) {
  // Initialize an empty array to store the flattened results
  const flattenedArr = [];

  // Iterate through each element of the array
  for (let i = 0; i < this.length; i++) {
    // Call the callback function with the current element, index, and array
    // Use call() to allow setting 'this' in the callback
    let valueAfterCb = cb.call(thisArg, this[i], i, this);

    // Check if the result of the callback is an array
    if (Array.isArray(valueAfterCb)) {
      // If it's an array, spread its elements into the flattenedArr
      // This flattens one level deep
      flattenedArr.push(...valueAfterCb);
    } else {
      // If it's not an array, simply add the value to flattenedArr
      flattenedArr.push(valueAfterCb);
    }
  }

  // Return the final flattened array
  return flattenedArr;
};

const arr1 = [1, 2, 1];

const result = arr1.customFlatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]
