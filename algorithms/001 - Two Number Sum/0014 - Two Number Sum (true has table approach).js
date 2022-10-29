function twoNumberSum(array, targetSum) {
    // O(n) time / O(n) space
    // One-liner JS for the hash table approach with reduce
    return array.reduce((acc, b) => acc[targetSum - b] ? {...acc, result: [targetSum - b, b]} : {...acc, [b]: true} , {result:[]}).result;
  
  }