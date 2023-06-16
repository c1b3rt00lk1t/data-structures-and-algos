function maxSubsetSumNoAdjacent(array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];
    
    // Create an auxiliary array to store the maximum sums
    const maxSums = new Array(array.length);
    
    maxSums[0] = array[0];
    maxSums[1] = Math.max(array[0], array[1]);
    
    // Calculate the maximum sum for each position
    for (let i = 2; i < array.length; i++) {
      maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
    }
    
    return maxSums[array.length - 1];
  }
  