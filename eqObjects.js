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



const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  else{
      for (keys of Object.keys(object1)){
        if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])){
          eqArrays(object1,object2)
        }
        else if (object1[keys] !== object2[keys]){
            return false;
          }
        }
        return true;
    }
};
/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
*/

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false