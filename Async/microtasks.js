let promise = Promise.resolve();

promise.then(() => console.log("promise done!"));

console.log("code finished");

//order doesnt matters
let promise1 = Promise.resolve();

promise1.then(() => console.log("promise done1!")).then(()=>console.log("code finished1"));

let promise2 = Promise.reject(new Error("Promise Failed!"));
setTimeout(() => promise.catch(err => alert('caught')), 1000);
window.addEventListener('unhandledrejection', event => alert(event.reason));