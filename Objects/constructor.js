function Name_age()
{
    this.admin=true;
    this.age=40;
}

let call=new Name_age();
console.log(call.age)
let user= new function()
{
    this.name="rakshith";
    this.class="A"
}

console.log(user);

function User() {
    console.log(new.target);
  }
  User();
  new User();

  function User1(name) {
    if (!new.target) {
      return new User1(name); 
    }
  
    this.name = name;
  }
  
  let john = User1("John");
  console.log(john.name);


// return from constructor

function Shopping()
{
    this.price=10000;
    this.item="Monitor";
    //ignored return 10;
    return;
}
//omit paranthesis let name =new Shopping;

let name=new Shopping();
console.log(name);

//method constructor
function User2(name) {
    this.name = name;
  
    this.sayHi = function() {
      console.log( "My name is: " + this.name );
    };
  }
  
 john = new User2("John");
  
  john.sayHi(); 
 