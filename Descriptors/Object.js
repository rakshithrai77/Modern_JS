'use strict';
let obj={a:1,b:2,c:3,
    toString(){console.log("result")}}
Object.defineProperty(obj, 'a', {
    configurable:false
  });
obj.a=89;
console.log("yay",obj.a)
console.log(Object.getOwnPropertyDescriptor(obj,"name"))
// obj.a=3 error
Object.defineProperty(obj, 'toString', {
    enumerable:false
  });
for ( let k in obj)
{
    console.log(k)
}

console.log(Object.keys(obj));

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log( JSON.stringify(descriptor, null, 2 ) );
//only possiblity to change is for non configurable object is eritable flag from true to false
Object.defineProperties(obj,{a:{enumerable:false},c:{writable:false}}) 
for (let i in obj)
{
    console.log("new ",i)
}

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
console.log(clone)
Object.preventExtensions(obj)//--Forbids the addition of new properties to the object.
Object.freeze(obj)//writable->f enumerable->f all property
Object.seal(obj)//Forbids adding/removing of properties. Sets configurable: false for all existing properties.
/*
Object.isExtensible(obj)
Returns false if adding properties is forbidden, otherwise true.
Object.isSealed(obj)
Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
Object.isFrozen(obj)
*/