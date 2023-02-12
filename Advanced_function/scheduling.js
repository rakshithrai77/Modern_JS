//setimeout

let timer=setTimeout(()=>{console.log("hello")},5000)
console.log(timer);
clearTimeout(timer)

let timerId = setInterval(() => console.log('tick'), 2000);


setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);

//nested schedling

let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);

setTimeout(() => alert("World"));

alert("Hello");
