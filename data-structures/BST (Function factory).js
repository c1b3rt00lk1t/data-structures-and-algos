const createNode = (value) => ({
    value,
    left: null,
    right: null,
    }
)

const createBinarySearchTree = (root = null) => ( {
    root: {value: root, left: null, right: null},
    insert(value) {
        const node = createNode(value);
        
        if (this.root === null){
            this.root = node;
            return this;
        } else {
            let current = this.root;
            while(value != current.value){
                if( value > current.value){
                    if (current.right){
                        current = current.right;
                    } else {
                        current.right = node;
                        return this;
                    }
                } else {
                    if (current.left){
                        current = current.left;
                    } else {
                        current.left = node;
                        return this;
                    }
                }
            }
        }
    },

    find(value){
        if(this.root === null){
            return false;
        }
        let current = this.root
        while(current && value != current.value){
            if(value > current.value){
                current = current.right;
            } else {
                current = current.left;
            }
        }
        if(!current){
            return false;
        } else {
            return current;
        }
    },

     contains(value) {
    if (value === this.root.value){
      return true;
    } else {
      let currentNode = this.root;
      while (currentNode.value !== value){
        if(currentNode.value > value){
          if(!currentNode.left) return false;
          currentNode = currentNode.left;
        } else {
          if(!currentNode.right) return false;
          currentNode = currentNode.right;
        }        
      }
      return true;
    }    
  },

  removeBranch(value) {
    if (this.root && (this.root.left || this.root.right)){
      let previousNode = null;
      let currentNode = this.root;
      let previousMove = null;
      
      while (currentNode){
        if(currentNode.value > value){
          previousNode = currentNode;
          currentNode = currentNode.left;
          previousMove = 0;
        } else if(currentNode.value < value){
          previousNode = currentNode;
          currentNode = currentNode.right;
          previousMove = 1;
        } else {
          if(!previousMove){
            previousNode.left = null;
          } else {
            previousNode.right = null;
          }
          return this;
        }
      }

    }
  }
 
   
})

const tree = createBinarySearchTree()