{
    let name=10;
}
//error console.log(name)

{
    // show message
    let message = "Hello";
    console.log(message);
  }

  for (let i = 0; i < 3; i++) {
    
    alert(i); 
  }
  
  alert(i);


  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();

  function f() {
    let value = 123;
  
    return function() {
      console.log(value);
    }
  }
  
  let g = f(); 
  
  g = null; //lexical reference removed

  //V8 debugger

  function f1() {
    let value = Math.random();
  
    function g1() {
      debugger; 
    }
  
    return g1;
  }
  
  let g1 = f1();
  g1();