let animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal;
  
  let rabbit = new Rabbit("White Rabbit"); 
  
  console.log( rabbit.eats ); 

  function Rabbit1() {

console.log( Rabbit1.prototype.constructor == Rabbit1 ); }

  Rabbit1()

  function Rabbit2() {}
  
  let rabbit2 = new Rabbit2(); // 
  
  console.log(rabbit2.constructor == Rabbit2);

  function Rabbit3() {}
Rabbit3.prototype = {
  jumps: true
};

let rabbit3 = new Rabbit3();
console.log(rabbit3.constructor === Rabbit3);

//can be avioded by adding like Rabbit3.prototype.jumps=true


function Name()
{
    this.name="rakshith";
}

let what=new Name("Rakshithzxs");
console.log(what.name)
let what1=new what.constructor();

console.log(what1.name)