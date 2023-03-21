console.log( "Chapter 5.1".match(/\d\.\d/) );
console.log( "Chapter 511".match(/\d\.\d/) );

console.log( "function g()".match(/g\(\)/) );

let regexp = new RegExp("\d\.\d");

console.log( "Chapter 5.1".match(regexp) );

regexp="\\d\\.\\d";

console.log("Chapter 5.1".match(regexp))

