// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// concat Polyfill implementation, I have named it as "customConcat":

const arr = ["Jethalal", "Champaklal", "Gada"];
const arr2 = ["Daya", "Jethalal", "Gada"];
const arr3 = ["Tapu", "Jethalal", "Gada"];

Array.prototype.customConcat = function (...args) {
  let finalArr = [];

  // Iterate through the first array and add each element to the final array
  for (let i = 0; i < this.length; i++) {
    finalArr[i] = this[i];
  }

  for (let k = 0; k < args.length; k++) {
    // Iterate through the next array and add each element of that array to the final array
    const temp = args[k];
    for (let j = 0; j < temp.length; j++) {
      finalArr[finalArr.length] = temp[j];
    }
  }

  return finalArr;
};

console.log(arr.customConcat(arr2, arr3));
