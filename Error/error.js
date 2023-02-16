'use strict'
try{
  console.log("no error");

}
catch{
  console.log("will not execute since no error")
}
try{
  lalal;
  console.log("hey there");
  
}
catch{
  console.log("Error variable not found")
}

/*try{
  setTimeout(function(){hello;},2000)
}
catch
{
  console.log("Hey error")
}

above script dies*/

setTimeout(function(){ try
{hello}
catch{
  console.log('error found')}},1000)

//Error object

try{
  lalal;
  console.log("hey there");
  
}
catch(err){
  console.log(err.name)
  console.log(err.message)
 console.log(err.stack)
}

//optional catch binding with no object passed to catch

let json = '{"name": 30 }';

try {
  let user = JSON.parse(json); 
} catch (err) {
  console.log("Wrong data",err.name,err.message); 

}

try {
  let user = JSON.parse(json); 
  if (!user.name1)
  {
    throw new SyntaxError("no value")
  }
} catch (err) {
  console.log("Wrong data",err.name,err.message); 

}

let json1 = '{ "age": 30 }'; 

try {
  user = JSON.parse(json1);  
} catch (err) {
  console.log("JSON Error: " + err); 

}

function readdata(){
try{
  jk;
}
catch(err)
{

  if(err instanceof SyntaxError)
        console.log("Yes syntax");

  else{
    throw err;
  }
}
}
try {
  readdata();
}
catch(err)
{
  console.log("caught here",err.name,err.message)
}

try {
  console.log("yes")
}
catch{
  console.log("catch")
}
finally{
  console.log("always executed")
}


function fib(n)
{
  if(n < 0 || Math.trunc(n)!=n)
    throw new Error("Error entered non negative number");
  return n<=1?n:fib(n-1)+fib(n-2);
}
let start=Date.now();
try{
  var result=fib(-1);
}
catch(err)
{ console.log(err.name,err.message); }
finally{
let end=Date.now()-start;
console.log(result || "error occured","end date in ms",end)}

//can be used with catch if no error needs to be handled


