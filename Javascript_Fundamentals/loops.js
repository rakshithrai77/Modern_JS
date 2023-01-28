let i=0;
while(i<10)
{
    console.log(i++)
}
//do while
let j= 0;
do {
  console.log( j );
  j++;
} while (j < 3);

for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
  }

console.log('')

let sum = 0;

/*while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;
}*/

for (let i = 0; i < 10; i++) {


    if (i % 2 == 0) continue;
  
    console.log(i)
  }
//cannot be break continue used within ternary operator 

outer:for (let i=0;i<4;i++)
  for (let j=0;j<4;j++){
    if (i==2)
    break outer;
    console.log(i)
  }


