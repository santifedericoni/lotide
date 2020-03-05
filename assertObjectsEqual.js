const assertObjectsEqual = function(actual, expected) {
  // Implement me!
};

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