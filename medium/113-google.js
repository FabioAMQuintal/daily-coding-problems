/*
This problem was asked by Google.

Given a string of words delimited by spaces, reverse the words in string. For example, given "hello world here", return "here world hello"

Follow-up: given a mutable string representation, can you perform this operation in-place?
*/
var s = "hello world here";
var reverseArray = function (arr) {
    return arr.split(" ").reverse().join(" ");
};
console.log(reverseArray(s));
