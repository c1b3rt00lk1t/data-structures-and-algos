class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function evaluateExpressionTree(tree) {
    return helperOperator(
      tree.left.value > 0 ? tree.left.value : evaluateExpressionTree(tree.left),
      tree.right.value > 0 ? tree.right.value : evaluateExpressionTree(tree.right),
      tree.value
    )
  }
  
  function helperOperator(left, right, operator){
    if (operator === -4){
      return left * right;
    } 
    else if (operator === -3){
      return Math.trunc(left / right) ;
    } 
    else if (operator === -2){
      return left - right;
    } 
    else if (operator === -1){
      return left + right;
    }
    
  }