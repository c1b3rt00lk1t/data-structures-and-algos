function sortedSquaredArray(array) {
    // O(Nlog(N)) because it has to sort the resulting array
    return array.map(a => a*a).sort((a,b) =>a-b)
  }
  
  
  exports.sortedSquaredArray = sortedSquaredArray;
  