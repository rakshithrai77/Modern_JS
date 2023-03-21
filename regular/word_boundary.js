console.log( "Hello, Java!".match(/\bJava\b/) ); 
console.log( "Hello, Java#$Script!".match(/\bJava\b/) );

console.log( "Hello, Java!".match(/\bHello\b/) ); 
console.log( "Hello, Java!".match(/\bJava\b/) );  
console.log( "Hello, Java!".match(/\bHell\b/) ); 
console.log( "Hello, Java!".match(/\bJava!\b/) );

console.log("Hello, Java!".match(/\bJava!\b/));

console.log( "12,34,56".match(/\b\d\d\b/g) );