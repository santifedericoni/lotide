const assertEqual = function(actual, expected) {
  if (actual === expected) {
      return console.log(`assertion Passed: ${actual}  ===    ${expected}`)
  } else {
      return console.log(`Assertion Failed:  ${actual}   !==    ${expected}`)
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) { 
    return false;
  }
  else {
    for (i = 0 ; i < arr1.length ; i ++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false