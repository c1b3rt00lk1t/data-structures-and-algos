function kadanesAlgorithm(array) {
    let maxSum = -Infinity;
    let maxSubSum = -Infinity;
  
    for (let i = 0; i < array.length; i++){
      maxSubSum = Math.max(maxSubSum + array[i], array[i]);
      maxSum = Math.max(maxSum, maxSubSum);
    }
  
    return maxSum;
  }
  