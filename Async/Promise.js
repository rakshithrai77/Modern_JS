//syntax
let promise =new Promise(function(resolve,reject)
{
    //...code 
})

let promise1=new Promise(function(resolve,reject)
{
    setTimeout(() => {
        resolve("done")
    }, 1000);//can be called o
})

let promise2=new Promise(function(resolve,reject)
{
    setTimeout(() => {
        reject(new Error("Whoops!!"))
    }, 1000);
})


//consumers then catch finally
promise1.finally(()=>{console.log("hello")})
.then(function(resolve){console.log(resolve)})
promise2.catch(function(error){console.log(error.name,"no")})

let promise4 = new Promise(resolve => resolve("done!"));

promise4.then((resolve)=>{console.log(resolve)}); 