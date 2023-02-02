let user={};
//console.log(user.address.street)

console.log(user.address ? user.address.street :undefined);

//optional chaining


console.log(user?.address?.street)

//varaible must be declared in order to use optional chianing else there is reference error

let user1=null
let x=0;
console.log(user1?.hi(x++));