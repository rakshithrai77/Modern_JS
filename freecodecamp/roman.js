function convertToRoman(num) {
 
    let roman={1000:'M',900:'CM',500:'D',400:'CD',90:'XC',50:'L',40:'XL',100:'C',10:'X',9:'IX',5:'V',4:'IV',1:'I'};
    let map=new Map(Object.entries(roman))
    let array=Object.keys(roman).map((value)=>Number(value))
    let str=''
    while(num>0)
    {
      if((num>=array[array.length-1]) ){
         str+=map.get(String(array[array.length-1]))
         num-=array[array.length-1];}
     else {
      for( let i=0;i<array.length;i++)
       if(num<array[i])
       {
         str+=map.get(String(array[i-1]))
         num-=array[i-1];
         break;
       }
    }
 }
   return str
 }
 
 convertToRoman(798);