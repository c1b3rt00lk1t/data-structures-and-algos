class BST {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function reconstructBst(preOrderTraversalValues) {
    const tree = new BST(preOrderTraversalValues[0]);
    tree.insert = function(value){
      let node = this;
      while(true){
          if(value < node.value){
            if(node.left){
              node = node.left;
            } else {
              node.left = new BST(value);
              break;
            }            
          } else {
            if(node.right){
              node = node.right;
            } else {
              node.right = new BST(value);
              break;
            }
          }     
      }
      
    }
  
    for (let i = 1; i < preOrderTraversalValues.length; i++){
      tree.insert(preOrderTraversalValues[i]);
    }
    
    return tree;
  }