
class BinaryTree {
    value: number;
    left: BinaryTree;
    right: BinaryTree;
    constructor(value: number, left?, right?){
        this.value = value;
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }

    insert(value: number){
        if(value < this.value){
            if(this.left === null){
                this.left = new BinaryTree(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if(this.right === null){
                this.right = new BinaryTree(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    preOrderTraversal(bt: BinaryTree){
        if(bt.left){
            this.preOrderTraversal(bt.left);
        }
        console.log(bt.value)
        if(bt.right){
            this.preOrderTraversal(bt.right)
        }
    }

}

export default BinaryTree;