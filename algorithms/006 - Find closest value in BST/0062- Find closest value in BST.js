function findClosestValueInBst(tree, target, closest = Infinity ) {
  // Iterative solution
  // Avg: Time O(log(N)), O(1)
  // Worst: Time O(N), O(1)
  let currentNode = tree;

  while (currentNode){
    const currentMinorThan = currentNode.value < target;
    const toCurrent = Math.abs(currentNode.value - target);
    const toCurrentClosest = Math.abs(closest - target);
    
    if(toCurrent < toCurrentClosest){
      closest = currentNode.value;
    }
  
    if(currentMinorThan && currentNode.right){
      currentNode = currentNode.right;
    } else if (currentNode.left) {
      currentNode = currentNode.left;
    } else{
      return closest;
    }
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

  