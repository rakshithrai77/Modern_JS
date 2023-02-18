let user={
    name:"rakshith",
    age:34
}
let json=JSON.stringify(user)
console.log(typeof json)

/*supports
Objects { ... }
Arrays [ ... ]
Primitives:
strings,
numbers,
boolean values true/false,
null*/

console.log(JSON.stringify([1,2,3]))

//undefined neglected
let n=Symbol("YES")
let user1={
    user:undefined,
    sayhHi()
    {
        console.log("jk")
    },
    [Symbol('jk')]:"hi"
}
console.log(JSON.stringify(user1));

let room={
    space:1,
    need:"yes"
}
let meetup={
    occupied:78
}

room.place=meetup;
meetup.where=room
//console.log(JSON.stringify(room))--error

console.log(JSON.stringify(room,['space','need']))//to avoid cricular reference
    //formating space using replacer

console.log(JSON.stringify(room,(key,value)=>
{
    console.log(key,value) 
    return (key==='place')? undefined: value},4))
    //formating space
//to custom toJSON

let name={
    age:90,
    name:"hello",
    toJSON(){
        return this.age
    }
}
console.log(JSON.stringify(name))

//JSON.parse

let number="[1,2,3,4]"
console.log(JSON.parse(number))

let  number1='{1:1}'
//error console.log(JSON.parse(number1)) JSON5 library

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup1=JSON.parse(str,(key,value)=>{ if (key==='date') return new Date(value)
 return value})

 console.log(meetup1)


