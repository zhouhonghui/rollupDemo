'use strict';

var foo = 'hello world!';

let main = function () {
  console.log(foo);
};

window.main = main;

module.exports = main;
