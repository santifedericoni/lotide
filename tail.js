const assertEqual = require('./assertEqual');
const tail = function (actual, expected){
  let newArray = [];
  for (i = 1 ; i < actual.length; i ++){
    newArray.push (actual[i]);
  }
  return newArray;
}

//assertEqual(tail([5,6,7]), [6,7]);
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);