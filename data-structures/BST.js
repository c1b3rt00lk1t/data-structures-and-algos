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
    }

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
    }
}

const tree = new BinarySearchTree()