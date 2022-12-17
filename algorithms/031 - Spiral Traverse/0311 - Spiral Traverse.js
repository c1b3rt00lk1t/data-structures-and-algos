function spiralTraverse(array) {
    const spiralItems = [];
    
    let startingRow = 0;
    let endingRow = array.length - 1;
    let startingColumn = 0;
    let endingColumn = array[0].length - 1;
  
    while (startingColumn <= endingColumn && startingRow <= endingRow ){
      console.log(startingColumn,endingColumn,startingRow,endingRow)
      for (let i = startingColumn; i <= endingColumn; i++){
        spiralItems.push(array[startingRow][i]);
      }
  
      for (let i = startingRow + 1; i <= endingRow; i++){
        spiralItems.push(array[i][endingColumn]);
      }
  
      for (let i = endingColumn - 1; i >= startingColumn && startingColumn < endingRow; i--){
        spiralItems.push(array[endingRow][i]);
      }
  
      for (let i = endingRow - 1; i >= startingRow + 1 && startingColumn < endingColumn; i--){
        spiralItems.push(array[i][startingColumn]);
      }
  
      startingColumn++;
      startingRow++;
      endingColumn--;
      endingRow--;
      
     
    }
  
    return spiralItems;  
  }