class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if(!this.value){
        this.value = value;
      } else {
          let currentNode = this;
          while (true){
            if(currentNode.value > value){
              if(!currentNode.left){
                currentNode.left = new BST(value);
                break
              } else {
                 currentNode = currentNode.left;
              }          
            } else {
              if(!currentNode.right){
                currentNode.right = new BST(value);
                break
              } else {
                 currentNode = currentNode.right;
              }  
            }
          }
      }
      return this;
    }
  
    contains(value) {
      let currentNode = this;
      while (currentNode.value !== value){
        if(currentNode.value > value){
          if(!currentNode.left) {return false};
          currentNode = currentNode.left;
        } else {
          if(!currentNode.right) {return false};
          currentNode = currentNode.right;
        }
      }
      return true;    
    }
  
    remove(value, parentNode = null ) {
      let currentNode = this;
      while (currentNode){
          if(currentNode.value > value){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if (currentNode.value < value){
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else {
            currentNode.switchNodes(currentNode,parentNode);
            break;
          }
        
      }
      return this;
    }
  
    switchNodes(currentNode,parentNode){
      const leftNodeExists = !!currentNode.left;
      const rightNodeExists = !!currentNode.right;
  
      if(leftNodeExists && rightNodeExists){
        currentNode.value = currentNode.right.getMinValue();
        currentNode.right.remove(currentNode.value, currentNode )
      } else if (!parentNode){
        if(leftNodeExists){
          currentNode.value = currentNode.left.value;
          currentNode.right = currentNode.left.right;
          currentNode.left = currentNode.left.left;
        } else if (rightNodeExists) {
          currentNode.value = currentNode.right.value;
          currentNode.left = currentNode.right.left;
          currentNode.right = currentNode.right.right;
        } else {
          
        }
      } else if(parentNode.left === currentNode){
          parentNode.left = leftNodeExists ? currentNode.left : currentNode.right;
      } else if(parentNode.right === currentNode){
          parentNode.right = leftNodeExists ? currentNode.left : currentNode.right;
      } 
    }
  
    
    getMinValue(){
      let currentNode = this;
      while(currentNode.left){
        currentNode = currentNode.left;  
      }
      return currentNode.value;    
    }
  }
  
  