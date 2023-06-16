class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  
  function splitBinaryTree(tree) {
  
    let foundSplit = false;
    let targetSum;
    
    const totalSum = traverse(tree);
  
    // If the total sum is odd, there is no possible split
    if (totalSum % 2 !== 0) return 0;
  
    // If there is only one node, there is no possible split
    if (!tree.left && !tree.right) return 0;
  
    targetSum = totalSum / 2;
    
  
    function traverse(node) {
      if (!node || foundSplit) return 0;
  
      const nodeSum = node.value + traverse(node.left) + traverse(node.right);
  
      if (nodeSum === targetSum) {
        foundSplit = true;
        return targetSum;
      }
  
      return nodeSum;
    }
  
    traverse(tree);
  
    return foundSplit ? targetSum : 0;
  }
  