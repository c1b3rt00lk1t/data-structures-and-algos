function isMonotonic(array) {
    let nonIncreasing = true;
    let nonDecreasing = true;
      
    for (let i = 1; i < array.length && (nonIncreasing || nonDecreasing) ; i++) {
        nonIncreasing = array[i] <= array[i - 1] && nonIncreasing;
        nonDecreasing = array[i] >= array[i - 1] && nonDecreasing;
    }
  
    return nonIncreasing || nonDecreasing;
   
  }