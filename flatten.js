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

const flatten = function (arr1) {
  let flattenArray = [];
  for (i = 0 ; i < arr1.length ; i ++){
    if ((Array.isArray(arr1[i]))){
      for (j = 0 ; j < arr1[i].length ; j ++){
        flattenArray.push(arr1[i][j])
      }
    }
    else {
        flattenArray.push(arr1[i])
      }
  }
  return flattenArray
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]