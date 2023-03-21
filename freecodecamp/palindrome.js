function palindrome(str) {
    let str1=[];
    for(let i=0;i<str.length;i++)
    {
      if((/[a-zA-Z0-9]/).test(str[i]))
      {
        str1+=str[i].toLowerCase()
      }
    }
   
   return (str1.split('').reverse().join('')===str1)
  }
  
  palindrome("A man, a plan, a canal. Panama");