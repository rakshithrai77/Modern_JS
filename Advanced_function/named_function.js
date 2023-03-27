function sayHi() {
    alert("Hi");
  }
  
 console.log(sayHi.name); 

  function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length)

//Named expression function

let sayHi = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func("Guest");
    }
  };
  
  let welcome = sayHi;
  sayHi = null;
  
  welcome();