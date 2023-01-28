let sum=(a,b)=>a+b;
console.log(sum(1,2));

let name=()=>{
    let str="8"+1;
    return str;
}

console.log(name())


let ask = (question,yes,no)=>confirm(question)?yes():no();
ask("Do you agree",
()=>{console.log("Agreed"),
()=>{console.log("Cancelled execution")}})
