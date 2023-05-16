class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
  function middleNode(linkedList) {
    if (!linkedList.next) return linkedList;
    
    let currentNode = linkedList;
    const nodeArray = [];
    
    while (currentNode.next){    
      nodeArray.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodeArray[Math.round(nodeArray.length/2)];
  }
  