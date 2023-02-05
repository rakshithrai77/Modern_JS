let map=new Map();

map.set(1,2)
map.set(3,4);
map.set('3',1);
console.log(map)
console.log(map.get('3'));
console.log(map.size);

//no use
map['key']=3;
console.log(map);

//set object

const a={name:'john'};
map.set(a,3);
console.log(map.get(a));

let b={name:"hello"};
let c={name:"world"};
let d={};
d[b]="catch";
d[c]="mice";
console.log(d);

let map2=new Map();

map2.set(1,2).set(3,4);

map2.set(1,3);
console.log(map2);
console.log(map===map2);


//Map Iteration
for(let key of map.keys()) console.log(key)
for(let key of map.values()) console.log(key)
map2.forEach((key,value)=>{console.log(key,value)});

let map3 = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
  ]);
  
  console.log( map3.get('1') );

  let obj={a:"hj",b:"mk"};
  let man=new Map(Object.entries(obj));
  console.log(man);

  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  
  
  console.log(prices.orange);

  let obj4=Object.fromEntries(map.entries());
  console.log(obj4);
  //object entries requires iterable onbject

  let set=new Set();
  set.add(4);
  set.add(3);
  set.add(4);
  console.log(set.size);

 set.forEach((value,valuecopy)=>console.log(value,valuecopy))