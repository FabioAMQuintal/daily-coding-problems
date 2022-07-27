/*
This problem was asked by Microsoft.

Print the nodes in a binary tree level-wise. For example, the following should print 1, 2, 3, 4, 5.

  1
 / \
2   3
   / \
  4   5
*/

import BinaryTree from '../helpers/binary-tree/binarytree';

const bt = new BinaryTree(1);
bt.insert(3);
bt.insert(2);
bt.insert(5);
bt.insert(4);

bt.preOrderTraversal(bt);