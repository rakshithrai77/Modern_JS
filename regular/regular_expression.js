// long expression

//let regexp = new RegExp("pattern", "flags");

//short syntax

let regex= /[a-z]/;

console.log(regex.test("nm"));

let str = "We will, we will rock you";

let result=str.match(/we/gi)

console.log(result.length)

let match = 'Javsacript'.match(/html/);

console.log(match);

match = 'Javsacript'.match(/html/) || [];

console.log(match);

//replacing str.replace return new string

let string="Yes what is your yes name";

let string2=string.replace(/Yes/gi,"Why");



console.log( "I love html".replace(/HT/i, "$& and JavaScript") ); 

let str1 = "I love JavaScript";
let regexp = /LOVE/i;
console.log(regexp.test(str1))