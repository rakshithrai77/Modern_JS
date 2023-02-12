let func=new Function ('a1','b1','return a1+b1');
console.log(func(1,3))
let funcv=new Function('console.log("hello")');
console.log(funcv())

let str='function(){console.log("hello")}';

let fun=new Function('console.log("hello")');
console.log(fun());
//Error
function closure()
{
    let value=10;
    let func=new Function ('console.log(value)')
    return func
}
//closure()();

//without new
function closure1()
{
    let value=10;
    let func=function (){console.log(value)}
    return func
}
closure1()();
