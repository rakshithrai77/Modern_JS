let animal={
    eats:true,
    walk()
    {
        console.log('walking');
    },

}
let rabbit={
    walks:true,
    __proto__:animal
}

let longear={
    ear:true,
    __proto__:rabbit
}



console.log(rabbit.eats);
console.log(longear.walk());

let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  console.log(admin.fullName); 

  admin.fullName = "Alice Cooper";
  console.log(Object.keys(rabbit))
  console.log(admin.fullName);
  console.log(user.fullName);
  console.log(admin)

  //for in loop for..in only lists enumerable properties
for (let prop in rabbit)
console.log(prop)

for (let prop in rabbit)
{
    let see=rabbit.hasOwnProperty(prop)
    if (see)
    {
        console.log("My prop "+ prop)
    }
    else
    console.log("INH prop "+ prop)
}


