"use strict";
/*
This problem was asked by Microsoft.

Print the nodes in a binary tree level-wise. For example, the following should print 1, 2, 3, 4, 5.

  1
 / \
2   3
   / \
  4   5
*/
exports.__esModule = true;
var binarytree_1 = require("../helpers/binary-tree/binarytree");
var bt = new binarytree_1["default"](1);
bt.insert(3);
bt.insert(2);
bt.insert(5);
bt.insert(4);
bt.preOrderTraversal(bt);
console.log('oi');
