let name="rakshith";
function show()
{
    name="rai";
    let message="hello world"
    console.log("hello "+message+name);
}
console.log(name)
show();
show();
console.log(name);

let vara=10;

function addme(vara)
{
    vara=vara+10;
    console.log(vara+10)
}

addme(vara);
console.log(vara);

//Default value but strictly equals undefined
function showmessage(text,from=10)//possible to give complex expression like calling a fuction which return some value
{
    console.log(text,from)
}
showmessage("hello")

//Return value
function addme1(a,b)
{
    return;
}

console.log(addme1(3,4));

function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return 'Do you have permission from your parents?';
    }
  }

  console.log(checkAge(10));

  //An empty return is also the same as return undefined:

  function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      console.log( i ); // a prime
    }
  }