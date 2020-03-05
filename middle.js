// TEST/ASSERTION FUNCTIONS
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

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
      return console.log(`assertion Passed: ${actual}  ===    ${expected}`)
  } else {
      return console.log(`Assertion Failed:  ${actual}   !==    ${expected}`)
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  let trueLength = array.length;
  const midIndex = Math.floor(trueLength/2);
  if (trueLength < 2) {
    return false;
  }
  else if (midIndex % 2 === 0){
     console.log(array[midIndex]);
     console.log(array[midIndex - 1])
  }
  else {
     console.log (array[midIndex])
  }
}

middle([1,2,3,4,5,6,7,8])

middle([1,2,3,4,5,6,7])