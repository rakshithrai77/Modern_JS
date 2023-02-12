let obj = {};

console.log(obj.__proto__ === Object.prototype); 

console.log(obj.toString === obj.__proto__.toString); 
console.log(obj.toString === Object.prototype.toString); 

let array=[1,2,3]
console.log(array.__proto__.__proto===Array.__proto__)

String.prototype.show= function ()
{
    console.log(this)
}

"hello".show()

if (!String.prototype.repeat)
{
    String.prototype.repeat=function (n)
    {
        return Array(n+1).join(this)
    }
}

let str="hello".repeat(6);
console.log(str)

let obj1 = {
    0: "Hello",
    1: "world!",
    length: 2,
  };
  
  obj1.join = Array.prototype.join;
  
  console.log( obj1.join(',') )