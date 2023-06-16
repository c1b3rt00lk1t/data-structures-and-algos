function maxSubsetSumNoAdjacent(array) {
    if (array.length === 0 ) return 0;
    if (array.length === 1) return array[0];
    if (array.length === 2) return Math.max(array[0], array[1]);
    if (array.length === 3) return Math.max(array[0] + array[2], array[1]);
      
    return Math.max(
      array[0] + maxSubsetSumNoAdjacent(array.slice(2)),
      array[1] + maxSubsetSumNoAdjacent(array.slice(3))
    )
  }