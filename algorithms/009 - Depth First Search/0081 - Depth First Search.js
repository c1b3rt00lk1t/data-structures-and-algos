
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      array = getChildrenDepthFirst(this);
      return array;
    }
  }
  
  const getChildrenDepthFirst = (currentNode) => {
    return !currentNode.children.length ? 
              currentNode.name : 
              [currentNode.name,...currentNode.children.flatMap(child => getChildrenDepthFirst(child))]
  }
  
