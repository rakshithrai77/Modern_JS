function rot13(str) {
    let str1='';
    for(let i=0;i<str.length;i++)
    {
      if((/[a-zA-Z]/).test(str[i])){
         if((str[i].charCodeAt(0)+13)>90)
          str1+=String.fromCharCode(str[i].charCodeAt(0)+19).toUpperCase()  
         else
          str1+=String.fromCharCode(str[i].charCodeAt(0)+13)
      }
      else
        str1+=str[i]
    }
   return str1
  }
  
  rot13("SERR CVMMN!");