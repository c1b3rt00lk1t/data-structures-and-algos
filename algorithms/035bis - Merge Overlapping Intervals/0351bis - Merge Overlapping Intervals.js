function mergeOverlappingIntervals(array) {
    array.sort((a,b) => a[0] - b[0]);
    
    let currentIntervalStart = array[0][0];
    let currentIntervalEnd = array[0][1];
    let result = [];
    
    for (let i = 1; i < array.length; i++){
        if (array[i][0] > currentIntervalEnd) {
          result.push([currentIntervalStart,currentIntervalEnd]);
          currentIntervalStart = array[i][0];
        } 
        if (array[i][0] < currentIntervalStart){
          currentIntervalStart = array[i][0];
        }
        currentIntervalEnd = Math.max(array[i][1], currentIntervalEnd);
    }
    result.push([currentIntervalStart,currentIntervalEnd]);
  
    return result;
  }