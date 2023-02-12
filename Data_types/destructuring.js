let arr=[1,2,3,4]
let [a,b]=arr;
console.log(a,b)

let [fname,lname]="Rakshith Rai".split(' ')
console.log(fname,lname)
let [s,,c]=arr;
console.log(s,c)

//works with any iterable;
var [m,n]="rak"
console.log(m,n)

//using above method swapping can be achieved

var [m,n]=[n,m]
console.log(m,n)

let [i,o,...p]=arr
console.log(i,o,p)

//specify default values

let [name,name1="np"]='r';
console.log(name,name1);

//object destructuring
let obj={
    name2:"rakshit",
    lname1:"rai"
}
let {name2,lname1}=obj;
console.log(name2);

//item
let obj2={var1:1,var2:2}

let {var1:r,var2,var3=100}=obj2;

console.log(r,var2,var3);

let obj3={h:10,m:99}

let {h,...res}=obj3;
console.log(h,res)

//without let we can wrap in a ()

//Nested destructing

let [g,[u]]=[1,[2,4]];
console.log(g,u)

