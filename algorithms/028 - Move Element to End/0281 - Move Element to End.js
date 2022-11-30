function moveElementToEnd(array, toMove) {
    let firstToMove;
    for (let i = 0; i < array.length; i++){
      if (firstToMove === undefined && array[i] === toMove){
        firstToMove = i;
      } else if (firstToMove !== undefined && array[i] !== toMove){
        [array[firstToMove], array[i]] = [array[i], array[firstToMove]];
        firstToMove++;      
      }
    }
    return array;
  }