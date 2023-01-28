console.log(null??undefined);

let name="rakshith"

console.log(null ?? name)

//difference between || and ??

console.log(0 || name);
console.log(0 ?? name)

//Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.
let x= 7 ?? 8 && 6; //Syntax error