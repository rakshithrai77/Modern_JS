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

//zero timeout

setTimeout(() => alert("World"));

console.log("Hello");

let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // remember delay from the previous call

  if (start + 100 < Date.now()) alert(times); // show the delays after 100ms
  else setTimeout(run); // else re-schedule
});

//4ms limitation
