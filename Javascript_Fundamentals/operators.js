let a=1+1;
let b=2 **3;

let c="123"
let d="1234"
console.log(+c)
console.log(typeof +c)
console.log(+c + +d)
//chain assignments
let e=f=d=10;

//compund assignments
  d=+10;
  d/=10;
  d-=2;
  d*=4;
  console.log(d)
//increment or decrement(post/ pre)

console.log(d--,d++);
console.log(--d,++d);

//comma

let value=(1+2,8*9);
console.log(value)

let a2 = 1, b2 = 1;

let c2 = ++a2; // ?
let d2 = b2++; // ?
console.log(a2,d2)