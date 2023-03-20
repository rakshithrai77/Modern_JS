let str="789-^41524_";

let regex=/\d/g;

let result=str.match(regex);

console.log(result.join(''));

let str1 = "Is there CSS4?";
let regexp = /CSS\d/
//Inverse class
console.log( str1.match(regexp));
console.log(str.replace(/\D/g,""));
let regexp1 = /CS.4/;

console.log("CSS4".match(regexp1));
console.log( "CS4".match(/CS.4/) );

//. matches anything both not newline achieved via /s flag

console.log("CS\nS".match(/CS.S/s));

console.log("1  -   5".match(/\d\s*-\s*\d/))
