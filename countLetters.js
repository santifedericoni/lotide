const assertEqual = function(actual, expected) {
  if (actual === expected) {
      return console.log(`assertion Passed: ${actual}  ===    ${expected}`)
  } else {
      return console.log(`Assertion Failed:  ${actual}   !==    ${expected}`)
  }
};

const countLetters = function(string) {
  var obj = {};
  for (letter of string){ 
    if (obj[letter]){
      obj[letter]= obj[letter] +1;
    }
    else {
      obj[letter] =1
    }
  }
  console.log(obj)
}

countLetters('santiago federiconi')