// Time: 0(N^2)
// Space: O(1)
function bubbleSort(array) {
    let isSorted = false;
    let iterations = 0;
    while (!isSorted){
      isSorted = true;
      // for every iteration the traversal of the array can be reduced by one
      for (let i = 0; i < array.length - 1 - iterations; i++){
        if (array[i] > array[i + 1]){
          [array[i],array[i + 1]] = [array[i + 1],array[i]]; 
        }
        isSorted = false;      
      }
      iterations++;
    }
    return array;
  }
  