const assertEqual = require('./assertEqual');
const assertEqual = require('./eqArray');


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