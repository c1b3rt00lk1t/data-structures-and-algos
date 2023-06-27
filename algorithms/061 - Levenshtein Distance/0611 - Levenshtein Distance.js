function levenshteinDistance(str1, str2) {

    const rowCreation = (_,i) => Array.from({length: str1.length + 1}, (_,j) => j === 0 ? i : j);
    const edits = Array.from({length: str2.length + 1}, rowCreation);
    
    for (let i = 1; i < str2.length + 1; i++){
      for (let j = 1; j < str1.length + 1; j++){
          if (str2[i - 1] === str1[j - 1]) {
              edits[i][j] = edits[i - 1][j - 1];
          } else {
              edits[i][j] = 1 + Math.min(edits[i][j-1], edits[i-1][j], edits[i-1][j-1]);
          }
      }  
    }
  
    return edits[str2.length][str1.length];
  
    
  }