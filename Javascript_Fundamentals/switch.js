let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

let b=10;
//grouping+expression
switch(b)
{
    case 9+1:
        case 2: console.log("hello");break;
    case 3:console.log("world");
            break
}

