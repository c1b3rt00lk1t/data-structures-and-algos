function twoNumberSum(array, targetSum) {
    // Brute force approach with two loops
    // O(n^2) time / O(1) space
    for (let i = 0; i < array.length; i++){
      for (let j = i + 1; j < array.length; j++ ){
         if ( array[i] + array[j] === targetSum){
           return [array[i], array[j]];
         } 
      } 
    }
  
    return [];
  
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;