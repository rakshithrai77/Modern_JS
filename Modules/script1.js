import {admin} from './script3.js';
console.log(import.meta)
console.log("yay",admin.a)
//this is undefined in type module
//External scripts with the same src run only once:
//external heading needs Access-Control-Allow-Origin to be enabled
console.log(this)

//Old browsers do not understand type="module". Scripts of an unknown type are just ignored. For them, it’s possible to provide a fallback using the nomodule attribute:
///export, it doesn’t require type="module", and we can put it into a regular script:

