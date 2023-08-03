class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array) {
        let current;
        // the complexity is overcome with a helper structure "queue"
        const queue = [this];

        while (queue.length){
            current = queue.pop();
            array.push(current.name);
            current.children.forEach( child => queue.unshift(child));
        }
        
        return array;
    }

  }

  
 module.exports = Node;