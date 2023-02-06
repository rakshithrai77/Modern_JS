function sum(a, b) {
    return a + b;
  }
  
  alert( sum(1, 2, 3, 4, 5) );

  function showName() {
    alert( arguments.length );
    alert( arguments[0] );
    alert( arguments[1] );

    function f() {
        let showArg = () => alert(arguments[0]);
        showArg();
      }
      
      f(1); 

      let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) );

let arr = [1, 2, 3];

let arrCopy = [...arr];


alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); 

alert(arr === arrCopy); 


arr.push(4);
alert(arr); 
alert(arrCopy); 
  
  }

  showName("Julius", "Caesar");

  showName("Ilya");