function isMonotonic(array) {
    if (array.length <= 1) {
      return true;
    }
  
    const checkMonotony = (acc, b, i, arr) => {
      if(i > 0) {
        acc.nonIncreasing = arr[i] >= arr[i - 1] && acc.nonIncreasing;
        acc.nonDecreasing = arr[i] <= arr[i - 1] && acc.nonDecreasing;
      }  
      return acc;
    }
    
    const {nonIncreasing, nonDecreasing} = array.reduce( checkMonotony, {nonIncreasing: true, nonDecreasing: true});
  
    return nonIncreasing || nonDecreasing;
  }