"use strict";
exports.__esModule = true;
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value, left, right) {
        this.value = value;
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    BinaryTree.prototype.insert = function (value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BinaryTree(value);
            }
            else {
                this.left.insert(value);
            }
        }
        else {
            if (this.right === null) {
                this.right = new BinaryTree(value);
            }
            else {
                this.right.insert(value);
            }
        }
    };
    BinaryTree.prototype.preOrderTraversal = function (bt) {
        if (bt.left) {
            this.preOrderTraversal(bt.left);
        }
        console.log(bt.value);
        if (bt.right) {
            this.preOrderTraversal(bt.right);
        }
    };
    return BinaryTree;
}());
exports["default"] = BinaryTree;
