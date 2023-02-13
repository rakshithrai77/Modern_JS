class MainArray extends Array
{
    isEmpty()
    {
        return this.length===0
    }

    static get [Symbol.species]()
    {
        return Array;
    }
}

let array=new MainArray(1,2);
console.log(array.isEmpty())
let a=array.map(a=>a*2);
console.log(a.isEmpty())