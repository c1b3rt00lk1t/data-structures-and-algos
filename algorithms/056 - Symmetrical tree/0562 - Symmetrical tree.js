class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  
  function symmetricalTree(tree) {
    return areMirrorTrees(tree.left, tree.right);
  }
  
  function areMirrorTrees(tree1, tree2) {
    if(!tree1) return !tree2 && true;
    if(!tree2) return !tree1 && true;
  
    const firstStep = areMirrorTrees(tree1.left, tree2.right);
    const secondStep = tree1.value === tree2.value;
    const thirdStep = areMirrorTrees(tree1.right, tree2.left);
    
    return firstStep && secondStep && thirdStep;
  }