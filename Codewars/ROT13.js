/*  ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation*/

function rot13(message){
    //your code her
    let str='' , char='';
    console.log(message)
    for(let i=0;i<message.length;i++)
      {
        char=message[i];
        if((/[a-zA-Z]/).test(message[i])){
              if(message[i]===message[i].toLowerCase())
                char=convert(message[i]);
              else{
                char=convert(message[i].toLowerCase());
                char=char.toUpperCase();
              }
        }
        str=str+char;
       }
    return str;
    }
  
  function convert(message){
      return message.charCodeAt()+13 <= 122 ? String.fromCharCode(message.charCodeAt()+13) : String.fromCharCode(96+ (13-122+message.charCodeAt()))}
  