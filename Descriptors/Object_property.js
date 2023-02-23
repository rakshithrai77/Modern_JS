let obj=
{
    name:"rakshith",
    last:"rai",
    get fname()
    {
        return this.name+' '+this.last;
    },
    set fname(value)
    {
        [this.name,this.last]=value.split(' ')
    }
}
obj.fname="Alice rai"
console.log(obj.fname)

//access descriptors

let user = {
    name: "John",
    surname: "Smith"
  };
  
  Object.defineProperty(user, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },
  
    set(value) {
      [this.name, this.surname] = value.split(" ");
    },
    enumerable:true
  });
  
  console.log(user);
  
  for(let key in user) console.log(key); 

  //smart getters

  let user1 = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };
  
  user1.name = "Pete";
  console.log(user.name)
  
  user1.name = "";

  let obj1 = {};

Object.defineProperty(obj1, "first_name", {
set: function (value) {
this.first_name1 = value;
},
});

obj1.first_name = "hany";
console.log(obj1.first_name);

/*unction User1(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  

    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
  }
  
  let john = new User1("John", new Date(1992, 6, 1));
  
  alert( john.birthday ); 
  alert( john.age );*/