// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// map Polyfill implementation, I have named it as "customMap":

Array.prototype.customMap = function (cb, thisArg) {
  // Initialize an empty array to store the results
  let resultArr = [];

  // Iterate through each element of the array
  for (let i = 0; i < this.length; i++) {
    // Call the callback function for each element
    // cb.call(thisArg, currentValue, index, array)
    // and push the result to the new array
    resultArr.push(cb.call(thisArg, this[i], i, this));
  }

  // Return the new array with mapped values
  return resultArr;
};

// Example usage:
const array1 = [1, 4, 9, 16];

// Pass a function to map
// This arrow function doubles each element
const map1 = array1.customMap((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
