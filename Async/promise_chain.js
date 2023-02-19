import fetch from 'node-fetch'

new Promise(function(resolve,reject)
{
    setTimeout(()=>resolve(1),1000);
}).then(function(result)
{
    console.log(result)
    return result+1;
}
).then(function(result)
{
    console.log(result)
    return result+1;
}).then(function(result)
{
    console.log(result)
    return result+1;
})

//cant add like chaining to same promise produces only result

//returning promise
new Promise(function(resolve,reject)
{
    setTimeout(()=>resolve(1),1000);
}).then(function(result)
{
    console.log(result)
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>resolve(2),1000);
    })
}
).then(function(result)
{
    console.log(result)
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>resolve(3),1000);
    })
}).then(function(result)
{
    console.log(result)
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>resolve(4),1000);
    })
})

