function findClosestValueInBst(tree, target, closest = Infinity ) {
    // Recursive solution
    // Time avg: O(log(N)) 
    // Time worst: O(N) time
    // Space avg: O(log(N)) 
    const currentMinorThan = tree.value < target;
    const toCurrent = Math.abs(tree.value - target);
    const toCurrentClosest = Math.abs(closest - target);
  
    // Edge case, if the distance is 0 it obviously will no be another closest
    if(toCurrentClosest === 0){
      return closest;  
    }
    
    // If the current is closest than the previous, we take the current
    if(toCurrent < toCurrentClosest){
      closest = tree.value;
    }
  
    // Depending if the target is greater or minor than the current, we go left or right in the tree
    if(currentMinorThan && tree.right){
      closest = findClosestValueInBst(tree.right, target, closest)
    } else if (tree.left) {
      closest = findClosestValueInBst(tree.left, target, closest)
    }
    
    return closest;  
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  