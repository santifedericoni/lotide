const assertEqual = function(actual, expected) {
  if (actual === expected) {
      return console.log(`assertion Passed: ${actual}  ===    ${expected}`)
  } else {
      return console.log(`Assertion Failed:  ${actual}   !==    ${expected}`)
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(bestTVShowsByGenre, name){
  for (tvShows of Object.keys(bestTVShowsByGenre)){
    if (bestTVShowsByGenre[tvShows]===name){
      return true;
    }
  }
}



//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), true);
