let str = "A ბ ㄱ hello";
console.log(str.match(/\p{L}/gu));

let regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;

console.log("number: xAF".match(regexp)); 