class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function heightBalancedBinaryTree(tree) {
    if(!tree) return true;
    const leftHeight = treeHeight(tree.left);
    const rightHeight = treeHeight(tree.right);
    const isHeightBalanced = Math.abs(leftHeight - rightHeight) <= 1;
    // early termination in case one node is not height balanced
    return !isHeightBalanced ? false : heightBalancedBinaryTree(tree.left) && heightBalancedBinaryTree(tree.right)
  }
  
  function treeHeight(tree){
    if(!tree) return 0;
    const leftHeight = treeHeight(tree.left);
    const rightHeight = treeHeight(tree.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
  