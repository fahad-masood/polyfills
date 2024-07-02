// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

// push Polyfill implementation, I have named it as "customPush":

Array.prototype.customPush = function (...args) {
  // Iterate through all arguments passed to the function
  for (let i = 0; i < args.length; i++) {
    // Add each argument to the end of the array
    // this[this.length] automatically appends to the end
    this[this.length] = args[i];
  }

  // Return the new length of the array
  return this.length;
};

// Example usage:
const animals = ["pigs", "goats", "sheep"];

// Push a single element
const count = animals.customPush("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

// Push multiple elements
const res = animals.customPush("chickens", "cats", "dogs");
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
console.log(res);
// Expected output: 7
