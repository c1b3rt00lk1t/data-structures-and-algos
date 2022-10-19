function insertionSort(array) {
    for (let i = 1; i < array.length; i++){
      if(array[i] < array[i - 1]){
        let position = findPosition(array, i);
        insertInPosition(array, i, position);
      }
    }
    return array;
  }
  
  function findPosition(array, itemIndex){
    for(let j = 0; j < itemIndex; j++){
      if(array[j] > array[itemIndex]){
        return j;
      }
    }
    return itemIndex;
  }
  
  function insertInPosition(array, itemIndex , targetPosition){
    let item = array[itemIndex];
  
    for(let j = itemIndex; j > targetPosition; j--){
      array[j] = array[j - 1];
    }
  
    array[targetPosition] = item;
  }
  
