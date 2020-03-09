const assertEqual = require('./eqArray');

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
      return console.log(`assertion Passed: ${actual}  ===    ${expected}`)
  } else {
      return console.log(`Assertion Failed:  ${actual}   !==    ${expected}`)
  } 
};

module.exports = assertArrayEqual;



