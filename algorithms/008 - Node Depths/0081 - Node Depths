function nodeDepths(root) {
  return getDepth(root, 0);  
}

// recursive solution
// Time: O(N)
// Space: O(N)
function getDepth(node, depth){
  if (!node) {
    return 0;
  } 
  return depth + getDepth(node.left,depth + 1) + getDepth(node.right,depth + 1);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

