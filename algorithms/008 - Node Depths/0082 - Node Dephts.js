
// One-liner recursive solution
// Time: O(N)
// Space: O(N)
function nodeDepths(root, depth = 0) {
    return root ? depth + nodeDepths(root.left,depth + 1) + nodeDepths(root.right,depth + 1) : 0;
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }