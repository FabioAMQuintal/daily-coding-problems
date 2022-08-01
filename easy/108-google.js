/*
This problem was asked by Google.

Given two strings A and B, return whether or not A can be shifted some number of times to get B.

For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.
*/
var x = 'abcde';
var y = 'cdeab';
var w = 'abc';
var z = 'acb';
var validString = function (a, b) {
    var arrA = a.split("");
    for (var i = 0; i < arrA.length; i++) {
        var last = arrA.pop();
        //due to ts inference
        last === undefined ? arrA.unshift("") : arrA.unshift(last);
        var temp = arrA.join("");
        if (temp === b) {
            return true;
        }
    }
    return false;
};
console.log(validString(x, y));
console.log(validString(w, z));
