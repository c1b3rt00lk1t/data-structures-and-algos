function transposeMatrix(matrix) {
    const height = matrix.length;
    const width = matrix[0].length;
  
    const output = [];
    
    for (let i = 0; i < width; i++){
      const arr = [];
      
      for (let j = 0; j < height; j++){
            arr.push(matrix[j][i]);
      }
      output.push(arr);
    }
    
    return output;
  }