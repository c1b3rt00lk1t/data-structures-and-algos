// Time: O(N^2)
// Space: O(1)
function selectionSort(array) {
    let idxMin = 0;
    for(let i = 0; i < array.length; i++){
      idxMin = i;
      for(let j = i; j < array.length; j++){
        idxMin = array[idxMin] > array[j] ? j : idxMin;
      }
      [array[idxMin],array[i]] = [array[i],array[idxMin]];
      
    }
    return array;
  }
  