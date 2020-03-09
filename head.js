const assertEqual = require('./assertEqual');

const head = function (actual, expected){
  if (actual.length === 0){
    return 'Array empty'
  }
  else{
  var head = actual[0];
  return head;
  }
}


// TEST CODE

//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual(head([]), 5);