class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function binaryTreeDiameter(tree) {
    const [diameter] = binaryTreeDiameterHelper(tree)
    return diameter ;
  }
  
  function binaryTreeDiameterHelper(tree) {
  
    if (!tree.left && !tree.right){
      return [0,1];
    }
  
    let [leftDiameter, leftPath] = tree.left ? binaryTreeDiameterHelper(tree.left) : [0,0];
    let [rightDiameter, rightPath] = tree.right ? binaryTreeDiameterHelper(tree.right) : [0,0];
    
    const diameter = Math.max(leftDiameter, rightDiameter, leftPath + rightPath);
    const path = Math.max(leftPath, rightPath) + 1;
    return [diameter, path];
  }