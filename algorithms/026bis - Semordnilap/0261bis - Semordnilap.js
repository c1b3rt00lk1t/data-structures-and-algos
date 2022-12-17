function semordnilap(words) {
    const acc = {};
    const result = [];
  
    for (word of words){
      acc[[...word].reverse().join('')] ? 
        result.push([word, [...word].reverse().join('')]) : 
        acc[word] = true;
    }
  
    return result;
  }