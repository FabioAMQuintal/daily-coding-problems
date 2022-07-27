/*
Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

import BinaryTree from "../helpers/binary-tree/binarytree";

const bt = new BinaryTree(3);
for(let i=0; i<10; i++){
    bt.insert(Math.floor(Math.random() * 10))
}

const serializeIntoString = (bt: BinaryTree) => {
    let final = '';

    const preOrder = (bt: BinaryTree) => {
        if(bt == null){
            final += "#, "
            return;
        }
        final += bt.value.toString() + ', ';
        preOrder(bt.left)
        preOrder(bt.right)
    }
    
    preOrder(bt)
    return final;
}

console.log(serializeIntoString(bt))

