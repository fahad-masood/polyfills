// The forEach() method of Array instances executes a provided function once for each array element.

// forEach Polyfill implementation, I have named it as "customForEach":

Array.prototype.customForEach = function (cb, thisArg) {
  // Iterate through each element of the array
  for (let i = 0; i < this.length; i++) {
    // Call the callback function for each element
    // Parameters: current element, index, and the array itself
    // Use call() to allow setting 'this' in the callback
    cb.call(thisArg, this[i], i, this);
  }
};

const array1 = ["a", "b", "c"];

array1.customForEach((element) => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
