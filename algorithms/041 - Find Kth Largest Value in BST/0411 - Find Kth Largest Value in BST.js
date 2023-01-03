/**
 * Brute force recursive solution for kth largest value in BST
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  /**
   * Returns the -k position of a sorted array representing
   * the BST, which corresponds to the kth largest value 
   * @param {BST} tree 
   * @param {number} k 
   * @returns number 
   */
  function findKthLargestValueInBst(tree, k) {
    /**
     * Traverses the BST in order and pushes the node values
     * into the arrayTreevariable
     * @param {BST} tree 
     */
    function traverseTreeInOrder(tree){
        if (tree.left) traverseTreeInOrder(tree.left);
        arrayTree.push(tree.value);
        if (tree.right) traverseTreeInOrder(tree.right);
       }

    const arrayTree = [];
    traverseTreeInOrder(tree);
    return arrayTree.at(-k);
  }
  
  