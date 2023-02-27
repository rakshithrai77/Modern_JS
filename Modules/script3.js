//export before decalartions
 let admin={ a:67
}

 function sayHi()
{
    console.log('hi')
}
console.log(admin.a)
export {sayHi as default,admin}
/*
//export {sayHi as a,admin as b}
//export default
export default class User { 
    constructor(name) {
      this.name = name;
    }
  }
//
// same as if we added "export default" before the function
export {sayHi as default};//default can be exported 
//default import we can import any name
//Rexport
export {default as User} from './user.js';//rexport default

export {login, logout} from './helpers.js';

// re-export the default export as User
export {default as User} from './user.js';
//is that re-exported modules aren’t available in the current file.

export {login, logout} from './helpers.js';

export * from './user.js'; // to re-export named exports
export {default} from './user.js'; // to re-export the default export*/