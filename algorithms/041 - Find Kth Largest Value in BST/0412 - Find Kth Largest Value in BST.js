/**
 * Brute force recursive solution for kth largest value in BST
 * Time complexity: O(h + k)
 * Space complexity: O(h)
 */

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  /**
   * Returns the value of the kth node visited after the max is found
   * @param {BST} tree 
   * @param {number} k 
   * @returns number
   */
  function findKthLargestValueInBst(tree, k) {
    
    let numberOfVisitedNodes = 0;
    let lastValue;
    let kthLargestValue;
    let found = false;
  
    /**
     * Traverses the tree in reverse order kth times (after reaching the max node)
     * @param {BST} tree 
     */
    function traverseTreeInReverseOrder(tree){
      if (tree.right && !found) traverseTreeInReverseOrder(tree.right);
      lastValue = tree.value;
      if (++numberOfVisitedNodes === k) {
        found = true;
        kthLargestValue = lastValue;
      }
      if (tree.left && !found) traverseTreeInReverseOrder(tree.left);   
    }
    traverseTreeInReverseOrder(tree);
    return kthLargestValue;
  }
  