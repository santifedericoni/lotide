const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
      return console.log(`assertion Passed: ${actual}  ===    ${expected}`)
  } else {
      return console.log(`Assertion Failed:  ${actual}   !==    ${expected}`)
  }
};

const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (letter of sentence){
    if (results[letter]){
    results[letter].push(i);
  }
  else{
    results[letter] =[i];
  }
    i++;
  }
  console.log(results)
  return results;
};

letterPositions('santiago')
assertArraysEqual(letterPositions("hello").e, [1]);