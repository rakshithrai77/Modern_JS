import fetch from 'node-fetch'
fetch('./kls').
then(response=>console.log(response))
.catch(error=>console.log("yes",error.name))
//implict try and catch
fetch('https://api.github.com/users/${"rakshithrai77"}').then(response=>nlala()).catch(error=>console.log(error.name))

new Promise((resolve,reject)=>{throw new Error("yes1")}).then(
(result=>console.log(result))
).catch(error=>console.log(error.name,error.message))

//rethrowing

new Promise(function(resolve,reject)
{
    throw new Error("yes")
}).catch(error=>console.log("error handled")).then(()=>console.log("will execute"));

new Promise(function(resolve,reject)
{
    throw new Error("error")
}).catch(error=>
    {
        if(error instanceof URIError)
        {
            console.log("URI error handled here")
        }
        else
        {
            throw error;

        }
    }).then(()=>console.log("ignored")).catch(error=>console.log(error.name,"yaya"))

    //unhaled rejections

    window.addEventListener('unhandledrejection',function(event)
    {
        console.log(event.promise)
        console.log(event.reason)
    })

    new Promise((resolve,reject)=>
    {
        throw new Error("yes")
    }).then(()=>{})