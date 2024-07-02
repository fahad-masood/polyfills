// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

// pop Polyfill implementation, I have named it as "customPop":

Array.prototype.customPop = function () {
  // Store the last element of the array
  const poppedElement = this[this.length - 1];

  // If the array is not empty, decrease its length by 1
  // This effectively removes the last element
  this.length ? (this.length = this.length - 1) : undefined;

  // Return the removed element
  return poppedElement;
};

// Example usage:
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.customPop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.customPop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

const emptyArr = [];
console.log(emptyArr.customPop());
// Expected output: undefined
