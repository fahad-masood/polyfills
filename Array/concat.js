// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// concat Polyfill implementation, I have named it as "customConcat":
// Currently for 2 arrays

const arr = ["Jethalal", "Champaklal", "Gada"];
const arr2 = ["Daya", "Jethalal", "Gada"];

Array.prototype.customConcat = function (...arrays) {
  let finalArr = [];

  // Iterate through the first array and add each element to the result array
  for (let i = 0; i < this.length; i++) {
    finalArr[i] = this[i];
  }

  // Iterate through the second array and add each element to the result array
  for (let j = 0; j < arr2.length; j++) {
    finalArr[this.length + j] = arr2[j];
  }

  return finalArr;
};

console.log(arr.customConcat(arr2));
