const assertEqual = function(actual, expected) {
  if (actual === expected) {
      return console.log(`Assertion Passed: ${actual}  ===    ${expected}`)
  } else {
      return console.log(`Assertion Failed:  ${actual}   !==    ${expected}`)
  }
};

const tail = function (actual, expected){
  let newArray = [];
  for (i = 1 ; i < actual.length; i ++){
    newArray.push (actual[i]);
  }
  return newArray;
}

assertEqual(tail([5,6,7]), [6,7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);