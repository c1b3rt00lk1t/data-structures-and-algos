function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
  
    while (end >= start){
      let middle = start + Math.floor((end - start) /2);
  
      if (array[middle] === target){
        return middle;
      } else if (array[middle] > target){
        end = middle - 1;
      } else if (array[middle] < target){
        start = middle + 1;
      }
    }
  
    return -1;
  }