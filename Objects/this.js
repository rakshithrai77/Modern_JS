let user={
    name:"rakshith",
    age:20
}

user.greet=function ()
{
    console.log("Welcome to shopping cart")
}

console.log(user.greet())

//Method shorthand

user = {
    sayHi: function() {
      console.log("Hello");
    }
  };

  user = {
    sayHi() { 
      console.log("Hello");
    }
  };
  console.log(user.sayHi());


  user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      console.log(this.name);
    }
  
  };
  
  user.sayHi();

  //this is not bound

let user1=
{
    name:"pavan",
    age:30,
    hi:()=>{console.log(this.name)}
}

console.log(user1.hi)//return undefined