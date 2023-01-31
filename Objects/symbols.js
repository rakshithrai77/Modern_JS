let id= Symbol("hello");
console.log(id.toString());
let user={
    name:"rakshith",
}
user[id]="rakshith";
console.log(user);
 user = {
    name: "John",
    [id]:"123"
  };

   id = Symbol("id");
  let user = {
    name: "John",
    age: 30,
    [id]: 123
  };
  
  for (let key in user) console.log(key); 
  

  console.log( "Direct: " + user[id] );