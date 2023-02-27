import * as g from './script3.js';
//import User from './user.js'; -->defualt export
//import {admin as a,sayHi as hi} from './script3.js';;
g.admin.a=66;
console.log(g.admin.a)
g.sayHi()
//A module has either named exports or the default one.
/*export class { // Error! (non-default export needs a name)
    constructor() {}
  }*/
