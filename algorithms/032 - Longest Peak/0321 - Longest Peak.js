function longestPeak(array) {
  let peakCount = 1;
  let peakMaxLength = 0;
  let previousDirection = 0;


  for (let i = 1; i < array.length; i++){
    if(array[i] > array[i - 1]){
      if (previousDirection === -1){
        if (peakCount > 2) {
            peakMaxLength = peakCount > peakMaxLength ? peakCount : peakMaxLength;
        }
        peakCount = 2;
        previousDirection = 1;
      }
      else {
        ++peakCount;
        previousDirection = 1;
      }
    } 
    else if (array[i] < array[i - 1]){
        if (previousDirection === 1 || (previousDirection === -1 && peakCount > 1)){
          ++peakCount;
          previousDirection = -1;
        } 
        else {
          peakCount = 1;
          previousDirection = -1;
        }        
    } 
    else {
      if (peakCount > 2 && previousDirection === -1) {
            peakMaxLength = peakCount > peakMaxLength ? peakCount : peakMaxLength;
      }
      peakCount = 1;
      previousDirection = 0;
    }
  }
  if (peakCount > 2 && previousDirection === -1) {
            peakMaxLength = peakCount > peakMaxLength ? peakCount : peakMaxLength;
  }
  return peakMaxLength;
}