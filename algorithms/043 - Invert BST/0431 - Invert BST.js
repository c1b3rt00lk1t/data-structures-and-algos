function invertBinaryTree(tree) {
    swapNodes(tree);
    if(tree.left) invertBinaryTree(tree.left);
    if(tree.right) invertBinaryTree(tree.right);
  }
  
  const swapNodes = (node) => {
    [node.left, node.right] = [node.right, node.left];
  }