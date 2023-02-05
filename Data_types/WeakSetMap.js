let map=new WeakMap();
let jon={name:"hello"}
map.set(jon,1);
console.log(map.get(jon));

//Usecase
let visit=new WeakMap();

function visit1(user)
{
    let count=visit.get(user) ||0;
    visit.set(user,count+1)
}

visit1(jon);
visit1(jon);

//2nd use case caching
let cache=new WeakMap();

function cache1(obj)
{
    if(!cache.has(obj))
    {
        let result=obj;
        cache.set(obj,result)
        return result;
    }

    return cache.get(obj)
}

let result=cache1(jon);

console.log(result,cache.get(jon));

//WeakSet

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); 
visitedSet.add(pete); 
visitedSet.add(john);


alert(visitedSet.has(john));


alert(visitedSet.has(mary)); 

john = null;








