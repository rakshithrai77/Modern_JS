function checkCashRegister(price, cash, cid) {
    let currency=[0.01,0.05,0.1,0.25,1,5,10,20,100];
    let change={};
    let left=cash-price;
    let changetrack=[];
    let map=new Map(cid);
                      for(let i=cid.length-1;i>=0;i--)
                      {
                        if(cid[i][1]>0 && currency[i]<=left)
                        {
                          let track=left;
                          console.log(currency[i])
                          for(let j=1;(currency[i]<=left && cid[i][1]>0 && left>=0);j++){
                            left-=currency[i];
                            cid[i][1]-=currency[i];
                            cid[i][1]=cid[i][1].toFixed(2)
                            left=Number(left.toFixed(2))
                            console.log(left,cid[i])}   
  
                      changetrack.push([cid[i][0],Number((track-left).toFixed(2))])
                      map.set(cid[i][0],cid[i][1])
                      }}
  
                      if(left!=0)
                      {change.status='INSUFFICIENT_FUNDS';change['change']=[]}
                     else if(left==0 && changetrack.length==1 && map.get(changetrack[0][0])==0)
                     {
                        change.status='CLOSED';
                        map.set(changetrack[0][0],changetrack[0][1]);
                        let copy=Object.fromEntries(cid)
                        copy[changetrack[0][0]]=map.get(changetrack[0][0])
                        change['change']=Object.entries(copy);
                     }
                      else{
                        change.status='OPEN';change['change']=changetrack}
     console.log(change)
     return change
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);