console.log("I'm 12345 years old".match(/\d{5}/));
console.log("I'm not 12, but 1234 years old".match(/\d{3,5}/)) //more than {3,}

let str = "+7(903)-123-45-67";

let numbers = str.match(/\d{1,}/g);

console.log(numbers)

 str = "Should I write color or colour?";

console.log( str.match(/colou?r/g) );//similary *->0 or more +->1 or more
