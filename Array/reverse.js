// The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

// reverse Polyfill implementation, I have named it as "customReverse":

Array.prototype.customReverse = function () {
  // Calculate the number of swaps needed (only need to swap half the elements)
  let totalSwapping = Math.floor(this.length / 2);
  let temp;

  // Perform the swaps
  for (let i = 0; i < totalSwapping; i++) {
    // Temporarily store the element at the current index
    temp = this[i];
    // Swap the current element with the corresponding element from the end
    this[i] = this[this.length - 1 - i];
    // Place the temporarily stored element in the correct position
    this[this.length - 1 - i] = temp;
  }

  // Return the modified array
  return this;
};

const array1 = ["one", "two", "three"];
console.log("array1:", array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.customReverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array1);
// Expected output: "array1:" Array ["three", "two", "one"]
