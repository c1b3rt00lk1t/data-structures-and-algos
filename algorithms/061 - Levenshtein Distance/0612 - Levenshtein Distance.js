function levenshteinDistance(str1, str2) {
    // Matrix with additional row and column with sequential numeration
    const rowCreation = (_,i) => Array.from({length: str1.length + 1}, (_,j) => j === 0 ? i : j);
    const edits = Array.from({length: str2.length + 1}, rowCreation);
  
    // Levenshtein logic
    const isAddedCell = (i,j) => i === 0 || j === 0
    const levenshteinMap = (acc, i, j) => isAddedCell(i,j) ? acc[i][j] 
                                                           : str2[i - 1] === str1[j - 1] ? acc[i - 1][j - 1]
                                                           : 1 + Math.min(acc[i][j-1], acc[i-1][j], acc[i-1][j-1]);
  
    // The edits matrix is reduced. The only meaningful elements in this reduction are the coordinates and the accumulator
    // The accumulator starts being a matrix with same content than the original edits
    // For each coordinate, the value is calculated with the levenshteinMap function, stored in acc and the whole acc is returned
    const editsMapped = edits.reduce( 
      (acc,_,i) => _.reduce( (x,_, j) => {
              acc[i][j] = levenshteinMap(acc,i,j);
              return acc;
          }, 0)
      ,[...edits]);
  
    // The function only has to return the last cell of the resulting matrix
    return editsMapped.at(-1).at(-1);
  
  }