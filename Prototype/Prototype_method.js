let animal={
    eats:true,
}

let rabbit=Object.create(animal,{walks:{ walks:true}});

console.log(Object.getPrototypeOf(rabbit)==animal);

Object.setPrototypeOf(rabbit,{});

let clone=Object.create(Object.getPrototypeOf(rabbit),Object.getOwnPropertyDescriptor(rabbit));


let obj = {};

let key = "__proto__";
obj[key] = "some value";

console.log(obj[key])

//alternate is to use map
let map=new Map()
map.set(key,"value")
console.log(map.get(key))

obj=Object.create(null);
obj[key]="value"
console.log(obj[key])

let obj1=Object.create(null);
obj1.a=10;
console.log(Object.keys(obj1))
