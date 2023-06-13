class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  exports.BinaryTree = BinaryTree;
  
  function mergeBinaryTrees(tree1, tree2) {
    if(!tree1) return tree2;
    if(!tree2) return tree1;
    
    const tree = new BinaryTree(tree1.value + tree2.value);
    tree.left = mergeBinaryTrees(tree1.left, tree2.left);
    tree.right = mergeBinaryTrees(tree1.right, tree2.right);
    return tree;
  }