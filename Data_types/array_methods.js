let a=[1,2,3,4]

console.log(a.splice(1,3,5,6,7))
console.log(a)
a.splice(4,0,4,5,6,7)
console.log(a)
//negative indexes are allowed

//slice
console.log(a.slice(1,2))

let b=a.concat([1,23,4],6);
console.log(b,a)
let arrylike={
    0:89,
    1:90,
    [Symbol.isConcatSpreadable]:true,

}

console.log(a.concat(arrylike));
console.log('--------------------------')
a.forEach((value,index,array)=>console.log(value,index,array))

//last index of index of

console.log(a.indexOf(6))
console.log(a.lastIndexOf(6))
a.push(NaN);
console.log(a.indexOf(NaN),a.includes(NaN));

let find=a.find((value)=>value==1)
console.log(find)
console.log(a.findIndex((value)=>value==1));

console.log(a.filter((value)=>value==6))
console.log(a.map((value)=>value*2))

//sort

a.sort((a,b)=>a-b)
console.log(a)

let g=["jello","hello","mello"]
console.log(g.sort((a,b)=>a.localeCompare(b)))


//findlastIndex searches from last

//reverse
console.log(a.reverse(),a)
let str="hello,lk,jk"
//split takes a paramter 2 can use up to certain length
console.log(str.split(",").join(":"))
//reduce right
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); 

console.log(arr.reduce((sum,cur)=>sum+cur))
//if empty array is provided no inital value gives an error reduce right satrts from right
console.log(Array.isArray(a))
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };
  
  let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];
  
  // find users, for who army.canJoin returns true
  let soldiers = users.filter(army.canJoin, army);
  
  alert(soldiers.length); // 2
  alert(soldiers[0].age); // 20
  alert(soldiers[1].age);
