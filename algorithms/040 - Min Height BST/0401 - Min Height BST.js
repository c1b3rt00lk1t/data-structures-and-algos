function minHeightBst(array) {
  
    const center = Math.floor(array.length*0.5);
    const right = Math.floor(array.length*0.75);
    const left = Math.floor(array.length*0.25);
    
    const tree = new BST(array[center]);
  
    if (left < center){
      tree.left = minHeightBst(array.slice(0,center));
    }
    if (right > center){
      tree.right = minHeightBst(array.slice(center + 1, array.length));
    }
  
    return tree;
  }
  