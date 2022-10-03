class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value) {

        const node = new Node(value);
        
        if (this.root === null){
            this.root = node;
            return this;
        } else {
            let prev = this.root;
            while(true){

                if( value > prev.value){
                    if (prev.right){
                        prev = prev.right;
                    } else {
                        prev.right = node;
                        return this;
                    }
                    
                } else {
                    if (prev.left){
                        prev = prev.left;
                    } else {
                        prev.left = node;
                        return this;
                    }
                    
                }
                
                
                
            }
        }
    }
}

const tree = new BinarySearchTree(10)