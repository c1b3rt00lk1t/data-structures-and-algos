class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
  function findSuccessor(tree, node) {
    if (node.right) {
      return findLeftmostChild(node.right);
    } else {
      return findRightmostParent(node);
    }
  }
  
  function findLeftmostChild(tree) {
    let currentNode = tree;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
  
  function findRightmostParent(node) {
    let currentNode = node;
    while (currentNode.parent && currentNode.parent.right === currentNode) {
      currentNode = currentNode.parent;
    }
    return currentNode.parent;
  }
  