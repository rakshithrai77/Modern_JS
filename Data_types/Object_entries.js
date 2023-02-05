let user = {
    name: "John",
    age: 30
  };

console.log(Object.values(user),Object.keys(user),Object.entries(user))

let obj={
    banana:2,
    apple:1,
    orange:3,
}

let doublequant=Object.fromEntries(Object.entries(obj).map(entry=>[entry[0],entry[1]*4]));

console.log(doublequant)