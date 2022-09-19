function twoNumberSum(array, targetSum) {
  // Hash table approach
  // O(n) time / O(n) space
  
  // const hash = [];
  // for (let i = 0; i < array.length; i++){
  //     if (hash.includes(targetSum - array[i])){
  //       return [array[i],targetSum - array[i]]
  //     } else {
  //       hash.push(array[i]);
  //     }
  // }
  //  return [];

  // One-liner for the hash table approach with reduce
  return array.reduce((acc, b) => acc.hash.includes(targetSum - b) ? {...acc, result: [b, targetSum - b]} : {...acc, hash: acc.hash.concat(b)} , {result:[], hash: []}).result;


}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
