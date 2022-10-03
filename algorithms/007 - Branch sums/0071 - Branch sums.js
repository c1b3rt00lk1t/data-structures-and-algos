// recursive solution with side effects
// Time: O(N)
function branchSums(root) {
    const sums = [];
  
    concatSums(root, 0, sums);
  
    return sums;
  }
  
  
  function concatSums(tree,previousSum, sums){
    const currentSum = previousSum + tree.value;
    
    if(!tree.left && !tree.right){
      sums.push(currentSum)
    }
  
    tree.left && concatSums(tree.left, currentSum,sums);
    tree.right && concatSums(tree.right, currentSum,sums);
  
  }
  
  
  // This is the class of the input root.
  // Do not edit it.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  