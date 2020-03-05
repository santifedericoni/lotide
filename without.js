const checkIfIsOnTheArray = function (number, array1){
  for (let i = 0 ; i < array1.length ; i ++){
    if (number === array1[i]) {
      return true
    }
  }
  return false;
}

let without = function (arr1, arr2) {
  var newArray=[];
  for (var i = 0; i < arr1.length; i ++) {
      if (!checkIfIsOnTheArray(arr1[i], arr2)) {
        newArray.push(arr1[i]); 
      }
  }
  console.log(newArray);
}
without([1, 2, 3], [1])
without(["1","2","3"], [1, 2, "3"])


