'use-strict'
import fetch from 'node-fetch'
/*Promise.all([
    new Promise(resolve=>setTimeout(()=>resolve(1),1000)),
    new Promise(resolve=>setTimeout(()=>resolve(2),1000)),
    new Promise(resolve=>setTimeout(()=>resolve(3),1000))
]).then(responses=>responses.forEach((value)=>console.log(value)));

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  
  let requests = urls.map(url => fetch(url));
  
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => console.log(`${response.url}: ${response.status}`)
    ));

let name=["rakshithrai77","nehashettyn",'*(**^)']

let promise=name.map(name=>fetch(`https://api.github.com/users/${name}`));
Promise.all(promise).then(responses => {responses.forEach(response => console.log(`${response.url}: ${response.status}`))
    return responses;}
  ).then (r =>Promise.all(r.map(r=>r.json()))).then(
    data=>data.forEach(data1=>console.log(data1.login))
  );
*/
process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message);
});
  Promise.all([
    new Promise(resolve=>setTimeout(()=>resolve(1),4000)),
    new Promise(reject=>setTimeout(()=>reject(new Error("new")),1000)),
    new Promise(resolve=>setTimeout(()=>resolve(3),7000))
]).catch((error)=>console.log(error.message))


/*
Promise.all([
    1,2,3
]).then(a=>a.forEach(a=>console.log(a)))


//Promise settled



  Promise.allSettled(urls.map(url=>fetch(url))).then(
    response=>{
        response.forEach((res,num)=>
            {
                if(res.status==='fulfilled')
                    console.log(`${urls[num]} , ${res.value.status}`)
                    else
                    console.log(`${urls[num]} , ${res.reason}`)
            })
    }
  )
//Promise race
 
Promise.race([
    new Promise(resolve=>setTimeout(()=>resolve(1),2000)),
    new Promise(reject=>setTimeout(()=>reject(new Error("new")),3000)),
    new Promise(resolve=>setTimeout(()=>resolve(3),1000))
]).then(data=>console.log(data))

//Promise any

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve("yes"), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then("yes",resolve=>console.log(resolve));
  Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops1!")), 3000))
  ]).catch(error=>console.log(error.errors[1]))

  //promise resolve reject

let cache=new Map();

  function loadCache(url)
  {
    if(cache.has(url))
        return Promise(resolve=>cache.get(url))
    return fetch(url).then(
        response=>response.json()
    ).then(text=>{
        cache.set(url,text.login)
      console.log(cache)

        return text

    })
  };
  
  console.log(loadCache('https://api.github.com/users/jeresig'));
console.log(cache);
let promise5 = new Promise((resolve, reject) => reject(error));

*/