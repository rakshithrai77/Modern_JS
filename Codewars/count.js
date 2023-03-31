function count(string) {
    let count={};
    for(let i=0;i<string.length;i++) 
        string[i] in count? count[string[i]]+=1:count[string[i]]=1;
    return count;
  }