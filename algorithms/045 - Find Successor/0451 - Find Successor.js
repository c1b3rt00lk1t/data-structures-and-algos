class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
  function findSuccessor(tree, node) {
    
    const inOrderElements = [];
    function inOrderTraverse (tree) {
      // check left
      tree.left && inOrderTraverse(tree.left);
      // visit
      inOrderElements.push(tree)
      // check right
      tree.right && inOrderTraverse(tree.right);
    }
    inOrderTraverse(tree);
   
    return inOrderElements.filter((a, i, arr) => i > 0 && arr.at(i - 1).value === node.value)[0];
  }
  
  
  