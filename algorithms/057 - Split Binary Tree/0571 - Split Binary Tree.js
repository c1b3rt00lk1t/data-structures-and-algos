class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
 
function splitBinaryTree(tree) {
    const totalSum = sumBinaryTree(tree);
    // If the total sum is odd, there is no possible split
    if(totalSum % 2 !== 0) return 0;
    // If there is only one node, there is no possible split
    if (!tree.left && !tree.right) return 0;
    const targetSum = totalSum / 2;
  
    const treeStack = [];
    treeStack.pushNode = function(node) {
      if(node){
        node.left && this.push(node.left);
        node.right && this.push(node.right);
      }
    }
    treeStack.pushNode(tree);
  
    while (treeStack.length > 0) {
      const node = treeStack.pop();
      if (targetSum === sumBinaryTree(node)) return targetSum;
      treeStack.pushNode(node);
      
    }
    
    return 0;
  }
  
  
  function sumBinaryTree(tree){
    if(!tree) return 0;
    return tree.value + sumBinaryTree(tree.left) + sumBinaryTree(tree.right);
  }