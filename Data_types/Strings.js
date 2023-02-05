let str="hello World";
let str2=`hello world`
let str3=`name 
yes `
console.log(str3)
console.log(`hello world ${0+1}`)
str='Hello\nWorld';
str2=`Hello
World1`
console.log(str==str2)
//Special characters
console.log('hello\"\\');
//length
console.log(str.length)
//access
console.log(str[0],str.at(-1));

for( let char of str) console.log(char)
//string are imuttable

str[1]='h';
console.log(str);

console.log(str.toLowerCase())
console.log(str.toUpperCase());

//searching string

let name="Rakshith is a good ks guy";
console.log(name.indexOf("ks",10));
let target="ks";
let pos=0;
while(true)
{
    let found=name.indexOf(target,pos+1);
    if(found===-1) break;
    console.log("Found at " + found + " " + target);
    pos=found;
}

console.log(name.lastIndexOf(target,-5))

//includes startswith endswith
console.log(name.startsWith("Rask"));
console.log(name.endsWith("guy"));
console.log(name.includes("ks",6));

//substring slice 

console.log(name.slice(0,8));
//sub str start should be greater than end
console.log(name.substring(0,10));
console.log(name.substr(-3,2));

//Comparing String
let sty=''
for (let i=65; i<=225 ;i++)
{
    sty+=String.fromCodePoint(i);
}
console.log(sty);
console.log('a'>'B')

console.log(name.localeCompare(str)) //case sensitive and other language character same














