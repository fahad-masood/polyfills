// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

// shift Polyfill implementation, I have named it as "customShift":

Array.prototype.customShift = function () {
  // Check if the array is empty and return undefined if it is
  if (this.length === 0) {
    return undefined;
  }

  // Store the first element to return it later
  const result = this[0];

  // Shift elements to the left
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }

  // Reduce the length of the array by 1
  this.length--;

  // Return the removed element
  return result;
};

const array1 = [1, 2, 3];

const firstElement = array1.customShift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1
