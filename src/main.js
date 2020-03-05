import { version } from '../package.json';
import foo from './foo.js';
let main = function () {
  console.log(foo);
}

window.main = main

export default main;