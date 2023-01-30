// OR
if( 1 ||0 )
console.log("hello");
let hour = 9;

if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}

// AND

console.log(1 && 2 && null && 3)

//! NOT

console.log(!0,!1)
if(hour !== 9)
{
    console.log("printed")
}

// double NOT

console.log(!!"hello")

//precedence !>$$>||