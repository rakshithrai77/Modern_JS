import fetch from 'node-fetch'
//async
async function f() {
    return 1;
  }
console.log(f().then(resolve=>console.log(resolve)))

//await
async function f1() {
    let promise= new Promise(
        (resolve,reject)=>
        {
            setTimeout(()=>resolve("Yes resolved"),3000)
        }

    )
    let result=await promise;
    console.log(result)
  }
f1();
//top level if not needs to wrapped in in fucntion
let response = await fetch('https://api.github.com/users/rakshithrai77');
let user = await response.json();

console.log(user.login);

class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      console.log(resolve);
      setTimeout(() => resolve(this.num * 2), 1000); 
    }
  }
  
  async function f2() {
    let result = await new Thenable(1);
    console.log(result);
  }
  
  f2();

class Name
{
    async wait()
    {
        return "whatsupp"; 
    }
}

console.log(new Name().wait().then(resolve=>console.log(resolve)));

//error handling

async function a()
{
   try {
       let result = await fetch("yes");
       let user=result.json()
   }
   catch(error){
   console.log(error.name)}
}
async function a1()
{
       let result = await fetch("yes");
     let user=result.json()
}


a1().catch(error=>console.log("yes",error.name))

let results = await Promise.all([
    1,2,3
  ]);
console.log(results)