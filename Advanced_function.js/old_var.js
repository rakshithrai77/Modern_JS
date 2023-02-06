if(true)
{
    var test=10;
}

console.log(test); //if let used  error willl be thrown

for(var i=0;i<10;i++) console.log(i);

console.log(i)

//function level var can be redeclared

var f=10;

var f=30;
console.log(f);

//var is used below scope

function hello()
{
    phrase=10;
    var phrase;
    console.log(phrase)
}


hello();

//IIFE

(function() {

    var message = "Hello";
  
    alert(message); 
  
  })();

  //way to create function IIFE

  (function() {
    alert("Parentheses around the function");
  })();
  
  (function() {
    alert("Parentheses around the whole thing");
  }());
  
  !function() {
    alert("Bitwise NOT operator starts the expression");
  }();
  
  +function() {
    alert("Unary plus starts the expression");
  }();

