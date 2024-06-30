// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

// join Polyfill implementation, I have named it as "customJoin":

Array.prototype.customJoin = function (separator = ",") {
  // Convert the separator to a string, defaulting to "," if not provided
  separator = String(separator);

  // Initialize an empty string to store the result
  let resultString = "";

  // If the array is empty, return an empty string
  if (this.length === 0) {
    return "";
  }

  // Iterate through each element of the array
  for (let i = 0; i < this.length; i++) {
    // Add the current element to the result string
    resultString += this[i];

    // If it's not the last element, add the separator
    if (i < this.length - 1) {
      resultString += separator;
    }
  }

  // Return the result string
  return resultString;
};

const elements = ["Fire", "Air", "Water"];

console.log(elements.customJoin());
// Expected output: "Fire,Air,Water"

console.log(elements.customJoin(""));
// Expected output: "FireAirWater"

console.log(elements.customJoin("-"));
// Expected output: "Fire-Air-Water"
