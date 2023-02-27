let a=eval('7');
console.log(a);
let b = 1;

function f() {
  let a = 2;

  eval('let i=10;a=6;console.log(a)');
  //console.log(i) // undefined
}

f();


let x=45;
{
    let x=0;
    eval('console.log(x)')
}

let f = new Function('a', 'alert(a)');

f(5);