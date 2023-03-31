function flatten(...arra){
    let flatten1=[];
    for( let i=0;i<arra.length;i++)
        {
            Array.isArray(arra[i]) ? flatten1=[...flatten1,...flatten(...arra[i])] : flatten1.push(arra[i]);
        }
        return flatten1
    }