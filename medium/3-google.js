"use strict";
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
exports.__esModule = true;
var binarytree_1 = require("../helpers/binary-tree/binarytree");
var bt = new binarytree_1["default"](3);
for (var i = 0; i < 10; i++) {
    bt.insert(Math.floor(Math.random() * 10));
}
var serializeIntoString = function (bt) {
    var final = '';
    var preOrder = function (bt) {
        if (bt == null) {
            final += "#, ";
            return;
        }
        final += bt.value.toString() + ', ';
        preOrder(bt.left);
        preOrder(bt.right);
    };
    preOrder(bt);
    return final;
};
console.log(serializeIntoString(bt));
