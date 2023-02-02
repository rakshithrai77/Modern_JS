let arr= new Array();
let arr1=[];
let vegetables=['Onion','Cucumber',];
console.log(vegetables[0]);
console.log(vegetables[1]);

vegetables[0]="Onions";

console.log(vegetables.length);

//using at

console.log(vegetables.at(-1))

//push pop unshift shift

vegetables.push("Carrot");
console.log(vegetables);
console.log(vegetables.pop())

vegetables.shift();
console.log(vegetables);
vegetables.unshift("onions");
console.log(vegetables);


let copy=vegetables;
console.log( copy==vegetables);

console.log(Number(new Array([])));
if([])
{
    console.log("print")
}

vegetables.k=10;
console.log(vegetables.k);

//loops

for(let key of vegetables)
console.log(key);
let arr2 = new Array(2);

console.log( arr2[0] ); 

console.log( arr2.length );

console.log([1,2,3].toString())

console.log([]==0)
console.log([1]==1)
