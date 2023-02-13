class Name{
    constructor(name)
    {
        this.name=name;
    }

    greet()
    {
        console.log("Hello "+ this.name)
    }
}

let user=new Name("Rai")

user.greet();

console.log(typeof Name);

console.log(Name===Name.prototype.constructor)
console.log(Name.prototype.greet)

//same as

function Name1(name)
{
    this.name=name
}

Name1.prototype.greet=function ()
{
    console.log("hello" + this.name)
}
let user1=new Name1("John")
user1.greet();

/*
1.Calling class without new throws an error and string representation starts with Class
2.Class methods  are enumerable
3.class always user strict within */

//Class expression

let User= class Name2{ //visible name within
    greet()
    {
        console.log("Hi")
    }
}

new User().greet();
//console.log(Name2) error
console.log(User)

//classed dynamically

class User1 {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user2 = new User1("John");
  console.log(user2.name); 
  
  user = new User("");

  //computed properties

  class Hello{
    name="rakshith";

    ['say'+'hi']()
    {
        console.log("yes")
    }
  }
Hello.prototype.sayhi()

//Class fields set on indovivual object and not on prototype

let name1= new Hello()
console.log(name1.name);

//Making bound methods with class fields



