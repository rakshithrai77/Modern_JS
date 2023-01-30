let a={};//object literal
let b=new Object();//object constructor

let user={
    name:"rakshith",
    age:30
}

console.log(user.name)//read
user.isAdmin=true//add
console.log(user);
delete user.age;
console.log(user);


//multiworld property name

let myclass=
{
    strength:10,
    "extra activities":["karate"]
}

console.log(myclass)

delete myclass["extra activities"]
console.log(myclass)

console.log(myclass["hello"])
//computed porperties
let year=2020;

let user1={
    [year]:10
}

console.log(user1)

let date=20;
//shorthand property and reserved key can be used since it will be converted back to string
let time={
        date,
        hello:"world"
}
console.log(time)


// In keyword

console.log( "hello" in time);

let obj = {
    test: undefined
  };
  
  console.log( obj.test );
  
console.log( "test" in obj ); 

//for in

for( let key in time)
{
    console.log(key,time[key])
}
