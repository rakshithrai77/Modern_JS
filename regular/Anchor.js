let str1 = "Mary had a little lamb";
console.log( /^Mary/.test(str1) );

str1 = "its fleece was white as snow";
console.log( /snow$/.test(str1) );

str1="12:234";
console.log((/^\d\d:\d\d\d$/).test(str1))
