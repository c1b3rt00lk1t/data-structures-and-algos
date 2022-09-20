function sortedSquaredArray(array) {
    // O(n) complexity because it does not sort again the resulting array
    let right = array.length -1;
    let left = 0;
    let index = right;
    const output = Array.from({length: array.length}, v => 0);
  
    while (right >= left){
      if (Math.abs(array[right]) > Math.abs(array[left])){
        output[index] = Math.pow(+array[right],2);
        --right;     
      } else {
        output[index] = Math.pow(+array[left],2);
        ++left;    
      }
      --index;
    }
    return output;
  }
  
  
  exports.sortedSquaredArray = sortedSquaredArray;