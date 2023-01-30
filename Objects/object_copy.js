let user={
    name:"hello",
    time:"8pm"
}
let user1=user;
console.log(user.time)
user.time='7pm'
console.log(user.time)
console.log()
//shallow copy

let user2={};
Object.assign(user2,user1);
user2.time="4pm"
console.log(user2.time,user1.time);

//deep copy
 user={
    name:"rakshith",
    activities:{karate:true,judo:true}
}

 user2=structuredClone(user)
console.log(user2)