const fs = require('fs')

exports.stepOne = function stepOne() {
  var waitTill = new Date(new Date().getTime() + 0.5 * 1000);
  while(waitTill > new Date()){}
}

exports.stepTwo = function stepTwo() {
  var waitTill = new Date(new Date().getTime() + 0.1 * 1000);
  while(waitTill > new Date()){}
}

exports.stepThree = function stepThree() {
  var waitTill = new Date(new Date().getTime() + 0.2 * 1000);
  while(waitTill > new Date()){}
}
