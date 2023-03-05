let user={};
//console.log(user.address.street)

console.log(user.address ? user.address.street :undefined);

//optional chaining


console.log(user?.address?.street)

//varaible must be declared in order to use optional chianing else there is reference error

let user1=null
let x=0;
console.log(user1?.hi(x++));

console.log("1");

 setTimeout(()=>console.log('2'))

new Promise((resolve,reject)=>resolve()).then(()=>console.log('3')).then(()=>console.log('4'));

console.log('5')

for(let i=0;i<5;i++)
{
    setTimeout(()=>console.log(i),2000)
}
